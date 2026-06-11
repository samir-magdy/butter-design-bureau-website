import { createClient } from "@sanity/client";
import { createReadStream } from "fs";
import { readdir } from "fs/promises";
import { join, basename } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const client = createClient({
  projectId: "6a0pp890",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_READ_TOKEN,
  useCdn: false,
});

const DOCUMENT_ID = "4smu7Ks5k1PWjXUh5EoJyo";
const GALLERY_DIR = join(__dirname, "../public/hamisa-gallery");

const files = (await readdir(GALLERY_DIR))
  .filter((f) => /\.(png|jpe?g|webp)$/i.test(f))
  .sort();

console.log(`Uploading ${files.length} images…`);

const imageRefs = [];

for (const file of files) {
  process.stdout.write(`  ${file} … `);
  const asset = await client.assets.upload(
    "image",
    createReadStream(join(GALLERY_DIR, file)),
    { filename: file }
  );
  imageRefs.push({
    _type: "image",
    _key: asset._id,
    asset: { _type: "reference", _ref: asset._id },
  });
  console.log("done");
}

console.log("Patching gallery…");
await client
  .patch(DOCUMENT_ID)
  .set({ gallery: imageRefs })
  .commit();

console.log("Done — gallery updated with", imageRefs.length, "images.");
