"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Ticker from "./Ticker";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef   = useRef<HTMLElement>(null);
  const visualRef    = useRef<HTMLDivElement>(null);
  const headlineRef  = useRef<HTMLHeadingElement>(null);
  const line1Ref     = useRef<HTMLSpanElement>(null);
  const line2Ref     = useRef<HTMLSpanElement>(null);
  const eyebrowRef   = useRef<HTMLSpanElement>(null);
  const ctaArrowRef  = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {

      /* ── 1. Image card: clip-path wipe from left ── */
      gsap.fromTo(visualRef.current,
        { clipPath: "inset(0 100% 0 0 round 20px)" },
        {
          clipPath: "inset(0 0% 0 0 round 20px)",
          duration: 1.4,
          ease: "power3.inOut",
          scrollTrigger: { trigger: visualRef.current, start: "top 78%", once: true },
        }
      );

      /* ── 2. Parallax drift on image ── */
      gsap.to(visualRef.current, {
        y: -48,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      /* ── 3. Eyebrow: fade + slide up ── */
      gsap.fromTo(eyebrowRef.current,
        { opacity: 0, y: 10 },
        {
          opacity: 1, y: 0,
          duration: 0.6, ease: "power2.out",
          scrollTrigger: { trigger: headlineRef.current, start: "top 84%", once: true },
        }
      );

      /* ── 4. Headline: line-mask slide-up reveal ── */
      gsap.fromTo([line1Ref.current, line2Ref.current],
        { y: "110%", skewX: -4 },
        {
          y: "0%", skewX: 0,
          duration: 1.0, stagger: 0.14, ease: "power4.out",
          scrollTrigger: { trigger: headlineRef.current, start: "top 82%", once: true },
        }
      );

      /* ── 5. Body paragraphs: stagger fade + rise ── */
      gsap.fromTo(".about-para",
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0,
          duration: 0.75, stagger: 0.18, ease: "power2.out",
          scrollTrigger: { trigger: ".about-para", start: "top 85%", once: true },
        }
      );

      /* ── 6. CTA: fade + rise ── */
      gsap.fromTo(".about-cta",
        { opacity: 0, y: 14 },
        {
          opacity: 1, y: 0,
          duration: 0.65, ease: "power2.out",
          scrollTrigger: { trigger: ".about-cta", start: "top 90%", once: true },
        }
      );

      /* ── 7. Stats badge: slide up from below image ── */
      gsap.fromTo(".about-badge",
        { opacity: 0, y: 20, scale: 0.9 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.7, ease: "back.out(1.4)",
          delay: 0.5,
          scrollTrigger: { trigger: visualRef.current, start: "top 78%", once: true },
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* CTA arrow hover handlers */
  const handleCtaEnter = () => {
    gsap.to(ctaArrowRef.current, { x: 5, duration: 0.25, ease: "power2.out" });
  };
  const handleCtaLeave = () => {
    gsap.to(ctaArrowRef.current, { x: 0, duration: 0.25, ease: "power2.inOut" });
  };

  return (
    <>
      <section
        id="about"
        ref={sectionRef}
        className="section"
        style={{ background: "var(--bg-surface)" }}
      >
        <div
          className="section-inner about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "96px",
            alignItems: "center",
          }}
        >

          {/* ── Left: photo with stats badge ── */}
          <div ref={visualRef} style={{ position: "relative" }}>
            <div
              className="about-image-card"
              style={{
                height: "580px",
                borderRadius: "20px",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 24px 64px rgba(0,0,0,0.10)",
              }}
            >
              {/* Parallax photo layer */}
              <div
                className="about-photo"
                style={{
                  position: "absolute",
                  top: "-12%", left: 0, right: 0,
                  height: "124%",
                  backgroundImage: "url('/assets/Unsere-Geschichte.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  willChange: "transform",
                  transition: "transform 0.6s ease",
                }}
              />

              {/* Bottom gradient scrim */}
              <div aria-hidden="true" style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(19,19,17,0.55) 0%, rgba(19,19,17,0.05) 55%, transparent 100%)",
                pointerEvents: "none",
              }} />

              {/* Stats badge */}
              <div
                className="about-badge"
                style={{
                  position: "absolute",
                  bottom: "28px",
                  right: "28px",
                  zIndex: 3,
                  padding: "16px 22px",
                  background: "rgba(30,28,26,0.52)",
                  backdropFilter: "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",
                  borderRadius: "14px",
                  border: "1px solid rgba(255,255,255,0.10)",
                  textAlign: "center",
                  minWidth: "110px",
                }}
              >
                <p
                  className="font-playfair"
                  style={{
                    fontSize: "2.25rem",
                    fontWeight: 700,
                    color: "#f0ece6",
                    lineHeight: 1,
                  }}
                >
                  500+
                </p>
                <p
                  className="font-montserrat"
                  style={{
                    fontSize: "0.625rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "rgba(240,236,230,0.65)",
                    marginTop: "6px",
                  }}
                >
                  Mitgliederplätze
                </p>
              </div>
            </div>
          </div>

          {/* ── Right: content ── */}
          <div>
            <div className="section-header" style={{ marginBottom: "36px" }}>

              {/* Eyebrow — hidden until GSAP fires */}
              <span
                ref={eyebrowRef}
                className="eyebrow"
                style={{ opacity: 0 }}
              >
                Über den Club
              </span>

              {/* Headline */}
              <h2
                ref={headlineRef}
                className="font-playfair section-title"
                style={{ color: "var(--cream)" }}
              >
                <span className="about-line-mask">
                  <span ref={line1Ref} className="about-line-inner">
                    Mehr als ein Club —
                  </span>
                </span>
                <span className="about-line-mask">
                  <span
                    ref={line2Ref}
                    className="about-line-inner"
                    style={{ fontStyle: "italic", color: "var(--lilac)" }}
                  >
                    Unsere Geschichte
                  </span>
                </span>
              </h2>
            </div>

            {/* Body paragraphs — hidden until GSAP fires */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <p
                className="about-para font-montserrat"
                style={{
                  fontSize: "0.9375rem",
                  fontWeight: 300,
                  lineHeight: 1.85,
                  color: "var(--text-secondary)",
                  opacity: 0,
                }}
              >
                Der Cloudy Club Osnabrück ist mehr als eine Anbauvereinigung. Wir schaffen
                einen geschützten Raum für verantwortungsvollen Cannabis-Genuss, Aufklärung
                und echte Gemeinschaft — fernab vom Schwarzmarkt.
              </p>
              <p
                className="about-para font-montserrat"
                style={{
                  fontSize: "0.9375rem",
                  fontWeight: 300,
                  lineHeight: 1.85,
                  color: "var(--text-secondary)",
                  opacity: 0,
                }}
              >
                Unsere Mission: Transparenz, Qualität und Sicherheit für alle Mitglieder.
                Wir setzen neue Maßstäbe für Cannabis-Kultur in der Friedensstadt.
              </p>
            </div>

            {/* CTA text link — hidden until GSAP fires */}
            <div style={{ marginTop: "40px" }}>
              <Link
                href="/about"
                className="about-cta font-montserrat"
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
                  opacity: 0,
                }}
                onMouseEnter={handleCtaEnter}
                onMouseLeave={handleCtaLeave}
              >
                Mehr über uns erfahren
                {/* @ts-ignore – ref on SVG inside Lucide */}
                <ArrowRight ref={ctaArrowRef} size={15} strokeWidth={2} style={{ flexShrink: 0 }} />
              </Link>
            </div>
          </div>
        </div>

        <style>{`
          /* ── Line-mask: clip the slide-up headline ── */
          .about-line-mask {
            display: block;
            overflow: hidden;
            padding-bottom: 0.08em; /* prevent descender clip */
          }
          .about-line-inner {
            display: block;
            transform: translateY(110%);   /* matches GSAP fromTo */
          }

          /* ── Image hover: subtle zoom ── */
          .about-image-card:hover .about-photo {
            transform: scale(1.04);
            transition: transform 0.7s ease;
          }

          /* ── Badge: gentle float loop ── */
          .about-badge {
            animation: badgeFloat 4s ease-in-out infinite;
          }
          @keyframes badgeFloat {
            0%, 100% { transform: translateY(0px);  }
            50%       { transform: translateY(-6px); }
          }

          /* ── Responsive ── */
          @media (max-width: 900px) {
            .about-grid {
              grid-template-columns: 1fr !important;
              gap: 52px !important;
            }
          }
        `}</style>
      </section>

      <Ticker />
    </>
  );
}
