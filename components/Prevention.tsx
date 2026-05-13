"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AlertTriangle, BookOpen, MessageCircle, Clock } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const topics = [
  { icon: AlertTriangle,  title: "Risiken kennen",    text: "Offene Aufklärung über Risiken, Wechselwirkungen und sicheren Konsum ohne Verurteilung." },
  { icon: BookOpen,       title: "Set & Setting",     text: "Die richtige Umgebung und Einstellung machen den Unterschied. Wir klären auf, was das bedeutet." },
  { icon: Clock,          title: "Schutzalter 18+",   text: "Keine Mitglieder unter 18 Jahren. Aktive Präventionsarbeit ist Teil unserer Vereinskultur." },
  { icon: MessageCircle,  title: "Offene Beratung",   text: "Vertrauliche Beratung zu Dosierung, Risiken und Gesundheitsfragen für alle Mitglieder." },
];

const stats = [
  { value: "18+",   label: "Mindestalter für alle Mitglieder" },
  { value: "0‰",    label: "Konsum im Straßenverkehr" },
  { value: "§CanG", label: "Vollständig legal & konform" },
];

export default function Prevention() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(".prev-item",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 82%", once: true } }
      );
      gsap.fromTo(".prev-stat",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 78%", once: true } }
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
      <div
        className="section-inner prev-grid"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "96px", alignItems: "start" }}
      >
        {/* Left: topics */}
        <div>
          <div className="section-header" style={{ marginBottom: "40px" }}>
            <span className="eyebrow">Prävention</span>
            <h2 className="font-playfair section-title">Genuss mit Verantwortung.</h2>
            <p className="section-subtitle">
              Wir glauben an informierten, bewussten Konsum. Prävention ist der Schlüssel zu einem positiven Erlebnis.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {topics.map((t, i) => (
              <div
                key={i}
                className="prev-item"
                style={{
                  display: "flex",
                  gap: "18px",
                  alignItems: "flex-start",
                  padding: "24px 0",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <t.icon size={18} style={{ color: "var(--lilac)", flexShrink: 0, marginTop: "3px" }} />
                <div>
                  <h3 className="font-playfair" style={{ fontSize: "1.0625rem", color: "var(--cream)", marginBottom: "6px", fontWeight: 600 }}>
                    {t.title}
                  </h3>
                  <p className="font-montserrat" style={{ fontSize: "0.875rem", fontWeight: 300, lineHeight: 1.8, color: "var(--text-secondary)" }}>
                    {t.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: stat blocks */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", paddingTop: "40px" }}>
          {stats.map((s, i) => (
            <div
              key={i}
              className="prev-stat card"
              style={{
                padding: "36px 32px",
                background: "var(--bg-card)",
              }}
            >
              <p className="font-playfair" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--cream)", lineHeight: 1, fontWeight: 700 }}>
                {s.value}
              </p>
              <div style={{ width: "24px", height: "1px", background: "var(--lilac)", margin: "14px 0 12px" }} />
              <p className="font-montserrat" style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-secondary)", fontWeight: 600 }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .prev-grid { grid-template-columns: 1fr !important; gap: 56px !important; }
        }
      `}</style>
    </section>
  );
}
