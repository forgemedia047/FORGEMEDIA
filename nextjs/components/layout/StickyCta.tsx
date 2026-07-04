"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

export default function StickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setShow(window.scrollY > 500);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={clsx(
        "md:hidden fixed bottom-0 left-0 right-0 z-[60] px-5 pt-3.5 bg-black/75 backdrop-blur-2xl border-t border-glass-border transition-transform duration-400",
        show ? "translate-y-0" : "translate-y-full"
      )}
      style={{ paddingBottom: "calc(14px + env(safe-area-inset-bottom))" }}
    >
      <a
        href="https://calendly.com/forgemediabusiness/30min"
        target="_blank"
        rel="noopener"
        className="block w-full text-center bg-white text-black font-display font-medium text-sm rounded-full py-3.5"
      >
        Book Your Free Strategy Call
      </a>
    </div>
  );
}
