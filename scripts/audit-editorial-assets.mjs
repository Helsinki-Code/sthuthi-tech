import { readFile } from 'node:fs/promises'
import { execFileSync } from 'node:child_process'
import { createHash } from 'node:crypto'
import { createRequire } from 'node:module'
import assert from 'node:assert/strict'

const runtime = process.env.STHUTHI_MEDIA_RUNTIME
if (!runtime) throw new Error('Set STHUTHI_MEDIA_RUNTIME to the bundled Node package directory.')
const require = createRequire(`${runtime}/package.json`)
const sharp = require('sharp')
const hash = (bytes) => createHash('sha256').update(bytes).digest('hex')
const blog = JSON.parse(await readFile('public/blog/image-manifest.json', 'utf8'))
const certificates = JSON.parse(await readFile('public/clients/certificates/manifest.json', 'utf8'))
const baseline = JSON.parse(execFileSync('git', ['show', '161c9ce:public/blog/image-manifest.json'], { encoding: 'utf8' }))
const registryText = (await readFile('src/lib/blog-images.ts', 'utf8')) + (await readFile('src/lib/blog-images-followup.ts', 'utf8'))
const expectedCounts = { 'claude-code-certification': 3, 'codex-certification': 3, 'microsoft-copilot-certification': 3, 'cursor-certification': 2, 'gemini-certification': 3, 'usage-vs-proficiency': 3, 'ai-code-vulnerabilities': 4, 'vibe-coding-tax': 2, 'business-case-for-certification': 3, 'self-assessment-accuracy': 2, 'custom-certification-cost': 3 }
assert.equal(blog.images.length, 42, '11 featured plus 31 inline images')
const paths = new Set()
for (const image of [...blog.images, ...certificates.images]) {
  assert(!paths.has(image.path), `Duplicate asset: ${image.path}`)
  paths.add(image.path)
  assert(image.alt.length < 125 && !image.alt.toLowerCase().startsWith('image of'), `Alt: ${image.path}`)
  const metadata = await sharp(image.path).metadata()
  assert.equal(metadata.format, 'png')
  assert.equal(metadata.width, image.width)
  assert.equal(metadata.height, image.height)
  assert((await sharp(image.path).stats()).isOpaque, `Non-opaque: ${image.path}`)
  if (image.path.startsWith('public/blog/')) assert(registryText.includes(image.alt), `Missing registry alt: ${image.path}`)
}
for (const original of baseline.images) {
  const originalBytes = execFileSync('git', ['show', `161c9ce:${original.path}`], { maxBuffer: 20 * 1024 * 1024 })
  assert.equal(hash(await readFile(original.path)), hash(originalBytes), `Original changed: ${original.path}`)
}
const stripImageCode = (text) => text.replace(/^import \{ BlogImage \}[^\n]*\n/gm, '').replace(/<BlogImage\s+imageKey="[^"]+"\s*\/>/g, '').replace(/\s+/g, ' ').trim()
const coverage = []
for (const [slug, expected] of Object.entries(expectedCounts)) {
  const path = `src/pages/blog/posts/${slug}.tsx`
  const post = await readFile(path, 'utf8')
  const original = execFileSync('git', ['show', `161c9ce:${path}`], { encoding: 'utf8' })
  assert.equal(stripImageCode(post), stripImageCode(original), `Article text changed: ${slug}`)
  const keys = [...post.matchAll(/<BlogImage\s+imageKey="([^"]+)"\s*\/>/g)].map((match) => match[1])
  assert.equal(keys.length, expected, `Coverage count: ${slug}`)
  assert.equal(new Set(keys).size, expected, `Duplicate placement: ${slug}`)
  const entries = blog.images.filter((image) => image.slug === slug && image.name !== 'featured')
  assert.equal(entries.length, expected)
  const numbers = entries.map((image) => Number(image.name.split('-')[0])).sort((a, b) => a - b)
  assert.deepEqual(numbers, Array.from({ length: expected }, (_, i) => i + 1), `Sequence gaps: ${slug}`)
  for (const key of keys) assert(entries.some((image) => `${image.slug}/${image.name}` === key), `Missing manifest key: ${key}`)
  coverage.push({ article: slug, inline: expected, featured: 1, textPreserved: true })
}
const recipients = { 'shelvey-ai': 'Vikram Varma Sanagaraju', 'amro-agentic-ai': 'Hemant Joshi', 'kenect-ai': 'Shaun Sorensen', 'the-payzon': null }
assert.equal(certificates.images.length, 4)
for (const image of certificates.images) {
  assert.equal(image.recipient, recipients[image.slug])
  assert.equal(image.width / image.height, 1.5)
  assert.equal(hash(await readFile(image.sourceLogo)), image.sourceLogoSha256)
  assert.equal(image.previewOnly, true)
}
console.table(coverage)
console.log('PASS: 42 blog PNGs; 4 certificate PNGs; dimensions/opacity/alts/sequences/placements; 17 original assets unchanged; all article text preserved; exact certificate names and source-logo provenance.')
