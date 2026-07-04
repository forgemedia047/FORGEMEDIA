"use client";

import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import Counter from "@/components/ui/Counter";
import Eyebrow from "@/components/ui/Eyebrow";

const floatingStats = [
  { value: 4.8, decimals: 1, label: "M avg. monthly views", pos: "top-[60%] left-[2%]", delay: 1.4 },
  { value: 92, label: "% client retention", pos: "top-[22%] right-[5%]", delay: 0.7 },
  { value: 48, label: "Hrs saved / month", pos: "top-[64%] right-[3%]", delay: 2.1 },
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-40 pb-24">
      {/* animated background grid */}
      <div className="absolute inset-0 z-0 hero-grid-bg animate-gridDrift" aria-hidden="true" />
      <div
        className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] z-0 blur-[20px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.10), transparent 65%)" }}
        aria-hidden="true"
      />

      {/* floating glass cards — hidden below xl to avoid clutter on smaller screens */}
      <div className="absolute inset-0 z-[1] pointer-events-none hidden xl:block" aria-hidden="true">
        {floatingStats.map((s, i) => (
          <div
            key={i}
            className={`absolute ${s.pos} pointer-events-auto bg-glass border border-glass-border backdrop-blur-md rounded-[18px] px-[18px] py-4 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] animate-floaty transition-transform duration-300 hover:-translate-y-1.5 hover:scale-[1.03]`}
            style={{ animationDelay: `${s.delay}s` }}
          >
            <div className="font-display text-[22px] font-semibold">
              <Counter value={s.value} decimals={s.decimals ?? 0} />
            </div>
            <div className="text-[11px] text-muted mt-0.5 tracking-wide">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="max-w-[1240px] mx-auto px-8 relative z-[2] text-center">
        <Eyebrow center>For singers, coaches, servers &amp; founders</Eyebrow>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 0.84, 0.36, 1] }}
          className="text-[38px] sm:text-6xl lg:text-[88px] leading-[1.02] font-medium tracking-[-0.035em]"
        >
          Turn your expertise into
          <br />a lead-generating brand.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 0.84, 0.36, 1] }}
          className="max-w-xl mx-auto mt-6 text-base sm:text-lg text-muted leading-relaxed"
        >
          Forgemedia handles your content strategy, short-form editing, and social media management — so your
          authority compounds while you stay focused on your practice.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 0.84, 0.36, 1] }}
          className="flex flex-wrap gap-4 justify-center mt-11"
        >
          <MagneticButton href="https://calendly.com/forgemediabusiness/30min">Book Your Free Strategy Call</MagneticButton>
          <MagneticButton href="#niches" variant="ghost" showArrow={false}>
            See Our Niches
          </MagneticButton>
        </motion.div>

        <p className="mt-8 text-[12.5px] text-muted-dim tracking-wide">
          No long-term contracts · Custom content system · Results tracked weekly
        </p>
      </div>
    </section>
  );
}
