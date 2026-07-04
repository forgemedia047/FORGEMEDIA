"use client";

import { ReactNode, useRef } from "react";
import clsx from "clsx";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  tilt?: boolean;
}

/**
 * GlassCard — the base glassmorphic surface used throughout the site.
 * Pass `tilt` to enable a subtle 3D pointer-follow tilt (used on Service cards).
 */
export default function GlassCard({ children, className, tilt = false }: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!tilt || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    ref.current.style.transform = `perspective(700px) rotateX(${py * -6}deg) rotateY(${px * 6}deg) translateY(-4px)`;
  }

  function handleMouseLeave() {
    if (!tilt || !ref.current) return;
    ref.current.style.transform = "perspective(700px) rotateX(0) rotateY(0)";
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={clsx(
        "bg-glass border border-glass-border rounded-[20px] transition-[border-color,transform,background] duration-300",
        "hover:border-white/25",
        tilt && "[transform-style:preserve-3d]",
        className
      )}
    >
      {children}
    </div>
  );
}
