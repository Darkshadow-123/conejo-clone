"use client";

import { useState } from "react";
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

function FAQItem({ item, isOpen, onToggle, isLast }) {
  return (
    <div className={`py-6 ${!isLast ? "border-b border-slate/20" : ""}`}>
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full cursor-pointer items-center justify-between gap-6 text-left font-serif text-h4 font-light text-slate"
      >
        <span>{item.q}</span>
        {/* The + rotates 45deg to become × when open */}
        <span
          className={`shrink-0 text-h4 font-light text-rust transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
        >
          +
        </span>
      </button>

      {/* Smooth height animation via grid-rows trick:
          grid-rows-[0fr] → grid-rows-[1fr] lets the inner div grow from 0 height.
          The inner div needs min-h-0 so it can actually collapse to zero. */}
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <p className="mt-4 max-w-2xl font-sans text-body text-slate pb-1">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

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
            <FAQItem
              key={item.q}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
              isLast={i === FAQS.length - 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
