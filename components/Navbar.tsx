"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Über uns",     href: "#about" },
  { label: "Anbau",        href: "#growing" },
  { label: "Prävention",   href: "#prevention" },
  { label: "Mitgliedschaft", href: "#membership" },
  { label: "FAQ",          href: "#faq" },
  { label: "Standort",     href: "#location" },
  { label: "News",         href: "#news" },
];

export default function Navbar() {
  const navRef   = useRef<HTMLElement>(null);
  const [scrolled,     setScrolled]     = useState(false);
  const [menuOpen,     setMenuOpen]     = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    gsap.fromTo(navRef.current,
      { y: -80, opacity: 0 },
      { y: 0,   opacity: 1, duration: 1, ease: "power3.out", delay: 0.4 }
    );

    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const ids = [...navItems].map(n => n.href.replace("#", "")).reverse();
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActiveSection(id); break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.getElementById(href.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ── Main bar ── */}
      <nav
        ref={navRef}
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 100,
          height: "72px",
          display: "flex",
          alignItems: "center",
          transition: "background 0.4s ease, box-shadow 0.4s ease",
          background: scrolled ? "rgba(244,241,234,0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          boxShadow: scrolled ? "0 1px 0 rgba(192,175,211,0.25)" : "none",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "32px",
          }}
        >
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{ display: "flex", alignItems: "center", gap: "12px", flexShrink: 0 }}
          >
            <svg width="40" height="40" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="47" fill="none" stroke="#C0AFD3" strokeWidth="2.5" />
              <ellipse cx="50" cy="58" rx="27" ry="17" fill="#C0AFD3" opacity="0.55" />
              <ellipse cx="37" cy="53" rx="19" ry="15" fill="#C0AFD3" opacity="0.75" />
              <ellipse cx="63" cy="55" rx="17" ry="13" fill="#C0AFD3" opacity="0.65" />
              <ellipse cx="50" cy="46" rx="15" ry="13" fill="#C0AFD3" opacity="0.45" />
              <ellipse cx="42" cy="40" rx="9"  ry="8"  fill="#C0AFD3" opacity="0.35" />
              {/* star dots */}
              <circle cx="33" cy="33" r="1.5" fill="#C0AFD3" opacity="0.7" />
              <circle cx="67" cy="28" r="1.2" fill="#C0AFD3" opacity="0.6" />
              <circle cx="72" cy="42" r="1"   fill="#C0AFD3" opacity="0.5" />
            </svg>
            <div style={{ lineHeight: 1 }}>
              <div className="font-playfair" style={{ fontSize: "1rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--charcoal)", lineHeight: 1.1 }}>Cloudy</div>
              <div className="font-montserrat" style={{ fontSize: "0.625rem", letterSpacing: "0.38em", textTransform: "uppercase", color: "var(--lilac)", marginTop: "3px" }}>Club</div>
            </div>
          </button>

          {/* Desktop nav links */}
          <ul style={{ display: "flex", alignItems: "center", gap: "28px", listStyle: "none", margin: 0, padding: 0 }} className="hidden lg:flex">
            {navItems.map(item => (
              <li key={item.href}>
                <button
                  onClick={() => scrollTo(item.href)}
                  className={`nav-link ${activeSection === item.href.replace("#","") ? "active" : ""}`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA button */}
          <button
            onClick={() => scrollTo("#membership")}
            className="btn-primary hidden lg:inline-flex"
          >
            Mitglied werden
          </button>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden"
            style={{ padding: "8px", color: "var(--charcoal)", background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center" }}
            aria-label="Menü"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* ── Mobile menu overlay ── */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 90,
          background: "rgba(244,241,234,0.98)",
          backdropFilter: "blur(16px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "32px",
          transition: "opacity 0.4s ease",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
        }}
      >
        {navItems.map((item, i) => (
          <button
            key={item.href}
            onClick={() => scrollTo(item.href)}
            className="font-playfair"
            style={{
              fontSize: "1.625rem",
              color: "var(--charcoal)",
              background: "none",
              border: "none",
              cursor: "pointer",
              transition: "color 0.3s ease",
              transitionDelay: `${i * 40}ms`,
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--lilac)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--charcoal)")}
          >
            {item.label}
          </button>
        ))}
        <button onClick={() => scrollTo("#membership")} className="btn-primary" style={{ marginTop: "16px" }}>
          Mitglied werden
        </button>
      </div>
    </>
  );
}
