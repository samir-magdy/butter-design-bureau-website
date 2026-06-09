"use client";

import Link from "next/link";
import { useState } from "react";
import { SiBehance, SiInstagram } from "react-icons/si";


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
      {/* Wordmark */}
      <Link
        href="/"
        aria-label="Home"
        onClick={() => setOpen(false)}
        className="group flex flex-col leading-none select-none"
      >
        <span className="text-[2rem] font-black tracking-[-0.03em] text-neutral-900 transition-opacity duration-200 group-hover:opacity-70">
          Butter
        </span>
        <span className="text-[0.9rem] font-medium uppercase tracking-[0.22em] text-neutral-400">
          Design Studio
        </span>
      </Link>

      {/* Desktop nav */}
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

        <div className="flex items-center gap-4">
          <a
            href="https://www.behance.net/amrksherif"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Behance"
            className="text-neutral-500 transition-colors duration-200 hover:text-neutral-900"
          >
            <SiBehance size={20} />
          </a>
          <a
            href="https://www.instagram.com/amr.sherif/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-neutral-500 transition-colors duration-200 hover:text-neutral-900"
          >
            <SiInstagram size={20} />
          </a>
        </div>
      </div>

      {/* Hamburger button */}
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

      {/* Mobile menu overlay */}
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
              className="text-neutral-500 transition-colors duration-200 hover:text-neutral-900"
            >
              <SiInstagram size={22} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
