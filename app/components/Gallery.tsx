"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/styles.css";

type Props = {
  slides: { src: string }[];
  masonry?: boolean;
};

function isVideo(src: string) {
  return src.endsWith(".mp4") || src.endsWith(".webm");
}

export default function Gallery({ slides, masonry }: Props) {
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
      <div className={masonry ? "mt-12 columns-2 gap-3" : "mt-12 grid sm:grid-cols-2 gap-3"}>
        {slides.map((slide, i) => (
          <button
            key={i}
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
            className={`overflow-hidden focus:outline-none cursor-pointer${masonry ? " mb-3 break-inside-avoid block w-full" : ""}`}
          >
            {isVideo(slide.src) ? (
              <video
                src={slide.src}
                autoPlay
                loop
                muted
                playsInline
                className={`w-full object-cover transition-opacity duration-300 hover:opacity-80${masonry ? "" : " aspect-5/3"}`}
              />
            ) : (
              <img
                src={slide.src}
                alt=""
                className={`w-full object-cover transition-opacity duration-300 hover:opacity-80${masonry ? "" : " aspect-5/3"}`}
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
