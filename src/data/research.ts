/**
 * Research content: the scale framework that organises the lab, and the
 * research themes attached to it. Adding a theme here adds it to both the
 * home page and the research page.
 *
 * The lab is organised around one question asked at four scales, so `scales`
 * and `researchThemes` are kept one-to-one: each scale has exactly one theme.
 */

export type Scale = {
  id: string;
  /** Short name shown on the scale axis. */
  name: string;
  /** Characteristic length, written for display (e.g. "10⁻⁵ m"). */
  length: string;
  /** Plain-language gloss of the length, e.g. "tens of micrometres". */
  lengthGloss: string;
  /** The question asked at this scale. */
  question: string;
  /** One or two sentences. Kept short: this is a caption, not a paragraph. */
  blurb: string;
};

export const scales: Scale[] = [
  {
    id: "micro",
    name: "Microscale",
    length: "10⁻⁶–10⁻³ m",
    lengthGloss: "micrometres to millimetres",
    question: "Where is the water, and what can roots and microorganisms reach?",
    blurb:
      "Air and water share the pore space, and the way they divide it sets which paths stay connected. We ask how the amount of water and its flow change how far roots and microorganisms can explore, and whether they can follow chemical signals to the resources they need.",
  },
  {
    id: "mesocosm",
    name: "Soil mesocosm",
    length: "10⁻¹ m",
    lengthGloss: "tens of centimetres",
    question: "What does a piece of soil release, as which gas, and what controls it?",
    blurb:
      "In an instrumented mesocosm we set the conditions and follow the gas leaving the soil continuously: CO₂, CH₄, N₂O, and the isotopic composition of the CO₂. We run different soils through the same changes, and watch the response while conditions shift as well as once they settle.",
  },
  {
    id: "profile",
    name: "Profile · Pedon",
    length: "10⁰ m",
    lengthGloss: "metres",
    question: "Why does carbon sit where it does down a profile?",
    blurb:
      "A complete profile with a crop growing in it, kept in a greenhouse. We ask which mechanisms shape the carbon distribution with depth: what the plant puts in and where, how it is carried down, and how fast it is broken down.",
  },
  {
    id: "global",
    name: "Ecosystem to globe",
    length: "10³–10⁷ m",
    lengthGloss: "kilometres to planetary",
    question: "Are there scaling laws that explain organic matter dynamics?",
    blurb:
      "We compile data from global soil databases and look for robust scaling laws that explain how organic matter behaves across soils.",
  },
];

export type ResearchTheme = {
  id: string;
  /** Index shown as an editorial section number. */
  number: string;
  /** Which scale(s) this theme sits at. Must match Scale ids. */
  scaleIds: string[];
  title: string;
  question: string;
  /** Paragraphs, plain text. */
  body: string[];
  /** Lab members working at this scale. Ids must match src/data/people.ts. */
  peopleIds: string[];
  image?: {
    src: string;
    alt: string;
    caption: string;
    width: number;
    height: number;
    /** "contain" for plots, maps and figure panels that must not be cropped. */
    fit?: "cover" | "contain";
    /** Photo credit for third-party images. Shown wherever the image appears. */
    credit?: string;
  };
  /** External links shown under the text, e.g. a shared facility. */
  links?: { href: string; label: string }[];
};

