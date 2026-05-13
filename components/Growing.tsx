"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { Leaf, Droplets, Sun, FlaskConical, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { icon: Sun,          number: "01", title: "Genetik & Sorten",     text: "Sorgfältig ausgewählte, qualitätsoptimierte Sorten für beste Ergebnisse in Geschmack und Wirkung." },
  { icon: Droplets,     number: "02", title: "Nachhaltiger Anbau",    text: "Kontrollierte Umgebung ohne chemische Pestizide – für reine Qualität und nachhaltige Produktion." },
  { icon: Leaf,         number: "03", title: "Ernte & Pflege",        text: "Sorgfältiges Trimmen, Trocknen und Aushärten für optimales Aroma und maximale Qualität." },
  { icon: FlaskConical, number: "04", title: "Qualitätsprüfung",      text: "THC-, CBD- und Terpenanalyse mit voller Transparenz für unsere Mitglieder." },
];

export default function Growing() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(".grow-card",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true } }
      );
      gsap.fromTo(".grow-connector",
        { scaleX: 0 },
        { scaleX: 1, duration: 0.8, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="growing"
      ref={sectionRef}
      className="section"
      style={{ background: "var(--bg-surface)" }}
    >
      <div className="section-inner">
        {/* Header */}
        <div className="section-header" style={{ marginBottom: "56px" }}>
          <span className="eyebrow">Unser Anbau</span>
          <h2 className="font-playfair section-title">Von der Saat zur Qualität.</h2>
          <p className="section-subtitle">
            Vereinseigener Anbau — für Mitglieder, von Mitgliedern. Transparent, nachhaltig, geprüft.
          </p>
        </div>

        {/* Step connector line */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: "24px" }} className="grow-step-header" aria-hidden="true">
          {steps.map((step, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
                <div style={{
                  width: "28px", height: "28px",
                  border: "1px solid var(--border)",
                  background: "var(--bg-elevated)",
                  borderRadius: "2px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <span className="font-montserrat" style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "0.08em", color: "var(--lilac)" }}>
                    {step.number}
                  </span>
                </div>
                <span className="font-montserrat" style={{ fontSize: "11px", fontWeight: 600, color: "var(--text-muted)", letterSpacing: "0.08em", whiteSpace: "nowrap" }}>
                  {step.title}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div
                  className="grow-connector"
                  style={{
                    flex: 1,
                    height: "1px",
                    background: "var(--border)",
                    margin: "0 12px",
                    transformOrigin: "left",
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Cards grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }} className="grow-grid">
          {steps.map((step, i) => (
            <div
              key={i}
              className="grow-card card"
              style={{
                padding: "32px 28px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "28px" }}>
                <step.icon size={20} style={{ color: "var(--lilac)" }} />
                <span
                  className="font-montserrat"
                  style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "0.3em", color: "var(--text-muted)" }}
                >
                  {step.number}
                </span>
              </div>
              <h3 className="font-playfair" style={{ fontSize: "1.125rem", color: "var(--cream)", marginBottom: "10px", fontWeight: 600 }}>
                {step.title}
              </h3>
              <p className="font-montserrat" style={{ fontSize: "0.875rem", fontWeight: 300, lineHeight: 1.8, color: "var(--text-secondary)" }}>
                {step.text}
              </p>
            </div>
          ))}
        </div>

        {/* Banner */}
        <div
          style={{
            marginTop: "64px",
            padding: "48px 56px",
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: "2px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "32px",
          }}
          className="grow-banner"
        >
          <div style={{ maxWidth: "600px" }}>
            <h3 className="font-playfair" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, marginBottom: "12px", lineHeight: 1.2, color: "var(--cream)" }}>
              Vereinseigener Anbau —{" "}
              <span style={{ color: "var(--lilac)", fontStyle: "italic" }}>für Mitglieder, von Mitgliedern</span>
            </h3>
            <p className="font-montserrat" style={{ fontSize: "0.9375rem", fontWeight: 300, lineHeight: 1.8, color: "var(--text-secondary)" }}>
              Als Mitglied des Cloudy Clubs hast du das Recht auf deine monatliche Menge gemäß § CanG.
              Keine graue Zone — nur ehrliches Cannabis aus unserer eigenen Anlage.
            </p>
          </div>
          <Link href="/membership" className="btn-primary" style={{ flexShrink: 0 }}>
            Mitglied werden <ArrowRight size={13} />
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .grow-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .grow-step-header { display: none !important; }
          .grow-banner { padding: 36px 28px !important; }
        }
        @media (max-width: 520px) {
          .grow-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
