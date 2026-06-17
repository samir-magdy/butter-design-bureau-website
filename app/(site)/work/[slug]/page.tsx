import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import Gallery from "@/app/components/Gallery";
import BackToTop from "@/app/components/BackToTop";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description:
      project.description ??
      `A ${project.categories?.join(" & ") ?? "branding"} project by Butter Design Bureau.`,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const allImages = project.gallery ?? [];

  return (
    <main className="mx-auto pb-4">
      <div className="px-6 sm:px-10">
        <h1 className="mt-2 text-5xl font-bold tracking-tight text-neutral-900">
          {project.title}
        </h1>
        <div className="sm:flex sm:justify-between items-end">
          {project.description && (
            <p className="my-6 sm:mt-6 sm:mb-0 max-w-2xl text-neutral-500 leading-relaxed">
              {project.description}
            </p>
          )}
          <p className="text-xs sm:text-[1rem] uppercase tracking-[0.2em] text-neutral-400">
            {project.categories?.join(", ")}
          </p>
        </div>
      </div>
      <Gallery slides={allImages} gridCols={project.id === "hamisa" ? 6 : 2} gapless={project.id === "think"} />
      <BackToTop />
    </main>
  );
}
