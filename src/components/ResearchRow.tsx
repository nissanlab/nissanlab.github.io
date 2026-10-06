import Image from "next/image";
import Link from "next/link";

import { people } from "@/data/people";
import { scaleLabel, type ResearchTheme } from "@/data/research";

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

/** Alternating image / text row. Used on the research page. */
export default function ResearchRow({ theme, index }: { theme: ResearchTheme; index: number }) {
  const imageRight = index % 2 === 1;
  const members = theme.peopleIds
    .map((id) => people.find((person) => person.id === id))
    .filter((person) => person !== undefined);

  return (
    <article id={theme.id} className="scroll-mt-28">
      {/*
        Two columns of equal height, so the figure (or the frame standing in for
        one that has not been supplied yet) runs the full length of the text it
        belongs to instead of leaving the rest of the row empty.
      */}
      <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
        <div className={imageRight ? "md:order-2" : ""}>
          {theme.image ? (
            <figure>
              <Image
                src={theme.image.src}
                alt={theme.image.alt}
                width={theme.image.width}
                height={theme.image.height}
                sizes="(min-width: 768px) 46vw, 92vw"
                className={`w-full rounded-media bg-white ${theme.image.fit === "contain" ? "object-contain p-3" : "object-cover"}`}
              />
              <figcaption className="mt-3 text-[0.8125rem] leading-relaxed text-text-3">
                {theme.image.caption}
                {theme.image.credit ? (
                  <span className="mt-1 block text-[0.75rem]">{theme.image.credit}</span>
                ) : null}
              </figcaption>
            </figure>
          ) : (
            <div className="flex h-full min-h-64 items-end rounded-media border border-dashed border-line bg-surface p-5">
              <p className="text-sm text-text-3">Image to be added</p>
            </div>
          )}
        </div>

        <div className={imageRight ? "md:order-1" : ""}>
          <p className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.14em] text-brand uppercase">
            <span className="tabular-nums">{theme.number}</span>
            <span aria-hidden className="h-px w-5 bg-brand/40" />
            <span>{scaleLabel(theme)}</span>
          </p>
          <h2 className="mt-2 text-title leading-tight font-bold tracking-tight text-text">
            {theme.title}
          </h2>
          <p className="mt-3 text-lg leading-snug text-text-2">{theme.question}</p>

          <div className="copy mt-5">
            {theme.body.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>

          {theme.links?.length ? (
            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
              {theme.links.map((link) => (
                <li key={link.href}>
                  <a
                    className="link-brand"
                    href={link.href}
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}

          {members.length > 0 ? (
            <div className="mt-6 rounded-card bg-surface p-5 shadow-card">
              <h3 className="text-xs font-semibold tracking-[0.14em] text-text-3 uppercase">
                Working at this scale
              </h3>
              <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-4">
                {members.map((person) => (
                  <li key={person.id}>
                    <Link
                      href={`/people#${person.id}`}
                      className="group flex items-center gap-3 focus-visible:outline-offset-4"
                    >
                      {person.photo ? (
                        <Image
                          src={person.photo}
                          alt=""
                          width={800}
                          height={1000}
                          sizes="44px"
                          className="size-11 shrink-0 rounded-full object-cover"
                        />
                      ) : (
                        <span
                          aria-hidden
                          className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-wash text-[0.8125rem] font-semibold text-brand"
                        >
                          {initials(person.name)}
                        </span>
                      )}
                      <span>
                        <span className="block text-[0.9375rem] leading-tight font-semibold text-text group-hover:text-brand">
                          {person.name}
                        </span>
                        <span className="block text-[0.8125rem] leading-tight text-text-3">
                          {person.role}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}
