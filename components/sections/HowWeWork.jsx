import Eyebrow from "../ui/Eyebrow";
import TextLink from "../ui/TextLink";
import TintedImage from "../ui/TintedImage";

export default function HowWeWork() {
  return (
    /*  Confirmed: 1321×918px, bg-greige.
        lg:h-[918px] locks the section to exactly 918px so text column height
        cannot push it taller. The image is placed in a grid column with gap-6. */
    <section className="relative h-auto bg-greige lg:h-[915px] lg:overflow-hidden">
      <div className="mx-auto grid w-full max-w-site grid-cols-1 gap-6 py-section-lg lg:grid-cols-[1fr_298px] lg:h-full">
        {/* Text column — confirmed 117px from section left.
            lg:pr-0 removes the old absolute offset; gap-6 keeps text clear of the image. */}
        <div className="flex flex-col gap-12 pl-6 pr-6 lg:pl-[117px] lg:pr-0">
          <div className="flex flex-col gap-32">
            <Eyebrow>How we work</Eyebrow>

            <h2 className="w-full max-w-[840px] font-serif text-h2 font-light text-slate">
              Practical tools, real depth &mdash; therapy that fits your
              life.
            </h2>
          </div>
          <div className="grid w-full max-w-[784px] grid-cols-1 gap-5 md:grid-cols-2">
            <div className="flex flex-col gap-5">
              <Eyebrow>
                The clients I work with are balancing so many responsibilities, it&rsquo;s often hard for them to put themselves
                first.
              </Eyebrow>
              <p className="font-sans text-body text-slate">
                In my Santa Monica practice, your well-being is top priority. I take the
                time to deeply listen and truly understand your story and personal goals. Personalized
                therapy means an intentional, tailored approach &mdash; never a &ldquo;one-size-fits-all&rdquo; blueprint. If you&rsquo;re ready to begin, I am here to guide you.
              </p>
              <TextLink href="#about" className="w-fit mt-7">
                Learn more about Dr. Reynolds
              </TextLink>
            </div>

            <p className="font-sans text-body text-slate">
              Trauma therapy and anxiety recovery are paced carefully, with an emphasis on emotional safety and nervous system stabilization. My approach is warm, collaborative, and grounded &mdash;
              integrating CBT, EMDR, mindfulness, and somatic techniques to address both the emotional and
              physiological sides of what you&rsquo;re experiencing. The goal
              isn&rsquo;t only symptom relief; it&rsquo;s helping you build
              enduring insight, resilience, and clarity in daily life.
            </p>
          </div>
        </div>

        {/* Right image — confirmed 298×694px.
            Now natively sitting in the grid, obeying the py-section-lg of the container. */}
        <div className="hidden h-[694px] w-[298px] lg:block lg:self-start">
          <TintedImage
            src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/389808ad-7273-4e03-a32b-c172aa735f12/Jennifer+A+-+Images+%286%29.jpg"
            alt="A woman and a child in white dresses dancing on a sandy beach at sunset"
            tint="none"
            sizes="298px"
            className="h-full w-full"
          />
        </div>
      </div>
    </section>
  );
}
