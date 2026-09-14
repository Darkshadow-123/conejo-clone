import Script from "../ui/Script";
import TintedImage from "../ui/TintedImage";

export default function Honoring() {
  return (
    /*  Confirmed outer wrapper: 1321×681px, display:flex, justify-content:center,
        padding: 88.199px 0px (top/bottom only).
        88.199 + 505 (inner grid) + 88.199 = 681.4 ≈ 681px ✓ */
    <section className="bg-oatmeal py-[88.199px]">
      {/*  Inner grid: 1321×505px.
           Squarespace fluid engine: 26 cols, 14 rows, gap:11px.
           Image spans cols 1-14 → width 705px.
           H2 spans cols 15-25 → left at 716px (705+11), right at 1254px (1321-67). */}
      <div className="mx-auto flex max-w-site">

        {/* Left image — confirmed 705×505px, fills the full inner height. */}
        <TintedImage
          src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/6f1501bf-74a5-4c57-a957-8ce4c5876848/Jennifer+A+-+Images+%285%29.jpg"
          alt="Family of four standing on a beach, holding hands, facing the ocean at sunset"
          tint="tan"
          sizes="(min-width: 1024px) 705px, 100vw"
          className="hidden h-[505px] w-[705px] shrink-0 lg:block"
        />

        {/*  H2 — confirmed 67px from right, at the BOTTOM of the inner div.
             pl-[11px]: the Squarespace 11px column gap between image and text.
             pr-[67px]: 67px right margin (confirmed).
             self-end: Squarespace places H2 in the lower rows → bottom-aligned. */}
        <h2 className="ml-4 w-full shrink-0 self-end pr-4 font-serif text-h2 font-light text-slate lg:ml-[61px] lg:w-[488px] lg:pr-0">
          Honoring where you&rsquo;ve been <Script>&amp;</Script> helping
          shape where you&rsquo;re headed.
        </h2>
      </div>
    </section>
  );
}
