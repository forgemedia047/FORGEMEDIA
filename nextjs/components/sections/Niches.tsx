import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";

const niches = [
  {
    title: "Singers",
    desc: "Performance and cover edits paced to hook a scroll, sound-synced and caption-ready.",
    tag: "View Singer Shorts",
    href: "/singers-shorts",
    external: false,
    icon: (
      <>
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </>
    ),
  },
  {
    title: "Minecraft",
    desc: "High-retention gaming edits built for Minecraft creators and clip channels.",
    tag: "View Minecraft Shorts",
    href: "/minecraft-shorts",
    external: false,
    icon: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </>
    ),
  },
  {
    title: "Coaches",
    desc: "Authority-building talking-head edits designed to convert watch time into booked calls.",
    tag: "View Coach Shorts",
    href: "/coaches-shorts",
    external: false,
    icon: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
      </>
    ),
  },
];

export default function Niches() {
  return (
    <section id="niches" className="py-36">
      <div className="max-w-[1240px] mx-auto px-8">
        <Reveal className="max-w-xl mb-16">
          <Eyebrow>Browse by niche</Eyebrow>
          <h2 className="text-[30px] sm:text-5xl leading-[1.08] font-medium">
            See the edit style built for your world.
          </h2>
          <p className="text-muted text-lg leading-relaxed mt-4">
            Every niche gets its own pacing, captions, and hook style. Tap a category to watch a curated reel of
            shorts made for that niche.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-[22px]">
          {niches.map((n, i) => (
            <Reveal key={n.title} delay={i * 0.1}>
              <a
                href={n.href}
                target={n.external ? "_blank" : undefined}
                rel={n.external ? "noopener" : undefined}
                className="group block bg-glass border border-glass-border rounded-[22px] p-[30px] h-full transition-all duration-500 hover:-translate-y-2 hover:border-white/30 hover:bg-white/[0.06]"
              >
                <div className="flex justify-between items-start">
                  <div className="w-[46px] h-[46px] rounded-xl border border-glass-border flex items-center justify-center">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.6}>
                      {n.icon}
                    </svg>
                  </div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="text-muted-dim transition-all duration-400 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white"
                  >
                    <path d="M7 17 17 7M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-[22px] mt-[22px]">{n.title}</h3>
                <p className="text-muted text-sm leading-relaxed mt-2.5">{n.desc}</p>
                <span className="inline-block mt-5 text-[12.5px] border-b border-glass-border pb-[3px]">
                  {n.tag}
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
