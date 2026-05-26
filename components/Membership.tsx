"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Leaf, CalendarDays, Shield, Award,
  Check, ChevronDown, ArrowRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ─── Light-theme tokens ──────────────────────────────────── */
const L = {
  bg:        "#f5f0eb",
  card:      "#ffffff",
  cardB:     "rgba(0,0,0,0.07)",
  shadow:    "0 2px 20px rgba(0,0,0,0.04)",
  headline:  "#1a1814",
  body:      "rgba(26,24,20,0.58)",
  muted:     "rgba(26,24,20,0.30)",
  eyebrow:   "rgba(50,45,40,0.50)",
  divider:   "rgba(26,24,20,0.10)",
  iconBg:    "rgba(192,175,211,0.20)",
  icon:      "#9B88C0",
  lilac:     "#C0AFD3",
};

/* ─── Dark-theme tokens (pricing section) ────────────────── */
const D = {
  bg:        "#1e1d1b",
  cardL:     "#181816",   // Interessent card
  cardR:     "#252422",   // Mitglied card
  borderL:   "rgba(255,255,255,0.07)",
  borderR:   "rgba(192,175,211,0.22)",
  cream:     "#F4F1EA",
  sub:       "rgba(244,241,234,0.50)",
  body:      "rgba(244,241,234,0.42)",
  eyebrow:   "rgba(192,175,211,0.55)",
  lilac:     "#C0AFD3",
  check:     "rgba(192,175,211,0.14)",
  checkB:    "rgba(192,175,211,0.28)",
};

/* ─── Data ────────────────────────────────────────────────── */
const benefits = [
  { icon: Leaf,        title: "Premium Cannabis",     text: "Zugang zu laborgeprüftem Cannabis aus kontrolliertem Anbau." },
  { icon: CalendarDays,title: "Community Events",     text: "Exklusive Workshops, Tastings und Mitglieder-Events." },
  { icon: Shield,      title: "Rechtliche Sicherheit",text: "Vollständig legale Mitgliedschaft nach KCanG." },
  { icon: Award,       title: "Mitbestimmung",        text: "Aktives Stimmrecht bei Vereinsentscheidungen und Satzungen." },
];

const freeTier    = ["News-Updates", "Einladung zu Events", "Community-Zugang"];
const memberTier  = ["Priorisierte Aufnahme", "Cannabis aus Eigenanbau", "Stimmrecht", "Lounge-Zutritt", "Exklusive Member-Events"];

const steps = [
  { n: "01", title: "Registrierung", text: "Fülle unser Anmeldeformular aus und bestätige dein Alter." },
  { n: "02", title: "Verifizierung",  text: "Wir prüfen deine Angaben und bestätigen deine Berechtigung." },
  { n: "03", title: "Aufnahme",       text: "Nach Bestätigung erhältst du alle Infos zu deiner Mitgliedschaft." },
  { n: "04", title: "Willkommen",     text: "Du bist Teil der Community — besuche uns und genieße den Club." },
];

const faqItems = [
  { q: "Wer darf Mitglied werden?",         a: "Alle Personen ab 21 Jahren, die seit mindestens 6 Monaten in Deutschland leben und Mitglied in nur einer Anbauvereinigung sind." },
  { q: "Gibt es eine Warteliste?",           a: "Die Plätze sind gesetzlich begrenzt. Bei hoher Nachfrage wird eine Warteliste eingerichtet." },
  { q: "Wie viel Cannabis kann ich erhalten?", a: "Maximal 25 g pro Tag und 50 g pro Monat, gemäß den gesetzlichen Vorgaben." },
  { q: "Kann ich meine Mitgliedschaft kündigen?", a: "Ja, eine Kündigung ist jederzeit zum Ende des Folgemonats möglich." },
];

