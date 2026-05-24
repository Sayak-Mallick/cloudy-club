"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface PageHeroProps {
  eyebrow: string;
  headline: string;
  headlineItalic?: string;
  sub?: string;
  image: string;
  imagePosition?: string;
  align?: "left" | "center";
  cta?: { label: string; href: string };
  height?: string;
  overlayOpacity?: number;
}

export default function PageHero({
  eyebrow,
  headline,
  headlineItalic,
  sub,
  image,
  imagePosition = "center",
  align = "center",
  cta,
  height = "68vh",
  overlayOpacity = 0.7,
}: PageHeroProps) {
  const wrapRef   = useRef<HTMLDivElement>(null);
  const bgRef     = useRef<HTMLDivElement>(null);
  const textRef   = useRef<HTMLDivElement>(null);
  const line1Ref  = useRef<HTMLSpanElement>(null);
  const line2Ref  = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      // Subtle parallax on scroll
      gsap.fromTo(bgRef.current,
        { yPercent: -8 },
        {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: wrapRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      if (!prefersReduced) {
        // Line-mask entrance
        gsap.fromTo([line1Ref.current, line2Ref.current],
          { y: "110%", skewX: -4 },
          { y: "0%", skewX: 0, duration: 1.1, stagger: 0.14, ease: "power4.out", delay: 0.1 }
        );

        // Sub + CTA fade
        const subEls = textRef.current?.querySelectorAll(".ph-sub, .ph-cta");
        if (subEls && subEls.length) {
          gsap.fromTo(subEls,
            { opacity: 0, y: 18 },
            { opacity: 1, y: 0, duration: 0.75, stagger: 0.12, ease: "power2.out", delay: 0.5 }
          );
        }
      }
    }, wrapRef);

    return () => ctx.revert();
  }, []);

  const isCenter = align === "center";

  return (
    <div
      ref={wrapRef}
      style={{
        position: "relative",
        height,
        minHeight: "360px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: isCenter ? "center" : "flex-start",
      }}
    >
      {/* Parallax background */}
      <div
        ref={bgRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-10%", left: 0, right: 0,
          height: "120%",
          backgroundImage: `url('${image}')`,
          backgroundSize: "cover",
          backgroundPosition: imagePosition,
          willChange: "transform",
        }}
      />

      {/* Dark overlay */}
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0, zIndex: 1,
        background: isCenter
          ? `rgba(19,19,17,${overlayOpacity})`
          : `linear-gradient(to right, rgba(19,19,17,${overlayOpacity + 0.1}) 0%, rgba(19,19,17,${overlayOpacity - 0.05}) 55%, rgba(19,19,17,${overlayOpacity - 0.2}) 100%)`,
      }} />

      {/* Bottom fade to bg */}
      <div aria-hidden="true" style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        height: "160px", zIndex: 2,
        background: "linear-gradient(to top, var(--bg) 0%, transparent 100%)",
        pointerEvents: "none",
      }} />

      {/* Top fade */}
      <div aria-hidden="true" style={{
        position: "absolute", top: 0, left: 0, right: 0,
        height: "80px", zIndex: 2,
        background: "linear-gradient(to bottom, rgba(19,19,17,0.5) 0%, transparent 100%)",
        pointerEvents: "none",
      }} />

      {/* Content */}
      <div
        ref={textRef}
        style={{
          position: "relative",
          zIndex: 3,
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
          padding: "0 40px",
          textAlign: isCenter ? "center" : "left",
        }}
      >
        {/* Eyebrow */}
        <span
          className="eyebrow"
          style={{ display: "block", marginBottom: "20px", opacity: 0.9 }}
        >
          {eyebrow}
        </span>

        {/* Headline */}
        <h1
          className="font-playfair"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.75rem)",
            fontWeight: 700,
            color: "var(--cream)",
            lineHeight: 1.0,
            letterSpacing: "-0.02em",
            marginBottom: (sub || cta) ? "24px" : 0,
          }}
        >
          <span className="line-mask" style={{ display: "block", overflow: "hidden" }}>
            <span ref={line1Ref} className="line-inner" style={{ display: "block" }}>
              {headline}
            </span>
          </span>
          {headlineItalic && (
            <span className="line-mask" style={{ display: "block", overflow: "hidden" }}>
              <span ref={line2Ref} className="line-inner" style={{ display: "block", color: "var(--lilac)", fontStyle: "italic" }}>
                {headlineItalic}
              </span>
            </span>
          )}
        </h1>

        {/* Sub */}
        {sub && (
          <p
            className="ph-sub font-montserrat"
            style={{
              fontSize: "1rem",
              fontWeight: 300,
              lineHeight: 1.85,
              color: "rgba(244,241,234,0.62)",
              maxWidth: "520px",
              margin: isCenter ? "0 auto 28px" : "0 0 28px",
            }}
          >
            {sub}
          </p>
        )}

        {/* CTA */}
        {cta && (
          <Link href={cta.href} className="ph-cta btn-primary">
            {cta.label} <ArrowRight size={13} />
          </Link>
        )}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .ph-sub { max-width: 100% !important; }
        }
      `}</style>
    </div>
  );
}
