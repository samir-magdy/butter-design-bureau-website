import { urlFor } from "@/lib/sanity/client";
import type { Project } from "@/lib/data";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <article className="group relative cursor-pointer overflow-hidden">
      <div className="relative aspect-[5/3] w-full">
        <img
          src={urlFor(project.coverImage).width(900).height(540).auto("format").url()}
          alt={project.title}
          className="object-cover"
          sizes="(min-width: 640px) 50vw, 100vw"
        />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/75 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h3 className="text-lg font-medium text-white">{project.title}</h3>
        <p className="mt-2 text-xs uppercase tracking-[0.2em] text-neutral-300">
          {project.category}
        </p>
      </div>
    </article>
  );
}
