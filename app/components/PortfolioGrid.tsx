import { projects } from "@/lib/data";
import Navbar from "./Navbar";
import ProjectCard from "./ProjectCard";
import MarqueeTrack from "./MarqueeTrack";

export default function PortfolioGrid() {
  return (
    <section id="portfolio" className="relative z-10 bg-white">
      <div className="sm:pb-4">
      <MarqueeTrack />
      </div>
      <Navbar />
      <div className="mx-auto sm:pt-20 sm:pb-0">
        <h2 className="mb-4 sm:mb-8 ps-4 sm:ps-10 text-xl sm:text-3xl font-light text-neutral-900">
          Selected Work
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 sm:px-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
