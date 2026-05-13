"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plus, Minus } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: "Ist der Cloudy Club legal?",
    a: "Ja. Wir sind ein eingetragener Verein nach §§ 26 ff. BGB und operieren vollständig im Rahmen des Konsumcannabisgesetzes (KCanG), das seit April 2024 in Deutschland gilt.",
  },
  {
    q: "Wie viel Cannabis erhalte ich pro Monat?",
    a: "Mitglieder ab 21 Jahren erhalten bis zu 50g pro Monat. Mitglieder zwischen 18 und 20 Jahren erhalten bis zu 30g mit max. 10% THC-Gehalt.",
  },
  {
    q: "Wie lange dauert die Aufnahme?",
    a: "Nach Eingang deines vollständigen Antrags und der Aufnahmegebühr dauert die Bearbeitung in der Regel 1–2 Wochen. Du erhältst eine Bestätigung per E-Mail.",
  },
  {
    q: "Kann ich meine Mitgliedschaft kündigen?",
    a: "Ja, jederzeit mit einer Frist von einem Monat zum Monatsende. Die Aufnahmegebühr wird nicht erstattet; bereits gezahlte Monatsbeiträge werden anteilig verrechnet.",
  },
  {
    q: "Wo findet die Abgabe statt?",
    a: "Die Abgabeadresse in Osnabrück wird dir nach erfolgreicher Aufnahme mitgeteilt. Die Abgabe erfolgt ausschließlich an unserem Clubstandort.",
  },
  {
    q: "Gibt es regelmäßige Veranstaltungen?",
    a: "Ja — wir organisieren Workshops, Präventionsabende und Mitgliederversammlungen. Details zu allen Terminen erhältst du nach deinem Beitritt.",
  },
  {
    q: "Welche Zahlungsmethoden werden akzeptiert?",
    a: "Per SEPA-Überweisung. Bankdaten erhältst du nach Aufnahme. Barzahlung ist nicht möglich.",
  },
];

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState<number | null>(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(".faq-item",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 82%", once: true } }
      );
      gsap.fromTo(".faq-contact",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="section"
      style={{ background: "var(--bg-surface)" }}
    >
      <div className="section-inner">
        {/* Section header */}
        <div className="section-header" style={{ marginBottom: "56px" }}>
          <span className="eyebrow">FAQ</span>
          <h2 className="font-playfair section-title">Häufige Fragen.</h2>
          <p className="section-subtitle">
            Alles, was du über den Cloudy Club wissen möchtest – klar und ehrlich beantwortet.
          </p>
        </div>

        <div
          className="faq-grid"
          style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: "80px", alignItems: "start" }}
        >
          {/* Left: flat accordion */}
          <div>
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="faq-item"
                style={{ borderBottom: "1px solid var(--border)" }}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "24px",
                    padding: "24px 0",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span
                    className="font-playfair"
                    style={{
                      fontSize: "1.0625rem",
                      color: open === i ? "var(--lilac)" : "var(--cream)",
                      lineHeight: 1.4,
                      fontWeight: 600,
                      transition: "color 0.2s ease",
                    }}
                  >
                    {faq.q}
                  </span>
                  <span style={{
                    flexShrink: 0,
                    color: "var(--lilac)",
                    transition: "transform 0.2s ease",
                    display: "flex",
                  }}>
                    {open === i
                      ? <Minus size={16} />
                      : <Plus size={16} />
                    }
                  </span>
                </button>

                <div className={`accordion-body ${open === i ? "open" : ""}`}>
                  <p
                    className="font-montserrat"
                    style={{
                      paddingBottom: "24px",
                      fontSize: "0.9375rem",
                      fontWeight: 300,
                      lineHeight: 1.8,
                      color: "var(--text-secondary)",
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: sticky contact panel */}
          <div className="faq-contact" style={{ position: "sticky", top: "80px" }}>
            <div style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "2px",
              padding: "40px 32px",
            }}>
              <span className="eyebrow" style={{ display: "block", marginBottom: "12px" }}>Noch Fragen?</span>
              <h3 className="font-playfair" style={{ fontSize: "1.625rem", fontWeight: 700, color: "var(--cream)", marginBottom: "20px", lineHeight: 1.15 }}>
                Wir helfen gerne.
              </h3>

              <div style={{ width: "32px", height: "1px", background: "var(--border)", marginBottom: "24px" }} />

              <p className="font-montserrat" style={{ fontSize: "0.875rem", fontWeight: 300, lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: "24px" }}>
                Schreib uns direkt — wir antworten in der Regel innerhalb von 24 Stunden.
              </p>

              <a
                href="mailto:hello@cloudyclub-osnabrueck.de"
                style={{
                  display: "block",
                  fontSize: "0.8125rem",
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 500,
                  color: "var(--lilac)",
                  textDecoration: "none",
                  marginBottom: "8px",
                  transition: "opacity 0.2s ease",
                  wordBreak: "break-all",
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.75")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
              >
                hello@cloudyclub-osnabrueck.de
              </a>

              <p className="font-montserrat" style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "4px" }}>
                Antworten in der Regel innerhalb von 24 Stunden.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .faq-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .faq-contact { position: static !important; }
        }
      `}</style>
    </section>
  );
}
