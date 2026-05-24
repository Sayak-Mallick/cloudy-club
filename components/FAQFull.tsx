"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown, Search } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ── FAQ data ────────────────────────────────────────────── */
const categories = [
  {
    title: "Allgemein",
    items: [
      {
        q: "Was ist ein Cannabis Social Club?",
        a: "Ein Cannabis Social Club (CSC) ist ein gemeinnütziger eingetragener Verein, in dem volljährige Mitglieder gemeinschaftlich Cannabis für den Eigenkonsum anbauen und untereinander weitergeben. Der Cloudy Club ist ein solcher Verein nach deutschem Recht.",
      },
      {
        q: "Ist das wirklich legal?",
        a: "Ja. Seit April 2024 erlaubt das Konsumcannabisgesetz (KCanG) eingetragenen Vereinen den gemeinschaftlichen Anbau und die Abgabe von Cannabis an Mitglieder. Wir operieren vollständig im Rahmen dieser gesetzlichen Grundlage.",
      },
      {
        q: "Wann eröffnet der Cloudy Club?",
        a: "Wir befinden uns derzeit in der Gründungsphase und arbeiten auf eine baldige Eröffnung hin. Trage dich in unsere Warteliste ein, um als Erster informiert zu werden.",
      },
    ],
  },
  {
    title: "Mitgliedschaft",
    items: [
      {
        q: "Wer darf Mitglied werden?",
        a: "Jede volljährige Person mit Wohnsitz in Deutschland kann Mitglied werden. Du musst mindestens 18 Jahre alt sein. Für Mitglieder zwischen 18 und 21 Jahren gelten gesonderte THC-Limits gemäß KCanG.",
      },
      {
        q: "Was kostet die Mitgliedschaft?",
        a: "Es gibt eine einmalige Aufnahmegebühr sowie einen monatlichen Mitgliedsbeitrag. Die genauen Konditionen erfährst du auf unserer Mitgliedschaftsseite oder auf Anfrage per E-Mail.",
      },
      {
        q: "Gibt es eine Warteliste?",
        a: "Ja. Da die Mitgliederzahl gesetzlich begrenzt ist, führen wir eine Warteliste. Trage dich auf unserer Webseite ein — du wirst benachrichtigt, sobald Plätze frei werden.",
      },
      {
        q: "Kann ich meine Mitgliedschaft kündigen?",
        a: "Ja, jederzeit mit einer Frist von einem Monat zum Monatsende. Die Aufnahmegebühr wird nicht erstattet; bereits gezahlte Monatsbeiträge werden anteilig verrechnet.",
      },
      {
        q: "Erfährt mein Arbeitgeber davon?",
        a: "Nein. Deine Mitgliedschaft ist eine private Angelegenheit. Wir geben keinerlei Daten an Dritte weiter — es sei denn, wir sind gesetzlich dazu verpflichtet.",
      },
      {
        q: "Ist die Mitgliedschaft anonym?",
        a: "Eine vollständige Anonymität ist gesetzlich nicht möglich, da wir verpflichtet sind, Mitgliederdaten zu erfassen. Deine Daten werden jedoch DSGVO-konform gespeichert und nicht weitergegeben.",
      },
    ],
  },
  {
    title: "Cannabis & Konsum",
    items: [
      {
        q: "Wie viel Cannabis kann ich erhalten?",
        a: "Mitglieder ab 21 Jahren können bis zu 50g pro Monat erhalten. Mitglieder zwischen 18 und 20 Jahren bis zu 30g mit einem maximalen THC-Gehalt von 10%.",
      },
      {
        q: "Dürfen Social Clubs Cannabis versenden?",
        a: "Nein. Eine Lieferung per Post oder Versanddienst ist nach dem KCanG ausdrücklich verboten. Die Abgabe erfolgt ausschließlich am Clubstandort in Osnabrück.",
      },
      {
        q: "Wie garantiert ihr die Qualität?",
        a: "Nach jeder Ernte werden Proben in einem zertifizierten Labor auf THC, CBD, Terpene und Schadstoffe getestet. Die Ergebnisse werden allen Mitgliedern im Mitgliederbereich zugänglich gemacht.",
      },
      {
        q: "Welche Sorten bietet ihr an?",
        a: "Unser Anbauerteam kultiviert eine kuratierte Auswahl an Indica-, Sativa- und Hybridvarianten. Das aktuelle Sortiment wird regelmäßig aktualisiert und im Mitgliederbereich veröffentlicht.",
      },
    ],
  },
  {
    title: "Prävention",
    items: [
      {
        q: "Was ist euer Präventionskonzept?",
        a: "Prävention ist bei uns kein Pflichtprogramm, sondern gelebte Verantwortung. Wir bieten regelmäßige Informationsveranstaltungen, Beratungsgespräche und Material zu risikobewusstem Konsum an.",
      },
      {
        q: "An wen kann ich mich bei Problemen wenden?",
        a: "Wir haben geschulte Ansprechpartner im Verein. Zudem kooperieren wir mit lokalen Beratungsstellen in Osnabrück und können bei Bedarf weiterverweisen.",
      },
      {
        q: "Wie schützt ihr Jugendliche?",
        a: "Der Zutritt und die Abgabe sind strikt auf Personen ab 18 Jahren beschränkt. Wir überprüfen die Identität bei jeder Abgabe. Ein Verstoß führt zum sofortigen Ausschluss.",
      },
    ],
  },
  {
    title: "Verein & Regeln",
    items: [
      {
        q: "Kann ich im Club mitbestimmen?",
        a: "Ja. Als eingetragener Verein haben alle Mitglieder Stimmrecht auf der jährlichen Mitgliederversammlung. Du kannst Anträge stellen und über wichtige Entscheidungen abstimmen.",
      },
      {
        q: "Was sind die Club-Regeln?",
        a: "Die vollständige Vereinsordnung erhältst du nach Aufnahme. Wesentliche Punkte: kein Konsum auf dem Vereinsgelände, keine Weitergabe an Nicht-Mitglieder, Verhalten im Sinne des Gemeinwohls.",
      },
      {
        q: "Wie weit ist der Club von mir entfernt?",
        a: "Der Cloudy Club befindet sich in Osnabrück. Den genauen Standort teilen wir nach erfolgreicher Aufnahme mit. Auf unserer Standortseite findest du allgemeine Infos zur Lage.",
      },
    ],
  },
];

