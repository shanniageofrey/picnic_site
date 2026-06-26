# The Laviera Picnics

A Next.js (App Router) site for a luxury picnic styling business.

## Stack
- **Next.js 16** (App Router, TypeScript, Tailwind CSS v4)
- **Framer Motion** — scroll-triggered animations
- **React Icons** — Instagram, mail, phone, star icons
- **EmailJS** — booking form submissions with no backend

## Brand system
Defined in `src/app/globals.css` as CSS variables, exposed as Tailwind utilities via `@theme inline`:

| Token | Hex | Use |
|---|---|---|
| `bg-ink` / `text-ink` | `#0d0d0d` | Primary background (near-black) |
| `bg-ink-soft` | `#161413` | Secondary dark surface |
| `bg-rose` / `text-rose` | `#c36278` | Primary accent |
| `bg-rose-deep` | `#9c4659` | Darker accent, CTA backgrounds |
| `bg-rose-light` | `#e3a4b3` | Lighter accent, hover states |
| `bg-cream` / `text-cream` | `#f5f1ec` | Light section background / text on dark |
| `text-cream-dim` | `#cdc6bc` | Muted body text on dark backgrounds |

**Fonts**: `Fraunces` (display/headlines, italic accents) + `Work Sans` (body), loaded via `next/font/google` — both self-hosted at build time, no external request at runtime.

## Project structure
```
src/
  app/
    layout.tsx       — root layout, fonts, Navbar + Footer wrapper
    page.tsx           — Home page (this session's work)
    globals.css        — brand tokens + Tailwind theme
  components/
    Navbar.tsx          — sticky nav, mobile menu, Instagram icon
    Footer.tsx          — sitemap, contact, Instagram link
public/
  images/               — placeholder hero + Instagram grid images (REPLACE THESE)
```

## What's built
- **Home page** (`src/app/page.tsx`): hero, intro statement, services preview (3 packages),
  Instagram teaser grid, testimonials, final CTA.
- **Navbar**: sticky, transparent-to-solid on scroll, mobile hamburger menu.
- **Footer**: sitemap + contact + Instagram handle.

## Next steps (not yet built)
1. **Replace placeholder images** in `public/images/` with real photography
   (`hero-picnic.jpg`, `insta-1.jpg` through `insta-4.jpg`).
2. **About page** (`src/app/about/page.tsx`) — story, founder, mission.
3. **Services page** (`src/app/services/page.tsx`) — full pricing breakdown per package.
4. **Gallery page** (`src/app/gallery/page.tsx`) — live Instagram Basic Display API feed.
5. **Book page** (`src/app/book/page.tsx`) — booking form wired to EmailJS.
6. Swap the static Instagram grid on the Home page for the live API feed once built.

## Running locally
```bash
npm install
npm run dev
```
Visit `http://localhost:3000`.

## Deploying
Push to GitHub, then connect the repo on [Vercel](https://vercel.com) or
[Netlify](https://netlify.com) — both auto-detect Next.js and deploy on every push.
