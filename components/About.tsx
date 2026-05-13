"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { Heart, Shield, Users, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    icon: Heart,
    title: "Gemeinschaft",
    text: "Wir sind ein eingetragener Verein, der Menschen verbindet, die Cannabis verantwortungsbewusst und offen leben möchten.",
  },
  {
    icon: Shield,
    title: "Sicherheit",
    text: "Kontrollierter Anbau, transparente Qualität und klare Regelungen nach deutschem Recht – deine Gesundheit steht an erster Stelle.",
  },
  {
    icon: Users,
    title: "Offenheit",
    text: "Jeder ab 18 Jahren ist willkommen. Kein Stigma, kein Stress – einfach ein Ort, an dem du du selbst sein kannst.",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(".about-visual",
        { opacity: 0, x: -32 },
        { opacity: 1, x: 0, duration: 0.85, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 82%", once: true } }
      );
      gsap.fromTo(".about-item",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section"
      style={{ background: "var(--bg)" }}
    >
      <div
        className="section-inner about-grid"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "96px", alignItems: "center" }}
      >
        {/* Left: visual card */}
        <div className="about-visual" style={{ position: "relative" }}>
          <div style={{
            height: "520px",
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: "2px",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            {/* Corner accents */}
            <div aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, width: 56, height: 56, borderTop: "1px solid rgba(192,175,211,0.35)", borderLeft: "1px solid rgba(192,175,211,0.35)" }} />
            <div aria-hidden="true" style={{ position: "absolute", bottom: 0, right: 0, width: 56, height: 56, borderBottom: "1px solid rgba(192,175,211,0.2)", borderRight: "1px solid rgba(192,175,211,0.2)" }} />

            {/* Glow */}
            <div aria-hidden="true" style={{
              position: "absolute", top: "35%", left: "50%", transform: "translate(-50%,-50%)",
              width: "280px", height: "280px", borderRadius: "50%",
              background: "radial-gradient(circle, rgba(192,175,211,0.1) 0%, transparent 70%)",
              filter: "blur(32px)",
              pointerEvents: "none",
            }} />

            {/* Cloud SVG */}
            <div className="float-anim" style={{ position: "relative", zIndex: 1 }}>
              <svg width="280" height="240" viewBox="0 0 320 280" aria-hidden="true">
                <defs>
                  <radialGradient id="abg1" cx="50%" cy="60%" r="55%">
                    <stop offset="0%" stopColor="#C0AFD3" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#9B88C0" stopOpacity="0.2" />
                  </radialGradient>
                </defs>
                <circle cx="220" cy="72" r="34" fill="none" stroke="rgba(192,175,211,0.45)" strokeWidth="1.5" />
                <circle cx="234" cy="66" r="28" fill="rgba(19,19,17,0.9)" />
                <ellipse cx="158" cy="196" rx="122" ry="56" fill="url(#abg1)" />
                <ellipse cx="114" cy="178" rx="80" ry="54" fill="rgba(192,175,211,0.18)" />
                <ellipse cx="204" cy="184" rx="70" ry="48" fill="rgba(192,175,211,0.14)" />
                <ellipse cx="158" cy="164" rx="64" ry="50" fill="rgba(192,175,211,0.09)" />
                <ellipse cx="158" cy="196" rx="122" ry="56" fill="none" stroke="rgba(192,175,211,0.28)" strokeWidth="1" />
                <path d="M50 72 L52.5 65 L55 72 L62 74.5 L55 77 L52.5 84 L50 77 L43 74.5Z" fill="#C0AFD3" opacity="0.6" />
                <path d="M278 112 L280 107 L282 112 L287 114 L282 116 L280 121 L278 116 L273 114Z" fill="#C0AFD3" opacity="0.45" />
              </svg>
            </div>

            {/* Bottom tag */}
            <div style={{
              position: "absolute", bottom: "24px", left: "24px",
              padding: "6px 14px",
              background: "var(--bg-elevated)",
              border: "1px solid var(--border)",
              borderRadius: "2px",
            }}>
              <p className="eyebrow" style={{ fontSize: "0.5625rem", letterSpacing: "0.28em" }}>Cannabis Social Club e.V.</p>
            </div>
          </div>

          {/* Floating e.V. badge */}
          <div
            className="hidden lg:flex"
            style={{
              position: "absolute",
              bottom: "-24px",
              right: "-24px",
              width: "108px",
              height: "108px",
              background: "var(--lilac)",
              borderRadius: "2px",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "3px",
            }}
          >
            <p className="font-playfair" style={{ fontSize: "2rem", color: "var(--bg)", lineHeight: 1, fontWeight: 700 }}>e.V.</p>
            <p className="font-montserrat" style={{ fontSize: "0.4375rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(19,19,17,0.65)" }}>
              Eingetragener
            </p>
            <p className="font-montserrat" style={{ fontSize: "0.4375rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(19,19,17,0.65)" }}>
              Verein
            </p>
          </div>
        </div>

        {/* Right: content */}
        <div>
          <div className="section-header" style={{ marginBottom: "40px" }}>
            <span className="eyebrow">Wer wir sind</span>
            <h2 className="font-playfair section-title">
              Mehr als ein Club —{" "}
              <span style={{ fontStyle: "italic" }}>eine Gemeinschaft.</span>
            </h2>
            <p className="section-subtitle">
              Der Cloudy Club ist mehr als ein Cannabis Social Club – wir sind eine Gemeinschaft,
              die für verantwortungsvollen, transparenten und würdevollen Umgang mit Cannabis steht.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {values.map((v, i) => (
              <div
                key={i}
                className="about-item"
                style={{
                  display: "flex",
                  gap: "20px",
                  alignItems: "flex-start",
                  padding: "24px 0",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <v.icon
                  size={20}
                  style={{ color: "var(--lilac)", flexShrink: 0, marginTop: "3px" }}
                />
                <div>
                  <h3 className="font-playfair" style={{ fontSize: "1.125rem", color: "var(--cream)", marginBottom: "6px", fontWeight: 600 }}>
                    {v.title}
                  </h3>
                  <p className="font-montserrat" style={{ fontSize: "0.875rem", fontWeight: 300, lineHeight: 1.8, color: "var(--text-secondary)" }}>
                    {v.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "36px" }}>
            <Link href="/membership" className="btn-primary">
              Mitglied werden <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 56px !important; }
        }
      `}</style>
    </section>
  );
}