/* ── Accordion item ─────────────────────────────────────── */
function AccordionItem({
  q, a, isOpen, onToggle, isLast,
}: {
  q: string; a: string; isOpen: boolean; onToggle: () => void; isLast: boolean;
}) {
  const bodyRef   = useRef<HTMLDivElement>(null);
  const chevRef   = useRef<HTMLSpanElement>(null);
  const mounted   = useRef(false);

  useEffect(() => {
    if (!bodyRef.current) return;
    if (!mounted.current) {
      gsap.set(bodyRef.current, { height: 0, opacity: 0, overflow: "hidden" });
      mounted.current = true;
      return;
    }
    if (isOpen) {
      gsap.set(bodyRef.current, { height: "auto" });
      const h = bodyRef.current.offsetHeight;
      gsap.fromTo(bodyRef.current,
        { height: 0, opacity: 0 },
        { height: h, opacity: 1, duration: 0.38, ease: "power2.out" }
      );
      gsap.to(chevRef.current, { rotation: 180, duration: 0.3, ease: "power2.out" });
    } else {
      gsap.to(bodyRef.current, { height: 0, opacity: 0, duration: 0.3, ease: "power2.inOut" });
      gsap.to(chevRef.current, { rotation: 0, duration: 0.26, ease: "power2.inOut" });
    }
  }, [isOpen]);

  return (
    <div
      className="faq-full-item"
      style={{
        borderBottom: isLast ? "none" : "1px solid rgba(0,0,0,0.07)",
      }}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          padding: "18px 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span
          className="font-playfair"
          style={{
            fontSize: "1rem",
            fontWeight: 600,
            color: isOpen ? "rgba(26,24,20,0.95)" : "rgba(26,24,20,0.78)",
            lineHeight: 1.4,
            transition: "color 0.2s ease",
          }}
        >
          {q}
        </span>
        <span
          ref={chevRef}
          style={{
            flexShrink: 0,
            display: "flex",
            color: "rgba(26,24,20,0.35)",
            transformOrigin: "center",
          }}
        >
          <ChevronDown size={16} strokeWidth={1.8} />
        </span>
      </button>

      <div ref={bodyRef}>
        <p
          className="font-montserrat"
          style={{
            paddingBottom: "20px",
            fontSize: "0.9125rem",
            fontWeight: 300,
            lineHeight: 1.82,
            color: "rgba(26,24,20,0.55)",
          }}
        >
          {a}
        </p>
      </div>
    </div>
  );
}

