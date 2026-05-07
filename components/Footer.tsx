"use client";

import { Mail, ExternalLink } from "lucide-react";

const footerLinks = {
  Club: [
    { label: "Über uns",       href: "#about" },
    { label: "Anbau",          href: "#growing" },
    { label: "Prävention",     href: "#prevention" },
    { label: "Mitgliedschaft", href: "#membership" },
  ],
  Info: [
    { label: "FAQ",           href: "#faq" },
    { label: "Standort",      href: "#location" },
    { label: "News",          href: "#news" },
    { label: "Impressum",     href: "/impressum" },
    { label: "Datenschutz",   href: "/datenschutz" },
  ],
};

export default function Footer() {
  const scrollTo = (href: string) => {
    if (href.startsWith("#")) {
      document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = href;
    }
  };

  return (
    <footer style={{ background: "var(--charcoal)" }}>
      {/* Main footer content */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 40px 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "64px" }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "24px" }}>
              <svg width="40" height="40" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="47" fill="none" stroke="#C0AFD3" strokeWidth="2.5" />
                <ellipse cx="50" cy="58" rx="27" ry="17" fill="#C0AFD3" opacity="0.5"  />
                <ellipse cx="37" cy="53" rx="19" ry="15" fill="#C0AFD3" opacity="0.7"  />
                <ellipse cx="63" cy="55" rx="17" ry="13" fill="#C0AFD3" opacity="0.62" />
                <ellipse cx="50" cy="46" rx="15" ry="13" fill="#C0AFD3" opacity="0.42" />
              </svg>
              <div style={{ lineHeight: 1 }}>
                <div className="font-playfair" style={{ fontSize: "1rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--cream)", lineHeight: 1.1 }}>Cloudy</div>
                <div className="font-montserrat" style={{ fontSize: "0.625rem", letterSpacing: "0.38em", textTransform: "uppercase", color: "var(--lilac)", marginTop: "4px" }}>Club</div>
              </div>
            </div>
            <p className="font-montserrat" style={{ fontSize: "0.875rem", fontWeight: 300, lineHeight: 1.8, color: "rgba(244,241,234,0.48)", maxWidth: "300px", marginBottom: "32px" }}>
              Cannabis Social Club Osnabrück e.V. – Gemeinsam, verantwortungsbewusst und transparent. Für ein entspanntes Miteinander in Osnabrück.
            </p>
            <div style={{ display: "flex", gap: "12px" }}>
              {[
                { href: "https://instagram.com", icon: <ExternalLink size={16} />, label: "Instagram" },
                { href: "mailto:hello@cloudyclub-osnabrueck.de", icon: <Mail size={16} />, label: "Mail" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  aria-label={s.label}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  style={{
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "rgba(244,241,234,0.5)",
                    textDecoration: "none",
                    transition: "color 0.3s ease, border-color 0.3s ease",
                  }}
                  onMouseEnter={e => { (e.currentTarget.style.color = "var(--lilac)"); (e.currentTarget.style.borderColor = "var(--lilac)"); }}
                  onMouseLeave={e => { (e.currentTarget.style.color = "rgba(244,241,234,0.5)"); (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"); }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p className="eyebrow" style={{ color: "var(--lilac)", marginBottom: "24px" }}>{group}</p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                {links.map(link => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="font-montserrat"
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        fontSize: "0.875rem",
                        fontWeight: 300,
                        color: "rgba(244,241,234,0.48)",
                        padding: 0,
                        transition: "color 0.3s ease",
                      }}
                      onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "rgba(244,241,234,0.9)")}
                      onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "rgba(244,241,234,0.48)")}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "20px 40px",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "12px",
      }}>
        <p className="font-montserrat" style={{ fontSize: "0.75rem", fontWeight: 300, color: "rgba(244,241,234,0.28)" }}>
          © {new Date().getFullYear()} Cloudy Club Osnabrück e.V. — Alle Rechte vorbehalten.
        </p>
        <p className="font-montserrat" style={{ fontSize: "0.75rem", fontWeight: 300, color: "rgba(244,241,234,0.28)" }}>
          Nur für Mitglieder ab 18 Jahren. Nicht öffentlich zugänglich.
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 40px !important; }
          .footer-grid > div:first-child { grid-column: 1 / -1; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
