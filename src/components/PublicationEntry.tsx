import Chevron from "@/components/Chevron";
import type { Publication } from "@/data/publications";
import { publicationHref } from "@/data/publications";

/** Author strings belonging to the lab, rendered in a heavier weight. */
const LAB_AUTHORS = new Set(["A. Nissan"]);

export default function PublicationEntry({ publication }: { publication: Publication }) {
  const href = publicationHref(publication);
  const locator = [
    publication.volume,
    publication.issue,
    publication.pages ?? publication.articleNumber,
  ]
    .filter(Boolean)
    .join(", ");

  return (
    <article className="py-6">
      <h3 className="text-[1.0625rem] leading-snug font-semibold text-text md:text-lg">
        {href ? (
          <a
            className="group inline-flex items-start gap-1.5 hover:text-brand"
            href={href}
            rel="noreferrer noopener"
            target="_blank"
          >
            <span>{publication.title}</span>
            <Chevron className="mt-1.5 size-3.5 shrink-0 text-brand transition-transform group-hover:translate-x-0.5" />
          </a>
        ) : (
          publication.title
        )}
      </h3>

      <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-text-2">
        {publication.authors.map((author, index) => (
          <span key={author} className={LAB_AUTHORS.has(author) ? "font-semibold text-text" : undefined}>
            {author}
            {index < publication.authors.length - 1 ? ", " : ""}
          </span>
        ))}
        <span> ({publication.year}) </span>
        <span>{publication.venue}.</span>
        {locator ? <span> {locator}.</span> : null}
      </p>

      <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-1 text-[0.8125rem]">
        {publication.doi ? (
          <a
            className="text-brand hover:underline"
            href={`https://doi.org/${publication.doi}`}
            rel="noreferrer noopener"
            target="_blank"
          >
            doi:{publication.doi}
          </a>
        ) : null}
        {publication.pdf ? (
          <a className="text-brand hover:underline" href={publication.pdf}>
            PDF
          </a>
        ) : null}
        {publication.kind === "chapter" ? (
          <span className="text-text-3">Book chapter</span>
        ) : null}
        {publication.note ? <span className="text-text-3">{publication.note}</span> : null}
      </div>

      {publication.abstract ? (
        <details className="group mt-2">
          <summary className="link-brand cursor-pointer list-none">
            Abstract
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              className="size-3.5 transition-transform group-open:rotate-180"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m5 9 7 7 7-7" />
            </svg>
          </summary>
          <p className="copy mt-3 max-w-3xl">{publication.abstract}</p>
        </details>
      ) : null}
    </article>
  );
}
