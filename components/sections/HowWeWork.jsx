import Eyebrow from "../ui/Eyebrow";
import TextLink from "../ui/TextLink";
import TintedImage from "../ui/TintedImage";

export default function HowWeWork() {
  return (
    /*  Confirmed: 1321×915px, bg-tan.
        lg:h-[915px] locks the section to exactly 915px so text column height
        cannot push it taller. The image is absolutely positioned so its
        111px top/bottom offsets are independent of the text column height.
        pr-[319px] on the text = 298px (image) + 21px (gap) reserves the image column. */
    <section className="relative bg-tan py-[111px] lg:h-[915px] lg:overflow-hidden">

      {/* Right image — confirmed 298×694px, absolutely pinned to right edge.
          top-[111px] = confirmed 111px from section top ✓
          bottom spacing: 915 - 111 - 694 = 110px ≈ 111px ✓ */}
      <div className="absolute right-0 top-[111px] hidden h-[694px] w-[298px] lg:block">
        <TintedImage
          src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/389808ad-7273-4e03-a32b-c172aa735f12/Jennifer+A+-+Images+%286%29.jpg"
          alt="A woman and a child in white dresses dancing on a sandy beach at sunset"
          tint="none"
          sizes="298px"
          className="h-full w-full"
        />
      </div>

      {/* Text column — confirmed 117px from section left.
          lg:pr-[319px] = 298px image + 21px gap keeps text clear of the image. */}
      <div className="flex flex-col gap-12 pl-6 pr-6 lg:pl-[117px] lg:pr-[319px]">
        <div className="flex flex-col gap-32">
          <Eyebrow>How we work</Eyebrow>

          <h2 className="max-w-[840px] font-serif text-h2 font-light text-ink">
            We&rsquo;re here to make a difference.
          </h2>
        </div>
        <div className="grid max-w-[800px] grid-cols-1 gap-5 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <Eyebrow>
              The clients we work with are balancing so many things at
              once, it&rsquo;s often hard for them to put themselves
              first.
            </Eyebrow>
            <p className="font-sans text-body text-ink">
              Here, your needs are always top priority. Our team takes the
              time to deeply listen to our clients in order to truly
              understand their story and their struggles. We recognize
              that no two people are the same and that personalized
              therapy means an intentional, tailored approach. (You
              won&rsquo;t find anything &ldquo;one-size-fits-all&rdquo;
              here.) If you&rsquo;re ready to do the work, we&rsquo;re
              ready to help.
            </p>
            <TextLink href="https://www.conejovalleycounseling.com/therapists-newbury-park" className="w-fit mt-8">
              Learn more about us
            </TextLink>
          </div>

          <p className="font-sans text-body text-ink">
            Sometimes we may gently challenge you to look at things
            differently and other times we may explore your emotions, all
            while encouraging you to practice what you&rsquo;ve learned in
            your daily life. We take what we do seriously because we know
            how important it is for you to heal from what&rsquo;s hurting
            you, discover a fulfilling life, and build meaningful
            relationships. Our goal is to walk alongside you in this
            journey, offering support and guidance as you uncover your
            strengths and embrace what the future can hold for you.
          </p>
        </div>
      </div>

    </section>
  );
}
