import sharp from 'sharp'
import { readdir, mkdir, rm } from 'node:fs/promises'
import path from 'node:path'

const SRC = 'originals'
const OUT = 'public/img'
const MAX_WIDTH = 1600
const QUALITY = 80
const SKIP = ['fav-icon', 'icons/'] // ficheiros que ficam como estão

async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) { await walk(full); continue }
    if (!/\.(png|jpe?g)$/i.test(entry.name)) continue

    const rel = path.relative(SRC, full)
    const relPosix = rel.split(path.sep).join('/')
    if (SKIP.some((s) => relPosix.includes(s))) {
      console.log('–', relPosix, '(ignorado)')
      continue
    }

    const dest = path.join(OUT, rel.replace(/\.(png|jpe?g)$/i, '.webp'))
    await mkdir(path.dirname(dest), { recursive: true })
    await sharp(full)
      .rotate() // respeita a orientação EXIF das fotos de telemóvel
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(dest)
    await rm(path.join(OUT, rel), { force: true }) // apaga a versão antiga
    console.log('✓', relPosix)
  }
}

await walk(SRC)