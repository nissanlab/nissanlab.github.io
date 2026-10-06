"use client";

import { useEffect, useRef } from "react";

/**
 * Hero clip. Playback starts from JS rather than the `autoplay`
 * attribute so that a visitor with "reduce motion" set keeps the poster frame
 * instead of seeing a moment of movement before we can stop it.
 */
export default function HeroVideo({
  src,
  poster,
  label,
  className,
  onEnded,
}: {
  src: string;
  poster: string;
  label: string;
  className?: string;
  onEnded?: () => void;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      if (motion.matches) {
        video.pause();
        video.currentTime = 0;
      } else {
        void video.play().catch(() => {});
      }
    };

    apply();
    motion.addEventListener("change", apply);
    return () => motion.removeEventListener("change", apply);
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      src={src}
      poster={poster}
      role="img"
      aria-label={label}
      muted
      loop={!onEnded}
      onEnded={onEnded}
      playsInline
      preload="metadata"
    />
  );
}
