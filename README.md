# Dr. Maya Reynolds, PsyD — Therapy Website
### Grow My Therapy Internship Assignment — Stage 2

> A full clone + redesign of [conejovalleycounseling.com/home](https://www.conejovalleycounseling.com/home), reimagined for **Dr. Maya Reynolds, PsyD** — a licensed therapist based in Santa Monica, CA.

**Live Site:** [conejo-clone.vercel.app](https://conejo-clone.vercel.app)  
**GitHub:** [github.com/Darkshadow-123/conejo-clone](https://github.com/Darkshadow-123/conejo-clone)

---

## 🚀 Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build && npm run start   # production build
```

---

## 📋 Assignment Checklist

### Part 1: Clone the Homepage ✅

- [x] Clone looks exactly like the original homepage in layout and structure
- [x] Fully responsive across desktop, tablet, and mobile views
- [x] Follows the same fonts, typography, and styling as the original
- [x] Reusable design tokens used throughout (`tailwind.config.js` — colors, type scale, spacing)
- [x] Consistent spacing, padding, and margins throughout

### Part 2: Redesign Using Dr. Maya Reynolds' Profile ✅

**Theme & Colors:**
- [x] Existing theme replaced with a new cohesive warm-neutral palette
- [x] New color palette selected: `stone` (bg), `oatmeal` (panels), `greige` (sections), `rust` (accent), `slate` (text)
- [x] All elements — images, backgrounds, text, buttons — updated consistently
- [x] Theme maintains readability and visual balance throughout

**Copywriting:**
- [x] All copy derived strictly from Dr. Maya Reynolds' profile
- [x] H1 and headings include SEO keywords (e.g., *Santa Monica therapist*, *anxiety therapy*, *trauma therapy*)
- [x] Services section features three services from the profile: *Anxiety & Panic Therapy*, *Trauma Therapy & EMDR*, *Burnout & High-Achiever Stress*
- [x] About, FAQs, and all other sections tailored to Dr. Reynolds' details
- [x] Copy is SEO-optimized: natural keyword usage, location mentions (Santa Monica, West LA, California), and best practices applied

**Images:**
- [x] All images replaced with new ones matching the warm neutral color palette
- [x] Images are relevant to services and content (professionals, trauma survivors, calm office environments)
- [x] Images feel intentional and support each section's message
- [x] Dr. Maya Reynolds' profile photo and bio integrated into the About section

### Part 3: "Our Office" Custom Section ✅

- [x] "Our Office" section added — does not exist in the original template
- [x] Includes a clear heading (*A calm space to land.*) and thoughtfully written supporting copy
- [x] Uses relevant office imagery (local photos from `/public/images/`)
- [x] Copy aligns with Dr. Maya Reynolds' profile (Santa Monica location, in-person & telehealth)
- [x] Section integrates seamlessly with the site's theme, design, spacing, and typography

### Part 4: Video Walkthrough

- [ ] 5-minute Loom video (desktop + mobile walkthrough, client-facing explanation)

---

## 🎨 Design Choices

### Theme: Warm California Calm

The design was built around a **warm neutral palette** inspired by Santa Monica's natural landscape — sand, stone, and coastal light. This was a deliberate departure from the original Conejo Valley site's cooler tones.

| Token | Hex | Usage |
|---|---|---|
| `stone` | `#FCFAF8` | Primary background |
| `oatmeal` | `#F8F6F1` | Section panels, cards |
| `greige` | `#E4E3E1` | Alternating section backgrounds |
| `rust` | `#8C552B` | Accent color — buttons, eyebrows, scripts |
| `slate` | `#332F2C` | All body text and headings |

### Typography

| Role | Font | Notes |
|---|---|---|
| Heading (serif) | Cormorant Garamond | Substitute for `beaufort-pro` (licensed) |
| Body (sans) | Mulish | Free successor to `Muli` (licensed) |
| Script accent | Sacramento | Substitute for `PrintedMoments` (licensed) |

> **Note:** The live Conejo Valley site uses `beaufort-pro`, `Muli`, and `PrintedMoments` — all licensed commercial fonts. Cormorant Garamond, Mulish, and Sacramento are the closest open-source visual matches. Swap in the originals via `app/layout.js` if you have the licenses.

### Our Office Section — Design Decision

The **"Our Office"** section uses an **asymmetric editorial layout** rather than the standard two-image grid:

- A **large featured image** anchors the left side (~60% width) with a tall portrait aspect ratio
- An **overlapping content card** (oatmeal background, no shadow) sits on the right, pulling ~6rem inward to create visual depth
- A **secondary square image** sits absolutely-positioned at the bottom-right, framed with a `border-stone` inset — creating a layered, gallery-like effect on desktop
- On mobile, all elements stack naturally into a clean single-column flow

This layout was chosen to **make the physical space feel premium and inviting** — matching the warmth a client would feel walking into a real therapy office.

---

## 🏗️ Project Structure

```
app/
  layout.js        — Google fonts + SEO meta + JSON-LD structured data
  page.js          — Section assembly in narrative page order
  globals.css      — Tailwind directives + reduced-motion support

components/
  ui/              — Primitives: Container, PillButton, TextLink,
                     Eyebrow, Script, TintedImage, Logo
  layout/          — Header (responsive nav + dropdowns), Footer
  sections/        — One file per section, in page order:
                     Hero, Empathy, About, WhoWeHelp, PhotoStatement,
                     AreasOfExpertise, HowWeWork, OurOffice, Honoring,
                     Specialties, FAQs, ScheduleAppointment

public/images/     — Local image assets (sanitized filenames, Linux-safe)

tailwind.config.js — All design tokens: colors, type scale, spacing, container
```

### Page Section Order (Narrative Flow)

| # | Section | Purpose |
|---|---|---|
| 1 | Hero | Core value proposition + CTA |
| 2 | Empathy | Emotional validation ("you're not alone") |
| 3 | About | Trust signal — who is Dr. Reynolds? |
| 4 | WhoWeHelp | Audience identification |
| 5 | PhotoStatement | Emotional pause / brand voice |
| 6 | AreasOfExpertise | Service discovery |
| 7 | HowWeWork | Process transparency |
| 8 | OurOffice ⭐ | Custom section — office environment |
| 9 | Honoring | Brand philosophy |
| 10 | Specialties | Detailed specialty cards |
| 11 | FAQs | Objection handling (animated accordion) |
| 12 | ScheduleAppointment | Final conversion CTA |

---

## 🔍 SEO

- Localized title tag and meta description (Santa Monica, CA)
- JSON-LD `LocalBusiness` + `Person` structured data
- Semantic HTML (`<h1>` per page, `<section>`, `<address>`, `<article>`)
- Keywords integrated naturally: *Santa Monica therapist*, *anxiety therapy Santa Monica*, *trauma therapist West LA*, *telehealth therapy California*

---

## ⚠️ Known Limitations

1. **Fonts are substitutes** — licensed originals (`beaufort-pro`, `PrintedMoments`) cannot be bundled. Swap via `app/layout.js` if you have licenses.

---

## 🚢 Deploying

Push to GitHub → import into Vercel. Zero config needed — `next.config.js` already allowlists the Squarespace CDN and Unsplash domains for `next/image`. Local images are served from `/public/images/` and resolve automatically on Vercel.

---

*Built with Next.js 14 (App Router) + Tailwind CSS.*  
*Submitted for the Grow My Therapy Front-End Developer Internship — Stage 2.*
