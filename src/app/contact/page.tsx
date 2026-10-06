import type { Metadata } from "next";

import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";
import PersonCard from "@/components/PersonCard";
import SectionTitle from "@/components/SectionTitle";
import { formatNewsDate, newsByDate, newsCategoryLabel } from "@/data/news";
import { peopleByGroup } from "@/data/people";
import { institutionalLinks, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact & News",
  description: `News from the Nissan Lab and contact details at the ${site.department}, ${site.university}, Rehovot.`,
};

/** Keyless Google Maps embed: no API key or billing account required. */
const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  site.address.mapQuery,
)}&z=${site.address.mapZoom}&hl=en&output=embed`;

const mapLinkHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  site.address.mapQuery,
)}`;

export default function ContactNewsPage() {
  const pi = peopleByGroup("pi")[0];
  const items = newsByDate();

  return (
    <>
      <PageIntro title="Contact & News" />

      <Container as="section" className="pb-12 md:pb-16">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <h2 className="text-lg font-bold text-text">{site.department}</h2>
            <address className="mt-3 space-y-0.5 text-[0.9375rem] not-italic text-text-2">
              {site.address.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <p className="mt-4 space-x-5 text-[0.9375rem]">
              <a className="text-brand hover:underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              <a
                className="text-brand hover:underline"
                href={`tel:${site.phone.replace(/\s/g, "")}`}
              >
                {site.phone}
              </a>
            </p>

            <h2 className="mt-8 text-xs font-semibold tracking-[0.14em] text-text-3 uppercase">
              Institutional links
            </h2>
            <ul className="mt-3 space-y-2 text-[0.9375rem]">
              {institutionalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    className="text-text-2 hover:text-brand"
                    href={link.href}
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div>
              <iframe
                title={`Map showing ${site.address.mapQuery}`}
                src={mapEmbedSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="aspect-16/9 w-full rounded-media border-0 bg-surface"
              />
              <p className="mt-3 text-[0.8125rem]">
                <a
                  className="text-brand hover:underline"
                  href={mapLinkHref}
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Open in Google Maps
                </a>
              </p>
            </div>
            <div className="rounded-card bg-surface p-6 shadow-card sm:p-8">
              {pi ? <PersonCard person={pi} /> : null}
            </div>
          </div>
        </div>
      </Container>

      <Container as="section" className="pb-16 md:pb-24">
        <SectionTitle id="news" className="scroll-mt-24">
          News
        </SectionTitle>
        <ul className="mt-6 max-w-3xl divide-y divide-line">
          {items.map((item) => (
            <li key={`${item.date}-${item.title}`} className="py-6">
              <p className="text-xs font-semibold tracking-[0.14em] text-text-3 uppercase">
                <time dateTime={item.date}>{formatNewsDate(item.date)}</time>
                <span aria-hidden> · </span>
                <span className="text-brand">{newsCategoryLabel[item.category]}</span>
              </p>
              <h3 className="mt-2 text-[1.0625rem] leading-snug font-semibold text-text md:text-lg">
                {item.title}
              </h3>
              {item.body ? (
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-text-2">{item.body}</p>
              ) : null}
              {item.link ? (
                <p className="mt-2 text-[0.8125rem]">
                  <a
                    className="text-brand hover:underline"
                    href={item.link.href}
                    rel={item.link.href.startsWith("http") ? "noreferrer noopener" : undefined}
                    target={item.link.href.startsWith("http") ? "_blank" : undefined}
                  >
                    {item.link.label}
                  </a>
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
