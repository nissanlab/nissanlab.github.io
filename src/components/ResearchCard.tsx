import Image from "next/image";
import Link from "next/link";

import Chevron from "@/components/Chevron";
import { scaleLabel, type ResearchTheme } from "@/data/research";

/** Image tile linking to a research theme. Used on the home page. */
export default function ResearchCard({ theme }: { theme: ResearchTheme }) {
  const contain = theme.image?.fit === "contain";

  return (
    <Link
      href={`/research#${theme.id}`}
      className="group flex h-full flex-col overflow-hidden rounded-media bg-surface shadow-card transition-shadow hover:shadow-float focus-visible:outline-offset-4"
    >
      <div className="relative aspect-4/3 bg-white">
        {theme.image ? (
          <Image
            src={theme.image.src}
            alt=""
            fill
            sizes="(min-width: 1024px) 32vw, (min-width: 640px) 48vw, 92vw"
            className={`transition-transform duration-700 ${
              contain
                ? "object-contain p-3"
                : "object-cover group-hover:scale-[1.04]"
            }`}
          />
        ) : (
          <span className="absolute inset-0 flex items-center justify-center bg-brand-wash text-sm text-text-3">
            Image pending
          </span>
        )}
        {theme.image?.credit ? (
          <span className="absolute right-0 bottom-0 rounded-tl-md bg-black/55 px-2 py-0.5 text-[0.625rem] leading-snug text-white/90">
            {theme.image.credit}
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-[0.6875rem] font-semibold tracking-[0.14em] text-brand uppercase">
          {scaleLabel(theme)}
        </p>
        <h3 className="mt-2 flex items-start gap-1.5 text-[1.0625rem] leading-snug font-bold text-text group-hover:text-brand">
          <span>{theme.title}</span>
          <Chevron className="mt-1 size-3.5 shrink-0 text-brand transition-transform group-hover:translate-x-0.5" />
        </h3>
        <p className="mt-2 line-clamp-3 text-[0.875rem] leading-relaxed text-text-2">
          {theme.question}
        </p>
      </div>
    </Link>
  );
}
