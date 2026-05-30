import { client } from "@/lib/sanity/client";
import { projectsQuery } from "@/lib/sanity/queries";
import type { Project } from "@/lib/data";
import Navbar from "./Navbar";
import ProjectCard from "./ProjectCard";

export default async function PortfolioGrid() {
  const projects = await client.fetch<Project[]>(projectsQuery);

  return (
    <main className="relative z-10 bg-white">
      <Navbar />
      <div className="mx-auto max-w-[100rem] px-6 py-20 sm:px-10">
        <h2 className="mb-12 text-3xl font-extralight text-neutral-900">
          Selected Work
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
