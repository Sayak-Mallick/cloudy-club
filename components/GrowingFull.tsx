"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Thermometer, Zap, Droplets,
  Leaf, FlaskConical, ShieldCheck, ArrowRight,
} from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

/* ── Data ──────────────────────────────────────────────── */
const standards = [
  {
    icon: Thermometer,
    title: "Klimakontrolle",
    text: "24/7 überwachte Temperatur und Luftfeuchtigkeit für optimale Wachstumsbedingungen.",
  },
  {
    icon: Zap,
    title: "LED-Technologie",
    text: "Modernste LED Systeme für energieeffizientes und gleichmäßiges Pflanzenwachstum.",
  },
  {
    icon: Droplets,
    title: "Bewässerung",
    text: "Präzise gesteuerte Bewässerungssysteme für die perfekte Nährstoffversorgung.",
  },
  {
    icon: Leaf,
    title: "Organischer Anbau",
    text: "100% biologisch, ohne Pestizide oder synthetische Chemikalien.",
  },
  {
    icon: FlaskConical,
    title: "Laboranalysen",
    text: "Regelmäßige Tests auf Wirkstoffgehalt, Reinheit und Schadstoffe.",
  },
  {
    icon: ShieldCheck,
    title: "Hygiene-Standards",
    text: "Pharmazeutische Hygienestandards für maximale Produktsicherheit.",
  },
];

const steps = [
  {
    num: "01",
    title: "Selektion",
    text: "Sorgfältige Auswahl der besten Genetiken und Phänotypen für unsere Mitglieder.",
  },
  {
    num: "02",
    title: "Anbau",
    text: "Kontrollierter Anbau unter optimalen Bedingungen — von der Keimung bis zur Blüte.",
  },
  {
    num: "03",
    title: "Ernte & Trocknung",
    text: "Schonende Ernte und langsame Trocknung für maximale Terpenentwicklung.",
  },
  {
    num: "04",
    title: "Qualitätsprüfung",
    text: "Unabhängige Laboranalysen bestätigen Reinheit und Wirkstoffgehalt.",
  },
  {
    num: "05",
    title: "Ausgabe",
    text: "Sichere und diskrete Ausgabe an unsere verifizierten Mitglieder.",
  },
];

