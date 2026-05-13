"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AlertTriangle, BookOpen, MessageCircle, Clock } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const topics = [
  { icon: AlertTriangle,  title: "Risiken kennen",    text: "Ehrliche Aufklärung über Risiken, Wechselwirkungen und sichere Konsumsituationen. Wir sprechen offen – ohne zu urteilen." },
  { icon: BookOpen,       title: "Set & Setting",     text: "Die richtige Umgebung, der richtige Mindset – erfahre, wie du dein Erlebnis positiv gestaltest und Risiken minimierst." },
  { icon: Clock,          title: "Schutzalter 18+",   text: "Jugendschutz hat absolute Priorität. Wir nehmen keine Mitglieder unter 18 Jahren auf und sensibilisieren aktiv für Prävention." },
  { icon: MessageCircle,  title: "Offene Beratung",   text: "Du hast Fragen zu Dosierung, Konsummethoden oder gesundheitlichen Bedenken? Wir sind immer ansprechbar – vertraulich." },
];

const stats = [
  { value: "18+",   label: "Mindestalter für alle Mitglieder",  bg: "rgba(192,175,211,0.08)", color: "var(--lilac)", border: "1px solid rgba(192,175,211,0.2)" },
  { value: "0‰",    label: "Konsum im Straßenverkehr",          bg: "rgba(139,152,128,0.08)", color: "var(--sage)", border: "1px solid rgba(139,152,128,0.2)" },
  { value: "§CanG", label: "Vollständig legal & konform",       bg: "rgba(244,241,234,0.03)", color: "var(--cream)", border: "1px solid rgba(244,241,234,0.1)" },
];

export default function Prevention() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".prev-item",
        { opacity: 0, x: -32 },
        { opacity: 1, x: 0, duration: 0.8, stagger: 0.14, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true } }
      );
      gsap.fromTo(".prev-stat",
        { opacity: 0, y: 32 },
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
      className="section"
      style={{ background: "var(--bg)" }}
    >
      <div className="section-inner" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "100px", alignItems: "start" }} className2="prev-grid">
        {/* Left */}
        <div>
          <div className="section-header" style={{ marginBottom: "48px" }}>
            <span className="eyebrow">Prävention</span>
            <h2 className="font-playfair section-title">Genuss mit Verantwortung</h2>
            <p className="section-subtitle">
              Wir glauben an informierten, bewussten Konsum. Prävention ist keine Einschränkung – sie ist der Schlüssel zu einem positiven Erlebnis.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {topics.map((t, i) => (
              <div
                key={i}
                className="prev-item"
                style={{
                  display: "flex",
                  gap: "20px",
                  alignItems: "flex-start",
                  padding: "24px",
                  borderLeft: "2px solid var(--lilac)",
                  background: "linear-gradient(90deg, rgba(192,175,211,0.05) 0%, transparent 100%)",
                }}
              >
                <t.icon size={20} style={{ color: "var(--lilac)", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <h3 className="font-playfair" style={{ fontSize: "1.125rem", color: "var(--cream)", marginBottom: "8px", fontWeight: 600 }}>{t.title}</h3>
                  <p className="font-montserrat" style={{ fontSize: "0.875rem", fontWeight: 300, lineHeight: 1.8, color: "var(--text-secondary)" }}>{t.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: stat blocks */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px", paddingTop: "32px" }}>
          {stats.map((s, i) => (
            <div
              key={i}
              className="prev-stat"
              style={{
                padding: "48px 40px",
                textAlign: "center",
                background: s.bg,
                border: s.border,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div style={{
                position: "absolute", top: 0, right: 0, bottom: 0, left: 0,
                background: `linear-gradient(135deg, transparent 0%, ${s.bg} 100%)`,
                opacity: 0.5,
              }} />
              <div style={{ position: "relative", zIndex: 1 }}>
                <p className="font-playfair" style={{ fontSize: "3.5rem", color: s.color, lineHeight: 1, fontWeight: 700 }}>{s.value}</p>
                <p className="font-montserrat" style={{ fontSize: "0.75rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--text-secondary)", marginTop: "16px", fontWeight: 600 }}>{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .prev-grid { grid-template-columns: 1fr !important; gap: 60px !important; }
        }
      `}</style>
    </section>
  );
}
