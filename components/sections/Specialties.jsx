import Script from "../ui/Script";
import TextLink from "../ui/TextLink";

const SPECIALTIES = [
  {
    heading: "Anxiety & Panic Therapy",
    body: "Constant worry, racing thoughts, and panic can leave you feeling like you\u2019re always bracing for something to go wrong. In our Santa Monica therapy sessions, we work together to calm your nervous system, process root triggers, and restore lasting inner peace.",
    href: "#contact",
  },
  {
    heading: "Trauma Therapy & EMDR",
    body: "As an experienced trauma therapist in Santa Monica, I utilize Eye Movement Desensitization and Reprocessing (EMDR) to help you process single-incident and complex trauma, reworking painful memories with safety and stabilization as the foundation.",
    href: "#contact",
  },
  {
    heading: "Burnout & High-Achiever Stress",
    body: "Designed for Santa Monica entrepreneurs, executives, and creative professionals experiencing burnout. Therapy provides a dedicated space to release internal pressure, reconnect with purpose, and build sustainable ways of living and working.",
    href: "#contact",
  },
];

export default function Specialties() {
  return (
    /*  Confirmed: 1321×966px, bg-stone.
        Desktop uses absolute positioning so H3 (92px from top) and cards (111px from
        top) can have different top offsets independently — impossible with normal flow. */
    <section id="specialties" className="relative h-auto bg-stone lg:h-[966px]">

      {/* ── H3 ─────────────────────────────────────────────────────────────────────
          Mobile: normal flow with py padding.
          Desktop: absolute, confirmed 117px from left, 92px from top, 339px wide. */}
      <h3 className="px-6 pt-[88px] font-serif text-h3 font-light text-slate
                     lg:absolute lg:left-[117px] lg:top-[92px] lg:w-[339px]
                     lg:px-0 lg:pt-0">
        Our <Script>specialties</Script> include&hellip;
      </h3>

      {/* ── 2×2 Specialty cards ──────────────────────────────────────────────────
          Mobile: normal flow (stacked below H3), 2 columns on sm+.
          Desktop: absolute, confirmed 111px from top, 517px from left
            (= 117 H3-left + 339 H3-width + 61 gap).
          Each card cell: 339px wide.
          Column gap: 61px (confirmed).
          Row gap: 113px (confirmed). */}
      <div className="grid grid-cols-1 gap-x-[61px] gap-y-12 px-6 pb-[88px] pt-8
                      sm:grid-cols-2
                      lg:absolute lg:left-[517px] lg:top-[111px]
                      lg:grid-cols-[339px_339px] lg:gap-y-[113px] lg:p-0">
        {SPECIALTIES.map((item) => (
          <div key={item.heading} className="flex flex-col">
            {/* Confirmed: outer div containing h4+p is 339×275px.
                Width is set by the parent grid cell (339px).
                Height (275px) is now explicitly set so shorter text (like Special Needs)
                doesn't break the uniform dimensions of the grid. */}
            <div className="lg:h-[275px]">
              <h4 className="font-serif text-h4 font-light text-slate">
                {item.heading}
              </h4>
              <p className="mt-[30px] font-sans text-body text-slate lg:h-[180px]">
                {item.body}
              </p>
            </div>
            {/* Confirmed: 11px gap between "Learn more" and the h4+p div above.
                display:flex justify-content:flex-start on the learn-more container. */}
            <div className="mt-[11px] flex justify-start">
              <TextLink href={item.href} className="w-fit">
                Learn more
              </TextLink>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
