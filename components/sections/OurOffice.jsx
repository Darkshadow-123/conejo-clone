import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";
import Script from "../ui/Script";
import TintedImage from "../ui/TintedImage";

export default function OurOffice() {
  return (
    <section id="office" className="bg-stone py-section-md lg:pb-[200px] lg:pt-[120px]">
      <Container>
        <div className="relative mx-auto max-w-[1100px]">
          {/* Main Asymmetric Grid */}
          <div className="flex flex-col lg:flex-row lg:items-center">

            {/* Left: Large Featured Image */}
            <div className="z-0 w-full lg:w-3/5">
              <TintedImage
                src="/images/office-1.jpg"
                alt="Warm, sunlit therapy office lounge"
                tint="tan-light"
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="aspect-[4/3] w-full rounded-sm object-cover shadow-md lg:aspect-[4/5] lg:h-[700px]"
              />
            </div>

            {/* Right: Overlapping Text Card */}
            <div className="relative z-10 -mt-12 w-full px-6 lg:-ml-24 lg:mt-0 lg:w-2/5 lg:px-0">
              <div className="bg-oatmeal p-8 lg:p-12">
                <Eyebrow>Santa Monica Therapy Office</Eyebrow>
                <h2 className="mt-4 font-serif text-h2 font-light text-slate">
                  A calm space to <Script>land</Script>.
                </h2>
                <p className="mt-6 font-sans text-body text-slate">
                  My Santa Monica therapy office is a quiet, private space designed to
                  feel calm and grounding &mdash; featuring natural light, exposed brick,
                  warm neutral tones, and a comfortable environment conveniently located
                  in West Los Angeles.
                </p>
                <p className="mt-4 font-sans text-body text-slate">
                  I provide both in-person therapy sessions in Santa Monica, CA and secure
                  telehealth therapy appointments for adults throughout California.
                </p>

                <div className="mt-8 border-t pt-6">
                  <address className="flex flex-col gap-1 font-sans text-body font-light not-italic text-slate">
                    <span className="font-sans text-eyebrow uppercase text-rust">
                      Visit the Office
                    </span>
                    <span>123 4th Street</span>
                    <span>Santa Monica, CA 90401</span>
                  </address>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Right: Secondary Smaller Image — absolutely positioned below/right of the main layout.
              Requires lg:pb-[200px] on the outer section to avoid clipping. */}
          <div className="z-20 mt-12 hidden lg:absolute lg:-bottom-28 lg:-right-12 lg:block lg:w-[340px]">
            <TintedImage
              src="/images/office-2.jpg"
              alt="Cozy office nook with a gray sofa"
              tint="tan-light"
              sizes="350px"
              className="aspect-square w-full rounded-sm object-cover shadow-lg border-8 border-stone"
            />
          </div>

          {/* Mobile Secondary Image */}
          <div className="mt-12 px-6 lg:hidden w-full">
            <TintedImage
              src="/images/office-2.jpg"
              alt="Cozy office nook with a gray sofa"
              tint="tan-light"
              sizes="100vw"
              className="aspect-[4/3] w-full rounded-sm object-cover shadow-md"
            />
          </div>

        </div>
      </Container>
    </section>
  );
}
