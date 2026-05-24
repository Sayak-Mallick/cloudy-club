"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    year: "2024",
    title: "Gründung",
    text: "Gründung des Cloudy Club Osnabrück e.V. als Cannabis-Anbauvereinigung.",
    side: "right" as const,
  },
  {
    year: "2025",
    title: "Lizenzierung",
    text: "Beantragung und Erhalt der offiziellen Anbaulizenz nach KCanG.",
    side: "left" as const,
  },
  {
    year: "2025",
    title: "Aufbau",
    text: "Einrichtung der Anbauflächen und Aufbau der Community-Infrastruktur.",
    side: "right" as const,
  },
  {
    year: "2026",
    title: "Eröffnung",
    text: "Offizielle Eröffnung und erste Ausgabe an unsere Mitglieder.",
    side: "left" as const,
  },
];

export default function Milestones() {
  const sectionRef   = useRef<HTMLElement>(null);
  const eyebrowRef   = useRef<HTMLSpanElement>(null);
  const headlineRef  = useRef<HTMLHeadingElement>(null);
  const lineRef      = useRef<HTMLDivElement>(null);
  const timelineRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {

      /* ── Eyebrow ── */
      gsap.fromTo(eyebrowRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out",
          scrollTrigger: { trigger: headlineRef.current, start: "top 85%", once: true } }
      );

      /* ── Headline ── */
      gsap.fromTo(headlineRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.75, ease: "power3.out", delay: 0.1,
          scrollTrigger: { trigger: headlineRef.current, start: "top 85%", once: true } }
      );

      /* ── Line draws top → bottom scrubbed ── */
      gsap.fromTo(lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top center",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 72%",
            end: "bottom 72%",
            scrub: 0.6,
          },
        }
      );

      /* ── Cards: slide in from their side + dots scale up ── */
      milestones.forEach((m, i) => {
        const card = document.querySelector(`.ms-card-${i}`);
        const dot  = document.querySelector(`.ms-dot-${i}`);
        const fromX = m.side === "right" ? 40 : -40;

        gsap.fromTo(card,
          { opacity: 0, x: fromX },
          { opacity: 1, x: 0, duration: 0.75, ease: "power3.out",
            scrollTrigger: { trigger: card as Element, start: "top 82%", once: true } }
        );

        gsap.fromTo(dot,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.8)",
            scrollTrigger: { trigger: dot as Element, start: "top 84%", once: true } }
        );
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="milestones"
      style={{
        background: "var(--cream, #f5f0eb)",
        padding: "clamp(80px, 10vw, 130px) 24px",
      }}
    >
      {/* ── Header ── */}
      <div style={{ textAlign: "center", marginBottom: "72px" }}>
        <span
          ref={eyebrowRef}
          className="eyebrow"
          style={{ color: "rgba(50,45,40,0.45)", opacity: 0 }}
        >
          Unser Weg
        </span>
        <h2
          ref={headlineRef}
          className="font-playfair"
          style={{
            fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
            fontWeight: 700,
            color: "#1a1814",
            marginTop: "14px",
            lineHeight: 1.05,
            opacity: 0,
          }}
        >
          Meilensteine
        </h2>
      </div>

      {/* ── Timeline ── */}
      <div
        ref={timelineRef}
        style={{
          position: "relative",
          maxWidth: "960px",
          margin: "0 auto",
        }}
      >
        {/* Vertical center line */}
        <div
          ref={lineRef}
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            bottom: 0,
            width: "1px",
            background: "rgba(192,175,211,0.45)",
            transform: "translateX(-50%)",
            transformOrigin: "top center",
          }}
        />

        {/* Milestone rows */}
        {milestones.map((m, i) => (
          <div
            key={i}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 56px 1fr",
              alignItems: "flex-start",
              marginBottom: i < milestones.length - 1 ? "48px" : 0,
            }}
          >
            {/* Left slot */}
            <div style={{
              display: "flex",
              justifyContent: "flex-end",
              paddingRight: "32px",
              paddingTop: "8px",
            }}>
              {m.side === "left" && (
                <MilestoneCard m={m} index={i} />
              )}
            </div>

            {/* Dot — centered on the line */}
            <div style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "20px",
              position: "relative",
              zIndex: 2,
            }}>
              <div
                className={`ms-dot-${i}`}
                style={{
                  width: 28, height: 28,
                  borderRadius: "50%",
                  border: "1.5px solid rgba(192,175,211,0.55)",
                  background: "rgba(192,175,211,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  transformOrigin: "center",
                }}
              >
                <div style={{
                  width: 10, height: 10,
                  borderRadius: "50%",
                  background: "var(--lilac, #C0AFD3)",
                  opacity: 0.85,
                }} />
              </div>
            </div>

            {/* Right slot */}
            <div style={{
              paddingLeft: "32px",
              paddingTop: "8px",
            }}>
              {m.side === "right" && (
                <MilestoneCard m={m} index={i} />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 640px) {
          .ms-timeline-row {
            grid-template-columns: 32px 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ── Card sub-component ───────────────────────────────────── */
function MilestoneCard({
  m, index,
}: {
  m: { year: string; title: string; text: string; side: "left" | "right" };
  index: number;
}) {
  return (
    <div
      className={`ms-card-${index}`}
      style={{
        background: "#fff",
        border: "1px solid rgba(0,0,0,0.07)",
        borderRadius: "16px",
        padding: "28px 28px 30px",
        boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
        maxWidth: "340px",
        width: "100%",
        opacity: 0,
        /* Right cards align left-to-center; left cards align right-to-center */
        marginLeft: m.side === "right" ? 0 : "auto",
        marginRight: m.side === "left" ? 0 : "auto",
      }}
    >
      {/* Year */}
      <span
        className="font-montserrat"
        style={{
          fontSize: "0.75rem",
          fontWeight: 600,
          letterSpacing: "0.06em",
          color: "var(--lilac-dark, #9B88C0)",
          display: "block",
          marginBottom: "10px",
        }}
      >
        {m.year}
      </span>

      {/* Title */}
      <h3
        className="font-playfair"
        style={{
          fontSize: "1.1875rem",
          fontWeight: 700,
          color: "#1a1814",
          lineHeight: 1.25,
          marginBottom: "10px",
        }}
      >
        {m.title}
      </h3>

      {/* Body */}
      <p
        className="font-montserrat"
        style={{
          fontSize: "0.875rem",
          fontWeight: 300,
          lineHeight: 1.75,
          color: "rgba(26,24,20,0.55)",
        }}
      >
        {m.text}
      </p>
    </div>
  );
}
