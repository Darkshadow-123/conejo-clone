import Script from "../ui/Script";
import TextLink from "../ui/TextLink";

const SPECIALTIES = [
  {
    heading: "Trauma",
    body: "We don\u2019t always know when and how we\u2019ve experienced trauma. In therapy, we\u2019ll work together to help you process your past, understand what\u2019s causing you to stay \u201cstuck,\u201d and regain a sense of safety, control, and hope. You don\u2019t have to carry your burdens alone.",
    href: "https://www.conejovalleycounseling.com/trauma-counseling-newbury-park",
  },
  {
    heading: "EMDR",
    body: "Eye Movement Desensitization and Reprocessing (EMDR) is a powerful therapeutic technique that helps process and heal trauma by reworking how painful memories are stored in your brain. This allows you to find relief and move toward lasting healing.",
    href: "https://www.conejovalleycounseling.com/emdr-therapy-newbury-park",
  },
  {
    heading: "Dissociation",
    body: "The feeling of losing time, hearing conflicting voices, or questioning your sense of self can be overwhelming. In therapy, we\u2019ll help you understand these experiences, recognize your own triggers, and create a sense of balance and identity so that you can feel more grounded.",
    href: "https://www.conejovalleycounseling.com/dissociative-identity-disorder-therapist-newbury-park",
  },
  {
    heading: "Special Needs Parenting",
    body: "Parenting a child with special needs presents unique challenges and complex emotions. We provide compassionate support through lived experience and expertise to help you navigate this journey with tools, understanding, and self-care.",
    href: "https://www.conejovalleycounseling.com/counseling-special-needs-parents-newbury-park",
  },
];

export default function Specialties() {
  return (
    /*  Confirmed: 1321×966px, bg-white.
        Desktop uses absolute positioning so H3 (92px from top) and cards (111px from
        top) can have different top offsets independently — impossible with normal flow. */
    <section className="relative bg-white lg:h-[966px]">

      {/* ── H3 ─────────────────────────────────────────────────────────────────────
          Mobile: normal flow with py padding.
          Desktop: absolute, confirmed 117px from left, 92px from top, 339px wide. */}
      <h3 className="px-6 pt-[88px] font-serif text-h3 font-light text-ink
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
      <div className="grid grid-cols-1 gap-x-[61px] gap-y-[113px] px-6 pb-[88px] pt-8
                      sm:grid-cols-2
                      lg:absolute lg:left-[517px] lg:top-[111px]
                      lg:grid-cols-[339px_339px] lg:p-0">
        {SPECIALTIES.map((item) => (
          <div key={item.heading} className="flex flex-col">
            {/* Confirmed: outer div containing h4+p is 339×275px.
                Width is set by the parent grid cell (339px).
                Height (275px) is naturally driven by the content at this width. */}
            <div>
              <h4 className="font-serif text-h4 font-light text-ink">
                {item.heading}
              </h4>
              {/* Confirmed: p has margin: 15px 0 0 */}
              <p className="mt-[30px] font-sans text-body text-ink">{item.body}</p>
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
