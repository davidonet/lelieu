# LE LIEU — static site

Marketing site for **LE LIEU — Lieu Imaginaire Expérimental Utopique**, a
collaborative creative space hosting a micro-gallery, an art workshop, a fablab,
and a future sound studio.

The site is fully static and prerendered — no backend, no database, no API
routes, no analytics. Drop the `build/` folder onto any static host
(Netlify, Cloudflare Pages, GitHub Pages, S3, plain nginx).

## Stack

- **SvelteKit** with **Svelte 5** runes (`$state`, `$derived`, `$props`, `{@render}` snippets)
- **`@sveltejs/adapter-static`** — full prerender, `entries: ['*']`
- **Tailwind CSS v4** (via `@tailwindcss/vite`) — theme tokens drive the
  neo-brutalist palette (`--color-brut-*`)
- **mdsvex** — editorial copy lives in markdown under `src/content/`
- **TypeScript** throughout

UI primitives are hand-rolled Svelte components (`src/lib/components/Brut*.svelte`)
themed to the neo-brutalist system. `bits-ui` is installed as a primitive base
should more complex primitives (dialog, popover, etc.) be needed later.

## Develop

```bash
npm install
npm run dev
```

## Build (static export)

```bash
npm run build
```

Outputs a fully prerendered static site to `build/`. Preview with
`npm run preview`.

## Project layout

```
src/
├── app.css              # Tailwind + theme tokens + brut utilities
├── app.html             # HTML shell, lang="fr"
├── content/             # Editorial copy in markdown — edit freely
│   ├── home.md
│   ├── galerie.md
│   ├── atelier.md
│   ├── fablab.md
│   └── studio.md
├── lib/
│   ├── components/
│   │   ├── BrutHeader.svelte
│   │   ├── BrutFooter.svelte
│   │   ├── BrutButton.svelte
│   │   ├── BrutCard.svelte
│   │   ├── BrutBadge.svelte
│   │   ├── SpacePanel.svelte
│   │   ├── SpaceHero.svelte
│   │   └── PlaceholderImage.svelte
│   └── utils.ts         # cn() helper, color maps, space registry
└── routes/
    ├── +layout.ts       # prerender = true
    ├── +layout.svelte
    ├── +page.svelte     # Home
    ├── galerie/+page.svelte
    ├── atelier/+page.svelte
    ├── fablab/+page.svelte
    └── studio/+page.svelte
```

## Editing content

All user-facing copy is in **French** and lives under `src/content/` as
markdown files with YAML frontmatter. Editing copy does **not** require
touching Svelte components.

Each space file looks like:

```md
---
title: La micro-galerie
slug: galerie
color: yellow          # one of: yellow, orange, red, blue, teal, petrol
eyebrow: Espace 01 — Exposer
intro: ...
features:
  - Mur d'accrochage et cimaises mobiles
  - ...
---

## Markdown body goes here
```

The route page imports both the rendered component and its frontmatter:

```svelte
<script lang="ts">
  import Body, { metadata } from '$content/galerie.md';
</script>

<Body />
```

## Adding a new space

1. Create `src/content/<slug>.md` with frontmatter (title, slug, color, eyebrow, intro, features).
2. Create `src/routes/<slug>/+page.svelte` (copy one of the existing space pages and swap the import).
3. Add an entry to the `spaces` array in `src/lib/utils.ts` so it appears on the home page and in the header nav.

## Design system

Defined in `src/app.css` via Tailwind v4's `@theme` block:

- **Palette:** `--color-brut-yellow / orange / red / blue / teal / petrol / ink / paper`
- **Shadows (hard, zero-blur):** `--shadow-brut`, `--shadow-brut-sm`, `--shadow-brut-press`
- **Fonts (self-hosted via `@fontsource`):** Archivo Black (display), Space Grotesk (sans), Space Mono (accents)
- **Radius:** `0` everywhere — square corners only
- **Borders:** `3px solid var(--color-brut-ink)` via `.brut-border`
- **Hover "press":** `.brut-press` translates `2px 2px` and shrinks the shadow

One signature color per space:

| Space                  | Color           |
| ---------------------- | --------------- |
| micro-galerie          | `--brut-yellow` |
| atelier d'art          | `--brut-orange` |
| fablab                 | `--brut-red`    |
| studio son (à venir)   | `--brut-blue`   |

Navigation and footer use `--brut-teal` / `--brut-petrol`.
