/**
 * Small uppercase tracked label. Confirmed spec: 15px Muli, line-height
 * 27px, letter-spacing 1.8px (0.12em), uppercase. Reused as-is (not a
 * separate component) for the "Areas of Expertise" list items - see
 * design-audit.md Section 5, item 6.
 */
export default function Eyebrow({ as: Tag = "p", children, className = "" }) {
  return (
    <Tag className={`font-sans text-eyebrow uppercase text-ink ${className}`}>
      {children}
    </Tag>
  );
}
