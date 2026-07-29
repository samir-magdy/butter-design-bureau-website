import { readdir, stat, readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const publicDir = path.join(projectRoot, "public");
const outFile = path.join(projectRoot, "lib", "blur-placeholders.json");

const IMAGE_EXTENSIONS = new Set([".webp", ".jpg", ".jpeg", ".png", ".avif", ".gif"]);

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) return walk(full);
      return [full];
    })
  );
  return files.flat();
}

async function generateEntry(absPath) {
  const ext = path.extname(absPath).toLowerCase();
  const isAnimated = ext === ".gif";
  const pipeline = sharp(absPath, isAnimated ? { animated: false } : {});
  const metadata = await pipeline.metadata();
  const width = metadata.width ?? 0;
  const height = metadata.height ?? 0;

  const buffer = await sharp(absPath, isAnimated ? { animated: false } : {})
    .resize(16, null, { fit: "inside" })
    .blur()
    .webp({ quality: 40 })
    .toBuffer();

  const blur = `data:image/webp;base64,${buffer.toString("base64")}`;
  return { w: width, h: height, blur };
}

async function main() {
  if (!existsSync(publicDir)) {
    console.error(`[blur] public/ not found at ${publicDir}`);
    process.exit(1);
  }

  const allFiles = await walk(publicDir);
  const images = allFiles.filter((f) => IMAGE_EXTENSIONS.has(path.extname(f).toLowerCase()));

  let existing = {};
  if (existsSync(outFile)) {
    try {
      existing = JSON.parse(await readFile(outFile, "utf8"));
    } catch {
      existing = {};
    }
  }

  const next = {};
  let generated = 0;
  let reused = 0;

  await Promise.all(
    images.map(async (abs) => {
      const rel = "/" + path.relative(publicDir, abs).split(path.sep).join("/");
      const info = await stat(abs);
      const mtime = info.mtimeMs;

      const cached = existing[rel];
      if (cached && cached.mtime === mtime && cached.blur && cached.w && cached.h) {
        next[rel] = cached;
        reused += 1;
        return;
      }

      try {
        const entry = await generateEntry(abs);
        next[rel] = { ...entry, mtime };
        generated += 1;
      } catch (err) {
        console.warn(`[blur] failed to process ${rel}: ${err.message}`);
      }
    })
  );

  await mkdir(path.dirname(outFile), { recursive: true });
  const sorted = Object.fromEntries(
    Object.entries(next).sort(([a], [b]) => a.localeCompare(b))
  );
  await writeFile(outFile, JSON.stringify(sorted, null, 2) + "\n", "utf8");

  console.log(`[blur] wrote ${Object.keys(sorted).length} entries (${generated} new, ${reused} cached) → ${path.relative(projectRoot, outFile)}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
