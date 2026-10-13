import type { Metadata } from "next";

import ArrowLink from "@/components/ArrowLink";
import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";
import SectionTitle from "@/components/SectionTitle";
import { fellowships, positions } from "@/data/opportunities";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Opportunities",
  description:
    "Funded positions in the Nissan Lab, and fellowships for postdocs who want to join.",
};

export default function OpportunitiesPage() {
  return (
    <>
      <PageIntro title="Opportunities" />

      <Container as="section" className="pb-12 md:pb-16">
        <h2 className="text-lg font-bold text-text">Funded positions</h2>
        <p className="copy mt-2 max-w-3xl">Paid by the lab. Open now.</p>
        <ul className="mt-6 max-w-3xl space-y-6">
          {positions.map((position) => (
            <li
              key={position.title}
              className="rounded-card border-l-4 border-brand bg-surface p-6 shadow-card sm:p-8"
            >
              <p className="text-xs font-semibold tracking-[0.14em] text-brand uppercase">
                Funded
              </p>
              <h3 className="mt-2 text-[1.0625rem] leading-snug font-semibold text-text md:text-lg">
                {position.title}
              </h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-text-2">{position.body}</p>
              <p className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
                <a className="btn-brand" href={`mailto:${site.email}?subject=${encodeURIComponent(position.title)}`}>
                  Apply by email
                </a>
                {position.flyer ? (
                  <ArrowLink href={position.flyer} external>
                    Call for applications (PDF)
                  </ArrowLink>
                ) : null}
                {position.link ? (
                  <ArrowLink href={position.link.href} external>
                    {position.link.label}
                  </ArrowLink>
                ) : null}
              </p>
            </li>
          ))}
        </ul>
      </Container>

      <Container as="section" className="pb-16 md:pb-24">
        <SectionTitle>Fellowships</SectionTitle>
        <p className="copy mt-6 max-w-3xl">
          Not lab funding. Postdocs apply for these themselves, with the lab as host. Write to{" "}
          <a className="text-brand hover:underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>{" "}
          first.
        </p>
        <ul className="mt-6 max-w-3xl divide-y divide-line">
          {fellowships.map((fellowship) => (
            <li
              key={fellowship.href}
              className="grid gap-x-8 gap-y-1 py-5 sm:grid-cols-[1fr_auto] sm:items-baseline"
            >
              <div>
                <h3 className="text-[1.0625rem] leading-snug font-semibold">
                  <a
                    className="text-text hover:text-brand hover:underline"
                    href={fellowship.href}
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    {fellowship.name}
                  </a>
                </h3>
                <p className="mt-1 text-[0.9375rem] leading-relaxed text-text-2">
                  {fellowship.who}. {fellowship.terms}.
                </p>
              </div>
              <p
                className={`text-[0.8125rem] font-semibold sm:text-right ${
                  fellowship.closed ? "text-text-3" : "text-brand"
                }`}
              >
                {fellowship.deadline}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
