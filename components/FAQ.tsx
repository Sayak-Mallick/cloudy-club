"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeader from "./SectionHeader";
import { Plus, Minus } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  { q: "Ist der Cloudy Club legal?",                      a: "Ja. Wir operieren vollständig im Rahmen des Konsumcannabisgesetzes (KCanG), das seit April 2024 in Deutschland gilt. Als eingetragener Verein sind wir lizenziert und unterliegen regelmäßigen Kontrollen." },
  { q: "Wie viel Cannabis kann ich monatlich erhalten?",   a: "Volljährige Mitglieder (21+) erhalten bis zu 50 Gramm pro Monat, maximal 25 Gramm pro Tag. Für Mitglieder zwischen 18 und 20 Jahren gilt eine monatliche Höchstmenge von 30 Gramm mit max. 10 % THC." },
  { q: "Wie lange dauert die Aufnahme?",                   a: "Nach Eingang deiner Bewerbung und Zahlung der Aufnahmegebühr dauert die Aufnahme in der Regel 1–2 Wochen. Du erhältst eine Bestätigung per E-Mail." },
  { q: "Kann ich die Mitgliedschaft kündigen?",            a: "Ja, jederzeit mit einer Frist von einem Monat zum Monatsende. Die Aufnahmegebühr wird nicht erstattet; bereits gezahlte Monatsbeiträge werden anteilig verrechnet." },
  { q: "Wo findet die Ausgabe statt?",                     a: "Die Abgabe erfolgt ausschließlich an unsere Clubräume in Osnabrück. Der genaue Standort wird nach der Aufnahme bekannt gegeben." },
  { q: "Gibt es regelmäßige Veranstaltungen?",             a: "Ja! Wir organisieren regelmäßig Workshops, Präventionsabende, Mitgliederversammlungen und gesellschaftliche Events. Alle Termine findest du im News-Bereich." },
  { q: "Welche Zahlungsmethoden werden akzeptiert?",       a: "Aufnahmegebühr und Beiträge werden per SEPA-Lastschrift oder Überweisung eingezogen. Bargahlung ist nicht möglich." },
];

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState<number | null>(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".faq-item",
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out",
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
      style={{ background: "var(--bg)" }}
    >
      <div className="section-inner" style={{ maxWidth: "800px" }}>
        <SectionHeader
          eyebrow="FAQ"
          title="Häufige Fragen"
          subtitle="Alles, was du über den Cloudy Club wissen möchtest – klar und ehrlich beantwortet."
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="faq-item card"
              style={{
                background: "var(--bg-surface)",
                overflow: "hidden",
                border: "1px solid var(--border)",
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "24px",
                  padding: "32px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <span
                  className="font-playfair"
                  style={{
                    fontSize: "1.125rem",
                    color: open === i ? "var(--lilac)" : "var(--cream)",
                    lineHeight: 1.4,
                    fontWeight: 600,
                    transition: "color 0.3s ease",
                  }}
                >
                  {faq.q}
                </span>
                <span style={{ flexShrink: 0, color: open === i ? "var(--lilac)" : "var(--text-secondary)" }}>
                  {open === i ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>

              <div
                className={`accordion-body ${open === i ? "open" : ""}`}
              >
                <p
                  className="font-montserrat"
                  style={{
                    padding: "0 32px 32px",
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

        <p className="font-montserrat" style={{ textAlign: "center", marginTop: "48px", fontSize: "0.9375rem", fontWeight: 300, color: "var(--text-muted)" }}>
          Noch Fragen?{" "}
          <a
            href="mailto:hello@cloudyclub-osnabrueck.de"
            style={{ color: "var(--lilac)", textDecoration: "underline", textUnderlineOffset: "4px" }}
          >
            Schreib uns gerne.
          </a>
        </p>
      </div>
    </section>
  );
}
