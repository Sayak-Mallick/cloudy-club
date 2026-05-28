"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const STARS = [
  { top: "14%", left: "9%", delay: 0, size: 7 },
  { top: "22%", left: "83%", delay: 1.4, size: 5 },
  { top: "58%", left: "6%", delay: 0.7, size: 6 },
  { top: "70%", left: "87%", delay: 2.1, size: 9 },
  { top: "40%", left: "78%", delay: 0.4, size: 5 },
  { top: "9%", left: "57%", delay: 2.4, size: 7 },
  { top: "82%", left: "20%", delay: 1.6, size: 5 },
  { top: "52%", left: "92%", delay: 0.9, size: 4 },
];

const STATS = [
  { value: 50, suffix: "g", label: "monatl. Abgabe", display: "50g" },
  { value: null, suffix: "", label: "100% legal & konform", display: "§CanG" },
  { value: 18, suffix: "+", label: "Mindestalter", display: "18+" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);
  const visualColRef = useRef<HTMLDivElement>(null);
  const cloudRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (!prefersReduced) {
        // ── Entrance timeline ──
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        // Stars fade in quietly
        tl.fromTo(starsRef.current, { opacity: 0 }, { opacity: 1, duration: 2 });

        // Cloud slides in from right
        tl.fromTo(cloudRef.current,
          { opacity: 0, x: 40, scale: 0.9 },
          { opacity: 1, x: 0,  scale: 1, duration: 1.2 },
          "-=1.8"
        );

        // Eyebrow fades up
        tl.fromTo(eyebrowRef.current,
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.9"
        );

        // Line-mask reveals — text slides up from behind clip
        tl.fromTo([line1Ref.current, line2Ref.current],
          { y: "108%", skewX: -4 },
          { y: "0%", skewX: 0, duration: 1, stagger: 0.14, ease: "power4.out" },
          "-=0.5"
        );

        // Sub + CTA fade up
        tl.fromTo(subRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.4"
        );
        tl.fromTo(ctaRef.current,
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.45"
        );

        // Stats stagger in
        tl.fromTo(".stats-stat",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, stagger: 0.1, duration: 0.55 },
          "-=0.35"
        );

        // ── Scroll parallax ──
        // Text column moves up faster → feels closer
        gsap.to(textColRef.current, {
          y: -90,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        // Visual moves up slower → appears further away (depth)
        gsap.to(visualColRef.current, {
          y: -35,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        // Stars move even slower
        gsap.to(starsRef.current, {
          y: -18,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        // Background image parallax — slowest layer, creates depth
        gsap.to(bgRef.current, {
          yPercent: 18,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const headerImage = "/assets/main-hero.png";

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "var(--bg)",
        overflow: "hidden",
      }}
    >
      {/* ── Parallax background image ── */}
      <div
        ref={bgRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0,
          height: "115%",
          backgroundImage: `url('${headerImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          willChange: "transform",
          zIndex: 0,
        }}
      />
      {/* Dark overlay — heavier on left (text side), lighter right (image side) */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute", inset: 0, zIndex: 1,
          background: "linear-gradient(to right, rgba(19,19,17,0.96) 0%, rgba(19,19,17,0.82) 40%, rgba(19,19,17,0.55) 70%, rgba(19,19,17,0.25) 100%)",
          pointerEvents: "none",
        }}
      />
      {/* Bottom fade to bg color */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          height: "180px", zIndex: 1,
          background: "linear-gradient(to top, var(--bg) 0%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      {/* ── Ambient glows ── */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 2 }}>
        <div className="glow-blob" style={{
          top: "5%", left: "-10%",
          width: "520px", height: "520px",
          background: "radial-gradient(circle, rgba(192,175,211,0.07) 0%, transparent 70%)",
        }} />
        <div className="glow-blob" style={{
          bottom: "5%", right: "-8%",
          width: "420px", height: "420px",
          background: "radial-gradient(circle, rgba(139,152,128,0.05) 0%, transparent 70%)",
        }} />
      </div>

      {/* ── Top rule ── */}
      <div aria-hidden="true" style={{
        position: "absolute",
        top: 0, left: 0, right: 0,
        height: "1px",
        background: "linear-gradient(to right, transparent 0%, var(--border) 20%, var(--border) 80%, transparent 100%)",
        zIndex: 2,
      }} />

      {/* ── Split layout ── */}
      <div
        style={{
          flex: 1,
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
          padding: "0 clamp(16px, 4vw, 40px)",
          display: "grid",
          gridTemplateColumns: "55% 45%",
          alignItems: "center",
          minHeight: "calc(100vh - 120px)",
          position: "relative",
          zIndex: 2,
        }}
        className="hero-grid"
      >
        {/* ── Left: text ── */}
        <div
          ref={textColRef}
          style={{ paddingRight: "clamp(0px, 5vw, 64px)", paddingTop: "60px", paddingBottom: "60px" }}
        >
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

          {/* Headline — line-mask reveal */}
          <h1
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
            <span className="line-mask" style={{ display: "block" }}>
              <span ref={line1Ref} className="line-inner">Willkommen im</span>
            </span>
            <span className="line-mask" style={{ display: "block" }}>
              <span ref={line2Ref} className="line-inner">
                <span style={{ color: "var(--lilac)", fontStyle: "italic" }}>Cloudy</span>
                {" "}Club.
              </span>
            </span>
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
            Dein Zuhause für gemeinsamen Anbau, verantwortungsvollen Konsum
            und echte Community in Osnabrück. Sicher, transparent, zusammen.
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

        {/* ── Right: visual ── */}
        <div
          ref={visualColRef}
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            minHeight: "380px",
          }}
          className="hero-visual-col"
        >
          {/* Stars */}
          <div ref={starsRef} aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
            {STARS.map((s, i) => (
              <svg
                key={i}
                className="star-twinkle"
                style={{
                  position: "absolute",
                  top: s.top, left: s.left,
                  width: s.size, height: s.size,
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
            background: "radial-gradient(circle, rgba(192,175,211,0.08) 0%, transparent 70%)",
            filter: "blur(40px)",
            pointerEvents: "none",
          }} />

          {/* Cloud */}
          <div ref={cloudRef} className="float-anim" style={{ position: "relative", zIndex: 1, opacity: 0.55 }}>
            <svg
              width="340" height="280"
              viewBox="0 0 320 260"
              aria-hidden="true"
              style={{ display: "block", filter: "drop-shadow(0 20px 60px rgba(192,175,211,0.18))" }}
            >
              <defs>
                <radialGradient id="hcg1" cx="50%" cy="55%" r="52%">
                  <stop offset="0%" stopColor="#C0AFD3" stopOpacity="0.62" />
                  <stop offset="100%" stopColor="#9B88C0" stopOpacity="0.28" />
                </radialGradient>
              </defs>
              <path
                d="M178 38 C204 22, 244 42, 237 78 C228 52, 204 46, 183 62 C170 42, 175 38, 178 38Z"
                fill="none" stroke="rgba(192,175,211,0.65)" strokeWidth="1.5" strokeLinecap="round"
              />
              <ellipse cx="158" cy="186" rx="130" ry="60" fill="url(#hcg1)" />
              <ellipse cx="112" cy="168" rx="86" ry="54" fill="#C0AFD3" opacity="0.3" />
              <ellipse cx="210" cy="174" rx="74" ry="48" fill="#B8AAD0" opacity="0.24" />
              <ellipse cx="158" cy="150" rx="66" ry="50" fill="#D4C8E8" opacity="0.17" />
              <ellipse cx="130" cy="138" rx="46" ry="34" fill="#E2D8F0" opacity="0.13" />
              <ellipse cx="158" cy="186" rx="130" ry="60" fill="none" stroke="rgba(192,175,211,0.32)" strokeWidth="1" />
              <path d="M42 72 L44.5 65 L47 72 L54 74.5 L47 77 L44.5 84 L42 77 L35 74.5Z" fill="#C0AFD3" opacity="0.65" />
              <path d="M272 92 L274.5 86 L277 92 L283 94.5 L277 97 L274.5 103 L272 97 L266 94.5Z" fill="#C0AFD3" opacity="0.5" />
              <path d="M76 218 L77.5 214 L79 218 L83 219.5 L79 221 L77.5 225 L76 221 L72 219.5Z" fill="#8B9880" opacity="0.55" />
            </svg>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            min-height: calc(100vh - 120px) !important;
          }
          .hero-grid > div:first-child {
            padding-right: 0 !important;
            padding-bottom: 0 !important;
          }
          .hero-visual-col { display: none !important; }
        }
      `}</style>
    </section>
  );
}
