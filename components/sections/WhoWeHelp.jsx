import Container from "../ui/Container";
import Script from "../ui/Script";
import TintedImage from "../ui/TintedImage";

const CARDS = [
  {
    heading: "Adults",
    href: null,
    body: "Feeling stuck or overwhelmed? We help adults find clarity, build resilience, and move forward with confidence by addressing the root causes of anxiety, stress, and emotional pain.",
    img: "https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/066f60e6-1354-4d47-a586-ab3f2f2ba612/Jennifer+A+-+Images+%288%29.jpg",
    alt: "Two people sitting on a log at the beach, facing a lake with mountains in the background",
  },
  {
    heading: "Couples",
    href: "https://www.conejovalleycounseling.com/couples-therapy",
    body: "Relationships require effort, and we\u2019re here to help you strengthen yours. We guide couples through challenges like communication breakdowns and trust issues, helping you rebuild intimacy and strengthen your relationship.",
    img: "https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/d0157712-388c-4800-aada-c78db97ee966/Jennifer+A+-+Images+%289%29.jpg",
    alt: "A couple embracing on the beach, smiling at each other, ocean in the background",
  },
  {
    heading: "Children & Teens",
    href: "https://www.conejovalleycounseling.com/children-and-teens",
    body: "Kids need support, too. We help them process big emotions, cope with challenging family situations, build coping skills, and feel understood, while also working closely with their parents to create a nurturing environment.",
    img: "https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/d5d62bf4-34a7-4bf4-bf00-e1169863ace7/Jennifer+A+-+Images+%2810%29.jpg",
    alt: "A boy carrying a girl on a beach with waves in the background",
  },
];

export default function WhoWeHelp() {
  return (
    <section className="bg-white">
      <Container className="py-[88px]">
        <h2 className="mb-12 font-serif text-h2 font-light text-ink ml-[10px]">
          Who we <Script>help</Script>
        </h2>

        <div className="grid grid-cols-1 gap-x-5 gap-y-12 md:grid-cols-3 pl-[151px]">
          {CARDS.map((card) => (
            <div key={card.heading}>
              <TintedImage
                src={card.img}
                alt={card.alt}
                tint="white"
                sizes="(min-width: 768px) 33vw, 100vw"
                className="aspect-[332/394]"
              />
              <h4 className="mt-12 font-serif text-h4 font-light text-ink">
                {card.href ? (
                  <a href={card.href} className="hover:text-teal">
                    {card.heading}
                  </a>
                ) : (
                  card.heading
                )}
              </h4>
              <p className="mt-[30px] font-sans text-body text-ink">{card.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
