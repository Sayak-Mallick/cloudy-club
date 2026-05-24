"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, MapPin, Users, CalendarDays, Eye, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ── Identity cards ───────────────────────────────────── */
const cards = [
  {
    icon: Award,
    title: "Cannabis Social Club e.V.",
    text: "Wir sind ein eingetragener Verein nach § 26 BGB — gegründet 2024 in Osnabrück als erste lizenzierte Anbauvereinigung der Region.",
    large: true,
  },
  {
    icon: MapPin,
    title: "Verwurzelt in Osnabrück",
    text: "Unser Herz schlägt für die Friedensstadt. Lokal verankert, regional vernetzt.",
    large: false,
  },
  {
    icon: Users,
    title: "500+ Mitgliederplätze",
    text: "Gesetzlich begrenzt für höchste Betreuungsqualität und exklusive Mitgliedschaft.",
    large: false,
  },
  {
    icon: CalendarDays,
    title: "Gegründet 2024",
    text: "Pioniere der neuen Cannabis-Gesetzgebung in Deutschland — von Anfang an dabei.",
    large: false,
  },
  {
    icon: Eye,
    title: "Volle Transparenz",
    text: "Alle Mitglieder erhalten Einsicht in Anbau, Finanzen und Vereinsentscheidungen.",
    large: false,
  },
];

export default function WirSind() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef      = useRef<HTMLDivElement>(null);
  const headerRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {

      /* ── Parallax background ── */
      gsap.fromTo(bgRef.current,
        { y: 0 },
        {
          y: "-18%",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      /* ── Header ── */
      gsap.fromTo(".ws-eyebrow",
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.65, ease: "power2.out",
          scrollTrigger: { trigger: headerRef.current, start: "top 85%", once: true } }
      );
      gsap.fromTo(".ws-headline",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.08,
          scrollTrigger: { trigger: headerRef.current, start: "top 85%", once: true } }
      );
      gsap.fromTo(".ws-subtitle",
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.65, ease: "power2.out", delay: 0.18,
          scrollTrigger: { trigger: headerRef.current, start: "top 85%", once: true } }
      );

      /* ── Cards stagger ── */
      gsap.fromTo(".ws-card",
        { opacity: 0, y: 30, scale: 0.97 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.65, stagger: 0.1, ease: "power2.out",
          scrollTrigger: { trigger: ".ws-grid", start: "top 82%", once: true },
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="wir-sind"
      ref={sectionRef}
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        padding: "clamp(48px,7vw,80px) 24px",
      }}
    >
      {/* ── Parallax background — city aerial ── */}
      <div
        ref={bgRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-20%", left: 0,
          width: "100%", height: "140%",
          backgroundImage: "url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1800&q=80')",
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
          position: "absolute", inset: 0,
          background: "rgba(8,8,6,0.80)",
          zIndex: 1,
        }}
      />

      {/* ── Main container ── */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
          background: "rgba(22,21,18,0.88)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: "24px",
          padding: "clamp(32px,4vw,52px) clamp(28px,4vw,48px)",
        }}
      >
        {/* ── Header row ── */}
        <div
          ref={headerRef}
          className="ws-header-row"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "28px",
            gap: "32px",
            flexWrap: "wrap",
          }}
        >
          {/* Left */}
          <div>
            <span
              className="ws-eyebrow eyebrow"
              style={{ opacity: 0, color: "rgba(192,175,211,0.6)" }}
            >
              Über uns
            </span>
            <h2
              className="ws-headline font-playfair"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                color: "var(--cream)",
                lineHeight: 1.1,
                marginTop: "10px",
                opacity: 0,
              }}
            >
              Wir sind{" "}
              <span style={{ color: "var(--lilac)", fontStyle: "italic" }}>
                Cloudy Club.
              </span>
            </h2>
          </div>

          {/* Right: subtitle */}
          <p
            className="ws-subtitle font-montserrat"
            style={{
              fontSize: "0.9375rem",
              fontWeight: 300,
              color: "rgba(244,241,234,0.50)",
              maxWidth: "340px",
              lineHeight: 1.75,
              opacity: 0,
            }}
          >
            Osnabrücks erste lizenzierte Cannabis-Anbauvereinigung — offen, sicher und gemeinschaftlich.
          </p>
        </div>

        {/* ── Bento grid ── */}
        <div
          className="ws-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "14px",
          }}
        >
          {cards.map((c, i) => (
            <div
              key={i}
              className="ws-card"
              style={{
                gridColumn: c.large ? "span 2" : "span 1",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "16px",
                padding: "24px 24px 28px",
                display: "flex",
                flexDirection: "column",
                minHeight: c.large ? "220px" : "190px",
                opacity: 0,
                transition: "background 0.25s ease, border-color 0.25s ease",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.background = "rgba(192,175,211,0.07)";
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(192,175,211,0.22)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.04)";
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.08)";
              }}
            >
              {/* Top row: icon + arrow */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div style={{
                  width: 38, height: 38,
                  borderRadius: "10px",
                  background: "rgba(192,175,211,0.12)",
                  border: "1px solid rgba(192,175,211,0.18)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <c.icon size={17} strokeWidth={1.6} style={{ color: "var(--lilac)" }} />
                </div>
                <ArrowUpRight size={16} strokeWidth={1.6} style={{ color: "rgba(244,241,234,0.22)" }} />
              </div>

              {/* Spacer */}
              <div style={{ flex: 1 }} />

              {/* Text */}
              <div>
                <h3
                  className="font-playfair"
                  style={{
                    fontSize: c.large ? "1.25rem" : "1.0625rem",
                    fontWeight: 700,
                    color: "var(--cream)",
                    marginBottom: "8px",
                    lineHeight: 1.25,
                  }}
                >
                  {c.title}
                </h3>
                <p
                  className="font-montserrat"
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 300,
                    lineHeight: 1.75,
                    color: "rgba(244,241,234,0.48)",
                  }}
                >
                  {c.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .ws-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .ws-grid .ws-card:first-child { grid-column: span 2 !important; }
        }
        @media (max-width: 540px) {
          .ws-grid { grid-template-columns: 1fr !important; }
          .ws-grid .ws-card { grid-column: span 1 !important; }
          .ws-header-row { flex-direction: column; align-items: flex-start !important; }
        }
      `}</style>
    </section>
  );
}
