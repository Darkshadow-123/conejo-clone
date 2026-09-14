// components/layout/Header.jsx
import Image from "next/image";
import Container from "../ui/Container";
import PillButton from "../ui/PillButton";
import Logo from "../ui/Logo";

const OUR_TEAM = [
  { name: "Jennifer Anderson, LMFT", href: "https://www.conejovalleycounseling.com/jennifer-anderson" },
  { name: "Candace Bletscher, AMFT", href: "https://www.conejovalleycounseling.com/candace-bletscher" },
  { name: "Heather Williams-Baumgart, AMFT", href: "https://www.conejovalleycounseling.com/heather-williams-baumgart" },
  { name: "Michaela Gorospe, AMFT", href: "https://www.conejovalleycounseling.com/michaela-gorospe" },
  { name: "Samantha Johnson, AMFT", href: "https://www.conejovalleycounseling.com/samantha-johnson" },
  { name: "Autumn Bodily, AMFT", href: "https://www.conejovalleycounseling.com/autumn-bodily" },
  { name: "Andrea Watkins, APCC", href: "https://www.conejovalleycounseling.com/andrea-watkins" },
  { name: "Rosa Gomez, AMFT", href: "https://www.conejovalleycounseling.com/rosa-gomez" },
  { name: "Chad Flores, AMFT", href: "https://www.conejovalleycounseling.com/chad-flores" },
];

const SPECIALTIES = [
  { name: "Dissociation", href: "https://www.conejovalleycounseling.com/dissociative-identity-disorder-therapist-newbury-park" },
  { name: "Trauma", href: "https://www.conejovalleycounseling.com/trauma-counseling-newbury-park" },
  { name: "Special Needs Parenting", href: "https://www.conejovalleycounseling.com/counseling-special-needs-parents-newbury-park" },
  { name: "Couples", href: "https://www.conejovalleycounseling.com/couples-therapy" },
  { name: "Children & Teens", href: "https://www.conejovalleycounseling.com/children-and-teens" },
  { name: "Anxiety & Depression", href: "https://www.conejovalleycounseling.com/anxiety-depression" },
  { name: "Adoption", href: "https://www.conejovalleycounseling.com/adoption-therapy-ventura-county-ca" },
];

const METHODS = [
  { name: "EMDR", href: "https://www.conejovalleycounseling.com/emdr-therapy-newbury-park" },
  { name: "Brainspotting", href: "https://www.conejovalleycounseling.com/brainspotting" },
  { name: "Somatic Therapy", href: "https://www.conejovalleycounseling.com/somatic-therapy" },
  { name: "Parts Work Therapy", href: "https://www.conejovalleycounseling.com/parts-work-therapy" },
];

// Simple hover dropdown - a full mega-menu grid wasn't captured in the audit
// screenshots, so this is a reasonable single-column simplification rather
// than a guessed multi-column layout.
function NavDropdown({ label, items }) {
  return (
    <div className="group relative flex h-[24px] items-center">
      {/* Reset browser-default button padding/border so this aligns on the
          same baseline as the plain <a> links (About, FAQs). Browsers add
          ~1px 6px padding and a 2px border to <button> by default; Tailwind
          preflight removes the background and appearance but not the padding,
          so it must be zeroed explicitly. */}
      <button className="border-0 bg-transparent p-0 py-[1.33964px] font-sans font-light text-navlink uppercase text-slate">{label}</button>
      <div
        className="
          invisible absolute left-1/2 top-full z-20 w-64 -translate-x-1/2
          rounded-md border border-greige bg-stone py-3 opacity-0 shadow-lg
          transition-all duration-200
          group-hover:visible group-hover:opacity-100
        "
      >
        {items.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="block px-5 py-2 font-sans text-[14px] text-slate hover:text-rust"
          >
            {item.name}
          </a>
        ))}
      </div>
    </div >
  );
}

/**
 * Confirmed dims (design-audit.md / DevTools):
 * - .header-announcement-bar-wrapper: 1321 x 112, padding 18.7089px 66.8174px
 * - .header-display-desktop (inner content row): 1187 x 75
 * - .header-title-nav-wrapper: 1044 x 75
 * - .header-nav-list: 479 x 27
 * - .header-actions--right: 144 x 47
 *
 * BUG FIXED HERE: min-h and py can't safely live on the same element under
 * Tailwind's global border-box - min-height then caps the TOTAL box
 * (padding included), not the content area on top of the padding, so the
 * padding eats into the 75px instead of adding to it. Splitting the padding
 * (outer) and the min-height (inner) onto two different elements forces
 * 18.7089 + 75 + 18.7089 = 112.42 to actually hold.
 */
export default function Header() {
  return (
    <header className="bg-stone">
      <Container className="!px-6 py-4 lg:!px-[66.8174px] lg:py-[18.7089px]">

        <div className="flex min-h-[75px] items-center justify-between">

          {/* .header-title-nav-wrapper — confirmed: display:flex, flex-basis:67%,
              align-items:center. justify-between pushes logo left and nav right
              within the 67% container. */}
          <div className="flex flex-1 min-w-0 items-center justify-between">
            <a href="/" className="shrink-0 transition-opacity hover:opacity-90">
              <Logo align="left" />
            </a>

            {/* .header-nav-list — confirmed: display:inline-flex, flex-wrap:wrap,
                justify-content:flex-end, text-align:right. inline-flex + justify-end
                pushes all links flush to the right edge of the 67% container. */}
            <nav className="hidden items-center justify-end gap-8 lg:flex">
              <a href="#about" className="flex h-[27px] items-center py-[1.33964px] font-sans font-light text-navlink uppercase text-slate">About</a>
              <NavDropdown label="Specialties" items={SPECIALTIES} />
              <NavDropdown label="Methods" items={METHODS} />
              <a href="#office" className="flex h-[27px] items-center py-[1.33964px] font-sans font-light text-navlink uppercase text-slate">Our Office</a>
              <a href="#faqs" className="flex h-[27px] items-center py-[1.33964px] font-sans font-light text-navlink uppercase text-slate">FAQs</a>
              <a href="#contact" className="flex h-[27px] items-center py-[1.33964px] font-sans font-light text-navlink uppercase text-slate">Contact</a>
            </nav>
          </div>

          {/* .header-actions--right — confirmed: 144×47px, flex, justify-content:flex-end */}
          <div className="hidden w-[144px] items-center justify-end lg:flex">
            <PillButton href="#contact">
              Contact
            </PillButton>
          </div>

          {/* Mobile menu trigger - see design-audit.md Section 8; full
              accordion mega-menu behavior wasn't inspected, so this is a
              minimal placeholder toggle rather than an assumed animation. */}
          <button className="ml-4 shrink-0 lg:hidden" aria-label="Open menu">
            <span className="block h-px w-6 bg-ink" />
            <span className="mt-1.5 block h-px w-6 bg-ink" />
            <span className="mt-1.5 block h-px w-6 bg-ink" />
          </button>
        </div>
      </Container>
    </header>
  );
}