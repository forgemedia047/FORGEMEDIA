import Reveal from "@/components/ui/Reveal";
import Counter from "@/components/ui/Counter";

const industries = ["Healthcare", "Coaching", "Real Estate", "SaaS", "Law", "Fitness", "Finance", "E-commerce"];

const stats = [
  { value: 3, suffix: "", label: "Brands managed" },
  { value: 2.1, decimals: 1, suffix: "M+", label: "Monthly views generated" },
  { value: 3.4, decimals: 1, suffix: "x", label: "Avg. lead increase" },
  { value: 97, suffix: "%", label: "Client satisfaction" },
];

export default function SocialProof() {
  return (
    <section id="proof" className="pt-0 pb-32">
      <div className="max-w-[1240px] mx-auto px-8">
        <p className="text-center text-xs text-muted-dim tracking-[0.1em] uppercase mb-6">
          Trusted by growth-focused brands across
        </p>

        <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
          <div className="flex gap-[70px] w-max animate-marquee">
            {[...industries, ...industries].map((ind, i) => (
              <span key={i} className="font-display text-xl text-muted-dim whitespace-nowrap font-medium">
                {ind}
              </span>
            ))}
          </div>
        </div>

        <Reveal className="mt-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-glass-border border border-glass-border rounded-[20px] overflow-hidden">
            {stats.map((s, i) => (
              <div key={i} className="bg-black px-7 py-10">
                <div className="font-display text-4xl sm:text-5xl font-semibold tracking-tight">
                  <Counter value={s.value} decimals={s.decimals ?? 0} suffix={s.suffix} />
                </div>
                <div className="text-muted text-[13.5px] mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
