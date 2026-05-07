"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeader from "./SectionHeader";
import { Leaf, Droplets, Sun, FlaskConical } from "lucide-react";

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
      style={{ padding: "112px 40px", background: "var(--sand)" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <SectionHeader
          eyebrow="Anbau"
          title="Vom Samen zur Qualität"
          subtitle="Transparenz ist unser Fundament. Erfahre, wie wir Cannabis mit Sorgfalt und Leidenschaft für unsere Mitglieder anbauen."
        />

        {/* Cards grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}>
          {steps.map((step, i) => (
            <div
              key={i}
              className="grow-card card-hover"
              style={{
                background: "var(--cream)",
                border: "1px solid rgba(192,175,211,0.3)",
                padding: "40px 32px",
                position: "relative",
              }}
            >
              <p className="font-playfair"
                 style={{ fontSize: "3.5rem", lineHeight: 1, color: "rgba(192,175,211,0.3)", marginBottom: "24px", fontWeight: 700 }}>
                {step.number}
              </p>
              <div
                style={{
                  width: "44px", height: "44px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: "var(--lilac-light)",
                  marginBottom: "20px",
                }}
              >
                <step.icon size={18} style={{ color: "var(--lilac)" }} />
              </div>
              <h3 className="font-playfair" style={{ fontSize: "1.1875rem", color: "var(--charcoal)", marginBottom: "12px", fontWeight: 500 }}>
                {step.title}
              </h3>
              <p className="font-montserrat" style={{ fontSize: "0.875rem", fontWeight: 300, lineHeight: 1.75, color: "rgba(49,49,47,0.62)" }}>
                {step.text}
              </p>
            </div>
          ))}
        </div>

        {/* Banner */}
        <div
          style={{
            marginTop: "56px",
            padding: "48px 56px",
            background: "var(--charcoal)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "32px",
          }}
        >
          <div style={{ maxWidth: "580px" }}>
            <h3 className="font-playfair" style={{ fontSize: "1.5rem", color: "var(--cream)", fontWeight: 500, marginBottom: "12px" }}>
              Vereinseigener Anbau — für Mitglieder, von Mitgliedern
            </h3>
            <p className="font-montserrat" style={{ fontSize: "0.875rem", fontWeight: 300, lineHeight: 1.75, color: "rgba(244,241,234,0.58)" }}>
              Als Mitglied des Cloudy Clubs hast du das Recht auf deine monatliche Menge gemäß § CanG.
              Keine graue Zone, keine Unsicherheit — nur ehrliches Cannabis aus unserer eigenen Anlage.
            </p>
          </div>
          <button
            className="btn-primary"
            onClick={() => document.getElementById("membership")?.scrollIntoView({ behavior: "smooth" })}
          >
            Mitglied werden
          </button>
        </div>
      </div>
    </section>
  );
}
