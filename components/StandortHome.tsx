"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function StandortHome() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const trigger = { trigger: sectionRef.current, start: "top 78%", once: true };

      gsap.fromTo(".sl-eyebrow",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", scrollTrigger: trigger }
      );
      gsap.fromTo(".sl-headline",
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.85, ease: "power3.out", delay: 0.1, scrollTrigger: trigger }
      );
      gsap.fromTo(".sl-body",
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", delay: 0.2, scrollTrigger: trigger }
      );
      gsap.fromTo(".sl-tag",
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", delay: 0.3, scrollTrigger: trigger }
      );
      gsap.fromTo(".sl-cta",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.55, ease: "power2.out", delay: 0.4, scrollTrigger: trigger }
      );

      /* cards */
      gsap.fromTo(".sl-photo-card",
        { opacity: 0, x: 50, scale: 0.96 },
        { opacity: 1, x: 0, scale: 1, duration: 0.95, ease: "power3.out", delay: 0.18, scrollTrigger: trigger }
      );
      gsap.fromTo(".sl-map-card",
        { opacity: 0, x: -36, y: 24 },
        { opacity: 1, x: 0, y: 0, duration: 0.95, ease: "power3.out", delay: 0.35, scrollTrigger: trigger }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="standort-home"
      ref={sectionRef}
      style={{
        background: "var(--cream, #f5f0eb)",
        padding: "clamp(80px, 10vw, 120px) 24px",
        overflow: "hidden",
      }}
    >
      <div
        className="sl-inner"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1.15fr",
          gap: "clamp(40px, 6vw, 80px)",
          alignItems: "center",
        }}
      >

        {/* ── LEFT: text ── */}
        <div>
          <span
            className="sl-eyebrow eyebrow"
            style={{ opacity: 0, color: "rgba(26,24,20,0.45)" }}
          >
            Standort
          </span>

          <h2
            className="sl-headline font-playfair"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
              fontWeight: 700,
              color: "#1a1814",
              lineHeight: 1.05,
              margin: "14px 0 22px",
              opacity: 0,
            }}
          >
            Mitten in{" "}
            <span style={{ color: "var(--lilac)", fontStyle: "italic", display: "block" }}>
              Osnabrück
            </span>
          </h2>

          <p
            className="sl-body font-montserrat"
            style={{
              fontSize: "0.9375rem",
              fontWeight: 300,
              lineHeight: 1.85,
              color: "rgba(26,24,20,0.58)",
              maxWidth: "400px",
              marginBottom: "28px",
              opacity: 0,
            }}
          >
            Zentral gelegen und optimal erreichbar. Unser Club bietet eine
            einladende Atmosphäre für alle Mitglieder aus Osnabrück und Umgebung.
          </p>

          {/* Location pill */}
          <div
            className="sl-tag"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "9px",
              background: "rgba(192,175,211,0.12)",
              border: "1px solid rgba(192,175,211,0.28)",
              borderRadius: "100px",
              padding: "8px 18px 8px 12px",
              marginBottom: "34px",
              opacity: 0,
            }}
          >
            <MapPin size={15} strokeWidth={1.7} style={{ color: "var(--lilac)" }} />
            <span
              className="font-montserrat"
              style={{ fontSize: "0.8125rem", fontWeight: 500, color: "rgba(26,24,20,0.60)" }}
            >
              Osnabrück, Niedersachsen
            </span>
          </div>

          {/* CTA link */}
          <div>
            <Link
              href="/location"
              className="sl-cta font-montserrat"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "0.9375rem",
                fontWeight: 700,
                color: "#1a1814",
                textDecoration: "none",
                borderBottom: "2px solid rgba(26,24,20,0.25)",
                paddingBottom: "3px",
                opacity: 0,
                transition: "opacity 0.2s ease",
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.55")}
              onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
            >
              Standort & Anfahrt <ArrowRight size={14} strokeWidth={2.2} />
            </Link>
          </div>
        </div>

        {/* ── RIGHT: stacked map cards ── */}
        <div style={{ position: "relative", height: "clamp(320px, 38vw, 460px)" }}>

          {/* Aerial photo card — behind, top-right */}
          <div
            className="sl-photo-card"
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "82%",
              height: "86%",
              borderRadius: "22px",
              overflow: "hidden",
              boxShadow: "0 20px 56px rgba(0,0,0,0.13)",
              opacity: 0,
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=900&q=80"
              alt="Osnabrück Luftansicht"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>

          {/* Map card — front, bottom-left */}
          <div
            className="sl-map-card"
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "72%",
              height: "86%",
              borderRadius: "18px",
              overflow: "hidden",
              boxShadow: "0 32px 80px rgba(0,0,0,0.38)",
              opacity: 0,
            }}
          >
            {/* ── Actual Google Maps embed ── */}
            <iframe
              src="https://maps.google.com/maps?q=Osnabrück,+Niedersachsen,+Germany&z=13&output=embed"
              width="100%"
              height="100%"
              style={{ border: "none", display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Osnabrück Karte"
            />

            {/* ── Bottom label overlay ── */}
            <div style={{
              position: "absolute",
              bottom: 0, left: 0, right: 0,
              background: "rgba(15,17,23,0.72)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              padding: "11px 18px",
              pointerEvents: "none",
            }}>
              <span
                className="font-montserrat"
                style={{
                  fontSize: "0.625rem",
                  fontWeight: 700,
                  letterSpacing: "0.22em",
                  color: "rgba(255,255,255,0.75)",
                  textTransform: "uppercase",
                }}
              >
                Osnabrück, Niedersachsen
              </span>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .sl-inner {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
