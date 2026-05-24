# Online CV Redesign Roadmap

## Goal

Turn the current bilingual Astro CV into a standout online portfolio/CV that feels editorial, premium, and craft-led rather than document-led.

The redesign should preserve the existing strengths — real project evidence, bilingual support, and the reclaimed-wood narrative — while fixing the current weaknesses:

- too much text before visual proof
- sections that feel visually repetitive
- a homepage flow that reads like a static resume
- a mobile experience that feels long and dense

## Product Direction

### Experience we want

The site should feel like an **editorial workshop portfolio**:

- immediate sense of craft and visual taste
- strong first impression above the fold
- project proof shown early, not buried
- concise CV content with clear hierarchy
- bilingual presentation that feels intentional, not duplicated

### Design principles

1. **Proof before detail** — show work early.
2. **One strong story** — position Ann as a designer-turned-maker focused on reclaimed wood, restoration, and meaningful craft.
3. **Distinct section identities** — skills, experience, training, and projects should not all look like the same content block.
4. **Premium restraint** — use motion, texture, and typography carefully; avoid clutter.
5. **Mobile-first readability** — reduce perceived page length and improve scanability.

## Current State Summary

### What is working

- Warm, material-aware palette already fits the subject.
- The bilingual content model in `src/data/site.ts` is usable.
- The project evidence section already exists and has real assets.
- The current visual direction is more refined than a generic template.

### What is not working

- The hero is text-led and does not sell Ann's work fast enough.
- Core proof of craft appears too low on the page.
- Most CV sections use similar visual treatment, so the page lacks rhythm.
- The homepage is too document-shaped, especially on mobile.
- `src/styles/global.css` is carrying the entire visual system in one file, which makes redesign slower and harder to evolve.

## Scope

### In scope

- homepage redesign for `/en` and `/zh-TW`
- stronger hero and visual hierarchy
- earlier and richer project proof
- redesigned section treatments for CV content
- improved project card presentation
- responsive polish for mobile and tablet
- subtle motion and interaction polish
- content tightening where needed for layout quality

### Out of scope for this phase

- full CMS/content collection migration
- major rewrite of project detail pages beyond presentation polish
- adding entirely new routes unless needed for recruiter/workshop variants later
- full copy rewrite for every bilingual field

## Implementation Plan

### Phase 1 — Restructure the homepage narrative

**Objective:** change the information order so the page feels like a premium online portfolio rather than a long resume.

**Files:**

- `src/pages/en/index.astro`
- `src/pages/zh-TW/index.astro`
- `src/data/site.ts`

**Changes:**

- redesign the hero into a visual introduction with:
  - stronger headline
  - tighter summary
  - portrait or workshop image integrated into the layout
  - visible call to action such as contact / view projects / download CV
- move project proof much closer to the top of the homepage
- reduce the amount of text shown in early sections
- group lower-priority content so users can scan before reading deeply

**Acceptance criteria:**

- the first viewport communicates who Ann is, what kind of work she does, and why it is distinctive
- at least one strong project or proof block appears near the top of the page
- the page reads as a story, not a form

### Phase 2 — Rebuild the visual system

**Objective:** make the site feel more distinctive, polished, and less repetitive.

**Files:**

- `src/styles/global.css`
- `src/layouts/BaseLayout.astro`

**Changes:**

- define a clearer token structure for color, typography, spacing, borders, and surfaces
- strengthen typographic contrast between:
  - display headings
  - metadata labels
  - summaries
  - long-form body text
- refine spacing rhythm between sections and inside cards
- improve the header and language switch so they feel more premium and intentional
- decide whether to keep current fonts or replace them with a more distinctive pairing

**Acceptance criteria:**

- section hierarchy is obvious at a glance
- typography has stronger contrast and better rhythm
- UI elements feel cohesive rather than individually styled

### Phase 3 — Redesign section modules

**Objective:** give each content type its own presentation logic.

**Files:**

- `src/pages/en/index.astro`
- `src/pages/zh-TW/index.astro`
- `src/styles/global.css`

**Changes:**

- convert skills from plain grouped lists into a more visual system such as chips, clusters, or capability blocks
- redesign work experience into a timeline, impact list, or compact editorial entries
- redesign certifications and training into denser cards or grouped credential modules
- tighten additional background into fewer, stronger statements

**Acceptance criteria:**

- each major section has a distinct layout identity
- repetition is reduced
- dense content remains easy to scan on mobile

### Phase 4 — Upgrade project evidence

**Objective:** make project proof the strongest part of the site.

**Files:**

- `src/components/ProjectGrid.astro`
- `src/components/ProjectCard.astro`
- `src/data/site.ts`
- optional polish in `src/pages/*/projects/[slug].astro`

**Changes:**

- make featured project presentation larger and more deliberate
- improve card hierarchy with clearer kicker, title, summary, and CTA treatment
- add stronger project metadata where available
- plan for richer project storytelling with process, material, and outcome context
- prepare for future additions such as before/after or gallery interactions

**Acceptance criteria:**

- project cards feel like portfolio pieces, not generic content cards
- the featured project draws attention immediately
- users can understand the nature of each project quickly

### Phase 5 — Mobile and interaction polish

**Objective:** improve the perceived quality of the experience without adding gimmicks.

**Files:**

- `src/styles/global.css`
- relevant page/components touched in earlier phases

**Changes:**

- reduce visual and textual density on small screens
- improve scroll rhythm and section spacing on mobile
- add subtle reveal/hover behavior with reduced-motion support
- refine tap targets, card spacing, and image cropping
- add print and recruiter-friendly considerations where useful

**Acceptance criteria:**

- mobile no longer feels like a compressed desktop resume
- motion adds polish without distraction
- the page feels lighter and easier to navigate

## Content Plan

The design will only feel top-tier if the content supports it.

### Priority content improvements

1. Replace generic experience bullets with more factual, outcome-oriented lines.
2. Confirm whether phone number should remain public.
3. Add more project images showing process, detail, and finished work.
4. Tighten long paragraphs into shorter, higher-signal copy.
5. Clarify whether the homepage should optimize first for Taiwan workshop/restoration opportunities or Canada recruiter review.

## Recommended Order of Work

1. Finalize homepage structure and section order.
2. Redesign hero and top-of-page proof blocks.
3. Rework global visual system and typography.
4. Redesign CV sections into distinct modules.
5. Upgrade project cards and featured project presentation.
6. Polish mobile behavior and interaction.
7. Run content refinement pass after layout is stable.

## Risks and Constraints

- The current bilingual structure duplicates page templates, so structural changes must stay in sync across `/en` and `/zh-TW`.
- Content quality may become the limiting factor once the design improves.
- Keeping all styles in one global stylesheet may slow future iteration unless it is refactored carefully.
- The site serves two audiences, so message clarity matters: workshop/storytelling and recruiter/scannability can pull in different directions.

## Definition of Done

The redesign is complete when:

- the homepage makes a strong impression in the first viewport
- project evidence appears early and feels central
- the page has clear visual rhythm and less repetition
- mobile feels intentional and easy to scan
- both language routes follow the same upgraded experience
- the result feels like a premium craft portfolio with CV credibility, not a dressed-up resume
