"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const posts = [
  {
    date: "März 2025",
    tag: "Vereinsnews",
    title: "Der Cloudy Club öffnet seine Türen",
    excerpt: "Wir sind offiziell eingetragen und freuen uns, die Türen des Cloudy Club für neue Mitglieder zu öffnen. Ein historischer Moment für unsere Gemeinschaft.",
  },
  {
    date: "April 2025",
    tag: "Prävention",
    title: "Erster Präventionsabend – ein voller Erfolg",
    excerpt: "Über 30 Mitglieder kamen zusammen, um über Set & Setting, sichere Dosierung und Risikoreduktion zu sprechen. Danke an alle Teilnehmenden!",
  },
  {
    date: "Mai 2025",
    tag: "Anbau",
    title: "Erste Ernte – Qualität die begeistert",
    excerpt: "Unsere erste vereinseigene Ernte ist abgeschlossen. Die Testergebnisse übertreffen unsere Erwartungen in Aroma, Terpengehalt und Wirkstoffprofil.",
  },
];

export default function News() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(".news-card",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.14, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="news"
      ref={sectionRef}
      className="section"
      style={{ background: "var(--bg-surface)" }}
    >
      <div className="section-inner">
        {/* Header row */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "24px", marginBottom: "48px", flexWrap: "wrap" }}>
          <div>
            <span className="eyebrow" style={{ display: "block", marginBottom: "10px" }}>Aktuelles</span>
            <h2 className="font-playfair" style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", fontWeight: 700, color: "var(--cream)", lineHeight: 1.05 }}>
              Neuigkeiten aus dem Club.
            </h2>
          </div>
          <button
            className="font-montserrat"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "13px",
              fontWeight: 500,
              color: "var(--lilac)",
              background: "none",
              border: "none",
              cursor: "pointer",
              letterSpacing: "0.04em",
              transition: "opacity 0.2s ease",
              flexShrink: 0,
              padding: "0",
              marginBottom: "6px",
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.7")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            Alle Artikel ansehen <ArrowRight size={13} />
          </button>
        </div>

        {/* Cards grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }} className="news-grid">
          {posts.map((post, i) => (
            <article
              key={i}
              className="news-card card"
              style={{
                padding: "32px 28px",
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
                background: "var(--bg-card)",
              }}
            >
              {/* Top row: date + tag */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", marginBottom: "20px" }}>
                <span className="font-montserrat" style={{ fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  {post.date}
                </span>
                <span
                  className="font-montserrat"
                  style={{
                    fontSize: "10px",
                    fontWeight: 600,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "var(--lilac)",
                    background: "var(--bg-elevated)",
                    border: "1px solid var(--border)",
                    borderRadius: "2px",
                    padding: "4px 10px",
                    flexShrink: 0,
                  }}
                >
                  {post.tag}
                </span>
              </div>

              {/* Title */}
              <h3
                className="font-playfair news-title"
                style={{
                  fontSize: "1.1875rem",
                  color: "var(--cream)",
                  lineHeight: 1.35,
                  fontWeight: 600,
                  marginBottom: "14px",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "var(--lilac)")}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "var(--cream)")}
              >
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="font-montserrat" style={{ fontSize: "0.875rem", fontWeight: 300, lineHeight: 1.75, color: "var(--text-secondary)", flex: 1, marginBottom: "28px" }}>
                {post.excerpt}
              </p>

              {/* Read more */}
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span className="font-montserrat" style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--lilac)" }}>
                  Weiterlesen
                </span>
                <ArrowRight size={12} style={{ color: "var(--lilac)" }} />
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .news-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 520px) and (max-width: 900px) {
          .news-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
