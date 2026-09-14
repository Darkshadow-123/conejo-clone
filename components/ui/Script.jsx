/**
 * Inline script-font emphasis word/glyph used inside headings
 * (e.g. "thrive", "help", "expertise", the "&" in "Honoring... & helping").
 * Inherits font-size from its parent heading by design (confirmed) -
 * do not set a fixed size here.
 */
export default function Script({ children, className = "" }) {
  return <span className={`font-script text-rust ${className}`}>{children}</span>;
}
