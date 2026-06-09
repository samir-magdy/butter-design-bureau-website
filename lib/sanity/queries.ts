import { defineQuery } from "next-sanity";

export const projectsQuery = defineQuery(`
  *[_type == "project"] | order(order asc) {
    _id,
    title,
    "slug": slug.current,
    coverImage,
    description,
    categories,
  }
`);

export const allSlugsQuery = defineQuery(`
  *[_type == "project"] { "slug": slug.current }
`);

export const projectBySlugQuery = defineQuery(`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    coverImage,
    description,
    categories,
    gallery,
  }
`);
