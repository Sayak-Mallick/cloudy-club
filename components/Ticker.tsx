"use client";

const items = [
  "Sicher",
  "Transparent",
  "Gemeinschaft",
  "§ CanG konform",
  "Osnabrück",
  "Verantwortung",
  "Qualität",
  "Mitglieder",
];

const Diamond = () => (
  <span aria-hidden="true" style={{ color: "var(--lilac)", margin: "0 32px", fontSize: "8px", verticalAlign: "middle" }}>◆</span>
);

export default function Ticker({ inverted = false }: { inverted?: boolean }) {
  // Triplicate so the seam is never visible
  const repeated = [...items, ...items, ...items];

  return (
    <div
      aria-hidden="true"
      style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        overflow: "hidden",
        padding: "18px 0",
        background: inverted ? "var(--bg-elevated)" : "transparent",
      }}
    >
      <div
        className={inverted ? "ticker-inner-rev" : "ticker-inner"}
        style={{
          display: "flex",
          alignItems: "center",
          width: "max-content",
          willChange: "transform",
        }}
      >
        {repeated.map((item, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center" }}>
            <span
              className="font-montserrat"
              style={{
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                color: "var(--text-secondary)",
                whiteSpace: "nowrap",
              }}
            >
              {item}
            </span>
            <Diamond />
          </span>
        ))}
      </div>
    </div>
  );
}
