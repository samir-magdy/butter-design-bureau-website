"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen({ visible }: { visible: boolean }) {
  const [mounted, setMounted] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (!visible) setFading(true);
  }, [visible]);

  if (!mounted) return null;

  return (
    <div
      onTransitionEnd={() => fading && setMounted(false)}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black transition-opacity duration-700 ${fading ? "opacity-0 pointer-events-none" : "opacity-100"}`}
    >
      <p className="text-white font-bold text-4xl tracking-tight mb-10">Butter.</p>
      <div className="relative w-7 h-7">
        <div className="absolute inset-0 rounded-full border border-white/10" />
        <div className="absolute inset-0 rounded-full border border-transparent border-t-white animate-spin" />
      </div>
    </div>
  );
}
