export const metadata = {
  title: "About",
  description:
    "We combine strategic thinking, creative excellence, and market-driven design to help organizations build meaningful, memorable, and scalable brands that compete on the world stage.",
};

const capabilities = [
  "Brand Strategy",
  "Identity Design",
  "Visual Systems",
  "Digital Experience",
  "Motion & Communication",
];

export default function AboutPage() {
  return (
    <main className="flex flex-col px-6 sm:px-10 lg:px-16 pb-10">
      <section className="border-b border-neutral-200 pb-10 sm:py-16">
        <h1
          className="font-black tracking-tight text-neutral-900 leading-[0.88] select-none"
          style={{ fontSize: "clamp(3.2rem, 8.5vw, 7rem)" }}
        >
          Who we are.
        </h1>
      </section>

      <div className="grid lg:grid-cols-[13rem_1fr] border-b border-neutral-200">
        <aside className="hidden lg:flex flex-col py-12 pr-8 border-r border-neutral-200">
          <p className="text-[0.58rem] uppercase tracking-[0.35em] text-neutral-400 mb-7">
            Capabilities
          </p>
          <ul className="flex flex-col gap-4">
            {capabilities.map((cap) => (
              <li key={cap} className="flex items-center gap-3">
                <span className="w-5 h-px bg-neutral-300 shrink-0" />
                <span className="text-[0.78rem] tracking-[0.07em] text-neutral-600 leading-snug">
                  {cap}
                </span>
              </li>
            ))}
          </ul>
        </aside>

        <div className="flex flex-col gap-10 py-10 lg:py-12 lg:pl-12 xl:pl-16">
          <p
            className="text-neutral-800 font-light leading-[1.6] max-w-3xl"
            style={{ fontSize: "clamp(1.05rem, 1.75vw, 1.6rem)" }}
          >
            We are a visual branding studio specializing in creating
            internationally competitive brand identities, communication systems,
            and visual experiences. Our work combines strategic thinking,
            creative excellence, and market-driven design to help organizations
            build meaningful, memorable, and scalable brands.
          </p>

          <div className="flex flex-col gap-6">
            <div className="w-8 h-px bg-neutral-300" />
            <p className="text-[0.93rem] text-neutral-500 leading-relaxed max-w-xl">
              From brand discovery and strategic positioning to identity design,
              digital experiences, motion graphics, and marketing communications,
              we develop cohesive visual ecosystems that strengthen brand
              perception, increase engagement, and support business growth.
            </p>
          </div>

        </div>
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
    </main>
  );
}
