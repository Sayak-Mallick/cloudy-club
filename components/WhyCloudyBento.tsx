"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, Leaf, Users, Zap, Lock, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ── Feature cards ───────────────────────────────────── */
const features = [
  {
    icon: ShieldCheck,
    title: "100% Legal & Konform",
    text: "Wir handeln strikt nach dem KCanG. Deine Mitgliedschaft ist rechtlich abgesichert und vollständig transparent.",
    large: true,
  },
  {
    icon: Leaf,
    title: "Vereinseigener Anbau",
    text: "Eigene Anbauflächen unter pharmazeutischen Bedingungen — jede Charge geprüft.",
    large: false,
  },
  {
    icon: Users,
    title: "Lebendige Community",
    text: "Workshops, Tastings und Events fördern den Austausch in sicherer Atmosphäre.",
    large: false,
  },
  {
    icon: Zap,
    title: "High-Tech Anbau",
    text: "LED-Klimatechnik für optimale Pflanzenentwicklung und volle Terpen-Entfaltung.",
    large: false,
  },
  {
    icon: Lock,
    title: "Ohne Schadstoffe",
    text: "Frei von Pestiziden und Streckmitteln. Laborgeprüfte Reinheit aus kontrolliertem Anbau.",
    large: false,
  },
];

export default function WhyCloudyBento() {
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
      gsap.fromTo(".wcb-eyebrow",
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.65, ease: "power2.out",
          scrollTrigger: { trigger: headerRef.current, start: "top 85%", once: true } }
      );
      gsap.fromTo(".wcb-headline",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.08,
          scrollTrigger: { trigger: headerRef.current, start: "top 85%", once: true } }
      );
      gsap.fromTo(".wcb-subtitle",
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.65, ease: "power2.out", delay: 0.18,
          scrollTrigger: { trigger: headerRef.current, start: "top 85%", once: true } }
      );

      /* ── Cards stagger ── */
      gsap.fromTo(".wcb-card",
        { opacity: 0, y: 30, scale: 0.97 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.65, stagger: 0.1, ease: "power2.out",
          scrollTrigger: { trigger: ".wcb-grid", start: "top 82%", once: true },
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
        minHeight: "100svh",
        position: "relative",
        overflow: "hidden",
        overflowX: "clip",
        display: "flex",
        alignItems: "center",
        padding: "clamp(40px,7vw,80px) clamp(16px,4vw,24px)",
      }}
    >
      {/* ── Parallax background ── */}
      <div
        ref={bgRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-20%", left: 0,
          width: "100%", height: "140%",
          backgroundImage: "url('https://images.unsplash.com/photo-1448375240586-882707db888b?w=1800&q=80')",
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
          background: "rgba(8,8,6,0.82)",
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
          borderRadius: "clamp(16px,3vw,24px)",
          padding: "clamp(24px,4vw,52px) clamp(20px,4vw,48px)",
        }}
      >

        {/* ── Header row ── */}
        <div
          ref={headerRef}
          className="wcb-header-row"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "clamp(20px,3vw,28px)",
            gap: "clamp(12px,3vw,32px)",
            flexWrap: "wrap",
          }}
        >
          {/* Left */}
          <div>
            <span
              className="wcb-eyebrow eyebrow"
              style={{ opacity: 0, color: "rgba(192,175,211,0.6)" }}
            >
              Warum Cloudy Club
            </span>
            <h2
              className="wcb-headline font-playfair"
              style={{
                fontSize: "clamp(1.6rem, 5vw, 3rem)",
                fontWeight: 700,
                color: "var(--cream)",
                lineHeight: 1.1,
                marginTop: "10px",
                opacity: 0,
              }}
            >
              Warum{" "}
              <span style={{ color: "var(--lilac)", fontStyle: "italic" }}>
                Cloudy Club?
              </span>
            </h2>
          </div>

          {/* Right: subtitle */}
          <p
            className="wcb-subtitle font-montserrat"
            style={{
              fontSize: "clamp(0.8125rem,2vw,0.9375rem)",
              fontWeight: 300,
              color: "rgba(244,241,234,0.50)",
              maxWidth: "340px",
              lineHeight: 1.75,
              opacity: 0,
            }}
          >
            Wir setzen neue Maßstäbe für Anbauvereinigungen in der Region Osnabrück.
          </p>
        </div>

        {/* ── Bento grid ── */}
        <div
          className="wcb-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "clamp(10px,1.5vw,14px)",
          }}
        >
          {features.map((f, i) => (
            <div
              key={i}
              className="wcb-card"
              style={{
                gridColumn: f.large ? "span 2" : "span 1",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "clamp(12px,2vw,16px)",
                padding: "clamp(16px,2.5vw,24px) clamp(16px,2.5vw,24px) clamp(20px,3vw,28px)",
                display: "flex",
                flexDirection: "column",
                minHeight: f.large ? "220px" : "190px",
                opacity: 0,
                transition: "background 0.25s ease, border-color 0.25s ease",
                cursor: "default",
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
                {/* Icon badge */}
                <div className="wcb-icon-wrap" style={{
                  width: 38, height: 38,
                  borderRadius: "10px",
                  background: "rgba(192,175,211,0.12)",
                  border: "1px solid rgba(192,175,211,0.18)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <f.icon className="wcb-icon" size={17} strokeWidth={1.6} style={{ color: "var(--lilac)" }} />
                </div>

                {/* Arrow */}
                <ArrowUpRight
                  className="wcb-arrow"
                  size={16}
                  strokeWidth={1.6}
                  style={{ color: "rgba(244,241,234,0.22)" }}
                />
              </div>

              {/* Spacer pushes text to bottom */}
              <div style={{ flex: 1 }} />

              {/* Text */}
              <div>
                <h3
                  className="font-playfair"
                  style={{
                    fontSize: f.large ? "1.25rem" : "1.0625rem",
                    fontWeight: 700,
                    color: "var(--cream)",
                    marginTop: "16px",
                    marginBottom: "8px",
                    lineHeight: 1.25,
                  }}
                >
                  {f.title}
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
                  {f.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* ── Tablet (≤860px): 2-col grid ── */
        @media (max-width: 860px) {
          .wcb-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .wcb-grid .wcb-card:first-child {
            grid-column: span 2 !important;
          }
          .wcb-card {
            min-height: 160px !important;
          }
        }

        /* ── Mobile (≤768px): full single column ── */
        @media (max-width: 768px) {
          .wcb-header-row {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 10px !important;
          }
          .wcb-subtitle {
            max-width: 100% !important;
          }
          .wcb-grid {
            grid-template-columns: 1fr !important;
            gap: 10px !important;
          }
          .wcb-grid .wcb-card,
          .wcb-grid .wcb-card:first-child {
            grid-column: span 1 !important;
            width: 100% !important;
            min-height: 130px !important;
          }
          /* smaller icon box */
          .wcb-icon-wrap {
            width: 28px !important;
            height: 28px !important;
            border-radius: 8px !important;
          }
          .wcb-icon {
            width: 13px !important;
            height: 13px !important;
          }
          .wcb-arrow {
            width: 13px !important;
            height: 13px !important;
          }
        }
      `}</style>
    </section>
  );
}
