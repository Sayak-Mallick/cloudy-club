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
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".faq-item",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.72, stagger: 0.09, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="faq"
      ref={sectionRef}
      style={{ padding: "112px 40px", background: "var(--sand)" }}
    >
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>
        <SectionHeader
          eyebrow="FAQ"
          title="Häufige Fragen"
          subtitle="Alles, was du über den Cloudy Club wissen möchtest – klar und ehrlich beantwortet."
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="faq-item"
              style={{
                background: "var(--cream)",
                border: "1px solid rgba(192,175,211,0.3)",
                overflow: "hidden",
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "20px",
                  padding: "24px 28px",
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
                    color: open === i ? "var(--lilac)" : "var(--charcoal)",
                    lineHeight: 1.4,
                    fontWeight: 500,
                    transition: "color 0.3s ease",
                  }}
                >
                  {faq.q}
                </span>
                <span style={{ flexShrink: 0, color: "var(--lilac)" }}>
                  {open === i ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>

              <div
                className={`accordion-body ${open === i ? "open" : ""}`}
              >
                <p
                  className="font-montserrat"
                  style={{
                    padding: "0 28px 24px",
                    fontSize: "0.9375rem",
                    fontWeight: 300,
                    lineHeight: 1.8,
                    color: "rgba(49,49,47,0.65)",
                  }}
                >
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="font-montserrat" style={{ textAlign: "center", marginTop: "40px", fontSize: "0.9375rem", fontWeight: 300, color: "rgba(49,49,47,0.5)" }}>
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
