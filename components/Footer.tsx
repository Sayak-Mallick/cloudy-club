"use client";

import { Mail } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  CLUB: [
    { label: "Über uns",       href: "/about" },
    { label: "Anbau",          href: "/growing" },
    { label: "Prävention",     href: "/prevention" },
    { label: "Mitgliedschaft", href: "/membership" },
  ],
  INFO: [
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
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "96px 40px 56px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "80px" }} className="footer-grid">

          {/* Brand column */}
          <div>
            <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "10px", textDecoration: "none", marginBottom: "24px" }}>
              <svg width="36" height="36" viewBox="0 0 100 100" aria-hidden="true">
                <circle cx="50" cy="50" r="47" fill="none" stroke="#C0AFD3" strokeWidth="2.5" />
                <ellipse cx="50" cy="58" rx="27" ry="17" fill="#C0AFD3" opacity="0.5" />
                <ellipse cx="37" cy="53" rx="19" ry="15" fill="#C0AFD3" opacity="0.7" />
                <ellipse cx="63" cy="55" rx="17" ry="13" fill="#C0AFD3" opacity="0.62" />
                <ellipse cx="50" cy="46" rx="15" ry="13" fill="#C0AFD3" opacity="0.42" />
              </svg>
              <div style={{ lineHeight: 1 }}>
                <div className="font-playfair" style={{ fontSize: "1.0625rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--cream)", lineHeight: 1.1, fontWeight: 600 }}>Cloudy</div>
                <div className="font-montserrat" style={{ fontSize: "0.5625rem", letterSpacing: "0.38em", textTransform: "uppercase", color: "var(--lilac)", marginTop: "3px", fontWeight: 500 }}>Club</div>
              </div>
            </Link>

            <p className="font-montserrat" style={{ fontSize: "0.875rem", fontWeight: 300, lineHeight: 1.8, color: "var(--text-secondary)", maxWidth: "300px", marginBottom: "32px" }}>
              Dein Zuhause für gemeinsamen Anbau und verantwortungsvollen Konsum in Osnabrück.
            </p>

            <div style={{ display: "flex", gap: "12px" }}>
              {[
                { href: "https://instagram.com", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>, label: "Instagram" },
                { href: "mailto:hello@cloudyclub-osnabrueck.de", icon: <Mail size={16} />, label: "E-Mail" },
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
                    border: "1px solid var(--border)",
                    borderRadius: "2px",
                    color: "var(--lilac)",
                    textDecoration: "none",
                    transition: "background 0.2s ease, border-color 0.2s ease, color 0.2s ease",
                    background: "transparent",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = "var(--lilac)";
                    e.currentTarget.style.borderColor = "var(--lilac)";
                    e.currentTarget.style.color = "var(--bg)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderColor = "var(--border)";
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
              <p className="font-montserrat" style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.32em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "24px" }}>
                {group}
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
                {links.map(link => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-montserrat"
                      style={{
                        textDecoration: "none",
                        fontSize: "0.875rem",
                        fontWeight: 300,
                        color: "var(--text-secondary)",
                        transition: "color 0.2s ease",
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
      <div style={{ borderTop: "1px solid var(--border)" }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "20px 40px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
        }}>
          <p className="font-montserrat" style={{ fontSize: "12px", fontWeight: 300, color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} Cloudy Club Osnabrück e.V. Alle Rechte vorbehalten.
          </p>
          <p className="font-montserrat" style={{ fontSize: "12px", fontWeight: 300, color: "var(--text-muted)" }}>
            Nur für Mitglieder ab 18 Jahren.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 48px !important; }
          .footer-grid > div:first-child { grid-column: 1 / -1; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
