"use client";

import { Mail, ExternalLink } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  Club: [
    { label: "Über uns",       href: "/about" },
    { label: "Anbau",          href: "/growing" },
    { label: "Prävention",     href: "/prevention" },
    { label: "Mitgliedschaft", href: "/membership" },
  ],
  Info: [
    { label: "FAQ",           href: "/faq" },
    { label: "Standort",      href: "/location" },
    { label: "News",          href: "/news" },
    { label: "Impressum",     href: "/impressum" },
    { label: "Datenschutz",   href: "/datenschutz" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
      {/* Main footer content */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "100px 40px 60px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "80px" }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "32px" }}>
              <svg width="48" height="48" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="47" fill="none" stroke="#C0AFD3" strokeWidth="2.5" />
                <ellipse cx="50" cy="58" rx="27" ry="17" fill="#C0AFD3" opacity="0.5"  />
                <ellipse cx="37" cy="53" rx="19" ry="15" fill="#C0AFD3" opacity="0.7"  />
                <ellipse cx="63" cy="55" rx="17" ry="13" fill="#C0AFD3" opacity="0.62" />
                <ellipse cx="50" cy="46" rx="15" ry="13" fill="#C0AFD3" opacity="0.42" />
              </svg>
              <div style={{ lineHeight: 1 }}>
                <div className="font-playfair" style={{ fontSize: "1.25rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--cream)", lineHeight: 1.1, fontWeight: 600 }}>Cloudy</div>
                <div className="font-montserrat" style={{ fontSize: "0.75rem", letterSpacing: "0.38em", textTransform: "uppercase", color: "var(--lilac)", marginTop: "4px", fontWeight: 500 }}>Club</div>
              </div>
            </div>
            <p className="font-montserrat" style={{ fontSize: "0.9375rem", fontWeight: 300, lineHeight: 1.8, color: "var(--text-secondary)", maxWidth: "340px", marginBottom: "40px" }}>
              Cannabis Social Club Osnabrück e.V. – Gemeinsam, verantwortungsbewusst und transparent. Für ein entspanntes Miteinander in Osnabrück.
            </p>
            <div style={{ display: "flex", gap: "16px" }}>
              {[
                { href: "https://instagram.com", icon: <ExternalLink size={18} />, label: "Instagram" },
                { href: "mailto:hello@cloudyclub-osnabrueck.de", icon: <Mail size={18} />, label: "Mail" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  aria-label={s.label}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  style={{
                    width: "48px",
                    height: "48px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid rgba(192,175,211,0.2)",
                    color: "var(--lilac)",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    background: "rgba(192,175,211,0.05)",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = "var(--lilac)";
                    e.currentTarget.style.color = "var(--bg)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = "rgba(192,175,211,0.05)";
                    e.currentTarget.style.color = "var(--lilac)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p className="eyebrow" style={{ marginBottom: "32px" }}>{group}</p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "16px" }}>
                {links.map(link => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-montserrat"
                      style={{
                        textDecoration: "none",
                        fontSize: "0.9375rem",
                        fontWeight: 300,
                        color: "var(--text-secondary)",
                        transition: "color 0.3s ease",
                      }}
                      onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "var(--cream)")}
                      onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "var(--text-secondary)")}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: "1px solid var(--border)",
        background: "var(--bg-surface)",
      }}>
        <div style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "24px 40px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
        }}>
          <p className="font-montserrat" style={{ fontSize: "0.8125rem", fontWeight: 300, color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} Cloudy Club Osnabrück e.V. — Alle Rechte vorbehalten.
          </p>
          <p className="font-montserrat" style={{ fontSize: "0.8125rem", fontWeight: 300, color: "var(--text-muted)" }}>
            Nur für Mitglieder ab 18 Jahren. Nicht öffentlich zugänglich.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 60px !important; }
          .footer-grid > div:first-child { grid-column: 1 / -1; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
