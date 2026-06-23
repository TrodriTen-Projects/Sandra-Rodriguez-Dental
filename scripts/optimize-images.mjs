// Optimizes the raster images in /public for a static deploy.
//
// With `output: 'export'` + `images.unoptimized`, Next serves the source files
// as-is, so multi-MB images kill performance. This downscales anything wider
// than MAX_WIDTH and re-encodes it at a sensible quality, in place. Originals
// are backed up to ./image-originals (outside /public, so they are NOT
// deployed) the first time each file is touched. Re-running is idempotent.
//
// Usage: npm run optimize:images

import sharp from 'sharp';
import { readdir, mkdir, copyFile, writeFile, readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const PUBLIC_DIR = 'public';
const BACKUP_DIR = 'image-originals';
const MAX_WIDTH = 1600;
const QUALITY = 72;
const EXTS = new Set(['.webp', '.jpg', '.jpeg', '.png']);

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else out.push(full);
  }
  return out;
}

async function optimize(file) {
  const ext = path.extname(file).toLowerCase();
  if (!EXTS.has(ext)) return null;

  // Read into a buffer first so sharp holds no handle on the path — otherwise
  // writing back to the same file fails on Windows (file lock).
  const input = await readFile(file);
  const before = input.length;
  const image = sharp(input, { failOn: 'none' });
  const meta = await image.metadata();

  let pipeline = image;
  if (meta.width && meta.width > MAX_WIDTH) {
    pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
  }
  if (ext === '.webp') pipeline = pipeline.webp({ quality: QUALITY });
  else if (ext === '.png') pipeline = pipeline.png({ compressionLevel: 9, palette: true });
  else pipeline = pipeline.jpeg({ quality: QUALITY, mozjpeg: true });

  const output = await pipeline.toBuffer();
  if (output.length >= before) return { file, before, after: before, skipped: true };

  // Back up the original once, then overwrite.
  const backupPath = path.join(BACKUP_DIR, path.relative(PUBLIC_DIR, file));
  await mkdir(path.dirname(backupPath), { recursive: true });
  if (!existsSync(backupPath)) await copyFile(file, backupPath);
  await writeFile(file, output);

  return { file, before, after: output.length };
}

const files = await walk(PUBLIC_DIR);
let totalBefore = 0;
let totalAfter = 0;

for (const file of files) {
  const result = await optimize(file);
  if (!result) continue;
  totalBefore += result.before;
  totalAfter += result.after;
  if (result.skipped) continue;
  const pct = ((1 - result.after / result.before) * 100).toFixed(0);
  console.log(
    `${(result.before / 1024).toFixed(0).padStart(6)} KB -> ${(result.after / 1024)
      .toFixed(0)
      .padStart(6)} KB  (-${pct}%)  ${path.relative(PUBLIC_DIR, file)}`,
  );
}

console.log(
  `\nTotal: ${(totalBefore / 1024 / 1024).toFixed(1)} MB -> ${(totalAfter / 1024 / 1024).toFixed(
    1,
  )} MB`,
);
