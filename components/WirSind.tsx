"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const featured = {
  stat: "§ 26",
  label: "BGB · Eingetragener Verein",
  title: "Cannabis Social Club e.V.",
  body: "Eingetragener Verein nach BGB — gegründet 2024 in Osnabrück als erste lizenzierte Anbauvereinigung der Region.",
};

const stats = [
  { stat: "500+", title: "Mitgliederplätze",  body: "Gesetzlich begrenzt für höchste Betreuungsqualität und exklusive Mitgliedschaft." },
  { stat: "#1",   title: "Osnabrück",          body: "Erste lizenzierte Anbauvereinigung der Friedensstadt. Lokal verankert, regional vernetzt." },
  { stat: "2024", title: "Gegründet",           body: "Pioniere der neuen Cannabis-Gesetzgebung in Deutschland — von Anfang an dabei." },
  { stat: "100%", title: "Transparent",         body: "Anbau, Finanzen und Vereinsentscheidungen offen einsehbar für alle Mitglieder." },
];

export default function WirSind() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(".ws-eyebrow",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out",
          scrollTrigger: { trigger: headerRef.current, start: "top 85%", once: true } }
      );
      gsap.fromTo(".ws-headline-inner",
        { y: "108%", skewX: -2 },
        { y: "0%", skewX: 0, duration: 1.05, ease: "power4.out", delay: 0.06,
          scrollTrigger: { trigger: headerRef.current, start: "top 85%", once: true } }
      );
      gsap.fromTo(".ws-subtitle",
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.65, ease: "power2.out", delay: 0.22,
          scrollTrigger: { trigger: headerRef.current, start: "top 85%", once: true } }
      );
      gsap.fromTo(".ws-featured",
        { opacity: 0, x: -16 },
        { opacity: 1, x: 0, duration: 0.85, ease: "power3.out",
          scrollTrigger: { trigger: ".ws-grid", start: "top 82%", once: true } }
      );
      gsap.fromTo(".ws-stat-card",
        { opacity: 0, y: 22 },
        { opacity: 1, y: 0, duration: 0.55, stagger: 0.09, ease: "power2.out",
          scrollTrigger: { trigger: ".ws-grid", start: "top 82%", once: true } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="wir-sind"
      ref={sectionRef}
      style={{
        background: "var(--bg)",
        padding: "clamp(80px,10vw,140px) clamp(20px,4vw,40px)",
        position: "relative",
        overflow: "hidden",
        overflowX: "clip",
      }}
    >
      {/* Decorative glow — top right */}
      <div aria-hidden="true" style={{
        position: "absolute",
        top: "-100px", right: "-60px",
        width: "520px", height: "520px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(155,136,192,0.13) 0%, transparent 68%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>

        {/* ── Section header ── */}
        <div ref={headerRef} style={{ marginBottom: "clamp(40px,6vw,72px)" }}>
          <span className="ws-eyebrow eyebrow" style={{ opacity: 0 }}>Über uns</span>
          <h2
            className="font-playfair"
            style={{
              fontSize: "clamp(2rem,5vw,3.5rem)",
              fontWeight: 700,
              color: "var(--cream)",
              lineHeight: 1.08,
              marginTop: "14px",
              overflow: "hidden",
              paddingBottom: "0.05em",
            }}
          >
            <span className="ws-headline-inner" style={{ display: "block" }}>
              Wir sind{" "}
              <em style={{ color: "var(--lilac)", fontStyle: "italic" }}>Cloudy Club.</em>
            </span>
          </h2>
          <p
            className="ws-subtitle font-montserrat"
            style={{
              marginTop: "20px",
              fontSize: "0.9375rem",
              fontWeight: 300,
              color: "var(--text-secondary)",
              maxWidth: "420px",
              lineHeight: 1.82,
              opacity: 0,
            }}
          >
            Osnabrücks erste lizenzierte Cannabis-Anbauvereinigung — offen, sicher und gemeinschaftlich.
          </p>
        </div>

        {/* ── Grid ── */}
        <div
          className="ws-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
          }}
        >
          {/* Featured card — spans 2 columns */}
          <div
            className="ws-featured"
            style={{
              gridColumn: "span 2",
              position: "relative",
              overflow: "hidden",
              background: "rgba(155,136,192,0.055)",
              border: "1px solid rgba(155,136,192,0.16)",
              borderTop: "2px solid var(--lilac)",
              borderRadius: "12px",
              padding: "clamp(24px,3.5vw,40px)",
              minHeight: "clamp(220px,28vw,300px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              opacity: 0,
              transition: "border-color 0.28s ease",
            }}
          >
            {/* Watermark stat */}
            <span aria-hidden="true" style={{
              position: "absolute",
              top: "-0.08em", right: "20px",
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(5rem,12vw,10rem)",
              fontWeight: 700,
              fontStyle: "italic",
              color: "var(--lilac)",
              opacity: 0.08,
              lineHeight: 1,
              userSelect: "none",
              pointerEvents: "none",
              letterSpacing: "-0.02em",
            }}>
              {featured.stat}
            </span>

            {/* Top label */}
            <span style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "0.625rem",
              fontWeight: 700,
              letterSpacing: "0.26em",
              textTransform: "uppercase",
              color: "var(--lilac)",
              opacity: 0.85,
            }}>
              {featured.label}
            </span>

            {/* Bottom: title + body */}
            <div>
              <h3 className="font-playfair" style={{
                fontSize: "clamp(1.25rem,2.8vw,1.875rem)",
                fontWeight: 700,
                color: "var(--cream)",
                lineHeight: 1.2,
                marginBottom: "12px",
              }}>
                {featured.title}
              </h3>
              <p className="font-montserrat" style={{
                fontSize: "0.875rem",
                fontWeight: 300,
                lineHeight: 1.8,
                color: "var(--text-secondary)",
                maxWidth: "500px",
              }}>
                {featured.body}
              </p>
            </div>
          </div>

          {/* Small stat cards */}
          {stats.map((s, i) => (
            <div
              key={i}
              className="ws-stat-card"
              style={{
                borderLeft: "2px solid var(--lilac)",
                borderRadius: "0 8px 8px 0",
                padding: "clamp(18px,2.5vw,28px) clamp(16px,2vw,24px)",
                display: "flex",
                flexDirection: "column",
                minHeight: "clamp(180px,22vw,240px)",
                background: "rgba(255,255,255,0.02)",
                opacity: 0,
                transition: "background 0.25s ease",
              }}
            >
              {/* Stat number */}
              <span className="font-playfair" style={{
                fontSize: "clamp(2rem,3.8vw,3rem)",
                fontWeight: 700,
                fontStyle: "italic",
                color: "var(--lilac)",
                lineHeight: 1,
                marginBottom: "auto",
              }}>
                {s.stat}
              </span>

              {/* Thin rule */}
              <div style={{
                width: "24px",
                height: "1px",
                background: "rgba(192,175,211,0.30)",
                margin: "clamp(14px,2vw,20px) 0",
              }} />

              {/* Text */}
              <div>
                <h3 className="font-playfair" style={{
                  fontSize: "0.9375rem",
                  fontWeight: 700,
                  color: "var(--cream)",
                  marginBottom: "8px",
                  lineHeight: 1.2,
                }}>
                  {s.title}
                </h3>
                <p className="font-montserrat" style={{
                  fontSize: "0.8125rem",
                  fontWeight: 300,
                  lineHeight: 1.75,
                  color: "var(--text-secondary)",
                }}>
                  {s.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .ws-stat-card:hover {
          background: rgba(155,136,192,0.06) !important;
        }
        .ws-featured:hover {
          border-color: rgba(155,136,192,0.32) !important;
          border-top-color: var(--lilac) !important;
        }

        @media (max-width: 860px) {
          .ws-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .ws-featured { grid-column: span 2 !important; }
        }
        @media (max-width: 540px) {
          .ws-grid { grid-template-columns: 1fr !important; }
          .ws-featured { grid-column: span 1 !important; }
          .ws-stat-card { min-height: 150px !important; }
        }
      `}</style>
    </section>
  );
}
