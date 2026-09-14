import Eyebrow from "../ui/Eyebrow";
import PillButton from "../ui/PillButton";
import Script from "../ui/Script";
import TintedImage from "../ui/TintedImage";

export default function ScheduleAppointment() {
  return (
    /*  Confirmed: outer section 1321×799px, display:flex, justify-content:center,
        padding: 88.199px 0px.
        88.199(top) + 623(inner) + 88.199(bottom) = 799.4 ≈ 799px ✓
        Using CSS Grid to correctly model the 111px horizontal gaps previously hidden in paddings. */
    <section className="bg-cream lg:h-[799px]">
      <div className="mx-auto grid w-full max-w-site grid-cols-1 lg:grid-cols-[156px_1fr_455px] lg:gap-[111px]">

        {/* Left image — confirmed 156×475px, 199px from section top. */}
        <div className="hidden lg:block lg:mt-[199px] lg:self-start">
          <TintedImage
            src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/7557312a-044d-4489-a9d1-6f43ee9888b1/Jennifer+A+-+Images+%2811%29.jpg"
            alt="A person picking up shells on the sandy beach"
            tint="tan"
            objectPosition="left"
            sizes="156px"
            className="h-[475px] w-[156px]"
          />
        </div>

        {/* Text content — confirmed center column.
            py-section-sm natively pushes the text down 88px.
            lg:px-0 removes the massive manual offsets. */}
        <div className="flex flex-col px-6 py-section-sm lg:px-0">
        <Eyebrow>Schedule an appointment</Eyebrow>

        {/* Confirmed gaps (y-axis): eyebrow→h2: 84px, h2→p: 30px, p→p: 15px, p→pill: 19px */}
        <h2 className="mt-[84px] font-serif text-h2 font-light text-ink">
          Find a therapist who is the right fit for <Script>you</Script>.
        </h2>

        <p className="mt-[30px] font-sans text-body text-ink">
          Coming to therapy is a courageous decision, and connecting with
          the right kind of therapist makes all the difference. We
          understand that your journey is personal, and we&apos;re here to
          support you with care and understanding every step of the way.
          Each member of our team brings dedicated expertise and a
          commitment to support you in your struggles. We want you to feel
          prioritized, understood, and empowered.
        </p>

        <p className="mt-[15px] font-sans text-body text-ink">
          Click the button below to schedule an appointment.
        </p>

        <PillButton href="https://www.conejovalleycounseling.com/contact" className="mt-[19px] w-fit">
          Book now
        </PillButton>
        </div>

        {/* Right image — confirmed 455×586px, 88px from section top.
            Spans grid cols 18-26 (866→1321px from section left), flush right.
            mt-section-sm explicitly sets the independent stagger offset. */}
        <div className="hidden lg:block lg:mt-section-sm lg:self-start">
          <TintedImage
            src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/7557312a-044d-4489-a9d1-6f43ee9888b1/Jennifer+A+-+Images+%2811%29.jpg"
            alt="A person in a striped dress pointing at shells on the sandy beach, with a child in blue shorts standing barefoot nearby"
            tint="tan"
            objectPosition="right"
            sizes="455px"
            className="h-[586px] w-[455px]"
          />
        </div>
      </div>

    </section>
  );
}
