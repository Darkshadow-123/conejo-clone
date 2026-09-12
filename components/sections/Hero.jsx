import Eyebrow from "../ui/Eyebrow";
import Script from "../ui/Script";
import TextLink from "../ui/TextLink";
import TintedImage from "../ui/TintedImage";

export default function Hero() {
  return (
    <section className="bg-cream">
      {/* Confirmed: 1321×672px total. Columns: 455px left | 1fr middle | 106px right.
          Gap: 11px (Squarespace fluid engine grid gap, confirmed). */}
      <div className="grid grid-cols-1 gap-[11px] lg:h-[672px] lg:grid-cols-[455px_1fr_106px]">
        {/* Left image — confirmed 455px wide. Tint: #e3d9ca12 = tan at ~7% opacity */}
        <TintedImage
          src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/80513bd1-30ee-4a2d-aaf6-782d9be095ce/Jennifer+A+-+Images+%2866%29.jpg"
          alt="Family walking together on the beach"
          tint="tan-light"
          priority
          sizes="(min-width: 1024px) 455px, 100vw"
          className="aspect-[4/5] lg:aspect-auto lg:h-[561px] lg:self-end lg:mb-[74px]"
        />

        <div className="flex flex-col pl-[100px] pr-[66.8174px] pt-[41px] pb-[74px]">
          {/* Eyebrow: 41px from container top (set by pt-[41px] above) */}
          <Eyebrow className="max-w-md">
            Online &amp; in-person counseling in Newbury Park &amp; across CA
          </Eyebrow>

          {/* H1: confirmed 221px from container top.
              mt-[153px] = 221 - 41(pt) - 27(eyebrow height) = 153px gap.
              This large gap is Squarespace fluid engine empty rows — intentional.
              mb-[30px]: confirmed margin: 0 0 30px in DevTools. */}
          <h1 className="mt-[126px] mb-[30px] max-w-[588px] font-serif text-h1 font-light text-ink">
            Rebuild your foundation on solid ground and finally begin to{" "}
            <Script>thrive</Script>.
          </h1>

          {/* P: confirmed 464px from container top.
              No explicit mt here — H1's mb-[30px] already lands the P at 464px:
              41(pt) + 27(eyebrow) + 153(mt-H1) + 213.35(H1 ×3lines) + 30(mb-H1) ≈ 464. */}
          <p className="max-w-md font-sans text-body text-ink">
            Specialized therapy for adults, couples, teens, and children to
            reflect, heal, and grow.
          </p>

          {/* TextLink: mt-auto fills all remaining space above, pushing CTA
              to the pb-[74px] pocket — lands at 598px from top (672 - 74). */}
          <TextLink href="https://www.conejovalleycounseling.com/contact" className="mt-auto w-fit">
            Book an Appointment
          </TextLink>
        </div>

        {/* Right image — confirmed 106px wide. Tint: #e3d9ca24 = tan at ~14% opacity */}
        <TintedImage
          src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/3643a7ac-ff62-4927-b96e-9e65ecff0521/Jennifer+A+-+Images+%2867%29.jpg"
          alt="Ocean waves on the shore"
          tint="tan"
          sizes="(min-width: 1024px) 106px, 100vw"
          className="hidden lg:block lg:h-[377px] lg:self-end lg:mb-[74px]"
        />
      </div>
    </section>
  );
}
