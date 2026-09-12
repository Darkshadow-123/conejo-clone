import Eyebrow from "../ui/Eyebrow";
import PillButton from "../ui/PillButton";
import Script from "../ui/Script";
import TintedImage from "../ui/TintedImage";

export default function ScheduleAppointment() {
  return (
    /*  Confirmed: outer section 1321×799px, display:flex, justify-content:center,
        padding: 88.199px 0px.
        88.199(top) + 623(inner) + 88.199(bottom) = 799.4 ≈ 799px ✓
        Images are absolutely positioned within the section (relative) so their
        independent top offsets (88px for right, 199px for left) can be set directly.
        The text div's py-[88.199px] replicates the section's confirmed padding. */
    <section className="relative bg-cream lg:h-[799px]">

      {/* Left image — confirmed 156×475px, 199px from section top.
          Spans grid cols 1-3 (0→156px from section left). */}
      <TintedImage
        src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/7557312a-044d-4489-a9d1-6f43ee9888b1/Jennifer+A+-+Images+%2811%29.jpg"
        alt="A person picking up shells on the sandy beach"
        tint="tan"
        objectPosition="left"
        sizes="156px"
        className="hidden lg:absolute lg:left-0 lg:top-[199px] lg:block lg:h-[475px] lg:w-[156px]"
      />

      {/* Right image — confirmed 455×586px, 88px from section top.
          Spans grid cols 18-26 (866→1321px from section left), flush right.
          88px ≈ section py-[88.199px]: image starts at the visual content top. */}
      <TintedImage
        src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/7557312a-044d-4489-a9d1-6f43ee9888b1/Jennifer+A+-+Images+%2811%29.jpg"
        alt="A person in a striped dress pointing at shells on the sandy beach, with a child in blue shorts standing barefoot nearby"
        tint="tan"
        objectPosition="right"
        sizes="455px"
        className="hidden lg:absolute lg:right-0 lg:top-[88px] lg:block lg:h-[586px] lg:w-[455px]"
      />

      {/* Text content — confirmed center column: cols 4-17.
          Col 4 start = 167px from section left.
          Col 17 end  = 855px from section left (= 1321 - 455 image - 11 gap).
          lg:pl-[167px] lg:pr-[466px] (466 = 455 image + 11 gap): content = 688px ✓
          py-[88.199px] replicates the section's confirmed padding: 88.199px 0px. */}
      <div className="flex flex-col px-6 py-[88.199px] lg:pl-[267px] lg:pr-[566px]">
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

    </section>
  );
}
