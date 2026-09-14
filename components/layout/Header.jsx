// components/layout/Header.jsx
"use client";

import { useState, useEffect } from "react";
import Container from "../ui/Container";
import PillButton from "../ui/PillButton";
import Logo from "../ui/Logo";

const SPECIALTIES = [
  { name: "Dissociation", href: "https://www.conejovalleycounseling.com/dissociative-identity-disorder-therapist-newbury-park" },
  { name: "Trauma", href: "https://www.conejovalleycounseling.com/trauma-counseling-newbury-park" },
  { name: "Special Needs Parenting", href: "https://www.conejovalleycounseling.com/counseling-special-needs-parents-newbury-park" },
  { name: "Couples", href: "https://www.conejovalleycounseling.com/couples-therapy" },
  { name: "Children & Teens", href: "https://www.conejovalleycounseling.com/children-and-teens" },
  { name: "Anxiety & Depression", href: "https://www.conejovalleycounseling.com/anxiety-depression" },
  { name: "Adoption", href: "https://www.conejovalleycounseling.com/adoption-therapy-ventura-county-ca" },
];

const METHODS = [
  { name: "EMDR", href: "https://www.conejovalleycounseling.com/emdr-therapy-newbury-park" },
  { name: "Brainspotting", href: "https://www.conejovalleycounseling.com/brainspotting" },
  { name: "Somatic Therapy", href: "https://www.conejovalleycounseling.com/somatic-therapy" },
  { name: "Parts Work Therapy", href: "https://www.conejovalleycounseling.com/parts-work-therapy" },
];

// Top-level nav links shown in both desktop nav and mobile drawer
const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Our Office", href: "#office" },
  { name: "FAQs", href: "#faqs" },
  { name: "Contact", href: "#contact" },
];

// Desktop-only hover dropdown
function NavDropdown({ label, items }) {
  return (
    <div className="group relative flex h-[24px] items-center">
      <button className="border-0 bg-transparent p-0 py-[1.33964px] font-sans font-light text-navlink uppercase text-slate">
        {label}
      </button>
      <div
        className="
          invisible absolute left-1/2 top-full z-20 w-64 -translate-x-1/2
          rounded-md border border-greige bg-stone py-3 opacity-0 shadow-lg
          transition-all duration-200
          group-hover:visible group-hover:opacity-100
        "
      >
        {items.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="block px-5 py-2 font-sans text-[14px] text-slate hover:text-rust"
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}

// Mobile drawer accordion item for expandable sub-lists
function MobileAccordion({ label, items, onClose }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-greige">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-4 font-sans text-navlink uppercase tracking-widest text-slate"
      >
        {label}
        <span
          className={`text-rust transition-transform duration-200 ${open ? "rotate-45" : "rotate-0"}`}
        >
          +
        </span>
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <ul className="pb-4 pl-4">
            {items.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={onClose}
                  className="block py-2 font-sans text-[14px] text-slate hover:text-rust"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const close = () => setMobileOpen(false);

  return (
    <>
      <header className="relative z-40 bg-stone">
        <Container className="!px-6 py-4 lg:!px-[66.8174px] lg:py-[18.7089px]">
          <div className="flex min-h-[75px] items-center justify-between">

            {/* Logo + desktop nav */}
            <div className="flex flex-1 min-w-0 items-center justify-between">
              <a href="/" className="shrink-0 transition-opacity hover:opacity-90">
                <Logo align="left" />
              </a>

              {/* Desktop nav */}
              <nav className="hidden items-center justify-end gap-8 lg:flex">
                <a href="#about" className="flex h-[27px] items-center py-[1.33964px] font-sans font-light text-navlink uppercase text-slate">About</a>
                <NavDropdown label="Specialties" items={SPECIALTIES} />
                <NavDropdown label="Methods" items={METHODS} />
                <a href="#office" className="flex h-[27px] items-center py-[1.33964px] font-sans font-light text-navlink uppercase text-slate">Our Office</a>
                <a href="#faqs" className="flex h-[27px] items-center py-[1.33964px] font-sans font-light text-navlink uppercase text-slate">FAQs</a>
                <a href="#contact" className="flex h-[27px] items-center py-[1.33964px] font-sans font-light text-navlink uppercase text-slate">Contact</a>
              </nav>
            </div>

            {/* Desktop CTA */}
            <div className="hidden w-[144px] items-center justify-end lg:flex">
              <PillButton href="#contact">Contact</PillButton>
            </div>

            {/* Mobile hamburger / close toggle */}
            <button
              className="ml-4 shrink-0 lg:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {/* Animate three bars into an × when open */}
              <span
                className={`block h-px w-6 bg-slate transition-all duration-300 ${
                  mobileOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`mt-1.5 block h-px w-6 bg-slate transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`mt-1.5 block h-px w-6 bg-slate transition-all duration-300 ${
                  mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </Container>
      </header>

      {/* ── Mobile Drawer ──────────────────────────────────────────────── */}
      {/* Backdrop */}
      <div
        onClick={close}
        aria-hidden="true"
        className={`fixed inset-0 z-30 bg-slate/40 transition-opacity duration-300 lg:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Slide-in panel */}
      <div
        className={`fixed right-0 top-0 z-40 flex h-full w-[280px] flex-col bg-stone px-6 pt-6 pb-10 shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!mobileOpen}
      >
        {/* Drawer header with logo + close button */}
        <div className="flex items-center justify-between">
          <Logo align="left" />
          <button onClick={close} aria-label="Close menu" className="text-2xl text-slate leading-none">
            &#x2715;
          </button>
        </div>

        {/* Navigation links */}
        <nav className="mt-8 flex flex-col" aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={close}
              className="border-b border-greige py-4 font-sans text-navlink uppercase tracking-widest text-slate hover:text-rust"
            >
              {link.name}
            </a>
          ))}
          <MobileAccordion label="Specialties" items={SPECIALTIES} onClose={close} />
          <MobileAccordion label="Methods" items={METHODS} onClose={close} />
        </nav>

        {/* CTA at the bottom */}
        <div className="mt-auto">
          <PillButton href="#contact" className="w-full text-center" onClick={close}>
            Book a Free Consultation
          </PillButton>
        </div>
      </div>
    </>
  );
}