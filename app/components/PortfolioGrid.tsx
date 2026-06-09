import { client } from "@/lib/sanity/client";
import { projectsQuery } from "@/lib/sanity/queries";
import type { Project } from "@/lib/data";
import Navbar from "./Navbar";
import ProjectCard from "./ProjectCard";
import MarqueeTrack from "./MarqueeTrack";

export default async function PortfolioGrid() {
  const projects = await client.fetch<Project[]>(projectsQuery);

  return (
    <main className="relative z-10 bg-white">
      <MarqueeTrack />
      <Navbar />
      <div className="mx-auto px-6 py-20">
        <h2 className="mb-12 text-3xl font-light text-neutral-900">
          Selected Work
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
