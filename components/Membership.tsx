"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeader from "./SectionHeader";
import { Check } from "lucide-react";

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

const cardBase: React.CSSProperties = {
  background: "rgba(192,175,211,0.08)",
  border: "1px solid rgba(192,175,211,0.22)",
  padding: "40px",
};

export default function Membership() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".mem-card",
        { opacity: 0, y: 44 },
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
      style={{ padding: "112px 40px", background: "var(--charcoal)" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <SectionHeader
          eyebrow="Mitgliedschaft"
          title="Werde Teil des Clubs"
          subtitle="Transparent, fair und unkompliziert. Hier siehst du alles, was du über eine Mitgliedschaft im Cloudy Club wissen musst."
          light
        />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
          {/* Pricing */}
          <div className="mem-card" style={cardBase}>
            <p className="eyebrow" style={{ color: "var(--lilac)", marginBottom: "28px" }}>Kosten</p>

            <div style={{ marginBottom: "8px" }}>
              <span className="font-playfair" style={{ fontSize: "3rem", color: "var(--cream)", lineHeight: 1 }}>50</span>
              <span className="font-playfair" style={{ fontSize: "1.375rem", color: "var(--cream)" }}>€</span>
            </div>
            <p className="font-montserrat" style={{ fontSize: "0.8125rem", fontWeight: 300, color: "rgba(244,241,234,0.45)", marginBottom: "28px" }}>
              Einmalige Aufnahmegebühr
            </p>

            <div style={{ width: "100%", height: "1px", background: "rgba(255,255,255,0.1)", marginBottom: "28px" }} />

            <div style={{ marginBottom: "8px" }}>
              <span className="font-playfair" style={{ fontSize: "2.5rem", color: "var(--lilac)", lineHeight: 1 }}>25</span>
              <span className="font-playfair" style={{ fontSize: "1.25rem", color: "var(--lilac)" }}>€</span>
            </div>
            <p className="font-montserrat" style={{ fontSize: "0.8125rem", fontWeight: 300, color: "rgba(244,241,234,0.45)", marginBottom: "28px" }}>
              Pro Monat
            </p>

            <div style={{ width: "100%", height: "1px", background: "rgba(255,255,255,0.1)", marginBottom: "28px" }} />

            <p className="font-montserrat" style={{ fontSize: "0.875rem", fontWeight: 300, lineHeight: 1.75, color: "rgba(244,241,234,0.45)" }}>
              Keine versteckten Kosten. Beiträge dienen ausschließlich dem Vereinsbetrieb und Anbau.
            </p>
          </div>

          {/* Benefits */}
          <div className="mem-card" style={cardBase}>
            <p className="eyebrow" style={{ color: "var(--lilac)", marginBottom: "28px" }}>Deine Vorteile</p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
              {benefits.map((b, i) => (
                <li key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <Check size={14} style={{ color: "var(--sage)", flexShrink: 0, marginTop: "3px" }} />
                  <span className="font-montserrat" style={{ fontSize: "0.875rem", fontWeight: 300, lineHeight: 1.6, color: "rgba(244,241,234,0.65)" }}>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements + Form */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div className="mem-card" style={cardBase}>
              <p className="eyebrow" style={{ color: "var(--lilac)", marginBottom: "28px" }}>Voraussetzungen</p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                {requirements.map((r, i) => (
                  <li key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "var(--lilac)", flexShrink: 0, marginTop: "7px" }} />
                    <span className="font-montserrat" style={{ fontSize: "0.875rem", fontWeight: 300, lineHeight: 1.6, color: "rgba(244,241,234,0.65)" }}>{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cannanas form placeholder */}
            <div className="mem-card" style={{ ...cardBase, background: "var(--lilac)", border: "none" }}>
              <h3 className="font-playfair" style={{ fontSize: "1.375rem", color: "var(--charcoal)", fontWeight: 500, marginBottom: "12px" }}>
                Jetzt bewerben
              </h3>
              <p className="font-montserrat" style={{ fontSize: "0.875rem", fontWeight: 300, lineHeight: 1.7, color: "rgba(49,49,47,0.68)", marginBottom: "24px" }}>
                Fülle das Aufnahmeformular aus – wir melden uns innerhalb von 48 Stunden.
              </p>
              <div
                id="cannanas-embed"
                style={{
                  minHeight: "80px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(255,255,255,0.3)",
                  border: "1px dashed rgba(49,49,47,0.25)",
                  padding: "24px",
                }}
              >
                <p className="font-montserrat" style={{ fontSize: "0.75rem", color: "rgba(49,49,47,0.5)", textAlign: "center" }}>
                  [Cannanas-Formular wird hier eingebettet]
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
