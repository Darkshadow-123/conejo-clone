export default function Logo({ className = "", align = "center" }) {
  const isLeft = align === "left";
  return (
    <div className={`flex flex-col ${isLeft ? "items-start text-left" : "items-center text-center"} bg-transparent ${className}`}>
      <span
        className="font-serif font-normal text-slate tracking-tight"
        style={{
          fontSize: "36px",
          letterSpacing: "-0.5px",
          lineHeight: "1.2",
        }}
      >
        Dr. Maya Reynolds, PsyD
      </span>
      <span
        className="font-sans uppercase text-rust tracking-widest"
        style={{
          fontSize: "12px",
          fontWeight: 500,
          letterSpacing: "1.8px",
          marginTop: "3px",
          paddingLeft: "4px",
        }}
      >
        Licensed Clinical Psychologist <br /> &bull; Santa Monica, CA
      </span>
    </div>
  );
}

