"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

/* ── Tag colour map ────────────────────────────────────── */
const tagColour: Record<string, { bg: string; text: string }> = {
  Neuigkeiten: { bg: "rgba(192,175,211,0.18)", text: "#9B88C0" },
  Rechtliches: { bg: "rgba(192,175,211,0.18)", text: "#9B88C0" },
  Gesundheit:  { bg: "rgba(192,175,211,0.18)", text: "#9B88C0" },
  Prävention:  { bg: "rgba(192,175,211,0.18)", text: "#9B88C0" },
  Anbau:       { bg: "rgba(192,175,211,0.18)", text: "#9B88C0" },
  Community:   { bg: "rgba(192,175,211,0.18)", text: "#9B88C0" },
};
const defaultTag = { bg: "rgba(192,175,211,0.18)", text: "#9B88C0" };

/* ── Article data ───────────────────────────────────────── */
const featured = {
  tag: "Neuigkeiten",
  date: "19. Mai 2026",
  title: "Willkommen beim Cloudy Club Osnabrück",
  excerpt:
    "Wir freuen uns, den Cloudy Club Osnabrück offiziell vorzustellen — euer neuer Cannabis Social Club in der Friedensstadt.",
  slug: "/news/willkommen",
};

const articles = [
  {
    tag: "Rechtliches",
    date: "19.05.2026",
    title: "Das KCanG erklärt: Was du wissen musst",
    excerpt:
      "Das Cannabisgesetz macht Cannabis Social Clubs legal. Hier erfährst du alles Wichtige über deine Rechte und Pflichten als Mitglied.",
    slug: "/news/kcanG-erklaert",
  },
  {
    tag: "Gesundheit",
    date: "19.05.2026",
    title: "Safer Use: Verantwortungsvoller Umgang mit Cannabis",
    excerpt:
      "Cannabis ist nicht harmlos. Erfahre, wie du verantwortungsvoll konsumierst und auf was du bei Dosierung und Set & Setting achten solltest.",
    slug: "/news/safer-use",
  },
  {
    tag: "Anbau",
    date: "18.05.2026",
    title: "Erste Ernte — Qualität die begeistert",
    excerpt:
      "Unsere erste vereinseigene Ernte ist abgeschlossen. Die Laborergebnisse übertreffen unsere Erwartungen in Aroma und Terpengehalt.",
    slug: "/news/erste-ernte",
  },
  {
    tag: "Community",
    date: "15.05.2026",
    title: "Sommerfest 2026 — Danke für einen unvergesslichen Abend",
    excerpt:
      "Unser erstes großes Mitgliedertreffen war ein voller Erfolg. Musik, Austausch und echter Community-Spirit — genau das, wofür wir stehen.",
    slug: "/news/sommerfest",
  },
];

/* ── Tag pill ─────────────────────────────────────────── */
function TagPill({ tag }: { tag: string }) {
  const c = tagColour[tag] ?? defaultTag;
  return (
    <span
      className="font-montserrat"
      style={{
        display: "inline-block",
        padding: "3px 12px",
        borderRadius: "100px",
        background: c.bg,
        color: c.text,
        fontSize: "0.6875rem",
        fontWeight: 600,
        letterSpacing: "0.05em",
      }}
    >
      {tag}
    </span>
  );
}

