"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  AlertTriangle,
  BookOpen,
  Share2,
  Heart,
  Shield,
  Info,
  Users,
  ExternalLink,
  ArrowRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ─── Light-theme tokens ──────────────────────────────────────────────────── */
const L = {
  bg:         "#f5f0eb",        // --cream surface
  card:       "#ffffff",
  cardBorder: "rgba(0,0,0,0.07)",
  cardShadow: "0 2px 20px rgba(0,0,0,0.04)",
  headline:   "#1a1814",
  body:       "rgba(26,24,20,0.58)",
  muted:      "rgba(26,24,20,0.32)",
  eyebrow:    "rgba(50,45,40,0.50)",
  divider:    "rgba(26,24,20,0.10)",
  iconBg:     "rgba(192,175,211,0.20)",
  iconBgHov:  "rgba(192,175,211,0.35)",
  icon:       "#9B88C0",        // --lilac-dark
  lilac:      "#C0AFD3",
};

/* ─── Data ────────────────────────────────────────────────────────────────── */
const pillars = [
  {
    icon: Users,
    title: "Präventionsbeauftragter",
    text: "Ein qualifizierter Ansprechpartner kümmert sich um alle Belange des Gesundheitsschutzes und der Prävention.",
  },
  {
    icon: BookOpen,
    title: "Aufklärung & Bildung",
    text: "Regelmäßige Workshops und Info-Veranstaltungen zu Wirkungsweisen, Risiken und Safer Use.",
  },
  {
    icon: Share2,
    title: "Vernetzung",
    text: "Aktive Kooperation mit Suchtberatungsstellen in Osnabrück und der weiteren Region.",
  },
  {
    icon: Heart,
    title: "Hilfsangebote",
    text: "Frühzeitiges Erkennen von Risikomustern und Vermittlung professioneller Hilfe.",
  },
  {
    icon: Shield,
    title: "Jugendschutz",
    text: "Strikte Einhaltung der Altersgrenze und aktive Maßnahmen zum Schutz Minderjähriger.",
  },
  {
    icon: Info,
    title: "Safer Use",
    text: "Information über verantwortungsvollen Konsum, Dosierung und Wechselwirkungen.",
  },
];

const resources = [
  {
    title: "Cannabis-Selbsttest",
    desc: "Teste anonym, ob dein Konsum im grünen Bereich liegt.",
    href: "https://www.drugscouts.de/de/selbsttest",
  },
  {
    title: "Online Suchtberatung",
    desc: "Anonyme und kostenlose Beratung durch Fachleute.",
    href: "https://www.onlineberatung-sucht.de",
  },
];

