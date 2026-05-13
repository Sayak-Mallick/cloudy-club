"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  "Monatliche Cannabis-Abgabe gemäß § CanG",
  "Zugang zu vereinseigenen Anbauflächen",
  "Exklusive Mitglieder-Events & Workshops",
  "Strain-Atlas mit Terpenprofilen",
  "Prävention & Beratungsangebote",
  "Stimmrecht auf Vereinsversammlungen",
  "Mitglieder-Newsletter & Neuigkeiten",
  "Transparente Kostenstruktur",
];

const requirements = [
  "Mindestalter: 18 Jahre",
  "Hauptwohnsitz in Deutschland",
  "6 Monate nachgewiesener Aufenthalt in Deutschland",
  "Bereitschaft zur Präventionsschulung",
  "Akzeptanz der Vereinssatzung",
];

export default function Membership() {
  const sectionRef   = useRef<HTMLElement>(null);
  const price1Ref    = useRef<HTMLSpanElement>(null);
  const price2Ref    = useRef<HTMLSpanElement>(null);
  const headlineRef  = useRef<HTMLHeadingElement>(null);
  const line1Ref     = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      // Line-mask headline reveal
      if (!prefersReduced) {
        gsap.fromTo(line1Ref.current,
          { y: "105%", skewX: -3 },
          {
            y: "0%", skewX: 0, duration: 0.9, ease: "power4.out",
            scrollTrigger: { trigger: headlineRef.current, start: "top 82%", once: true },
          }
        );
      }

      // Columns stagger in
      gsap.fromTo(".mem-col",
        { opacity: 0, y: 28 },
        {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 78%", once: true },
        }
      );

      if (!prefersReduced) {
        // Counter — aufnahme (50€)
        const counter1 = { val: 0 };
        gsap.to(counter1, {
          val: 50,
          duration: 1.6,
          ease: "power2.out",
          snap: { val: 1 },
          scrollTrigger: { trigger: price1Ref.current, start: "top 85%", once: true },
          onUpdate() {
            if (price1Ref.current) price1Ref.current.textContent = String(Math.round(counter1.val));
          },
        });

        // Counter — monatlich (25€)
        const counter2 = { val: 0 };
        gsap.to(counter2, {
          val: 25,
          duration: 1.4,
          ease: "power2.out",
          snap: { val: 1 },
          scrollTrigger: { trigger: price2Ref.current, start: "top 85%", once: true },
          onUpdate() {
            if (price2Ref.current) price2Ref.current.textContent = String(Math.round(counter2.val));
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="membership"
      ref={sectionRef}
      className="section"
      style={{ background: "var(--bg)" }}
    >
      <div className="section-inner">
        <div className="section-header" style={{ marginBottom: "56px" }}>
          <span className="eyebrow">Mitgliedschaft</span>
          <h2 ref={headlineRef} className="font-playfair section-title">
            <span className="line-mask" style={{ display: "block" }}>
              <span ref={line1Ref} className="line-inner">Werde Teil des Clubs.</span>
            </span>
          </h2>
          <p className="section-subtitle">
            Transparent, fair und unkompliziert. Hier siehst du alles, was du über eine Mitgliedschaft im Cloudy Club wissen musst.
          </p>
        </div>

        {/* Three-column grid */}
        <div
          className="mem-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr 1fr", gap: "24px", alignItems: "start" }}
        >
          {/* Costs card */}
          <div
            className="mem-col"
            style={{
              background: "var(--bg-elevated)",
              border: "1px solid var(--border)",
              borderRadius: "2px",
              padding: "40px 32px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span className="eyebrow" style={{ marginBottom: "32px", display: "block" }}>Beiträge</span>

            <div style={{ paddingBottom: "24px", marginBottom: "24px", borderBottom: "1px solid var(--border)" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "4px", marginBottom: "6px" }}>
                <span
                  ref={price1Ref}
                  className="font-playfair"
                  style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", color: "var(--cream)", fontWeight: 700, lineHeight: 1 }}
                >
                  0
                </span>
                <span className="font-playfair" style={{ fontSize: "1.25rem", color: "var(--cream)", fontWeight: 500 }}>€</span>
              </div>
              <p className="font-montserrat" style={{ fontSize: "0.8125rem", fontWeight: 300, color: "var(--text-secondary)" }}>
                Einmalige Aufnahmegebühr
              </p>
            </div>

            <div style={{ paddingBottom: "28px", marginBottom: "28px", borderBottom: "1px solid var(--border)" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "4px", marginBottom: "6px" }}>
                <span
                  ref={price2Ref}
                  className="font-playfair"
                  style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", color: "var(--lilac)", fontWeight: 700, lineHeight: 1 }}
                >
                  0
                </span>
                <span className="font-playfair" style={{ fontSize: "1.25rem", color: "var(--lilac)", fontWeight: 500 }}>€</span>
              </div>
              <p className="font-montserrat" style={{ fontSize: "0.8125rem", fontWeight: 300, color: "var(--text-secondary)" }}>
                Pro Monat
              </p>
            </div>

            <p className="font-montserrat" style={{ fontSize: "0.75rem", fontWeight: 300, lineHeight: 1.7, color: "var(--text-muted)", marginBottom: "32px", flex: 1 }}>
              Keine versteckten Kosten. Beiträge dienen ausschließlich dem Vereinsbetrieb und Anbau.
            </p>

            <Link
              href="#cannanas-embed"
              className="btn-primary"
              style={{ width: "100%", justifyContent: "center" }}
            >
              Mitglied werden <ArrowRight size={13} />
            </Link>
          </div>

          {/* Benefits list */}
          <div className="mem-col">
            <span className="eyebrow" style={{ display: "block", marginBottom: "12px" }}>Was du bekommst</span>
            <h3 className="font-playfair" style={{ fontSize: "clamp(1.375rem, 3vw, 1.75rem)", fontWeight: 700, color: "var(--cream)", marginBottom: "32px", lineHeight: 1.2 }}>
              Deine Vorteile als Mitglied.
            </h3>
            <ul style={{ listStyle: "none" }}>
              {benefits.map((b, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    gap: "14px",
                    alignItems: "flex-start",
                    padding: "14px 0",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  <Check size={15} style={{ color: "var(--lilac)", flexShrink: 0, marginTop: "3px" }} />
                  <span className="font-montserrat" style={{ fontSize: "0.9375rem", fontWeight: 300, lineHeight: 1.6, color: "var(--text-secondary)" }}>
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div className="mem-col">
            <span className="eyebrow" style={{ display: "block", marginBottom: "32px" }}>Voraussetzungen</span>
            <ul style={{ listStyle: "none" }}>
              {requirements.map((r, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    gap: "14px",
                    alignItems: "flex-start",
                    padding: "14px 0",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  <span className="font-montserrat" style={{ color: "var(--lilac)", fontWeight: 700, flexShrink: 0, fontSize: "0.875rem", marginTop: "1px" }}>
                    —
                  </span>
                  <span className="font-montserrat" style={{ fontSize: "0.875rem", fontWeight: 300, lineHeight: 1.6, color: "var(--text-secondary)" }}>
                    {r}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Application form placeholder */}
        <div
          id="cannanas-embed"
          style={{
            marginTop: "48px",
            background: "var(--bg-surface)",
            border: "1px solid var(--border)",
            borderRadius: "2px",
            padding: "56px 48px",
            textAlign: "center",
          }}
        >
          <span className="eyebrow" style={{ display: "block", marginBottom: "12px" }}>Beitrittsformular</span>
          <h3 className="font-playfair" style={{ fontSize: "1.625rem", fontWeight: 700, color: "var(--cream)", marginBottom: "12px" }}>
            Mitgliedschaft beantragen
          </h3>
          <p className="font-montserrat" style={{ fontSize: "0.9375rem", fontWeight: 300, color: "var(--text-secondary)", marginBottom: "32px" }}>
            Das Antragsformular wird hier eingebettet.
          </p>
          <div style={{
            minHeight: "120px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "var(--bg-card)",
            border: "1px dashed var(--border)",
            borderRadius: "2px",
            padding: "24px",
          }}>
            <p className="font-montserrat" style={{ fontSize: "0.8125rem", color: "var(--text-muted)", fontWeight: 400, letterSpacing: "0.04em" }}>
              [Cannanas-Formular wird hier eingebettet]
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .mem-grid { grid-template-columns: 1fr 1fr !important; }
          .mem-grid > .mem-col:first-child { grid-column: 1 / -1; }
        }
        @media (max-width: 640px) {
          .mem-grid { grid-template-columns: 1fr !important; }
          .mem-grid > .mem-col:first-child { grid-column: auto; }
        }
      `}</style>
    </section>
  );
}
