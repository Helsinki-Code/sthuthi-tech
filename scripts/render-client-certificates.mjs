import { createRequire } from 'node:module'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { createHash } from 'node:crypto'

// Original logos are composited, never generated or reconstructed.
const runtime = process.env.STHUTHI_MEDIA_RUNTIME
if (!runtime) throw new Error('Set STHUTHI_MEDIA_RUNTIME to the bundled Node package directory.')
const require = createRequire(`${runtime}/package.json`)
const { createCanvas, loadImage, GlobalFonts } = require('@napi-rs/canvas')
const sharp = require('sharp')
GlobalFonts.registerFromPath('/System/Library/Fonts/Supplemental/Arial.ttf', 'Certificate Sans')
GlobalFonts.registerFromPath('/System/Library/Fonts/Supplemental/Arial Bold.ttf', 'Certificate Bold')
const templatePath = 'public/art/sthuthi-certificate-template.png'
const template = await loadImage(templatePath)
const clients = [
  ['shelvey-ai', 'ShelVey AI', 'Vikram Varma Sanagaraju', 'shelvey-ai-logo.png'],
  ['amro-agentic-ai', 'Amro Agentic AI', 'Hemant Joshi', 'amro-agentic-ai-logo.png'],
  ['kenect-ai', 'Kenect AI', 'Shaun Sorensen', 'kenect-ai.svg'],
  ['the-payzon', 'The Payzon', null, 'the-payzon-logo.png'],
]
const outDir = 'public/clients/certificates'
await mkdir(outDir, { recursive: true })
const images = []
for (const [slug, client, recipient, filename] of clients) {
  const sourcePath = `public/clients/${filename}`
  const source = await readFile(sourcePath)
  const canvas = createCanvas(template.width, template.height)
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = '#F5F3EE'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.drawImage(template, 0, 0)
  // The issuer's original lockup, borders, corners and field pattern stay intact.
  const isPayzon = !recipient
  const box = isPayzon ? { x: 465, y: 440, w: 606, h: 105 } : { x: 1150, y: 75, w: 210, h: 148 }
  const logoBounds = await sharp(source).trim({ threshold: 10 }).png().toBuffer()
  const trimmed = await loadImage(logoBounds)
  const scale = Math.min(box.w / trimmed.width, box.h / trimmed.height)
  const lw = trimmed.width * scale
  const lh = trimmed.height * scale
  ctx.fillStyle = '#F5F3EE'
  ctx.fillRect(box.x - 12, box.y - 12, box.w + 24, box.h + 24)
  ctx.drawImage(trimmed, box.x + (box.w - lw) / 2, box.y + (box.h - lh) / 2, lw, lh)
  ctx.textAlign = 'center'
  if (recipient) {
    ctx.fillStyle = '#121B23'
    ctx.font = '58px Certificate Bold'
    if (ctx.measureText(recipient).width > 1040) ctx.font = '50px Certificate Bold'
    ctx.fillText(recipient, 768, 517)
    ctx.fillStyle = '#5B6570'
    ctx.font = '24px Certificate Sans'
    ctx.fillText(client, 768, 552)
  }
  const path = `${outDir}/${slug}.png`
  await writeFile(path, canvas.toBuffer('image/png'))
  const alt = recipient ? `Certificate of completion for ${recipient} at ${client}, issued by Sthuthi Technologies.` : 'Certificate of completion for The Payzon, issued by Sthuthi Technologies.'
  if (alt.length >= 125) throw new Error(`Alt too long: ${slug}`)
  images.push({ slug, name: slug, tool: null, mascot: null, scene: 'Personalized original Sthuthi certificate template preview.', alt, prompt: `Deterministically composite ${sourcePath} and exact name ${recipient ?? '[no individual name]'} onto ${templatePath}; flatten on #F5F3EE; leave credential fields blank.`, path, width: template.width, height: template.height, client, recipient, sourceLogo: sourcePath, sourceLogoSha256: createHash('sha256').update(source).digest('hex'), logoTransform: 'Original source rasterized if SVG, outer whitespace trimmed, proportionally resized and composited without recoloring.', validation: { name: recipient ? 'Exact typeset string; no image-model spelling risk.' : 'No individual name.', logo: 'Original source file used without generative redraw.', retry: false }, previewOnly: true })
  console.log(path, alt)
}
await writeFile(`${outDir}/manifest.json`, JSON.stringify({ generator: 'Deterministic CLI compositing (explicitly approved)', note: 'Personalized template previews, not issued credentials. Original client logo colors are preserved. Original translucent template flattened on paper.', images }, null, 2) + '\n')
