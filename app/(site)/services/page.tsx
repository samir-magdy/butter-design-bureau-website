export const metadata = {
  title: "Services",
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
    title: "Illustration",
    description:
      "Crafting custom illustrations that add character, communicate ideas, and enhance brand storytelling.",
  },
  {
    title: "Digital Experience Design",
    description:
      "Creating intuitive digital experiences that blend strong visual design with seamless user interaction.",
  },
];

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-[100rem] px-6 py-24 sm:px-10">
      <span className="text-sm uppercase tracking-[0.3em] text-neutral-500">
        What we do
      </span>
      <h1 className="mt-3 text-7xl font-extralight tracking-tight text-neutral-900">
        Services
      </h1>

      <div className="mt-16 grid grid-cols-1 gap-px border border-neutral-200 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ title, description }) => (
          <div key={title} className="flex flex-col gap-4 bg-white p-10">
            <h2 className="text-base font-medium uppercase tracking-[0.15em] text-neutral-900">
              {title}
            </h2>
            <p className="text-base leading-relaxed text-neutral-500">
              {description}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
