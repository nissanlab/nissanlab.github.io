import type { Metadata } from "next";

import Chevron from "@/components/Chevron";
import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";
import PublicationEntry from "@/components/PublicationEntry";
import { publicationsByYear } from "@/data/publications";
import { profileLinks } from "@/data/site";

export const metadata: Metadata = {
  title: "Publications",
  description: "Peer-reviewed publications from the Nissan Lab and by Alon Nissan.",
};

const years = Array.from(new Set(publicationsByYear.map((p) => p.year)));

export default function PublicationsPage() {
  return (
    <>
      <PageIntro title="Publications" lead="Newest first. Full texts are linked through their DOIs.">
        <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
          {profileLinks.map((link) => (
            <li key={link.href}>
              <a
                className="link-brand"
                href={link.href}
                rel="noreferrer noopener"
                target="_blank"
              >
                {link.label}
                <Chevron className="size-3.5" />
              </a>
            </li>
          ))}
        </ul>
      </PageIntro>

      <Container as="section" className="pb-12 md:pb-16">
        <div className="space-y-10">
          {years.map((year) => (
            <section key={year} className="grid gap-x-8 md:grid-cols-[100px_1fr]">
              <h2 className="text-lg font-bold tabular-nums text-brand">{year}</h2>
              <div className="divide-y divide-line border-t border-line md:border-t-0">
                {publicationsByYear
                  .filter((publication) => publication.year === year)
                  .map((publication) => (
                    <PublicationEntry
                      key={publication.doi ?? publication.title}
                      publication={publication}
                    />
                  ))}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </>
  );
}
