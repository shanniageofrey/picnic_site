"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FiInstagram, FiMenu, FiX } from "react-icons/fi";

const LINKS = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/book", label: "Book" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ink/90 backdrop-blur-md border-b border-cream/10 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 md:px-10 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-xl md:text-2xl tracking-wide text-cream"
          onClick={() => setOpen(false)}
        >
          The <em className="text-rose not-italic font-medium">Laviera</em>{" "}
          Picnics
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm tracking-[0.08em] uppercase text-cream-dim hover:text-rose transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://instagram.com/thelavierapicnics"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="The Laviera Picnics on Instagram"
            className="text-cream-dim hover:text-rose transition-colors duration-300"
          >
            <FiInstagram size={18} />
          </a>
          <Link
            href="/book"
            className="rounded-full border border-rose px-5 py-2 text-sm tracking-[0.06em] uppercase text-rose hover:bg-rose hover:text-ink transition-all duration-300"
          >
            Reserve a date
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-cream"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          open ? "max-h-80 mt-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-5 px-6 pb-6">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-base uppercase tracking-[0.08em] text-cream-dim hover:text-rose transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/book"
            onClick={() => setOpen(false)}
            className="rounded-full border border-rose px-5 py-2.5 text-center text-sm tracking-[0.06em] uppercase text-rose"
          >
            Reserve a date
          </Link>
        </div>
      </div>
    </header>
  );
}
