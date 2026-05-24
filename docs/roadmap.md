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

## CV Alignment Implementation Plan

### Objective

Align the online Astro site with `cv.md` so the homepage behaves like a structured online CV first, while still preserving project cards and portfolio evidence.

### Problem Statement

The current homepage is portfolio-first:

- Hero
- Story
- Featured Work
- Process
- Contact

That structure is useful for browsing projects, but it does not match the reviewed CV draft in `cv.md`, which is organized around employability and qualifications.

The target homepage should instead follow this CV-shaped information hierarchy:

- Contact Details
- Professional Profile
- Core Skills
- Work Experience
- Training and Certifications
- Training Projects / Project Evidence
- Additional Background
- Contact / next step

### Scope

This plan covers:

- updating the bilingual content model in `src/data/site.ts`
- restructuring `/en` and `/zh-TW` homepages to match `cv.md`
- keeping project cards as supporting evidence rather than the homepage centerpiece
- updating styling in `src/styles/global.css` to support a professional CV layout

This plan does **not** cover:

- changing Astro routing
- changing project detail page architecture
- migrating to content collections
- introducing a new framework or CMS

### Current Architecture Summary

- `src/data/site.ts` is the single source of truth for bilingual content.
- `src/pages/en/index.astro` and `src/pages/zh-TW/index.astro` render the homepages.
- `src/components/ProjectGrid.astro` and `src/components/ProjectCard.astro` render project evidence.
- `src/layouts/BaseLayout.astro` provides the shared shell.
- `src/styles/global.css` controls the visual system.

This architecture is already suitable for the CV update. The main issue is content shape and homepage structure, not technical foundations.

### Content Source of Truth

`cv.md` becomes the reference for homepage content and section order, especially for the English route. The bilingual site data should be updated so that:

- English content reflects `cv.md`
- Mandarin content mirrors the same structure and intent
- project cards continue to support the CV with visual evidence

### Key Product Decision

The homepage should move from a portfolio-landing-page structure to a recruiter-friendly CV structure.

This does **not** mean removing the portfolio. It means changing the page hierarchy so visitors first understand:

1. who Ann is
2. what she can do
3. what training and experience she has
4. what projects prove that capability

### Assumptions

1. The phone number in `cv.md` may be shown publicly on the website, unless privacy concerns change that decision.
2. New Mandarin content will be added for all new sections and should be reviewed by a native reader before final publication.
3. Existing project cards remain part of the site, even if `cv.md` does not mention every current project equally.
4. The current Story and Process homepage sections will be removed or absorbed into CV-oriented sections.
5. The existing PDF download link remains available in the homepage hero or top section.
6. Project detail pages under `src/pages/{locale}/projects/[slug].astro` remain intact for this milestone.

### Target Homepage Structure

#### `/en`

Recommended section order:

1. Intro / top summary with name, short headline, and primary actions
2. Contact Details
3. Professional Profile
4. Core Skills
5. Work Experience
6. Training and Certifications
7. Training Projects / Project Evidence
8. Additional Background
9. Contact / availability footer

#### `/zh-TW`

Use the same structural order, translated and adapted for a Mandarin-first audience while keeping equivalent meaning.

### Data Model Changes

Update `src/data/site.ts` to support the full CV structure.

Add or revise the following content groups:

- `profile.name`
- `profile.email`
- `profile.phone`
- `profile.location`
- `profile.intro`
- `profile.headline`
- `profile.bio`

Add structured bilingual data for:

- contact labels
- skills grouped by section
- work experience entries
- training and certification entries
- additional background bullets
- section titles and UI copy

Recommended new content shape:

- `skills`: three groups
  - woodworking
  - design and project skills
  - sustainability focus
- `experience`: array of CV entries with title, organization, optional dates, and bullet points
- `training`: array of training/certification entries with title, subtitle, metadata, and bullets
- `background`: localized bullet list
- `ui`: add labels for each new CV section title and any section eyebrow text

### Page-Level Changes

#### `src/pages/en/index.astro`

Replace the current landing-page flow with a CV page that:

- keeps a strong introduction at the top
- renders explicit CV sections from `site.ts`
- embeds or retains project evidence lower in the page
- removes hardcoded Story and Process prose in favor of structured CV content

#### `src/pages/zh-TW/index.astro`

