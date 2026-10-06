"use client";

import Link from "next/link";
import { useRef, useState } from "react";

import Chevron from "@/components/Chevron";
import { scales, themeForScale } from "@/data/research";

/**
 * The lab's cross-scale framework, drawn as a length axis: four stops from the
 * pore space to the planet. Content comes from `scales` in src/data/research.ts.
 */
export default function ScaleAxis() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (event: React.KeyboardEvent) => {
    const last = scales.length - 1;
    let next: number | null = null;
    if (event.key === "ArrowRight") next = active === last ? 0 : active + 1;
    if (event.key === "ArrowLeft") next = active === 0 ? last : active - 1;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = last;
    if (next === null) return;
    event.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  };

  const current = scales[active];
  const currentTheme = themeForScale(current.id);

  return (
    <div>
      {/* Axis: small screens scroll it horizontally. */}
      <div
        role="tablist"
        aria-label="Scales of study"
        onKeyDown={onKeyDown}
        className="grid"
        style={{ gridTemplateColumns: `repeat(${scales.length}, minmax(0, 1fr))` }}
      >
        {scales.map((scale, index) => {
          const isActive = index === active;
          return (
            <button
              key={scale.id}
              ref={(el) => {
                tabs.current[index] = el;
              }}
              type="button"
              role="tab"
              id={`scale-tab-${scale.id}`}
              aria-selected={isActive}
              aria-controls="scale-panel"
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActive(index)}
              className="group block cursor-pointer px-0.5 text-center focus-visible:outline-offset-6"
            >
              <span
                className={`flex min-h-[2.6em] items-end justify-center text-center text-[0.6875rem] leading-tight font-semibold transition-colors sm:min-h-[2.4em] sm:text-[0.875rem] lg:text-[0.9375rem] ${
                  isActive ? "text-text" : "text-text-3 group-hover:text-text-2"
                }`}
              >
                {scale.name}
              </span>

              {/* Each column draws its own axis segment; together they join up. */}
              <span className="relative mt-3 block h-4">
                <span
                  aria-hidden
                  className="absolute top-1/2 left-0 block h-px w-full -translate-y-1/2 bg-line"
                />
                <span
                  aria-hidden
                  className={`absolute top-1/2 left-1/2 block rounded-full transition-all ${
                    isActive
                      ? "size-3.5 -translate-x-1/2 -translate-y-1/2 bg-brand ring-4 ring-brand/15"
                      : "size-2 -translate-x-1/2 -translate-y-1/2 bg-line group-hover:bg-brand/50"
                  }`}
                />
              </span>

              <span
                className={`mt-3 block text-[0.6875rem] tabular-nums transition-colors sm:text-xs ${
                  isActive ? "text-brand" : "text-text-3"
                }`}
              >
                {scale.length}
              </span>
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id="scale-panel"
        aria-labelledby={`scale-tab-${current.id}`}
        className="mt-8 rounded-card bg-surface p-6 shadow-card sm:p-8"
      >
        <p className="text-xs font-semibold tracking-[0.14em] text-brand uppercase">
          {current.name} · {current.lengthGloss}
        </p>
        <h3 className="mt-3 text-xl leading-snug font-bold text-text sm:text-2xl">
          {current.question}
        </h3>
        <p className="copy mt-3 max-w-3xl">{current.blurb}</p>
        {currentTheme ? (
          <Link href={`/research#${currentTheme.id}`} className="link-brand mt-4">
            {currentTheme.title}
            <Chevron className="size-3.5" />
          </Link>
        ) : null}
      </div>
    </div>
  );
}
