export const metadata = {
  title: "Services",
  description:
    "From brand strategy and identity design to motion, packaging, and digital experience — explore the full range of creative services offered by Butter Design Bureau.",
};

const services = [
  {
    title: "Brand Strategy",
    description:
      "Building strategic foundations through research, positioning, and audience insights to create brands with clarity, relevance, and long-term impact.",
  },
  {
    title: "Brand Identity Design",
    description:
      "Creating distinctive visual identities that transform ideas into cohesive brand systems across every touchpoint.",
  },
  {
    title: "Rebranding",
    description:
      "Refreshing and evolving brands to align with new goals, audiences, and market opportunities while preserving their core value.",
  },
  {
    title: "Presentation Design",
    description:
      "Designing compelling presentations, pitch decks, and company profiles that communicate ideas with clarity and confidence.",
  },
  {
    title: "Social Media Design",
    description:
      "Developing scalable content systems and creative assets that strengthen brand consistency and engagement across digital platforms.",
  },
  {
    title: "Motion Design",
    description:
      "Bringing brands to life through animation, motion graphics, and dynamic visual storytelling.",
  },
  {
    title: "Packaging Design",
    description:
      "Designing packaging that combines functionality, aesthetics, and brand expression to create memorable product experiences.",
  },
  {
    title: "Web Design",
    description:
      "Creating intuitive digital experiences that blend strong visual design with seamless user interaction.",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col px-6 sm:px-10 lg:px-16 pb-10">
      <section className="pb-4 sm:pb-16 sm:pt-10">
        <h1
          className="font-black tracking-tight text-neutral-900 leading-[0.88] select-none"
          style={{ fontSize: "clamp(3.2rem, 8.5vw, 7rem)" }}
        >
          What we do.
        </h1>
      </section>

      <div className="flex flex-col">
        {services.map(({ title, description }) => (
          <article key={title} className="group border-b border-neutral-200">
            <div className="relative flex flex-col gap-4 py-10 sm:py-12 pl-6 sm:pl-10 transition-[border-color,padding] duration-500 ease-out group-hover:border-neutral-200 lg:group-hover:pl-12">
              <span
                aria-hidden
                className="absolute left-0 top-14 sm:top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-neutral-300 transition-colors duration-500 group-hover:bg-neutral-900"
              />
              <h2
                className="font-light tracking-tight text-neutral-900 leading-none"
                style={{ fontSize: "clamp(1.9rem, 5.5vw, 3.4rem)" }}
              >
                {title}
              </h2>
              <p className="text-[0.95rem] sm:text-2xl text-neutral-500 leading-relaxed max-w-4xl transition-colors duration-500 group-hover:text-neutral-700">
                {description}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="flex items-center justify-between pt-6 pb-2">
        <p className="text-[0.65rem] uppercase sm:text-sm tracking-[0.25em] text-neutral-900">
          Cairo, Egypt
        </p>
        <a
          href="/contact"
          className="group flex items-center gap-2 text-[0.65rem] sm:text-sm uppercase tracking-[0.25em] text-neutral-900 hover:text-black transition-colors duration-200"
        >
          Start a project
          <span className="inline-block">→</span>
        </a>
      </div>
    </div>
  );
}
