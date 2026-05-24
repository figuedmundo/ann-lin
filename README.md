# Ann / 林庭安 Online CV & Woodwork Portfolio

A bilingual Astro portfolio/CV for Ann / 林庭安, focused on interior design, hands-on woodworking, reclaimed material, and project storytelling for Taiwan and Canada audiences.

## Stack

- **Framework:** Astro static site
- **Package manager:** pnpm only
- **Languages/routes:** `/zh-TW` and `/en`
- **Content source:** typed project/profile data in `src/data/site.ts`
- **Assets:** public images in `public/assets/pictures/`, workshop PDF in `public/downloads/`

## Requirements

Install pnpm if you do not already have it:

```bash
corepack enable
corepack prepare pnpm@10.12.1 --activate
```

## Development

Install dependencies:

```bash
pnpm install
```

Start the local dev server:

```bash
pnpm dev
```

Open:

- `http://localhost:4321/`
- `http://localhost:4321/zh-TW`
- `http://localhost:4321/en`

## Build & Preview

Create a production build:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```

## Project Structure

```text
docs/roadmap.md              Roadmap and implementation milestones
src/data/site.ts             Bilingual profile, UI strings, and project data
src/layouts/BaseLayout.astro Shared document shell and language switch
src/components/              Project cards and grid
src/pages/zh-TW/             Mandarin pages
src/pages/en/                English pages
src/styles/global.css        Global visual system
public/assets/pictures/      Portfolio images
public/downloads/            Public PDF downloads
```

## Current Routes

- `/` redirects to `/zh-TW`
- `/zh-TW`
- `/en`
- `/zh-TW/projects/table-frame`
- `/zh-TW/projects/small-objects`
- `/zh-TW/projects/reuse-games`
- `/en/projects/table-frame`
- `/en/projects/small-objects`
- `/en/projects/reuse-games`

## Roadmap

See `docs/roadmap.md` for the full implementation roadmap and next milestones.

## Notes

- Do not use `npm install` or commit `package-lock.json`; this project uses `pnpm-lock.yaml`.
- The legacy `index.html` and `style.css` remain in the repository as reference while the Astro implementation lives in `src/`.