/* ── Main component ─────────────────────────────────────── */
export default function NewsFull() {
  const sectionRef  = useRef<HTMLElement>(null);
  const eyebrowRef  = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {

      /* Header */
      gsap.fromTo(eyebrowRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out",
          scrollTrigger: { trigger: headlineRef.current, start: "top 88%", once: true } }
      );
      gsap.fromTo(headlineRef.current,
        { opacity: 0, y: 22 },
        { opacity: 1, y: 0, duration: 0.75, ease: "power3.out", delay: 0.1,
          scrollTrigger: { trigger: headlineRef.current, start: "top 88%", once: true } }
      );

      /* Featured card */
      gsap.fromTo(".nf-featured",
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out",
          scrollTrigger: { trigger: ".nf-featured", start: "top 84%", once: true } }
      );

      /* Secondary cards stagger */
      gsap.fromTo(".nf-card",
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.65, stagger: 0.12, ease: "power2.out",
          scrollTrigger: { trigger: ".nf-grid", start: "top 82%", once: true } }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        background: "var(--bg)",
        padding: "clamp(72px, 9vw, 120px) 24px clamp(80px, 10vw, 130px)",
      }}
    >
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>

        {/* ── Centered header ── */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <span
            ref={eyebrowRef}
            className="eyebrow"
            style={{ opacity: 0 }}
          >
            Blog &amp; News
          </span>
          <h1
            ref={headlineRef}
            className="font-playfair"
            style={{
              fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
              fontWeight: 700,
              color: "var(--cream)",
              marginTop: "14px",
              lineHeight: 1.08,
              opacity: 0,
            }}
          >
            Aktuelles aus dem{" "}
            <span style={{ fontStyle: "italic", color: "var(--lilac)" }}>Club</span>
          </h1>
        </div>

        {/* ── Featured article ── */}
        <Link
          href={featured.slug}
          className="nf-featured"
          style={{
            display: "block",
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: "18px",
            padding: "40px 44px 44px",
            boxShadow: "0 2px 20px rgba(0,0,0,0.35)",
            textDecoration: "none",
            opacity: 0,
            marginBottom: "20px",
            transition: "box-shadow 0.25s ease, transform 0.25s ease",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 10px 40px rgba(155,136,192,0.12)";
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-3px)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 2px 20px rgba(0,0,0,0.35)";
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
          }}
        >
          {/* Tag + date row */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <TagPill tag={featured.tag} />
            <span className="font-montserrat" style={{
              fontSize: "0.8125rem", fontWeight: 300,
              color: "var(--text-muted)",
            }}>
              {featured.date}
            </span>
          </div>

          {/* Title */}
          <h2 className="font-playfair" style={{
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            fontWeight: 700, color: "var(--cream)",
            lineHeight: 1.2, marginBottom: "14px",
          }}>
            {featured.title}
          </h2>

          {/* Excerpt */}
          <p className="font-montserrat" style={{
            fontSize: "0.9375rem", fontWeight: 300,
            lineHeight: 1.8, color: "var(--text-secondary)",
            maxWidth: "600px", marginBottom: "28px",
          }}>
            {featured.excerpt}
          </p>

          {/* Read more link */}
          <span
            className="font-montserrat"
            style={{
              display: "inline-flex", alignItems: "center", gap: "6px",
              fontSize: "0.875rem", fontWeight: 500,
              color: "var(--cream)",
              borderBottom: "1.5px solid rgba(244,241,234,0.35)",
              paddingBottom: "2px",
            }}
          >
            Weiterlesen <ArrowRight size={13} strokeWidth={2} />
          </span>
        </Link>

        {/* ── Secondary grid ── */}
        <div
          className="nf-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "20px",
          }}
        >
          {articles.map((a, i) => (
            <Link
              key={i}
              href={a.slug}
              className="nf-card"
              style={{
                display: "block",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "16px",
                padding: "28px 28px 32px",
                boxShadow: "0 2px 14px rgba(0,0,0,0.3)",
                textDecoration: "none",
                opacity: 0,
                transition: "box-shadow 0.25s ease, transform 0.25s ease",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 32px rgba(155,136,192,0.12)";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-3px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 2px 14px rgba(0,0,0,0.3)";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              }}
            >
              {/* Tag + date */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                <TagPill tag={a.tag} />
                <span className="font-montserrat" style={{
                  fontSize: "0.75rem", fontWeight: 300,
                  color: "var(--text-muted)",
                }}>
                  {a.date}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-playfair" style={{
                fontSize: "1.0625rem", fontWeight: 700,
                color: "var(--cream)", lineHeight: 1.3,
                marginBottom: "10px",
              }}>
                {a.title}
              </h3>

              {/* Excerpt */}
              <p className="font-montserrat" style={{
                fontSize: "0.875rem", fontWeight: 300,
                lineHeight: 1.75, color: "var(--text-secondary)",
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical" as const,
                overflow: "hidden",
              }}>
                {a.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .nf-grid { grid-template-columns: 1fr !important; }
          .nf-featured { padding: 28px 24px 32px !important; }
        }
      `}</style>
    </section>
  );
}
