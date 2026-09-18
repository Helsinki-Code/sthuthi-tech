import { createRequire } from 'node:module'
import { readFile } from 'node:fs/promises'

// Export conversion only: resize and place generated transparency on brand paper.
// No character, text, logo or scene edits are performed here.
// Run correct-editorial-palette.mjs after exporting to restore the two approved localized palette corrections.
const runtime = process.env.STHUTHI_MEDIA_RUNTIME
if (!runtime) throw new Error('Set STHUTHI_MEDIA_RUNTIME to the bundled Node package directory.')
const require = createRequire(`${runtime}/package.json`)
const sharp = require('sharp')
const manifest = JSON.parse(await readFile('public/blog/image-manifest.json', 'utf8'))
for (const image of manifest.images.filter((entry) => entry.generatedSource)) {
  await sharp(image.generatedSource)
    .resize(image.width, image.height, { fit: 'fill' })
    .flatten({ background: '#F5F3EE' })
    .png()
    .toFile(image.path)
  console.log(image.path)
}