/* ─── Component ──────────────────────────────────────────────────────────── */
export default function Prevention() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {

      /* Hinweis card */
      gsap.fromTo(".prev-hinweis",
        { opacity: 0, y: 28 },
        {
          opacity: 1, y: 0, duration: 0.75, ease: "power2.out",
          scrollTrigger: { trigger: ".prev-hinweis", start: "top 85%", once: true },
        }
      );

      /* Pillars header */
      gsap.fromTo(".prev-pillars-hdr > *",
        { opacity: 0, y: 18 },
        {
          opacity: 1, y: 0, duration: 0.65, stagger: 0.1, ease: "power2.out",
          scrollTrigger: { trigger: ".prev-pillars-hdr", start: "top 84%", once: true },
        }
      );

      /* Pillar cards */
      gsap.fromTo(".prev-pillar-card",
        { opacity: 0, y: 32, scale: 0.97 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.65, stagger: 0.09, ease: "power2.out",
          scrollTrigger: { trigger: ".prev-pillars-grid", start: "top 82%", once: true },
        }
      );

      /* Resources header */
      gsap.fromTo(".prev-res-hdr > *",
        { opacity: 0, y: 18 },
        {
          opacity: 1, y: 0, duration: 0.65, stagger: 0.1, ease: "power2.out",
          scrollTrigger: { trigger: ".prev-res-hdr", start: "top 84%", once: true },
        }
      );

      /* Resource rows */
      gsap.fromTo(".prev-res-row",
        { opacity: 0, y: 16 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.13, ease: "power2.out",
          scrollTrigger: { trigger: ".prev-res-list", start: "top 84%", once: true },
        }
      );

      /* CTA */
      gsap.fromTo(".prev-cta-wrap > *",
        { opacity: 0, y: 22 },
        {
          opacity: 1, y: 0, duration: 0.65, stagger: 0.12, ease: "power2.out",
          scrollTrigger: { trigger: ".prev-cta-wrap", start: "top 85%", once: true },
        }
      );

    }, rootRef);

    return () => ctx.revert();
  }, []);

  /* shared section padding */
  const sp: React.CSSProperties = {
    background: L.bg,
    padding: "clamp(72px,10vw,120px) clamp(20px,4vw,40px)",
  };

  return (
    <div ref={rootRef} style={{ overflowX: "clip" }}>

      {/* ══════════════════════════════════════════════════════
          1 · HINWEIS  ── centered warning card
      ══════════════════════════════════════════════════════ */}
      <section style={{ ...sp, paddingBottom: "clamp(40px,6vw,64px)" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <div
            className="prev-hinweis"
            style={{
              background: L.card,
              border: `1px solid ${L.cardBorder}`,
              borderRadius: "18px",
              boxShadow: L.cardShadow,
              padding: "32px 36px",
              display: "flex",
              gap: "20px",
              alignItems: "flex-start",
              opacity: 0,
            }}
          >
            {/* icon */}
            <div style={{
              flexShrink: 0,
              width: 40, height: 40,
              borderRadius: "10px",
              background: L.iconBg,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "2px",
            }}>
              <AlertTriangle size={16} strokeWidth={1.8} style={{ color: L.icon }} />
            </div>

            {/* text */}
            <div>
              <h3
                className="font-playfair"
                style={{ fontSize: "1.0625rem", fontWeight: 700, color: L.headline, marginBottom: "10px" }}
              >
                Hinweis
              </h3>
              <p
                className="font-montserrat"
                style={{ fontSize: "0.875rem", fontWeight: 300, lineHeight: 1.85, color: L.body }}
              >
                Cannabis ist nicht harmlos. Der Konsum kann gesundheitliche Risiken bergen,
                insbesondere für junge Erwachsene. Wir empfehlen ausdrücklich einen
                verantwortungsvollen und informierten Umgang. Bei Fragen oder Bedenken stehen
                wir dir jederzeit zur Seite.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          2 · PRÄVENTION AUF ALLEN EBENEN ── 3 × 2 pillars
      ══════════════════════════════════════════════════════ */}
      <section style={{ ...sp, paddingTop: "clamp(40px,6vw,64px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

          {/* header */}
          <div
            className="prev-pillars-hdr"
            style={{ textAlign: "center", marginBottom: "clamp(40px,6vw,64px)" }}
          >
            <span
              className="font-montserrat eyebrow"
              style={{ color: L.eyebrow }}
            >
              Unsere Säulen
            </span>
            <h2
              className="font-playfair"
              style={{
                fontSize: "clamp(2rem,5vw,3.5rem)",
                fontWeight: 700,
                color: L.headline,
                lineHeight: 1.1,
                margin: "14px 0 18px",
                letterSpacing: "-0.02em",
              }}
            >
              Prävention auf allen Ebenen
            </h2>
            <p
              className="font-montserrat"
              style={{
                fontSize: "0.9375rem",
                fontWeight: 300,
                lineHeight: 1.85,
                color: L.body,
                maxWidth: "480px",
                margin: "0 auto",
              }}
            >
              Ein umfassendes Konzept für Gesundheitsschutz, Aufklärung und Unterstützung.
            </p>
          </div>

          {/* grid */}
          <div className="prev-pillars-grid">
            {pillars.map((p, i) => (
              <div
                key={i}
                className="prev-pillar-card"
                style={{ opacity: 0 }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = "translateY(-5px)";
                  el.style.boxShadow = "0 12px 36px rgba(0,0,0,0.09)";
                  el.style.borderColor = "rgba(192,175,211,0.45)";
                  const ico = el.querySelector(".prev-icon-bg") as HTMLElement | null;
                  if (ico) ico.style.background = L.iconBgHov;
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = L.cardShadow;
                  el.style.borderColor = L.cardBorder;
                  const ico = el.querySelector(".prev-icon-bg") as HTMLElement | null;
                  if (ico) ico.style.background = L.iconBg;
                }}
              >
                {/* icon badge */}
                <div
                  className="prev-icon-bg"
                  style={{
                    width: 46, height: 46,
                    borderRadius: "11px",
                    background: L.iconBg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "24px",
                    transition: "background 0.25s ease",
                  }}
                >
                  <p.icon size={18} strokeWidth={1.6} style={{ color: L.icon }} />
                </div>

                <h3
                  className="font-playfair"
                  style={{
                    fontSize: "1.0625rem",
                    fontWeight: 700,
                    color: L.headline,
                    lineHeight: 1.25,
                    marginBottom: "12px",
                  }}
                >
                  {p.title}
                </h3>
                <p
                  className="font-montserrat"
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 300,
                    lineHeight: 1.82,
                    color: L.body,
                  }}
                >
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          3 · DU BIST NICHT ALLEIN ── resource rows
      ══════════════════════════════════════════════════════ */}
      <section style={{ ...sp, paddingTop: "clamp(40px,6vw,64px)" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>

          {/* header */}
          <div
            className="prev-res-hdr"
            style={{ textAlign: "center", marginBottom: "48px" }}
          >
            <span
              className="font-montserrat eyebrow"
              style={{ color: L.eyebrow }}
            >
              Hilfe &amp; Beratung
            </span>
            <h2
              className="font-playfair"
              style={{
                fontSize: "clamp(2rem,5vw,3.25rem)",
                fontWeight: 700,
                color: L.muted,
                lineHeight: 1.1,
                margin: "14px 0 16px",
                letterSpacing: "-0.02em",
              }}
            >
              Du bist nicht allein
            </h2>
            <p
              className="font-montserrat"
              style={{ fontSize: "0.9375rem", fontWeight: 300, lineHeight: 1.85, color: L.body }}
            >
              Zweifel an deinem Konsum? Diese Ressourcen können helfen.
            </p>
          </div>

          {/* rows */}
          <div className="prev-res-list">
            {resources.map((r, i) => (
              <a
                key={i}
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="prev-res-row"
                style={{ opacity: 0 }}
              >
                <div style={{ flex: 1 }}>
                  <span
                    className="prev-res-title font-playfair"
                    style={{
                      display: "block",
                      fontSize: "1.0625rem",
                      fontWeight: 600,
                      color: L.headline,
                      marginBottom: "4px",
                      transition: "color 0.2s ease",
                    }}
                  >
                    {r.title}
                  </span>
                  <span
                    className="font-montserrat"
                    style={{
                      fontSize: "0.8125rem",
                      fontWeight: 300,
                      lineHeight: 1.65,
                      color: L.body,
                    }}
                  >
                    {r.desc}
                  </span>
                </div>
                <ExternalLink
                  size={16}
                  strokeWidth={1.5}
                  className="prev-res-icon"
                  style={{ color: L.muted, flexShrink: 0, transition: "color 0.2s ease" }}
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          4 · CTA ── "Verantwortungsvoller Konsum beginnt hier"
      ══════════════════════════════════════════════════════ */}
      <section style={{ ...sp, paddingTop: "clamp(40px,6vw,80px)" }}>
        <div
          className="prev-cta-wrap"
          style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto" }}
        >
          <h2
            className="font-playfair"
            style={{
              fontSize: "clamp(2rem,5vw,3.25rem)",
              fontWeight: 700,
              color: L.muted,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              marginBottom: "20px",
            }}
          >
            Verantwortungsvoller Konsum
            <br />
            beginnt hier
          </h2>
          <p
            className="font-montserrat"
            style={{
              fontSize: "0.9375rem",
              fontWeight: 300,
              lineHeight: 1.85,
              color: L.body,
              maxWidth: "460px",
              margin: "0 auto 36px",
            }}
          >
            Werde Teil einer Gemeinschaft, die Aufklärung und Sicherheit an erste Stelle setzt.
          </p>
          <Link href="/membership" className="prev-cta-btn font-montserrat">
            Mitglied werden <ArrowRight size={13} />
          </Link>
        </div>
      </section>

      {/* ─── Scoped styles ──────────────────────────────────── */}
      <style>{`

        /* ── Pillar grid ── */
        .prev-pillars-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        /* ── Pillar card ── */
        .prev-pillar-card {
          background: ${L.card};
          border: 1px solid ${L.cardBorder};
          border-radius: 18px;
          box-shadow: ${L.cardShadow};
          padding: 32px 26px 36px;
          display: flex;
          flex-direction: column;
          transition: transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease;
        }

        /* ── Resource row ── */
        .prev-res-row {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 24px 0;
          border-bottom: 1px solid ${L.divider};
          text-decoration: none;
          transition: border-color 0.2s ease;
        }
        .prev-res-row:first-child { border-top: 1px solid ${L.divider}; }
        .prev-res-row:hover { border-color: rgba(192,175,211,0.50); }
        .prev-res-row:hover .prev-res-title { color: #9B88C0 !important; }
        .prev-res-row:hover .prev-res-icon  { color: #9B88C0 !important; }

        /* ── CTA button (dark pill on light bg) ── */
        .prev-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          height: 48px;
          padding: 0 32px;
          background: #2a2720;
          color: #f5f0eb;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          border: none;
          border-radius: 4px;
          text-decoration: none;
          transition: background 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
        }
        .prev-cta-btn:hover {
          background: #1a1814;
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(0,0,0,0.14);
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .prev-pillars-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .prev-pillars-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
