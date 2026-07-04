"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import clsx from "clsx";
import { ArrowRight } from "./icons";

interface MagneticButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  size?: "md" | "sm";
  showArrow?: boolean;
  className?: string;
}

/**
 * MagneticButton — CTA button that gently pulls toward the cursor on hover
 * and carries a soft glow on the primary variant. Reusable across every CTA
 * in the site (nav, hero, final CTA, sticky mobile bar).
 */
export default function MagneticButton({
  href,
  children,
  variant = "primary",
  size = "md",
  showArrow = true,
  className,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 12 });
  const springY = useSpring(y, { stiffness: 150, damping: 12 });

  function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set(relX * 0.28);
    y.set(relY * 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const isExternal = href.startsWith("http");

  return (
    <motion.a
      ref={ref}
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener" : undefined}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      whileHover={{ scale: 1.02 }}
      className={clsx(
        "inline-flex items-center justify-center gap-2.5 rounded-full font-display font-medium whitespace-nowrap transition-shadow duration-300",
        size === "md" ? "px-7 py-4 text-sm" : "px-5 py-2.5 text-[13px]",
        variant === "primary" &&
          "bg-white text-black hover:shadow-[0_0_0_1px_rgba(255,255,255,0.4),0_12px_40px_-8px_rgba(255,255,255,0.35)]",
        variant === "ghost" &&
          "bg-transparent text-white border border-glass-border hover:bg-glass hover:border-white/25",
        className
      )}
    >
      {children}
      {showArrow && <ArrowRight className="w-3.5 h-3.5" />}
    </motion.a>
  );
}
