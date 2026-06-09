"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SlidersHorizontal, Dna, Hourglass, FlaskConical } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const qualities = [
  {
    icon: SlidersHorizontal,
    title: "Controlled Environment",
    text: "Perfektes Klima, optimierte Luftfeuchte und lückenlose Hygiene — Schädlingsfreiheit ohne den Einsatz von Chemie, in jeder Wachstumsphase.",
    featured: true,
  },
  {
    icon: Dna,
    title: "Top Genetik",
    text: "Nur die besten Phänotypen schaffen es in unseren Anbau.",
  },
  {
    icon: Hourglass,
    title: "Slow Curing",
    text: "Geduldige Trocknung und Fermentation für das volle Aroma.",
  },
  {
    icon: FlaskConical,
    title: "Labor-Checks",
    text: "Regelmäßige Analysen auf Wirkstoffgehalt und Reinheit.",
  },
];

const [featured, ...rest] = qualities;

export default function Growing() {
  const sectionRef  = useRef<HTMLElement>(null);
  const eyebrowRef  = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const headLineRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(eyebrowRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.65, ease: "power2.out",
          scrollTrigger: { trigger: headlineRef.current, start: "top 85%", once: true } }
      );
      gsap.fromTo(headLineRef.current,
        { y: "110%", skewX: -3 },
        { y: "0%", skewX: 0, duration: 1.05, ease: "power4.out",
          scrollTrigger: { trigger: headlineRef.current, start: "top 82%", once: true } }
      );
      gsap.fromTo(".gw-featured",
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.85, ease: "power3.out",
          scrollTrigger: { trigger: ".gw-grid", start: "top 82%", once: true } }
      );
      gsap.fromTo(".gw-card",
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.6, stagger: 0.1, ease: "power2.out",
          scrollTrigger: { trigger: ".gw-grid", start: "top 82%", once: true } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="growing"
      ref={sectionRef}
      style={{
        background: "var(--bg-surface)",
        backgroundImage: `
          linear-gradient(rgba(192,175,211,0.035) 1px, transparent 1px),
          linear-gradient(90deg, rgba(192,175,211,0.035) 1px, transparent 1px)
        `,
        backgroundSize: "48px 48px",
        padding: "clamp(80px,10vw,140px) clamp(20px,4vw,40px)",
        position: "relative",
        overflow: "hidden",
        overflowX: "clip",
      }}
    >
      {/* Purple glow — bottom left */}
      <div aria-hidden="true" style={{
        position: "absolute",
        bottom: "-80px", left: "-60px",
        width: "500px", height: "500px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(155,136,192,0.14) 0%, transparent 68%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>

        {/* ── Header ── */}
        <div style={{ textAlign: "center", marginBottom: "clamp(40px,6vw,72px)" }}>
          <span
            ref={eyebrowRef}
            className="eyebrow"
            style={{ opacity: 0 }}
          >
            Qualitätsversprechen
          </span>
          <h2
            ref={headlineRef}
            className="font-playfair"
            style={{
              fontSize: "clamp(2.25rem,5vw,3.75rem)",
              fontWeight: 700,
              color: "var(--cream)",
              lineHeight: 1.08,
              marginTop: "16px",
              overflow: "hidden",
              paddingBottom: "0.06em",
            }}
          >
            <span ref={headLineRef} style={{ display: "block" }}>
              Qualität durch Hingabe
            </span>
          </h2>
        </div>

        {/* ── Asymmetric grid ── */}
        <div
          className="gw-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.5fr) minmax(0, 1fr)",
            gap: "16px",
            alignItems: "stretch",
          }}
        >
          {/* ── Featured card (left) ── */}
          <div
            className="gw-featured"
            style={{
              position: "relative",
              overflow: "hidden",
              background: "rgba(155,136,192,0.07)",
              border: "1px solid rgba(155,136,192,0.18)",
              borderTop: "2px solid var(--lilac)",
              borderRadius: "12px",
              padding: "clamp(28px,3.5vw,44px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: "clamp(280px,36vw,400px)",
              opacity: 0,
            }}
          >
            {/* Watermark icon */}
            <div aria-hidden="true" style={{
              position: "absolute",
              bottom: "-20px", right: "-16px",
              pointerEvents: "none",
              color: "var(--lilac)",
              opacity: 0.07,
            }}>
              <featured.icon size={160} strokeWidth={1.1} />
            </div>

            {/* Icon badge */}
            <div style={{
              width: 52, height: 52,
              borderRadius: "13px",
              background: "rgba(155,136,192,0.15)",
              border: "1px solid rgba(155,136,192,0.22)",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}>
              <featured.icon size={22} strokeWidth={1.5} style={{ color: "var(--lilac)" }} />
            </div>

            {/* Text */}
            <div>
              <h3 className="font-playfair" style={{
                fontSize: "clamp(1.375rem,2.8vw,1.875rem)",
                fontWeight: 700,
                color: "var(--cream)",
                lineHeight: 1.2,
                marginBottom: "14px",
              }}>
                {featured.title}
              </h3>
              <p className="font-montserrat" style={{
                fontSize: "0.9rem",
                fontWeight: 300,
                lineHeight: 1.85,
                color: "var(--text-secondary)",
                maxWidth: "420px",
              }}>
                {featured.text}
              </p>
            </div>
          </div>

          {/* ── Right column: 3 stacked cards ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {rest.map((q, i) => (
              <div
                key={i}
                className="gw-card"
                style={{
                  flex: 1,
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid var(--border)",
                  borderRadius: "10px",
                  padding: "clamp(18px,2.5vw,26px) clamp(16px,2vw,24px)",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  gap: "clamp(14px,2vw,20px)",
                  opacity: 0,
                }}
              >
                {/* Icon badge */}
                <div style={{
                  width: 40, height: 40,
                  borderRadius: "10px",
                  background: "rgba(155,136,192,0.12)",
                  border: "1px solid rgba(155,136,192,0.18)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                  marginTop: "2px",
                }}>
                  <q.icon size={17} strokeWidth={1.6} style={{ color: "var(--lilac)" }} />
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-playfair" style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "var(--cream)",
                    lineHeight: 1.25,
                    marginBottom: "8px",
                  }}>
                    {q.title}
                  </h3>
                  <p className="font-montserrat" style={{
                    fontSize: "0.8125rem",
                    fontWeight: 300,
                    lineHeight: 1.8,
                    color: "var(--text-secondary)",
                  }}>
                    {q.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .gw-featured {
          transition: border-color 0.3s ease, background 0.3s ease,
                      transform 0.3s cubic-bezier(0.22,0.68,0,1.2), box-shadow 0.3s ease;
        }
        .gw-featured:hover {
          border-color: rgba(155,136,192,0.36) !important;
          border-top-color: var(--lilac) !important;
          background: rgba(155,136,192,0.11) !important;
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(155,136,192,0.13);
        }
        .gw-card {
          transition: transform 0.3s cubic-bezier(0.22,0.68,0,1.2), border-color 0.3s ease,
                      background 0.3s ease, box-shadow 0.3s ease;
        }
        .gw-card:hover {
          transform: translateY(-4px);
          border-color: rgba(155,136,192,0.30) !important;
          background: rgba(155,136,192,0.08) !important;
          box-shadow: 0 10px 36px rgba(155,136,192,0.12);
        }

        @media (max-width: 780px) {
          .gw-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
