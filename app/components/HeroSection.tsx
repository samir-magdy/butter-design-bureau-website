"use client";
import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    let done = false;
    let minTimer: ReturnType<typeof setTimeout> | undefined;

    // Keep the overlay up for at least 2s after page load, even if the
    // video is already ready. performance.now() is time since navigation
    // start, so it already accounts for time spent before this effect ran.
    const minRemaining = Math.max(0, 4000 - performance.now());

    const reveal = () => {
      done = true;
      setDismissed(true);
    };

    const dismiss = () => {
      if (done) return;
      if (minRemaining > 0) {
        // Defer until the minimum display time has elapsed.
        done = true;
        minTimer = setTimeout(() => setDismissed(true), minRemaining);
        return;
      }
      reveal();
    };

    // Measure how long the page has already been loading.
    // On slow connections the bundle itself takes several seconds to arrive —
    // by the time this effect runs, part of the 6s budget is already spent.
    const elapsed = performance.now();
    const remaining = Math.max(0, 6000 - elapsed);

    if (remaining === 0) {
      dismiss();
      return;
    }

    const video = videoRef.current;
    if (video && video.readyState >= 3) {
      dismiss();
      return;
    }

    video?.addEventListener("canplay", dismiss, { once: true });
    const timeout = setTimeout(dismiss, remaining);

    return () => {
      video?.removeEventListener("canplay", dismiss);
      clearTimeout(timeout);
      if (minTimer) clearTimeout(minTimer);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (sectionRef.current) {
        sectionRef.current.style.transform = `translateY(-${window.scrollY * 0.35}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="fixed inset-x-0 top-0 z-0 h-screen bg-black"
      style={{ willChange: "transform" }}
    >
      <div className="overflow-hidden lg:overflow-visible flex justify-center">
        <video
          ref={videoRef}
          className="max-w-none w-auto h-[calc(100dvh-8.33vw)] lg:max-w-full lg:w-full lg:h-auto cover-bottom"
          src="/hero-sequence.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-black/80 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bottom-0 flex items-center justify-between pointer-events-none">
        <div className="leading-[1.05] ps-6 sm:ps-16 absolute bottom-28 sm:bottom-20">
          <p className="font-bold text-white mb-6 sm:mb-12 text-[2.5rem] lg:text-[6vw]">
            Butter.
          </p>
          <p className="text-start leading-snug text-white m-0 text-[1.3rem] lg:text-[2.5vw]">
            We build brands that <strong>feel refined</strong>
            <br />
            and <strong>connect effortlessly.</strong>
          </p>
        </div>
      </div>
      <div
        className={`loading-gate fixed inset-0 z-50 bg-black flex flex-col items-center justify-center gap-12${dismissed ? " dismissed" : ""}`}
        aria-hidden={dismissed}
      >
        <div className="flex flex-col items-center gap-2 select-none text-center">
          <p className="font-bold text-white leading-none tracking-[0.02em] text-[3.5rem] sm:text-[5rem]">
            Butter.
          </p>
          {/* Editorial tracking polish for Design Bureau */}
          <p className="block text-[1rem] sm:text-[1.5rem] tracking-[0.22em] uppercase text-neutral-400 font-light pl-[0.1em]">
            Design Bureau.
          </p>
        </div>
        {/* Always mounted so it fades out with the gate instead of vanishing */}
        <div className="relative w-40 h-[3px] bg-white/5 overflow-hidden rounded-full">
          {/* The main hot accent color */}
          <div className="absolute loading-bar inset-y-0 left-0 w-full bg-linear-to-r from-transparent via-[#e04d28] to-transparent" />
          {/* The bright white "melting core" that trails slightly behind */}
          <div className="absolute loading-bar-core inset-y-0 left-0 w-full bg-linear-to-r from-transparent via-white/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
