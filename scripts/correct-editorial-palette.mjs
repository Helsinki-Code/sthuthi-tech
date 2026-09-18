import { createRequire } from 'node:module'
import { readFile, rename } from 'node:fs/promises'

// Explicitly approved, localized pixel corrections. No redraw or generation.
const runtime = process.env.STHUTHI_MEDIA_RUNTIME
if (!runtime) throw new Error('Set STHUTHI_MEDIA_RUNTIME to the bundled Node package directory.')
const require = createRequire(`${runtime}/package.json`)
const sharp = require('sharp')
const manifest = JSON.parse(await readFile('public/blog/image-manifest.json', 'utf8'))
function hsl(r, g, b) {
  r /= 255; g /= 255; b /= 255
  const max = Math.max(r, g, b), min = Math.min(r, g, b), d = max - min, l = (max + min) / 2
  if (!d) return [0, 0, l]
  const s = d / (1 - Math.abs(2 * l - 1))
  let h = max === r ? ((g - b) / d) % 6 : max === g ? (b - r) / d + 2 : (r - g) / d + 4
  h = (h * 60 + 360) % 360
  return [h, s, l]
}
function tone(data, i, target) {
  const y = .2126 * data[i] + .7152 * data[i + 1] + .0722 * data[i + 2]
  const base = .2126 * target[0] + .7152 * target[1] + .0722 * target[2]
  const factor = y / base
  for (let c = 0; c < 3; c++) data[i + c] = Math.round(Math.min(255, target[c] * factor))
}
for (const [path, kind] of [
  ['public/blog/microsoft-copilot-certification/03-contextual-rubric.png', 'plant-and-desk'],
  ['public/blog/microsoft-copilot-certification/01-open-credential-paths.png', 'pointer'],
]) {
  // Always start from the untouched generation, so repeat exports cannot accumulate edits.
  const source = manifest.images.find((entry) => entry.path === path)?.generatedSource
  if (!source) throw new Error(`Missing original generation for ${path}`)
  const { data, info } = await sharp(source).resize(1000, 750, { fit: 'fill' })
    .flatten({ background: '#F5F3EE' }).removeAlpha().raw().toBuffer({ resolveWithObject: true })
  let changed = 0
  for (let y = 0; y < info.height; y++) for (let x = 0; x < info.width; x++) {
    const i = (y * info.width + x) * info.channels
    const [h, s, l] = hsl(data[i], data[i + 1], data[i + 2])
    let target
    if (kind === 'pointer' && x > 725 && x < 850 && y > 285 && y < 400 && h > 170 && h < 265 && s > .15) target = [91, 101, 112]
    if (kind === 'plant-and-desk') {
      if (x < 145 && y > 365 && y < 635 && h > 65 && h < 175 && s > .15) target = [91, 101, 112]
      const outsideHands = !((x > 180 && x < 365 && y > 440 && y < 512) || (x > 448 && x < 545 && y > 395 && y < 498))
      if (y > 345 && outsideHands && h > 24 && h < 65 && s > .12 && s < .7 && l > .65) target = [245, 243, 238]
    }
    if (target) { tone(data, i, target); changed++ }
  }
  const temporary = `${path}.palette-export.png`
  await sharp(data, { raw: info }).png().toFile(temporary)
  await rename(temporary, path)
  console.log(JSON.stringify({ path, kind, changedPixels: changed, dimensions: [info.width, info.height], originalLogosAndTextPreserved: true }))
}
