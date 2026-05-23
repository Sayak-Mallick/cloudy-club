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

        {/* City chips grid */}
        <div
          className="seo-grid"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            justifyContent: "center",
          }}
        >
          {NEARBY_CITIES.map((city, i) => (
            <span
              key={i}
              className="seo-chip font-montserrat"
              style={{
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.06em",
                color: "var(--text-secondary)",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "2px",
                padding: "8px 16px",
                whiteSpace: "nowrap",
                transition: "color 0.2s ease, border-color 0.2s ease",
                cursor: "default",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.color = "var(--cream)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border-hover)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
              }}
            >
              {city}
            </span>
          ))}
        </div>

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
