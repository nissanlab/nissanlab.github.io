# Nissan Lab — The Terrestrial Physics Lab

Website for the Nissan Lab, Department of Soil and Water Sciences, Faculty of
Agriculture, Food and Environment, The Hebrew University of Jerusalem.

Built with **Next.js 16** (App Router), **TypeScript** and **Tailwind CSS v4**.
No other runtime dependencies.

The visual language — green accent, white surfaces, large rounded media, centred
section titles with an accent underline — follows the Weizmann lab-site style
used by the Bar-On Lab, rebuilt from scratch for this project.

---

## Quick start

```bash
npm install
npm run dev          # http://localhost:3000
```

Other scripts:

```bash
npm run build        # production build
npm start            # serve the production build
npm run lint         # eslint
npx tsc --noEmit     # type check
```

---

## Project structure

```
src/
  app/                     one folder per page (App Router)
    layout.tsx             fonts, <head> metadata, header + footer
    globals.css            ALL design tokens (colour, radius, shadow, type)
    page.tsx               home page — numbered section comments
    research/page.tsx
    people/page.tsx
    publications/page.tsx
    news/page.tsx
    join/page.tsx
    contact/page.tsx
    icon.svg               favicon
    sitemap.ts, robots.ts
  components/              presentation only, no content
    SiteHeader / SiteFooter
    Hero                   home hero image + floating lockup
    SectionTitle           heading with the accent underline
    ScaleAxis              the pore → globe scale strip
    ResearchCard           home research tile
    ResearchRow            research-page image/text row
    PublicationEntry       one bibliography entry
    PersonCard             one lab member
    NewsList               news items
    Container, ArrowLink, Chevron, PageIntro
  data/                    ALL editable content
    site.ts                lab name, address, email, navigation, external links
    research.ts            the six scales + the research themes
    people.ts              lab members
    publications.ts        bibliography
    news.ts                news items
public/
  images/hero | research | people | logos | news
  video/                   empty; see ASSETS.md
```

**The rule:** content lives in `src/data/*`, layout lives in `src/components/*`.
You should never have to open a component to change what the site says.

---

## How to edit each section

### Change the colour scheme

`src/app/globals.css`, the `@theme` block at the top. Changing `--color-brand`
(plus `--color-brand-hover`, `--color-brand-tint`, `--color-brand-wash`) re-themes
the whole site — links, underlines, pills, ticks, icons.

### Lab name, address, email, navigation

`src/data/site.ts`. Also set `url` there to the final production domain; it is
used by the sitemap and the social-preview metadata.

### Add a publication

`src/data/publications.ts` — append an object anywhere in the array; the list
sorts by year automatically.

```ts
{
  authors: ["A. Nissan", "B. Coauthor"],
  title: "Title as printed",
  venue: "Journal Name",
  year: 2026,
  volume: "12",
  issue: "3",
  pages: "101–115",       // or articleNumber: "034124"
  doi: "10.1000/xyz123",
  featured: true,         // shows it on the home page
  abstract: "Optional — renders as an expandable block.",
  pdf: "/papers/xyz.pdf", // optional, file goes in public/papers/
}
```

Check the details against Crossref (`https://api.crossref.org/works/<doi>`)
before adding.

### Add or change a person

`src/data/people.ts`. Set `group` to one of `pi`, `staff`, `postdoc`, `phd`,
`msc`, `alumni` — sections appear in the order given by `groupOrder` and empty
sections are skipped, so moving someone to `alumni` creates the Alumni section
automatically.

Portraits: 4:5 ratio, about 800 × 1000 px, in `public/images/people/`, referenced
as `photo: "/images/people/<file>.jpg"`. Omit `photo` and the card shows initials.

### Add news

`src/data/news.ts`. `date` is `YYYY-MM-DD`; the list sorts newest first and the
home page shows the three most recent. `image` and `link` are optional.

### Change research content

`src/data/research.ts` holds two things:

- `scales` — the six stops on the pore → globe strip (name, characteristic
  length, question, one-line blurb).
- `researchThemes` — the research directions. Each has a `scaleLabel`, a title, a
  question, body paragraphs, a method list, an optional image and an optional
  list of `relatedDois` that are looked up in `publications.ts`.

Adding a theme adds it to the home grid *and* the research page. A theme without
an `image` renders a visible "image pending" placeholder rather than a gap.

### Replace an image

Put the file in the matching folder under `public/images/`, then point the
relevant entry in `src/data/*` at it. Set `fit: "contain"` on a research image if
it is a plot or a map that must not be cropped; leave it off for photographs and
micrographs. Record the source in `ASSETS.md`.

Recommended sizes: hero ≤ 2560 px wide, research images ≤ 1600 px, portraits
800 × 1000. Next.js resizes and serves modern formats from these.

### Use a video hero

Replace the `<Image>` in `src/components/Hero.tsx` with a `<video>` that is
`muted`, `playsInline`, `autoPlay`, `loop`, with a `poster`. Keep the file under
a few MB and put it in `public/video/`.

---

## Deploying to GitHub Pages

The site is a static export (`output: "export"` in `next.config.ts`) hosted at
<https://nissanlab.github.io> from the `nissanlab/nissanlab.github.io` repository.

- Every push to `main` runs `.github/workflows/deploy.yml`, which builds the
  site and publishes the `out` folder. The live site updates in a minute or two.
- GitHub Pages has no server to resize images, so compress images before adding
  them to `public/`.
- To use a custom domain, add it under **Settings → Pages → Custom domain** in
  the repository, then set the same URL in `site.url` in `src/data/site.ts` so
  the sitemap and metadata match.

---

## Accessibility and performance notes

- Semantic landmarks (`header`, `nav`, `main`, `footer`), one `h1` per page, and
  a skip link.
- The scale strip is a proper ARIA tablist with arrow-key navigation.
- Every image has descriptive alt text; decorative images use `alt=""`.
- Animation is limited to small hover transitions and is disabled under
  `prefers-reduced-motion`.
- Only two client components (`SiteHeader`, `ScaleAxis`); everything else is
  server-rendered and statically generated.

See `ASSETS.md` for image sources and reuse status.
