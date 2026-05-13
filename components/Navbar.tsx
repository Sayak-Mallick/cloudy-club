"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { Menu, X } from "lucide-react";

type Lang = "DE" | "EN";

const navItemsMap: Record<Lang, { label: string; href: string }[]> = {
  DE: [
    { label: "Home",           href: "/" },
    { label: "Über uns",       href: "/about" },
    { label: "Anbau",          href: "/growing" },
    { label: "Prävention",     href: "/prevention" },
    { label: "Mitgliedschaft", href: "/membership" },
    { label: "FAQ",            href: "/faq" },
    { label: "Standort",       href: "/location" },
    { label: "News",           href: "/news" },
  ],
  EN: [
    { label: "Home",           href: "/" },
    { label: "About",          href: "/about" },
    { label: "Growing",        href: "/growing" },
    { label: "Prevention",     href: "/prevention" },
    { label: "Membership",     href: "/membership" },
    { label: "FAQ",            href: "/faq" },
    { label: "Location",       href: "/location" },
    { label: "News",           href: "/news" },
  ],
};

const ctaLabel: Record<Lang, string> = {
  DE: "Mitglied werden",
  EN: "Become a Member",
};

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState<Lang>("DE");
  const pathname = usePathname();

  const navItems = navItemsMap[lang];

  useEffect(() => {
    gsap.fromTo(navRef.current,
      { y: -64, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", delay: 0.15 }
    );

    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const toggleLang = () => setLang(prev => (prev === "DE" ? "EN" : "DE"));

  const LangSwitch = () => (
    <button
      onClick={toggleLang}
      role="switch"
      aria-checked={lang === "EN"}
      aria-label="Toggle language"
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        width: "60px",
        height: "26px",
        borderRadius: "999px",
        border: "1px solid rgba(192,175,211,0.3)",
        background: "transparent",
        cursor: "pointer",
        padding: 0,
        flexShrink: 0,
        overflow: "hidden",
      }}
    >
      <span
        style={{
          position: "absolute",
          top: "2px",
          left: lang === "DE" ? "2px" : "calc(100% - 30px - 2px)",
          width: "30px",
          height: "18px",
          borderRadius: "999px",
          background: "var(--lilac)",
          transition: "left 0.22s cubic-bezier(0.4,0,0.2,1)",
        }}
      />
      {(["DE", "EN"] as Lang[]).map(l => (
        <span
          key={l}
          style={{
            position: "relative",
            width: "30px",
            textAlign: "center",
            fontSize: "10px",
            letterSpacing: "0.1em",
            fontWeight: 700,
            fontFamily: "Montserrat, sans-serif",
            color: lang === l ? "var(--bg)" : "var(--lilac)",
            transition: "color 0.22s ease",
            userSelect: "none",
            zIndex: 1,
          }}
        >
          {l}
        </span>
      ))}
    </button>
  );

  return (
    <>
      {/* ── Main nav bar ── */}
      <nav
        ref={navRef}
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 100,
          height: "64px",
          display: "flex",
          alignItems: "center",
          transition: "background 0.3s ease, border-color 0.3s ease",
          background: scrolled ? "rgba(19,19,17,0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        }}
      >
        <div style={{
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "24px",
        }}>
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0, textDecoration: "none" }}>
            <svg width="32" height="32" viewBox="0 0 100 100" aria-hidden="true">
              <circle cx="50" cy="50" r="47" fill="none" stroke="#C0AFD3" strokeWidth="2.5" />
              <ellipse cx="50" cy="58" rx="27" ry="17" fill="#C0AFD3" opacity="0.55" />
              <ellipse cx="37" cy="53" rx="19" ry="15" fill="#C0AFD3" opacity="0.75" />
              <ellipse cx="63" cy="55" rx="17" ry="13" fill="#C0AFD3" opacity="0.65" />
              <ellipse cx="50" cy="46" rx="15" ry="13" fill="#C0AFD3" opacity="0.45" />
              <ellipse cx="42" cy="40" rx="9" ry="8" fill="#C0AFD3" opacity="0.35" />
            </svg>
            <div style={{ lineHeight: 1 }}>
              <div className="font-playfair" style={{ fontSize: "0.875rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--cream)", lineHeight: 1.1 }}>Cloudy</div>
              <div className="font-montserrat" style={{ fontSize: "0.5rem", letterSpacing: "0.38em", textTransform: "uppercase", color: "var(--lilac)", marginTop: "3px" }}>Club</div>
            </div>
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center list-none m-0 p-0" style={{ gap: "28px" }}>
            {navItems.map(item => (
              <li key={item.href}>
                <Link href={item.href} className={`nav-link ${pathname === item.href ? "active" : ""}`}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right: lang + CTA */}
          <div className="hidden lg:flex items-center" style={{ gap: "16px", flexShrink: 0 }}>
            <LangSwitch />
            <Link href="/membership" className="btn-primary">
              {ctaLabel[lang]}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(v => !v)}
            className="flex lg:hidden"
            style={{ color: "var(--cream)", background: "none", border: "none", cursor: "pointer", padding: "8px", marginRight: "-8px" }}
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* ── Dim overlay ── */}
      <div
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 95,
          background: "rgba(0,0,0,0.6)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "opacity 0.3s ease",
        }}
      />

      {/* ── Right-side drawer ── */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: 96,
          width: "280px",
          background: "var(--bg-elevated)",
          borderLeft: "1px solid var(--border)",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
          paddingTop: "64px",
        }}
      >
        <nav>
          {navItems.map(item => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                display: "flex",
                alignItems: "center",
                height: "52px",
                padding: "0 24px",
                borderBottom: "1px solid var(--border)",
                color: pathname === item.href ? "var(--lilac)" : "var(--text-secondary)",
                textDecoration: "none",
                fontFamily: "Montserrat, sans-serif",
                fontSize: "13px",
                fontWeight: pathname === item.href ? 600 : 500,
                letterSpacing: "0.05em",
                transition: "color 0.2s ease",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "16px", marginTop: "auto" }}>
          <LangSwitch />
          <Link href="/membership" className="btn-primary" style={{ justifyContent: "center" }}>
            {ctaLabel[lang]}
          </Link>
        </div>
      </div>
    </>
  );
}
