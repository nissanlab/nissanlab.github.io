import ArrowLink from "@/components/ArrowLink";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import PublicationEntry from "@/components/PublicationEntry";
import ResearchCard from "@/components/ResearchCard";
import ScaleAxis from "@/components/ScaleAxis";
import SectionTitle from "@/components/SectionTitle";
import { featuredPublications } from "@/data/publications";
import { researchThemes } from "@/data/research";
import { site } from "@/data/site";

export default function Home() {
  return (
    <>
      {/* ---------------------------------------------------------------- 1. Hero */}
      <Hero
        title={site.name}
        subtitle={site.subtitle}
        src="/images/hero/pore-timelapse.jpg"
        slides={[
          {
            src: "/videos/pore-timelapse.mp4",
            poster: "/images/hero/pore-timelapse.jpg",
            label: "Pseudomonas putida in a microfluidic soil-analog chip",
            caption: <>Time-lapse of <em>Pseudomonas putida</em> (green) in a microfluidic soil-analog chip.</>,
          },
          {
            src: "/videos/plant-timelapse.mp4",
            poster: "/images/hero/plant-timelapse.jpg",
            label: "A root system in a microfluidic chip as it dries",
            caption: "Time-lapse of a root system in a microfluidic chip as it dries.",
          },
          {
            src: "/images/research/soil-microbes.jpg",
            poster: "/images/research/soil-microbes.jpg",
            label: "Scanning electron microscopy image of microorganisms on a root surface",
            caption: (
              <>
                Scanning electron microscopy image of microorganisms on a root surface, from{" "}
                <a href="https://doi.org/10.1038/s41467-023-38981-w" className="underline hover:text-brand">
                  Nissan et al. (2023), <em>Nature Communications</em>
                </a>
                .
              </>
            ),
            still: { width: 1400, height: 982 },
          },
        ]}
        alt="Three slides in sequence: a time-lapse of green fluorescent Pseudomonas putida in a microfluidic soil-analog chip, a time-lapse of a root system in a microfluidic chip as it dries, and a scanning electron microscopy image of microorganisms on a root surface."
        action={{ href: "/contact", label: "Contact" }}
      />

      {/* --------------------------------------------------- 2. Research statement */}
      <Container as="section" className="py-10 md:py-14">
        <SectionTitle align="center">Research</SectionTitle>
        <p className="mx-auto mt-8 max-w-3xl text-center text-title leading-tight font-semibold tracking-tight text-text">
          We study how water shapes the fate of organic matter in soil, from the pore space to the
          global land surface
        </p>
        <div className="copy mx-auto mt-7 max-w-3xl">
          <p>
            Much of the organic matter produced on land passes through soil, and water is one of
            the main controls on what happens to it there: which pores connect to which, how far a
            dissolved compound travels, which microorganisms stay active and where, and whether the
            carbon escapes as CO₂ or sticks to a mineral surface.
          </p>
          <p>
            In real soil, none of this is easy to watch. The mechanisms work over micrometres, but
            their consequences appear over continents, so we work at both ends and in the middle:
            the microscale, where a root and the microorganisms around it can be watched under a
            microscope; instrumented soil mesocosms under continuous gas analysis; whole soil
            profiles in a greenhouse; and global soil datasets. Mathematical theory runs alongside
            all four.
          </p>
          <p>
            Each scale constrains the others. A mechanism proposed from a microfluidic chip has to
            hold for a whole soil profile as well, and across soils worldwide.
          </p>
        </div>
        <div className="mt-7 text-center">
          <ArrowLink href="/research">Research page</ArrowLink>
        </div>
      </Container>

      {/* --------------------------------------------------- 3. Cross-scale concept */}
      <section className="bg-brand-wash py-12 md:py-16">
        <Container>
          <SectionTitle align="center">Pore to globe</SectionTitle>
          <p className="mx-auto mt-6 max-w-2xl text-center text-[0.9375rem] leading-relaxed text-text-2">
            We organise the lab by length scale instead of by method: the pore space, an
            instrumented mesocosm, a whole soil profile, and soils across the globe. Each one asks
            the same question by different means, and the answers have to agree.
          </p>
          <div className="mt-10">
            <ScaleAxis />
          </div>
        </Container>
      </section>

      {/* -------------------------------------------------------- 4. Research themes */}
      <Container as="section" className="py-12 md:py-16">
        <SectionTitle align="center">Research directions</SectionTitle>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {researchThemes.map((theme) => (
            <li key={theme.id}>
              <ResearchCard theme={theme} />
            </li>
          ))}
        </ul>
        <div className="mt-8 text-center">
          <ArrowLink href="/research">All research</ArrowLink>
        </div>
      </Container>

      {/* --------------------------------------------------- 5. Selected publications */}
      <section className="bg-band py-12 md:py-16">
        <Container>
          <SectionTitle align="center">Selected publications</SectionTitle>
          <div className="mt-8 divide-y divide-line">
            {featuredPublications.map((publication) => (
              <PublicationEntry key={publication.doi ?? publication.title} publication={publication} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <ArrowLink href="/publications">All publications</ArrowLink>
          </div>
        </Container>
      </section>
    </>
  );
}
