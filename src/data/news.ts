/**
 * Lab news, shown on the Contact & News page. Add new items at the top;
 * the page sorts by date anyway, newest first.
 *
 * `date` is "YYYY-MM" or "YYYY-MM-DD". `link` is optional and can point to a
 * paper, a conference page, an award announcement or an internal page.
 */

export type NewsCategory =
  | "opportunity"
  | "publication"
  | "conference"
  | "award"
  | "student-award";

export const newsCategoryLabel: Record<NewsCategory, string> = {
  opportunity: "Opportunity",
  publication: "Publication",
  conference: "Conference",
  award: "Award",
  "student-award": "Student award",
};

export type NewsItem = {
  date: string;
  category: NewsCategory;
  title: string;
  body?: string;
  link?: { href: string; label: string };
};

export const news: NewsItem[] = [
  {
    date: "2026-09",
    category: "opportunity",
    title: "PhD and postdoc positions",
    body: "We are looking for highly motivated PhD students and postdocs to join the lab. To apply, email alon.nissan@mail.huji.ac.il with your CV.",
  },
  // Examples of the other categories (copy, fill in and uncomment):
  // {
  //   date: "2026-10",
  //   category: "publication",
  //   title: "New paper in Nature Communications",
  //   body: "One sentence on what the paper shows.",
  //   link: { href: "https://doi.org/...", label: "Read the paper" },
  // },
  // { date: "2026-11", category: "conference", title: "Talk at AGU Fall Meeting, San Francisco" },
  // { date: "2026-12", category: "award", title: "Name of award" },
  // { date: "2026-12", category: "student-award", title: "Student name wins best poster at ..." },
];

export function newsByDate(): NewsItem[] {
  return [...news].sort((a, b) => b.date.localeCompare(a.date));
}

/** "2026-09" -> "September 2026", "2026-09-14" -> "14 September 2026". */
export function formatNewsDate(date: string): string {
  const [year, month, day] = date.split("-").map(Number);
  const d = new Date(Date.UTC(year, month - 1, day ?? 1));
  return d.toLocaleDateString("en-GB", {
    timeZone: "UTC",
    year: "numeric",
    month: "long",
    ...(day ? { day: "numeric" } : {}),
  });
}
