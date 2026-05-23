"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight, Thermometer, Dna, Clock, FlaskConical } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const qualities = [
  {
    number: "01",
    icon: Thermometer,
    title: "Controlled Environment",
    text: "Klimaoptimierter Anbau mit präziser Steuerung von Licht, Temperatur und Luftfeuchtigkeit – für maximale Konsistenz in jeder Charge.",
  },
  {
    number: "02",
    icon: Dna,
    title: "Top Genetik",
    text: "Sorgfältig ausgewählte Sorten mit herausragenden Terpenprofilen, Stabilität und Ertrag – von unserem Anbauerteam kuratiert.",
  },
  {
    number: "03",
    icon: Clock,
    title: "Slow-Curing",
    text: "Langsame, schonende Reifung für optimales Aroma, Terpenerhalt und maximale Qualität. Kein Kompromiss bei der Nachbehandlung.",
  },
  {
    number: "04",
    icon: FlaskConical,
    title: "Labor-Checks",
    text: "THC-, CBD- und Terpenanalyse nach jeder Ernte – mit voller Transparenz für alle Mitglieder im Mitgliederbereich veröffentlicht.",
  },
];

export default function Growing() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(".quality-card",
        { opacity: 0, y: 36 },
        {
          opacity: 1, y: 0,
          duration: 0.75, stagger: 0.13, ease: "power3.out",
          scrollTrigger: { trigger: ".quality-grid", start: "top 78%", once: true },
        }
      );
      gsap.fromTo(".grow-banner",
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0,
          duration: 0.8, ease: "power2.out",
          scrollTrigger: { trigger: ".grow-banner", start: "top 84%", once: true },
        }
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
        {/* Section header */}
        <div className="section-header center" style={{ marginBottom: "64px" }}>
          <span className="eyebrow">Unser Anbau</span>
          <h2 className="font-playfair section-title">
            Qualität durch{" "}
            <span style={{ color: "var(--lilac)", fontStyle: "italic" }}>Hingabe.</span>
          </h2>
          <p className="section-subtitle">
            Vereinseigener Anbau ohne Kompromisse — für Mitglieder, von Mitgliedern.
            Transparent, nachhaltig und jede Charge geprüft.
          </p>
        </div>

        {/* 2 × 2 quality cards */}
        <div
          className="quality-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "24px",
          }}
        >
          {qualities.map((q) => (
            <div
              key={q.number}
              className="quality-card card"
              style={{
                padding: "40px 36px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                background: "var(--bg-card)",
              }}
            >
              {/* Number + icon row */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span
                  className="font-playfair"
                  style={{
                    fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                    fontWeight: 700,
                    color: "var(--bg-elevated)",
                    lineHeight: 1,
                    userSelect: "none",
                  }}
                >
                  {q.number}
                </span>
                <div style={{
                  width: 48, height: 48,
                  borderRadius: "2px",
                  background: "var(--bg-elevated)",
                  border: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <q.icon size={20} style={{ color: "var(--lilac)" }} />
                </div>
              </div>

              {/* Content */}
              <div>
                <h3
                  className="font-playfair"
                  style={{
                    fontSize: "clamp(1.125rem, 2vw, 1.375rem)",
                    fontWeight: 700,
                    color: "var(--cream)",
                    lineHeight: 1.2,
                    marginBottom: "12px",
                  }}
                >
                  {q.title}
                </h3>
                <p
                  className="font-montserrat"
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 300,
                    lineHeight: 1.85,
                    color: "var(--text-secondary)",
                  }}
                >
                  {q.text}
                </p>
              </div>

              {/* Bottom accent line */}
              <div style={{ width: 32, height: 1, background: "var(--lilac)", marginTop: "auto" }} />
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div
          className="grow-banner"
          style={{
            marginTop: "48px",
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
        >
          <div style={{ maxWidth: "600px" }}>
            <h3
              className="font-playfair"
              style={{
                fontSize: "clamp(1.375rem, 3vw, 1.875rem)",
                fontWeight: 700,
                marginBottom: "10px",
                lineHeight: 1.2,
                color: "var(--cream)",
              }}
            >
              Vereinseigener Anbau —{" "}
              <span style={{ color: "var(--lilac)", fontStyle: "italic" }}>
                für Mitglieder, von Mitgliedern
              </span>
            </h3>
            <p
              className="font-montserrat"
              style={{
                fontSize: "0.9375rem",
                fontWeight: 300,
                lineHeight: 1.8,
                color: "var(--text-secondary)",
              }}
            >
              Als Mitglied des Cloudy Clubs hast du das Recht auf deine monatliche Menge gemäß §&nbsp;CanG.
              Keine graue Zone — nur ehrliches Cannabis aus unserer eigenen Anlage.
            </p>
          </div>
          <Link href="/membership" className="btn-primary" style={{ flexShrink: 0 }}>
            Mitglied werden <ArrowRight size={13} />
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .quality-grid { grid-template-columns: 1fr !important; }
          .grow-banner  { padding: 36px 28px !important; }
        }
      `}</style>
    </section>
  );
}
