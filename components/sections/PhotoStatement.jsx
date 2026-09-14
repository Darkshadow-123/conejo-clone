import Image from "next/image";

export default function PhotoStatement() {
  return (
    <section className="relative flex min-h-[400px] items-end overflow-hidden lg:min-h-[534px]">
      <Image
        src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/27b4f80c-ca73-4d1f-824e-ec29a2211142/Jennifer+A+-+Images+%282%29.png"
        alt="Two children running on a beach at low tide"
        fill
        sizes="100vw"
        className="object-cover"
      />
      {/* confirmed: sepia/vintage grade + dark scrim so the cream-colored
          text (not pure white) stays legible */}
      <div className="absolute inset-0 bg-ink/40" />

      <div className="relative px-6 py-12 lg:py-[88.199px] lg:pl-[117px] lg:pr-[430px]">
        {/* Confirmed: this text uses the exact H2 scale, colored with the
            lightAccent token (#F6F4EE), not pure white. */}
        <p className="max-w-3xl font-serif text-h2 font-light text-cream">
          You deserve a space where your story is heard, valued, and
          understood.{" "}
          <em className="italic">
            Nothing you&rsquo;re carrying is too heavy to bring into the
            room.
          </em>
        </p>
      </div>
    </section>
  );
}
