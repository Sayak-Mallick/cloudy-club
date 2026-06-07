"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NEARBY_CITIES, CLUB } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

export default function SEOSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(".seo-chip",
        { opacity: 0, y: 12 },
        {
          opacity: 1, y: 0,
          duration: 0.5, stagger: 0.04, ease: "power2.out",
          scrollTrigger: { trigger: ".seo-grid", start: "top 85%", once: true },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section"
      style={{ background: "var(--bg-surface)" }}
      aria-label="Cloudy Club in der Region"
    >
      <div className="section-inner">
        {/* Header */}
        <div className="section-header center" style={{ marginBottom: "56px" }}>
          <span className="eyebrow">Aktiv in deiner Stadt</span>
          <h2 className="font-playfair section-title">
            Dein Cannabis Social Club für{" "}
            <span style={{ color: "var(--lilac)", fontStyle: "italic" }}>
              {CLUB.city} und Umgebung
            </span>
          </h2>
          <p className="section-subtitle">
            Der {CLUB.fullName} ist die zentrale Anlaufstelle für Cannabis in {CLUB.city} und der Region.
            Wir vertreten Mitglieder aus dem gesamten Umkreis. Egal ob in einem Cannabis Social Club in {CLUB.city},
            einem Cannabis Club in Georgsmarienhütte oder eine ähnliche Anlaufstelle in Bramsche suchst —
            bei uns bist du richtig.
          </p>
        </div>

        {/* City cards grid */}
        <div className="seo-grid">
          {NEARBY_CITIES.map((city, i) => (
            <span
              key={i}
              className="seo-chip font-montserrat"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                fontSize: "0.8125rem",
                fontWeight: 500,
                letterSpacing: "0.04em",
                lineHeight: 1.4,
                color: "var(--text-secondary)",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                padding: "20px 14px",
                minHeight: "80px",
                transition: "color 0.22s ease, border-color 0.22s ease, background 0.22s ease",
                cursor: "default",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.color = "var(--cream)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border-hover)";
                (e.currentTarget as HTMLElement).style.background = "var(--bg-elevated)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLElement).style.background = "var(--bg-card)";
              }}
            >
              {city}
            </span>
          ))}
        </div>

        <style>{`
          .seo-grid {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 12px;
          }
          @media (max-width: 900px) {
            .seo-grid { grid-template-columns: repeat(3, 1fr) !important; }
          }
          @media (max-width: 560px) {
            .seo-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
        `}</style>

        {/* Bottom note */}
        <p
          className="font-montserrat"
          style={{
            textAlign: "center",
            marginTop: "48px",
            fontSize: "0.8125rem",
            fontWeight: 300,
            color: "var(--text-muted)",
            lineHeight: 1.75,
          }}
        >
          Der {CLUB.fullName} ist ein eingetragener Cannabis Social Club nach § 11 KCanG —
          legal, transparent und für alle ab 18 Jahren offen.
        </p>
      </div>
    </section>
  );
}
