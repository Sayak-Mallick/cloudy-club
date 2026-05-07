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
    accent: "135deg, #EDE8F5, #C0AFD3",
  },
  {
    date: "April 2025",
    tag: "Prävention",
    title: "Erster Präventionsabend – ein voller Erfolg",
    excerpt: "Über 30 Interessierte kamen zu unserem ersten Informationsabend. Wir haben über Set & Setting, verantwortungsvollen Konsum und die Rechtslage gesprochen.",
    accent: "145deg, #E5D4BE, #C0AFD3",
  },
  {
    date: "Mai 2025",
    tag: "Anbau",
    title: "Erste Ernte – Qualität die begeistert",
    excerpt: "Unsere erste vereinseigene Ernte ist abgeschlossen. Die Laborergebnisse zeigen eine hervorragende Qualität. Alle Details folgen für Mitglieder im internen Bereich.",
    accent: "150deg, #DDD0EE, #8B9880",
  },
];

export default function News() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".news-card",
        { opacity: 0, y: 44 },
        { opacity: 1, y: 0, duration: 0.85, stagger: 0.17, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="news"
      ref={sectionRef}
      style={{ padding: "112px 40px", background: "var(--sand)" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <SectionHeader
          eyebrow="News"
          title="Aktuelles aus dem Club"
          subtitle="Bleib informiert über Vereinsnews, Ernteergebnisse, Events und alles rund um den Cloudy Club."
        />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
          {posts.map((post, i) => (
            <article
              key={i}
              className="news-card card-hover"
              style={{
                background: "var(--cream)",
                border: "1px solid rgba(192,175,211,0.28)",
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
              }}
            >
              {/* Image area */}
              <div
                style={{
                  height: "200px",
                  background: `linear-gradient(${post.accent})`,
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Decorative cloud */}
                <svg width="130" height="90" viewBox="0 0 130 90" style={{ opacity: 0.45 }}>
                  <ellipse cx="65"  cy="68" rx="56"  ry="26" fill="white" />
                  <ellipse cx="44"  cy="58" rx="36"  ry="28" fill="white" opacity="0.9" />
                  <ellipse cx="88"  cy="62" rx="30"  ry="24" fill="white" opacity="0.85" />
                  <ellipse cx="65"  cy="48" rx="28"  ry="24" fill="white" opacity="0.75" />
                  <ellipse cx="50"  cy="40" rx="18"  ry="16" fill="white" opacity="0.65" />
                </svg>
                <div style={{
                  position: "absolute", top: "16px", left: "16px",
                  background: "rgba(255,255,255,0.88)",
                  padding: "6px 14px",
                }}>
                  <span className="eyebrow" style={{ color: "var(--lilac)", fontSize: "0.625rem", letterSpacing: "0.22em" }}>{post.tag}</span>
                </div>
              </div>

              {/* Text area */}
              <div style={{ padding: "28px 28px 32px", display: "flex", flexDirection: "column", flex: 1 }}>
                <p className="font-montserrat" style={{ fontSize: "0.75rem", color: "rgba(49,49,47,0.4)", marginBottom: "12px", letterSpacing: "0.08em" }}>
                  {post.date}
                </p>
                <h3
                  className="font-playfair"
                  style={{
                    fontSize: "1.1875rem",
                    color: "var(--charcoal)",
                    lineHeight: 1.35,
                    fontWeight: 500,
                    marginBottom: "14px",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "var(--lilac)")}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "var(--charcoal)")}
                >
                  {post.title}
                </h3>
                <p className="font-montserrat" style={{ fontSize: "0.875rem", fontWeight: 300, lineHeight: 1.75, color: "rgba(49,49,47,0.62)", flex: 1, marginBottom: "20px" }}>
                  {post.excerpt}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span className="eyebrow" style={{ color: "var(--lilac)", fontSize: "0.625rem", letterSpacing: "0.18em" }}>Weiterlesen</span>
                  <ArrowRight size={13} style={{ color: "var(--lilac)", transition: "transform 0.3s ease" }} />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "56px" }}>
          <button className="btn-outline">Alle Artikel ansehen</button>
        </div>
      </div>
    </section>
  );
}
