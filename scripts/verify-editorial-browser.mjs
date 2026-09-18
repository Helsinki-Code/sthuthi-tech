import { execFileSync } from 'node:child_process'
import { readFile } from 'node:fs/promises'
import assert from 'node:assert/strict'

const manifest = JSON.parse(await readFile('public/blog/image-manifest.json', 'utf8'))
const slugs = [...new Set(manifest.images.map((image) => image.slug))]
function browser(...args) {
  const result = JSON.parse(execFileSync('npx', ['--yes', 'agent-browser', '--session', 'sthuthi-image-audit', '--json', ...args], { encoding: 'utf8', timeout: 45000 }))
  assert.equal(result.success, true, JSON.stringify(result))
  return result.data
}
for (const [width, height] of [[1440, 1000], [390, 844]]) {
  browser('set', 'viewport', String(width), String(height))
  for (const slug of slugs) {
    browser('open', `http://127.0.0.1:5173/blog/${slug}`)
    const expected = manifest.images.filter((image) => image.slug === slug)
    const expression = `(async () => {
      const images = [...document.querySelectorAll('img')].filter(i => new URL(i.src).pathname.startsWith('/blog/'));
      await Promise.all(images.map(async i => { i.loading = 'eager'; await i.decode(); }));
      return {heading: document.querySelector('h1')?.innerText, overlay: !!document.querySelector('vite-error-overlay,[data-nextjs-dialog]'),
        overflow: document.documentElement.scrollWidth > innerWidth + 1,
        images: images.map(i => { let visible = true; for (let p = i; p; p = p.parentElement) { const s = getComputedStyle(p); if (s.opacity === '0' || s.visibility === 'hidden' || s.display === 'none') visible = false; }
          return {path: 'public' + new URL(i.src).pathname, alt: i.alt, width:i.naturalWidth, height:i.naturalHeight, visible, cropped: Math.abs(i.width / i.height - i.naturalWidth / i.naturalHeight) > .015}; })};
    })()`
    const result = browser('eval', expression).result
    assert.ok(result.heading)
    assert.equal(result.overlay, false)
    assert.equal(result.overflow, false, `${slug}: horizontal overflow at ${width}px`)
    assert.equal(result.images.length, expected.length, `${slug}: wrong image count`)
    for (const image of expected) {
      const actual = result.images.find((entry) => entry.path === image.path)
      assert.ok(actual, image.path)
      assert.equal(actual.alt, image.alt)
      assert.equal(actual.width, image.width)
      assert.equal(actual.height, image.height)
      assert.equal(actual.cropped, false)
      assert.equal(actual.visible, true, `${image.path}: hidden by an ancestor`)
    }
    console.log(`PASS ${width}px ${slug}: ${expected.length} images loaded, exact alts, no crop/overflow/overlay`)
  }
}
const errors = browser('errors')
assert.ok(!errors.errors?.length, JSON.stringify(errors))
console.log('PASS browser runtime errors:', JSON.stringify(errors))
for (const image of JSON.parse(await readFile('public/clients/certificates/manifest.json', 'utf8')).images) {
  const response = await fetch(`http://127.0.0.1:5173/${image.path.replace(/^public\//, '')}`)
  assert.equal(response.status, 200)
  assert.ok(response.headers.get('content-type').includes('image/png'))
  console.log(`PASS certificate served: ${image.path}`)
}
