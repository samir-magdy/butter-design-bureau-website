import { FiMail, FiPhone } from "react-icons/fi";
import { FaBehance, FaInstagram } from "react-icons/fa";
import type { IconType } from "react-icons";

export const metadata = {
  title: "Contact",
  description:
    "Start a project with Butter Design Bureau. We're open for brand identity commissions, strategic collaborations, and visual experience work.",
};

const channels: {
  index: string;
  label: string;
  icon: IconType;
  display: string;
  href: string;
  external: boolean;
}[] = [
  {
    index: "01",
    label: "Email",
    icon: FiMail,
    display: "a.sherifworks@gmail.com",
    href: "mailto:a.sherifworks@gmail.com",
    external: false,
  },
  {
    index: "02",
    label: "Phone",
    icon: FiPhone,
    display: "+20 010 912 83458",
    href: "tel:+201091283458",
    external: false,
  },
  {
    index: "03",
    label: "Behance",
    icon: FaBehance,
    display: "amrksherif",
    href: "https://www.behance.net/amrksherif",
    external: true,
  },
  {
    index: "04",
    label: "Instagram",
    icon: FaInstagram,
    display: "@amr.sherif",
    href: "https://www.instagram.com/amr.sherif/",
    external: true,
  },
];

export default function ContactPage() {
  return (
    <main className="flex flex-col pb-10">
      <section className="px-8 sm:px-10 lg:px-16 pb-8 border-b border-neutral-200">
        <p className="text-[0.65rem] uppercase tracking-[0.35em] text-neutral-400 mb-2">
          Get in touch
        </p>
        <h1
          className="font-black tracking-tight text-neutral-900 leading-[1] select-none"
          style={{ fontSize: "clamp(3.5rem, 9vw, 6rem)" }}
        >
          Say<br />hello.
        </h1>
      </section>

      <div className="flex-1">
        {channels.map((ch) => {
          const Icon = ch.icon;
          return (
          <a
            key={ch.index}
            href={ch.href}
            target={ch.external ? "_blank" : undefined}
            rel={ch.external ? "noopener noreferrer" : undefined}
            className="group flex items-center gap-6 px-8 sm:px-10 lg:px-16 py-8 sm:py-9 border-b border-neutral-200 hover:bg-[#f9f8f6] transition-colors duration-200"
          >
            {/* Desktop: index above icon in fixed left column */}
            <div className="hidden sm:flex flex-col items-start justify-center gap-1.5 w-24 shrink-0 select-none">
              <span className="text-[0.6rem] tracking-[0.3em] uppercase text-neutral-400">
                {ch.index}
              </span>
              <Icon size={24} className="text-neutral-400" aria-label={ch.label} />
            </div>

            {/* Mobile: icon + display text side by side */}
            <div className="flex sm:hidden items-center gap-6 flex-1 min-w-0">
              <Icon size={22} className="text-neutral-400 shrink-0" aria-label={ch.label} />
              <span
                className="font-light text-neutral-900 leading-tight break-all"
                style={{ fontSize: "clamp(1rem, 5vw, 1.5rem)" }}
              >
                {ch.display}
              </span>
            </div>

            {/* Desktop: display text */}
            <div className="hidden sm:block flex-1 min-w-0">
              <span
                className="block font-light text-neutral-900 leading-none"
                style={{ fontSize: "clamp(1.4rem, 3.2vw, 3.2rem)" }}
              >
                {ch.display}
              </span>
            </div>

            <div className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
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
          );
        })}
      </div>
    </main>
  );
}
