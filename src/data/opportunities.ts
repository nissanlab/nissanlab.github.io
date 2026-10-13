/**
 * The Opportunities page: positions the lab pays for, and external
 * fellowships an applicant wins themselves. Keep the two apart.
 *
 * Fellowship terms change every cycle. Check each `href` before editing, and
 * set `closed: true` once a deadline has passed; closed calls drop to the
 * bottom of the list.
 */

export type Position = {
  title: string;
  body: string;
  /** Flyer or full call, served from public/files/. */
  flyer?: string;
  link?: { href: string; label: string };
};

export const positions: Position[] = [
  {
    title: "PhD student, plant–soil interactions",
    body: "How roots and the soil around them exchange gases, followed with gas-exchange measurements and isotopic tracing. Hands-on experimental work in the FCCF Center. Outstanding MSc applicants are welcome.",
    flyer: "/files/fccf-phd-position.pdf",
    link: { href: "https://www.fccf-center.org", label: "FCCF Center" },
  },
  {
    title: "PhD student, from photosynthesis to rhizosphere respiration",
    body: "How the carbon a plant fixes by day becomes microbial respiration around its roots. Root exudates measured across the day–night cycle, and living roots imaged in microfluidic chips.",
  },
];

export type Fellowship = {
  name: string;
  href: string;
  /** Who can apply. */
  who: string;
  /** Length and amount. */
  terms: string;
  deadline: string;
  closed?: boolean;
};

export const fellowships: Fellowship[] = [
  {
    name: "Azrieli International Postdoctoral Fellowship",
    href: "https://azrielifoundation.org/fellows/internationalpostdoctoral/",
    who: "Any nationality, no Israeli degree",
    terms: "14,000 ILS a month, plus 20,000 ILS a year for research",
    deadline: "11 November 2026",
  },
  {
    name: "Lady Davis Postdoctoral Fellowship",
    href: "https://ldft.huji.ac.il/hebrew-university-fellowship",
    who: "PhD within the last five years",
    terms: "12 months, 6,701 ILS a month, plus rent allowance and a return flight",
    deadline: "31 December 2026",
  },
  {
    name: "Vaadia-BARD Postdoctoral Fellowship",
    href: "https://www.bard-isus.org/opportunities/the-vaadia-bard-postdoctoral-fellowship/",
    who: "US postdocs in agricultural science",
    terms: "1–2 years, up to 64,000 USD",
    deadline: "15 January 2027",
  },
  {
    name: "Zuckerman Postdoctoral Scholars",
    href: "https://zuckermanstem.org/ourprograms/postdoc-program/",
    who: "US and Canadian citizens",
    terms: "2 years, up to 63,000 USD a year",
    deadline: "Call opens October 2026",
  },
  {
    name: "Fulbright Postdoctoral Fellowship",
    href: "https://www.fulbright.org.il/program/2/4645",
    who: "US citizens",
    terms: "Up to 2 years, 47,500 USD a year",
    deadline: "Closed for 2027–28",
    closed: true,
  },
  {
    name: "Marie Skłodowska-Curie Postdoctoral Fellowship",
    href: "https://marie-sklodowska-curie-actions.ec.europa.eu/actions/postdoctoral-fellowships",
    who: "Any nationality, up to eight years after the PhD",
    terms: "1–2 years, living and mobility allowances",
    deadline: "Closed for 2026",
    closed: true,
  },
];
