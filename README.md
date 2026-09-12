# Conejo Valley Family Counseling — Homepage Clone (Part 1)

A pixel-faithful clone of https://www.conejovalleycounseling.com/home, built
with Next.js 14 (App Router) + Tailwind CSS, using real copy and real image
URLs pulled directly from the live site.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build && npm run start   # production build
```

## What this is built from

Every color, font-size, line-height, letter-spacing, section padding, and
container width in this codebase comes from a DevTools computed-style
inspection of the live site (not eyeballed from screenshots), cross-checked
against the site's own CSS custom properties. Search the code for comments
starting with "Confirmed:" to see exactly which spec each value maps to.
Real image URLs and full copy text were pulled directly from a live fetch
of https://www.conejovalleycounseling.com/home — nothing is placeholder.

## Project structure

```
app/
  layout.js       - fonts + global metadata
  page.js         - assembles all sections in the confirmed page order
  globals.css     - Tailwind directives + reduced-motion handling
components/
  ui/             - reusable primitives (Container, PillButton, TextLink,
                    Eyebrow, Script, TintedImage)
  layout/         - Header (nav + dropdowns), Footer
  sections/       - one file per homepage section, in page order
tailwind.config.js - every confirmed design token (colors, type scale,
                      container width) lives here, not scattered inline
```

## Known limitations — read before your Loom video

Three things in here are *not* 1:1 with the original, and it's worth
mentioning why in your client demo rather than letting a reviewer find them
first:

1. **Fonts are substitutes, not the originals.** The live site uses
   `beaufort-pro`, `Muli`, and `PrintedMoments` — the first and third are
   licensed commercial fonts with no legal way to bundle them into this
   codebase. `Mulish` (Muli's own free open-source successor) is a
   near-exact stand-in. `Cormorant Garamond` and `Sacramento` are the
   closest free visual matches for the serif and script, not identical
   letterforms. If you have a license for the real fonts, drop the font
   files in and swap the `next/font` calls in `app/layout.js`.

2. **The footer's rust/terracotta link color (`rust` in
   `tailwind.config.js`) is an approximation**, not a DevTools-confirmed
   hex — it's the one value in the whole system that was read off a
   screenshot rather than inspected. Grab the exact value from a footer
   link's computed `color` and swap it in.

3. **Mobile nav is a placeholder toggle**, not a working accordion menu.
   The confirmed audit never inspected the live site's actual mobile
   breakpoint behavior, so rather than guess at an animation, `Header.jsx`
   ships a hamburger icon with no wired-up open state. Wire this up once
   you've resized the real site and seen what it actually does — this is
   the biggest real gap between this clone and the original.

Everything else — colors, type scale, spacing, button hover states, the
tinted-photo-overlay technique, section order — is built directly from
confirmed measurements, not assumptions.

## Deploying

Push to GitHub, then import into Vercel — zero config needed, `next.config.js`
already allows the Squarespace CDN domain for `next/image`.

## A note on `npm audit`

`npm install` will report vulnerabilities against `next`. These GHSA
advisories cover an extremely broad version range (many only apply to
self-hosted server configurations — SSRF/DoS in Server Actions, custom
servers, etc.) and the only "fix" `npm audit fix --force` offers is jumping
to Next 16, which is still in preview. `14.2.35` is the latest patched
release on the stable 14.x line, and Vercel's platform mitigates several of
the flagged server-side vectors by default. Worth revisiting before any real
production use, not urgent for this assignment.
