import { LuArrowUpRight } from "react-icons/lu";

export default function SiteByCredit() {
  return (
    <footer className="flex justify-center gap-1.5 pb-4">
      <span className="text-[0.55rem] sm:text-[0.6rem] sm:tracking-[0.15em] uppercase tracking-widest text-neutral-600">
        Site by
      </span>
      <a
        href="https://smweb.studio"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-0.5 sm:text-[0.6rem] sm:tracking-[0.15em] text-[0.55rem] uppercase tracking-widest decoration-[0.5px] hover:decoration-1 text-neutral-800 underline underline-offset-2 decoration-neutral-600 hover:text-black hover:decoration-black transition-colors duration-200"
      >
        SM Web Studio
        <LuArrowUpRight className="w-2 h-2 sm:w-2.5 sm:h-2.5" />
      </a>
    </footer>
  );
}
