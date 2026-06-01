import Link from "next/link";
import { urlFor } from "@/lib/sanity/client";
import type { Project } from "@/lib/data";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <Link href={`/work/${project.slug}`}>
    <article className="group relative cursor-pointer overflow-hidden">
      <div className="relative aspect-[5/3] w-full">
        <img
          src={urlFor(project.coverImage).width(900).height(540).auto("format").url()}
          alt={project.title}
          className="object-cover"
          sizes="(min-width: 640px) 50vw, 100vw"
        />
      </div>

      <div className="absolute inset-0 flex flex-col bg-white p-20 sm:pb-32 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h3 className="text-3xl font-bold leading-tight uppercase text-black sm:text-4xl">
          {project.title}
        </h3>
        <div className="mt-auto flex items-end justify-between gap-4">
          {project.description && (
            <p className="max-w-[55%] text-[0.65rem] uppercase leading-relaxed tracking-wider text-black">
              {project.description}
            </p>
          )}
          {/* Uncomment when ready */}
          {/* {project.genre && (
            <p className="ml-auto text-right text-[0.65rem] uppercase tracking-wider text-neutral-400">
              {project.genre}
            </p>
          )} */}
            <p className="ml-auto text-right text-[0.65rem] uppercase tracking-wider text-neutral-700">
              Best Design Ever Bro
            </p>
        </div>
      </div>
    </article>
    </Link>
  );
}
