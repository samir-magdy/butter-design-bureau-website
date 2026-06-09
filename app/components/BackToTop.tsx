"use client";

export default function BackToTop() {
  return (
    <div className="relative z-10 flex justify-center py-16 bg-white">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="text-sm uppercase tracking-[0.3em] text-neutral-800 transition-colors duration-200 hover:text-black cursor-pointer"
      >
        Back to top
      </button>
    </div>
  );
}
