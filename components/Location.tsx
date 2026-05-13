"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Clock, Mail, Phone } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const hours = [
  { day: "Mo – Do", time: "16:00 – 20:00" },
  { day: "Freitag", time: "14:00 – 22:00" },
  { day: "Samstag", time: "12:00 – 22:00" },
  { day: "Sonntag", time: "Geschlossen" },
];

export default function Location() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(".loc-visual",
        { opacity: 0, x: -24 },
        { opacity: 1, x: 0, duration: 0.85, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 82%", once: true } }
      );
      gsap.fromTo(".loc-item",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="location"
      ref={sectionRef}
      className="section"
      style={{ background: "var(--bg)" }}
    >
      <div className="section-inner">
        <div className="section-header" style={{ marginBottom: "56px" }}>
          <span className="eyebrow">Standort</span>
          <h2 className="font-playfair section-title">Finde uns in Osnabrück.</h2>
          <p className="section-subtitle">
            Nach der Aufnahme erhältst du alle Details zu unserem genauen Standort in Osnabrück.
          </p>
        </div>

        <div
          className="loc-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "start" }}
        >
          {/* Map visual */}
          <div
            className="loc-visual card"
            style={{
              height: "480px",
              background: "var(--bg-card)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <svg
              aria-hidden="true"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
              viewBox="0 0 480 480"
              preserveAspectRatio="xMidYMid slice"
            >
              {/* Grid lines */}
              {[80, 160, 240, 320, 400].map(x => (
                <line key={`v${x}`} x1={x} y1="0" x2={x} y2="480" stroke="#C0AFD3" strokeWidth="0.5" opacity="0.12" />
              ))}
              {[80, 160, 240, 320, 400].map(y => (
                <line key={`h${y}`} x1="0" y1={y} x2="480" y2={y} stroke="#C0AFD3" strokeWidth="0.5" opacity="0.12" />
              ))}
              {/* Streets */}
              <path d="M0 240 Q240 240 480 240" stroke="rgba(192,175,211,0.18)" strokeWidth="9" fill="none" strokeLinecap="round" />
              <path d="M240 0 L240 480" stroke="rgba(192,175,211,0.18)" strokeWidth="9" fill="none" />
              <path d="M0 158 Q200 168 380 156" stroke="rgba(192,175,211,0.12)" strokeWidth="6" fill="none" strokeLinecap="round" />
              <path d="M88 0 Q104 240 84 480" stroke="rgba(192,175,211,0.08)" strokeWidth="4" fill="none" strokeLinecap="round" />
              <path d="M0 338 Q240 323 480 340" stroke="rgba(192,175,211,0.08)" strokeWidth="4" fill="none" strokeLinecap="round" />
              {/* Glow */}
              <defs>
                <radialGradient id="mapGlow">
                  <stop offset="0%" stopColor="#C0AFD3" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#C0AFD3" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx="240" cy="240" r="90" fill="url(#mapGlow)" />
              {/* Pin */}
              <circle cx="240" cy="240" r="14" fill="var(--lilac)" opacity="0.95" />
              <circle cx="240" cy="240" r="5" fill="var(--bg)" />
              {/* Pulse ring */}
              <circle cx="240" cy="240" r="14" fill="none" stroke="var(--lilac)" strokeWidth="1.5">
                <animate attributeName="r" values="14;44;14" dur="3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.8;0;0.8" dur="3s" repeatCount="indefinite" />
              </circle>
            </svg>

            {/* Location label */}
            <div style={{
              position: "absolute", bottom: "20px", left: "20px",
              background: "rgba(19,19,17,0.82)",
              padding: "10px 18px",
              backdropFilter: "blur(8px)",
              border: "1px solid var(--border)",
              borderRadius: "2px",
            }}>
              <p className="font-montserrat" style={{ fontSize: "11px", letterSpacing: "0.18em", color: "var(--cream)", textTransform: "uppercase", fontWeight: 500 }}>
                Osnabrück, Niedersachsen
              </p>
            </div>
          </div>

          {/* Info blocks */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {/* Address */}
            <div className="loc-item" style={{ padding: "28px 0", borderBottom: "1px solid var(--border)" }}>
              <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <MapPin size={18} style={{ color: "var(--lilac)", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <p className="font-montserrat" style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "10px" }}>
                    Adresse
                  </p>
                  <p className="font-playfair" style={{ fontSize: "1.0625rem", color: "var(--cream)", fontWeight: 600, lineHeight: 1.4 }}>
                    Osnabrück, Niedersachsen
                  </p>
                  <p className="font-montserrat" style={{ fontSize: "0.875rem", fontWeight: 300, color: "var(--text-secondary)", marginTop: "4px" }}>
                    Adresse wird nach Aufnahme bekannt gegeben
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="loc-item" style={{ padding: "28px 0", borderBottom: "1px solid var(--border)" }}>
              <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <Clock size={18} style={{ color: "var(--lilac)", flexShrink: 0, marginTop: "2px" }} />
                <div style={{ width: "100%" }}>
                  <p className="font-montserrat" style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "14px" }}>
                    Öffnungszeiten
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {hours.map((h, i) => (
                      <div key={i} style={{ display: "flex", justifyContent: "space-between", gap: "16px" }}>
                        <span className="font-montserrat" style={{ fontSize: "0.875rem", fontWeight: 300, color: "var(--text-secondary)" }}>
                          {h.day}
                        </span>
                        <span className="font-montserrat" style={{ fontSize: "0.875rem", fontWeight: 500, color: h.time === "Geschlossen" ? "var(--text-muted)" : "var(--cream)", flexShrink: 0 }}>
                          {h.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="loc-item" style={{ padding: "28px 0" }}>
              <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <Mail size={18} style={{ color: "var(--lilac)", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <p className="font-montserrat" style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "14px" }}>
                    Kontakt
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <a
                      href="mailto:hello@cloudyclub-osnabrueck.de"
                      style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--text-secondary)", textDecoration: "none", transition: "color 0.2s ease" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "var(--lilac)")}
                      onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
                    >
                      <Mail size={14} style={{ color: "var(--lilac)", flexShrink: 0 }} />
                      <span className="font-montserrat" style={{ fontSize: "0.875rem", fontWeight: 300 }}>
                        hello@cloudyclub-osnabrueck.de
                      </span>
                    </a>
                    <a
                      href="tel:+49541000000"
                      style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--text-secondary)", textDecoration: "none", transition: "color 0.2s ease" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "var(--lilac)")}
                      onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
                    >
                      <Phone size={14} style={{ color: "var(--lilac)", flexShrink: 0 }} />
                      <span className="font-montserrat" style={{ fontSize: "0.875rem", fontWeight: 300 }}>
                        +49 (0)541 · 000 0000
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .loc-grid { grid-template-columns: 1fr !important; }
          .loc-visual { height: 320px !important; }
        }
      `}</style>
    </section>
  );
}
