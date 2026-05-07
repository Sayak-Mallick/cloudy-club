"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeader from "./SectionHeader";
import { AlertTriangle, BookOpen, MessageCircle, Clock } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const topics = [
  { icon: AlertTriangle,  title: "Risiken kennen",    text: "Ehrliche Aufklärung über Risiken, Wechselwirkungen und sichere Konsumsituationen. Wir sprechen offen – ohne zu urteilen." },
  { icon: BookOpen,       title: "Set & Setting",     text: "Die richtige Umgebung, der richtige Mindset – erfahre, wie du dein Erlebnis positiv gestaltest und Risiken minimierst." },
  { icon: Clock,          title: "Schutzalter 18+",   text: "Jugendschutz hat absolute Priorität. Wir nehmen keine Mitglieder unter 18 Jahren auf und sensibilisieren aktiv für Prävention." },
  { icon: MessageCircle,  title: "Offene Beratung",   text: "Du hast Fragen zu Dosierung, Konsummethoden oder gesundheitlichen Bedenken? Wir sind immer ansprechbar – vertraulich." },
];

const stats = [
  { value: "18+",   label: "Mindestalter für alle Mitglieder",  bg: "var(--lilac-light)", color: "var(--lilac)",    labelColor: "rgba(49,49,47,0.6)" },
  { value: "0‰",    label: "Konsum im Straßenverkehr",          bg: "var(--sage)",         color: "var(--cream)",   labelColor: "rgba(244,241,234,0.7)" },
  { value: "§CanG", label: "Vollständig legal & konform",       bg: "var(--charcoal)",     color: "var(--lilac)",   labelColor: "rgba(244,241,234,0.55)" },
];

export default function Prevention() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".prev-item",
        { opacity: 0, x: -28 },
        { opacity: 1, x: 0, duration: 0.8, stagger: 0.14, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true } }
      );
      gsap.fromTo(".prev-stat",
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="prevention"
      ref={sectionRef}
      style={{ padding: "112px 40px", background: "var(--cream)" }}
    >
      <div
        style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}
        className="prev-grid"
      >
        {/* Left */}
        <div>
          <SectionHeader
            eyebrow="Prävention"
            title="Genuss mit Verantwortung"
            subtitle="Wir glauben an informierten, bewussten Konsum. Prävention ist keine Einschränkung – sie ist der Schlüssel zu einem positiven Erlebnis."
            center={false}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            {topics.map((t, i) => (
              <div
                key={i}
                className="prev-item"
                style={{
                  display: "flex",
                  gap: "16px",
                  alignItems: "flex-start",
                  padding: "20px",
                  borderLeft: "3px solid var(--lilac)",
                  background: "transparent",
                  transition: "background 0.3s ease",
                  marginBottom: "8px",
                  cursor: "default",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "var(--lilac-light)")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
              >
                <t.icon size={17} style={{ color: "var(--lilac)", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <h3 className="font-playfair" style={{ fontSize: "1.0625rem", color: "var(--charcoal)", marginBottom: "6px", fontWeight: 500 }}>{t.title}</h3>
                  <p className="font-montserrat" style={{ fontSize: "0.875rem", fontWeight: 300, lineHeight: 1.75, color: "rgba(49,49,47,0.62)" }}>{t.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: stat blocks */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", paddingTop: "24px" }}>
          {stats.map((s, i) => (
            <div
              key={i}
              className="prev-stat"
              style={{
                padding: "40px 36px",
                textAlign: "center",
                background: s.bg,
                border: i === 0 ? "1px solid rgba(192,175,211,0.5)" : "none",
              }}
            >
              <p className="font-playfair" style={{ fontSize: "3.25rem", color: s.color, lineHeight: 1, fontWeight: 600 }}>{s.value}</p>
              <p className="font-montserrat" style={{ fontSize: "0.6875rem", letterSpacing: "0.2em", textTransform: "uppercase", color: s.labelColor, marginTop: "10px" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .prev-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
