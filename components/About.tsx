"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeader from "./SectionHeader";
import { Heart, Shield, Users } from "lucide-react";

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
        { opacity: 0, x: -36 },
        { opacity: 1, x: 0, duration: 1.1, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true } }
      );
      gsap.fromTo(".about-item",
        { opacity: 0, y: 36 },
        { opacity: 1, y: 0, duration: 0.85, stagger: 0.16, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 78%", once: true } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{ padding: "112px 40px", background: "var(--cream)" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}
           className="about-grid">
        {/* Left: visual */}
        <div className="about-visual" style={{ position: "relative" }}>
          <div
            style={{
              height: "500px",
              background: "linear-gradient(145deg, var(--lilac-light) 0%, var(--lilac) 100%)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* corner accents */}
            <div style={{ position: "absolute", top: 0, left: 0, width: 80, height: 80, borderTop: "2px solid rgba(255,255,255,0.6)", borderLeft: "2px solid rgba(255,255,255,0.6)" }} />
            <div style={{ position: "absolute", bottom: 0, right: 0, width: 80, height: 80, borderBottom: "2px solid rgba(255,255,255,0.3)", borderRight: "2px solid rgba(255,255,255,0.3)" }} />
            {/* Cloud illustration */}
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }} className="float-anim">
              <svg width="300" height="260" viewBox="0 0 300 260">
                <defs>
                  <radialGradient id="abg" cx="50%" cy="60%" r="55%">
                    <stop offset="0%" stopColor="#F4F1EA" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#C0AFD3" stopOpacity="0.5" />
                  </radialGradient>
                </defs>
                {/* moon */}
                <circle cx="200" cy="75" r="32" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" />
                <circle cx="213" cy="70" r="27" fill="rgba(244,241,234,0.85)" />
                {/* cloud */}
                <ellipse cx="148" cy="188" rx="118" ry="52" fill="url(#abg)" />
                <ellipse cx="108" cy="172" rx="78" ry="52" fill="rgba(244,241,234,0.78)" />
                <ellipse cx="192" cy="178" rx="68" ry="46" fill="rgba(244,241,234,0.72)" />
                <ellipse cx="148" cy="158" rx="62" ry="48" fill="rgba(244,241,234,0.65)" />
                {/* stars */}
                <path d="M50 70 L52 64 L54 70 L60 72 L54 74 L52 80 L50 74 L44 72Z" fill="rgba(244,241,234,0.8)" />
                <path d="M255 110 L257 105 L259 110 L264 112 L259 114 L257 119 L255 114 L250 112Z" fill="rgba(192,175,211,0.7)" />
                <path d="M75 155 L76.5 151 L78 155 L82 156.5 L78 158 L76.5 162 L75 158 L71 156.5Z" fill="rgba(255,255,255,0.65)" />
              </svg>
            </div>
          </div>
          {/* badge */}
          <div
            style={{
              position: "absolute",
              bottom: "-24px",
              right: "-24px",
              width: "120px",
              background: "var(--charcoal)",
              padding: "20px",
            }}
            className="hidden lg:block"
          >
            <p className="font-playfair" style={{ fontSize: "2rem", color: "var(--lilac)", lineHeight: 1 }}>e.V.</p>
            <p className="font-montserrat" style={{ fontSize: "0.625rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(244,241,234,0.5)", marginTop: "6px" }}>
              Eingetragener Verein
            </p>
          </div>
        </div>

        {/* Right: content */}
        <div>
          <SectionHeader
            eyebrow="Über uns"
            title="Wer wir sind"
            subtitle="Der Cloudy Club ist mehr als ein Cannabis Social Club – wir sind eine Gemeinschaft, die für verantwortungsvollen, transparenten und würdevollen Umgang mit Cannabis steht."
            center={false}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            {values.map((v, i) => (
              <div
                key={i}
                className="about-item"
                style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    width: "48px",
                    height: "48px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "var(--lilac-light)",
                    border: "1px solid rgba(192,175,211,0.5)",
                    transition: "background 0.3s ease",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--lilac)"; const icon = e.currentTarget.querySelector("svg"); if (icon) (icon as SVGElement).style.color = "var(--cream)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "var(--lilac-light)"; const icon = e.currentTarget.querySelector("svg"); if (icon) (icon as SVGElement).style.color = "var(--lilac)"; }}
                >
                  <v.icon size={18} style={{ color: "var(--lilac)", transition: "color 0.3s ease" }} />
                </div>
                <div>
                  <h3 className="font-playfair" style={{ fontSize: "1.125rem", color: "var(--charcoal)", marginBottom: "8px", fontWeight: 500 }}>{v.title}</h3>
                  <p className="font-montserrat" style={{ fontSize: "0.875rem", fontWeight: 300, lineHeight: 1.75, color: "rgba(49,49,47,0.62)" }}>{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
