import Reveal from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import Eyebrow from "@/components/ui/Eyebrow";

const services = [
  {
    num: "01",
    title: "Social Media Management",
    desc: "Full calendar planning, scheduling, captions, and community engagement across every platform that matters to your audience.",
    tag: "Done-for-you",
  },
  {
    num: "02",
    title: "Short-Form Video Editing",
    desc: "Premium, pattern-interrupting edits built for retention — pacing, sound design, captions, and hooks that stop the scroll.",
    tag: "Reels · TikTok · Shorts",
  },
  {
    num: "03",
    title: "Content Strategy",
    desc: "A documented content pillar system built around your positioning, your offer, and what your ideal clients respond to.",
    tag: "Custom roadmap",
  },
  {
    num: "04",
    title: "Content Calendar",
    desc: "A living, transparent calendar so you always know what's shipping, when it's shipping, and why it's on the schedule.",
    tag: "Full visibility",
  },
  {
    num: "05",
    title: "Personal Branding",
    desc: "We position you as the go-to authority in your field — not just another account posting content into the void.",
    tag: "Authority building",
  },
  {
    num: "06",
    title: "Analytics & Reporting",
    desc: "Clear, monthly performance reporting tied to leads and revenue — not vanity metrics that don't move your business.",
    tag: "Weekly insights",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-36">
      <div className="max-w-[1240px] mx-auto px-8">
        <Reveal className="max-w-xl mb-16">
          <Eyebrow>What we do</Eyebrow>
          <h2 className="text-[30px] sm:text-5xl leading-[1.08] font-medium">
            Everything your brand needs to grow, under one roof.
          </h2>
          <p className="text-muted text-lg leading-relaxed mt-4">
            Stop piecing together freelancers. One accountable team, one strategy, one system.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.num} delay={(i % 3) * 0.08}>
              <GlassCard tilt className="p-7 h-full bg-gradient-to-b from-white/[0.05] to-white/[0.015]">
                <span className="font-display text-xs text-muted-dim">{s.num}</span>
                <h3 className="text-xl mt-3.5">{s.title}</h3>
                <p className="text-muted text-sm leading-relaxed mt-2.5">{s.desc}</p>
                <span className="inline-block mt-[18px] text-[11.5px] text-muted-dim border border-glass-border px-3 py-1.5 rounded-full">
                  {s.tag}
                </span>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
