"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Portfolio", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative flex max-w-[100rem] mx-auto items-center justify-between px-6 py-6 sm:px-10">
      {/* Logo placeholder */}
      <Link href="/" aria-label="Home" onClick={() => setOpen(false)}>
        <img src="/logo.jpeg" alt="Logo" className="h-14 w-auto object-contain" />
      </Link>

      {/* Desktop nav */}
      <nav aria-label="Main navigation" className="hidden md:block">
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
        </div>
      )}
    </header>
  );
}
