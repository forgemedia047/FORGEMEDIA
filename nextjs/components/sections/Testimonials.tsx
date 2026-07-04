import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";

const testimonials = [
  {
    initial: "U",
    name: "uplex",
    tag: "AVMC",
    time: "04:34 PM",
    score: "10/10",
    message: "Shorts were pretty good for the price. I'll need shorts soon btw.",
  },
  {
    initial: "S",
    name: "Owner | S1mpleDImple",
    tag: "SMC",
    time: "04:48 PM",
    score: null,
    message:
      "We'll likely need a short one every 2 weeks or so, so I'd love to keep it simple — one for one if that's possible, haha.",
  },
];

/**
 * Testimonials — real client feedback pulled directly from our Discord,
 * styled as message cards rather than generic review-site quotes.
 */
export default function Testimonials() {
  return (
    <section id="testimonials" className="py-36">
      <div className="max-w-[1240px] mx-auto px-8">
        <Reveal className="max-w-xl mb-16">
          <Eyebrow>Client voices</Eyebrow>
          <h2 className="text-[30px] sm:text-5xl leading-[1.08] font-medium">What it&apos;s like to work with us.</h2>
          <p className="text-muted text-lg leading-relaxed mt-4">
            Straight from our Discord — no cherry-picked review sites, just real client messages.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div className="border border-glass-border bg-glass rounded-[18px] px-7 py-[26px] h-full transition-all duration-400 hover:-translate-y-1 hover:border-white/25">
                <div className="flex items-center gap-3">
                  <div className="w-[38px] h-[38px] rounded-full bg-charcoal border border-glass-border flex items-center justify-center font-display text-sm flex-shrink-0">
                    {t.initial}
                  </div>
                  <div>
                    <div className="text-sm font-semibold flex items-center gap-2">
                      {t.name}
                      <span className="text-[10.5px] font-medium text-muted bg-white/[0.08] border border-glass-border px-[7px] py-[2px] rounded-md">
                        {t.tag}
                      </span>
                    </div>
                    <div className="text-[11.5px] text-muted-dim mt-0.5">{t.time}</div>
                  </div>
                </div>
                {t.score && <div className="font-display text-[15px] font-semibold mt-4">{t.score}</div>}
                <p className="text-[14.5px] leading-relaxed text-white/85 mt-2.5">{t.message}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
