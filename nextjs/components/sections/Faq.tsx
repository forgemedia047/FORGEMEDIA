"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import { PlusIcon } from "@/components/ui/icons";

const faqs = [
  {
    q: "How fast will I see results?",
    a: "Most clients see measurable engagement shifts within the first 3–4 weeks, with lead-flow improvements typically compounding by month two as the content system builds momentum.",
  },
  {
    q: "Do I need to film my own content?",
    a: "We give you a simple, low-effort filming framework — most clients spend under an hour a week capturing raw footage, and we handle everything from there.",
  },
  {
    q: "What platforms do you manage?",
    a: "Instagram, TikTok, YouTube Shorts, LinkedIn, and Facebook — we recommend a focused platform mix based on where your ideal clients actually spend time.",
  },
  {
    q: "Is there a long-term contract?",
    a: "No. We work month-to-month because we believe our results should be the reason you stay, not a contract.",
  },
  {
    q: "Who is this for?",
    a: "Singers, coaches, servers, and founders who want their content to actively generate leads and authority, not just impressions.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-36">
      <div className="max-w-[820px] mx-auto px-8">
        <Reveal className="max-w-xl mb-16">
          <Eyebrow>Questions</Eyebrow>
          <h2 className="text-[30px] sm:text-5xl leading-[1.08] font-medium">Everything you need to know.</h2>
        </Reveal>

        <div>
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 0.04}>
                <div className="border-b border-glass-border">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex justify-between items-center py-6 text-left font-display text-base sm:text-lg"
                  >
                    {item.q}
                    <PlusIcon
                      className={`w-5 h-5 text-muted ml-5 flex-shrink-0 transition-transform duration-400 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 0.84, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="text-muted text-[14.5px] leading-relaxed pb-6 max-w-[640px]">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
