"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";

import Chevron from "@/components/Chevron";
import Container from "@/components/Container";
import HeroVideo from "@/components/HeroVideo";

/**
 * Home hero: lab identity set directly over a softly shaded scientific image.
 * Swap the picture by changing `src`/`alt`/`caption` below or by passing new
 * props. Slides play in order and can also be selected with the controls.
 */
const STILL_MS = 8000;

export default function Hero({
  title,
  subtitle,
  src,
  slides,
  alt,
  caption,
  action,
}: {
  title: string;
  subtitle: string;
  src: string;
  /** Video slides advance when the clip ends; image slides after `STILL_MS`. */
  slides?: { src: string; poster: string; label: string; caption: ReactNode; still?: { width: number; height: number } }[];
  alt: string;
  caption?: ReactNode;
  action?: { href: string; label: string };
}) {
  const [active, setActive] = useState(0);
  const slide = slides?.[active];
  const move = (direction: number) => {
    if (slides?.length) setActive((index) => (index + direction + slides.length) % slides.length);
  };
  // Hold a still for a while, then move on. With "reduce motion" set, videos
  // stay on their poster and never end, so stills do not advance either.
  useEffect(() => {
    if (!slide?.still || !slides) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setTimeout(() => setActive((index) => (index + 1) % slides.length), STILL_MS);
    return () => window.clearTimeout(timer);
  }, [slide, slides]);
  const mediaClass = "h-[62vh] max-h-[660px] min-h-[380px] w-full object-cover";
  return (
    <Container width="wide" as="section" className="pt-1 pb-10 md:pb-14">
      <div className="relative isolate overflow-hidden rounded-[1.5rem] md:rounded-hero">
        {slide?.still ? (
          <Image key={slide.src} src={slide.src} alt={slide.label} width={slide.still.width} height={slide.still.height} sizes="100vw" className={mediaClass} />
        ) : slide ? (
          <HeroVideo key={slide.src} src={slide.src} poster={slide.poster} label={slide.label} className={mediaClass} onEnded={() => move(1)} />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={2560}
            height={1903}
            priority
            sizes="100vw"
            className={mediaClass}
          />
        )}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,rgba(12,29,24,0.88)_0%,rgba(12,29,24,0.55)_38%,transparent_78%)] md:bg-[linear-gradient(90deg,rgba(12,29,24,0.85)_0%,rgba(12,29,24,0.6)_28%,rgba(12,29,24,0.12)_60%,transparent_80%)]"
        />
        <div className="absolute inset-x-6 bottom-8 sm:inset-x-10 md:inset-x-auto md:top-1/2 md:bottom-auto md:left-14 md:max-w-[45%] md:-translate-y-1/2">
          <h1 className="text-hero leading-[1.1] font-bold tracking-tight text-white">
            {title}
          </h1>
          <p className="mt-3 text-lg text-white/90 md:text-xl">{subtitle}</p>
          {action ? (
            <Link href={action.href} className="mt-6 inline-flex items-center gap-3 rounded-full bg-white px-5 py-2.5 text-[0.9375rem] font-semibold text-[#173b30] transition-colors hover:bg-brand-tint focus-visible:outline-white">
              {action.label}
              <Chevron className="size-4" />
            </Link>
          ) : null}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-start justify-between gap-4">
        {slide?.caption || caption ? (
          <p className="max-w-2xl text-[0.8125rem] leading-relaxed text-text-3">{slide?.caption ?? caption}</p>
        ) : null}
        {slides && slides.length > 1 ? (
          <div role="group" aria-label="Animation controls" className="flex items-center gap-1">
            <button type="button" onClick={() => move(-1)} aria-label="Previous animation" className="flex size-11 items-center justify-center rounded-full border border-line text-brand hover:bg-brand-wash">
              <Chevron className="size-4 rotate-180" />
            </button>
            {slides.map((item, index) => (
              <button key={item.src} type="button" onClick={() => setActive(index)} aria-label={`Show animation ${index + 1}: ${item.label}`} aria-pressed={active === index} className="flex size-11 items-center justify-center rounded-full hover:bg-brand-wash">
                <span className={`size-2.5 rounded-full ${active === index ? "bg-brand" : "bg-brand/25"}`} />
              </button>
            ))}
            <button type="button" onClick={() => move(1)} aria-label="Next animation" className="flex size-11 items-center justify-center rounded-full border border-line text-brand hover:bg-brand-wash">
              <Chevron className="size-4" />
            </button>
          </div>
        ) : null}
      </div>
    </Container>
  );
}
