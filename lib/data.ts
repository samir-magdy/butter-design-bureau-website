export type GalleryItem = { src: string; cols?: 1 | 2 | 3 };

export type Project = {
  id: string;
  title: string;
  slug: string;
  coverImage: string;
  description?: string;
  categories?: string[];
  gallery?: GalleryItem[];
};

export const projects: Project[] = [
  {
    id: "hamisa",
    title: "HAMISA",
    slug: "hamisa",
    coverImage: "/project-images/hamisa/hamisa-cover.avif",
    description:
      "Hamisa Consulting has over 30 years of experience in construction and supervision. Butter Studio created an identity inspired by the abstraction of concrete and steel, reflecting the firm's strength and trusted reputation.",
    categories: ["strategy", "rebranding", "website", "presentations"],
    gallery: [
      { src: "/project-images/hamisa/hamisa-img-2.webp" },          // 1.34
      { src: "/project-images/hamisa/hamisa-img-17.webp" },         // 1.34
      { src: "/project-images/hamisa/hamisa-img-1.webp", cols: 3 }, // 1.33
      { src: "/project-images/hamisa/hamisa-img-4.webp", cols: 3 }, // 1.33
      { src: "/project-images/hamisa/hamisa-img-11.webp", cols: 3 },// 1.33
      { src: "/project-images/hamisa/hamisa-img-9.webp" },          // 1.50
      { src: "/project-images/hamisa/hamisa-img-3.webp" },          // 1.50
      { src: "/project-images/hamisa/hamisa-img-5.webp" },          // 1.33
      { src: "/project-images/hamisa/hamisa-img-18.webp" },         // 1.33
      { src: "/project-images/hamisa/hamisa-img-7.webp" },          // 1.67
      { src: "/project-images/hamisa/hamisa-img-8.webp" },          // 1.67
      { src: "/project-images/hamisa/hamisa-img-6.webp" },          // 1.78
      { src: "/project-images/hamisa/hamisa-img-16.webp" },         // 1.81
      { src: "/project-images/hamisa/hamisa-img-10.webp" },         // 1.00
      { src: "/project-images/hamisa/hamisa-img-13.webp" },         // 0.97
      { src: "/project-images/hamisa/hamisa-img-12.webp", cols: 3 },// 0.75
      { src: "/project-images/hamisa/hamisa-img-14.webp", cols: 3 },// 0.71
      { src: "/project-images/hamisa/hamisa-img-15.webp", cols: 3 },// 0.80
    ],
  },
  {
    id: "think",
    title: "Think",
    slug: "think",
    coverImage: "/project-images/think/think-cover.avif",
    description:
      "Think is a collaborative platform and think tank that brings together designers from across the Middle East, fostering dialogue, knowledge exchange, and innovation across all design disciplines.",
    categories: ["branding", "strategy", "social media", "presentations"],
    gallery: [
      { src: "/project-images/think/think-4.webp" },
      { src: "/project-images/think/think-6.webp" },
      { src: "/project-images/think/think-8.webp" },
      { src: "/project-images/think/think-2.webp" },
      { src: "/project-images/think/think-3.webp" },
      { src: "/project-images/think/think-5.webp" },
      { src: "/project-images/think/think-7.webp" },
      { src: "/project-images/think/think-9.webp" },
      { src: "/project-images/think/think-1.webp" },
    ],
  },
  {
    id: "solly-park",
    title: "Solly Park",
    slug: "solly-park",
    coverImage: "/project-images/solly-park/sollypark-cover.avif",
    description:
      "Solly Park is a vibrant family entertainment destination where fun, adventure, and togetherness come to life.",
    categories: ["strategy", "brand identity", "character design", "package design"],
    gallery: [
      { src: "/project-images/solly-park/solly-park-8.webp", cols: 2},
      { src: "/project-images/solly-park/solly-park-1.webp" },
      { src: "/project-images/solly-park/solly-park-2.webp" },
      { src: "/project-images/solly-park/solly-park-3.webp" },
      { src: "/project-images/solly-park/solly-park-4.webp" },
      { src: "/project-images/solly-park/solly-park-9.webp", cols: 2 },
      { src: "/project-images/solly-park/solly-park-5.webp" },
      { src: "/project-images/solly-park/solly-park-6.webp" },
      { src: "/project-images/solly-park/solly-park-7.webp" },
    ],
  },
  {
    id: "gallium",
    title: "Gallium",
    slug: "gallium",
    coverImage: "/project-images/gallium/gallium-cover.avif",
    description:
      "Gallium is a BIM consultancy delivering integrated digital solutions for owners, designers, and contractors across all engineering disciplines, enabling better collaboration, coordination, and project delivery.",
    categories: ["strategy", "branding", "iconography", "social media"],
    gallery: [
      { src: "/project-images/gallium/gallium-1.webp" },
      { src: "/project-images/gallium/gallium-2.webp" },
      { src: "/project-images/gallium/gallium-3.webp" },
      { src: "/project-images/gallium/gallium-4.webp" },
      { src: "/project-images/gallium/gallium-5.webp" },
      { src: "/project-images/gallium/gallium-6.webp" },
      { src: "/project-images/gallium/gallium-7.webp" },
    ],
  },
  {
    id: "makanat",
    title: "Makanat",
    slug: "makanat",
    coverImage: "/project-images/makanat/makanat-cover.webp",
    description:
      "A project commissioned by and developed in collaboration with STUDIO DAADOU.",
    categories: ["strategy", "brand identity", "visual system"],
    gallery: [
      { src: "/project-images/makanat/makanat-6.webp", cols: 2 },
      { src: "/project-images/makanat/makanat-1.webp" },
      { src: "/project-images/makanat/makanat-2.webp" },
      { src: "/project-images/makanat/makanat-3.webp" },
      { src: "/project-images/makanat/makanat-4.webp" },
      { src: "/project-images/makanat/makanat-5.gif" },
      { src: "/project-images/makanat/makanat-7.webp" },
      { src: "/project-images/makanat/makanat-8.webp" },
    ],
  },
  {
    id: "g-studio",
    title: "G-Studio",
    slug: "g-studio",
    coverImage: "/project-images/g-studio/g-studio-cover.avif",
    description:
      "G Studio is a visualization studio that transforms ideas into vivid visual experiences, inspired by the pixel—the fundamental building block behind every image and every story.",
    categories: ["strategy", "rebranding", "social media"],
    gallery: [
      { src: "/project-images/g-studio/g-studio-1.gif" },
      { src: "/project-images/g-studio/g-studio-2.webp" },
      { src: "/project-images/g-studio/video-g-studio.mp4" },
      { src: "/project-images/g-studio/g-studio-3.webp" },
      { src: "/project-images/g-studio/g-studio-4.webp" },
      { src: "/project-images/g-studio/g-studio-5.webp" },
      { src: "/project-images/g-studio/g-studio-6.webp" },
    ],
  },
  {
    id: "printables",
    title: "Printables",
    slug: "printables",
    coverImage: "/project-images/printables/printables-cover.webp",
    description:
      "Butter delivers creative print and advertising solutions, transforming ideas into bold, effective campaigns across physical and promotional media.",
    categories: ["presentation design", "print"],
    gallery: [
      { src: "/project-images/printables/printables-img-1.webp" },
      { src: "/project-images/printables/printables-img-2.webp" },
      { src: "/project-images/printables/printables-img-3.webp" },
      { src: "/project-images/printables/printables-img-4.webp" },
      { src: "/project-images/printables/printables-img-5.gif" },
      { src: "/project-images/printables/printables-img-6.webp" },
      { src: "/project-images/printables/printables-img-7.gif" },
      { src: "/project-images/printables/printables-img-8.gif" },
      { src: "/project-images/printables/printables-img-9.webp" },
      { src: "/project-images/printables/printables-img-10.gif" },
      { src: "/project-images/printables/printables-img-11.gif" },
      { src: "/project-images/printables/printables-img-12.gif" },
    ],
  },
  {
    id: "point",
    title: "Point",
    slug: "point",
    coverImage: "/project-images/point/points-cover.avif",
    description:
      "Point is an MEP engineering firm delivering integrated mechanical, electrical, and plumbing solutions that ensure efficiency, performance, and reliability across the built environment.",
    categories: ["strategy", "brand identity", "character design", "package design"],
    gallery: [
      { src: "/project-images/point/point-img-5.webp", cols: 3 },
      { src: "/project-images/point/point-img-1.webp", cols: 1 },
      { src: "/project-images/point/point-img-2.webp" },
      { src: "/project-images/point/point-img-3.webp" },
      { src: "/project-images/point/point-img-4.webp" },
      { src: "/project-images/point/point-img-6.webp" },
      { src: "/project-images/point/point-img-7.gif" },
      { src: "/project-images/point/point-img-8.webp" },
    ],
  },
  {
    id: "logos-and-marks",
    title: "Logos & Marks",
    slug: "logos-and-marks",
    coverImage: "/project-images/logos-and-marks/logos-cover.avif",
    description:
      "A curated collection of logo marks designed between 2021 and 2023, showcasing a range of identities crafted across diverse industries, concepts, and brand personalities.",
    categories: ["logo design"],
    gallery: [
      { src: "/project-images/logos-and-marks/logos-1.webp" },
      { src: "/project-images/logos-and-marks/logos-2.webp" },
      { src: "/project-images/logos-and-marks/logos-3.webp" },
      { src: "/project-images/logos-and-marks/logos-4.webp" },
      { src: "/project-images/logos-and-marks/logos-5.webp" },
      { src: "/project-images/logos-and-marks/logos-6.webp" },
      { src: "/project-images/logos-and-marks/logos-7.webp" },
      { src: "/project-images/logos-and-marks/logos-8.webp" },
      { src: "/project-images/logos-and-marks/logos-last.webp" },
    ],
  },
];
