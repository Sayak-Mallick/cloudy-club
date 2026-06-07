"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: "Ist das wirklich legal?",
    a: "Ja. Wir sind ein eingetragener Verein nach §§ 26 ff. BGB und operieren vollständig im Rahmen des Konsumcannabisgesetzes (KCanG), das seit April 2024 in Deutschland gilt.",
  },
  {
    q: "Wer darf beitreten?",
    a: "Jede volljährige Person mit Wohnsitz in Deutschland kann Mitglied werden. Du musst mindestens 18 Jahre alt sein — für Mitglieder unter 21 gelten gesonderte THC-Limits gemäß KCanG.",
  },
  {
    q: "Was kostet die Mitgliedschaft?",
    a: "Es gibt eine einmalige Aufnahmegebühr sowie einen monatlichen Beitrag. Die genauen Konditionen erfährst du auf unserer Mitgliedschaftsseite oder auf Anfrage per E-Mail.",
  },
];

export default function FAQ() {
  const sectionRef  = useRef<HTMLElement>(null);
  const eyebrowRef  = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const headLineRef = useRef<HTMLSpanElement>(null);
  const [open, setOpen]   = useState<number | null>(null);
  const bodyRefs          = useRef<(HTMLDivElement | null)[]>([]);
  const chevronRefs       = useRef<(HTMLSpanElement | null)[]>([]);

  /* ── Accordion toggle with GSAP height animation ── */
  const toggle = (i: number) => {
    const isOpen = open === i;
    const body   = bodyRefs.current[i];
    const chev   = chevronRefs.current[i];
    if (!body) return;

    if (isOpen) {
      gsap.to(body, { height: 0, opacity: 0, duration: 0.32, ease: "power2.inOut" });
      gsap.to(chev, { rotation: 0, duration: 0.28, ease: "power2.inOut" });
      setOpen(null);
    } else {
      /* Close any previously open item */
      if (open !== null) {
        const prevBody = bodyRefs.current[open];
        const prevChev = chevronRefs.current[open];
        gsap.to(prevBody, { height: 0, opacity: 0, duration: 0.28, ease: "power2.inOut" });
        gsap.to(prevChev, { rotation: 0, duration: 0.24, ease: "power2.inOut" });
      }
      /* Open new item: measure natural height first */
      gsap.set(body, { height: "auto", opacity: 1 });
      const naturalH = body.offsetHeight;
      gsap.fromTo(body,
        { height: 0, opacity: 0 },
        { height: naturalH, opacity: 1, duration: 0.38, ease: "power2.out" }
      );
      gsap.to(chev, { rotation: 180, duration: 0.3, ease: "power2.out" });
      setOpen(i);
    }
  };

  /* ── Scroll entrance animations ── */
  useEffect(() => {
    /* Set all bodies to height:0 initially */
    bodyRefs.current.forEach((el) => {
      if (el) gsap.set(el, { height: 0, opacity: 0, overflow: "hidden" });
    });

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {

      /* Eyebrow */
      gsap.fromTo(eyebrowRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out",
          scrollTrigger: { trigger: headlineRef.current, start: "top 85%", once: true } }
      );

      /* Headline line-mask */
      gsap.fromTo(headLineRef.current,
        { y: "110%", skewX: -3 },
        { y: "0%", skewX: 0, duration: 1.0, ease: "power4.out",
          scrollTrigger: { trigger: headlineRef.current, start: "top 82%", once: true } }
      );

      /* FAQ cards stagger */
      gsap.fromTo(".faq-card",
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.65, stagger: 0.12, ease: "power2.out",
          scrollTrigger: { trigger: ".faq-list", start: "top 82%", once: true } }
      );

      /* "All questions" link */
      gsap.fromTo(".faq-all-link",
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.55, ease: "power2.out",
          scrollTrigger: { trigger: ".faq-all-link", start: "top 90%", once: true } }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="faq"
      ref={sectionRef}
      style={{
        background: "var(--bg)",
        padding: "clamp(96px, 12vw, 160px) 24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* ── Centered header ── */}
      <div style={{ textAlign: "center", maxWidth: "640px", marginBottom: "56px" }}>
        <span
          ref={eyebrowRef}
          className="eyebrow"
          style={{ opacity: 0 }}
        >
          FAQ
        </span>

        <h2
          ref={headlineRef}
          className="font-playfair"
          style={{
            fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)",
            fontWeight: 700,
            color: "var(--cream)",
            lineHeight: 1.1,
            marginTop: "16px",
            overflow: "hidden",
            paddingBottom: "0.06em",
          }}
        >
          <span ref={headLineRef} style={{ display: "block" }}>
            Häufige Fragen
          </span>
        </h2>
      </div>

      {/* ── FAQ cards ── */}
      <div
        className="faq-list"
        style={{
          width: "100%",
          maxWidth: "780px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="faq-card"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "14px",
              overflow: "hidden",
              boxShadow: "0 2px 12px rgba(0,0,0,0.25)",
              opacity: 0,
            }}
          >
            {/* Question row */}
            <button
              onClick={() => toggle(i)}
              aria-expanded={open === i}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "20px",
                padding: "22px 28px",
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
                  fontWeight: 600,
                  color: open === i ? "var(--cream)" : "var(--text-secondary)",
                  lineHeight: 1.4,
                  transition: "color 0.2s ease",
                }}
              >
                {faq.q}
              </span>

              <span
                ref={(el) => { chevronRefs.current[i] = el; }}
                style={{
                  flexShrink: 0,
                  display: "flex",
                  color: "var(--text-muted)",
                  transformOrigin: "center",
                }}
              >
                <ChevronDown size={18} strokeWidth={1.8} />
              </span>
            </button>

            {/* Answer body — height animated by GSAP */}
            <div ref={(el) => { bodyRefs.current[i] = el; }}>
              <p
                className="font-montserrat"
                style={{
                  padding: "0 28px 24px",
                  fontSize: "0.9375rem",
                  fontWeight: 300,
                  lineHeight: 1.82,
                  color: "var(--text-secondary)",
                }}
              >
                {faq.a}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ── "All questions" link ── */}
      <div className="faq-all-link" style={{ marginTop: "36px", opacity: 0 }}>
        <Link
          href="/faq"
          className="font-montserrat"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "0.9375rem",
            fontWeight: 500,
            color: "var(--cream)",
            textDecoration: "none",
            borderBottom: "1.5px solid rgba(244,241,234,0.35)",
            paddingBottom: "3px",
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = "0.5")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
        >
          Alle Fragen ansehen <ArrowRight size={15} strokeWidth={2} />
        </Link>
      </div>
    </section>
  );
}
