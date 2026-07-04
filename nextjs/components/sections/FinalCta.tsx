import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import MagneticButton from "@/components/ui/MagneticButton";

export default function FinalCta() {
  return (
    <section
      id="final-cta"
      className="py-36 text-center relative overflow-hidden"
      style={{
        background: "radial-gradient(ellipse 60% 80% at 50% 100%, rgba(255,255,255,0.08), transparent 70%)",
      }}
    >
      <div className="max-w-[1240px] mx-auto px-8">
        <Reveal>
          <Eyebrow center>Limited onboarding slots monthly</Eyebrow>
          <h2 className="text-[32px] sm:text-6xl lg:text-[64px] leading-[1.06] font-medium max-w-3xl mx-auto">
            Your next 90 days of content could look completely different.
          </h2>
          <p className="text-muted mt-5 max-w-md mx-auto text-base">
            Book a free strategy call and we&apos;ll map out exactly what a lead-generating content system looks
            like for your brand.
          </p>
          <div className="flex justify-center mt-10">
            <MagneticButton href="https://calendly.com/forgemediabusiness/30min">Book Your Free Strategy Call</MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
