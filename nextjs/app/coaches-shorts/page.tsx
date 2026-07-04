import type { Metadata } from "next";
import Eyebrow from "@/components/ui/Eyebrow";
import MagneticButton from "@/components/ui/MagneticButton";
import VideoClipGrid from "@/components/sections/VideoClipGrid";

export const metadata: Metadata = {
  title: "Coach Shorts",
  description:
    "Authority-building short-form edits for coaches by Forgemedia — talking-head content designed to convert watch time into booked calls.",
};

export default function CoachesShortsPage() {
  return (
    <div className="pt-40 pb-24">
      <div className="max-w-[1000px] mx-auto px-8 text-center">
        <Eyebrow center>Coach edits</Eyebrow>
        <h1 className="text-[34px] sm:text-6xl leading-[1.05] font-medium">
          Authority shorts built to book calls.
        </h1>
        <p className="max-w-xl mx-auto mt-6 text-base sm:text-lg text-muted leading-relaxed">
          Talking-head edits with punch-in cuts, on-screen text, and hooks engineered to turn watch time into
          strategy-call bookings. Tap a clip for sound.
        </p>
      </div>

      <div className="max-w-[1000px] mx-auto px-8">
        <VideoClipGrid folder="coaches" filePrefix="coach" count={4} />
      </div>

      <div className="text-center mt-16">
        <MagneticButton href="https://calendly.com/forgemediabusiness/30min">Book a Strategy Call</MagneticButton>
      </div>
    </div>
  );
}
