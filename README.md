# Portfolio — Mahansh Aditya

Personal portfolio site: a single-page, section-scrolled résumé of work, experience,
and stack. Built with Next.js (App Router), React 19, TypeScript, and Tailwind CSS v4.

Live sections: Hero → About → Experience → Selected Work → Stack → Projects → Contact.

## Requirements

- Node.js `>= 20.9.0`
- pnpm `10.30.3` (pinned via `packageManager`)

## Getting started

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the dev server |
| `pnpm build` | Production build |
| `pnpm start` | Serve the production build |
| `node scripts/build-skill-icons.mjs` | Regenerate the skill icons in `public/icons/skills/` |

## Project structure

```
app/
  layout.tsx              Root layout — fonts, metadata, header/footer, hover sound
  page.tsx                Composes the page sections in order
  globals.css             Design tokens, theme palettes, Tailwind entry
  _components/
    site-header/          Wordmark, desktop nav, mobile menu, scroll progress bar
    hero/                 Headline + "now" cards
    about.tsx
    experience/           Role tabs, tab labels, role panels
    selected-work/        Work articles with interactive demos (latency bar, token grid)
    stack/                Draggable SVG graph of stack groups
    projects.tsx
    contact.tsx
    footer.tsx
    reveal.tsx            Scroll-triggered reveal wrapper
    underline-reveal.tsx  Underline-on-hover text
    hover-sound.tsx       WebAudio hover/click blips
    section-heading.tsx
lib/content.ts            All site copy and data, typed
hooks/                    Shared hooks
public/                   Icons, résumé PDF
scripts/                  One-off build scripts
```

## Content

All copy and data live in `lib/content.ts` as typed, exported constants —
`SITE`, `NAV`, `HERO`, `ABOUT`, `ROLES`, `SELECTED_WORK`, `STACK_GROUPS`,
`PROJECTS`, `CONTACT`, `FOOTER`. Components read from it and render; editing the
site's text means editing that one file, not the components.

## Styling

Tailwind CSS v4, configured entirely in CSS (`app/globals.css`) — there is no
`tailwind.config.js`. The file defines a sand/ink token palette plus semantic
aliases (`--page`, `--surface`, `--heading`, `--edge`, …).

Theming is **scoped, not global**: `data-theme="light"` sits on `<html>`, and
individual sections opt into the dark palette by setting `data-theme="dark"` on
their own container. A custom Tailwind variant maps `dark:` onto that attribute:

```css
@custom-variant dark (&:where([data-theme="dark"], [data-theme="dark"] *));
```

Fonts are loaded via `next/font/google` and exposed as CSS variables: Sora
(`--font-sora`, UI), Instrument Serif (`--font-instrument`, display), and
Space Mono (`--font-space-mono`, labels and numerics).

## Skill icons

`scripts/build-skill-icons.mjs` writes the Simple Icons used in the Stack section
into `public/icons/skills/` as bare SVG paths. `simple-icons` is a devDependency
and is never imported by app code, so the icons ship as static files and cost zero
client JavaScript. The generated SVGs are committed; rerun the script only when
adding or removing a skill.

## Notes

- Motion respects `prefers-reduced-motion`; reveal animations are skipped when set.
- `AGENTS.md` / `CLAUDE.md` carry instructions for AI coding agents working in
  this repo — this Next.js version differs from older releases, so consult
  `node_modules/next/dist/docs/` before changing framework-level code.
