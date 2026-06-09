"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  AlertTriangle, BookOpen, Share2, Heart,
  Shield, Info, Users, ArrowRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  { icon: Users,    title: "Präventionsbeauftragter", text: "Ein qualifizierter Ansprechpartner kümmert sich um alle Belange des Gesundheitsschutzes und der Prävention." },
  { icon: BookOpen, title: "Aufklärung & Bildung",    text: "Regelmäßige Workshops und Info-Veranstaltungen zu Wirkungsweisen, Risiken und Safer Use." },
  { icon: Share2,   title: "Vernetzung",              text: "Aktive Kooperation mit Suchtberatungsstellen in Osnabrück und der weiteren Region." },
  { icon: Heart,    title: "Hilfsangebote",           text: "Frühzeitiges Erkennen von Risikomustern und Vermittlung professioneller Hilfe." },
  { icon: Shield,   title: "Jugendschutz",            text: "Strikte Einhaltung der Altersgrenze und aktive Maßnahmen zum Schutz Minderjähriger." },
  { icon: Info,     title: "Safer Use",               text: "Information über verantwortungsvollen Konsum, Dosierung und Wechselwirkungen." },
];

const resources = [
  { title: "Cannabis-Selbsttest",  desc: "Teste anonym, ob dein Konsum im grünen Bereich liegt.", href: "https://www.drugscouts.de/de/selbsttest" },
  { title: "Online Suchtberatung", desc: "Anonyme und kostenlose Beratung durch Fachleute.",       href: "https://www.onlineberatung-sucht.de" },
];