export const researchThemes: ResearchTheme[] = [
  {
    id: "microscale",
    number: "01",
    scaleIds: ["micro"],
    title: "Water, roots and microorganisms in the pore space",
    question: "What does the inside of a soil look like to a root or a microbe?",
    body: [
      "Soil is mostly empty space, and where the water sits in that space decides what roots and microorganisms can reach. We grow roots in transparent chips with a pore space of our own design, follow the water and the microbes under a microscope, and put the mathematics behind what we see.",
    ],
    peopleIds: ["omer-eyal", "yoel-grinshpon", "daniel-nadav", "dvir-mendelson"],
    image: {
      src: "/images/research/root-microbes.jpg",
      alt: "Micrograph of a microfluidic soil-analog chip: a root threads between hundreds of circular pillars, with green and orange fluorescence marking microorganisms colonising the root and the pore space around it. Two insets at 200 micrometre scale show the colonised root surface in detail; the main panel carries a 2 millimetre scale bar.",
      caption:
        "A root growing through a microfluidic soil-analog chip, with fluorescently labelled microorganisms (green and orange) along the root and in the surrounding pore space.",
      width: 2000,
      height: 1867,
      fit: "contain",
    },
  },
  {
    id: "mesocosm",
    number: "02",
    scaleIds: ["mesocosm"],
    title: "What the soil breathes out",
    question: "What controls the gases a soil gives off?",
    body: [
      "We fill containers with soil and keep them in climate chambers. Sensors measure the carbon dioxide, methane and nitrous oxide coming off them around the clock. Does watering with a different kind of water change what a soil gives off? What happens when temperature and moisture go up and down, as they do outdoors? When microbes are moved into a soil they have never lived in, do their communities end up alike? Isotope labelling tells us where the carbon came from.",
    ],
    peopleIds: ["itai-david", "asif-charazi", "sharon-edweins", "tzuriel-levin"],
    image: {
      src: "/images/research/mesocosm-gas-setup.jpg",
      alt: "Small glass jars of soil in a tray on a lab bench, each capped with fittings and connected by clear tubing to two stacked yellow cases, which are cabled to a grey LI-COR gas analyser.",
      caption:
        "Soil jars connected by tubing to a LI-COR gas analyser (grey case) through two multiplexers (yellow cases).",
      width: 2000,
      height: 1559,
    },
  },
  {
    id: "profile",
    number: "03",
    scaleIds: ["profile"],
    title: "The shape of carbon in a soil profile",
    question: "Why does carbon sit where it does down a profile?",
    body: [
      "Carbon is not spread evenly down a soil profile: most sits near the surface and thins with depth. That shape comes from inputs above and below ground, from advection and dispersion carrying carbon down, and from degradation on the way, all of it varying in space and time. We work on this in the greenhouse at the Future Crops for Carbon Farming centre, and build the mathematical models alongside.",
    ],
    peopleIds: ["tzuriel-levin"],
    links: [
      { href: "https://www.fccf-center.org/", label: "Future Crops for Carbon Farming (FCCF)" },
    ],
    // TODO: image to be supplied for the lysimeter facility.
  },
  {
    id: "global",
    number: "04",
    scaleIds: ["global"],
    title: "Scaling laws for soil organic matter",
    question: "Are there scaling laws that explain organic matter dynamics?",
    body: [
      "We compile data from global soil databases and look for scaling laws that hold across very different soils. A law that survives that range can explain organic matter dynamics without the detail of each site.",
    ],
    peopleIds: ["shaul-gazit"],
    image: {
      src: "/images/research/soil-carbon-profiles.jpg",
      alt: "Two soil pits side by side: on the left a chernozem, dark with organic matter to nearly a metre deep; on the right a sandy podzol under pine, with only a thin dark layer over pale sand.",
      caption:
        "Two soils, two outcomes. Left: a chernozem formed on loess (Ukraine), dark with organic carbon to almost a metre. Right: a sandy podzol under pine (Karelian Isthmus), with carbon only in a thin surface layer.",
      width: 1500,
      height: 1061,
      fit: "cover",
      credit:
        "Photos: Serhey0211994, CC BY 4.0; Michaila vnuk, CC BY-SA 3.0, via Wikimedia Commons.",
    },
  },
];

/**
 * Display label for a theme's scale, read back from `scales` so the label on a
 * research card can never drift from the name on the scale ladder.
 */
export const scaleLabel = (theme: ResearchTheme) =>
  theme.scaleIds
    .map((id) => scales.find((scale) => scale.id === id)?.name)
    .filter(Boolean)
    .join(" · ");

/** The theme belonging to a scale. One-to-one, see the note at the top. */
export const themeForScale = (scaleId: string) =>
  researchThemes.find((theme) => theme.scaleIds.includes(scaleId));
