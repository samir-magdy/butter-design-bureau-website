import { LuArrowUpRight } from "react-icons/lu";

export default function SiteByCredit() {
  return (
    <footer className="flex justify-center items-center gap-1.5 pb-8">
      <span className="text-[0.65rem] sm:text-xs sm:tracking-[0.15em] uppercase tracking-widest text-neutral-500">
        Website by
      </span>
      <a
        href="https://smwebdesign.studio"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-0.5 sm:text-xs sm:tracking-[0.15em] text-[0.65rem] uppercase font-semibold tracking-widest text-neutral-600 underline underline-offset-2 decoration-neutral-600 hover:text-black hover:decoration-black transition-colors duration-200"
      >
        SM Web Design Studio
        <LuArrowUpRight size={10} />
      </a>
    </footer>
  );
}
