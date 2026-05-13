"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { Leaf, Droplets, Sun, FlaskConical, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { icon: Sun,          number: "01", title: "Genetik & Sorten",     text: "Wir wählen sorgfältig geprüfte Sorten aus, die auf Qualität, Geschmack und Wirkung optimiert sind." },
  { icon: Droplets,     number: "02", title: "Nachhaltiger Anbau",    text: "Unser Anbau erfolgt unter kontrollierten Bedingungen ohne chemische Pestizide – für dich und die Umwelt." },
  { icon: Leaf,         number: "03", title: "Ernte & Pflege",        text: "Jede Ernte wird liebevoll getrimmt, schonend getrocknet und sorgfältig kuriert für maximale Qualität." },
  { icon: FlaskConical, number: "04", title: "Qualitätsprüfung",      text: "Alle Chargen werden auf THC, CBD und Terpene getestet – vollständige Transparenz für unsere Mitglieder." },
];

export default function Growing() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".grow-card",
        { opacity: 0, y: 48 },
        { opacity: 1, y: 0, duration: 0.82, stagger: 0.14, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 78%", once: true } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="growing"
      ref={sectionRef}
      className="section"
      style={{ background: "var(--bg-surface)", position: "relative" }}
    >
      <div className="section-inner">
        <div className="section-header center">
          <span className="eyebrow">Anbau</span>
          <h2 className="font-playfair section-title">Vom Samen zur Qualität</h2>
          <p className="section-subtitle">
            Transparenz ist unser Fundament. Erfahre, wie wir Cannabis mit Sorgfalt und Leidenschaft für unsere Mitglieder anbauen.
          </p>
        </div>

        {/* Cards grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
          {steps.map((step, i) => (
            <div
              key={i}
              className="grow-card card"
              style={{
                padding: "40px 32px",
                position: "relative",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "32px" }}>
                <div
                  style={{
                    width: "48px", height: "48px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: "rgba(192,175,211,0.08)",
                    border: "1px solid rgba(192,175,211,0.15)",
                  }}
                >
                  <step.icon size={20} style={{ color: "var(--lilac)" }} />
                </div>
                <p className="font-playfair"
                   style={{ fontSize: "3rem", lineHeight: 0.8, color: "rgba(192,175,211,0.15)", fontWeight: 700 }}>
                  {step.number}
                </p>
              </div>
              
              <h3 className="font-playfair" style={{ fontSize: "1.25rem", color: "var(--cream)", marginBottom: "12px", fontWeight: 600 }}>
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
          className="grow-card"
          style={{
            marginTop: "80px",
            padding: "56px",
            background: "linear-gradient(135deg, rgba(192,175,211,0.08) 0%, rgba(192,175,211,0.02) 100%)",
            border: "1px solid rgba(192,175,211,0.15)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "40px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Banner Glow */}
          <div style={{
            position: "absolute", top: "0", right: "0",
            width: "300px", height: "300px",
            background: "radial-gradient(circle, rgba(192,175,211,0.1) 0%, transparent 70%)",
            transform: "translate(30%, -30%)",
            pointerEvents: "none",
          }} />

          <div style={{ maxWidth: "640px", position: "relative", zIndex: 1 }}>
            <h3 className="font-playfair gradient-text" style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "16px", lineHeight: 1.2 }}>
              Vereinseigener Anbau — für Mitglieder, von Mitgliedern
            </h3>
            <p className="font-montserrat" style={{ fontSize: "0.9375rem", fontWeight: 300, lineHeight: 1.8, color: "var(--text-secondary)" }}>
              Als Mitglied des Cloudy Clubs hast du das Recht auf deine monatliche Menge gemäß § CanG.
              Keine graue Zone, keine Unsicherheit — nur ehrliches Cannabis aus unserer eigenen Anlage.
            </p>
          </div>
          <div style={{ position: "relative", zIndex: 1 }}>
            <Link href="/membership" className="btn-primary" style={{ gap: "10px" }}>
              Mitglied werden <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
