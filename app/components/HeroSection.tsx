"use client";
import { useEffect, useRef } from "react";
import HeroBanner from "./HeroBanner";
import Image from "next/image"

export default function HeroSection() {
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
      <HeroBanner />
      <div className="overflow-hidden lg:overflow-visible flex justify-center">
        <Image
          className="max-w-none w-auto h-[calc(100dvh-8.33vw)] lg:max-w-full lg:w-full lg:h-auto cover-bottom"
          src="/printables-cover.webp"
          alt=""
          width={4000}
          height={2250}
          priority
        />
      </div>
    </section>
  );
}
