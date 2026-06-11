"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

type Props = {
  slides: { src: string }[];
};

export default function Gallery({ slides }: Props) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <>
      <div className="mt-12 grid sm:grid-cols-2 gap-3">
        {slides.map((slide, i) => (
          <button
            key={i}
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
            className="overflow-hidden focus:outline-none cursor-pointer"
          >
            <img
              src={slide.src}
              alt=""
              className="aspect-4/3 w-full object-cover transition-opacity duration-300 hover:opacity-80"
            />
          </button>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
      />
    </>
  );
}
