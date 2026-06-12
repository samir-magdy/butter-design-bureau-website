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
    <main className="flex flex-col min-h-[calc(100dvh-5rem)] overflow-x-clip px-8 sm:px-10 lg:px-16 pb-4">

      {/* ── Top strip ── */}
      {/* <div
        className="animate-fade-up flex items-center justify-between py-5 border-b border-neutral-200"
      >
        <span className="text-[0.65rem] uppercase tracking-[0.35em] text-neutral-400">
          About the studio
        </span>
        <span className="text-[0.65rem] uppercase tracking-[0.35em] text-neutral-400">
          Visual Branding
        </span>
      </div> */}

      {/* ── Headline ── */}
      <section
        className="animate-fade-up relative overflow-hidden py-12 sm:py-16 border-b border-neutral-200"
        style={{ animationDelay: "80ms" }}
      >
        {/* watermark letter */}
  
        <h1
          className="relative font-black tracking-tight text-neutral-900 leading-[0.88] select-none"
          style={{ fontSize: "clamp(3.2rem, 8.5vw, 7rem)" }}
        >
          Who we are.
        </h1>
      </section>

      {/* ── Body ── */}
      <div
        className="animate-fade-up flex-1 grid lg:grid-cols-[13rem_1fr] border-b border-neutral-200"
        style={{ animationDelay: "160ms" }}
      >
        {/* Left — capabilities sidebar */}
        <aside className="hidden lg:flex flex-col py-12 pr-8 border-r border-neutral-200">
          <p className="text-[0.58rem] uppercase tracking-[0.35em] text-neutral-400 mb-7">
            Capabilities
          </p>
          <ul className="flex flex-col gap-4">
            {capabilities.map((cap, i) => (
              <li
                key={cap}
                className="animate-fade-up flex items-center gap-3"
                style={{ animationDelay: `${220 + i * 55}ms` }}
              >
                <span className="w-5 h-px bg-neutral-300 shrink-0" />
                <span className="text-[0.78rem] tracking-[0.07em] text-neutral-600 leading-snug">
                  {cap}
                </span>
              </li>
            ))}
          </ul>
        </aside>

        {/* Right — text content */}
        <div className="flex flex-col justify-between gap-14 py-12 lg:pl-12 xl:pl-16">

          {/* Large statement paragraph */}
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

          {/* Divider + secondary paragraph */}
          <div className="flex flex-col gap-6">
            <div className="w-8 h-px bg-neutral-300" />
            <p className="text-[0.93rem] text-neutral-500 leading-relaxed max-w-xl">
              From brand discovery and strategic positioning to identity design,
              digital experiences, motion graphics, and marketing communications,
              we develop cohesive visual ecosystems that strengthen brand
              perception, increase engagement, and support business growth.
            </p>

            {/* Mobile capabilities */}
            {/* <div className="flex flex-wrap gap-x-6 gap-y-2 pt-4 lg:hidden">
              {capabilities.map((cap) => (
                <span
                  key={cap}
                  className="text-[0.68rem] uppercase tracking-[0.2em] text-neutral-400"
                >
                  {cap}
                </span>
              ))}
            </div> */}
          </div>

        </div>
      </div>

      {/* ── Bottom strip ── */}
      <div
        className="animate-fade-up flex items-center justify-between py-7"
        style={{ animationDelay: "360ms" }}
      >
        <p className="text-[0.65rem] uppercase tracking-[0.25em] text-neutral-400">
          Cairo, Egypt
        </p>
        <a
          href="/contact"
          className="group flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.25em] text-neutral-500 hover:text-neutral-900 transition-colors duration-200"
        >
          Start a project
          <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">
            →
          </span>
        </a>
      </div>

    </main>
  );
}
