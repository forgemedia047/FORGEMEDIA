import type { Metadata } from "next";
import Eyebrow from "@/components/ui/Eyebrow";
import MagneticButton from "@/components/ui/MagneticButton";
import VideoClipGrid from "@/components/sections/VideoClipGrid";

export const metadata: Metadata = {
  title: "Minecraft Shorts",
  description:
    "High-retention Minecraft short-form edits by Forgemedia — built for gaming creators and clip channels.",
};

export default function MinecraftShortsPage() {
  return (
    <div className="pt-40 pb-24">
      <div className="max-w-[1000px] mx-auto px-8 text-center">
        <Eyebrow center>Minecraft edits</Eyebrow>
        <h1 className="text-[34px] sm:text-6xl leading-[1.05] font-medium">
          Gaming shorts built to hold attention.
        </h1>
        <p className="max-w-xl mx-auto mt-6 text-base sm:text-lg text-muted leading-relaxed">
          Fast-cut, high-retention Minecraft edits for gaming creators and clip channels — synced sound design,
          punchy captions, and pacing tuned for the algorithm. Tap a clip to play.
        </p>
      </div>

      <div className="max-w-[1000px] mx-auto px-8">
        <VideoClipGrid folder="minecraft" filePrefix="minecraft" count={4} />
      </div>

      <div className="text-center mt-16">
        <MagneticButton href="https://calendly.com/forgemediabusiness/30min">Book a Strategy Call</MagneticButton>
      </div>
    </div>
  );
}
