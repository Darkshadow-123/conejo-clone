import Container from "../ui/Container";
import Script from "../ui/Script";
import TintedImage from "../ui/TintedImage";

const CARDS = [
  {
    heading: "High-Achieving Professionals",
    href: null,
    body: "Many of the clients I see in Santa Monica are entrepreneurs, creatives, or executives who feel disconnected after years of chronic stress. Therapy provides a dedicated space to slow down, drop internal pressure, and cultivate sustainable wellbeing.",
    img: "/images/High-Achieving-Professionals.jpg",
    alt: "High-achieving professional in Santa Monica taking a mindful pause",
  },
  {
    heading: "Overwhelmed Adults",
    href: null,
    body: "Adults across West Los Angeles frequently seek therapy feeling high-functioning on the outside while experiencing constant worry, physical tension, or insomnia. We integrate evidence-based tools to soothe your nervous system and restore balance.",
    img: "/images/Overwhelmed-Adults.jpg",
    alt: "Adult decompressing in a calm therapy session environment",
  },
  {
    heading: "Trauma Survivors",
    href: null,
    body: "Whether navigating single-event trauma or complex relational patterns, our trauma therapy in Santa Monica is paced carefully. Utilizing EMDR and somatic stabilization, we restore safety, empowerment, and emotional resilience.",
    img: "/images/Trauma-Survivors.jpg",
    alt: "Trauma recovery client experiencing emotional grounding and peace",
  },
];

export default function WhoWeHelp() {
  return (
    <section className="bg-stone">
      <Container className="py-[88px]">
        <h2 className="mb-12 ml-0 font-serif text-h2 font-light text-slate lg:ml-[10px]">
          Who we <Script>help</Script>
        </h2>

        <div className="grid grid-cols-1 gap-x-5 gap-y-12 md:grid-cols-3 lg:pl-[151px]">
          {CARDS.map((card) => (
            <div key={card.heading}>
              <TintedImage
                src={card.img}
                alt={card.alt}
                tint="white"
                sizes="(min-width: 768px) 33vw, 100vw"
                className="aspect-[332/394]"
              />
              <h4 className="mt-12 font-serif text-h4 font-light text-slate">
                {card.href ? (
                  <a href={card.href} className="hover:text-rust">
                    {card.heading}
                  </a>
                ) : (
                  card.heading
                )}
              </h4>
              <p className="mt-[30px] font-sans text-body text-slate">{card.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
