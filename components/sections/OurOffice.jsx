import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";
import Script from "../ui/Script";
import TintedImage from "../ui/TintedImage";

/**
 * NEW section (does not exist in the original template).
 * Introduces Dr. Reynolds' real Santa Monica office using her own photos,
 * and gives the space a chance to speak for itself the way it does for
 * clients walking in the door.
 */
export default function OurOffice() {
  return (
    <section id="office" className="bg-stone">
      <Container className="py-section-md">
        <div className="flex flex-col gap-4 lg:max-w-[640px]">
          <Eyebrow>Santa Monica Therapy Office</Eyebrow>
          <h2 className="font-serif text-h2 font-light text-slate">
            A calm space to <Script>land</Script>.
          </h2>
          <p className="mt-2 font-sans text-body text-slate">
            My Santa Monica therapy office is a quiet, private space designed to
            feel calm and grounding &mdash; featuring natural light, exposed brick, warm neutral
            tones, and a comfortable, uncluttered environment conveniently located in West Los Angeles. Clients often
            mention how the serene atmosphere helps them unwind the moment
            they arrive.
          </p>
          <p className="font-sans text-body text-slate">
            I provide both in-person therapy sessions in Santa Monica, CA and secure, confidential
            telehealth therapy appointments for adults throughout California.
          </p>
          <address className="mt-2 flex flex-col gap-0 font-sans text-body font-light not-italic text-slate">
            <span className="font-sans text-eyebrow uppercase text-rust">
              Visit the Santa Monica Office
            </span>
            <span>123 4th Street</span>
            <span>Santa Monica, CA 90401</span>
            <span className="mt-2 italic text-rust">
              In-person &amp; California telehealth sessions available
            </span>
          </address>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <TintedImage
            src="/images/office-1.jpg"
            alt="Warm, sunlit therapy office lounge with exposed brick, sheer curtains, and a comfortable seating area"
            tint="tan-light"
            sizes="(min-width: 640px) 50vw, 100vw"
            className="aspect-[4/3] rounded-md"
          />
          <TintedImage
            src="/images/office-2.jpg"
            alt="Cozy office nook with a gray sofa, leather armchair, and shelving styled with warm, calming decor"
            tint="tan-light"
            sizes="(min-width: 640px) 50vw, 100vw"
            className="aspect-[4/3] rounded-md"
          />
        </div>
      </Container>
    </section>
  );
}
