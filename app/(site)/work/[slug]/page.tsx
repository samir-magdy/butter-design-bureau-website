import { notFound } from "next/navigation";
import Link from "next/link";
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
    <div className="px-4 sm:px-10 pb-4">
        <Link
          href="/#portfolio"
          className="inline-flex items-center gap-2 mt-2 mb-4 text-sm sm:text-lg text-neutral-400 hover:text-neutral-900 transition-colors"
        >
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="sm:pt-0.5 w-3 h-3 sm:w-4 sm:h-4">
            <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Portfolio
        </Link>
        <h1 className="mt-0 text-5xl font-bold tracking-tight text-neutral-900">
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
      <Gallery
        slides={allImages}
        gapless={project.id === "think"}
      />
      <BackToTop />
    </div>
  );
}
