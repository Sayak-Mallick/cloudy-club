"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ── Data ─────────────────────────────────────────────── */
const freeTier = [
  "News-Updates",
  "Einladung zu Events",
  "Community Zugang",
];

const memberFeatures = [
  "Priorisierte Aufnahme",
  "Stimmrecht",
  "Lounge-Zutritt",
  "Member-Events",
];

export default function Membership() {
  const sectionRef  = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const line1Ref    = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      /* Headline line-mask */
      if (!prefersReduced) {
        gsap.fromTo(line1Ref.current,
          { y: "105%", skewX: -3 },
          { y: "0%", skewX: 0, duration: 0.95, ease: "power4.out",
            scrollTrigger: { trigger: headlineRef.current, start: "top 82%", once: true } }
        );
      }

      /* Left col: eyebrow + subtitle + free card */
      gsap.fromTo(".mem-left-text",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true } }
      );
      gsap.fromTo(".mem-free-card",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", delay: 0.12,
          scrollTrigger: { trigger: sectionRef.current, start: "top 78%", once: true } }
      );

      /* Right: main pricing card */
      gsap.fromTo(".mem-main-card",
        { opacity: 0, x: 32 },
        { opacity: 1, x: 0, duration: 0.85, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 76%", once: true } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="membership"
      ref={sectionRef}
      className="section"
      style={{ background: "var(--bg)" }}
    >
      <div
        className="section-inner mem-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.45fr",
          gap: "40px",
          alignItems: "center",
        }}
      >

        {/* ── LEFT COLUMN ───────────────────────────────── */}
        <div>
          {/* Eyebrow + headline */}
          <div className="mem-left-text" style={{ marginBottom: "28px", opacity: 0 }}>
            <span className="eyebrow">Membership</span>
            <h2
              ref={headlineRef}
              className="font-playfair"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
                fontWeight: 700,
                color: "var(--cream)",
                lineHeight: 1.0,
                margin: "12px 0 20px",
                overflow: "hidden",
              }}
            >
              <span style={{ display: "block", overflow: "hidden" }}>
                <span ref={line1Ref} style={{ display: "block" }}>
                  Mitglied werden
                </span>
              </span>
            </h2>
            <p
              className="font-montserrat"
              style={{
                fontSize: "0.9375rem",
                fontWeight: 300,
                lineHeight: 1.8,
                color: "var(--text-secondary)",
                maxWidth: "400px",
              }}
            >
              Sichere dir deinen Platz im Cannabis Social Club für Osnabrück.
              Die Plätze sind gesetzlich limitiert.
            </p>
          </div>

          {/* Free tier card */}
          <div
            className="mem-free-card"
            style={{
              background: "var(--bg-elevated)",
              border: "1px solid var(--border)",
              borderRadius: "16px",
              padding: "28px 28px 32px",
              opacity: 0,
            }}
          >
            <p className="font-playfair" style={{
              fontSize: "1.0625rem", fontWeight: 700,
              color: "var(--cream)", marginBottom: "4px",
            }}>
              Interessent
            </p>
            <p className="font-playfair" style={{
              fontSize: "1.5rem", fontWeight: 700,
              color: "var(--text-secondary)", marginBottom: "20px",
            }}>
              Kostenlos
            </p>

            <ul style={{ listStyle: "none", marginBottom: "24px" }}>
              {freeTier.map((item) => (
                <li key={item} style={{
                  display: "flex", alignItems: "center", gap: "10px",
                  padding: "7px 0",
                }}>
                  <Check size={13} style={{ color: "var(--lilac)", flexShrink: 0 }} />
                  <span className="font-montserrat" style={{
                    fontSize: "0.875rem", fontWeight: 300,
                    color: "var(--text-secondary)",
                  }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/membership"
              className="font-montserrat"
              style={{
                display: "inline-flex", alignItems: "center", gap: "7px",
                fontSize: "0.875rem", fontWeight: 600,
                color: "var(--cream)", textDecoration: "none",
                borderBottom: "1px solid rgba(244,241,234,0.35)",
                paddingBottom: "2px",
                transition: "opacity 0.2s ease",
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.65")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              Hier Registrieren <ArrowRight size={13} strokeWidth={2} />
            </Link>
          </div>
        </div>

        {/* ── RIGHT COLUMN — main membership card ──────── */}
        <div
          className="mem-main-card"
          style={{
            position: "relative",
            background: "var(--bg-card)",
            border: "1px solid var(--lilac)",
            borderRadius: "20px",
            padding: "40px 36px 44px",
            opacity: 0,
            /* Subtle lilac glow */
            boxShadow: "0 0 48px rgba(192,175,211,0.08)",
          }}
        >
          {/* LIMITIERT badge — top-right tab */}
          <div style={{
            position: "absolute",
            top: 0, right: 24,
            background: "var(--lilac)",
            color: "var(--bg)",
            fontFamily: "Montserrat, sans-serif",
            fontSize: "0.625rem",
            fontWeight: 700,
            letterSpacing: "0.18em",
            padding: "6px 14px 8px",
            borderRadius: "0 0 10px 10px",
          }}>
            LIMITIERT
          </div>

          {/* Title */}
          <h3 className="font-playfair" style={{
            fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
            fontWeight: 700, color: "var(--cream)",
            marginBottom: "12px", marginTop: "8px",
          }}>
            Membership
          </h3>

          {/* Price */}
          <div style={{ display: "flex", alignItems: "baseline", gap: "6px", marginBottom: "32px" }}>
            <span className="font-playfair" style={{
              fontSize: "clamp(2.75rem, 5vw, 3.75rem)",
              fontWeight: 700, color: "var(--lilac)",
              lineHeight: 1,
            }}>
              10€
            </span>
            <span className="font-montserrat" style={{
              fontSize: "1rem", fontWeight: 300,
              color: "var(--text-secondary)",
            }}>
              /Monat
            </span>
          </div>

          {/* Features — 2-column grid */}
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr",
            gap: "14px 24px", marginBottom: "36px",
          }}>
            {memberFeatures.map((f) => (
              <div key={f} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                {/* Circular check badge */}
                <div style={{
                  width: 28, height: 28, borderRadius: "50%",
                  background: "rgba(192,175,211,0.14)",
                  border: "1px solid rgba(192,175,211,0.28)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <Check size={12} strokeWidth={2.5} style={{ color: "var(--lilac)" }} />
                </div>
                <span className="font-montserrat" style={{
                  fontSize: "0.9rem", fontWeight: 400,
                  color: "var(--text-secondary)",
                }}>
                  {f}
                </span>
              </div>
            ))}
          </div>

          {/* CTA button */}
          <Link
            href="/membership"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "52px",
              background: "var(--lilac)",
              borderRadius: "10px",
              fontFamily: "Montserrat, sans-serif",
              fontSize: "0.8125rem",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--bg)",
              textDecoration: "none",
              transition: "opacity 0.22s ease, transform 0.22s ease",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.opacity = "0.88";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
            }}
          >
            Mitgliedschaft Anfragen
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .mem-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
}
