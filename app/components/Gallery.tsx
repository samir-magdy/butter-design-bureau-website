"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/styles.css";
import type { GalleryItem } from "@/lib/data";
import BlurImage from "./BlurImage";

type Props = {
  slides: GalleryItem[];
  gapless?: boolean;
  contain?: boolean;
};

function getColSpan(cols: 2 | 3 | 6 | undefined): string {
  if (cols === 6) return "col-span-6";
  if (cols === 2) return "col-span-2";
  return "col-span-3";
}

function isVideo(src: string) {
  return src.endsWith(".mp4") || src.endsWith(".webm");
}

export default function Gallery({ slides, gapless, contain }: Props) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const lightboxSlides = slides.map((slide) =>
    isVideo(slide.src)
      ? {
          type: "video" as const,
          sources: [{ src: slide.src, type: "video/mp4" }],
          controls: true,
        }
      : { src: slide.src }
  );

  return (
    <>
      <div className={`mt-12 grid items-start grid-cols-6 ${gapless ? "" : "gap-3"}`}>
        {slides.map((slide, i) => (
          <button
            key={i}
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
            className={`focus:outline-none cursor-pointer ${getColSpan(slide.cols)}${slide.cols !== 6 && !contain ? " relative overflow-hidden aspect-square" : ""}`}
          >
            {isVideo(slide.src) ? (
              <video
                src={slide.src}
                autoPlay
                loop
                muted
                playsInline
                className={`block w-full transition-opacity duration-300 hover:opacity-80${slide.cols !== 6 ? " h-full object-cover" : " max-w-full"}`}
              />
            ) : slide.cols === 6 || contain ? (
              <BlurImage
                src={slide.src}
                alt=""
                loading="lazy"
                decoding="async"
                className="block w-full h-auto transition-opacity duration-300 hover:opacity-80"
              />
            ) : (
              <BlurImage
                src={slide.src}
                alt=""
                loading="lazy"
                decoding="async"
                className={`absolute inset-0 h-full w-full ${slide.contain ? "object-contain" : "object-cover"} transition-opacity duration-300 hover:opacity-80`}
              />
            )}
          </button>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={lightboxSlides}
        plugins={[Video]}
      />
    </>
  );
}
