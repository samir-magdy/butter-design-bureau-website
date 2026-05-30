import type { SanityImageSource } from "@sanity/image-url";

export type Project = {
  _id: string;
  title: string;
  slug: string;
  category: string;
  coverImage: SanityImageSource;
};
