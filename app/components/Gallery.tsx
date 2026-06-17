"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/styles.css";
import type { GalleryItem } from "@/lib/data";

type Props = {
  slides: GalleryItem[];
  gridCols?: 2 | 6;
  gapless?: boolean;
};

function getColSpan(cols: 1 | 2 | 3 | undefined, gridCols: 2 | 6): string {
  if (gridCols === 6) {
    if (cols === 3) return "col-span-2"; // 3 per row
    if (cols === 2) return "col-span-6"; // full width
    return "col-span-3";                 // default: 2 per row
  }
  if (cols === 2) return "col-span-2";   // full width
  return "col-span-1";                   // default: 2 per row
}

function isVideo(src: string) {
  return src.endsWith(".mp4") || src.endsWith(".webm");
}

export default function Gallery({ slides, gridCols = 2, gapless }: Props) {
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

  const gridClass = gridCols === 6 ? "sm:grid-cols-6" : gapless ? "grid-cols-2" : "";

  return (
    <>
      <div className={`mt-12 grid items-start ${gridClass}${gapless ? "" : " gap-3"}`}>
        {slides.map((slide, i) => (
          <button
            key={i}
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
            className={`overflow-hidden focus:outline-none cursor-pointer ${getColSpan(slide.cols, gridCols)}`}
          >
            {isVideo(slide.src) ? (
              <video
                src={slide.src}
                autoPlay
                loop
                muted
                playsInline
                className="block w-full transition-opacity duration-300 hover:opacity-80"
              />
            ) : (
              <img
                src={slide.src}
                alt=""
                className="block w-full transition-opacity duration-300 hover:opacity-80"
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
