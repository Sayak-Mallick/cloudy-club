"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxPanelProps {
  image: string;
  eyebrow?: string;
  headline: string;
  headlineItalic?: string;
  sub?: string;
  align?: "left" | "center" | "right";
  overlayOpacity?: number;
  cta?: { label: string; href: string };
  textColor?: string;
  height?: string;
}

export default function ParallaxPanel({
  image,
  eyebrow,
  headline,
  headlineItalic,
  sub,
  align = "center",
  overlayOpacity = 0.62,
  cta,
  textColor = "var(--cream)",
  height = "100vh",
}: ParallaxPanelProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef      = useRef<HTMLDivElement>(null);
  const textRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      // Image parallaxes slower than scroll = Floema-style depth
      gsap.fromTo(bgRef.current,
        { yPercent: -12 },
        {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      if (!prefersReduced) {
        // Text rises into view
        gsap.fromTo(textRef.current,
          { opacity: 0, y: 48 },
          {
            opacity: 1, y: 0,
            duration: 1.1, ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 68%",
              once: true,
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  const justifyMap = { left: "flex-start", center: "center", right: "flex-end" } as const;
  const textAlign  = align;
  const marginAuto = align === "center" ? "0 auto" : align === "right" ? "0 0 0 auto" : "0";

  return (
    <div
      ref={sectionRef}
      style={{
        position: "relative",
        height,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: justifyMap[align],
      }}
    >
      {/* Parallax image layer */}
      <div
        ref={bgRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-14%", left: 0, right: 0,
          height: "128%",
          backgroundImage: `url('${image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          willChange: "transform",
        }}
      />

      {/* Dark overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute", inset: 0, zIndex: 1,
          background: `rgba(19,19,17,${overlayOpacity})`,
        }}
      />

      {/* Soft vignette for depth */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute", inset: 0, zIndex: 1,
          background: "radial-gradient(ellipse at 50% 60%, transparent 30%, rgba(19,19,17,0.45) 100%)",
        }}
      />

      {/* Edge fade to blend with neighboring sections */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          height: "120px", zIndex: 2,
          background: "linear-gradient(to top, var(--bg) 0%, transparent 100%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute", top: 0, left: 0, right: 0,
          height: "120px", zIndex: 2,
          background: "linear-gradient(to bottom, var(--bg) 0%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Text content */}
      <div
        ref={textRef}
        style={{
          position: "relative",
          zIndex: 3,
          padding: "0 clamp(28px, 7vw, 120px)",
          maxWidth: align === "center" ? "860px" : "640px",
          textAlign,
          margin: marginAuto,
          opacity: 0,
        }}
      >
        {eyebrow && (
          <span
            className="eyebrow"
            style={{ display: "block", marginBottom: "20px", opacity: 0.85 }}
          >
            {eyebrow}
          </span>
        )}

        <h2
          className="font-playfair"
          style={{
            fontSize: "clamp(2.5rem, 6.5vw, 5.25rem)",
            fontWeight: 700,
            color: textColor,
            lineHeight: 1.0,
            letterSpacing: "-0.02em",
            marginBottom: sub || cta ? "28px" : 0,
          }}
        >
          {headline}
          {headlineItalic && (
            <>
              {" "}
              <span style={{ fontStyle: "italic", color: "var(--lilac)" }}>
                {headlineItalic}
              </span>
            </>
          )}
        </h2>

        {sub && (
          <p
            className="font-montserrat"
            style={{
              fontSize: "1rem",
              fontWeight: 300,
              lineHeight: 1.85,
              color: "rgba(244,241,234,0.62)",
              maxWidth: "480px",
              margin: align === "center" ? "0 auto 28px" : "0 0 28px",
            }}
          >
            {sub}
          </p>
        )}

        {cta && (
          <Link href={cta.href} className="btn-primary">
            {cta.label} <ArrowRight size={13} />
          </Link>
        )}
      </div>
    </div>
  );
}
