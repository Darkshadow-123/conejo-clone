/**
 * Underlined text link. Confirmed spec: font 12.59px Muli, letter-spacing
 * 1.51px (0.12em), uppercase, padding 9px 0. Confirmed hover behavior is the
 * inverse of the common pattern: underlined at rest, and the underline
 * animates AWAY to zero width on hover (no color change).
 */
export default function TextLink({ href, children, className = "" }) {
  return (
    <a
      href={href}
      className={`
        relative inline-block
        py-[9px]
        font-sans text-btn uppercase text-ink
        no-underline
        after:absolute after:bottom-0 after:left-0
        after:h-px after:w-full after:bg-ink
        after:transition-[width] after:duration-700 after:ease-out
        hover:after:w-0
        ${className}
      `}
    >
      {children}
    </a>
  );
}