export default function Prevention() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(".prev-hinweis",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.75, ease: "power2.out",
          scrollTrigger: { trigger: ".prev-hinweis", start: "top 85%", once: true } }
      );
      gsap.fromTo(".prev-pillars-hdr > *",
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.65, stagger: 0.1, ease: "power2.out",
          scrollTrigger: { trigger: ".prev-pillars-hdr", start: "top 84%", once: true } }
      );
      gsap.fromTo(".prev-pillar-card",
        { opacity: 0, y: 28, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 0.65, stagger: 0.09, ease: "power2.out",
          scrollTrigger: { trigger: ".prev-pillars-grid", start: "top 82%", once: true } }
      );
      gsap.fromTo(".prev-closing-hdr > *",
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.65, stagger: 0.1, ease: "power2.out",
          scrollTrigger: { trigger: ".prev-closing-hdr", start: "top 84%", once: true } }
      );
      gsap.fromTo(".prev-res-card",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: "power2.out",
          scrollTrigger: { trigger: ".prev-res-grid", start: "top 84%", once: true } }
      );
      gsap.fromTo(".prev-cta > *",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.13, ease: "power3.out",
          scrollTrigger: { trigger: ".prev-cta", start: "top 85%", once: true } }
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const sp: React.CSSProperties = {
    padding: "clamp(64px,9vw,120px) clamp(20px,4vw,40px)",
  };

  return (
    <div ref={rootRef} style={{ overflowX: "clip", background: "var(--bg)" }}>

      {/* ══════════════════════════════════════════════════
          1 · WARNING BANNER
      ══════════════════════════════════════════════════ */}
      <section style={{ ...sp, paddingBottom: "clamp(36px,5vw,52px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            className="prev-hinweis"
            style={{
              display: "flex",
              gap: "clamp(16px,3vw,28px)",
              alignItems: "flex-start",
              background: "rgba(155,136,192,0.07)",
              border: "1px solid rgba(155,136,192,0.20)",
              borderLeft: "3px solid var(--lilac)",
              borderRadius: "10px",
              padding: "clamp(20px,3vw,32px)",
              opacity: 0,
            }}
          >
            <div style={{
              flexShrink: 0,
              width: 48, height: 48,
              borderRadius: "12px",
              background: "rgba(155,136,192,0.18)",
              border: "1px solid rgba(155,136,192,0.40)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "2px",
            }}>
              <AlertTriangle size={20} strokeWidth={1.6} style={{ color: "var(--lilac)" }} />
            </div>
            <div>
              <h3 className="font-playfair" style={{
                fontSize: "1.0625rem", fontWeight: 700,
                color: "var(--cream)", marginBottom: "10px",
              }}>
                Wichtiger Hinweis
              </h3>
              <p className="font-montserrat" style={{
                fontSize: "0.875rem", fontWeight: 300,
                lineHeight: 1.85, color: "var(--text-secondary)", maxWidth: "680px",
              }}>
                Cannabis ist nicht harmlos. Der Konsum kann gesundheitliche Risiken bergen,
                insbesondere für junge Erwachsene. Wir empfehlen ausdrücklich einen
                verantwortungsvollen und informierten Umgang. Bei Fragen oder Bedenken stehen
                wir dir jederzeit zur Seite.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          2 · PRÄVENTION AUF ALLEN EBENEN
      ══════════════════════════════════════════════════ */}
      <section style={{ ...sp, paddingTop: "clamp(36px,5vw,52px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

          <div className="prev-pillars-hdr" style={{ textAlign: "center", marginBottom: "clamp(40px,6vw,64px)" }}>
            <span className="eyebrow">Unsere Säulen</span>
            <h2 className="font-playfair" style={{
              fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 700,
              color: "var(--cream)", lineHeight: 1.1, margin: "14px 0 18px",
            }}>
              Prävention auf{" "}
              <em style={{ color: "var(--lilac)", fontStyle: "italic" }}>allen Ebenen</em>
            </h2>
            <p className="font-montserrat" style={{
              fontSize: "0.9375rem", fontWeight: 300, lineHeight: 1.85,
              color: "var(--text-secondary)", maxWidth: "480px", margin: "0 auto",
            }}>
              Ein umfassendes Konzept für Gesundheitsschutz, Aufklärung und Unterstützung.
            </p>
          </div>

          <div className="prev-pillars-grid">
            {pillars.map((p, i) => (
              <div key={i} className="prev-pillar-card" style={{ opacity: 0 }}>
                <div className="prev-icon-bg" style={{
                  width: 48, height: 48, borderRadius: "12px",
                  background: "rgba(155,136,192,0.14)",
                  border: "1px solid rgba(155,136,192,0.32)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: "24px",
                  transition: "background 0.25s ease, border-color 0.25s ease",
                }}>
                  <p.icon size={20} strokeWidth={1.6} style={{ color: "var(--lilac)" }} />
                </div>
                <h3 className="font-playfair" style={{
                  fontSize: "1.0625rem", fontWeight: 700,
                  color: "var(--cream)", lineHeight: 1.25, marginBottom: "12px",
                }}>
                  {p.title}
                </h3>
                <p className="font-montserrat" style={{
                  fontSize: "0.875rem", fontWeight: 300,
                  lineHeight: 1.82, color: "var(--text-secondary)",
                }}>
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          3 · HILFE + CTA  (merged — no divider)
      ══════════════════════════════════════════════════ */}
      <section style={{ background: "var(--bg-surface)", paddingTop: "clamp(64px,9vw,120px)" }}>

        {/* ── Resources ── */}
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)" }}>

          <div className="prev-closing-hdr" style={{ textAlign: "center", marginBottom: "clamp(32px,5vw,48px)" }}>
            <span className="eyebrow">Hilfe &amp; Beratung</span>
            <h2 className="font-playfair" style={{
              fontSize: "clamp(2rem,5vw,3.25rem)", fontWeight: 700,
              color: "var(--cream)", lineHeight: 1.1, margin: "14px 0 16px",
            }}>
              Du bist{" "}
              <em style={{ color: "var(--lilac)", fontStyle: "italic" }}>nicht allein</em>
            </h2>
            <p className="font-montserrat" style={{
              fontSize: "0.9375rem", fontWeight: 300,
              lineHeight: 1.85, color: "var(--text-secondary)",
            }}>
              Zweifel an deinem Konsum? Diese Ressourcen können helfen.
            </p>
          </div>

          <div className="prev-res-grid">
            {resources.map((r, i) => (
              <a
                key={i}
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="prev-res-card"
                style={{ opacity: 0 }}
              >
                {/* Top row: tag */}
                <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "24px" }}>
                  <span className="prev-res-tag font-montserrat" style={{
                    fontSize: "0.625rem", fontWeight: 700,
                    letterSpacing: "0.22em", textTransform: "uppercase",
                    color: "var(--text-muted)",
                    transition: "color 0.25s ease",
                  }}>
                    Extern
                  </span>
                </div>

                {/* Title + description */}
                <h3 className="prev-res-title font-playfair" style={{
                  fontSize: "1.1875rem", fontWeight: 700,
                  color: "var(--cream)", lineHeight: 1.2,
                  marginBottom: "10px",
                  transition: "color 0.25s ease",
                }}>
                  {r.title}
                </h3>
                <p className="font-montserrat" style={{
                  fontSize: "0.8125rem", fontWeight: 300,
                  lineHeight: 1.75, color: "var(--text-secondary)",
                  flexGrow: 1,
                }}>
                  {r.desc}
                </p>

                {/* Action row */}
                <div className="prev-res-action" style={{
                  display: "flex", alignItems: "center", gap: "6px",
                  marginTop: "24px",
                  paddingTop: "18px",
                  borderTop: "1px solid var(--border)",
                  transition: "border-color 0.25s ease",
                }}>
                  <span className="prev-res-action-label font-montserrat" style={{
                    fontSize: "0.6875rem", fontWeight: 700,
                    letterSpacing: "0.18em", textTransform: "uppercase",
                    color: "var(--lilac)",
                    transition: "letter-spacing 0.25s ease",
                  }}>
                    Jetzt besuchen
                  </span>
                  <ArrowRight size={12} strokeWidth={2.5} style={{ color: "var(--lilac)", flexShrink: 0 }} />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* ── Full-bleed dark CTA ── */}
        <div style={{ marginTop: "clamp(60px,8vw,96px)", background: "var(--bg)" }}>
          <div className="prev-cta" style={{
            maxWidth: "720px",
            margin: "0 auto",
            padding: "clamp(72px,10vw,120px) clamp(20px,4vw,40px)",
            textAlign: "center",
            position: "relative",
          }}>
            {/* Glow */}
            <div aria-hidden="true" style={{
              position: "absolute",
              top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
              width: "640px", height: "360px",
              background: "radial-gradient(ellipse, rgba(155,136,192,0.18) 0%, transparent 65%)",
              pointerEvents: "none",
            }} />

            <h2 className="font-playfair" style={{
              fontSize: "clamp(2.5rem,6vw,4.25rem)",
              fontWeight: 700,
              color: "var(--cream)",
              lineHeight: 1.08,
              marginBottom: "24px",
              position: "relative",
            }}>
              Verantwortungsvoller Konsum
              <br />
              <em style={{ color: "var(--lilac)", fontStyle: "italic" }}>beginnt hier</em>
            </h2>
            <p className="font-montserrat" style={{
              fontSize: "0.9375rem", fontWeight: 300,
              lineHeight: 1.85, color: "var(--text-secondary)",
              maxWidth: "460px", margin: "0 auto 48px",
              position: "relative",
            }}>
              Werde Teil einer Gemeinschaft, die Aufklärung und Sicherheit an erste Stelle setzt.
            </p>
            <Link
              href="/membership"
              className="prev-cta-btn font-montserrat"
              style={{ position: "relative" }}
            >
              Mitglied werden
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        /* ── Pillar grid ── */
        .prev-pillars-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }
        .prev-pillar-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 30px 24px 34px;
          display: flex;
          flex-direction: column;
          transition: transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease;
        }
        .prev-pillar-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 36px rgba(0,0,0,0.32);
          border-color: var(--border-hover);
        }
        .prev-pillar-card:hover .prev-icon-bg {
          background: rgba(155,136,192,0.26) !important;
          border-color: rgba(155,136,192,0.52) !important;
        }

        /* ── Resource cards ── */
        .prev-res-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          max-width: 780px;
          margin: 0 auto;
        }
        .prev-res-card {
          display: flex;
          flex-direction: column;
          padding: 28px 28px 32px;
          background: var(--bg-elevated);
          border: 1px solid var(--border);
          border-radius: 14px;
          text-decoration: none;
          transition: transform 0.26s ease, border-color 0.26s ease,
                      background 0.26s ease, box-shadow 0.26s ease;
        }
        .prev-res-card:hover {
          transform: translateY(-5px);
          border-color: var(--border-hover);
          background: var(--bg-card);
          box-shadow: 0 10px 36px rgba(0,0,0,0.28);
        }
        .prev-res-card:hover .prev-res-badge {
          background: rgba(155,136,192,0.26) !important;
          border-color: rgba(155,136,192,0.54) !important;
        }
        .prev-res-card:hover .prev-res-title {
          color: var(--lilac) !important;
        }
        .prev-res-card:hover .prev-res-tag {
          color: var(--lilac) !important;
        }

        /* ── Resource card action row ── */
        .prev-res-card:hover .prev-res-action {
          border-color: rgba(155,136,192,0.42) !important;
        }
        .prev-res-card:hover .prev-res-arrow {
          transform: translateX(4px) !important;
        }
        .prev-res-card:hover .prev-res-action-label {
          letter-spacing: 0.22em !important;
        }

        /* ── CTA button ── */
        .prev-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          height: 72px;
          padding: 0 64px;
          background: var(--lilac);
          color: var(--bg);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          border: none;
          border-radius: 2px;
          text-decoration: none;
          transition: background 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
        }
        .prev-cta-btn:hover {
          background: var(--lilac-dark);
          transform: translateY(-3px);
          box-shadow: 0 16px 48px rgba(155,136,192,0.32);
        }
        .prev-cta-btn:active { transform: none; box-shadow: none; }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .prev-pillars-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .prev-pillars-grid { grid-template-columns: 1fr !important; }
          .prev-res-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
