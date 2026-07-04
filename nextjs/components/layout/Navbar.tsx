"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import MagneticButton from "@/components/ui/MagneticButton";

const links = [
  { label: "Process", href: "#process" },
  { label: "Services", href: "#services" },
  { label: "Niches", href: "#niches" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-400",
        scrolled ? "py-3.5 bg-black/60 backdrop-blur-2xl border-b border-glass-border" : "py-5.5"
      )}
    >
      <nav className="max-w-[1240px] mx-auto px-8 flex items-center justify-between">
        <a href="#hero" className="font-display font-semibold text-lg flex items-center gap-2" aria-label="Forgemedia home">
          <span className="w-[7px] h-[7px] rounded-full bg-white inline-block" />
          Forgemedia
        </a>

        <div className="hidden md:flex gap-9 text-sm text-muted">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="relative hover:text-white transition-colors duration-300 group">
              {l.label}
              <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <MagneticButton href="https://calendly.com/forgemediabusiness/30min" size="sm">
          Book a Strategy Call
        </MagneticButton>
      </nav>
    </header>
  );
}
