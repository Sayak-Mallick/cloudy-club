"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeader from "./SectionHeader";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const posts = [
  {
    date: "März 2025",
    tag: "Vereinsnews",
    title: "Der Cloudy Club öffnet seine Türen",
    excerpt: "Wir freuen uns, euch unsere Vereinsgründung offiziell bekannt zu geben. Nach Monaten der Vorbereitung sind wir bereit für unsere erste Mitgliederaufnahme.",
    glow: "rgba(192,175,211,0.2)",
  },
  {
    date: "April 2025",
    tag: "Prävention",
    title: "Erster Präventionsabend – ein voller Erfolg",
    excerpt: "Über 30 Interessierte kamen zu unserem ersten Informationsabend. Wir haben über Set & Setting, verantwortungsvollen Konsum und die Rechtslage gesprochen.",
    glow: "rgba(229,212,190,0.15)",
  },
  {
    date: "Mai 2025",
    tag: "Anbau",
    title: "Erste Ernte – Qualität die begeistert",
    excerpt: "Unsere erste vereinseigene Ernte ist abgeschlossen. Die Laborergebnisse zeigen eine hervorragende Qualität. Alle Details folgen für Mitglieder im internen Bereich.",
    glow: "rgba(139,152,128,0.15)",
  },
];

export default function News() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".news-card",
        { opacity: 0, y: 44 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.2, ease: "power3.out",
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
      style={{ background: "var(--bg)" }}
    >
      <div className="section-inner">
        <SectionHeader
          eyebrow="News"
          title="Aktuelles aus dem Club"
          subtitle="Bleib informiert über Vereinsnews, Ernteergebnisse, Events und alles rund um den Cloudy Club."
        />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "32px" }}>
          {posts.map((post, i) => (
            <article
              key={i}
              className="news-card card"
              style={{
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
                background: "var(--bg-surface)",
              }}
            >
              {/* Image area (abstract) */}
              <div
                style={{
                  height: "220px",
                  background: "var(--bg-elevated)",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                {/* Glow */}
                <div style={{
                  position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
                  width: "200px", height: "200px", borderRadius: "50%",
                  background: `radial-gradient(circle, ${post.glow} 0%, transparent 70%)`,
                  filter: "blur(20px)",
                }} />

                {/* Decorative Elements */}
                <svg width="120" height="120" viewBox="0 0 120 120" style={{ opacity: 0.6, position: "relative", zIndex: 1 }}>
                  <circle cx="60" cy="60" r="40" fill="none" stroke="rgba(192,175,211,0.2)" strokeWidth="1" />
                  <circle cx="60" cy="60" r="24" fill="none" stroke="rgba(192,175,211,0.3)" strokeWidth="1" />
                  <circle cx="60" cy="60" r="8" fill="var(--lilac)" opacity="0.8" />
                  {i === 0 && <path d="M60 20 L60 0 M60 100 L60 120 M20 60 L0 60 M100 60 L120 60" stroke="rgba(192,175,211,0.3)" strokeWidth="1" />}
                  {i === 1 && <path d="M32 32 L16 16 M88 88 L104 104 M32 88 L16 104 M88 32 L104 16" stroke="rgba(192,175,211,0.3)" strokeWidth="1" />}
                  {i === 2 && <circle cx="60" cy="60" r="56" fill="none" stroke="rgba(192,175,211,0.15)" strokeWidth="1" strokeDasharray="4 4" />}
                </svg>

                <div style={{
                  position: "absolute", top: "20px", left: "20px",
                  background: "rgba(19,19,17,0.7)",
                  border: "1px solid rgba(192,175,211,0.2)",
                  padding: "8px 16px",
                  backdropFilter: "blur(8px)",
                  borderRadius: "4px",
                }}>
                  <span className="eyebrow" style={{ color: "var(--cream)", fontSize: "0.625rem", letterSpacing: "0.2em" }}>{post.tag}</span>
                </div>
              </div>

              {/* Text area */}
              <div style={{ padding: "32px", display: "flex", flexDirection: "column", flex: 1 }}>
                <p className="font-montserrat" style={{ fontSize: "0.8125rem", color: "var(--text-muted)", marginBottom: "16px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  {post.date}
                </p>
                <h3
                  className="font-playfair"
                  style={{
                    fontSize: "1.25rem",
                    color: "var(--cream)",
                    lineHeight: 1.4,
                    fontWeight: 600,
                    marginBottom: "16px",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "var(--lilac)")}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "var(--cream)")}
                >
                  {post.title}
                </h3>
                <p className="font-montserrat" style={{ fontSize: "0.9375rem", fontWeight: 300, lineHeight: 1.8, color: "var(--text-secondary)", flex: 1, marginBottom: "32px" }}>
                  {post.excerpt}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span className="eyebrow" style={{ color: "var(--lilac)", fontSize: "0.6875rem" }}>Weiterlesen</span>
                  <ArrowRight size={14} style={{ color: "var(--lilac)", transition: "transform 0.3s ease" }} />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "72px" }}>
          <button className="btn-outline">Alle Artikel ansehen</button>
        </div>
      </div>
    </section>
  );
}