/* ── Main component ─────────────────────────────────────── */
export default function FAQFull() {
  const sectionRef  = useRef<HTMLElement>(null);
  const eyebrowRef  = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const [query,    setQuery]    = useState("");
  const [openKey,  setOpenKey]  = useState<string | null>(null);

  /* Filter categories + items by search query */
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return categories;
    return categories
      .map((cat) => ({
        ...cat,
        items: cat.items.filter(
          (item) =>
            item.q.toLowerCase().includes(q) ||
            item.a.toLowerCase().includes(q)
        ),
      }))
      .filter((cat) => cat.items.length > 0);
  }, [query]);

  /* Collapse all when search changes */
  useEffect(() => { setOpenKey(null); }, [query]);

  /* Entrance animations */
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(eyebrowRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", delay: 0.1 }
      );
      gsap.fromTo(headlineRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.75, ease: "power3.out", delay: 0.2 }
      );
      gsap.fromTo(".faq-search-wrap",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", delay: 0.38 }
      );
      gsap.fromTo(".faq-category",
        { opacity: 0, y: 28 },
        {
          opacity: 1, y: 0,
          duration: 0.65, stagger: 0.1, ease: "power2.out",
          scrollTrigger: { trigger: ".faq-body", start: "top 85%", once: true },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggle = (key: string) => setOpenKey((prev) => (prev === key ? null : key));

  return (
    <section
      ref={sectionRef}
      style={{ background: "var(--cream, #f5f0eb)", minHeight: "100vh" }}
    >
      {/* ── Hero header ── */}
      <div
        style={{
          textAlign: "center",
          padding: "clamp(80px, 10vw, 130px) 24px 64px",
        }}
      >
        <span
          ref={eyebrowRef}
          className="eyebrow"
          style={{ color: "rgba(50,45,40,0.45)", opacity: 0 }}
        >
          FAQ
        </span>

        <h1
          ref={headlineRef}
          className="font-playfair"
          style={{
            fontSize: "clamp(2.75rem, 6vw, 4.5rem)",
            fontWeight: 700,
            color: "#1a1814",
            lineHeight: 1.05,
            marginTop: "14px",
            marginBottom: "36px",
            opacity: 0,
          }}
        >
          Häufige{" "}
          <span style={{ fontStyle: "italic", color: "var(--lilac)" }}>Fragen</span>
        </h1>

        {/* Search field */}
        <div
          className="faq-search-wrap"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            width: "100%",
            maxWidth: "500px",
            background: "#fff",
            border: "1px solid rgba(0,0,0,0.10)",
            borderRadius: "10px",
            padding: "0 18px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
            opacity: 0,
          }}
        >
          <Search size={15} strokeWidth={1.8} style={{ color: "rgba(26,24,20,0.35)", flexShrink: 0 }} />
          <input
            type="text"
            placeholder="Suche nach Fragen..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="font-montserrat"
            style={{
              flex: 1,
              height: "48px",
              background: "none",
              border: "none",
              outline: "none",
              fontSize: "0.9rem",
              fontWeight: 300,
              color: "#1a1814",
              caretColor: "var(--lilac)",
            }}
          />
        </div>
      </div>

      {/* ── Category sections ── */}
      <div
        className="faq-body"
        style={{
          maxWidth: "780px",
          margin: "0 auto",
          padding: "0 24px clamp(80px, 10vw, 130px)",
        }}
      >
        {filtered.length === 0 ? (
          <p
            className="font-montserrat"
            style={{
              textAlign: "center",
              color: "rgba(26,24,20,0.42)",
              fontSize: "0.9375rem",
              paddingTop: "40px",
            }}
          >
            Keine Ergebnisse für „{query}".
          </p>
        ) : (
          filtered.map((cat) => (
            <div
              key={cat.title}
              className="faq-category"
              style={{ marginBottom: "52px", opacity: 0 }}
            >
              {/* Category title */}
              <h2
                className="font-playfair"
                style={{
                  fontSize: "1.375rem",
                  fontWeight: 700,
                  color: "#1a1814",
                  marginBottom: "4px",
                }}
              >
                {cat.title}
              </h2>

              {/* Accordion group */}
              <div
                style={{
                  marginTop: "16px",
                  background: "#fff",
                  border: "1px solid rgba(0,0,0,0.07)",
                  borderRadius: "14px",
                  padding: "0 24px",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.032)",
                }}
              >
                {cat.items.map((item, idx) => (
                  <AccordionItem
                    key={`${cat.title}-${idx}`}
                    q={item.q}
                    a={item.a}
                    isOpen={openKey === `${cat.title}-${idx}`}
                    onToggle={() => toggle(`${cat.title}-${idx}`)}
                    isLast={idx === cat.items.length - 1}
                  />
                ))}
              </div>
            </div>
          ))
        )}
      </div>

      <style>{`
        .faq-full-item button:focus-visible {
          outline: 2px solid var(--lilac);
          outline-offset: 2px;
          border-radius: 4px;
        }
        ::placeholder { color: rgba(26,24,20,0.35); }
      `}</style>
    </section>
  );
}
