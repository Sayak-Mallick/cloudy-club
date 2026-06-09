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
      <section style={{
        padding: "clamp(52px,8vw,88px) clamp(20px,4vw,40px)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}>
        <div
          className="prev-hinweis"
          style={{
            maxWidth: "580px",
            margin: "0 auto",
            textAlign: "center",
            opacity: 0,
          }}
        >
          {/* Icon */}
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 50, height: 50,
            borderRadius: "12px",
            background: "rgba(155,136,192,0.10)",
            border: "1px solid rgba(155,136,192,0.22)",
            marginBottom: "22px",
          }}>
            <AlertTriangle size={19} strokeWidth={1.5} style={{ color: "var(--lilac)" }} />
          </div>

          {/* Label */}
          <span className="eyebrow" style={{ display: "block", marginBottom: "18px" }}>
            Wichtiger Hinweis
          </span>

          {/* Body */}
          <p className="font-montserrat" style={{
            fontSize: "0.9rem", fontWeight: 300,
            lineHeight: 1.95, color: "var(--text-secondary)",
          }}>
            Cannabis ist nicht harmlos. Der Konsum kann gesundheitliche Risiken bergen,
            insbesondere für junge Erwachsene. Wir empfehlen ausdrücklich einen
            verantwortungsvollen und informierten Umgang. Bei Fragen oder Bedenken stehen
            wir dir jederzeit zur Seite.
          </p>
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
          3 · HILFE + CTA  (2-column)
      ══════════════════════════════════════════════════ */}
      <section style={{ background: "var(--bg-surface)", padding: "clamp(64px,9vw,120px) clamp(20px,4vw,40px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="prev-bottom-grid">

            {/* ── Left: resources ── */}
            <div>
              <div className="prev-closing-hdr" style={{ marginBottom: "clamp(28px,4vw,40px)" }}>
                <span className="eyebrow">Hilfe &amp; Beratung</span>
                <h2 className="font-playfair" style={{
                  fontSize: "clamp(1.75rem,4vw,2.75rem)", fontWeight: 700,
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
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "5px" }}>
                        <span className="prev-res-tag font-montserrat" style={{
                          fontSize: "0.5625rem", fontWeight: 700,
                          letterSpacing: "0.18em", textTransform: "uppercase",
                          color: "var(--text-muted)", flexShrink: 0,
                          transition: "color 0.25s ease",
                        }}>
                          Extern
                        </span>
                        <h3 className="prev-res-title font-playfair" style={{
                          fontSize: "0.9375rem", fontWeight: 700,
                          color: "var(--cream)", lineHeight: 1.2,
                          transition: "color 0.25s ease",
                        }}>
                          {r.title}
                        </h3>
                      </div>
                      <p className="font-montserrat" style={{
                        fontSize: "0.75rem", fontWeight: 300,
                        lineHeight: 1.65, color: "var(--text-secondary)",
                      }}>
                        {r.desc}
                      </p>
                    </div>
                    <div className="prev-res-action" style={{
                      display: "flex", alignItems: "center", gap: "5px",
                      flexShrink: 0, paddingLeft: "18px",
                      borderLeft: "1px solid var(--border)",
                      transition: "border-color 0.25s ease",
                    }}>
                      <span className="prev-res-action-label font-montserrat" style={{
                        fontSize: "0.5625rem", fontWeight: 700,
                        letterSpacing: "0.16em", textTransform: "uppercase",
                        color: "var(--lilac)",
                        transition: "letter-spacing 0.25s ease",
                      }}>
                        Jetzt besuchen
                      </span>
                      <ArrowRight size={10} strokeWidth={2.5} style={{ color: "var(--lilac)", flexShrink: 0 }} />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* ── Right: CTA card ── */}
            <div className="prev-cta" style={{
              position: "relative",
              padding: "clamp(48px,6vw,72px) clamp(32px,4vw,56px)",
              background: "var(--bg)",
              border: "1px solid var(--border)",
              borderRadius: "16px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <div aria-hidden="true" style={{
                position: "absolute",
                top: "50%", left: "50%",
                transform: "translate(-50%, -50%)",
                width: "480px", height: "320px",
                background: "radial-gradient(ellipse, rgba(155,136,192,0.18) 0%, transparent 65%)",
                pointerEvents: "none",
              }} />
              <h2 className="font-playfair" style={{
                fontSize: "clamp(2rem,3.5vw,3.25rem)",
                fontWeight: 700, color: "var(--cream)",
                lineHeight: 1.08, marginBottom: "20px",
                position: "relative",
              }}>
                Verantwortungsvoller Konsum
                <br />
                <em style={{ color: "var(--lilac)", fontStyle: "italic" }}>beginnt hier</em>
              </h2>
              <p className="font-montserrat" style={{
                fontSize: "0.9375rem", fontWeight: 300,
                lineHeight: 1.85, color: "var(--text-secondary)",
                maxWidth: "340px", margin: "0 auto 40px",
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

        /* ── Bottom 2-col layout ── */
        .prev-bottom-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(32px, 5vw, 64px);
          align-items: center;
        }

        /* ── Resource cards ── */
        .prev-res-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }
        .prev-res-card {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 16px;
          padding: 16px 20px;
          background: var(--bg-elevated);
          border: 1px solid var(--border);
          border-radius: 10px;
          text-decoration: none;
          transition: transform 0.26s ease, border-color 0.26s ease,
                      background 0.26s ease, box-shadow 0.26s ease;
        }
        .prev-res-card:hover {
          transform: translateY(-3px);
          border-color: var(--border-hover);
          background: var(--bg-card);
          box-shadow: 0 8px 28px rgba(0,0,0,0.24);
        }
        .prev-res-card:hover .prev-res-title {
          color: var(--lilac) !important;
        }
        .prev-res-card:hover .prev-res-tag {
          color: var(--lilac) !important;
        }
        .prev-res-card:hover .prev-res-action {
          border-color: rgba(155,136,192,0.42) !important;
        }
        .prev-res-card:hover .prev-res-action-label {
          letter-spacing: 0.20em !important;
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
          .prev-bottom-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 560px) {
          .prev-pillars-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
