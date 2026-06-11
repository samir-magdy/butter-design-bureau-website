import { notFound } from "next/navigation";
import { client, urlFor } from "@/lib/sanity/client";
import { allSlugsQuery, projectBySlugQuery } from "@/lib/sanity/queries";
import type { Project } from "@/lib/data";
import Gallery from "@/app/components/Gallery";

export const revalidate = 60;

export async function generateStaticParams() {
  const docs = await client.fetch<{ slug: string }[]>(allSlugsQuery);
  return docs.map((d) => ({ slug: d.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await client.fetch<Project | null>(projectBySlugQuery, {
    slug,
  });

  if (!project) notFound();

  const allImages = [
    project.coverImage,
    ...(project.gallery ?? []),
  ].map((img) => ({
    src: urlFor(img).width(1600).auto("format").url(),
  }));

  return (
    <main className="mx-auto py-20">
      <div className="px-10">
      <h1 className="mt-2 text-5xl font-bold tracking-tight text-neutral-900">
        {project.title}
      </h1>
      <div className="flex justify-between items-end">
      {project.description && (
        <p className="mt-6 max-w-2xl text-neutral-500 leading-relaxed">
          {project.description}
        </p>
      )}
        <p className="text-xs sm:text-[1rem] uppercase tracking-[0.2em] text-neutral-400">
        {project.categories?.join(', ')}
      </p>
      </div>
      </div>
      <Gallery slides={allImages} />
    </main>
  );
}
