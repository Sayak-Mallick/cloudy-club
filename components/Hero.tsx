"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowDown } from "lucide-react";

const STARS = [
  { top: "16%", left: "14%",  delay: 0,   size: 10 },
  { top: "22%", left: "80%",  delay: 1.2, size: 8  },
  { top: "58%", left: "8%",   delay: 0.7, size: 7  },
  { top: "72%", left: "88%",  delay: 1.9, size: 11 },
  { top: "38%", left: "74%",  delay: 0.4, size: 6  },
  { top: "10%", left: "55%",  delay: 2.1, size: 9  },
  { top: "85%", left: "30%",  delay: 1.5, size: 7  },
];

export default function Hero() {
  const sectionRef  = useRef<HTMLElement>(null);
  const cloudRef    = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef      = useRef<HTMLParagraphElement>(null);
  const ctaRef      = useRef<HTMLDivElement>(null);
  const scrollRef   = useRef<HTMLDivElement>(null);
  const starsRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(starsRef.current, { opacity: 0 }, { opacity: 1, duration: 2 });

      tl.fromTo(cloudRef.current,
        { y: 50, opacity: 0, scale: 0.88 },
        { y: 0,  opacity: 1, scale: 1,   duration: 1.5 },
        "-=1.6"
      );

      const words = headlineRef.current?.querySelectorAll("span.word");
      if (words?.length) {
        tl.fromTo(words,
          { y: 36, opacity: 0 },
          { y: 0,  opacity: 1, duration: 0.85, stagger: 0.13 },
          "-=0.9"
        );
      }

      tl.fromTo(subRef.current,
        { y: 22, opacity: 0 },
        { y: 0,  opacity: 1, duration: 0.8 },
        "-=0.5"
      );

      tl.fromTo(ctaRef.current,
        { y: 18, opacity: 0 },
        { y: 0,  opacity: 1, duration: 0.7 },
        "-=0.5"
      );

      tl.fromTo(scrollRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6 },
        "-=0.3"
      );

      gsap.to(scrollRef.current, {
        y: 10, duration: 1.6, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 2.2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

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
        background: "linear-gradient(155deg, #EDE8F5 0%, #F4F1EA 50%, #E8DFCF 100%)",
        paddingTop: "72px",
      }}
    >
      {/* Soft radial glows */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{
          position: "absolute", top: "20%", left: "20%",
          width: "480px", height: "480px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(192,175,211,0.18) 0%, transparent 68%)",
          transform: "translate(-50%, -50%)",
        }} />
        <div style={{
          position: "absolute", bottom: "18%", right: "15%",
          width: "380px", height: "380px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(229,212,190,0.28) 0%, transparent 68%)",
          transform: "translate(50%, 50%)",
        }} />
      </div>

      {/* Stars */}
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

      {/* Cloud illustration */}
      <div ref={cloudRef} className="float-anim" style={{ marginBottom: "40px", position: "relative", zIndex: 1 }}>
        <svg
          width="260"
          height="170"
          viewBox="0 0 260 170"
          style={{ display: "block", filter: "drop-shadow(0 16px 48px rgba(192,175,211,0.45))" }}
        >
          <defs>
            <radialGradient id="cg1" cx="50%" cy="55%" r="52%">
              <stop offset="0%" stopColor="#DDD0EE" />
              <stop offset="100%" stopColor="#BFB0D4" stopOpacity="0.75" />
            </radialGradient>
          </defs>
          {/* moon crescent */}
          <path
            d="M132 22 C152 12, 184 26, 178 54 C172 36, 154 32, 138 44 C128 28, 130 22, 132 22Z"
            fill="none" stroke="#B8AAD0" strokeWidth="2" strokeLinecap="round"
          />
          {/* cloud body layers – back to front */}
          <ellipse cx="130" cy="118" rx="98"  ry="45"  fill="url(#cg1)" />
          <ellipse cx="94"  cy="106" rx="62"  ry="40"  fill="#CFC0E2" opacity="0.88" />
          <ellipse cx="166" cy="110" rx="54"  ry="36"  fill="#C4B4D6" opacity="0.82" />
          <ellipse cx="130" cy="96"  rx="50"  ry="36"  fill="#D8CBE8" opacity="0.72" />
          <ellipse cx="108" cy="88"  rx="36"  ry="28"  fill="#E2D8F0" opacity="0.62" />
          {/* outline */}
          <ellipse cx="130" cy="118" rx="98"  ry="45"  fill="none" stroke="#AFA0C8" strokeWidth="1.2" opacity="0.6" />
          {/* sparkle stars */}
          <path d="M36 52 L38 46 L40 52 L46 54 L40 56 L38 62 L36 56 L30 54Z" fill="#C0AFD3" opacity="0.75" />
          <path d="M218 66 L220 61 L222 66 L227 68 L222 70 L220 75 L218 70 L213 68Z" fill="#C0AFD3" opacity="0.6" />
          <path d="M56 144 L57.5 140 L59 144 L63 145.5 L59 147 L57.5 151 L56 147 L52 145.5Z" fill="#8B9880" opacity="0.5" />
        </svg>
      </div>

      {/* Text block */}
      <div style={{ textAlign: "center", padding: "0 24px", maxWidth: "720px", position: "relative", zIndex: 1 }}>
        <p
          className="eyebrow"
          style={{ color: "var(--sage)", marginBottom: "20px" }}
        >
          Cannabis Social Club · Osnabrück
        </p>

        <h1
          ref={headlineRef}
          className="font-playfair"
          style={{
            fontSize: "clamp(2.5rem, 7vw, 4.5rem)",
            lineHeight: 1.1,
            fontWeight: 500,
            color: "var(--charcoal)",
            marginBottom: "28px",
          }}
        >
          {["Willkommen", "im"].map((w, i) => (
            <span key={i} className="word" style={{ display: "inline-block", marginRight: "0.25em" }}>{w}</span>
          ))}
          {" "}
          <span className="word" style={{ display: "inline-block", color: "var(--lilac)", fontStyle: "italic", marginRight: "0.25em" }}>Cloudy</span>
          <span className="word" style={{ display: "inline-block" }}>Club</span>
        </h1>

        <div className="divider divider-center" style={{ marginBottom: "28px" }} />

        <p
          ref={subRef}
          className="font-montserrat"
          style={{
            fontSize: "1rem",
            fontWeight: 300,
            lineHeight: 1.8,
            color: "rgba(49,49,47,0.68)",
            maxWidth: "520px",
            margin: "0 auto 40px",
          }}
        >
          Dein Zuhause für gemeinsamen Anbau, verantwortungsvollen Konsum und echte
          Community in Osnabrück. Sicher, transparent, zusammen.
        </p>

        <div
          ref={ctaRef}
          style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center", justifyContent: "center" }}
        >
          <button className="btn-primary" onClick={() => scrollTo("membership")}>Mitglied werden</button>
          <button className="btn-outline" onClick={() => scrollTo("about")}>Mehr erfahren</button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollRef}
        onClick={() => scrollTo("about")}
        style={{
          position: "absolute",
          bottom: "36px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          cursor: "pointer",
        }}
      >
        <span className="eyebrow" style={{ color: "rgba(49,49,47,0.4)", letterSpacing: "0.22em" }}>Scroll</span>
        <ArrowDown size={14} style={{ color: "rgba(49,49,47,0.4)" }} />
      </div>
    </section>
  );
}
