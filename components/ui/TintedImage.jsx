import Image from "next/image";

/**
 * Confirmed hidden technique (design-audit.md, Imagery Style Guide):
 * photos sit under a low-opacity color tint that nudges them toward the
 * palette instead of a plain image. Confirmed instances: tan (#E3D9CA) at
 * ~11-18% opacity over warmer photos, white (#FFFFFF) at ~11% opacity over
 * the "Who We Help" photos. Pass tint="tan" | "white" | "none" per image.
 */
const TINTS = {
  tan: "bg-greige/[0.14]",          // confirmed #e3d9ca24 (~14%) — hero right, empathy, honoring
  "tan-light": "bg-greige/[0.07]", // confirmed #e3d9ca12 (~7%)  — hero left image only
  white: "bg-stone/[0.11]",     // confirmed #ffffff1c (~11%) — Who We Help photos
  none: "",
};

export default function TintedImage({
  src,
  alt,
  tint = "tan",
  className = "",
  sizes = "100vw",
  priority = false,
  objectPosition = "center",
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        style={{ objectPosition }}
        className="object-cover"
      />
      {tint !== "none" && (
        <div className={`pointer-events-none absolute inset-0 ${TINTS[tint]}`} />
      )}
    </div>
  );
}
