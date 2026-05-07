interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  center?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  light = false,
  center = true,
}: SectionHeaderProps) {
  return (
    <div className={center ? "text-center" : "text-left"} style={{ marginBottom: "56px" }}>
      {eyebrow && (
        <p
          className="eyebrow"
          style={{
            color: light ? "var(--lilac)" : "var(--sage)",
            marginBottom: "16px",
          }}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className="font-playfair"
        style={{
          fontSize: "clamp(2rem, 4vw, 2.75rem)",
          lineHeight: 1.2,
          fontWeight: 500,
          color: light ? "var(--cream)" : "var(--charcoal)",
        }}
      >
        {title}
      </h2>
      <div
        className="divider"
        style={{
          marginTop: "20px",
          marginBottom: subtitle ? "20px" : "0",
          marginLeft: center ? "auto" : "0",
          marginRight: center ? "auto" : "0",
        }}
      />
      {subtitle && (
        <p
          className="font-montserrat"
          style={{
            fontSize: "0.9375rem",
            fontWeight: 300,
            lineHeight: 1.75,
            color: light ? "rgba(244,241,234,0.65)" : "rgba(49,49,47,0.6)",
            maxWidth: "560px",
            marginLeft: center ? "auto" : "0",
            marginRight: center ? "auto" : "0",
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
