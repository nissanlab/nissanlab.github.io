/**
 * Lab-wide identity, contact details and navigation.
 * Edit here rather than in layout components.
 */

export const site = {
  name: "Nissan Lab",
  subtitle: "The Terrestrial Physics Lab",
  pi: "Dr. Alon Nissan",
  department: "Department of Soil and Water Sciences",
  faculty: "Faculty of Agriculture, Food and Environment",
  university: "The Hebrew University of Jerusalem",
  universityUrl: "https://new.huji.ac.il/",
  description:
    "The Terrestrial Physics Lab studies how water shapes the fate of organic matter in soil, at scales from the pore space up to the global land surface. Our work combines microfluidic soil analogs, instrumented soil mesocosms, whole soil profiles, transport theory and global soil datasets.",
  url: "https://nissanlab.github.io",
  email: "alon.nissan@mail.huji.ac.il",
  phone: "+972 8 948 9912",
  address: {
    lines: [
      "The Terrestrial Physics Lab",
      "Lubell Building, room 18",
      "Department of Soil and Water Sciences",
      "Faculty of Agriculture, Food and Environment",
      "The Hebrew University of Jerusalem",
      "Rehovot 7610001, Israel",
    ],
    /**
     * Place query used for the embedded map and the "open in Google Maps"
     * link on the contact page. Edit here to move the pin; the keyless embed
     * endpoint resolves the query the same way a Maps search would.
     */
    mapQuery: "Lubell Building, Faculty of Agriculture, Hebrew University, Rehovot",
    mapZoom: 16,
  },
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/research", label: "Research" },
  { href: "/people", label: "People" },
  { href: "/publications", label: "Publications" },
  { href: "/contact", label: "Contact & News" },
] as const;

export const institutionalLinks = [
  { href: "https://en.huji.ac.il/", label: "The Hebrew University of Jerusalem" },
  {
    href: "https://en.hafakulta.agri.huji.ac.il/",
    label: "Robert H. Smith Faculty of Agriculture, Food and Environment",
  },
  { href: "https://soilandwater.agri.huji.ac.il/", label: "Department of Soil and Water Sciences" },
] as const;

export const profileLinks = [
  { href: "https://scholar.google.com/citations?user=zlNgAZsAAAAJ&hl=en", label: "Google Scholar" },
  { href: "https://www.researchgate.net/profile/Alon-Nissan", label: "ResearchGate" },
] as const;
