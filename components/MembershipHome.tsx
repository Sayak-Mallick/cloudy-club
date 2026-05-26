"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ─── Tokens ──────────────────────────────────────────────── */
const gold    = "#EFC13D";
const goldDim = "rgba(239,193,61,0.18)";
const goldBdr = "rgba(239,193,61,0.55)";
const bg      = "#0f0e0c";
const cardBg  = "#181714";
const cardBdr = "rgba(255,255,255,0.06)";
const cream   = "#F4F1EA";
const sub     = "rgba(244,241,234,0.48)";

const freeTier   = ["News-Updates", "Einladung zu Events", "Community Zugang"];
const memberTier = [
  "Priorisierte Aufnahme", "Stimmrecht",
  "Lounge-Zutritt",        "Member-Events",
];

/* ─── Component ─────────────────────────────────────────────── */
export default function MembershipHome() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {

      /* left text */
      gsap.fromTo(".mh-left-text > *",
        { opacity: 0, y: 22 },
        {
          opacity: 1, y: 0, duration: 0.65, stagger: 0.1, ease: "power2.out",
          scrollTrigger: { trigger: ".mh-left-text", start: "top 84%", once: true },
        }
      );

      /* Interessent card */
      gsap.fromTo(".mh-free-card",
        { opacity: 0, y: 28, scale: 0.97 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "power2.out", delay: 0.1,
          scrollTrigger: { trigger: ".mh-free-card", start: "top 84%", once: true },
        }
      );

      /* Membership card */
      gsap.fromTo(".mh-main-card",
        { opacity: 0, x: 36, scale: 0.97 },
        {
          opacity: 1, x: 0, scale: 1, duration: 0.82, ease: "power3.out", delay: 0.06,
          scrollTrigger: { trigger: ".mh-main-card", start: "top 84%", once: true },
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="membership-home"
      style={{
        background: bg,
        padding: "clamp(80px,10vw,130px) clamp(20px,4vw,40px)",
      }}
    >
      <div
        className="mh-inner"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: "clamp(32px,5vw,80px)",
          alignItems: "center",
        }}
      >

        {/* ══════════════════════════════════════════
            LEFT — headline + free tier card
        ══════════════════════════════════════════ */}
        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(24px,3vw,36px)" }}>

          {/* Text block */}
          <div className="mh-left-text" style={{ display: "flex", flexDirection: "column", gap: "0" }}>

            <span
              className="font-montserrat"
              style={{
                fontSize: "0.6875rem",
                fontWeight: 700,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: gold,
                marginBottom: "16px",
                display: "block",
              }}
            >
              Membership
            </span>

            <h2
              className="font-playfair"
              style={{
                fontSize: "clamp(2.5rem, 5.5vw, 4rem)",
                fontWeight: 700,
                color: cream,
                lineHeight: 1.0,
                letterSpacing: "-0.02em",
                marginBottom: "20px",
              }}
            >
              Mitglied werden
            </h2>

            <p
              className="font-montserrat"
              style={{
                fontSize: "clamp(0.875rem,1.8vw,1rem)",
                fontWeight: 300,
                lineHeight: 1.82,
                color: sub,
                maxWidth: "420px",
              }}
            >
              Sichere dir deinen Platz im Cannabis Social Club für Osnabrück.
              Die Plätze sind gesetzlich limitiert.
            </p>
          </div>

          {/* ── Interessent card ── */}
          <div
            className="mh-free-card"
            style={{
              background: cardBg,
              border: `1px solid ${cardBdr}`,
              borderRadius: "18px",
              padding: "clamp(24px,3vw,32px)",
              opacity: 0,
            }}
          >
            <p
              className="font-playfair"
              style={{ fontSize: "1.125rem", fontWeight: 700, color: cream, marginBottom: "6px" }}
            >
              Interessent
            </p>
            <p
              className="font-playfair"
              style={{
                fontSize: "clamp(1.5rem,3vw,2rem)",
                fontWeight: 700,
                color: "rgba(244,241,234,0.30)",
                lineHeight: 1,
                marginBottom: "24px",
              }}
            >
              Kostenlos
            </p>

            <ul style={{ listStyle: "none", marginBottom: "28px", display: "flex", flexDirection: "column", gap: "11px" }}>
              {freeTier.map(item => (
                <li key={item} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <Check size={12} strokeWidth={2.5} style={{ color: "rgba(244,241,234,0.35)", flexShrink: 0 }} />
                  <span className="font-montserrat" style={{ fontSize: "0.875rem", fontWeight: 300, color: sub }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/membership#anmeldung"
              className="mh-register-link font-montserrat"
            >
              Hier Registrieren <ArrowRight size={13} strokeWidth={2} />
            </Link>
          </div>
        </div>

        {/* ══════════════════════════════════════════
            RIGHT — main Membership card
        ══════════════════════════════════════════ */}
        <div
          className="mh-main-card"
          style={{
            background: cardBg,
            border: `1.5px solid ${goldBdr}`,
            borderRadius: "22px",
            padding: "clamp(28px,4vw,44px)",
            position: "relative",
            opacity: 0,
            /* subtle gold glow */
            boxShadow: `0 0 60px rgba(239,193,61,0.07)`,
          }}
        >

          {/* LIMITIERT badge */}
          <div
            style={{
              position: "absolute",
              top: 0, right: "clamp(16px,2.5vw,28px)",
              background: gold,
              color: bg,
              fontFamily: "Montserrat, sans-serif",
              fontSize: "0.625rem",
              fontWeight: 800,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              padding: "7px 16px 9px",
              borderRadius: "0 0 12px 12px",
            }}
          >
            Limitiert
          </div>

          {/* Title */}
          <h3
            className="font-playfair"
            style={{
              fontSize: "clamp(1.5rem,2.5vw,2rem)",
              fontWeight: 700,
              color: cream,
              lineHeight: 1.15,
              marginTop: "clamp(20px,2.5vw,28px)",
              marginBottom: "12px",
            }}
          >
            Membership
          </h3>

          {/* Price */}
          <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "clamp(24px,3vw,36px)" }}>
            <span
              className="font-playfair"
              style={{ fontSize: "clamp(2.5rem,5vw,3.75rem)", fontWeight: 700, color: gold, lineHeight: 1 }}
            >
              10€
            </span>
            <span
              className="font-montserrat"
              style={{ fontSize: "1rem", fontWeight: 300, color: sub }}
            >
              /Monat
            </span>
          </div>

          {/* Features 2 × 2 */}
          <div className="mh-feat-grid" style={{ marginBottom: "clamp(28px,4vw,40px)" }}>
            {memberTier.map(feat => (
              <div key={feat} style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                {/* check circle */}
                <div
                  style={{
                    width: 30, height: 30,
                    borderRadius: "50%",
                    background: goldDim,
                    border: `1px solid rgba(239,193,61,0.30)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Check size={13} strokeWidth={2.5} style={{ color: gold }} />
                </div>
                <span className="font-montserrat" style={{ fontSize: "0.9rem", fontWeight: 400, color: "rgba(244,241,234,0.75)" }}>
                  {feat}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link href="/membership#anmeldung" className="mh-cta-btn font-montserrat">
            Mitgliedschaft Anfragen
          </Link>
        </div>

      </div>{/* /mh-inner */}

      {/* ─── Scoped styles ───────────────────────────────── */}
      <style>{`
        /* Feature grid */
        .mh-feat-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px 24px;
        }

        /* Register link */
        .mh-register-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9375rem;
          font-weight: 700;
          color: ${cream};
          text-decoration: none;
          border-bottom: 1.5px solid rgba(244,241,234,0.30);
          padding-bottom: 2px;
          transition: color 0.2s ease, border-color 0.2s ease;
        }
        .mh-register-link:hover {
          color: ${gold};
          border-color: ${gold};
        }

        /* CTA button */
        .mh-cta-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 54px;
          background: ${gold};
          border: none;
          border-radius: 10px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: ${bg};
          text-decoration: none;
          transition: opacity 0.2s ease, transform 0.18s ease, box-shadow 0.2s ease;
        }
        .mh-cta-btn:hover {
          opacity: 0.90;
          transform: translateY(-2px);
          box-shadow: 0 10px 32px rgba(239,193,61,0.28);
        }

        /* Responsive */
        @media (max-width: 780px) {
          .mh-inner { grid-template-columns: 1fr !important; }
          .mh-main-card { order: -1; }
        }
        @media (max-width: 480px) {
          .mh-feat-grid { grid-template-columns: 1fr !important; gap: 14px !important; }
        }
      `}</style>
    </section>
  );
}
