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
    index: "01",
  },
  {
    date: "April 2025",
    tag: "Prävention",
    title: "Erster Präventionsabend – ein voller Erfolg",
    excerpt: "Über 30 Mitglieder kamen zusammen, um über Set & Setting, sichere Dosierung und Risikoreduktion zu sprechen. Danke an alle Teilnehmenden!",
    index: "02",
  },
  {
    date: "Mai 2025",
    tag: "Anbau",
    title: "Erste Ernte – Qualität die begeistert",
    excerpt: "Unsere erste vereinseigene Ernte ist abgeschlossen. Die Testergebnisse übertreffen unsere Erwartungen in Aroma, Terpengehalt und Wirkstoffprofil.",
    index: "03",
  },
  {
    date: "Juni 2025",
    tag: "Community",
    title: "Sommerfest 2025 – Danke für einen unvergesslichen Abend",
    excerpt: "Unser erstes großes Mitgliedertreffen war ein voller Erfolg. Musik, Austausch und echter Community-Spirit – genau das, wofür wir stehen.",
    index: "04",
  },
];

export default function News() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Cards stagger in — no pin, no DOM surgery
      gsap.fromTo(".news-card",
        { opacity: 0, y: 28 },
        {
          opacity: 1, y: 0,
          duration: 0.7, stagger: 0.11, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 78%", once: true },
        }
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
              display: "inline-flex", alignItems: "center", gap: "6px",
              fontSize: "13px", fontWeight: 500, color: "var(--lilac)",
              background: "none", border: "none", letterSpacing: "0.04em",
              transition: "opacity 0.2s ease", flexShrink: 0, padding: "0", marginBottom: "6px",
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.7")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            Alle Artikel ansehen <ArrowRight size={13} />
          </button>
        </div>

        {/* Horizontal scroll track — CSS-native, no GSAP pin */}
        <div
          style={{
            display: "flex",
            gap: "24px",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            paddingBottom: "24px",
            scrollbarWidth: "none",
          }}
          className="news-scroll-track"
        >
          {posts.map((post, i) => (
            <article
              key={i}
              className="news-card"
              style={{
                flexShrink: 0,
                width: "clamp(300px, 32vw, 420px)",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "2px",
                padding: "36px 28px",
                display: "flex",
                flexDirection: "column",
                scrollSnapAlign: "start",
                transition: "border-color 0.25s ease, transform 0.25s ease",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border-hover)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              {/* Top row: date + tag */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", marginBottom: "auto" }}>
                <span className="font-montserrat" style={{ fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  {post.date}
                </span>
                <span className="font-montserrat" style={{
                  fontSize: "10px", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase",
                  color: "var(--lilac)", background: "var(--bg-elevated)",
                  border: "1px solid var(--border)", borderRadius: "2px", padding: "4px 10px", flexShrink: 0,
                }}>
                  {post.tag}
                </span>
              </div>

              {/* Large index */}
              <p className="font-playfair" style={{
                fontSize: "clamp(3rem, 6vw, 4.5rem)", fontWeight: 700,
                color: "var(--bg-elevated)", lineHeight: 1, marginTop: "20px", marginBottom: "16px", userSelect: "none",
              }}>
                {post.index}
              </p>

              {/* Title */}
              <h3 className="font-playfair" style={{ fontSize: "1.1875rem", color: "var(--cream)", lineHeight: 1.35, fontWeight: 600, marginBottom: "14px" }}>
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="font-montserrat" style={{ fontSize: "0.8125rem", fontWeight: 300, lineHeight: 1.75, color: "var(--text-secondary)", flex: 1, marginBottom: "24px" }}>
                {post.excerpt}
              </p>

              {/* Read more */}
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span className="font-montserrat" style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--lilac)" }}>
                  Weiterlesen
                </span>
                <ArrowRight size={11} style={{ color: "var(--lilac)" }} />
              </div>
            </article>
          ))}

          {/* CTA end card */}
          <div style={{
            flexShrink: 0, scrollSnapAlign: "start",
            width: "clamp(200px, 22vw, 280px)",
            background: "var(--lilac)", borderRadius: "2px",
            padding: "36px 28px",
            display: "flex", flexDirection: "column", justifyContent: "flex-end",
          }}>
            <p className="font-playfair" style={{ fontSize: "1.25rem", color: "var(--bg)", fontWeight: 700, lineHeight: 1.3, marginBottom: "20px" }}>
              Mehr Neuigkeiten aus dem Club.
            </p>
            <button className="font-montserrat" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "var(--bg)", color: "var(--lilac)", border: "none", borderRadius: "2px",
              padding: "12px 18px", fontSize: "11px", fontWeight: 700,
              letterSpacing: "0.16em", textTransform: "uppercase", transition: "opacity 0.2s ease",
            }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              Alle ansehen <ArrowRight size={12} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .news-scroll-track::-webkit-scrollbar { display: none; }
        @media (max-width: 640px) {
          .news-card { width: 85vw !important; }
        }
      `}</style>
    </section>
  );
}
