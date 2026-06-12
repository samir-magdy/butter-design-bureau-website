"use client";

import Link from "next/link";
import { useState } from "react";
import { SiBehance, SiInstagram } from "react-icons/si";

function IgGradient({ size }: { size: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <defs>
        <radialGradient id="ig-grad" cx="30%" cy="107%" r="160%">
          <stop offset="0%"  stopColor="#fdf497" />
          <stop offset="5%"  stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <path
        fill="url(#ig-grad)"
        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.058-1.69-.072-4.949-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
      />
    </svg>
  );
}


const navLinks = [
  { label: "Portfolio", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative flex mx-auto items-center justify-between px-6 py-6 sm:px-10">
      <Link
        href="/"
        aria-label="Home"
        onClick={() => setOpen(false)}
        className="group flex flex-col leading-none select-none"
      >
        <span className="text-2xl sm:text-[2.6rem] font-black tracking-[0.02em] text-neutral-900 transition-opacity duration-200 group-hover:opacity-70">
          Butter.
        </span>
      </Link>

      <div className="hidden md:flex items-center gap-8">
        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-8">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-[2rem] text-neutral-500 transition-colors duration-200 hover:text-neutral-900"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-6 pt-2">
          <a
            href="https://www.behance.net/amrksherif"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Behance"
            className="text-neutral-500 transition-colors duration-200 hover:text-neutral-900"
          >
            <SiBehance size={25} />
          </a>
          <a
            href="https://www.instagram.com/amr.sherif/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="group relative inline-flex"
          >
            <span className="transition-opacity duration-200 text-neutral-500 group-hover:opacity-0">
              <SiInstagram size={20} />
            </span>
            <span className="absolute inset-0 transition-opacity duration-200 opacity-0 group-hover:opacity-100">
              <IgGradient size={20} />
            </span>
          </a>
        </div>
      </div>

      <button
        className="flex md:hidden flex-col justify-center items-center gap-1.5 w-10 h-10"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span
          className={`block h-0.5 w-6 bg-neutral-700 transition-transform duration-200 ${open ? "translate-y-2 rotate-45" : ""}`}
        />
        <span
          className={`block h-0.5 w-6 bg-neutral-700 transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
        />
        <span
          className={`block h-0.5 w-6 bg-neutral-700 transition-transform duration-200 ${open ? "-translate-y-2 -rotate-45" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 z-50 bg-white border-t border-neutral-100 shadow-md md:hidden">
          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col px-6 py-6 gap-6">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-2xl text-neutral-500 transition-colors duration-200 hover:text-neutral-900"
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-5 px-6 pb-6">
            <a
              href="https://www.behance.net/amrksherif"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Behance"
              className="text-neutral-500 transition-colors duration-200 hover:text-neutral-900"
            >
              <SiBehance size={22} />
            </a>
            <a
              href="https://www.instagram.com/amr.sherif/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="group relative inline-flex"
            >
              <span className="transition-opacity duration-200 text-neutral-500 group-hover:opacity-0">
                <SiInstagram size={22} />
              </span>
              <span className="absolute inset-0 transition-opacity duration-200 opacity-0 group-hover:opacity-100">
                <IgGradient size={22} />
              </span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
