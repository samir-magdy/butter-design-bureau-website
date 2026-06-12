// import ContactForm from "./ContactForm";
// (form logic is on standby in ContactForm.tsx + actions.ts — uncomment when ready to wire an email provider)

export const metadata = {
  title: "Contact",
  description:
    "Start a project with Butter Design Bureau. We're open for brand identity commissions, strategic collaborations, and visual experience work.",
};

const channels = [
  {
    index: "01",
    label: "Email",
    display: "a.sherifworks@gmail.com",
    href: "mailto:a.sherifworks@gmail.com",
    external: false,
    delay: "0ms",
  },
  {
    index: "02",
    label: "Phone",
    display: "+20 010 912 83458",
    href: "tel:+201091283458",
    external: false,
    delay: "80ms",
  },
  {
    index: "03",
    label: "Behance",
    display: "amrksherif",
    href: "https://www.behance.net/amrksherif",
    external: true,
    delay: "160ms",
  },
  {
    index: "04",
    label: "Instagram",
    display: "@amr.sherif",
    href: "https://www.instagram.com/amr.sherif/",
    external: true,
    delay: "240ms",
  },
];

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-[calc(100dvh-5rem)] pb-4">

      {/* ── Hero ── */}
      <section className="animate-fade-up px-8 sm:px-10 lg:px-16 pt-14 pb-16 border-b border-neutral-200">
        <p className="text-[0.65rem] uppercase tracking-[0.35em] text-neutral-400 mb-5">
          Get in touch
        </p>
        <h1
          className="font-black tracking-tight text-neutral-900 leading-[0.92] select-none"
          style={{ fontSize: "clamp(3.5rem, 9vw, 7rem)" }}
        >
          Say<br />hello.
        </h1>
        {/* <p className="mt-7 text-[0.9rem] text-neutral-500 max-w-xs leading-relaxed">
          Open for new projects,<br />
          collaborations, and conversations.
        </p> */}
      </section>

      {/* ── Contact rows ── */}
      <div className="flex-1">
        {channels.map((ch) => (
          <a
            key={ch.index}
            href={ch.href}
            target={ch.external ? "_blank" : undefined}
            rel={ch.external ? "noopener noreferrer" : undefined}
            className="animate-fade-up group flex items-center gap-6 px-8 sm:px-10 lg:px-16 py-8 sm:py-9 border-b border-neutral-200 hover:bg-[#f9f8f6] transition-colors duration-200"
            style={{ animationDelay: ch.delay }}
          >
            {/* Index + label — hidden on mobile, shown sm+ */}
            <div className="hidden sm:flex flex-col justify-center gap-0.5 w-24 shrink-0 select-none">
              <span className="text-[0.6rem] tracking-[0.3em] uppercase text-neutral-400">
                {ch.index}
              </span>
              <span className="text-[0.7rem] tracking-[0.18em] uppercase text-neutral-500 font-medium">
                {ch.label}
              </span>
            </div>

            {/* Value */}
            <div className="flex-1 min-w-0">
              <span
                className="block font-light text-neutral-900 leading-none transition-transform duration-300 group-hover:translate-x-1"
                style={{ fontSize: "clamp(1.4rem, 3.2vw, 3.2rem)" }}
              >
                {ch.display}
              </span>
              {/* mobile label */}
              <span className="block sm:hidden text-[0.6rem] tracking-[0.28em] uppercase text-neutral-400 mt-2">
                {ch.label}
              </span>
            </div>

            {/* Arrow */}
            <div className="shrink-0 -translate-x-3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="text-neutral-400"
              >
                <path
                  d="M4 16L16 4M16 4H7M16 4V13"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </a>
        ))}
      </div>

      {/* ── Footer strip ── */}
      <div
        className="animate-fade-up px-8 sm:px-10 lg:px-16 py-8 flex items-center justify-between"
        style={{ animationDelay: "320ms" }}
      >
        <p className="text-[0.65rem] tracking-[0.25em] uppercase text-neutral-400">
          Cairo, Egypt
        </p>
        <p className="text-[0.65rem] tracking-[0.25em] uppercase text-neutral-400">
          © {new Date().getFullYear()} Butter Design Burea
        </p>
      </div>

    </main>
  );
}