Mirror the English structural changes while rendering Mandarin content from the same data model.

### Component Changes

Minimal component changes are preferred.

Possible updates:

- keep `ProjectGrid.astro`, but relabel the section as Training Projects or Project Evidence depending on locale
- optionally add a reusable `CVSection.astro` component for consistency

`CVSection.astro` is optional. It improves maintainability but is not required for the milestone.

No changes are currently required for:

- `ProjectCard.astro`
- project detail pages
- `BaseLayout.astro`, unless navigation labels need adjustment

### Styling Changes

Update `src/styles/global.css` so the site reads as a polished online CV rather than a generic landing page.

Styling goals:

- strong readability for dense content
- clear section separation
- professional hierarchy for headings and grouped bullet lists
- responsive layout for mobile and desktop
- preserved visual identity from the current site

Likely additions:

- styles for contact list or contact grid
- styles for grouped skills
- styles for experience and certification entries
- spacing and typography adjustments for long-form CV sections
- section variants for project evidence inside the CV flow

### Execution Plan

#### Phase 1 — Expand the Data Model

Files:

- `src/data/site.ts`

Work:

- add missing contact fields
- align profile text with `cv.md`
- add skills, experience, training/certification, and background structures
- add new localized UI labels for CV section headings

Completion criteria:

- both locales compile cleanly
- every new content field has `en` and `zh-TW` values

#### Phase 2 — Prepare Reusable Page Structure

Files:

- optional: `src/components/CVSection.astro`
- `src/components/ProjectGrid.astro` if section wording changes

Work:

- create a shared section wrapper only if it reduces duplication cleanly
- update project section labeling so it fits the CV structure

Completion criteria:

- shared section rendering is consistent
- project section labeling matches the CV framing

#### Phase 3 — Restructure Both Homepages

Files:

- `src/pages/en/index.astro`
- `src/pages/zh-TW/index.astro`

Work:

- replace Story and Process sections
- render the CV section order from `site.ts`
- keep project evidence within the new CV flow
- keep the PDF action if still useful

Completion criteria:

- page order matches the roadmap target structure
- no hardcoded legacy narrative blocks remain unless deliberately retained

#### Phase 4 — Add Supporting Styles

Files:

- `src/styles/global.css`

Work:

- style new CV sections and grouped content
- refine layout hierarchy for reading and scanning
- keep the visual system coherent across both locales

Completion criteria:

- layout is readable on desktop and mobile
- content density feels intentional rather than crowded

#### Phase 5 — Verification

Work:

- run Astro build/check
- review `/en`
- review `/zh-TW`
- verify language switch behavior
- verify project card rendering and links
- verify PDF download link

Completion criteria:

- clean build
- no broken layout in either locale
- homepage content clearly follows `cv.md`

### File Change Summary

Expected primary files:

- `src/data/site.ts`
- `src/pages/en/index.astro`
- `src/pages/zh-TW/index.astro`
- `src/styles/global.css`

Possible supporting file:

- `src/components/CVSection.astro`

Potential minor update:

- `src/components/ProjectGrid.astro`

### Risks and Open Questions

1. **Privacy** — confirm whether phone number should be publicly shown.
2. **Translation quality** — new Mandarin wording should be reviewed for tone and correctness.
3. **Work experience specificity** — the current CV still has generic experience bullets; stronger factual detail would improve the site later.
4. **Project narrative mismatch** — `cv.md` is more CV-oriented, while the existing projects include broader storytelling. These may need a later pass for tighter consistency.
5. **Content density** — moving to a CV-shaped homepage increases text volume, so layout quality matters more than before.

### Verification Checklist for the Milestone

- [ ] `src/data/site.ts` contains all new bilingual CV data
- [ ] `/en` follows the `cv.md` section order
- [ ] `/zh-TW` follows the same structure
- [ ] project cards remain visible as supporting evidence
- [ ] old Story/Process homepage sections are removed or intentionally absorbed
- [ ] phone visibility decision is confirmed
- [ ] build passes successfully
- [ ] language switch works correctly
- [ ] mobile layout remains readable

### Definition of Done

This milestone is complete when:

- the homepage is clearly CV-first rather than portfolio-first
- English content follows `cv.md`
- Mandarin content mirrors the same structure
- project cards remain available as proof of work
- the site builds cleanly and both locale homepages are usable
