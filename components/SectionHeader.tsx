interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = true,
}: SectionHeaderProps) {
  return (
    <div className={`section-header ${center ? "center" : ""}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="section-title">{title}</h2>
      <div className={`divider ${center ? "divider-center" : ""}`} />
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
