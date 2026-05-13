"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, Circle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  "Monatliche Cannabis-Abgabe gemäß § CanG",
  "Zugang zu vereinseigenen Anbauflächen",
  "Exklusive Mitglieder-Events & Workshops",
  "Strain-Atlas mit Terpenprofilen",
  "Prävention & Beratungsangebote",
  "Stimmrecht auf Vereinsversammlungen",
  "Mitglieder-Newsletter & Neuigkeiten",
  "Transparente Kostenstruktur",
];

const requirements = [
  "Mindestalter: 18 Jahre",
  "Hauptwohnsitz in Deutschland",
  "6 Monate nachgewiesener Aufenthalt in Deutschland",
  "Bereitschaft zur Präventionsschulung",
  "Akzeptanz der Vereinssatzung",
];

export default function Membership() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".mem-card",
        { opacity: 0, y: 48 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.18, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 78%", once: true } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="membership"
      ref={sectionRef}
      className="section"
      style={{ background: "var(--bg-surface)" }}
    >
      <div className="section-inner">
        <div className="section-header center">
          <span className="eyebrow">Mitgliedschaft</span>
          <h2 className="font-playfair section-title">Werde Teil des Clubs</h2>
          <p className="section-subtitle">
            Transparent, fair und unkompliziert. Hier siehst du alles, was du über eine Mitgliedschaft im Cloudy Club wissen musst.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "32px" }}>
          {/* Pricing */}
          <div className="mem-card card" style={{ padding: "48px" }}>
            <p className="eyebrow" style={{ marginBottom: "32px" }}>Kosten</p>

            <div style={{ marginBottom: "12px" }}>
              <span className="font-playfair" style={{ fontSize: "3.5rem", color: "var(--cream)", lineHeight: 1, fontWeight: 700 }}>50</span>
              <span className="font-playfair" style={{ fontSize: "1.5rem", color: "var(--cream)", fontWeight: 500 }}>€</span>
            </div>
            <p className="font-montserrat" style={{ fontSize: "0.875rem", fontWeight: 300, color: "var(--text-secondary)", marginBottom: "32px" }}>
              Einmalige Aufnahmegebühr
            </p>

            <div style={{ width: "100%", height: "1px", background: "var(--border)", marginBottom: "32px" }} />

            <div style={{ marginBottom: "12px" }}>
              <span className="font-playfair" style={{ fontSize: "3rem", color: "var(--lilac)", lineHeight: 1, fontWeight: 700 }}>25</span>
              <span className="font-playfair" style={{ fontSize: "1.5rem", color: "var(--lilac)", fontWeight: 500 }}>€</span>
            </div>
            <p className="font-montserrat" style={{ fontSize: "0.875rem", fontWeight: 300, color: "var(--text-secondary)", marginBottom: "32px" }}>
              Pro Monat
            </p>

            <div style={{ width: "100%", height: "1px", background: "var(--border)", marginBottom: "32px" }} />

            <p className="font-montserrat" style={{ fontSize: "0.875rem", fontWeight: 300, lineHeight: 1.8, color: "var(--text-muted)" }}>
              Keine versteckten Kosten. Beiträge dienen ausschließlich dem Vereinsbetrieb und Anbau.
            </p>
          </div>

          {/* Benefits */}
          <div className="mem-card card" style={{ padding: "48px" }}>
            <p className="eyebrow" style={{ marginBottom: "32px" }}>Deine Vorteile</p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "16px" }}>
              {benefits.map((b, i) => (
                <li key={i} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <Check size={18} style={{ color: "var(--sage)", flexShrink: 0, marginTop: "2px" }} />
                  <span className="font-montserrat" style={{ fontSize: "0.9375rem", fontWeight: 300, lineHeight: 1.6, color: "var(--text-primary)" }}>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements + Form */}
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            <div className="mem-card card" style={{ padding: "48px" }}>
              <p className="eyebrow" style={{ marginBottom: "32px" }}>Voraussetzungen</p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "16px" }}>
                {requirements.map((r, i) => (
                  <li key={i} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                    <Circle size={12} fill="var(--lilac)" style={{ color: "var(--lilac)", flexShrink: 0, marginTop: "6px" }} />
                    <span className="font-montserrat" style={{ fontSize: "0.9375rem", fontWeight: 300, lineHeight: 1.6, color: "var(--text-primary)" }}>{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cannanas form placeholder */}
            <div className="mem-card" style={{ 
              background: "var(--lilac)", 
              padding: "48px",
              position: "relative",
              overflow: "hidden"
            }}>
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 100%)", pointerEvents: "none" }} />
              
              <div style={{ position: "relative", zIndex: 1 }}>
                <h3 className="font-playfair" style={{ fontSize: "1.75rem", color: "var(--bg)", fontWeight: 700, marginBottom: "16px" }}>
                  Jetzt bewerben
                </h3>
                <p className="font-montserrat" style={{ fontSize: "0.9375rem", fontWeight: 500, lineHeight: 1.7, color: "rgba(19,19,17,0.7)", marginBottom: "32px" }}>
                  Fülle das Aufnahmeformular aus – wir melden uns innerhalb von 48 Stunden.
                </p>
                <div
                  id="cannanas-embed"
                  style={{
                    minHeight: "120px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(255,255,255,0.2)",
                    border: "1px dashed rgba(19,19,17,0.3)",
                    padding: "24px",
                  }}
                >
                  <p className="font-montserrat" style={{ fontSize: "0.8125rem", color: "rgba(19,19,17,0.6)", textAlign: "center", fontWeight: 600 }}>
                    [Cannanas-Formular wird hier eingebettet]
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
