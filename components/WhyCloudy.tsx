"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Shield, Leaf, Users, Lock } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Shield,
    title: "100% Legal & Konform",
    text: "Wir handeln strikt nach dem KCanG. Deine Mitgliedschaft ist rechtlich abgesichert und vollständig transparent.",
  },
  {
    icon: Leaf,
    title: "Reinheit ohne Kompromisse",
    text: "Frei von Schadstoffen, Pestiziden und Streckmitteln. Laborgeprüfte Qualität aus kontrolliertem Anbau.",
  },
  {
    icon: Users,
    title: "Lebendige Community",
    text: "Ein Ort der Begegnung. Workshops, Tastings und Events fördern den Austausch in sicherer Atmosphäre.",
  },
  {
    icon: Lock,
    title: "Maximale Diskretion",
    text: "Deine Daten sind bei uns sicher. DSGVO-konform, verschlüsselt und auf deutschen Servern gespeichert.",
  },
];

export default function WhyCloudy() {
  const sectionRef   = useRef<HTMLElement>(null);
  const eyebrowRef   = useRef<HTMLSpanElement>(null);
  const headlineRef  = useRef<HTMLHeadingElement>(null);
  const headLineRef  = useRef<HTMLSpanElement>(null);
  const subtitleRef  = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {

      /* ── 1. Eyebrow: fade + rise ── */
      gsap.fromTo(eyebrowRef.current,
        { opacity: 0, y: 12 },
        {
          opacity: 1, y: 0,
          duration: 0.6, ease: "power2.out",
          scrollTrigger: { trigger: headlineRef.current, start: "top 85%", once: true },
        }
      );

      /* ── 2. Headline: single-line mask slide-up ── */
      gsap.fromTo(headLineRef.current,
        { y: "110%", skewX: -3 },
        {
          y: "0%", skewX: 0,
          duration: 1.05, ease: "power4.out",
          scrollTrigger: { trigger: headlineRef.current, start: "top 82%", once: true },
        }
      );

      /* ── 3. Subtitle: fade + rise (slight delay) ── */
      gsap.fromTo(subtitleRef.current,
        { opacity: 0, y: 18 },
        {
          opacity: 1, y: 0,
          duration: 0.75, ease: "power2.out", delay: 0.22,
          scrollTrigger: { trigger: headlineRef.current, start: "top 82%", once: true },
        }
      );

      /* ── 4. Cards: stagger up from below ── */
      gsap.fromTo(".why-card",
        { opacity: 0, y: 40, scale: 0.97 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.72, stagger: 0.13, ease: "power2.out",
          scrollTrigger: { trigger: ".why-cards-grid", start: "top 82%", once: true },
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="why"
      ref={sectionRef}
      style={{
        minHeight: "100vh",
        background: "var(--cream, #f5f0eb)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "100px 24px",
      }}
    >

      {/* ── Centered header ── */}
      <div
        style={{
          textAlign: "center",
          maxWidth: "680px",
          width: "100%",
          marginBottom: "64px",
        }}
      >
        <span
          ref={eyebrowRef}
          className="eyebrow"
          style={{ color: "rgba(50,45,40,0.50)", opacity: 0 }}
        >
          Warum Cloudy Club
        </span>

        <h2
          ref={headlineRef}
          className="font-playfair"
          style={{
            fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)",
            fontWeight: 700,
            color: "#1a1814",
            lineHeight: 1.1,
            margin: "18px 0 26px",
            overflow: "hidden",           /* acts as the line-mask */
            paddingBottom: "0.06em",      /* prevent descender clip */
          }}
        >
          <span ref={headLineRef} style={{ display: "block" }}>
            Neue Standards für Cannabis-Kultur
          </span>
        </h2>

        <p
          ref={subtitleRef}
          className="font-montserrat"
          style={{
            fontSize: "1rem",
            fontWeight: 300,
            lineHeight: 1.85,
            color: "rgba(30,26,22,0.62)",
            opacity: 0,
          }}
        >
          Wir verbinden höchste Qualität mit verantwortungsvollem Genuss — in
          einer Community, die Vertrauen und Transparenz lebt.
        </p>
      </div>

      {/* ── 4-column feature cards ── */}
      <div
        className="why-cards-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        {features.map((f, i) => (
          <div
            key={i}
            className="why-card"
            style={{
              background: "#ffffff",
              border: "1px solid rgba(0,0,0,0.055)",
              borderRadius: "18px",
              padding: "32px 26px 36px",
              boxShadow: "0 2px 20px rgba(0,0,0,0.038)",
              opacity: 0,
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Icon badge */}
            <div
              className="why-icon-badge"
              style={{
                width: 46,
                height: 46,
                background: "rgba(192,175,211,0.18)",
                borderRadius: "11px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "28px",
                transition: "background 0.25s ease",
              }}
            >
              <f.icon
                size={19}
                strokeWidth={1.6}
                style={{ color: "var(--lilac-dark, #9B88C0)" }}
              />
            </div>

            {/* Title */}
            <h3
              className="font-playfair"
              style={{
                fontSize: "1.1875rem",
                fontWeight: 700,
                color: "#1a1814",
                lineHeight: 1.3,
                marginTop: "16px",
                marginBottom: "14px",
              }}
            >
              {f.title}
            </h3>

            {/* Body */}
            <p
              className="font-montserrat"
              style={{
                fontSize: "0.875rem",
                fontWeight: 300,
                lineHeight: 1.82,
                color: "rgba(30,26,22,0.60)",
              }}
            >
              {f.text}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        /* Card hover: lift + border brightens + icon badge deepens */
        .why-card {
          transition: transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease;
        }
        .why-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.09);
          border-color: rgba(192,175,211,0.45);
        }
        .why-card:hover .why-icon-badge {
          background: rgba(192,175,211,0.30);
        }

        /* Responsive breakpoints */
        @media (max-width: 1024px) {
          .why-cards-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .why-cards-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
