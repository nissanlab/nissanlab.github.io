/**
 * Lab members. To add someone: append an entry with the right `group`,
 * drop a portrait in public/images/people/ (4:5, ~800 × 1000 px) and point
 * `photo` at it. Omit `photo` and the directory renders initials instead.
 */

export type PersonGroup = "pi" | "staff" | "postdoc" | "phd" | "msc" | "alumni";

export type Person = {
  id: string;
  name: string;
  role: string;
  group: PersonGroup;
  /** One sentence on what they work on. */
  research?: string;
  email?: string;
  phone?: string;
  office?: string;
  /** External profile (Scholar, ORCID, personal page). */
  link?: { href: string; label: string };
  photo?: string;
};

export const groupOrder: { id: PersonGroup; title: string }[] = [
  { id: "pi", title: "Principal Investigator" },
  { id: "staff", title: "Research Staff" },
  { id: "postdoc", title: "Postdoctoral Researchers" },
  { id: "phd", title: "PhD Students" },
  { id: "msc", title: "MSc Students" },
  { id: "alumni", title: "Alumni" },
];

export const people: Person[] = [
  {
    id: "alon-nissan",
    name: "Alon Nissan",
    role: "Principal Investigator",
    group: "pi",
    research:
      "Transport in porous media and the coupling between the water and carbon cycles, from the pore scale to the global land surface.",
    email: "alon.nissan@mail.huji.ac.il",
    phone: "+972 8 948 9912",
    office: "Lubell Building, room 18",
    link: {
      href: "https://scholar.google.com/citations?user=zlNgAZsAAAAJ&hl=en",
      label: "Google Scholar",
    },
    photo: "/images/people/alon-nissan.jpg",
  },
  {
    id: "tzuriel-levin",
    name: "Tzuriel Levin",
    role: "Lab Manager",
    group: "staff",
    // TODO: research line not available on the previous site.
    email: "tzuriell@savion.huji.ac.il",
    office: "Lubell Building, room 39",
    photo: "/images/people/tzuriel-levin.jpg",
  },
  {
    id: "yoel-grinshpon",
    name: "Yoel Grinshpon",
    role: "Postdoctoral Researcher",
    group: "postdoc",
    research:
      "How bacteria move through porous media, and which motility strategies serve them under different soil conditions, using both modelling and observation.",
    email: "yoel.grinshpon@mail.huji.ac.il",
    office: "Lubell Building, room 39",
    photo: "/images/people/yoel-grinshpon.jpg",
  },
  {
    id: "dvir-mendelson",
    name: "Dvir Mendelson",
    role: "Postdoctoral Researcher",
    group: "postdoc",
    research:
      "Root-microbial interactions in the rhizosphere, studied in microfluidic soil-analog chips.",
    email: "dn.mendelson@gmail.com",
    office: "Lubell Building, room 39",
    photo: "/images/people/dvir-mendelson.jpg",
  },
  {
    id: "omer-eyal",
    name: "Omer Eyal",
    role: "MSc Student",
    group: "msc",
    research: "Microbial spatial organisation and behaviour in soil-like microfluidic systems.",
    email: "omer.eyal1@mail.huji.ac.il",
    office: "Lubell Building, room 39",
    photo: "/images/people/omer-eyal.jpg",
  },
  {
    id: "daniel-nadav",
    name: "Daniel Nadav",
    role: "MSc Student",
    group: "msc",
    photo: "/images/people/daniel-nadav.jpg",
    // TODO: new student. Confirm degree/group, add a research line and email.
  },
  {
    id: "shaul-gazit",
    name: "Shaul Gazit",
    role: "MSc Student",
    group: "msc",
    research:
      "How soil mineral composition regulates organic carbon stability and decomposition, using global datasets and machine learning.",
    email: "shaul.gazit@mail.huji.ac.il",
    office: "Lubell Building, room 39",
    photo: "/images/people/shaul-gazit.jpg",
  },
  {
    id: "itai-david",
    name: "Itai David",
    role: "MSc Student",
    group: "msc",
    research:
      "How (semi-)arid soils influence the sensitivity of microbial respiration to moisture and temperature.",
    email: "itai.david3@mail.huji.ac.il",
    office: "Lubell Building, room 39",
    photo: "/images/people/itai-david.jpg",
  },
  {
    id: "sharon-edweins",
    name: "Sharon Edweins",
    role: "MSc Student",
    group: "msc",
    research: "Microbial adaptation to environmental conditions in soil systems.",
    email: "sharon.edweins@mail.huji.ac.il",
    office: "Lubell Building, room 39",
    photo: "/images/people/sharon-edweins.jpg",
  },
  {
    id: "asif-charazi",
    name: "Asif Charazi",
    role: "MSc Student",
    group: "msc",
    research:
      "How irrigation water quality affects soil carbon dynamics, greenhouse gas emissions and carbon stabilisation.",
    email: "asif.charazi@mail.huji.ac.il",
    office: "Lubell Building, room 39",
    photo: "/images/people/asif-charazi.jpg",
  },
  // TODO: alumni. No former members were listed on the previous site.
];

export const peopleByGroup = (group: PersonGroup) => people.filter((p) => p.group === group);
