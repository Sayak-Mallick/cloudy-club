"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Users, Zap, Leaf } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    icon: ShieldCheck,
    title: "100 % Legal & Konform",
    text: "Vollständig nach dem Konsumcannabisgesetz (KCanG) betrieben. Keine Grauzone, kein Risiko — nur klare Regeln.",
  },
  {
    icon: Users,
    title: "Lebendige Community",
    text: "Echte Gemeinschaft in Osnabrück: Workshops, Events und ein offenes Netzwerk von Gleichgesinnten.",
  },
  {
    icon: Zap,
    title: "High-Tech Anlage",
    text: "Modernste Anbautechnik mit präziser Klimasteuerung — für gleichbleibend hohe Qualität jede Ernte.",
  },
  {
    icon: Leaf,
    title: "Ohne Schadstoffe",
    text: "Pestizidfreier Vereinsanbau, regelmäßige Labor-Checks und volle Transparenz über jede Charge.",
  },
];

export default function WhyCloudy() {
  const sectionRef = useRef<HTMLElement>(null);
  const line1Ref   = useRef<HTMLSpanElement>(null);
  const line2Ref   = useRef<HTMLSpanElement>(null);
  const headRef    = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Headline line-mask reveal
      gsap.fromTo([line1Ref.current, line2Ref.current],
        { y: "105%", skewX: -3 },
        {
          y: "0%", skewX: 0,
          duration: 0.95, stagger: 0.13, ease: "power4.out",
          scrollTrigger: { trigger: headRef.current, start: "top 80%", once: true },
        }
      );

      // Benefit cards stagger
      gsap.fromTo(".why-benefit",
        { opacity: 0, x: 24 },
        {
          opacity: 1, x: 0,
          duration: 0.7, stagger: 0.11, ease: "power2.out",
          scrollTrigger: { trigger: ".why-list", start: "top 80%", once: true },
        }
      );

      // Left column fade
      gsap.fromTo(".why-left-sub",
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 78%", once: true },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="why"
      ref={sectionRef}
      className="section"
      style={{ background: "var(--bg)" }}
    >
      <div
        className="section-inner why-grid"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "96px", alignItems: "start" }}
      >
        {/* Left: headline + sub + CTA */}
        <div style={{ position: "sticky", top: "80px" }}>
          <div className="section-header" style={{ marginBottom: "36px" }}>
            <span className="eyebrow">Warum Cloudy Club?</span>
            <h2 ref={headRef} className="font-playfair section-title">
              <span className="line-mask" style={{ display: "block" }}>
                <span ref={line1Ref} className="line-inner">Der Club,</span>
              </span>
              <span className="line-mask" style={{ display: "block" }}>
                <span ref={line2Ref} className="line-inner" style={{ fontStyle: "italic", color: "var(--lilac)" }}>
                  der anders denkt.
                </span>
              </span>
            </h2>
          </div>

          <p
            className="why-left-sub font-montserrat"
            style={{
              fontSize: "0.9375rem",
              fontWeight: 300,
              lineHeight: 1.85,
              color: "var(--text-secondary)",
              marginBottom: "40px",
              maxWidth: "440px",
            }}
          >
            Wir sind kein gewöhnlicher Club. Wir verbinden verantwortungsvollen Konsum
            mit echter Gemeinschaft — offen, transparent und vollständig im Rahmen des deutschen Rechts.
          </p>

          <Link href="/membership" className="btn-primary">
            Jetzt Mitglied werden <ArrowRight size={13} />
          </Link>
        </div>

        {/* Right: benefit list */}
        <div className="why-list" style={{ display: "flex", flexDirection: "column" }}>
          {benefits.map((b, i) => (
            <div
              key={i}
              className="why-benefit"
              style={{
                display: "flex",
                gap: "20px",
                alignItems: "flex-start",
                padding: "28px 0",
                borderBottom: i < benefits.length - 1 ? "1px solid var(--border)" : "none",
              }}
            >
              {/* Icon badge */}
              <div style={{
                width: 44, height: 44,
                background: "var(--bg-elevated)",
                border: "1px solid var(--border)",
                borderRadius: "2px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}>
                <b.icon size={18} style={{ color: "var(--lilac)" }} />
              </div>

              {/* Text */}
              <div>
                <h3
                  className="font-playfair"
                  style={{
                    fontSize: "1.125rem",
                    color: "var(--cream)",
                    fontWeight: 600,
                    marginBottom: "8px",
                    lineHeight: 1.25,
                  }}
                >
                  {b.title}
                </h3>
                <p
                  className="font-montserrat"
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 300,
                    lineHeight: 1.8,
                    color: "var(--text-secondary)",
                  }}
                >
                  {b.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .why-grid { grid-template-columns: 1fr !important; gap: 56px !important; }
          .why-grid > div:first-child { position: static !important; }
        }
      `}</style>
    </section>
  );
}
