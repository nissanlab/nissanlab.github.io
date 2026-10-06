# Asset log

Every image shipped in `public/` is listed here with its source and reuse status.
Nothing is used from a stock library or an unlicensed third party. The only third-party images are openly licensed and credited on the page.

## Status legend

- **Lab-owned** — taken from the lab's existing website (`alonnissan.wixsite.com/mylab`),
  i.e. material the lab already published as its own.
- **Verify** — taken from the lab's existing site, but the original author is not
  recorded there. Confirm provenance before the site goes public.

---

## Hero

| File | Source | Author / status | Used on |
| --- | --- | --- | --- |
| `public/videos/home-timelapses.mp4` | Existing `pore-timelapse.mp4`, followed by user-supplied `plant_noBacteria_raw_Ph1_first20h.gif` | First clip 6.8 s; plant clip 5 s at its original timing. Plant image fitted to the 1600 × 800 canvas with side padding to preserve the full portrait frame. H.264, 10 fps. | Home hero, both clips looping in sequence |
| `public/videos/pore-timelapse.mp4` | `Vids/Merged-2.avi` (lab microscopy of wild-type *Pseudomonas putida* in a soil-analog chip, 2789 × 2801, 10 fps) | Lab-owned. First 2 s cut, then a 2100 × 1050 crop at offset (688, 376) — in from the full width so the small pores read at hero size, without losing the sense of the wider field. Scaled to 1600 × 800, H.264. Loop point cross-faded over 0.8 s. 6.8 s, 1.6 MB. | Home hero |
| `public/images/hero/pore-timelapse.jpg` | First frame of the above | Lab-owned. Poster frame; also what a visitor with "reduce motion" set sees. | Home hero |
| `public/images/hero/pore-timelapse.gif` | Same clip | Lab-owned. 640 px, 8 fps, 48 colours, 3.6 MB. Not referenced by the site: at a size small enough to ship it is far softer than the MP4. Kept for slides and email. | — |
| `public/images/hero/root-chip.jpg` | `alonnissan.wixsite.com/mylab` (home page, `root_chip.jpg`) | Lab-owned. Downscaled from 22663 × 16850 to 2560 px wide. | Not currently placed (was the hero until the clip replaced it) |

## Research

| File | Source | Author / status | Used on |
| --- | --- | --- | --- |
| `public/images/research/pore-microfluidic.jpg` | `.../mylab/research` (`SI_microFluidic.png`) | Lab-owned figure. Converted to JPEG, 1500 px wide. | Home, Research — *Water and air in the pore space* |
| `public/images/research/root-rhizosphere.jpg` | Crop of the same original as `root-chip.jpg` | Lab-owned. | Home, Research — *Roots, organic matter and microorganisms* |
| `public/images/research/reactive-transport.jpg` | `.../mylab/research` (`Screenshot 2024-03-21…`) | Lab-owned. | Not currently placed (from Nissan et al. 2021, ACS ES&T Water, doi:10.1021/acsestwater.0c00043; removed from the home hero) |
| `public/images/research/soil-microbes.jpg` | Old research page (`soilMicrobes_034_new_cropped_edited.jpg`) | Lab-owned: colourised scanning electron microscopy image of microorganisms on a root, from Nissan et al. 2023, Nature Communications, doi:10.1038/s41467-023-38981-w. | Home hero (third slide, still) |
| `public/images/research/soil-carbon-profiles.jpg` | Two Wikimedia Commons photos, cropped to full height and set side by side at 1500 × 1061: [`Чорнозем_типовий.jpg`](https://commons.wikimedia.org/wiki/File:Чорнозем_типовий.jpg) (left) and [`Podzols.JPG`](https://commons.wikimedia.org/wiki/File:Podzols.JPG) (right) | **Third-party, openly licensed.** Left: Serhey0211994, CC BY 4.0. Right: Michaila vnuk (Ukrainian Wikipedia), CC BY-SA 3.0. Credit is set in the `credit` field in `src/data/research.ts` and shown on both the home card and the research page; keep it. | Home, Research — *What makes carbon stay in a soil* |
| `public/images/research/global-nee-map.jpg` | `.../mylab/research` (`Fig_wis_4.png`, panel **b** cropped) | Lab-owned figure. | Not currently placed (replaced by `soil-carbon-profiles.jpg`) |

**Not used — needs a decision:**

- `CarbonCycle1.png` (terrestrial-carbon-cycle schematic from the old site).
  Left out: it is a generic diagram, contains a typo, and does not fit the new
  layout.

## People

| File | Source | Author / status | Used on |
| --- | --- | --- | --- |
| `public/images/people/*.jpg` (10 portraits) | `.../mylab/group` (Daniel Nadav: supplied directly, Sep 2026) | Lab-owned; supplied by the people pictured. Cropped to 4:5 and resized to 800 × 1000. | People, Contact |

Missing portrait: **Tzuriel Levin** (the old site used a generic grey avatar).
The directory falls back to initials until a photograph is added.

## Logos

| File | Source | Author / status | Used on |
| --- | --- | --- | --- |
| `public/images/logos/huji-horizontal.png` | `.../mylab` footer | The Hebrew University of Jerusalem official logo. Institutional use by a university lab. Transparent margins trimmed. | Header, Footer |
| `public/images/logos/faculty-agriculture.png` | `.../mylab` footer | Robert H. Smith Faculty of Agriculture, Food and Environment logo. Institutional use. Margins trimmed. | Footer |
| `public/images/logos/huji-vertical.png` | `.../mylab` footer | As above. Not currently placed; kept for future use. | — |

## Type

| Asset | Source | Licence |
| --- | --- | --- |
| **Figtree** (all text) | Google Fonts, via `next/font/google` — self-hosted at build time, no runtime request to Google | SIL Open Font License 1.1 |

## Icons and marks

All icons (chevrons, mail/phone/pin/link, the lab mark in the header, `src/app/icon.svg`)
are inline SVG written for this project. No icon library is used.

## Video

`public/videos/home-timelapses.mp4` runs in the home hero, playing the pore
animation followed automatically by the plant animation before repeating. The
original `pore-timelapse.mp4` is retained as the source for the first segment.
`Hero` takes an
optional `video` prop; when it is set, `src` becomes the poster frame and
`src/components/HeroVideo.tsx` renders the clip muted, looping and inline.
Playback is started from JavaScript rather than the `autoplay` attribute so
that `prefers-reduced-motion: reduce` leaves the poster frame in place.

The source file, `Vids/Merged-2.avi` (110 MB), is not committed.
