import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";
import Script from "../ui/Script";
import TextLink from "../ui/TextLink";
import TintedImage from "../ui/TintedImage";

export default function About() {
  return (
    <section id="about" className="bg-oatmeal">
      <Container className="py-section-md">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[380px_1fr] lg:gap-[90px]">
          <TintedImage
            src="/images/Dr. Maya Reynolds.png"
            alt="Portrait of Dr. Maya Reynolds, PsyD, smiling warmly"
            tint="tan-light"
            sizes="(min-width: 1024px) 380px, 100vw"
            className="aspect-[4/5] w-full rounded-md"
          />

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <Eyebrow>Licensed Clinical Psychologist &middot; Santa Monica, CA</Eyebrow>
              <h2 className="font-serif text-h2 font-light text-ink">
                Meet Dr. Maya <Script>Reynolds</Script>, PsyD
              </h2>
            </div>

            <p className="max-w-2xl font-sans text-body text-ink">
              I&rsquo;m a licensed clinical psychologist offering therapy for
              adults who feel overwhelmed by anxiety, stress, or the
              lingering effects of past experiences. Many of the people I
              work with are high-achieving, thoughtful, and self-aware
              &mdash; but internally feel exhausted, stuck in overthinking,
              or emotionally on edge.
            </p>

            <p className="max-w-2xl font-sans text-body text-ink">
              My work often focuses on anxiety, panic, trauma, and burnout. I
              integrate evidence-based methods such as CBT, EMDR,
              mindfulness-based practices, and body-oriented techniques to
              work with both the emotional and physiological sides of what
              you&rsquo;re experiencing. I also frequently support
              entrepreneurs, creatives, and professionals who feel
              disconnected from themselves after years of pushing through
              stress.
            </p>

            <p className="max-w-2xl font-sans text-body text-ink">
              If you&rsquo;re looking for a therapist who combines practical
              tools with depth-oriented work &mdash; and who understands the
              realities of living and working in a fast-paced environment
              &mdash; I may be a good fit.
            </p>

            <TextLink href="#contact" className="w-fit mt-2">
              Get in touch
            </TextLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
