import type { Metadata } from "next";

import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";
import ResearchRow from "@/components/ResearchRow";
import { researchThemes, scales, themeForScale } from "@/data/research";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research in the Nissan Lab, organised by length scale: the microscale pore space, instrumented soil mesocosms, whole soil profiles in a greenhouse, and global soil datasets.",
};

export default function ResearchPage() {
  return (
    <>
      <PageIntro
        title="Research"
        lead="The lab works on one question at four different scales: how water moves carbon through soil. Each scale has its own instruments, and each has to agree with the ones next to it. We measure and we model at all four, because neither on its own is enough to pin a mechanism down."
      />

      {/*
        The scale ladder, doubling as a table of contents: one card per scale,
        linked to the section that carries its text further down. The header of
        a card is fixed in height (number and length on one line, then two lines
        reserved for the name, bottom-aligned) so the questions start at the
        same point in all four cards however long the names are.
      */}
      <Container as="section" className="pb-12 md:pb-16">
        <ol aria-label="Scales of study" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {scales.map((scale) => {
            const theme = themeForScale(scale.id);
            return (
              <li key={scale.id}>
                <a
                  href={theme ? `#${theme.id}` : undefined}
                  className="group flex h-full flex-col rounded-card bg-surface p-5 shadow-card transition-shadow hover:shadow-float focus-visible:outline-offset-4"
                >
                  <span className="flex items-baseline justify-between gap-3 text-xs font-semibold tracking-[0.14em] text-brand uppercase">
                    <span className="tabular-nums">{theme?.number}</span>
                    <span className="tracking-normal normal-case tabular-nums">{scale.length}</span>
                  </span>
                  <span className="mt-1 flex min-h-[2.5em] items-end leading-tight font-bold text-text group-hover:text-brand">
                    {scale.name}
                  </span>
                  <span className="mt-2 block text-[0.875rem] leading-relaxed text-text-2">
                    {scale.question}
                  </span>
                </a>
              </li>
            );
          })}
        </ol>
      </Container>

      <Container as="section" className="pb-8">
        <div className="space-y-16 md:space-y-24">
          {researchThemes.map((theme, index) => (
            <ResearchRow key={theme.id} theme={theme} index={index} />
          ))}
        </div>
      </Container>
    </>
  );
}
