import Link from "next/link";
import type { Project } from "@/lib/data";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <Link href={`/work/${project.slug}`}>
      <article className="group relative cursor-pointer overflow-hidden">
        <div className="relative aspect-5/3 w-full">
          <img
            src={project.coverImage}
            alt={project.title}
            className="absolute inset-0 h-full w-full object-cover"
            sizes="(min-width: 640px) 50vw, 100vw"
          />
        </div>

        <div className="absolute inset-0 flex flex-col bg-white p-20 sm:pb-32 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <h3 className="text-3xl font-bold leading-tight uppercase text-black sm:text-7xl">
            {project.title}
          </h3>
          <div className="mt-auto flex items-end justify-between gap-4">
            {project.description && (
              <p className="max-w-[55%] text-sm text-justify uppercase leading-relaxed tracking-wider text-black">
                {project.description}
              </p>
            )}
            {project.categories && project.categories.length > 0 && (
              <ul className="ml-auto list-none text-sm uppercase tracking-wider text-neutral-500">
                {project.categories.map((cat) => (
                  <li key={cat}>{cat}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}
