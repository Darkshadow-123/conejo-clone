import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";
import Script from "../ui/Script";

const FAQS = [
  {
    q: "Do you offer in-person and online sessions?",
    a: "Yes. I offer in-person therapy from my Santa Monica office as well as secure telehealth sessions for clients located anywhere in California.",
  },
  {
    q: "What types of therapy do you use?",
    a: "I integrate evidence-based approaches including CBT, EMDR, mindfulness-based practices, and body-oriented (somatic) techniques, tailored to what you\u2019re working through.",
  },
  {
    q: "Do you work with trauma?",
    a: "Yes. I work with adults who\u2019ve experienced both single-incident trauma and more complex, long-standing patterns \u2014 pacing our work carefully with an emphasis on safety and stabilization before diving deeper.",
  },
  {
    q: "Who do you typically work with?",
    a: "Many of my clients are high-achieving professionals, entrepreneurs, and creatives navigating anxiety, panic, burnout, perfectionism, or the lasting effects of past experiences.",
  },
  {
    q: "How do I get started?",
    a: "Click \u201cSchedule a Free Consultation\u201d anywhere on this site, and we\u2019ll find a time to connect and see if we\u2019re a good fit.",
  },
];

export default function FAQs() {
  return (
    <section id="faqs" className="bg-greige">
      <Container className="py-section-md">
        <div className="mb-12 flex flex-col gap-3 lg:max-w-[500px]">
          <Eyebrow>FAQs</Eyebrow>
          <h2 className="font-serif text-h2 font-light text-slate">
            Frequently asked <Script>questions</Script>
          </h2>
        </div>

        <div className="mx-auto flex max-w-3xl flex-col">
          {FAQS.map((item, i) => (
            <details
              key={item.q}
              className={`group py-6 ${i !== FAQS.length - 1 ? "border-b border-greige" : ""}`}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-h4 font-light text-slate">
                {item.q}
                <span className="shrink-0 text-h4 font-light text-rust transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-2xl font-sans text-body text-slate">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
