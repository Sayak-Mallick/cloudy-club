"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const qualities = [
  {
    number: "01",
    title: "Controlled Environment",
    text: "Perfektes Klima und Hygiene für Schädlingsfreiheit ohne Chemie.",
  },
  {
    number: "02",
    title: "Top Genetik",
    text: "Nur die besten Phänotypen schaffen es in unseren Anbau.",
  },
  {
    number: "03",
    title: "Slow Curing",
    text: "Geduldige Trocknung und Fermentation für das volle Aroma.",
  },
  {
    number: "04",
    title: "Labor-Checks",
    text: "Regelmäßige Analysen auf Wirkstoffgehalt und Reinheit.",
  },
];

export default function Growing() {
  const sectionRef  = useRef<HTMLElement>(null);
  const bgRef       = useRef<HTMLDivElement>(null);
  const eyebrowRef  = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const headLineRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {

      /* ── 1. Background parallax — image drifts up as section scrolls past ── */
      gsap.fromTo(bgRef.current,
        { y: 0 },
        {
          y: "-160px",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      /* ── 2. Eyebrow: fade + rise ── */
      gsap.fromTo(eyebrowRef.current,
        { opacity: 0, y: 12 },
        {
          opacity: 1, y: 0,
          duration: 0.65, ease: "power2.out",
          scrollTrigger: { trigger: headlineRef.current, start: "top 85%", once: true },
        }
      );

      /* ── 3. Headline: line-mask slide-up ── */
      gsap.fromTo(headLineRef.current,
        { y: "110%", skewX: -3 },
        {
          y: "0%", skewX: 0,
          duration: 1.05, ease: "power4.out",
          scrollTrigger: { trigger: headlineRef.current, start: "top 82%", once: true },
        }
      );

      /* ── 4. Cards: stagger fade-up ── */
      gsap.fromTo(".quality-card",
        { opacity: 0, y: 42, scale: 0.97 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.75, stagger: 0.13, ease: "power3.out",
          scrollTrigger: { trigger: ".quality-grid", start: "top 80%", once: true },
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const headerImage = "/assets/Anbau.png"; // Local image path for the hero background

  return (
    <section
      id="growing"
      ref={sectionRef}
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(72px,10vw,120px) clamp(16px,4vw,24px)",
      }}
    >
      {/* ── Parallax background image ── */}
      <div
        ref={bgRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-20%",
          left: 0,
          width: "100%",
          height: "140%",
          backgroundImage: `url('${headerImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          willChange: "transform",
          zIndex: 0,
        }}
      />

      {/* ── Dark overlay ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(10,10,8,0.62) 0%, rgba(10,10,8,0.52) 60%, rgba(10,10,8,0.68) 100%)",
          zIndex: 1,
        }}
      />

      {/* ── Content ── */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        {/* Centered header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "64px",
          }}
        >
          <span
            ref={eyebrowRef}
            className="eyebrow"
            style={{
              color: "rgba(192,175,211,0.75)",
              letterSpacing: "0.32em",
              opacity: 0,
            }}
          >
            Qualitätsversprechen
          </span>

          <h2
            ref={headlineRef}
            className="font-playfair"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 700,
              color: "#f4f1ea",
              lineHeight: 1.1,
              marginTop: "18px",
              overflow: "hidden",
              paddingBottom: "0.06em",
            }}
          >
            <span ref={headLineRef} style={{ display: "block" }}>
              Qualität durch Hingabe
            </span>
          </h2>
        </div>

        {/* 4-column frosted-glass cards */}
        <div
          className="quality-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "18px",
          }}
        >
          {qualities.map((q) => (
            <div
              key={q.number}
              className="quality-card"
              style={{
                background: "rgba(255,255,255,0.07)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.13)",
                borderRadius: "16px",
                padding: "36px 28px 40px",
                display: "flex",
                flexDirection: "column",
                gap: "0",
                opacity: 0,
              }}
            >
              {/* Number */}
              <span
                className="font-playfair"
                style={{
                  fontSize: "clamp(2.25rem, 4vw, 3rem)",
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.20)",
                  lineHeight: 1,
                  userSelect: "none",
                  marginBottom: "28px",
                }}
              >
                {q.number}
              </span>

              {/* Title */}
              <h3
                className="font-playfair"
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 700,
                  color: "#f4f1ea",
                  lineHeight: 1.25,
                  marginBottom: "14px",
                }}
              >
                {q.title}
              </h3>

              {/* Body */}
              <p
                className="font-montserrat"
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 300,
                  lineHeight: 1.82,
                  color: "rgba(244,241,234,0.62)",
                }}
              >
                {q.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* Card hover: subtle border brighten + lift */
        .quality-card {
          transition: transform 0.28s ease, border-color 0.28s ease, background 0.28s ease;
        }
        .quality-card:hover {
          transform: translateY(-6px);
          border-color: rgba(192,175,211,0.40);
          background: rgba(255,255,255,0.11) !important;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .quality-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .quality-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
