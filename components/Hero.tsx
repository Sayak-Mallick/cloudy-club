"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";

const STARS = [
  { top: "12%", left: "10%",  delay: 0,   size: 7  },
  { top: "20%", left: "82%",  delay: 1.4, size: 5  },
  { top: "60%", left: "7%",   delay: 0.7, size: 6  },
  { top: "72%", left: "88%",  delay: 2.1, size: 9  },
  { top: "38%", left: "76%",  delay: 0.4, size: 5  },
  { top: "8%",  left: "55%",  delay: 2.4, size: 7  },
  { top: "85%", left: "22%",  delay: 1.6, size: 5  },
  { top: "50%", left: "93%",  delay: 0.9, size: 4  },
];

const STATS = [
  { value: "50g",    label: "monatl. Abgabe" },
  { value: "§CanG",  label: "100% legal & konform" },
  { value: "18+",    label: "Mindestalter" },
];

export default function Hero() {
  const sectionRef  = useRef<HTMLElement>(null);
  const cloudRef    = useRef<HTMLDivElement>(null);
  const starsRef    = useRef<HTMLDivElement>(null);
  const eyebrowRef  = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef      = useRef<HTMLParagraphElement>(null);
  const ctaRef      = useRef<HTMLDivElement>(null);
  const statsRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.fromTo(starsRef.current, { opacity: 0 }, { opacity: 1, duration: 2 });

      tl.fromTo(cloudRef.current,
        { opacity: 0, x: 24 },
        { opacity: 1, x: 0, duration: 0.9 },
        "-=1.6"
      );

      tl.fromTo(eyebrowRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.8"
      );

      const words = headlineRef.current?.querySelectorAll("span.word");
      if (words?.length) {
        tl.fromTo(words,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, stagger: 0.08, ease: "power3.out" },
          "-=0.3"
        );
      }

      tl.fromTo(subRef.current,
        { y: 12, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.3"
      );

      tl.fromTo(ctaRef.current,
        { y: 8, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        "-=0.3"
      );

      tl.fromTo(".stats-stat",
        { y: 12, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.5 },
        "-=0.3"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "var(--bg)",
        paddingTop: "64px",
        overflow: "hidden",
      }}
    >
      {/* ── Ambient glows ── */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div className="glow-blob" style={{
          top: "10%", left: "-8%",
          width: "500px", height: "500px",
          background: "radial-gradient(circle, rgba(192,175,211,0.06) 0%, transparent 70%)",
        }} />
        <div className="glow-blob" style={{
          bottom: "5%", right: "-8%",
          width: "420px", height: "420px",
          background: "radial-gradient(circle, rgba(139,152,128,0.05) 0%, transparent 70%)",
        }} />
      </div>

      {/* ── Top border ── */}
      <div aria-hidden="true" style={{
        position: "absolute",
        top: "64px",
        left: 0, right: 0,
        height: "1px",
        background: "linear-gradient(to right, transparent 0%, var(--border) 20%, var(--border) 80%, transparent 100%)",
      }} />

      {/* ── Main split layout ── */}
      <div style={{
        flex: 1,
        maxWidth: "1200px",
        margin: "0 auto",
        width: "100%",
        padding: "0 40px",
        display: "grid",
        gridTemplateColumns: "55% 45%",
        alignItems: "center",
        minHeight: "calc(100vh - 64px - 120px)",
      }} className="hero-grid">

        {/* Left: text content */}
        <div style={{ paddingRight: "64px", paddingTop: "60px", paddingBottom: "60px" }}>

          {/* Eyebrow tag */}
          <div
            ref={eyebrowRef}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              border: "1px solid var(--border)",
              background: "var(--bg-elevated)",
              padding: "6px 14px",
              borderRadius: "2px",
              marginBottom: "28px",
            }}
          >
            <span aria-hidden="true" style={{
              width: "5px", height: "5px",
              borderRadius: "50%",
              background: "var(--lilac)",
              display: "inline-block",
              flexShrink: 0,
            }} />
            <span className="eyebrow" style={{ color: "var(--text-secondary)", letterSpacing: "0.28em" }}>
              Cannabis Social Club · Osnabrück
            </span>
          </div>

          {/* Headline */}
          <h1
            ref={headlineRef}
            className="font-playfair"
            style={{
              fontSize: "clamp(2.75rem, 6.5vw, 5.25rem)",
              lineHeight: 1.0,
              fontWeight: 700,
              color: "var(--cream)",
              marginBottom: "24px",
              letterSpacing: "-0.02em",
            }}
          >
            <span className="word" style={{ display: "inline-block", marginRight: "0.22em" }}>Willkommen</span>
            <span className="word" style={{ display: "inline-block", marginRight: "0.22em" }}>im</span>
            <br />
            <span className="word" style={{ display: "inline-block", color: "var(--lilac)", fontStyle: "italic", marginRight: "0.18em" }}>Cloudy</span>
            <span className="word" style={{ display: "inline-block" }}>Club.</span>
          </h1>

          {/* Subtext */}
          <p
            ref={subRef}
            className="font-montserrat"
            style={{
              fontSize: "1rem",
              fontWeight: 300,
              lineHeight: 1.85,
              color: "var(--text-secondary)",
              maxWidth: "460px",
              marginBottom: "40px",
            }}
          >
            Dein Zuhause für gemeinsamen Anbau, verantwortungsvollen Konsum und echte
            Community in Osnabrück. Sicher, transparent, zusammen.
          </p>

          {/* CTAs */}
          <div
            ref={ctaRef}
            style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center" }}
          >
            <Link href="/membership" className="btn-primary">
              Mitglied werden <ArrowRight size={13} />
            </Link>
            <Link
              href="/about"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                color: "var(--text-secondary)",
                textDecoration: "none",
                fontFamily: "Montserrat, sans-serif",
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "0.04em",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--cream)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              Mehr erfahren <ArrowRight size={13} />
            </Link>
          </div>
        </div>

        {/* Right: visual */}
        <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", height: "100%", minHeight: "380px" }} className="hero-visual-col">
          {/* Stars */}
          <div ref={starsRef} aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
            {STARS.map((s, i) => (
              <svg
                key={i}
                className="star-twinkle"
                style={{
                  position: "absolute",
                  top: s.top,
                  left: s.left,
                  width: s.size,
                  height: s.size,
                  animationDelay: `${s.delay}s`,
                }}
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M10 0 L12.5 7.5 L20 10 L12.5 12.5 L10 20 L7.5 12.5 L0 10 L7.5 7.5 Z" fill="#C0AFD3" />
              </svg>
            ))}
          </div>

          {/* Glow behind cloud */}
          <div aria-hidden="true" style={{
            position: "absolute",
            width: "360px", height: "360px",
            background: "radial-gradient(circle, rgba(192,175,211,0.07) 0%, transparent 70%)",
            filter: "blur(40px)",
            pointerEvents: "none",
          }} />

          {/* Cloud illustration */}
          <div ref={cloudRef} className="float-anim" style={{ position: "relative", zIndex: 1 }}>
            <svg
              width="320"
              height="260"
              viewBox="0 0 320 260"
              aria-hidden="true"
              style={{ display: "block", filter: "drop-shadow(0 20px 60px rgba(192,175,211,0.18))" }}
            >
              <defs>
                <radialGradient id="hcg1" cx="50%" cy="55%" r="52%">
                  <stop offset="0%" stopColor="#C0AFD3" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#9B88C0" stopOpacity="0.28" />
                </radialGradient>
              </defs>
              {/* Crescent moon */}
              <path
                d="M178 38 C204 22, 244 42, 237 78 C228 52, 204 46, 183 62 C170 42, 175 38, 178 38Z"
                fill="none" stroke="rgba(192,175,211,0.65)" strokeWidth="1.5" strokeLinecap="round"
              />
              {/* Cloud layers */}
              <ellipse cx="158" cy="186" rx="130" ry="60" fill="url(#hcg1)" />
              <ellipse cx="112" cy="168" rx="86"  ry="54" fill="#C0AFD3" opacity="0.3" />
              <ellipse cx="210" cy="174" rx="74"  ry="48" fill="#B8AAD0" opacity="0.25" />
              <ellipse cx="158" cy="150" rx="66"  ry="50" fill="#D4C8E8" opacity="0.18" />
              <ellipse cx="130" cy="138" rx="46"  ry="34" fill="#E2D8F0" opacity="0.14" />
              {/* Outline */}
              <ellipse cx="158" cy="186" rx="130" ry="60" fill="none" stroke="rgba(192,175,211,0.35)" strokeWidth="1" />
              {/* Sparkle stars */}
              <path d="M42 72 L44.5 65 L47 72 L54 74.5 L47 77 L44.5 84 L42 77 L35 74.5Z" fill="#C0AFD3" opacity="0.65" />
              <path d="M272 92 L274.5 86 L277 92 L283 94.5 L277 97 L274.5 103 L272 97 L266 94.5Z" fill="#C0AFD3" opacity="0.5" />
              <path d="M76 218 L77.5 214 L79 218 L83 219.5 L79 221 L77.5 225 L76 221 L72 219.5Z" fill="#8B9880" opacity="0.55" />
            </svg>
          </div>
        </div>
      </div>

      {/* ── Stats bar ── */}
      <div style={{ borderTop: "1px solid var(--border)" }}>
        <div
          ref={statsRef}
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "28px 40px",
            display: "flex",
            alignItems: "center",
          }}
        >
          {STATS.map((s, i) => (
            <div
              key={i}
              className="stats-stat"
              style={{
                flex: 1,
                textAlign: "center",
                borderRight: i < STATS.length - 1 ? "1px solid var(--border)" : "none",
                padding: "4px 0",
              }}
            >
              <p className="font-playfair" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "var(--cream)", fontWeight: 700, lineHeight: 1 }}>
                {s.value}
              </p>
              <p className="font-montserrat" style={{ fontSize: "10px", letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--text-muted)", marginTop: "6px" }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Responsive ── */}
      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            min-height: auto !important;
          }
          .hero-grid > div:first-child {
            padding-right: 0 !important;
            padding-top: 48px !important;
            padding-bottom: 0 !important;
          }
          .hero-visual-col {
            display: none !important;
          }
        }
        @media (max-width: 480px) {
          .hero-grid > div:first-child {
            padding-top: 40px !important;
            padding-bottom: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
