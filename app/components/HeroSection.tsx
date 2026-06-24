"use client";
import { useEffect, useRef } from "react";
// import HeroBanner from "./HeroBanner";

export default function HeroSection({ onReady }: { onReady?: () => void }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (ref.current) {
        ref.current.style.transform = `translateY(-${window.scrollY * 0.35}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={ref}
      className="fixed inset-x-0 top-0 z-0 h-screen"
      style={{ willChange: "transform" }}
    >
      {/* <HeroBanner /> */}
      <div className="overflow-hidden lg:overflow-visible flex justify-center">
        <video
          className="max-w-none w-auto h-[calc(100dvh-8.33vw)] lg:max-w-full lg:w-full lg:h-auto cover-bottom"
          src="/hero-sequence.mp4"
          autoPlay
          loop
          muted
          playsInline
          onCanPlay={onReady}
        />
      </div>
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-black/80 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bottom-0 flex items-center justify-between pointer-events-none">
        <div className="leading-[1.05] ps-6 sm:ps-16 absolute bottom-24 sm:bottom-28">
          <p className="font-bold text-white mb-6 sm:mb-12 text-[2rem] lg:text-[6vw]">Butter.</p>
          {/* <p className="font-light text-white m-0 text-[1rem] lg:text-[2.25vw]">Design Bureau.</p> */}
        <p className="text-start text-white m-0 text-[1.5rem] lg:text-[2.5vw]">
          We build brands that <strong>feel refined</strong>
          <br />
          and <strong>connect effortlessly.</strong>
        </p>
        </div>
      </div>
    </section>
  );
}
