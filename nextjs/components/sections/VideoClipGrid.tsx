"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

interface VideoClipGridProps {
  folder: string;
  filePrefix: string;
  count: number;
  gridCols?: string;
}

/**
 * VideoClipGrid — every clip autoplays muted + looping as soon as it mounts
 * (matches the reel-style browsing people expect from a portfolio grid).
 * Clicking a clip unmutes it and re-mutes every other clip, so only one
 * plays audio at a time. Reused across niche pages by pointing `folder` at
 * the matching directory under /public/videos/ and `filePrefix` at the
 * filename prefix, e.g. folder="singers" filePrefix="singer" reads
 * /public/videos/singers/singer-1.mp4, singer-2.mp4, ...
 */
export default function VideoClipGrid({
  folder,
  filePrefix,
  count,
  gridCols = "sm:grid-cols-3 lg:grid-cols-4",
}: VideoClipGridProps) {
  const clips = Array.from({ length: count }, (_, i) => ({
    num: String(i + 1).padStart(2, "0"),
    src: `/videos/${folder}/${filePrefix}-${i + 1}.mp4`,
  }));

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [unmutedIndex, setUnmutedIndex] = useState<number | null>(null);
  const [erroredIndex, setErroredIndex] = useState<Set<number>>(new Set());

  function tryPlay(video: HTMLVideoElement | null) {
    if (!video) return;
    video.muted = true;
    video.play().catch((err) => console.warn("Autoplay blocked, will resume on click:", err));
  }

  useEffect(() => {
    videoRefs.current.forEach((v) => tryPlay(v));
  }, []);

  function handleClick(index: number) {
    const video = videoRefs.current[index];
    if (!video) return;
    tryPlay(video);

    const willUnmute = video.muted;
    videoRefs.current.forEach((v) => {
      if (v) v.muted = true;
    });

    setUnmutedIndex(willUnmute ? index : null);
  }

  function handleError(index: number, video: HTMLVideoElement) {
    console.error("Video failed to load:", video.currentSrc, video.error);
    setErroredIndex((prev) => new Set(prev).add(index));
  }

  return (
    <div className={clsx("grid grid-cols-2 gap-4 mt-14", gridCols)}>
      {clips.map((c, i) => (
        <div
          key={c.src}
          onClick={() => handleClick(i)}
          className={clsx(
            "relative aspect-[9/16] rounded-2xl border overflow-hidden cursor-pointer transition-transform duration-400 hover:-translate-y-1 hover:border-white/30",
            erroredIndex.has(i) ? "bg-gradient-to-br from-red-500/15 to-white/[0.02] border-glass-border" : "bg-black border-glass-border"
          )}
        >
          <span className="absolute top-2.5 left-3 z-10 font-display text-[11px] text-white/70 bg-black/40 px-2 py-0.5 rounded-full pointer-events-none">
            {c.num}
          </span>
          <span className="absolute top-2.5 right-3 z-10 w-[26px] h-[26px] rounded-full bg-black/45 flex items-center justify-center text-xs pointer-events-none">
            {erroredIndex.has(i) ? "⚠️" : unmutedIndex === i ? "🔊" : "🔇"}
          </span>
          <video
            ref={(el) => {
              videoRefs.current[i] = el;
            }}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onCanPlay={(e) => tryPlay(e.currentTarget)}
            onError={(e) => handleError(i, e.currentTarget)}
            className="w-full h-full object-cover"
            {...{ "webkit-playsinline": "true" }}
          >
            <source src={c.src} type="video/mp4" />
          </video>
        </div>
      ))}
    </div>
  );
}
