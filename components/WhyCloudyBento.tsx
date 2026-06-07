"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, Leaf, Users, Zap, Lock } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  { icon: ShieldCheck, title: "100% Legal & Konform",  text: "Wir handeln strikt nach dem KCanG. Deine Mitgliedschaft ist rechtlich abgesichert und vollständig transparent." },
  { icon: Leaf,        title: "Vereinseigener Anbau",  text: "Eigene Anbauflächen unter pharmazeutischen Bedingungen — jede Charge geprüft." },
  { icon: Users,       title: "Lebendige Community",   text: "Workshops, Tastings und Events fördern den Austausch in sicherer Atmosphäre." },
  { icon: Zap,         title: "High-Tech Anbau",       text: "LED-Klimatechnik für optimale Pflanzenentwicklung und volle Terpen-Entfaltung." },
  { icon: Lock,        title: "Ohne Schadstoffe",      text: "Frei von Pestiziden und Streckmitteln. Laborgeprüfte Reinheit aus kontrolliertem Anbau." },
];

export default function WhyCloudyBento() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(".wcb-eyebrow",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out",
          scrollTrigger: { trigger: headerRef.current, start: "top 85%", once: true } }
      );
      gsap.fromTo(".wcb-headline-inner",
        { y: "108%", skewX: -2 },
        { y: "0%", skewX: 0, duration: 1.05, ease: "power4.out", delay: 0.06,
          scrollTrigger: { trigger: headerRef.current, start: "top 85%", once: true } }
      );
      gsap.fromTo(".wcb-subtitle",
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.65, ease: "power2.out", delay: 0.22,
          scrollTrigger: { trigger: headerRef.current, start: "top 85%", once: true } }
      );
      gsap.fromTo(".wcb-row",
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.55, stagger: 0.1, ease: "power2.out",
          scrollTrigger: { trigger: ".wcb-items", start: "top 82%", once: true } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="why"
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
        top: "-80px", right: "-60px",
        width: "480px", height: "480px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(155,136,192,0.13) 0%, transparent 68%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>

        {/* ── Two-column outer layout ── */}
        <div
          className="wcb-outer"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.65fr",
            gap: "clamp(40px,6vw,80px)",
            alignItems: "start",
          }}
        >
          {/* ── Left: sticky header ── */}
          <div
            ref={headerRef}
            className="wcb-header"
            style={{ position: "sticky", top: "clamp(80px,10vw,100px)" }}
          >
            <span className="wcb-eyebrow eyebrow" style={{ opacity: 0 }}>
              Warum Cloudy Club
            </span>
            <h2
              className="font-playfair"
              style={{
                fontSize: "clamp(1.875rem,4vw,3rem)",
                fontWeight: 700,
                color: "var(--cream)",
                lineHeight: 1.1,
                marginTop: "14px",
                overflow: "hidden",
                paddingBottom: "0.05em",
              }}
            >
              <span className="wcb-headline-inner" style={{ display: "block" }}>
                Warum{" "}
                <em style={{ color: "var(--lilac)", fontStyle: "italic" }}>
                  Cloudy Club?
                </em>
              </span>
            </h2>
            <p
              className="wcb-subtitle font-montserrat"
              style={{
                marginTop: "20px",
                fontSize: "0.9rem",
                fontWeight: 300,
                color: "var(--text-secondary)",
                lineHeight: 1.82,
                opacity: 0,
              }}
            >
              Wir setzen neue Maßstäbe für Anbauvereinigungen in der Region Osnabrück.
            </p>

            {/* Accent line */}
            <div style={{
              marginTop: "32px",
              width: "36px",
              height: "2px",
              background: "var(--lilac)",
            }} />
          </div>

          {/* ── Right: feature rows ── */}
          <div className="wcb-items">
            {features.map((f, i) => (
              <div
                key={i}
                className="wcb-row"
                style={{
                  display: "grid",
                  gridTemplateColumns: "56px 1fr",
                  gap: "clamp(16px,2.5vw,24px)",
                  alignItems: "flex-start",
                  padding: "clamp(20px,3vw,28px) clamp(12px,1.5vw,16px)",
                  borderTop: "1px solid var(--border)",
                  ...(i === features.length - 1
                    ? { borderBottom: "1px solid var(--border)" }
                    : {}),
                  opacity: 0,
                }}
              >
                {/* Icon badge — prominent purple */}
                <div
                  className="wcb-badge"
                  style={{
                    width: 52, height: 52,
                    borderRadius: "13px",
                    background: "rgba(155,136,192,0.18)",
                    border: "1px solid rgba(155,136,192,0.42)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "background 0.25s ease, border-color 0.25s ease",
                  }}
                >
                  <f.icon size={22} strokeWidth={1.5} style={{ color: "var(--lilac)" }} />
                </div>

                {/* Text */}
                <div style={{ paddingTop: "4px" }}>
                  <h3
                    className="font-playfair"
                    style={{
                      fontSize: "1.0625rem",
                      fontWeight: 700,
                      color: "var(--cream)",
                      lineHeight: 1.25,
                      marginBottom: "8px",
                    }}
                  >
                    {f.title}
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
                    {f.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .wcb-row {
          transition: background 0.22s ease;
          cursor: default;
        }
        .wcb-row:hover {
          background: rgba(155,136,192,0.05);
        }
        .wcb-row:hover .wcb-badge {
          background: rgba(155,136,192,0.28) !important;
          border-color: rgba(155,136,192,0.62) !important;
        }

        @media (max-width: 780px) {
          .wcb-outer { grid-template-columns: 1fr !important; gap: 40px !important; }
          .wcb-header { position: static !important; }
        }
        @media (max-width: 480px) {
          .wcb-row { grid-template-columns: 44px 1fr !important; }
          .wcb-badge { width: 40px !important; height: 40px !important; }
        }
      `}</style>
    </section>
  );
}
