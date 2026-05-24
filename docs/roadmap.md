# Ann / 林庭安 Online CV Roadmap

## Goal

Transform the current static CV template into a bilingual, modern, static Astro portfolio for Ann / 林庭安. The site should work as both:

- a Mandarin-first portfolio for the Taiwan market, focused on design background, woodcraft, restoration, and reuse; and
- an English-first CV/portfolio for Canada job applications, focused on employability, process, craft discipline, and project evidence.

## Product Direction

**Concept:** Reclaimed Narrative — an editorial gallery-meets-workshop portfolio.

The core story is not generic woodworking. It is Ann's transition from interior design into hands-on woodcraft: design training, European reuse influence, Taiwan restoration interest, and the belief that old wood deserves a second life.

## Technical Direction

- Framework: Astro, static output.
- Languages: explicit static routes `/zh-TW` and `/en`.
- Hosting target: any static host, such as Netlify, Vercel, Cloudflare Pages, or GitHub Pages.
- Assets: real photos copied into `public/assets/pictures/` for immediate use.
- PDF: original workshop presentation available as a download under `public/downloads/`.
- Future content model: migrate project data into Astro content collections when project count grows.

## Milestones

### Milestone 1 — Foundation

- [x] Preserve existing static files as reference.
- [x] Add roadmap document.
- [x] Add Astro project configuration.
- [x] Copy real assets into `public/`.
- [x] Create bilingual data model.
- [x] Create shared layout and global visual system.
- [x] Create Mandarin and English landing pages.
- [x] Create bilingual project detail routes.

### Milestone 2 — Content Refinement

- [ ] Replace all placeholder copy with final reviewed Mandarin and English language.
- [ ] Add exact education, certification, work history, and location details.
- [ ] Add Canada-specific recruiter CV route.
- [ ] Add Taiwan-specific workshop/restoration narrative route.
- [ ] Decide whether phone number should be public on the website.

### Milestone 3 — Project Evidence

- [ ] Add more photos per project: source material, process, detail, finished object.
- [ ] Split grouped projects into separate case studies once image coverage is strong.
- [ ] Add material/technique metadata for each project.
- [ ] Add downloadable PDF links per language if translated PDFs are created.

### Milestone 4 — Interaction & Polish

- [ ] Add accessible project gallery/lightbox or carousel.
- [ ] Add before/after component for restoration projects.
- [ ] Add subtle scroll reveal motion with reduced-motion support.
- [ ] Add Open Graph images and SEO metadata per language.
- [ ] Add print styles for recruiter-friendly CV pages.

### Milestone 5 — Quality & Launch

- [ ] Run Astro check/build.
- [ ] Test mobile layout.
- [ ] Test language switch links.
- [ ] Test project pages and PDF download.
- [ ] Deploy static build.

## Current Implementation Notes

The original `index.html` and `style.css` remain in the repository as reference. The new Astro implementation lives under `src/`, with assets served from `public/`.

The first implementation intentionally starts with a small set of curated case studies because current photo coverage is limited. This avoids weak project pages while still presenting Ann's strongest narrative.
