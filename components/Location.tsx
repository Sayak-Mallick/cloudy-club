"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Clock, Navigation2, ArrowRight } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

/* ── Info cards ─────────────────────────────────────────── */
const infoCards = [
  {
    icon: MapPin,
    title: "Adresse",
    primary: "Osnabrück, Niedersachsen",
    secondary: "Genaue Adresse nach Mitgliedschaft",
  },
  {
    icon: Clock,
    title: "Öffnungszeiten",
    primary: "Wird bekannt gegeben",
    secondary: "Flexible Abholzeiten für Mitglieder",
  },
  {
    icon: Navigation2,
    title: "Erreichbarkeit",
    primary: "Optimal angebunden",
    secondary: "ÖPNV & Parkplätze vorhanden",
  },
];

/* ── Distance cities ─────────────────────────────────────── */
const cities = [
  { name: "Osnabrück",          km: "0 km" },
  { name: "Belm",               km: "7 km" },
  { name: "Georgsmarienhütte",  km: "13 km" },
  { name: "Wallenhorst",        km: "9 km" },
  { name: "Lotte",              km: "15 km" },
  { name: "Hasbergen",          km: "10 km" },
  { name: "Bissendorf",         km: "12 km" },
  { name: "Hagen a.T.W.",       km: "35 km" },
  { name: "Bramsche",           km: "22 km" },
  { name: "Bad Iburg",          km: "19 km" },
  { name: "Melle",              km: "30 km" },
  { name: "Münster",            km: "55 km" },
];

