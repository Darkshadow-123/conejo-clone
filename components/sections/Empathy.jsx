import Eyebrow from "../ui/Eyebrow";
import TintedImage from "../ui/TintedImage";

export default function Empathy() {
  return (
    /*  Confirmed: outer section 1321×861px, display:flex, justify-content:center,
        padding: 93.5443px 0px (top/bottom only).
        We replicate the centering with mx-auto max-w-site on the inner flex row. */
    <section className="bg-oatmeal py-section-md lg:min-h-[861px]">
      <div className="mx-auto grid w-full max-w-site grid-cols-1 items-start lg:grid-cols-[1fr_399px]">

        {/* Text column — confirmed 117px from section left.
            pl-[117px] creates the 117px offset;
            pr-[67px] preserves the site's standard right gutter before the image. */}
        <div className="flex flex-col gap-[57px] pl-6 pr-6 pt-0 lg:pl-[117px] lg:pr-[67px] lg:pt-[120px]">
          <h2 className="w-full max-w-[634px] font-serif text-h2 font-light text-slate">
            You&rsquo;re tired of feeling like you have to hold it all
            together.
          </h2>

          {/* Confirmed: eyebrow + first paragraph stack in the LEFT column;
              second paragraph stands alone in the RIGHT column. */}
          <div className="grid w-full max-w-[684px] grid-cols-1 gap-5 md:grid-cols-2">
            <div className="flex flex-col gap-5">

              <Eyebrow className="pr-0 lg:pr-[33px]">
                At my Santa Monica practice, you don&rsquo;t have to carry it
                alone.
              </Eyebrow>
              <p className="font-sans text-body text-slate">
                Whether you&rsquo;re a high-achieving professional running on
                empty, an entrepreneur who feels disconnected from yourself,
                or an adult working through the weight of past experiences,
                therapy offers a steady, compassionate space to slow down and
                reconnect.
              </p>
            </div>
            <p className="font-sans text-body text-slate">
              I believe therapy works best when you feel respected,
              understood, and actively involved in your own healing.
              Together, we&rsquo;ll build insight, resilience, and a
              stronger relationship with yourself &mdash; not just symptom
              relief, but lasting change you can feel in daily life.
            </p>
          </div>
        </div>

        {/* Right image — confirmed 399×637px.
            Top offset: section py-section-md ≈ 96px from section top ✓
            Bottom offset: 861 - 96 - 637 = 128px from section bottom ✓ */}
        <TintedImage
          src="https://images.unsplash.com/photo-1529016912215-a4c95c80d1dc?q=80&w=900&auto=format&fit=crop"
          alt="Woman sitting quietly by a window in warm evening light"
          tint="tan"
          sizes="(min-width: 1024px) 399px, 100vw"
          className="hidden lg:block lg:h-[637px] lg:w-full"
        />
      </div>
    </section>
  );
}
