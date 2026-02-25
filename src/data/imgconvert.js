import sharp from "sharp";
import { readdir, stat } from "fs/promises";
import { existsSync } from "fs";
import { join, extname, dirname, basename } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Directories to scan for images (relative to project root)
const TARGET_DIRS = [
  join(__dirname, "../../public"),
  join(__dirname, "../assets"),
];

const SUPPORTED_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".gif", ".bmp", ".tiff", ".svg"]);

let converted = 0;
let skipped = 0;
let failed = 0;

async function getImageFiles(dir) {
  const files = [];

  if (!existsSync(dir)) return files;

  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);

    if (entry.isDirectory()) {
      const nested = await getImageFiles(fullPath);
      files.push(...nested);
    } else if (SUPPORTED_EXTENSIONS.has(extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }

  return files;
}

async function convertToWebP(filePath) {
  const outputPath = join(dirname(filePath), basename(filePath, extname(filePath)) + ".webp");

  if (existsSync(outputPath)) {
    console.log(`  [skip] Already exists: ${basename(outputPath)}`);
    skipped++;
    return;
  }

  try {
    const info = await sharp(filePath).webp({ quality: 85 }).toFile(outputPath);
    const original = (await stat(filePath)).size;
    const saved = Math.round((1 - info.size / original) * 100);
    console.log(`  [ok]   ${basename(filePath)} → ${basename(outputPath)} (${saved}% smaller)`);
    converted++;
  } catch (err) {
    console.error(`  [fail] ${basename(filePath)}: ${err.message}`);
    failed++;
  }
}

async function main() {
  console.log("WebP Converter\n");

  const allFiles = [];
  for (const dir of TARGET_DIRS) {
    const files = await getImageFiles(dir);
    allFiles.push(...files);
  }

  if (allFiles.length === 0) {
    console.log("No image files found in target directories.");
    return;
  }

  console.log(`Found ${allFiles.length} image(s) to process:\n`);

  for (const file of allFiles) {
    await convertToWebP(file);
  }

  console.log(`\nDone — converted: ${converted}, skipped: ${skipped}, failed: ${failed}`);
}

main();