/* ─── Component ─────────────────────────────────────────────── */
export default function Membership() {
  const rootRef = useRef<HTMLDivElement>(null);

  /* FAQ accordion state */
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqBodyRefs  = useRef<(HTMLDivElement | null)[]>([]);
  const faqChevRefs  = useRef<(HTMLSpanElement | null)[]>([]);

  /* Accordion toggle */
  const toggleFaq = (i: number) => {
    const isOpen  = openFaq === i;
    const body    = faqBodyRefs.current[i];
    const chev    = faqChevRefs.current[i];
    if (!body) return;

    if (isOpen) {
      gsap.to(body, { height: 0, opacity: 0, duration: 0.3, ease: "power2.inOut" });
      gsap.to(chev, { rotation: 0, duration: 0.26, ease: "power2.inOut" });
      setOpenFaq(null);
    } else {
      if (openFaq !== null) {
        const pb = faqBodyRefs.current[openFaq];
        const pc = faqChevRefs.current[openFaq];
        gsap.to(pb, { height: 0, opacity: 0, duration: 0.26, ease: "power2.inOut" });
        gsap.to(pc, { rotation: 0, duration: 0.22, ease: "power2.inOut" });
      }
      gsap.set(body, { height: "auto", opacity: 1 });
      const h = body.offsetHeight;
      gsap.fromTo(body,
        { height: 0, opacity: 0 },
        { height: h, opacity: 1, duration: 0.36, ease: "power2.out" }
      );
      gsap.to(chev, { rotation: 180, duration: 0.28, ease: "power2.out" });
      setOpenFaq(i);
    }
  };

  /* Scroll-trigger entrances */
  useEffect(() => {
    /* Initialise FAQ bodies closed */
    faqBodyRefs.current.forEach(el => {
      if (el) gsap.set(el, { height: 0, opacity: 0, overflow: "hidden" });
    });

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {

      /* ── Benefits header ── */
      gsap.fromTo(".mem-ben-hdr > *",
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.65, stagger: 0.1, ease: "power2.out",
          scrollTrigger: { trigger: ".mem-ben-hdr", start: "top 84%", once: true } }
      );
      gsap.fromTo(".mem-ben-card",
        { opacity: 0, y: 28, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.09, ease: "power2.out",
          scrollTrigger: { trigger: ".mem-ben-grid", start: "top 82%", once: true } }
      );

      /* ── Pricing header ── */
      gsap.fromTo(".mem-price-hdr > *",
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.65, stagger: 0.1, ease: "power2.out",
          scrollTrigger: { trigger: ".mem-price-hdr", start: "top 84%", once: true } }
      );
      gsap.fromTo(".mem-card-free",
        { opacity: 0, x: -28 },
        { opacity: 1, x: 0, duration: 0.75, ease: "power2.out",
          scrollTrigger: { trigger: ".mem-price-cards", start: "top 82%", once: true } }
      );
      gsap.fromTo(".mem-card-paid",
        { opacity: 0, x: 28 },
        { opacity: 1, x: 0, duration: 0.75, ease: "power2.out", delay: 0.08,
          scrollTrigger: { trigger: ".mem-price-cards", start: "top 82%", once: true } }
      );

      /* ── Steps header + cards ── */
      gsap.fromTo(".mem-steps-hdr > *",
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.65, stagger: 0.1, ease: "power2.out",
          scrollTrigger: { trigger: ".mem-steps-hdr", start: "top 84%", once: true } }
      );
      gsap.fromTo(".mem-step-card",
        { opacity: 0, y: 26 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out",
          scrollTrigger: { trigger: ".mem-steps-grid", start: "top 82%", once: true } }
      );

      /* ── Form section ── */
      gsap.fromTo(".mem-form-hdr > *",
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.65, stagger: 0.1, ease: "power2.out",
          scrollTrigger: { trigger: ".mem-form-hdr", start: "top 84%", once: true } }
      );
      gsap.fromTo(".mem-form-card",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power2.out",
          scrollTrigger: { trigger: ".mem-form-card", start: "top 84%", once: true } }
      );

      /* ── FAQ header + rows ── */
      gsap.fromTo(".mem-faq-hdr > *",
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.65, stagger: 0.1, ease: "power2.out",
          scrollTrigger: { trigger: ".mem-faq-hdr", start: "top 84%", once: true } }
      );
      gsap.fromTo(".mem-faq-row",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.55, stagger: 0.1, ease: "power2.out",
          scrollTrigger: { trigger: ".mem-faq-list", start: "top 82%", once: true } }
      );

    }, rootRef);

    return () => ctx.revert();
  }, []);

  const sp: React.CSSProperties = { background: L.bg, padding: "clamp(80px,10vw,130px) clamp(20px,4vw,40px)" };

  return (
    <div ref={rootRef}>

      {/* ══════════════════════════════════════════════════════
          1 · BENEFITS — "Was dich erwartet"   LIGHT
      ══════════════════════════════════════════════════════ */}
      <section style={sp}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

          {/* header */}
          <div className="mem-ben-hdr" style={{ textAlign: "center", marginBottom: "clamp(40px,6vw,64px)" }}>
            <span className="eyebrow font-montserrat" style={{ color: L.eyebrow }}>Deine Vorteile</span>
            <h2 className="font-playfair" style={{ fontSize: "clamp(2rem,5vw,3.25rem)", fontWeight: 700, color: L.headline, lineHeight: 1.1, margin: "14px 0 0", letterSpacing: "-0.02em" }}>
              Was dich erwartet
            </h2>
          </div>

          {/* 4-column grid */}
          <div className="mem-ben-grid">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="mem-ben-card"
                style={{ opacity: 0, textAlign: "center" }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = "translateY(-5px)";
                  el.style.boxShadow = "0 12px 36px rgba(0,0,0,0.09)";
                  el.style.borderColor = "rgba(192,175,211,0.45)";
                  const ico = el.querySelector(".ben-icon-bg") as HTMLElement | null;
                  if (ico) ico.style.background = "rgba(192,175,211,0.35)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = L.shadow;
                  el.style.borderColor = L.cardB;
                  const ico = el.querySelector(".ben-icon-bg") as HTMLElement | null;
                  if (ico) ico.style.background = L.iconBg;
                }}
              >
                {/* icon */}
                <div className="ben-icon-bg" style={{ width: 52, height: 52, borderRadius: "14px", background: L.iconBg, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 22px", transition: "background 0.25s ease" }}>
                  <b.icon size={20} strokeWidth={1.6} style={{ color: L.icon }} />
                </div>
                <h3 className="font-playfair" style={{ fontSize: "1rem", fontWeight: 700, color: L.headline, marginBottom: "12px", lineHeight: 1.3 }}>
                  {b.title}
                </h3>
                <p className="font-montserrat" style={{ fontSize: "0.875rem", fontWeight: 300, lineHeight: 1.82, color: L.body }}>
                  {b.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          2 · PRICING — "Dein Beitrag"   DARK
      ══════════════════════════════════════════════════════ */}
      <section style={{ background: D.bg, padding: "clamp(80px,10vw,130px) clamp(20px,4vw,40px)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>

          {/* header */}
          <div className="mem-price-hdr" style={{ textAlign: "center", marginBottom: "clamp(40px,6vw,60px)" }}>
            <span className="eyebrow font-montserrat" style={{ color: D.eyebrow }}>Mitgliedschaft</span>
            <h2 className="font-playfair" style={{ fontSize: "clamp(2rem,5vw,3.25rem)", fontWeight: 700, color: D.cream, lineHeight: 1.1, margin: "14px 0 16px", letterSpacing: "-0.02em" }}>
              Dein Beitrag
            </h2>
            <p className="font-montserrat" style={{ fontSize: "0.9375rem", fontWeight: 300, lineHeight: 1.8, color: D.sub }}>
              Transparent und fair. Keine versteckten Kosten.
            </p>
          </div>

          {/* two cards */}
          <div className="mem-price-cards">

            {/* ── Interessent (free) ── */}
            <div className="mem-card-free" style={{ background: D.cardL, border: `1px solid ${D.borderL}`, borderRadius: "20px", padding: "36px 32px 40px", display: "flex", flexDirection: "column", opacity: 0 }}>
              <p className="font-montserrat" style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: D.eyebrow, marginBottom: "20px" }}>
                Interessent
              </p>
              <p className="font-playfair" style={{ fontSize: "clamp(2rem,4vw,2.75rem)", fontWeight: 700, color: D.cream, lineHeight: 1, marginBottom: "28px" }}>
                Kostenlos
              </p>

              <ul style={{ listStyle: "none", marginBottom: "32px", display: "flex", flexDirection: "column", gap: "12px" }}>
                {freeTier.map(item => (
                  <li key={item} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <Check size={13} strokeWidth={2.5} style={{ color: D.lilac, flexShrink: 0 }} />
                    <span className="font-montserrat" style={{ fontSize: "0.875rem", fontWeight: 300, color: D.body }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: "auto" }}>
                <Link href="#anmeldung" className="mem-btn-outline font-montserrat">
                  Registrieren
                </Link>
              </div>
            </div>

            {/* ── Mitglied (paid) ── */}
            <div className="mem-card-paid" style={{ background: D.cardR, border: `1px solid ${D.borderR}`, borderRadius: "20px", padding: "36px 32px 40px", display: "flex", flexDirection: "column", position: "relative", opacity: 0 }}>

              {/* LIMITIERT badge */}
              <div style={{ position: "absolute", top: 0, right: 24, background: D.lilac, color: D.bg, fontFamily: "Montserrat, sans-serif", fontSize: "0.5875rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", padding: "6px 14px 7px", borderRadius: "0 0 10px 10px" }}>
                Limitiert
              </div>

              <p className="font-montserrat" style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: D.eyebrow, marginBottom: "20px", marginTop: "8px" }}>
                Mitglied
              </p>

              {/* price */}
              <div style={{ display: "flex", alignItems: "baseline", gap: "6px", marginBottom: "28px" }}>
                <span className="font-playfair" style={{ fontSize: "clamp(2rem,4vw,2.75rem)", fontWeight: 700, color: D.lilac, lineHeight: 1 }}>
                  10€
                </span>
                <span className="font-montserrat" style={{ fontSize: "0.9375rem", fontWeight: 300, color: D.sub }}>
                  /Monat
                </span>
              </div>

              {/* features */}
              <ul style={{ listStyle: "none", marginBottom: "32px", display: "flex", flexDirection: "column", gap: "12px" }}>
                {memberTier.map(item => (
                  <li key={item} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{ width: 22, height: 22, borderRadius: "50%", background: D.check, border: `1px solid ${D.checkB}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Check size={11} strokeWidth={2.5} style={{ color: D.lilac }} />
                    </div>
                    <span className="font-montserrat" style={{ fontSize: "0.875rem", fontWeight: 300, color: D.body }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: "auto" }}>
                <Link href="#anmeldung" className="mem-btn-primary font-montserrat">
                  Mitgliedschaft anfragen
                </Link>
              </div>
            </div>

          </div>{/* /mem-price-cards */}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          3 · STEPS — "In 4 Schritten zum Mitglied"   LIGHT
      ══════════════════════════════════════════════════════ */}
      <section style={sp}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>

          {/* header */}
          <div className="mem-steps-hdr" style={{ textAlign: "center", marginBottom: "clamp(40px,6vw,64px)" }}>
            <span className="eyebrow font-montserrat" style={{ color: L.eyebrow }}>So funktioniert's</span>
            <h2 className="font-playfair" style={{ fontSize: "clamp(2rem,5vw,3.25rem)", fontWeight: 700, color: L.headline, lineHeight: 1.1, margin: "14px 0 0", letterSpacing: "-0.02em" }}>
              In 4 Schritten zum Mitglied
            </h2>
          </div>

          {/* 2 × 2 grid */}
          <div className="mem-steps-grid">
            {steps.map((s, i) => (
              <div key={i} className="mem-step-card" style={{ opacity: 0 }}>
                {/* number */}
                <div className="mem-step-num font-montserrat">
                  {s.n}
                </div>
                <h3 className="font-playfair" style={{ fontSize: "1.0625rem", fontWeight: 700, color: L.headline, marginBottom: "10px", lineHeight: 1.25 }}>
                  {s.title}
                </h3>
                <p className="font-montserrat" style={{ fontSize: "0.875rem", fontWeight: 300, lineHeight: 1.82, color: L.body }}>
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          4 · FORM — "Jetzt Mitglied werden"   LIGHT
      ══════════════════════════════════════════════════════ */}
      <section id="anmeldung" style={{ ...sp, paddingTop: "0" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>

          {/* header */}
          <div className="mem-form-hdr" style={{ textAlign: "center", marginBottom: "40px" }}>
            <span className="eyebrow font-montserrat" style={{ color: L.eyebrow }}>Anmeldung</span>
            <h2 className="font-playfair" style={{ fontSize: "clamp(2rem,5vw,3.25rem)", fontWeight: 700, color: L.headline, lineHeight: 1.1, margin: "14px 0 16px", letterSpacing: "-0.02em" }}>
              Jetzt Mitglied werden
            </h2>
            <p className="font-montserrat" style={{ fontSize: "0.9375rem", fontWeight: 300, lineHeight: 1.85, color: L.body }}>
              Fülle das Formular aus, um deine Mitgliedschaft zu beantragen.
            </p>
          </div>

          {/* form placeholder card */}
          <div
            className="mem-form-card"
            style={{ background: L.card, border: `1px solid ${L.cardB}`, borderRadius: "18px", boxShadow: L.shadow, padding: "clamp(40px,6vw,72px) clamp(28px,5vw,56px)", textAlign: "center", minHeight: "240px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "16px", opacity: 0 }}
          >
            <p className="font-montserrat" style={{ fontSize: "0.875rem", fontWeight: 300, lineHeight: 1.85, color: L.muted, maxWidth: "440px" }}>
              Cannabis Mitgliedschaftsformular wird hier eingebettet.
            </p>
            <p className="font-montserrat" style={{ fontSize: "0.875rem", fontWeight: 300, lineHeight: 1.75, color: L.body }}>
              Bitte kontaktiere uns unter{" "}
              <a
                href="mailto:info@cloudyclub-os.de"
                style={{ color: L.icon, textDecoration: "none", borderBottom: `1px solid ${L.icon}`, paddingBottom: "1px" }}
              >
                info@cloudyclub-os.de
              </a>{" "}
              für Mitgliedschaftsanfragen.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          5 · FAQ — "Gut zu wissen"   LIGHT
      ══════════════════════════════════════════════════════ */}
      <section style={sp}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>

          {/* header */}
          <div className="mem-faq-hdr" style={{ textAlign: "center", marginBottom: "48px" }}>
            <span className="eyebrow font-montserrat" style={{ color: L.eyebrow }}>Fragen zur Mitgliedschaft</span>
            <h2 className="font-playfair" style={{ fontSize: "clamp(2rem,5vw,3.25rem)", fontWeight: 700, color: L.headline, lineHeight: 1.1, margin: "14px 0 0", letterSpacing: "-0.02em" }}>
              Gut zu wissen
            </h2>
          </div>

          {/* accordion rows */}
          <div className="mem-faq-list">
            {faqItems.map((item, i) => (
              <div
                key={i}
                className="mem-faq-row"
                style={{ borderTop: `1px solid ${L.divider}`, opacity: 0 }}
              >
                <button
                  onClick={() => toggleFaq(i)}
                  aria-expanded={openFaq === i}
                  style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "22px 0", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
                >
                  <span
                    className="font-playfair"
                    style={{ fontSize: "1.0625rem", fontWeight: 600, lineHeight: 1.4, color: openFaq === i ? L.headline : "rgba(26,24,20,0.80)", transition: "color 0.2s ease" }}
                  >
                    {item.q}
                  </span>
                  <span
                    ref={el => { faqChevRefs.current[i] = el; }}
                    style={{ flexShrink: 0, display: "flex", color: L.muted, transformOrigin: "center" }}
                  >
                    <ChevronDown size={18} strokeWidth={1.8} />
                  </span>
                </button>

                {/* answer — height animated */}
                <div ref={el => { faqBodyRefs.current[i] = el; }}>
                  <p className="font-montserrat" style={{ paddingBottom: "24px", fontSize: "0.9375rem", fontWeight: 300, lineHeight: 1.82, color: L.body }}>
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
            {/* bottom border */}
            <div style={{ borderTop: `1px solid ${L.divider}` }} />
          </div>
        </div>
      </section>

      {/* ─── Scoped styles ──────────────────────────────────── */}
      <style>{`

        /* ── Benefits grid ── */
        .mem-ben-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .mem-ben-card {
          background: ${L.card};
          border: 1px solid ${L.cardB};
          border-radius: 18px;
          box-shadow: ${L.shadow};
          padding: 32px 24px 36px;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease;
        }

        /* ── Pricing cards ── */
        .mem-price-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        /* outline button (free tier) */
        .mem-btn-outline {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 48px;
          background: transparent;
          border: 1px solid rgba(244,241,234,0.18);
          border-radius: 10px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: ${D.cream};
          text-decoration: none;
          transition: background 0.2s ease, border-color 0.2s ease;
        }
        .mem-btn-outline:hover {
          background: rgba(244,241,234,0.07);
          border-color: rgba(244,241,234,0.38);
        }

        /* filled button (paid tier) */
        .mem-btn-primary {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 48px;
          background: ${D.cream};
          border: none;
          border-radius: 10px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: ${D.bg};
          text-decoration: none;
          transition: opacity 0.2s ease, transform 0.18s ease;
        }
        .mem-btn-primary:hover {
          opacity: 0.88;
          transform: translateY(-1px);
        }

        /* ── Steps grid ── */
        .mem-steps-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px 48px;
        }
        .mem-step-card {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .mem-step-num {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: ${L.icon};
          margin-bottom: 14px;
        }

        /* ── FAQ rows ── */
        .mem-faq-list { display: flex; flex-direction: column; }
        .mem-faq-row { cursor: pointer; }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .mem-ben-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 620px) {
          .mem-ben-grid { grid-template-columns: 1fr !important; }
          .mem-price-cards { grid-template-columns: 1fr !important; }
          .mem-steps-grid  { grid-template-columns: 1fr !important; gap: 28px !important; }
        }
      `}</style>
    </div>
  );
}
