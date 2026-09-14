import Eyebrow from "../ui/Eyebrow";
import Script from "../ui/Script";
import TextLink from "../ui/TextLink";
import TintedImage from "../ui/TintedImage";

export default function Hero() {
  return (
    <section className="bg-stone">
      {/* Confirmed: 1321×672px total. Columns: 455px left | 1fr middle | 106px right.
          Gap: 11px (Squarespace fluid engine grid gap, confirmed). */}
      <div className="grid grid-cols-1 gap-[11px] lg:h-[672px] lg:grid-cols-[455px_1fr_106px]">
        {/* Left image — confirmed 455px wide. Tint: #e3d9ca12 = tan at ~7% opacity */}
        <TintedImage
          src="https://images.unsplash.com/photo-1459258350879-34886319a3c9?q=80&w=1400&auto=format&fit=crop"
          alt="Santa Monica Pier and coastline under a bright blue sky"
          tint="tan-light"
          priority
          sizes="(min-width: 1024px) 455px, 100vw"
          className="aspect-[4/5] lg:aspect-auto lg:h-[561px] lg:self-end lg:mb-[74px]"
        />

        <div className="flex flex-col px-6 py-12 lg:pb-[74px] lg:pl-[100px] lg:pr-[66.8174px] lg:pt-[41px]">
          {/* Eyebrow: 41px from container top (set by pt-[41px] above) */}
          <Eyebrow className="max-w-md">
            Online &amp; in-person therapy in Santa Monica &amp; across CA
          </Eyebrow>

          {/* H1: confirmed 221px from container top.
              mt-[153px] = 221 - 41(pt) - 27(eyebrow height) = 153px gap.
              This large gap is Squarespace fluid engine empty rows — intentional.
              mb-[30px]: confirmed margin: 0 0 30px in DevTools. */}
          <h1 className="mb-[30px] mt-12 max-w-[588px] font-serif text-h1 font-light text-slate lg:mt-[126px]">
            Find your way back to calm, clarity, and steady{" "}
            <Script>ground</Script>.
          </h1>

          {/* P: confirmed 464px from container top.
              No explicit mt here — H1's mb-[30px] already lands the P at 464px:
              41(pt) + 27(eyebrow) + 153(mt-H1) + 213.35(H1 ×3lines) + 30(mb-H1) ≈ 464. */}
          <p className="max-w-md font-sans text-body text-slate">
            Therapy for anxiety, panic, trauma, and burnout &mdash; helping
            high-achieving adults in Santa Monica feel less overwhelmed and
            more like themselves.
          </p>

          {/* TextLink: mt-auto fills all remaining space above, pushing CTA
              to the pb-[74px] pocket — lands at 598px from top (672 - 74). */}
          <TextLink href="https://www.conejovalleycounseling.com/contact" className="mt-auto w-fit">
            Schedule a Free Consultation
          </TextLink>
        </div>

        {/* Right image — confirmed 106px wide. Tint: #e3d9ca24 = tan at ~14% opacity */}
        <TintedImage
          src="https://images.unsplash.com/photo-1762740522491-2a4f7c754816?q=80&w=800&auto=format&fit=crop"
          alt="Golden hour light over a calm coastline"
          tint="tan"
          sizes="(min-width: 1024px) 106px, 100vw"
          className="hidden lg:block lg:h-[377px] lg:self-end lg:mb-[74px]"
        />
      </div>
    </section>
  );
}
