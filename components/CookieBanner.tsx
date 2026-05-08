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
      className="
        fixed z-[200]
        bottom-3 right-3 left-3
        sm:bottom-6 sm:right-6 sm:left-auto
        sm:w-[360px]
        bg-[var(--charcoal)]
        border border-[rgba(192,175,211,0.2)]
        p-5 sm:p-7
        shadow-[0_24px_64px_rgba(49,49,47,0.35)]
        animate-[cookieSlideUp_0.5s_cubic-bezier(0.25,0.46,0.45,0.94)_forwards]
      "
    >
      <p className="eyebrow text-[var(--lilac)] mb-2">Cookies</p>

      <p className="font-playfair text-base font-medium text-[var(--cream)] mb-2.5">
        Wir nutzen Cookies
      </p>

      <p className="font-montserrat text-[0.8125rem] font-light leading-[1.7] text-[rgba(244,241,234,0.5)] mb-5">
        Diese Website verwendet Cookies für eine bessere Nutzererfahrung.
      </p>

      <div className="flex gap-3">
        <button
          onClick={accept}
          className="btn-primary flex-1 h-[42px] !p-0 text-[0.6875rem]"
        >
          Akzeptieren
        </button>

        <button
          onClick={decline}
          className="
            font-montserrat flex-1 h-[42px]
            text-[0.6875rem] tracking-[0.14em] uppercase
            text-[rgba(244,241,234,0.45)] hover:text-[var(--cream)]
            bg-transparent
            border border-[rgba(255,255,255,0.15)] hover:border-[rgba(255,255,255,0.4)]
            cursor-pointer transition-[color,border-color] duration-300
          "
        >
          Ablehnen
        </button>
      </div>

      <style>{`
        @keyframes cookieSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}