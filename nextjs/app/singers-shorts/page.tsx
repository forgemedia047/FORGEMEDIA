import type { Metadata } from "next";
import Eyebrow from "@/components/ui/Eyebrow";
import MagneticButton from "@/components/ui/MagneticButton";
import VideoClipGrid from "@/components/sections/VideoClipGrid";

export const metadata: Metadata = {
  title: "Singer Shorts",
  description:
    "Sound-synced short-form edits for singers and vocalists by Forgemedia — performance and cover clips built to be discovered.",
};

export default function SingersShortsPage() {
  return (
    <div className="pt-40 pb-24">
      <div className="max-w-[1100px] mx-auto px-8 text-center">
        <Eyebrow center>Singer edits</Eyebrow>
        <h1 className="text-[34px] sm:text-6xl leading-[1.05] font-medium">
          Performance shorts built to be discovered.
        </h1>
        <p className="max-w-xl mx-auto mt-6 text-base sm:text-lg text-muted leading-relaxed">
          Cover and original-performance edits, sound-synced down to the beat, captioned for silent scrolling, and
          paced to earn the replay. Tap a clip to play.
        </p>
      </div>

      <div className="max-w-[1100px] mx-auto px-8">
        <VideoClipGrid folder="singers" filePrefix="singer" count={8} />
      </div>

      <div className="text-center mt-16">
        <MagneticButton href="https://calendly.com/forgemediabusiness/30min">Book a Strategy Call</MagneticButton>
      </div>
    </div>
  );
}
