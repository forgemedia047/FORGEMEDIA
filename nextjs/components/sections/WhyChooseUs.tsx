import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import { CheckIcon } from "@/components/ui/icons";

const rows = [
  { feat: "Dedicated strategy + editing team", them: "Rarely", us: "Included" },
  { feat: "Consistent weekly output", them: "Inconsistent", us: "Guaranteed" },
  { feat: "Lead-focused content strategy", them: "Rarely", us: "Core focus" },
  { feat: "Performance reporting", them: "Rarely", us: "Monthly" },
  { feat: "Long-term contracts required", them: "Often", us: "Never" },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="py-36">
      <div className="max-w-[1240px] mx-auto px-8">
        <Reveal className="max-w-xl mb-16">
          <Eyebrow>Why Forgemedia</Eyebrow>
          <h2 className="text-[30px] sm:text-5xl leading-[1.08] font-medium">
            Built differently from a typical freelancer or in-house hire.
          </h2>
        </Reveal>

        <Reveal>
          <div className="border border-glass-border rounded-[22px] overflow-hidden">
            <div className="grid grid-cols-[1.3fr_1fr_1fr] sm:grid-cols-[1.6fr_1fr_1fr] bg-white/[0.04]">
              <div className="px-4 sm:px-6 py-5 font-display text-[13px] tracking-wider uppercase text-muted">Feature</div>
              <div className="px-4 sm:px-6 py-5 font-display text-[13px] tracking-wider uppercase text-muted">Freelancers</div>
              <div className="px-4 sm:px-6 py-5 font-display text-[13px] tracking-wider uppercase text-muted">Forgemedia</div>
            </div>
            {rows.map((r) => (
              <div
                key={r.feat}
                className="grid grid-cols-[1.3fr_1fr_1fr] sm:grid-cols-[1.6fr_1fr_1fr] border-t border-glass-border"
              >
                <div className="px-4 sm:px-6 py-5 text-[12.5px] sm:text-[14.5px] font-medium">{r.feat}</div>
                <div className="px-4 sm:px-6 py-5 text-[12.5px] sm:text-[14.5px] text-muted-dim">{r.them}</div>
                <div className="px-4 sm:px-6 py-5 text-[12.5px] sm:text-[14.5px] font-medium flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 flex-shrink-0" />
                  {r.us}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
