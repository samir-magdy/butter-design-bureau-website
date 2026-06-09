import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const IMAGES_ROOT = path.join(ROOT, 'public', 'project-images');

const client = createClient({
  projectId: '6a0pp890',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'skjPFCW4mCUpHJlo5SR2rmvXdDMljUlObLucWrV7o3L8gIqW5cAX6lEZOPfaKcj2rvkKoo9h4B30Phz2Z',
  useCdn: false,
});

function mimeType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (ext === '.png') return 'image/png';
  if (ext === '.gif') return 'image/gif';
  return 'image/webp';
}

async function uploadImage(filePath) {
  console.log(`  uploading ${path.relative(ROOT, filePath)}`);
  const buffer = fs.readFileSync(filePath);
  const asset = await client.assets.upload('image', buffer, {
    filename: path.basename(filePath),
    contentType: mimeType(filePath),
  });
  return { _type: 'image', asset: { _type: 'reference', _ref: asset._id } };
}

function imagePath(folder, filename) {
  return path.join(IMAGES_ROOT, folder, filename);
}

const PROJECTS = [
  {
    title: 'HAMISA',
    slug: 'hamisa',
    categories: ['strategy', 'rebranding', 'website', 'presentations'],
    order: 1,
    description: 'description goes here',
    cover: imagePath('hamisa', 'hamisa-cover.png'),
    gallery: [],
  },
  {
    title: 'Think',
    slug: 'think',
    categories: ['branding', 'strategy', 'social media', 'presentations'],
    order: 2,
    description: 'description goes here',
    cover: imagePath('think', 'think-cover.png'),
    gallery: [1,2,3,4,5,6,7,8,9].map(n => imagePath('think', `think-${n}.webp`)),
  },
  {
    title: 'Solly Park',
    slug: 'solly-park',
    categories: ['strategy', 'brand identity', 'character design', 'package design'],
    order: 3,
    description: 'description goes here',
    cover: imagePath('solly-park', 'sollypark-cover.webp'),
    gallery: [
      imagePath('solly-park', 'solly-park-1.webp'),
      imagePath('solly-park', 'solly-park-2.webp'),
      imagePath('solly-park', 'solly-park-3.webp'),
      imagePath('solly-park', 'solly-park-4.webp'),
      imagePath('solly-park', 'solly-park-5.webp'),
      imagePath('solly-park', 'solly-park-6.webp'),
      imagePath('solly-park', 'solly-park-7.webp'),
      imagePath('solly-park', 'solly-park-8.png'),
      imagePath('solly-park', 'solly-park-9.webp'),
    ],
  },
  {
    title: 'Gallium',
    slug: 'gallium',
    categories: ['strategy', 'branding', 'iconography', 'social media'],
    order: 4,
    description: 'description goes here',
    cover: imagePath('gallium', 'gallium-cover.png'),
    gallery: [1,2,3,4,5,6,7].map(n => imagePath('gallium', `gallium-${n}.webp`)),
  },
  {
    title: 'Makanat',
    slug: 'makanat',
    categories: ['strategy', 'brand identity', 'visual system'],
    order: 5,
    description: 'description goes here',
    cover: imagePath('makanat', 'makanat-cover.png'),
    gallery: [
      imagePath('makanat', 'makanat-1.webp'),
      imagePath('makanat', 'makanat-2.webp'),
      imagePath('makanat', 'makanat-3.webp'),
      imagePath('makanat', 'makanat-4.webp'),
      imagePath('makanat', 'makanat-5.gif'),
      imagePath('makanat', 'makanat-6.webp'),
      imagePath('makanat', 'makanat-7.webp'),
      imagePath('makanat', 'makanat-8.webp'),
    ],
  },
  {
    title: 'G-Studio',
    slug: 'g-studio',
    categories: ['strategy', 'rebranding', 'social media'],
    order: 6,
    description: 'description goes here',
    cover: imagePath('g-studio', 'g-studio-cover.png'),
    gallery: [
      imagePath('g-studio', 'g-studio-1.gif'),
      imagePath('g-studio', 'g-studio-2.webp'),
      imagePath('g-studio', 'g-studio-3.webp'),
      imagePath('g-studio', 'g-studio-4.webp'),
      imagePath('g-studio', 'g-studio-5.webp'),
      imagePath('g-studio', 'g-studio-6.webp'),
    ],
  },
  {
    title: 'Printables',
    slug: 'printables',
    categories: ['presentation design', 'print'],
    order: 7,
    description: 'description goes here',
    cover: imagePath('printables', 'printables-cover.png'),
    gallery: [],
  },
  {
    title: 'Point',
    slug: 'point',
    categories: ['strategy', 'brand identity', 'character design', 'package design'],
    order: 8,
    description: 'description goes here',
    cover: imagePath('point', 'point-cover.png'),
    gallery: [
      imagePath('point', '5eef95160788185.698a82c82fa71.webp'),
      imagePath('point', '08a8e2160788185.698a82c908df4.webp'),
      imagePath('point', '7fff06160788185.698a82c9082d3.webp'),
      imagePath('point', '35a7a4160788185.698a82ca0322e.webp'),
      imagePath('point', 'd4ccc3160788185.698a82ca041b3.gif'),
      imagePath('point', 'e78e99160788185.698a82ca03ab7.webp'),
      imagePath('point', '1afa5c160788185.698a82caa7ed3.webp'),
      imagePath('point', '9c50a9160788185.698a82caa7947.webp'),
    ],
  },
  {
    title: 'Logos & Marks',
    slug: 'logos-and-marks',
    categories: ['logo design'],
    order: 9,
    description: 'description goes here',
    cover: imagePath('logos-and-marks', 'logos-cover.png'),
    gallery: [
      ...[1,2,3,4,5,6,7,8].map(n => imagePath('logos-and-marks', `logos-${n}.webp`)),
      imagePath('logos-and-marks', 'logos-last.webp'),
    ],
  },
];

async function deleteExistingProjects() {
  console.log('\n── Deleting existing project documents...');
  const ids = await client.fetch('*[_type == "project"]._id');
  if (!ids.length) { console.log('  nothing to delete'); return; }
  const tx = client.transaction();
  for (const id of ids) {
    tx.delete(id);
    if (!id.startsWith('drafts.')) tx.delete(`drafts.${id}`);
  }
  await tx.commit({ visibility: 'async' });
  console.log(`  deleted ${ids.length} documents`);
}

async function seedProject(data) {
  console.log(`\n── ${data.title}`);

  const coverImage = await uploadImage(data.cover);

  const galleryImages = [];
  for (const imgPath of data.gallery) {
    const img = await uploadImage(imgPath);
    img._key = Math.random().toString(36).slice(2, 10);
    galleryImages.push(img);
  }

  const doc = {
    _type: 'project',
    title: data.title,
    slug: { _type: 'slug', current: data.slug },
    categories: data.categories,
    order: data.order,
    description: data.description,
    coverImage,
    ...(galleryImages.length ? { gallery: galleryImages } : {}),
  };

  const created = await client.create(doc);
  console.log(`  created ${created._id}`);
}

async function main() {
  await deleteExistingProjects();
  for (const project of PROJECTS) {
    await seedProject(project);
  }
  console.log('\n✓ All projects seeded.\n');
}

main().catch((err) => { console.error(err); process.exit(1); });
