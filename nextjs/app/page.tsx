import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import Process from "@/components/sections/Process";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Niches from "@/components/sections/Niches";
import Testimonials from "@/components/sections/Testimonials";
import Faq from "@/components/sections/Faq";
import FinalCta from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <Process />
      <Services />
      <WhyChooseUs />
      <Niches />
      <Testimonials />
      <Faq />
      <FinalCta />
    </>
  );
}
