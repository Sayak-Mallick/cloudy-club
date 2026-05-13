"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";

const STARS = [
  { top: "12%", left: "8%",   delay: 0,   size: 8  },
  { top: "18%", left: "78%",  delay: 1.4, size: 6  },
  { top: "62%", left: "6%",   delay: 0.7, size: 7  },
  { top: "75%", left: "91%",  delay: 2.1, size: 10 },
  { top: "35%", left: "72%",  delay: 0.4, size: 5  },
  { top: "8%",  left: "52%",  delay: 2.4, size: 8  },
  { top: "88%", left: "25%",  delay: 1.6, size: 6  },
  { top: "45%", left: "88%",  delay: 0.9, size: 5  },
  { top: "28%", left: "18%",  delay: 1.8, size: 7  },
];

const STATS = [
  { value: "50g",     label: "monatl. Abgabe" },
  { value: "§CanG",  label: "100% legal" },
  { value: "18+",    label: "Mindestalter" },
];

export default function Hero() {
  const sectionRef  = useRef<HTMLElement>(null);
  const cloudRef    = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef      = useRef<HTMLParagraphElement>(null);
  const ctaRef      = useRef<HTMLDivElement>(null);
  const statsRef    = useRef<HTMLDivElement>(null);
  const starsRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(starsRef.current, { opacity: 0 }, { opacity: 1, duration: 2.5 });

      tl.fromTo(cloudRef.current,
        { y: 60, opacity: 0, scale: 0.85 },
        { y: 0,  opacity: 1, scale: 1,   duration: 1.6 },
        "-=2.2"
      );

      const words = headlineRef.current?.querySelectorAll("span.word");
      if (words?.length) {
        tl.fromTo(words,
          { y: 48, opacity: 0 },
          { y: 0,  opacity: 1, duration: 0.9, stagger: 0.12 },
          "-=1"
        );
      }

      tl.fromTo(subRef.current,
        { y: 24, opacity: 0 },
        { y: 0,  opacity: 1, duration: 0.8 },
        "-=0.5"
      );

      tl.fromTo(ctaRef.current,
        { y: 18, opacity: 0 },
        { y: 0,  opacity: 1, duration: 0.7 },
        "-=0.4"
      );

      tl.fromTo(statsRef.current,
        { y: 24, opacity: 0 },
        { y: 0,  opacity: 1, duration: 0.7 },
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
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "var(--bg)",
        paddingTop: "72px",
      }}
    >
      {/* ── Background glows ── */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div className="glow-blob" style={{
          top: "5%", left: "-10%",
          width: "640px", height: "640px",
          background: "radial-gradient(circle, rgba(192,175,211,0.07) 0%, transparent 70%)",
        }} />
        <div className="glow-blob" style={{
          bottom: "0%", right: "-10%",
          width: "560px", height: "560px",
          background: "radial-gradient(circle, rgba(139,152,128,0.06) 0%, transparent 70%)",
        }} />
        <div className="glow-blob" style={{
          top: "40%", left: "50%",
          width: "360px", height: "360px",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(192,175,211,0.04) 0%, transparent 70%)",
        }} />
      </div>

      {/* ── Stars ── */}
      <div ref={starsRef} style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
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
          >
            <path d="M10 0 L12.5 7.5 L20 10 L12.5 12.5 L10 20 L7.5 12.5 L0 10 L7.5 7.5 Z" fill="#C0AFD3" />
          </svg>
        ))}
      </div>

      {/* ── Horizontal rule ── */}
      <div style={{
        position: "absolute",
        top: "72px",
        left: 0, right: 0,
        height: "1px",
        background: "linear-gradient(to right, transparent 0%, rgba(192,175,211,0.15) 30%, rgba(192,175,211,0.15) 70%, transparent 100%)",
      }} />

      {/* ── Cloud illustration ── */}
      <div ref={cloudRef} className="float-anim" style={{ marginBottom: "48px", position: "relative", zIndex: 1 }}>
        <svg
          width="280"
          height="180"
          viewBox="0 0 280 180"
          style={{ display: "block", filter: "drop-shadow(0 20px 60px rgba(192,175,211,0.25))" }}
        >
          <defs>
            <radialGradient id="hcg1" cx="50%" cy="55%" r="52%">
              <stop offset="0%" stopColor="#C0AFD3" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#9B88C0" stopOpacity="0.35" />
            </radialGradient>
            <radialGradient id="hcg2" cx="45%" cy="60%" r="55%">
              <stop offset="0%" stopColor="#EDE8F5" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#C0AFD3" stopOpacity="0.1" />
            </radialGradient>
          </defs>
          {/* crescent moon */}
          <path
            d="M142 24 C164 12, 198 28, 192 58 C185 38, 165 33, 148 47 C137 29, 140 24, 142 24Z"
            fill="none" stroke="rgba(192,175,211,0.7)" strokeWidth="1.5" strokeLinecap="round"
          />
          {/* cloud layers */}
          <ellipse cx="140" cy="126" rx="108" ry="50" fill="url(#hcg1)" />
          <ellipse cx="102"  cy="112" rx="70"  ry="44" fill="#C0AFD3" opacity="0.35" />
          <ellipse cx="180" cy="116" rx="60"  ry="40" fill="#B8AAD0" opacity="0.3"  />
          <ellipse cx="140" cy="102" rx="54"  ry="40" fill="#D4C8E8" opacity="0.22" />
          <ellipse cx="116" cy="92"  rx="40"  ry="30" fill="#E2D8F0" opacity="0.18" />
          {/* outline */}
          <ellipse cx="140" cy="126" rx="108" ry="50" fill="none" stroke="rgba(192,175,211,0.4)" strokeWidth="1" />
          {/* sparkle stars */}
          <path d="M36 54 L38.5 47 L41 54 L48 56.5 L41 59 L38.5 66 L36 59 L29 56.5Z" fill="#C0AFD3" opacity="0.7" />
          <path d="M232 68 L234.5 62 L237 68 L243 70.5 L237 73 L234.5 79 L232 73 L226 70.5Z" fill="#C0AFD3" opacity="0.55" />
          <path d="M60 150 L61.5 146 L63 150 L67 151.5 L63 153 L61.5 157 L60 153 L56 151.5Z" fill="#8B9880" opacity="0.6" />
        </svg>
      </div>

      {/* ── Text block ── */}
      <div style={{ textAlign: "center", padding: "0 24px", maxWidth: "860px", position: "relative", zIndex: 1 }}>
        <p className="eyebrow" style={{ color: "var(--lilac)", marginBottom: "24px", opacity: 0.9 }}>
          Cannabis Social Club · Osnabrück
        </p>

        <h1
          ref={headlineRef}
          className="font-playfair"
          style={{
            fontSize: "clamp(3rem, 8.5vw, 6.5rem)",
            lineHeight: 0.98,
            fontWeight: 800,
            color: "var(--cream)",
            marginBottom: "32px",
            letterSpacing: "-0.02em",
          }}
        >
          {["Willkommen", "im"].map((w, i) => (
            <span key={i} className="word" style={{ display: "inline-block", marginRight: "0.2em" }}>{w}</span>
          ))}
          {" "}
          <span className="word" style={{ display: "inline-block", color: "var(--lilac)", fontStyle: "italic", marginRight: "0.15em" }}>Cloudy</span>
          <span className="word" style={{ display: "inline-block" }}>Club.</span>
        </h1>

        <div className="divider divider-center" style={{ marginBottom: "32px" }} />

        <p
          ref={subRef}
          className="font-montserrat"
          style={{
            fontSize: "1.0625rem",
            fontWeight: 300,
            lineHeight: 1.85,
            color: "var(--text-secondary)",
            maxWidth: "560px",
            margin: "0 auto 48px",
          }}
        >
          Dein Zuhause für gemeinsamen Anbau, verantwortungsvollen Konsum und echte
          Community in Osnabrück. Sicher, transparent, zusammen.
        </p>

        <div
          ref={ctaRef}
          style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center", justifyContent: "center", marginBottom: "72px" }}
        >
          <Link href="/membership" className="btn-primary" style={{ gap: "10px" }}>
            Mitglied werden <ArrowRight size={14} />
          </Link>
          <Link href="/about" className="btn-outline">
            Mehr erfahren
          </Link>
        </div>

        {/* ── Stats bar ── */}
        <div
          ref={statsRef}
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "0",
            borderTop: "1px solid rgba(192,175,211,0.1)",
            paddingTop: "32px",
          }}
        >
          {STATS.map((s, i) => (
            <div
              key={i}
              style={{
                padding: "0 40px",
                textAlign: "center",
                borderRight: i < STATS.length - 1 ? "1px solid rgba(192,175,211,0.12)" : "none",
              }}
            >
              <p className="font-playfair" style={{ fontSize: "2rem", color: "var(--cream)", fontWeight: 700, lineHeight: 1 }}>{s.value}</p>
              <p className="font-montserrat" style={{ fontSize: "0.625rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--text-muted)", marginTop: "6px" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom fade ── */}
      <div style={{
        position: "absolute",
        bottom: 0, left: 0, right: 0,
        height: "200px",
        background: "linear-gradient(to top, var(--bg) 0%, transparent 100%)",
        pointerEvents: "none",
      }} />
    </section>
  );
}