export default function GrowingFull() {
  const wrapRef       = useRef<HTMLDivElement>(null);
  const std1Ref       = useRef<HTMLHeadingElement>(null);
  const proc1Ref      = useRef<HTMLHeadingElement>(null);
  const sust1Ref      = useRef<HTMLDivElement>(null);
  const ctaRef        = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {

      /* ── Section 1: Standards ── */
      gsap.fromTo(".gf-std-eyebrow",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out",
          scrollTrigger: { trigger: std1Ref.current, start: "top 85%", once: true } }
      );
      gsap.fromTo(std1Ref.current,
        { opacity: 0, y: 22 },
        { opacity: 1, y: 0, duration: 0.75, ease: "power3.out", delay: 0.1,
          scrollTrigger: { trigger: std1Ref.current, start: "top 85%", once: true } }
      );
      gsap.fromTo(".gf-std-sub",
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", delay: 0.2,
          scrollTrigger: { trigger: std1Ref.current, start: "top 85%", once: true } }
      );
      gsap.fromTo(".gf-std-card",
        { opacity: 0, y: 28, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1,
          duration: 0.65, stagger: 0.1, ease: "power2.out",
          scrollTrigger: { trigger: ".gf-std-grid", start: "top 82%", once: true } }
      );

      /* ── Section 2: Process ── */
      gsap.fromTo(".gf-proc-eyebrow",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out",
          scrollTrigger: { trigger: proc1Ref.current, start: "top 85%", once: true } }
      );
      gsap.fromTo(proc1Ref.current,
        { opacity: 0, y: 22 },
        { opacity: 1, y: 0, duration: 0.75, ease: "power3.out", delay: 0.1,
          scrollTrigger: { trigger: proc1Ref.current, start: "top 85%", once: true } }
      );
      gsap.fromTo(".gf-proc-sub",
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", delay: 0.2,
          scrollTrigger: { trigger: proc1Ref.current, start: "top 85%", once: true } }
      );
      gsap.fromTo(".gf-step",
        { opacity: 0, x: -24 },
        { opacity: 1, x: 0, duration: 0.65, stagger: 0.11, ease: "power2.out",
          scrollTrigger: { trigger: ".gf-steps-list", start: "top 82%", once: true } }
      );

      /* ── Section 3: Sustainability ── */
      gsap.fromTo(sust1Ref.current,
        { opacity: 0, x: -32 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power2.out",
          scrollTrigger: { trigger: sust1Ref.current, start: "top 82%", once: true } }
      );
      gsap.fromTo(".gf-sust-img",
        { opacity: 0, x: 32, scale: 0.97 },
        { opacity: 1, x: 0, scale: 1, duration: 0.85, ease: "power2.out",
          scrollTrigger: { trigger: ".gf-sust-img", start: "top 82%", once: true } }
      );

      /* ── Section 4: CTA ── */
      gsap.fromTo(".gf-cta-inner",
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.75, ease: "power2.out",
          scrollTrigger: { trigger: ctaRef.current, start: "top 82%", once: true } }
      );

    }, wrapRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapRef}>

      {/* ══════════════════════════════════════════════════
          1 ▸ STANDARDS  —  High-Tech trifft Natur
      ══════════════════════════════════════════════════ */}
      <section style={{ background: "var(--cream, #f5f0eb)", padding: "clamp(80px,10vw,130px) 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span className="gf-std-eyebrow eyebrow" style={{ color: "rgba(50,45,40,0.45)", opacity: 0 }}>
              Unsere Standards
            </span>
            <h2
              ref={std1Ref}
              className="font-playfair"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)", fontWeight: 700, color: "#1a1814",
                marginTop: "14px", marginBottom: "16px", lineHeight: 1.1, opacity: 0 }}
            >
              High-Tech trifft Natur
            </h2>
            <p className="gf-std-sub font-montserrat" style={{
              fontSize: "1rem", fontWeight: 300, color: "rgba(26,24,20,0.58)",
              maxWidth: "480px", margin: "0 auto", lineHeight: 1.8, opacity: 0,
            }}>
              Modernste Technologie und natürliche Methoden für Cannabis höchster Qualität.
            </p>
          </div>

          {/* 3 × 2 card grid */}
          <div className="gf-std-grid" style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px",
          }}>
            {standards.map((s) => (
              <div key={s.title} className="gf-std-card" style={{
                background: "#fff", border: "1px solid rgba(0,0,0,0.06)",
                borderRadius: "16px", padding: "32px 26px 36px",
                boxShadow: "0 2px 14px rgba(0,0,0,0.035)", opacity: 0,
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 10px 32px rgba(0,0,0,0.08)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 14px rgba(0,0,0,0.035)";
                }}
              >
                <div style={{
                  width: 44, height: 44, borderRadius: "10px",
                  background: "rgba(192,175,211,0.16)", display: "flex",
                  alignItems: "center", justifyContent: "center", marginBottom: "20px",
                }}>
                  <s.icon size={18} strokeWidth={1.6} style={{ color: "var(--lilac-dark, #9B88C0)" }} />
                </div>
                <h3 className="font-playfair" style={{
                  fontSize: "1.0625rem", fontWeight: 700, color: "#1a1814",
                  marginBottom: "10px", lineHeight: 1.25,
                }}>{s.title}</h3>
                <p className="font-montserrat" style={{
                  fontSize: "0.875rem", fontWeight: 300,
                  color: "rgba(26,24,20,0.55)", lineHeight: 1.8,
                }}>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          2 ▸ PROCESS  —  Vom Samen zur Blüte
      ══════════════════════════════════════════════════ */}
      <section style={{ background: "var(--bg-surface, #1c1c1a)", padding: "clamp(80px,10vw,130px) 24px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <span className="gf-proc-eyebrow eyebrow" style={{ opacity: 0 }}>
              Der Prozess
            </span>
            <h2
              ref={proc1Ref}
              className="font-playfair"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)", fontWeight: 700,
                color: "var(--cream, #f4f1ea)", marginTop: "14px", marginBottom: "16px",
                lineHeight: 1.1, opacity: 0 }}
            >
              Vom Samen zur Blüte
            </h2>
            <p className="gf-proc-sub font-montserrat" style={{
              fontSize: "1rem", fontWeight: 300,
              color: "rgba(244,241,234,0.52)", lineHeight: 1.8, opacity: 0,
            }}>
              Jeder Schritt unseres Anbaus wird sorgfältig überwacht und dokumentiert.
            </p>
          </div>

          {/* Step rows */}
          <div className="gf-steps-list" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {steps.map((step) => (
              <div key={step.num} className="gf-step" style={{
                display: "flex", alignItems: "flex-start", gap: "28px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "14px", padding: "24px 28px",
                opacity: 0,
                transition: "background 0.22s ease, border-color 0.22s ease",
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(192,175,211,0.25)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.04)";
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.08)";
                }}
              >
                {/* Number */}
                <span className="font-playfair" style={{
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 700,
                  color: "rgba(255,255,255,0.14)", lineHeight: 1,
                  flexShrink: 0, minWidth: "48px",
                }}>
                  {step.num}
                </span>
                {/* Text */}
                <div style={{ paddingTop: "4px" }}>
                  <h3 className="font-playfair" style={{
                    fontSize: "1.0625rem", fontWeight: 700,
                    color: "var(--cream, #f4f1ea)", marginBottom: "6px", lineHeight: 1.2,
                  }}>{step.title}</h3>
                  <p className="font-montserrat" style={{
                    fontSize: "0.875rem", fontWeight: 300,
                    color: "rgba(244,241,234,0.52)", lineHeight: 1.75,
                  }}>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          3 ▸ SUSTAINABILITY  —  Nachhaltigkeit als Prinzip
      ══════════════════════════════════════════════════ */}
      <section style={{ background: "var(--cream, #f5f0eb)", padding: "clamp(80px,10vw,130px) 24px" }}>
        <div style={{
          maxWidth: "1100px", margin: "0 auto",
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: "72px", alignItems: "center",
        }}
          className="gf-sust-grid"
        >
          {/* Left: text */}
          <div ref={sust1Ref} style={{ opacity: 0 }}>
            {/* Icon */}
            <div style={{
              width: 48, height: 48, borderRadius: "12px",
              background: "rgba(192,175,211,0.15)", display: "flex",
              alignItems: "center", justifyContent: "center", marginBottom: "28px",
            }}>
              <Leaf size={20} strokeWidth={1.6} style={{ color: "var(--lilac-dark, #9B88C0)" }} />
            </div>

            <h2 className="font-playfair" style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 700,
              color: "#1a1814", lineHeight: 1.15, marginBottom: "24px",
            }}>
              Nachhaltigkeit als Prinzip
            </h2>

            <p className="font-montserrat" style={{
              fontSize: "0.9375rem", fontWeight: 300, lineHeight: 1.85,
              color: "rgba(26,24,20,0.60)", marginBottom: "20px",
            }}>
              Umweltbewusstsein ist ein zentraler Bestandteil unserer Philosophie.
              Wir setzen auf energieeffiziente LED-Systeme, biologische
              Anbaumethoden und minimieren unseren ökologischen Fußabdruck.
            </p>
            <p className="font-montserrat" style={{
              fontSize: "0.9375rem", fontWeight: 300, lineHeight: 1.85,
              color: "rgba(26,24,20,0.60)",
            }}>
              Durch geschlossene Kreislaufsysteme und den Verzicht auf
              synthetische Mittel schützen wir nicht nur die Umwelt, sondern
              garantieren auch die Reinheit unserer Produkte.
            </p>
          </div>

          {/* Right: image */}
          <div className="gf-sust-img" style={{
            borderRadius: "20px", overflow: "hidden",
            boxShadow: "0 20px 60px rgba(0,0,0,0.12)", opacity: 0,
            aspectRatio: "4/3",
          }}>
            <img
              src="/assets/Nachhaltigkeit.png"
              alt="Cannabis Pflanze"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          4 ▸ CTA  —  Erlebe Qualität, die überzeugt
      ══════════════════════════════════════════════════ */}
      <section
        ref={ctaRef}
        style={{
          background: "var(--bg, #131311)",
          padding: "clamp(80px,10vw,120px) 24px",
          textAlign: "center",
        }}
      >
        <div className="gf-cta-inner" style={{ maxWidth: "560px", margin: "0 auto", opacity: 0 }}>
          <h2 className="font-playfair" style={{
            fontSize: "clamp(1.875rem, 4vw, 3rem)", fontWeight: 700,
            color: "var(--cream, #f4f1ea)", lineHeight: 1.15, marginBottom: "16px",
          }}>
            Erlebe Qualität, die überzeugt
          </h2>
          <p className="font-montserrat" style={{
            fontSize: "1rem", fontWeight: 300,
            color: "rgba(244,241,234,0.52)", lineHeight: 1.8, marginBottom: "40px",
          }}>
            Werde Mitglied und genieße Cannabis höchster Qualität aus kontrolliertem Anbau.
          </p>
          <Link
            href="/membership"
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              height: "48px", padding: "0 30px",
              border: "1.5px solid rgba(244,241,234,0.50)",
              borderRadius: "100px",
              color: "var(--cream, #f4f1ea)",
              fontFamily: "Montserrat, sans-serif",
              fontSize: "0.875rem", fontWeight: 500, letterSpacing: "0.04em",
              textDecoration: "none",
              transition: "border-color 0.25s ease, background 0.25s ease",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(244,241,234,0.9)";
              (e.currentTarget as HTMLAnchorElement).style.background  = "rgba(244,241,234,0.06)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(244,241,234,0.50)";
              (e.currentTarget as HTMLAnchorElement).style.background  = "transparent";
            }}
          >
            Mitglied werden <ArrowRight size={14} strokeWidth={2} />
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .gf-std-grid  { grid-template-columns: repeat(2,1fr) !important; }
          .gf-sust-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
        @media (max-width: 560px) {
          .gf-std-grid  { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
