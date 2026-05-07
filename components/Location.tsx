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
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.14, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="location"
      ref={sectionRef}
      style={{ padding: "112px 40px", background: "var(--cream)" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <SectionHeader
          eyebrow="Standort"
          title="Finde uns in Osnabrück"
          subtitle="Unser Club befindet sich im Herzen von Osnabrück. Nach der Aufnahme erhältst du alle Details zu unserem genauen Standort."
        />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", alignItems: "start" }} className="loc-grid">
          {/* Map visual */}
          <div
            className="loc-item"
            style={{
              height: "420px",
              background: "linear-gradient(140deg, var(--lilac-light) 0%, #DDD0EE 100%)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <svg
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
              viewBox="0 0 480 420"
              preserveAspectRatio="xMidYMid slice"
            >
              {/* grid */}
              {[80, 160, 240, 320, 400].map(x => (
                <line key={`vl${x}`} x1={x} y1="0" x2={x} y2="420" stroke="#C0AFD3" strokeWidth="0.6" opacity="0.35" />
              ))}
              {[70, 140, 210, 280, 350].map(y => (
                <line key={`hl${y}`} x1="0" y1={y} x2="480" y2={y} stroke="#C0AFD3" strokeWidth="0.6" opacity="0.35" />
              ))}
              {/* streets */}
              <path d="M0 210 Q240 210 480 210" stroke="rgba(255,255,255,0.7)" strokeWidth="10" fill="none" />
              <path d="M240 0 L240 420"          stroke="rgba(255,255,255,0.7)" strokeWidth="10" fill="none" />
              <path d="M0 140 Q200 150 380 138"  stroke="rgba(255,255,255,0.5)" strokeWidth="6"  fill="none" />
              <path d="M90 0 Q105 210 85 420"    stroke="rgba(255,255,255,0.45)" strokeWidth="5" fill="none" />
              <path d="M0 310 Q240 295 480 312"  stroke="rgba(255,255,255,0.4)" strokeWidth="4"  fill="none" />
              {/* pin */}
              <circle cx="240" cy="210" r="20" fill="var(--lilac)" opacity="0.95" />
              <circle cx="240" cy="210" r="9"  fill="white" />
              <circle cx="240" cy="210" r="4"  fill="var(--lilac)" />
              {/* pulse rings */}
              <circle cx="240" cy="210" r="20" fill="none" stroke="var(--lilac)" strokeWidth="1.5">
                <animate attributeName="r"       values="20;52;20" dur="2.8s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.7;0;0.7" dur="2.8s" repeatCount="indefinite" />
              </circle>
            </svg>
            {/* Label overlay */}
            <div style={{
              position: "absolute", bottom: "20px", left: "20px",
              background: "rgba(49,49,47,0.88)",
              padding: "10px 18px",
              backdropFilter: "blur(8px)",
            }}>
              <p className="font-montserrat" style={{ fontSize: "0.75rem", letterSpacing: "0.14em", color: "rgba(244,241,234,0.85)", textTransform: "uppercase" }}>
                Osnabrück, Niedersachsen
              </p>
            </div>
          </div>

          {/* Info blocks */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {/* Address */}
            <div
              className="loc-item"
              style={{ padding: "28px 32px", background: "var(--lilac-light)", border: "1px solid rgba(192,175,211,0.4)" }}
            >
              <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <MapPin size={17} style={{ color: "var(--lilac)", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <p className="font-playfair" style={{ fontSize: "1.0625rem", color: "var(--charcoal)", marginBottom: "8px", fontWeight: 500 }}>Adresse</p>
                  <p className="font-montserrat" style={{ fontSize: "0.875rem", fontWeight: 300, lineHeight: 1.7, color: "rgba(49,49,47,0.62)" }}>
                    Adresse wird nach Aufnahme bekannt gegeben<br />Osnabrück, Niedersachsen
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div
              className="loc-item"
              style={{ padding: "28px 32px", background: "var(--lilac-light)", border: "1px solid rgba(192,175,211,0.4)" }}
            >
              <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <Clock size={17} style={{ color: "var(--lilac)", flexShrink: 0, marginTop: "2px" }} />
                <div style={{ width: "100%" }}>
                  <p className="font-playfair" style={{ fontSize: "1.0625rem", color: "var(--charcoal)", marginBottom: "16px", fontWeight: 500 }}>Öffnungszeiten</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {hours.map((h, i) => (
                      <div key={i} style={{ display: "flex", justifyContent: "space-between", gap: "16px" }}>
                        <span className="font-montserrat" style={{ fontSize: "0.875rem", fontWeight: 300, color: "rgba(49,49,47,0.6)" }}>{h.day}</span>
                        <span className="font-montserrat" style={{ fontSize: "0.875rem", fontWeight: 500, color: "var(--charcoal)", flexShrink: 0 }}>{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div
              className="loc-item"
              style={{ padding: "28px 32px", background: "var(--lilac-light)", border: "1px solid rgba(192,175,211,0.4)" }}
            >
              <p className="font-playfair" style={{ fontSize: "1.0625rem", color: "var(--charcoal)", marginBottom: "16px", fontWeight: 500 }}>Kontakt</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <a
                  href="mailto:hello@cloudyclub-osnabrueck.de"
                  style={{ display: "flex", gap: "12px", alignItems: "center", color: "rgba(49,49,47,0.62)", textDecoration: "none", transition: "color 0.3s ease" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--lilac)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(49,49,47,0.62)")}
                >
                  <Mail size={15} style={{ color: "var(--lilac)", flexShrink: 0 }} />
                  <span className="font-montserrat" style={{ fontSize: "0.875rem", fontWeight: 300 }}>hello@cloudyclub-osnabrueck.de</span>
                </a>
                <a
                  href="tel:+49541000000"
                  style={{ display: "flex", gap: "12px", alignItems: "center", color: "rgba(49,49,47,0.62)", textDecoration: "none", transition: "color 0.3s ease" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--lilac)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(49,49,47,0.62)")}
                >
                  <Phone size={15} style={{ color: "var(--lilac)", flexShrink: 0 }} />
                  <span className="font-montserrat" style={{ fontSize: "0.875rem", fontWeight: 300 }}>+49 (0)541 · 000 0000</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .loc-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
