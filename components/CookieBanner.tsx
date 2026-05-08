"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cloudy-cookie-consent");
    if (!consent) setTimeout(() => setVisible(true), 2000);
  }, []);

  const accept = () => { localStorage.setItem("cloudy-cookie-consent", "accepted"); setVisible(false); };
  const decline = () => { localStorage.setItem("cloudy-cookie-consent", "declined"); setVisible(false); };

  if (!visible) return null;

  return (
    <div
      className="cookie-banner"
      style={{
        position: "fixed",
        zIndex: 200,
        background: "var(--charcoal)",
        border: "1px solid rgba(192,175,211,0.2)",
        padding: "28px",
        boxShadow: "0 24px 64px rgba(49,49,47,0.35)",
        animation: "cookieSlideUp 0.5s cubic-bezier(0.25,0.46,0.45,0.94) forwards",
      }}
    >
      <p className="eyebrow" style={{ color: "var(--lilac)", marginBottom: "8px" }}>Cookies</p>
      <p className="font-playfair" style={{ fontSize: "1rem", color: "var(--cream)", marginBottom: "10px", fontWeight: 500 }}>
        Wir nutzen Cookies
      </p>
      <p className="font-montserrat" style={{ fontSize: "0.8125rem", fontWeight: 300, lineHeight: 1.7, color: "rgba(244,241,234,0.5)", marginBottom: "20px" }}>
        Diese Website verwendet Cookies für eine bessere Nutzererfahrung.
      </p>
      <div style={{ display: "flex", gap: "12px" }}>
        <button
          onClick={accept}
          className="btn-primary"
          style={{ flex: 1, height: "42px", padding: "0", fontSize: "0.6875rem" }}
        >
          Akzeptieren
        </button>
        <button
          onClick={decline}
          className="font-montserrat"
          style={{
            flex: 1,
            height: "42px",
            fontSize: "0.6875rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "rgba(244,241,234,0.45)",
            background: "none",
            border: "1px solid rgba(255,255,255,0.15)",
            cursor: "pointer",
            transition: "color 0.3s ease, border-color 0.3s ease",
          }}
          onMouseEnter={e => { (e.currentTarget.style.color = "var(--cream)"); (e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)"); }}
          onMouseLeave={e => { (e.currentTarget.style.color = "rgba(244,241,234,0.45)"); (e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"); }}
        >
          Ablehnen
        </button>
      </div>
      <style>{`
        .cookie-banner {
          bottom: 24px;
          right: 24px;
          width: 100%;
          max-width: 360px;
        }

        /* Mobile: full-width bar pinned to the very bottom */
        @media (max-width: 480px) {
          .cookie-banner {
            bottom: 0;
            right: 0;
            max-width: 100%;
            border-left: none;
            border-right: none;
            border-bottom: none;
          }
        }

        @keyframes cookieSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}