"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeader from "./SectionHeader";
import { MapPin, Clock, Mail, Phone } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const hours = [
  { day: "Montag – Donnerstag", time: "16:00 – 20:00" },
  { day: "Freitag",             time: "14:00 – 22:00" },
  { day: "Samstag",             time: "12:00 – 22:00" },
  { day: "Sonntag",             time: "Geschlossen"   },
];

export default function Location() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".loc-item",
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.16, ease: "power3.out",
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
      style={{ background: "var(--bg-surface)" }}
    >
      <div className="section-inner">
        <SectionHeader
          eyebrow="Standort"
          title="Finde uns in Osnabrück"
          subtitle="Unser Club befindet sich im Herzen von Osnabrück. Nach der Aufnahme erhältst du alle Details zu unserem genauen Standort."
          center={true}
        />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "start" }} className="loc-grid">
          {/* Map visual */}
          <div
            className="loc-item card"
            style={{
              height: "480px",
              background: "linear-gradient(140deg, rgba(192,175,211,0.08) 0%, rgba(192,175,211,0.02) 100%)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <svg
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
              viewBox="0 0 480 480"
              preserveAspectRatio="xMidYMid slice"
            >
              {/* grid */}
              {[80, 160, 240, 320, 400].map(x => (
                <line key={`vl${x}`} x1={x} y1="0" x2={x} y2="480" stroke="#C0AFD3" strokeWidth="0.6" opacity="0.15" />
              ))}
              {[80, 160, 240, 320, 400].map(y => (
                <line key={`hl${y}`} x1="0" y1={y} x2="480" y2={y} stroke="#C0AFD3" strokeWidth="0.6" opacity="0.15" />
              ))}
              {/* streets */}
              <path d="M0 240 Q240 240 480 240" stroke="rgba(192,175,211,0.2)" strokeWidth="8" fill="none" />
              <path d="M240 0 L240 480"          stroke="rgba(192,175,211,0.2)" strokeWidth="8" fill="none" />
              <path d="M0 160 Q200 170 380 158"  stroke="rgba(192,175,211,0.15)" strokeWidth="6"  fill="none" />
              <path d="M90 0 Q105 240 85 480"    stroke="rgba(192,175,211,0.1)" strokeWidth="4" fill="none" />
              <path d="M0 340 Q240 325 480 342"  stroke="rgba(192,175,211,0.1)" strokeWidth="4"  fill="none" />
              
              {/* map glow */}
              <circle cx="240" cy="240" r="100" fill="url(#mapGlow)" opacity="0.5" />
              <defs>
                <radialGradient id="mapGlow">
                  <stop offset="0%" stopColor="#C0AFD3" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#C0AFD3" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* pin */}
              <circle cx="240" cy="240" r="16" fill="var(--lilac)" opacity="0.95" />
              <circle cx="240" cy="240" r="6"  fill="var(--bg)" />
              {/* pulse rings */}
              <circle cx="240" cy="240" r="16" fill="none" stroke="var(--lilac)" strokeWidth="1.5">
                <animate attributeName="r"       values="16;48;16" dur="3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.8;0;0.8" dur="3s" repeatCount="indefinite" />
              </circle>
            </svg>
            {/* Label overlay */}
            <div style={{
              position: "absolute", bottom: "24px", left: "24px",
              background: "rgba(19,19,17,0.85)",
              padding: "12px 20px",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(192,175,211,0.2)"
            }}>
              <p className="font-montserrat" style={{ fontSize: "0.75rem", letterSpacing: "0.15em", color: "var(--cream)", textTransform: "uppercase", fontWeight: 500 }}>
                Osnabrück, Niedersachsen
              </p>
            </div>
          </div>

          {/* Info blocks */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {/* Address */}
            <div
              className="loc-item card"
              style={{ padding: "32px 40px", background: "transparent" }}
            >
              <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(192,175,211,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <MapPin size={18} style={{ color: "var(--lilac)" }} />
                </div>
                <div>
                  <p className="font-playfair" style={{ fontSize: "1.125rem", color: "var(--cream)", marginBottom: "8px", fontWeight: 600 }}>Adresse</p>
                  <p className="font-montserrat" style={{ fontSize: "0.9375rem", fontWeight: 300, lineHeight: 1.8, color: "var(--text-secondary)" }}>
                    Adresse wird nach Aufnahme bekannt gegeben<br />Osnabrück, Niedersachsen
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div
              className="loc-item card"
              style={{ padding: "32px 40px", background: "transparent" }}
            >
              <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(192,175,211,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Clock size={18} style={{ color: "var(--lilac)" }} />
                </div>
                <div style={{ width: "100%" }}>
                  <p className="font-playfair" style={{ fontSize: "1.125rem", color: "var(--cream)", marginBottom: "16px", fontWeight: 600 }}>Öffnungszeiten</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    {hours.map((h, i) => (
                      <div key={i} style={{ display: "flex", justifyContent: "space-between", gap: "16px", borderBottom: i !== hours.length - 1 ? "1px dashed rgba(192,175,211,0.1)" : "none", paddingBottom: i !== hours.length - 1 ? "12px" : "0" }}>
                        <span className="font-montserrat" style={{ fontSize: "0.875rem", fontWeight: 300, color: "var(--text-secondary)" }}>{h.day}</span>
                        <span className="font-montserrat" style={{ fontSize: "0.875rem", fontWeight: 500, color: "var(--cream)", flexShrink: 0 }}>{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div
              className="loc-item card"
              style={{ padding: "32px 40px", background: "transparent" }}
            >
              <p className="font-playfair" style={{ fontSize: "1.125rem", color: "var(--cream)", marginBottom: "20px", fontWeight: 600 }}>Kontakt</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <a
                  href="mailto:hello@cloudyclub-osnabrueck.de"
                  style={{ display: "flex", gap: "16px", alignItems: "center", color: "var(--text-secondary)", textDecoration: "none", transition: "color 0.3s ease" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--lilac)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
                >
                  <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "rgba(192,175,211,0.05)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Mail size={14} style={{ color: "var(--lilac)" }} />
                  </div>
                  <span className="font-montserrat" style={{ fontSize: "0.9375rem", fontWeight: 300 }}>hello@cloudyclub-osnabrueck.de</span>
                </a>
                <a
                  href="tel:+49541000000"
                  style={{ display: "flex", gap: "16px", alignItems: "center", color: "var(--text-secondary)", textDecoration: "none", transition: "color 0.3s ease" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--lilac)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
                >
                  <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "rgba(192,175,211,0.05)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Phone size={14} style={{ color: "var(--lilac)" }} />
                  </div>
                  <span className="font-montserrat" style={{ fontSize: "0.9375rem", fontWeight: 300 }}>+49 (0)541 · 000 0000</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .loc-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
