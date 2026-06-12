import { client } from "@/lib/sanity/client";
import { projectsQuery } from "@/lib/sanity/queries";
import type { Project } from "@/lib/data";
import Navbar from "./Navbar";
import ProjectCard from "./ProjectCard";
import MarqueeTrack from "./MarqueeTrack";

export default async function PortfolioGrid() {
  const projects = await client.fetch<Project[]>(projectsQuery);

  return (
    <section className="relative z-10 bg-white">
      <MarqueeTrack />
      <Navbar />
      <div className="mx-auto sm:py-20 sm:pb-12">
        <h2 className="mb-4 sm:mb-8 ps-6 sm:ps-10 text-xl sm:text-3xl font-light text-neutral-900">
          Selected Work
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
