import Eyebrow from "../ui/Eyebrow";
import TintedImage from "../ui/TintedImage";

export default function Empathy() {
  return (
    /*  Confirmed: outer section 1321×861px, display:flex, justify-content:center,
        padding: 93.5443px 0px (top/bottom only).
        We replicate the centering with mx-auto max-w-site on the inner flex row. */
    <section className="bg-cream py-section-md lg:min-h-[861px]">
      <div className="mx-auto grid w-full max-w-site grid-cols-1 items-start lg:grid-cols-[1fr_399px]">

        {/* Text column — confirmed 117px from section left.
            pl-[117px] creates the 117px offset;
            pr-[67px] preserves the site's standard right gutter before the image. */}
        <div className="flex flex-col gap-[57px] pl-6 pr-6 pt-0 lg:pl-[117px] lg:pr-[67px] lg:pt-[120px]">
          <h2 className="max-w-[634px] font-serif text-h2 font-light text-ink">
            You&rsquo;re holding onto hope that life can be better than it is
            right now.
          </h2>

          {/* Confirmed: eyebrow + first paragraph stack in the LEFT column;
              second paragraph stands alone in the RIGHT column. */}
          <div className="grid max-w-[684px] grid-cols-1 gap-5 md:grid-cols-2">
            <div className="flex flex-col gap-5">

              <Eyebrow className="pr-[33px]">
                At Conejo Valley Family Counseling we want to make that hope
                a reality.
              </Eyebrow>
              <p className="font-sans text-body text-ink">
                Whether you&apos;re an adult seeking personal growth,
                looking to work through your trauma, a couple working on
                your relationship, or a parent looking for support for your
                child, we provide a compassionate and safe space to help
                you navigate all of life&rsquo;s ups and downs.
              </p>
            </div>
            <p className="font-sans text-body text-ink">
              First and foremost, we believe what you&rsquo;re going through
              is real, valid, and worthy of support. Our team offers clients
              in the Newbury Park area and across CA an environment to
              discover a new life and a deeper sense of self in the midst of
              their struggles. As we tap into the power of connection and
              understanding, you can find your footing again and take a
              transformative path forward.
            </p>
          </div>
        </div>

        {/* Right image — confirmed 399×637px.
            Top offset: section py-section-md ≈ 96px from section top ✓
            Bottom offset: 861 - 96 - 637 = 128px from section bottom ✓ */}
        <TintedImage
          src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/7a40691c-70a5-4307-b9ae-974592087a8f/Jennifer+A+-+Images+%283%29.jpg"
          alt="Sandy beach with gentle ocean waves and a cloudy sky"
          tint="tan"
          sizes="(min-width: 1024px) 399px, 100vw"
          className="hidden lg:block lg:h-[637px] lg:w-full"
        />
      </div>
    </section>
  );
}
