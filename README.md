# Ann / 林庭安 — Online CV & Portfolio

A bilingual Astro site serving as both a Mandarin-first portfolio for the Taiwan market (design background, woodcraft, restoration, reuse) and an English-first online CV for Canada job applications (employability, process, craft discipline, project evidence).

**Concept:** Reclaimed Narrative — an editorial gallery-meets-workshop portfolio. The core story is Ann's transition from interior design into hands-on woodcraft: design training, European reuse influence, Taiwan restoration interest, and the belief that old wood deserves a second life.

The homepage follows a CV-shaped hierarchy aligned with `cv.md`: Contact Details → Professional Profile → Core Skills → Work Experience → Training & Certifications → Project Evidence → Additional Background.

## Stack

- **Framework:** Astro, static output
- **Package manager:** pnpm only
- **Languages/routes:** explicit static routes `/zh-TW` and `/en`
- **Content source:** typed bilingual data in `src/data/site.ts`
- **Assets:** images in `public/assets/pictures/`, workshop PDF in `public/downloads/`
- **Hosting target:** any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages)

## Requirements

Install pnpm if you do not already have it:

```bash
corepack enable
corepack prepare pnpm@10.12.1 --activate
```

## Development

```bash
pnpm install
pnpm dev
```

Open:

- `http://localhost:4321/` → redirects to `/zh-TW`
- `http://localhost:4321/zh-TW`
- `http://localhost:4321/en`

## Build & Preview

```bash
pnpm build      # runs astro check + astro build
pnpm preview    # preview the production build locally
```

## Project Structure

```text
src/data/site.ts             Bilingual CV/profile data and UI strings
src/layouts/BaseLayout.astro Shared document shell and language switch
src/components/              Project cards and grid
src/pages/zh-TW/             Mandarin pages
src/pages/en/                English pages
src/styles/global.css        Global visual system (CV-specific styles included)
public/assets/pictures/      Portfolio images
public/downloads/            Workshop PDF download
cv.md                        Content source of truth for homepage sections
```

## Routes

- `/` → redirects to `/zh-TW`
- `/zh-TW` — Mandarin CV homepage
- `/en` — English CV homepage
- `/{locale}/projects/table-frame`
- `/{locale}/projects/small-objects`
- `/{locale}/projects/reuse-games`

## Roadmap

### Completed

- [x] Astro project with static output and bilingual routing (`/zh-TW`, `/en`)
- [x] Shared layout, visual system, and global styles
- [x] Bilingual data model in `src/data/site.ts` with full CV fields
- [x] Project detail routes for curated case studies
- [x] Real photos and workshop PDF in `public/`
- [x] Homepage restructured as CV-first (aligned with `cv.md`) — Contact, Profile, Skills, Experience, Training, Project Evidence, Background
- [x] CV-specific styles for dense content, grouped skills, experience entries, and responsive layout

### Content Refinement

- [ ] Replace all placeholder copy with final reviewed Mandarin and English language
- [ ] Add exact education, certification, work history, and location details
- [ ] Add Canada-specific recruiter CV route
- [ ] Add Taiwan-specific workshop/restoration narrative route
- [ ] Decide whether phone number should be public on the website

### Project Evidence

- [ ] Add more photos per project: source material, process, detail, finished object
- [ ] Split grouped projects into separate case studies once image coverage is strong
- [ ] Add material/technique metadata for each project
- [ ] Add downloadable PDF links per language if translated PDFs are created

### Interaction & Polish

- [ ] Add accessible project gallery/lightbox or carousel
- [ ] Add before/after component for restoration projects
- [ ] Add subtle scroll reveal motion with reduced-motion support
- [ ] Add Open Graph images and SEO metadata per language
- [ ] Add print styles for recruiter-friendly CV pages

### Quality & Launch

- [ ] Run Astro check/build
- [ ] Test mobile layout
- [ ] Test language switch links
- [ ] Test project pages and PDF download
- [ ] Deploy static build

## Open Questions

1. **Privacy** — confirm whether phone number should be publicly shown
2. **Translation quality** — new Mandarin wording should be reviewed for tone and correctness
3. **Work experience specificity** — the current CV still has generic experience bullets; stronger factual detail would improve the site later
4. **Project narrative mismatch** — `cv.md` is CV-oriented, while existing projects include broader storytelling; may need a later pass for consistency
5. **Content density** — the CV-shaped homepage increases text volume, so layout quality matters

## Notes

- Do not use `npm install` or commit `package-lock.json`; this project uses `pnpm-lock.yaml`.
- The legacy `index.html` and `style.css` remain in the repository as reference while the Astro implementation lives in `src/`.
- Future content model: migrate project data into Astro content collections when project count grows.
