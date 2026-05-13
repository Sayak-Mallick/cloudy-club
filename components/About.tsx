"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { Heart, Shield, Users, ArrowRight } from "lucide-react";
import Ticker from "./Ticker";

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
  const sectionRef  = useRef<HTMLElement>(null);
  const visualRef   = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const line1Ref    = useRef<HTMLSpanElement>(null);
  const line2Ref    = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Clip-path wipe reveal on the visual card
      gsap.fromTo(visualRef.current,
        { clipPath: "inset(0 100% 0 0 round 2px)" },
        {
          clipPath: "inset(0 0% 0 0 round 2px)",
          duration: 1.3,
          ease: "power3.inOut",
          scrollTrigger: { trigger: visualRef.current, start: "top 78%", once: true },
        }
      );

      // Parallax on visual — drifts up slightly as section scrolls out
      gsap.to(visualRef.current, {
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Line-mask headline reveal
      gsap.fromTo([line1Ref.current, line2Ref.current],
        { y: "105%", skewX: -3 },
        {
          y: "0%", skewX: 0,
          duration: 0.95, stagger: 0.13, ease: "power4.out",
          scrollTrigger: { trigger: headlineRef.current, start: "top 82%", once: true },
        }
      );

      // Value items stagger in
      gsap.fromTo(".about-item",
        { opacity: 0, y: 28 },
        {
          opacity: 1, y: 0,
          duration: 0.7, stagger: 0.12, ease: "power2.out",
          scrollTrigger: { trigger: ".about-item", start: "top 82%", once: true },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
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
          {/* Left: real photo with clip-path reveal + parallax */}
          <div ref={visualRef} style={{ position: "relative" }}>
            <div style={{
              height: "560px",
              border: "1px solid var(--border)",
              borderRadius: "2px",
              position: "relative",
              overflow: "hidden",
            }}>
              {/* Parallax photo */}
              <div
                style={{
                  position: "absolute",
                  top: "-12%", left: 0, right: 0,
                  height: "124%",
                  backgroundImage: "url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1400&q=85')",
                  backgroundSize: "cover",
                  backgroundPosition: "center top",
                  willChange: "transform",
                }}
              />

              {/* Subtle dark scrim so badge reads clearly */}
              <div aria-hidden="true" style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(19,19,17,0.75) 0%, rgba(19,19,17,0.1) 60%, transparent 100%)",
              }} />

              {/* Corner accents */}
              <div aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, width: 56, height: 56, borderTop: "1px solid rgba(192,175,211,0.5)", borderLeft: "1px solid rgba(192,175,211,0.5)", zIndex: 2 }} />
              <div aria-hidden="true" style={{ position: "absolute", bottom: 0, right: 0, width: 56, height: 56, borderBottom: "1px solid rgba(192,175,211,0.3)", borderRight: "1px solid rgba(192,175,211,0.3)", zIndex: 2 }} />

              {/* Badge */}
              <div style={{
                position: "absolute", bottom: "24px", left: "24px", zIndex: 3,
                padding: "6px 14px",
                background: "rgba(19,19,17,0.7)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(192,175,211,0.25)",
                borderRadius: "2px",
              }}>
                <p className="eyebrow" style={{ fontSize: "0.5625rem", letterSpacing: "0.28em" }}>Cannabis Social Club e.V.</p>
              </div>
            </div>

            {/* e.V. badge */}
            <div
              className="hidden lg:flex"
              style={{
                position: "absolute",
                bottom: "-24px", right: "-24px",
                width: "108px", height: "108px",
                background: "var(--lilac)",
                borderRadius: "2px",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "3px",
              }}
            >
              <p className="font-playfair" style={{ fontSize: "2rem", color: "var(--bg)", lineHeight: 1, fontWeight: 700 }}>e.V.</p>
              <p className="font-montserrat" style={{ fontSize: "0.4375rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(19,19,17,0.65)" }}>Eingetragener</p>
              <p className="font-montserrat" style={{ fontSize: "0.4375rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(19,19,17,0.65)" }}>Verein</p>
            </div>
          </div>

          {/* Right: content */}
          <div>
            <div className="section-header" style={{ marginBottom: "40px" }}>
              <span className="eyebrow">Wer wir sind</span>
              <h2
                ref={headlineRef}
                className="font-playfair section-title"
              >
                <span className="line-mask" style={{ display: "block" }}>
                  <span ref={line1Ref} className="line-inner">Mehr als ein Club —</span>
                </span>
                <span className="line-mask" style={{ display: "block" }}>
                  <span ref={line2Ref} className="line-inner" style={{ fontStyle: "italic" }}>eine Gemeinschaft.</span>
                </span>
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
                  <v.icon size={20} style={{ color: "var(--lilac)", flexShrink: 0, marginTop: "3px" }} />
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

      {/* Ticker between sections */}
      <Ticker />
    </>
  );
}
