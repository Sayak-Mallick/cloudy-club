"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AlertTriangle, BookOpen, MessageCircle, Clock } from "lucide-react";
import { COMPLIANCE_FACTS } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

const topics = [
  {
    icon: AlertTriangle,
    title: "Risiken kennen",
    text: "Offene Aufklärung über Risiken, Wechselwirkungen und sicheren Konsum ohne Verurteilung.",
  },
  {
    icon: BookOpen,
    title: "Set & Setting",
    text: "Die richtige Umgebung und Einstellung machen den Unterschied. Wir klären auf, was das bedeutet.",
  },
  {
    icon: Clock,
    title: "Schutzalter 18+",
    text: "Keine Mitglieder unter 18 Jahren. Aktive Präventionsarbeit ist Teil unserer Vereinskultur.",
  },
  {
    icon: MessageCircle,
    title: "Offene Beratung",
    text: "Vertrauliche Beratung zu Dosierung, Risiken und Gesundheitsfragen für alle Mitglieder.",
  },
];

export default function Prevention() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(".prev-item",
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 82%", once: true },
        }
      );
      gsap.fromTo(".prev-stat",
        { opacity: 0, x: 24 },
        {
          opacity: 1, x: 0, duration: 0.7, stagger: 0.1, ease: "power2.out",
          scrollTrigger: { trigger: ".prev-stats", start: "top 80%", once: true },
        }
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
        {/* Left: topics — no separator lines per item */}
        <div>
          <div className="section-header" style={{ marginBottom: "40px" }}>
            <span className="eyebrow">Prävention</span>
            <h2 className="font-playfair section-title">
              Genuss mit{" "}
              <span style={{ fontStyle: "italic", color: "var(--lilac)" }}>Verantwortung.</span>
            </h2>
            <p className="section-subtitle">
              Wir glauben an informierten, bewussten Konsum. Prävention ist kein Pflichtprogramm —
              sondern gelebte Vereinskultur.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px" }}>
            {topics.map((t, i) => (
              <div
                key={i}
                className="prev-item"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  padding: "24px",
                  background: "var(--bg-elevated)",
                  border: "1px solid var(--border)",
                  borderRadius: "2px",
                }}
              >
                <div style={{
                  width: 40, height: 40,
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "2px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <t.icon size={16} style={{ color: "var(--lilac)" }} />
                </div>
                <h3 className="font-playfair" style={{ fontSize: "1rem", color: "var(--cream)", fontWeight: 600, lineHeight: 1.2 }}>
                  {t.title}
                </h3>
                <p className="font-montserrat" style={{ fontSize: "0.8125rem", fontWeight: 300, lineHeight: 1.8, color: "var(--text-secondary)" }}>
                  {t.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: compliance stat blocks — shared from content.ts */}
        <div className="prev-stats" style={{ display: "flex", flexDirection: "column", gap: "16px", paddingTop: "40px" }}>
          {COMPLIANCE_FACTS.map((s, i) => (
            <div
              key={i}
              className="prev-stat"
              style={{
                padding: "36px 32px",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "2px",
                transition: "border-color 0.25s ease",
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--border-hover)")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
            >
              <p
                className="font-playfair"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  color: "var(--cream)",
                  lineHeight: 1,
                  fontWeight: 700,
                  marginBottom: "16px",
                }}
              >
                {s.value}
              </p>
              <p
                className="font-montserrat"
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--lilac)",
                  fontWeight: 600,
                  marginBottom: "8px",
                }}
              >
                {s.label}
              </p>
              <p
                className="font-montserrat"
                style={{
                  fontSize: "0.8125rem",
                  fontWeight: 300,
                  color: "var(--text-muted)",
                  lineHeight: 1.6,
                }}
              >
                {s.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .prev-grid { grid-template-columns: 1fr !important; gap: 56px !important; }
          .prev-stats { padding-top: 0 !important; }
        }
        @media (max-width: 560px) {
          .prev-grid > div > div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
