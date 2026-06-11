"use client";

import { useEffect, useRef } from "react";

const CATEGORIES = [
  "Branding Strategy",
  "Visual Identity Design",
  "Packaging Design",
  "Rebranding",
  "Website & Digital Experience",
  "Animation",
  "Presentation Design",
];

const ITEMS = [...CATEGORIES, ...CATEGORIES, ...CATEGORIES, ...CATEGORIES];

function Track() {
  return (
    <div className="flex shrink-0">
      {ITEMS.map((cat, i) => (
        <div
          key={i}
          className="mx-5 text-sm sm:text-lg tracking-[0.2em] uppercase text-neutral-900/90 flex items-center gap-5 whitespace-nowrap"
        >
          {cat}
          <span className="text-[#ba9987b0] text-[1rem]">✦</span>
        </div>
      ))}
    </div>
  );
}

export default function MarqueeTrack() {
  const innerRef = useRef(null);
  const xRef = useRef(0);
  const rafRef = useRef(null);

  useEffect(() => {
    const el = innerRef.current;
    // px/frame at ~60fps. Mobile gets ~1.7×, desktop ~1×
    const speed = 1.6;

    const tick = () => {
      xRef.current -= speed;
      const half = el.scrollWidth / 2;
      if (Math.abs(xRef.current) >= half) xRef.current = 0;
      el.style.transform = `translateX(${xRef.current}px)`;
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div className="overflow-hidden border-b border-black/60 py-3">
      <div ref={innerRef} className="flex">
        <Track />
        <Track />
      </div>
    </div>
  );
}