export default function Location() {
  const wrapRef      = useRef<HTMLDivElement>(null);
  const mapRef       = useRef<HTMLDivElement>(null);
  const distHeadRef  = useRef<HTMLHeadingElement>(null);
  const ctaRef       = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {

      /* ── Info cards stagger ── */
      gsap.fromTo(".loc-info-card",
        { opacity: 0, y: 32, scale: 0.97 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.7, stagger: 0.13, ease: "power2.out",
          scrollTrigger: { trigger: ".loc-info-grid", start: "top 82%", once: true },
        }
      );

      /* ── Map reveal ── */
      gsap.fromTo(mapRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0,
          duration: 0.8, ease: "power2.out",
          scrollTrigger: { trigger: mapRef.current, start: "top 84%", once: true },
        }
      );

      /* ── Distances heading ── */
      gsap.fromTo(".dist-eyebrow",
        { opacity: 0, y: 10 },
        {
          opacity: 1, y: 0, duration: 0.55, ease: "power2.out",
          scrollTrigger: { trigger: distHeadRef.current, start: "top 85%", once: true },
        }
      );
      gsap.fromTo(distHeadRef.current,
        { opacity: 0, y: 22 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: "power3.out", delay: 0.1,
          scrollTrigger: { trigger: distHeadRef.current, start: "top 85%", once: true },
        }
      );
      gsap.fromTo(".dist-sub",
        { opacity: 0, y: 14 },
        {
          opacity: 1, y: 0, duration: 0.6, ease: "power2.out", delay: 0.2,
          scrollTrigger: { trigger: distHeadRef.current, start: "top 85%", once: true },
        }
      );

      /* ── City cards stagger ── */
      gsap.fromTo(".loc-city-card",
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0,
          duration: 0.55, stagger: 0.06, ease: "power2.out",
          scrollTrigger: { trigger: ".loc-city-grid", start: "top 82%", once: true },
        }
      );

      /* ── CTA fade in ── */
      gsap.fromTo(".loc-cta-inner",
        { opacity: 0, y: 28 },
        {
          opacity: 1, y: 0, duration: 0.75, ease: "power2.out",
          scrollTrigger: { trigger: ctaRef.current, start: "top 82%", once: true },
        }
      );

    }, wrapRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapRef}>

      {/* ══════════════════════════════════════════════════
          1 ▸ INFO CARDS
      ══════════════════════════════════════════════════ */}
      <section style={{ background: "var(--bg-surface)", padding: "80px 24px 64px" }}>
        <div
          className="loc-info-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {infoCards.map((card) => (
            <div
              key={card.title}
              className="loc-info-card"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "16px",
                padding: "40px 28px 36px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                boxShadow: "0 2px 16px rgba(0,0,0,0.3)",
                opacity: 0,
              }}
            >
              {/* Icon badge */}
              <div style={{
                width: 48, height: 48,
                background: "rgba(192,175,211,0.15)",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "22px",
              }}>
                <card.icon size={20} strokeWidth={1.6} style={{ color: "var(--lilac-dark, #9B88C0)" }} />
              </div>

              <h3 className="font-playfair" style={{
                fontSize: "1.125rem", fontWeight: 700,
                color: "var(--cream)", marginBottom: "10px", lineHeight: 1.2,
              }}>
                {card.title}
              </h3>
              <p className="font-montserrat" style={{
                fontSize: "0.9rem", fontWeight: 500,
                color: "var(--text-secondary)", marginBottom: "6px",
              }}>
                {card.primary}
              </p>
              <p className="font-montserrat" style={{
                fontSize: "0.8125rem", fontWeight: 300,
                color: "var(--text-muted)", lineHeight: 1.6,
              }}>
                {card.secondary}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          2 ▸ GOOGLE MAPS
      ══════════════════════════════════════════════════ */}
      <section style={{ background: "var(--bg-surface)", padding: "0 24px 80px" }}>
        <div
          ref={mapRef}
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
            opacity: 0,
          }}
        >
          <iframe
            title="Cloudy Club Standort – Osnabrück"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78286.87460297!2d7.954336!3d52.273006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ba5d5064a08e87%3A0x427f28131548360!2sOsnabrück!5e0!3m2!1sde!2sde!4v1716000000000"
            width="100%"
            height="480"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          3 ▸ DISTANCES
      ══════════════════════════════════════════════════ */}
      <section style={{ background: "var(--bg-surface)", padding: "24px 24px 96px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "52px" }}>
            <span
              className="dist-eyebrow eyebrow"
              style={{ opacity: 0 }}
            >
              Aus der Region
            </span>
            <h2
              ref={distHeadRef}
              className="font-playfair"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700, color: "var(--cream)",
                marginTop: "14px", marginBottom: "16px",
                lineHeight: 1.1, opacity: 0,
              }}
            >
              Entfernungen
            </h2>
            <p
              className="dist-sub font-montserrat"
              style={{
                fontSize: "0.9375rem", fontWeight: 300,
                color: "var(--text-secondary)", opacity: 0,
              }}
            >
              Wir sind für Mitglieder aus der gesamten Region erreichbar.
            </p>
          </div>

          {/* City grid */}
          <div
            className="loc-city-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "12px",
            }}
          >
            {cities.map((city) => (
              <div
                key={city.name}
                className="loc-city-card"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  padding: "20px 18px",
                  textAlign: "center",
                  boxShadow: "0 1px 8px rgba(0,0,0,0.3)",
                  opacity: 0,
                  transition: "transform 0.22s ease, box-shadow 0.22s ease",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 6px 24px rgba(155,136,192,0.12)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 1px 8px rgba(0,0,0,0.3)";
                }}
              >
                <p className="font-playfair" style={{
                  fontSize: "1rem", fontWeight: 700,
                  color: "var(--cream)", marginBottom: "5px",
                }}>
                  {city.name}
                </p>
                <p className="font-montserrat" style={{
                  fontSize: "0.8125rem", fontWeight: 300,
                  color: "var(--text-muted)",
                }}>
                  {city.km}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          4 ▸ CTA BANNER
      ══════════════════════════════════════════════════ */}
      <section
        ref={ctaRef}
        style={{
          background: "var(--bg, #131311)",
          padding: "clamp(80px, 10vw, 120px) 24px",
          textAlign: "center",
        }}
      >
        <div className="loc-cta-inner" style={{ maxWidth: "600px", margin: "0 auto", opacity: 0 }}>
          <h2 className="font-playfair" style={{
            fontSize: "clamp(1.875rem, 4vw, 3rem)",
            fontWeight: 700,
            color: "var(--cream, #f4f1ea)",
            lineHeight: 1.15,
            marginBottom: "16px",
          }}>
            Besuche uns in Osnabrück
          </h2>
          <p className="font-montserrat" style={{
            fontSize: "1rem", fontWeight: 300,
            color: "rgba(244,241,234,0.55)",
            lineHeight: 1.8, marginBottom: "40px",
          }}>
            Werde Mitglied und erlebe den Cloudy Club persönlich.
          </p>
          <Link
            href="/membership"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              height: "48px",
              padding: "0 28px",
              border: "1.5px solid rgba(244,241,234,0.55)",
              borderRadius: "100px",
              color: "var(--cream, #f4f1ea)",
              fontFamily: "Montserrat, sans-serif",
              fontSize: "0.875rem",
              fontWeight: 500,
              letterSpacing: "0.04em",
              textDecoration: "none",
              transition: "border-color 0.25s ease, background 0.25s ease",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(244,241,234,0.9)";
              (e.currentTarget as HTMLAnchorElement).style.background  = "rgba(244,241,234,0.06)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(244,241,234,0.55)";
              (e.currentTarget as HTMLAnchorElement).style.background  = "transparent";
            }}
          >
            Mitglied werden <ArrowRight size={14} strokeWidth={2} />
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .loc-info-grid  { grid-template-columns: 1fr !important; }
          .loc-city-grid  { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .loc-city-grid  { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
