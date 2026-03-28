"use client";

import { useState, useEffect } from "react";
import { WHATSAPP_URL } from "./WhatsAppButton";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-creme-50/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo / Brand */}
        <a href="#" className="group flex items-baseline gap-1.5">
          <span className="font-heading text-2xl font-semibold tracking-tight text-choco-600 transition-colors lg:text-[1.65rem]">
            Doces da Lelis
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-rosa-400 transition-transform group-hover:scale-150" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-10 md:flex">
          {[
            ["Início", "#"],
            ["Doces", "#doces"],
            ["Galeria", "#galeria"],
            ["Sobre", "#sobre"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="relative font-body text-sm font-medium tracking-wide text-choco-400 transition-colors hover:text-choco-600 after:absolute after:bottom-[-4px] after:left-0 after:h-[1.5px] after:w-0 after:bg-rosa-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              {label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-choco-500 px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-choco-600 hover:shadow-lg hover:shadow-choco-500/20"
          >
            Pedir agora
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Menu"
        >
          <span
            className={`block h-[2px] w-6 bg-choco-500 transition-all duration-300 ${
              menuOpen ? "translate-y-[5.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-choco-500 transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-choco-500 transition-all duration-300 ${
              menuOpen ? "-translate-y-[5.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-500 md:hidden ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 bg-creme-50/98 px-6 pb-6 pt-4 backdrop-blur-md">
          {[
            ["Início", "#"],
            ["Doces", "#doces"],
            ["Galeria", "#galeria"],
            ["Sobre", "#sobre"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-2.5 font-body text-sm font-medium text-choco-500 transition-colors hover:bg-rosa-50"
            >
              {label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 rounded-full bg-choco-500 px-5 py-2.5 text-center text-sm font-medium text-white"
          >
            Pedir agora
          </a>
        </nav>
      </div>
    </header>
  );
}
