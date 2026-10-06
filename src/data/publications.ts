/**
 * Publications, newest first. Bibliographic details were checked against
 * Crossref; do not add an entry without a verified DOI or URL.
 *
 * `featured: true` promotes an entry to the Selected Publications block on the
 * home page. `abstract` is optional and is rendered as an expandable block.
 */

export type Publication = {
  /** Author list as printed, in order. */
  authors: string[];
  title: string;
  /** Journal, book or series name. */
  venue: string;
  year: number;
  volume?: string;
  issue?: string;
  pages?: string;
  articleNumber?: string;
  doi?: string;
  /** Used when there is no DOI. */
  url?: string;
  /** Path to a PDF in /public, if the lab is permitted to host it. */
  pdf?: string;
  abstract?: string;
  featured?: boolean;
  /** Marks book chapters, preprints etc. so the list can label them. */
  kind?: "article" | "chapter" | "preprint";
  /** Set for shared first authorship. */
  note?: string;
};

export const publications: Publication[] = [
  {
    authors: [
      "N. Galili",
      "S. M. Bernasconi",
      "A. Nissan",
      "U. Alcolombri",
      "G. Aquila",
      "M. Di Bella",
      "T. M. Blattmann",
      "N. Haghipour",
      "F. Italiano",
      "M. Jaggi",
      "I. Kaplan-Ashiri",
      "K. S. Lee",
      "M. A. Lechte",
      "C. Magnabosco",
      "S. M. Porter",
      "M. Rudmin",
      "R. G. Spencer",
      "R. Stocker",
      "Z. Wang",
      "S. Wohlwend",
      "J. D. Hemingway",
    ],
    title: "The geologic history of marine dissolved organic carbon from iron oxides",
    venue: "Nature",
    year: 2025,
    volume: "644",
    issue: "8078",
    pages: "945–951",
    doi: "10.1038/s41586-025-09383-3",
    featured: true,
  },
  {
    authors: [
      "U. Alcolombri",
      "A. Nissan",
      "J. Słomka",
      "S. Charlton",
      "E. Secchi",
      "I. Short",
      "K. S. Lee",
      "F. J. Peaudecerf",
      "D. A. Baumgartner",
      "A. Sichert",
      "U. Sauer",
      "A. Sengupta",
      "R. Stocker",
    ],
    title: "Biogel scavenging slows the sinking of organic particles to the ocean depths",
    venue: "Nature Communications",
    year: 2025,
    volume: "16",
    articleNumber: "3290",
    doi: "10.1038/s41467-025-57982-5",
  },
  {
    authors: ["M. Höll", "A. Nissan", "B. Berkowitz", "E. Barkai"],
    title: "Big Jump Principle for First Passage Times",
    venue: "Target Search Problems (Springer Nature Switzerland)",
    year: 2024,
    pages: "209–223",
    doi: "10.1007/978-3-031-67802-8_9",
    kind: "chapter",
  },
  {
    authors: ["M. Höll", "A. Nissan", "B. Berkowitz", "E. Barkai"],
    title: "Controls that expedite first-passage times in disordered systems",
    venue: "Physical Review E",
    year: 2023,
    volume: "108",
    issue: "3",
    articleNumber: "034124",
    doi: "10.1103/PhysRevE.108.034124",
    note: "M. Höll and A. Nissan contributed equally.",
  },
  {
    authors: [
      "A. Nissan",
      "U. Alcolombri",
      "N. Peleg",
      "N. Galili",
      "J. Jiménez-Martínez",
      "P. Molnar",
      "M. Holzner",
    ],
    title: "Global warming accelerates soil heterotrophic respiration",
    venue: "Nature Communications",
    year: 2023,
    volume: "14",
    articleNumber: "3452",
    doi: "10.1038/s41467-023-38981-w",
    featured: true,
  },
  {
    authors: [
      "H. Erfani",
      "N. Karadimitriou",
      "A. Nissan",
      "M. S. Walczak",
      "S. An",
      "B. Berkowitz",
      "V. Niasar",
    ],
    title: "Process-Dependent Solute Transport in Porous Media",
    venue: "Transport in Porous Media",
    year: 2021,
    volume: "140",
    pages: "421–435",
    doi: "10.1007/s11242-021-01655-6",
  },
  {
    authors: ["T. Amitay-Rosen", "A. Nissan", "Y. Shilo", "I. Dror", "B. Berkowitz"],
    title:
      "Failure of ureteral stents subject to extrinsic ureteral obstruction and stent occlusions",
    venue: "International Urology and Nephrology",
    year: 2021,
    volume: "53",
    pages: "1535–1541",
    doi: "10.1007/s11255-021-02810-0",
  },
  {
    authors: [
      "A. Nissan",
      "U. Alcolombri",
      "F. de Schaetzen",
      "B. Berkowitz",
      "J. Jiménez-Martínez",
    ],
    title: "Reactive Transport with Fluid–Solid Interactions in Dual-Porosity Media",
    venue: "ACS ES&T Water",
    year: 2021,
    volume: "1",
    issue: "2",
    pages: "259–268",
    doi: "10.1021/acsestwater.0c00043",
  },
  {
    authors: ["A. Nissan", "B. Berkowitz"],
    title: "Reactive Transport in Heterogeneous Porous Media Under Different Péclet Numbers",
    venue: "Water Resources Research",
    year: 2019,
    volume: "55",
    issue: "12",
    pages: "10119–10129",
    doi: "10.1029/2019WR025585",
  },
  {
    authors: ["A. Nissan", "B. Berkowitz"],
    title:
      "Anomalous transport dependence on Péclet number, porous medium heterogeneity, and a temporally varying velocity field",
    venue: "Physical Review E",
    year: 2019,
    volume: "99",
    issue: "3",
    articleNumber: "033108",
    doi: "10.1103/PhysRevE.99.033108",
  },
  {
    authors: ["A. Nissan", "B. Berkowitz"],
    title: "Inertial Effects on Flow and Transport in Heterogeneous Porous Media",
    venue: "Physical Review Letters",
    year: 2018,
    volume: "120",
    issue: "5",
    articleNumber: "054504",
    doi: "10.1103/PhysRevLett.120.054504",
    featured: true,
  },
  {
    authors: ["R. Ben-Zvi", "A. Nissan", "H. Scher", "B. Berkowitz"],
    title:
      "A continuous time random walk (CTRW) integro-differential equation with chemical interaction",
    venue: "The European Physical Journal B",
    year: 2018,
    volume: "91",
    articleNumber: "15",
    doi: "10.1140/epjb/e2017-80417-8",
  },
  {
    authors: ["A. Nissan", "I. Dror", "B. Berkowitz"],
    title: "Time-dependent velocity-field controls on anomalous chemical transport in porous media",
    venue: "Water Resources Research",
    year: 2017,
    volume: "53",
    issue: "5",
    pages: "3760–3769",
    doi: "10.1002/2016WR020143",
  },
  {
    authors: ["A. Nissan", "Q. Wang", "R. Wallach"],
    title:
      "Kinetics of gravity-driven slug flow in partially wettable capillaries of varying cross section",
    venue: "Water Resources Research",
    year: 2016,
    volume: "52",
    issue: "11",
    pages: "8472–8486",
    doi: "10.1002/2016WR018849",
  },
];

/** Newest first; ties keep the order written above. */
export const publicationsByYear = [...publications].sort((a, b) => b.year - a.year);

export const featuredPublications = publicationsByYear.filter((p) => p.featured);

export const publicationHref = (p: Publication) =>
  p.doi ? `https://doi.org/${p.doi}` : p.url;

export const findByDoi = (doi: string) => publications.find((p) => p.doi === doi);
