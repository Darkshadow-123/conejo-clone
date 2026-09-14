/**
 * Outline pill button. Confirmed spec (design-audit.md):
 * border-radius: 100%, border-width: ~0.7px, font: 12.59px Muli,
 * letter-spacing: 1.51px (0.12em), padding: 15px 19.5px, uppercase.
 * Confirmed hover: inverts to a solid #000 fill with white text -
 * shared by both the nav CONTACT button and the final-CTA BOOK NOW button.
 */
export default function PillButton({ href, children, className = "" }) {
  return (
    <a
      href={href}
      className={`
        inline-flex items-center justify-center
        rounded-[100%] border border-slate
        px-[19.5px] py-[15px]
        font-sans text-btn uppercase text-slate
        transition-colors duration-300 ease-out
        hover:bg-charcoal hover:border-slate hover:text-stone
        ${className}
      `}
    >
      {children}
    </a>
  );
}
