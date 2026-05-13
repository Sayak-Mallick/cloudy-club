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
    const ctx = gsap.context(() => {
      gsap.fromTo(".about-visual",
        { opacity: 0, x: -48 },
        { opacity: 1, x: 0, duration: 1.2, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true } }
      );
      gsap.fromTo(".about-item",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.18, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 78%", once: true } }
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
      <div className="section-inner" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "100px", alignItems: "center" }} className2="about-grid">
        {/* Left: visual */}
        <div className="about-visual" style={{ position: "relative" }}>
          {/* Decorative card */}
          <div
            style={{
              height: "520px",
              background: "linear-gradient(145deg, rgba(192,175,211,0.08) 0%, rgba(192,175,211,0.03) 100%)",
              border: "1px solid rgba(192,175,211,0.12)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Corner accents */}
            <div style={{ position: "absolute", top: 0, left: 0, width: 80, height: 80, borderTop: "1px solid rgba(192,175,211,0.4)", borderLeft: "1px solid rgba(192,175,211,0.4)" }} />
            <div style={{ position: "absolute", bottom: 0, right: 0, width: 80, height: 80, borderBottom: "1px solid rgba(192,175,211,0.2)", borderRight: "1px solid rgba(192,175,211,0.2)" }} />

            {/* Glow */}
            <div style={{
              position: "absolute", top: "30%", left: "50%", transform: "translate(-50%,-50%)",
              width: "320px", height: "320px", borderRadius: "50%",
              background: "radial-gradient(circle, rgba(192,175,211,0.12) 0%, transparent 70%)",
              filter: "blur(40px)",
            }} />

            {/* Cloud SVG */}
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }} className="float-anim">
              <svg width="320" height="280" viewBox="0 0 320 280">
                <defs>
                  <radialGradient id="abg1" cx="50%" cy="60%" r="55%">
                    <stop offset="0%" stopColor="#C0AFD3" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#9B88C0" stopOpacity="0.2" />
                  </radialGradient>
                </defs>
                {/* moon */}
                <circle cx="220" cy="72" r="34" fill="none" stroke="rgba(192,175,211,0.5)" strokeWidth="1.5" />
                <circle cx="234" cy="66" r="28" fill="rgba(19,19,17,0.9)" />
                {/* cloud */}
                <ellipse cx="158" cy="196" rx="122" ry="56" fill="url(#abg1)" />
                <ellipse cx="114" cy="178" rx="80" ry="54" fill="rgba(192,175,211,0.18)" />
                <ellipse cx="204" cy="184" rx="70" ry="48" fill="rgba(192,175,211,0.15)" />
                <ellipse cx="158" cy="164" rx="64" ry="50" fill="rgba(192,175,211,0.1)" />
                {/* outline */}
                <ellipse cx="158" cy="196" rx="122" ry="56" fill="none" stroke="rgba(192,175,211,0.3)" strokeWidth="1" />
                {/* stars */}
                <path d="M50 72 L52.5 65 L55 72 L62 74.5 L55 77 L52.5 84 L50 77 L43 74.5Z" fill="#C0AFD3" opacity="0.65" />
                <path d="M278 112 L280 107 L282 112 L287 114 L282 116 L280 121 L278 116 L273 114Z" fill="#C0AFD3" opacity="0.5" />
              </svg>
            </div>

            {/* Eyebrow tag */}
            <div style={{
              position: "absolute", bottom: "32px", left: "32px",
              padding: "8px 16px",
              background: "rgba(192,175,211,0.08)",
              border: "1px solid rgba(192,175,211,0.2)",
            }}>
              <p className="eyebrow" style={{ fontSize: "0.5625rem" }}>Cannabis Social Club e.V.</p>
            </div>
          </div>

          {/* Floating badge */}
          <div
            style={{
              position: "absolute",
              bottom: "-28px",
              right: "-28px",
              width: "120px",
              height: "120px",
              background: "var(--lilac)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "4px",
            }}
            className="hidden lg:flex"
          >
            <p className="font-playfair" style={{ fontSize: "2.25rem", color: "var(--bg)", lineHeight: 1, fontWeight: 700 }}>e.V.</p>
            <p className="font-montserrat" style={{ fontSize: "0.5rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(19,19,17,0.65)", marginTop: "2px" }}>
              Eingetragener
            </p>
            <p className="font-montserrat" style={{ fontSize: "0.5rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(19,19,17,0.65)" }}>
              Verein
            </p>
          </div>
        </div>

        {/* Right: content */}
        <div>
          <div className="section-header" style={{ marginBottom: "48px" }}>
            <span className="eyebrow">Über uns</span>
            <h1 className="font-playfair section-title" style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)" }}>
              Wer wir sind
            </h1>
            <p className="section-subtitle">
              Der Cloudy Club ist mehr als ein Cannabis Social Club – wir sind eine Gemeinschaft,
              die für verantwortungsvollen, transparenten und würdevollen Umgang mit Cannabis steht.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            {values.map((v, i) => (
              <div
                key={i}
                className="about-item"
                style={{
                  display: "flex",
                  gap: "20px",
                  alignItems: "flex-start",
                  padding: "24px",
                  border: "1px solid rgba(192,175,211,0.08)",
                  background: "transparent",
                  transition: "background 0.3s ease, border-color 0.3s ease",
                  cursor: "default",
                  marginBottom: "8px",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "rgba(192,175,211,0.05)";
                  e.currentTarget.style.borderColor = "rgba(192,175,211,0.2)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "rgba(192,175,211,0.08)";
                }}
              >
                <div style={{
                  flexShrink: 0, width: "48px", height: "48px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: "rgba(192,175,211,0.08)",
                  border: "1px solid rgba(192,175,211,0.15)",
                  transition: "background 0.3s ease",
                }}>
                  <v.icon size={18} style={{ color: "var(--lilac)" }} />
                </div>
                <div>
                  <h3 className="font-playfair" style={{ fontSize: "1.125rem", color: "var(--cream)", marginBottom: "8px", fontWeight: 600 }}>{v.title}</h3>
                  <p className="font-montserrat" style={{ fontSize: "0.875rem", fontWeight: 300, lineHeight: 1.8, color: "var(--text-secondary)" }}>{v.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "40px" }}>
            <Link href="/membership" className="btn-primary" style={{ gap: "10px" }}>
              Mitglied werden <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 60px !important; }
        }
      `}</style>
    </section>
  );
}
