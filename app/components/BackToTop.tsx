"use client";

export default function BackToTop() {
  return (
    <div className="relative z-10 flex justify-center py-12 pb-8 bg-white">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="group border px-4 py-2 flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-neutral-800 hover:text-black transition-colors duration-200 cursor-pointer"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          className="transition-transform duration-300"
        >
          <path d="M2 9L7 4L12 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        Back to top

        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          className="transition-transform duration-300"
        >
          <path d="M2 9L7 4L12 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
