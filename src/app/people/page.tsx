import type { Metadata } from "next";

import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";
import PersonCard from "@/components/PersonCard";
import { groupOrder, peopleByGroup } from "@/data/people";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "People",
  description:
    "Members of the Nissan Lab, the Terrestrial Physics Lab at the Hebrew University of Jerusalem.",
};

export default function PeoplePage() {
  const pi = peopleByGroup("pi");

  return (
    <>
      <PageIntro title="People" />

      <Container as="section" className="pb-12 md:pb-16">
        <div className="space-y-6">
          {pi.map((person) => (
            <PersonCard key={person.id} person={person} featured />
          ))}
        </div>

        <div className="mt-14 space-y-12 md:mt-16 md:space-y-14">
          {groupOrder
            .filter((group) => group.id !== "pi")
            .map(({ id, title }) => {
              const members = peopleByGroup(id);
              if (members.length === 0) return null;
              return (
                <section key={id}>
                  <h2 className="inline-flex rounded-full bg-brand px-4 py-1.5 text-[0.8125rem] font-semibold text-white">
                    {title}
                  </h2>
                  <div className="mt-7 grid gap-x-10 border-t border-line md:grid-cols-2">
                    {members.map((person) => (
                      <div
                        key={person.id}
                        id={person.id}
                        className="scroll-mt-28 border-b border-line py-7"
                      >
                        <PersonCard person={person} />
                      </div>
                    ))}
                  </div>
                </section>
              );
            })}
        </div>

        <p className="copy mt-14 max-w-2xl border-t border-line pt-7">
          If the work interests you, send a short note and your CV to{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </Container>
    </>
  );
}
