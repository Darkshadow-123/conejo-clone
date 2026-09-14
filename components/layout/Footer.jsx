import Image from "next/image";
import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";
import Logo from "../ui/Logo";

const NAVIGATE = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Specialties", href: "#specialties" },
  { name: "Our Office", href: "#office" },
  { name: "FAQs", href: "#faqs" },
  { name: "Contact", href: "#contact" },
];

const TEAM = [
  { name: "Maya Reynolds", href: "https://www.conejovalleycounseling.com/jennifer-anderson" },
  { name: "Heather Williams-Baumgart", href: "https://www.conejovalleycounseling.com/heather-williams-baumgart" },
  { name: "Autumn Bodily", href: "https://www.conejovalleycounseling.com/autumn-bodily" },
  { name: "Michaela Gorospe", href: "https://www.conejovalleycounseling.com/michaela-gorospe" },
  { name: "Candace Bletscher", href: "https://www.conejovalleycounseling.com/candace-bletscher" },
  { name: "Samantha Johnson", href: "https://www.conejovalleycounseling.com/samantha-johnson" },
  { name: "Andrea Watkins", href: "https://www.conejovalleycounseling.com/andrea-watkins" },
  { name: "Rosa Gomez", href: "https://www.conejovalleycounseling.com/rosa-gomez" },
  { name: "Chad Flores", href: "https://www.conejovalleycounseling.com/chad-flores" },
];

export default function Footer() {
  return (
    <footer className="bg-greige">
      {/*  Confirmed: outer wrapper 1321×441px, padding: 60.1357px 0px.
           Inner grid 1321×321px (9 rows × 25.8478px + 8 × 11px gaps ≈ 321px).
           Conejo Valley div 90px from left:
             Container (px-67) undershoots by 23px → use plain div with pl-[90px].
           Right: col 26 gutter = 55.8px + 11px gap = 67px (standard). */}
      <div className="relative mx-auto flex w-full max-w-site flex-col gap-10 px-6 py-[60.1357px] min-h-[441px] lg:h-[441px] lg:flex-row lg:px-0">
        {/* Left Column: occupies 0 to 566px. Logo at 67px (90-23=67), paragraph at 90px */}
        <div className="w-full lg:w-[566px] lg:pl-[90px] shrink-0">
          <a href="/" className="inline-block transition-opacity hover:opacity-90">
            <Logo align="left" />
          </a>
          {/* Paragraph — 90px from section left, 12px below logo. Reuses text-body (16.6036px / 29.8865px) & text-slate (#2B2B2B) */}
          <p className="mt-[12px] max-w-[339px] font-sans text-body font-light text-slate">
            We want to make getting started simple. You&rsquo;re welcome to
            come into our Santa Monica office or
            schedule a secure telehealth session from anywhere in
            California&mdash;whatever works best for you.
          </p>
        </div>

        {/* 3 Columns starting 566px from left edge with 11px gap between columns */}
        <div className="flex flex-col gap-10 md:flex-row lg:absolute lg:left-[566px] lg:top-[60.1357px] lg:gap-[11px]">
          {/* Navigate: 189 × 150 */}
          <div className="w-full lg:w-[189px] lg:h-[150px] shrink-0">
            <Eyebrow className="inline">Navigate</Eyebrow>
            <ul className="mt-4 flex flex-col gap-0">
              {NAVIGATE.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="inline font-sans text-footerlink font-light text-slate hover:opacity-70"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Team: 239 × 284 */}
          <div className="w-full lg:w-[239px] lg:h-[284px] shrink-0">
            <Eyebrow className="inline">Our Team</Eyebrow>
            <ul className="mt-4 flex flex-col gap-0">
              {TEAM.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="inline font-sans text-footerlink font-light text-slate hover:opacity-70"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact: 239 × 272 */}
          <div className="w-full lg:w-[239px] lg:h-[272px] shrink-0">
            <Eyebrow className="inline">Contact</Eyebrow>
            <address className="mt-4 flex flex-col gap-0 not-italic">
              <span className="inline font-sans text-footerlink font-light text-slate">
                123th Street 45 W
              </span>
              <span className="inline font-sans text-footerlink font-light text-slate">
                Suites 200 and 225
              </span>
              <span className="inline font-sans text-footerlink font-light text-slate">
                Santa Monica, CA 90401
              </span>
              <a
                href="mailto:info@conejovalleycounseling.com"
                className="inline font-sans text-footerlink font-light text-slate hover:opacity-70"
              >
                hello@mayareynoldstherapy.com
              </a>
              <a
                href="tel:3105550148"
                className="inline font-sans text-footerlink font-light text-slate hover:opacity-70"
              >
                310.555.0148
              </a>
              <span className="mt-4 inline font-sans text-footerlink font-light text-slate italic">
                In-person in Santa Monica &amp; telehealth across CA
              </span>
            </address>
          </div>
        </div>
      </div>

      <div className="mx-auto flex h-[40px] w-full max-w-site items-center bg-rust font-sans text-body font-light text-slate">
        <div className="flex flex-wrap items-center gap-2 px-[91px] font-sans text-footerlink font-light text-slate">
          <a
            href="https://www.conejovalleycounseling.com/terms"
            className="inline-block h-[27px] font-sans text-footerlink font-light text-tan hover:opacity-80"
          >
            <span className="inline font-sans text-footerlink font-light text-white">
              Terms
            </span>
          </a>
          <span className="inline font-sans text-footerlink font-light text-tan">
            |
          </span>
          <a
            href="https://www.conejovalleycounseling.com/privacy-policy"
            className="inline-block h-[27px] font-sans text-footerlink font-light text-tan hover:opacity-80"
          >
            <span className="inline font-sans text-footerlink font-light text-white">
              Privacy Policy
            </span>
          </a>
          <span className="inline font-sans text-footerlink font-light text-tan">
            |
          </span>
          <a
            href="https://www.conejovalleycounseling.com/disclaimer"
            className="inline-block h-[27px] font-sans text-footerlink font-light text-tan hover:opacity-80"
          >
            <span className="inline font-sans text-footerlink font-light text-white">
              Disclaimer
            </span>
          </a>
          <span className="inline font-sans text-footerlink font-light text-tan">
            |
          </span>
          <span className="inline-block h-[27px] font-sans text-footerlink font-light text-tan">
            <span className="inline font-sans text-footerlink font-light text-white">
              Website by{" "}
            </span>
            <a
              href="https://walkerstrategyco.com"
              className="inline-block font-sans text-footerlink font-light text-tan hover:opacity-80"
            >
              <span className="inline font-sans text-footerlink font-light text-white">
                2026 Dr. Maya Reynolds, PsyD
              </span>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
