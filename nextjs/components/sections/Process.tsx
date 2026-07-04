import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";

const steps = [
  {
    idx: "Step 01",
    title: "Strategy",
    desc: "We audit your brand, your audience, and your competitors, then build a content roadmap engineered around what actually converts in your industry.",
    icon: (
      <path d="M9 3v18M3 9h18" />
    ),
  },
  {
    idx: "Step 02",
    title: "Content Production",
    desc: "Our editors turn raw footage into scroll-stopping short-form content — captioned, paced, and styled to hold attention and build trust.",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 10h18" />
      </>
    ),
  },
  {
    idx: "Step 03",
    title: "Growth",
    desc: "We post, manage, and optimize on your behalf, tracking every metric that matters and doubling down on what drives real leads.",
    icon: (
      <>
        <path d="M3 17l6-6 4 4 8-8" />
        <path d="M15 7h6v6" />
      </>
    ),
  },
];

export default function Process() {
  return (
    <section id="process" className="py-36">
      <div className="max-w-[1240px] mx-auto px-8">
        <Reveal className="max-w-xl mb-16">
          <Eyebrow>The system</Eyebrow>
          <h2 className="text-[30px] sm:text-5xl leading-[1.08] font-medium">
            Three steps to a content engine that never stops working.
          </h2>
          <p className="text-muted text-lg leading-relaxed mt-4">
            No guesswork. No inconsistent posting. A repeatable process built to compound your authority every
            single month.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-7">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <div className="bg-glass border border-glass-border rounded-[22px] px-8 py-9 min-h-[300px] transition-all duration-500 hover:-translate-y-2 hover:border-white/30 hover:bg-white/[0.06]">
                <span className="font-display text-[13px] text-muted-dim tracking-widest">{s.idx}</span>
                <div className="w-[46px] h-[46px] rounded-xl border border-glass-border flex items-center justify-center mt-5 mb-5">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.6}>
                    {s.icon}
                  </svg>
                </div>
                <h3 className="text-2xl">{s.title}</h3>
                <p className="text-muted text-[14.5px] leading-relaxed mt-3.5">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
