"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Genetik & Sorten",
    text: "Sorgfältig ausgewählte, qualitätsoptimierte Sorten für beste Ergebnisse in Geschmack und Wirkung. Unser Team wählt jede Genetik nach Terpenprofil, Stabilität und Ertrag aus.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1600&q=85",
    imagePosition: "center",
  },
  {
    number: "02",
    title: "Nachhaltiger Anbau",
    text: "Kontrollierte Umgebung ohne chemische Pestizide — für reine Qualität und nachhaltige Produktion. Wasser, Licht und Nährstoffe werden präzise gesteuert.",
    image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=1600&q=85",
    imagePosition: "center",
  },
  {
    number: "03",
    title: "Ernte & Pflege",
    text: "Sorgfältiges Trimmen, Trocknen und Aushärten für optimales Aroma und maximale Qualität. Jede Charge wird von Hand verarbeitet und kontrolliert.",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1600&q=85",
    imagePosition: "center top",
  },
  {
    number: "04",
    title: "Qualitätsprüfung",
    text: "THC-, CBD- und Terpenanalyse mit voller Transparenz für unsere Mitglieder. Jedes Ergebnis wird im Mitgliederbereich veröffentlicht.",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1600&q=85",
    imagePosition: "center",
  },
];

export default function Growing() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Each step: image parallaxes, text rises in
      steps.forEach((_, i) => {
        const stepEl  = document.querySelector(`.grow-step-${i}`);
        const imgEl   = document.querySelector(`.grow-img-${i}`);
        const textEl  = document.querySelector(`.grow-text-${i}`);
        if (!stepEl || !imgEl || !textEl) return;

        // Image parallax — moves slower than scroll
        gsap.fromTo(imgEl,
          { yPercent: -10 },
          {
            yPercent: 10,
            ease: "none",
            scrollTrigger: {
              trigger: stepEl,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );

        // Text reveal
        gsap.fromTo(textEl,
          { opacity: 0, x: -32 },
          {
            opacity: 1, x: 0,
            duration: 0.9, ease: "power3.out",
            scrollTrigger: {
              trigger: stepEl,
              start: "top 65%",
              once: true,
            },
          }
        );
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef} id="growing">
      {/* Section header — standalone above the step panels */}
      <div
        className="section"
        style={{ background: "var(--bg)", paddingBottom: "clamp(48px, 6vw, 80px)" }}
      >
        <div className="section-inner">
          <div className="section-header" style={{ marginBottom: 0 }}>
            <span className="eyebrow">Unser Anbau</span>
            <h2 className="font-playfair section-title">Von der Saat zur Qualität.</h2>
            <p className="section-subtitle">
              Vereinseigener Anbau — für Mitglieder, von Mitgliedern. Transparent, nachhaltig, geprüft.
            </p>
          </div>
        </div>
      </div>

      {/* Full-screen step panels */}
      {steps.map((step, i) => (
        <div
          key={i}
          className={`grow-step-${i}`}
          style={{
            position: "relative",
            height: "80vh",
            minHeight: "520px",
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: i % 2 === 0 ? "1fr 1fr" : "1fr 1fr",
          }}
        >
          {/* Image side */}
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              order: i % 2 === 0 ? 2 : 1,
            }}
          >
            <div
              className={`grow-img-${i}`}
              style={{
                position: "absolute",
                top: "-12%", left: 0, right: 0,
                height: "124%",
                backgroundImage: `url('${step.image}')`,
                backgroundSize: "cover",
                backgroundPosition: step.imagePosition,
                willChange: "transform",
              }}
            />
            {/* Inner scrim for depth */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute", inset: 0,
                background: i % 2 === 0
                  ? "linear-gradient(to right, rgba(19,19,17,0.35) 0%, transparent 60%)"
                  : "linear-gradient(to left, rgba(19,19,17,0.35) 0%, transparent 60%)",
              }}
            />
          </div>

          {/* Text side */}
          <div
            className={`grow-text-${i}`}
            style={{
              order: i % 2 === 0 ? 1 : 2,
              background: "var(--bg)",
              display: "flex",
              alignItems: "center",
              padding: "clamp(40px, 6vw, 80px) clamp(28px, 5vw, 72px)",
              opacity: 0,
            }}
          >
            <div style={{ maxWidth: "460px" }}>
              {/* Step number */}
              <p
                className="font-playfair"
                style={{
                  fontSize: "clamp(4rem, 10vw, 7rem)",
                  fontWeight: 700,
                  color: "var(--bg-elevated)",
                  lineHeight: 1,
                  marginBottom: "16px",
                  userSelect: "none",
                }}
              >
                {step.number}
              </p>

              <span className="eyebrow" style={{ display: "block", marginBottom: "16px" }}>
                Schritt {step.number}
              </span>

              <h3
                className="font-playfair"
                style={{
                  fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)",
                  fontWeight: 700,
                  color: "var(--cream)",
                  lineHeight: 1.15,
                  marginBottom: "20px",
                }}
              >
                {step.title}
              </h3>

              <p
                className="font-montserrat"
                style={{
                  fontSize: "0.9375rem",
                  fontWeight: 300,
                  lineHeight: 1.85,
                  color: "var(--text-secondary)",
                }}
              >
                {step.text}
              </p>

              {/* Separator */}
              <div
                style={{
                  marginTop: "28px",
                  width: "40px",
                  height: "1px",
                  background: "var(--lilac)",
                }}
              />
            </div>
          </div>

          {/* Step divider line */}
          {i < steps.length - 1 && (
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                bottom: 0, left: 0, right: 0,
                height: "1px",
                background: "var(--border)",
                zIndex: 2,
              }}
            />
          )}
        </div>
      ))}

      {/* Banner */}
      <div
        className="section"
        style={{ background: "var(--bg-surface)", paddingTop: "clamp(48px, 6vw, 80px)" }}
      >
        <div className="section-inner">
          <div
            style={{
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
              <h3
                className="font-playfair"
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 700,
                  marginBottom: "12px",
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
                Als Mitglied des Cloudy Clubs hast du das Recht auf deine monatliche Menge gemäß § CanG.
                Keine graue Zone — nur ehrliches Cannabis aus unserer eigenen Anlage.
              </p>
            </div>
            <Link href="/membership" className="btn-primary" style={{ flexShrink: 0 }}>
              Mitglied werden <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .grow-step-0, .grow-step-1, .grow-step-2, .grow-step-3 {
            grid-template-columns: 1fr !important;
            height: auto !important;
          }
          .grow-step-0 > div,
          .grow-step-1 > div,
          .grow-step-2 > div,
          .grow-step-3 > div {
            order: unset !important;
          }
          .grow-step-0 > div:first-child,
          .grow-step-1 > div:first-child,
          .grow-step-2 > div:first-child,
          .grow-step-3 > div:first-child {
            height: 280px;
            min-height: 280px;
          }
          .grow-banner { padding: 36px 28px !important; }
        }
      `}</style>
    </div>
  );
}
