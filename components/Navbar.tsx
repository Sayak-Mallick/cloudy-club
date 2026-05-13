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
  EN: "Become a member",
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
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 }
    );

    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const toggleLang = () => setLang(prev => (prev === "DE" ? "EN" : "DE"));

  const LangSwitch = () => (
    <button
      onClick={toggleLang}
      aria-label="Toggle language"
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        width: "64px",
        height: "28px",
        borderRadius: "999px",
        border: "1.5px solid rgba(192,175,211,0.35)",
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
          left: lang === "DE" ? "2px" : "calc(100% - 32px - 2px)",
          width: "32px",
          height: "20px",
          borderRadius: "999px",
          background: "var(--lilac)",
          transition: "left 0.3s cubic-bezier(0.4,0,0.2,1)",
        }}
      />
      {(["DE", "EN"] as Lang[]).map(l => (
        <span
          key={l}
          className="font-montserrat"
          style={{
            position: "relative",
            width: "32px",
            textAlign: "center",
            fontSize: "0.625rem",
            letterSpacing: "0.12em",
            fontWeight: 700,
            color: lang === l ? "var(--bg)" : "var(--lilac)",
            transition: "color 0.3s ease",
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
          transition: "background 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease",
          background: scrolled
            ? "rgba(19,19,17,0.92)"
            : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(192,175,211,0.1)"
            : "1px solid transparent",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "32px",
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "12px", flexShrink: 0, textDecoration: "none" }}>
            <svg width="36" height="36" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="47" fill="none" stroke="#C0AFD3" strokeWidth="2.5" />
              <ellipse cx="50" cy="58" rx="27" ry="17" fill="#C0AFD3" opacity="0.55" />
              <ellipse cx="37" cy="53" rx="19" ry="15" fill="#C0AFD3" opacity="0.75" />
              <ellipse cx="63" cy="55" rx="17" ry="13" fill="#C0AFD3" opacity="0.65" />
              <ellipse cx="50" cy="46" rx="15" ry="13" fill="#C0AFD3" opacity="0.45" />
              <ellipse cx="42" cy="40" rx="9" ry="8" fill="#C0AFD3" opacity="0.35" />
            </svg>
            <div style={{ lineHeight: 1 }}>
              <div className="font-playfair" style={{ fontSize: "0.9375rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--cream)", lineHeight: 1.1 }}>Cloudy</div>
              <div className="font-montserrat" style={{ fontSize: "0.5625rem", letterSpacing: "0.38em", textTransform: "uppercase", color: "var(--lilac)", marginTop: "3px" }}>Club</div>
            </div>
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center gap-7 list-none m-0 p-0">
            {navItems.map(item => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`nav-link ${isActive ? "active" : ""}`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right: lang + CTA */}
          <div className="hidden lg:flex items-center gap-5" style={{ flexShrink: 0 }}>
            <LangSwitch />
            <Link href="/membership" className="btn-primary" style={{ height: "40px", fontSize: "0.625rem" }}>
              {ctaLabel[lang]}
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center p-2 lg:hidden"
            style={{ color: "var(--cream)", background: "none", border: "none", cursor: "pointer" }}
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
          background: "rgba(19,19,17,0.97)",
          backdropFilter: "blur(20px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          paddingTop: "72px",
          transition: "opacity 0.4s ease, pointer-events 0s",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
        }}
      >
        {navItems.map((item, i) => (
          <Link
            key={item.href}
            href={item.href}
            className="font-playfair"
            style={{
              fontSize: "2rem",
              color: pathname === item.href ? "var(--lilac)" : "var(--cream)",
              textDecoration: "none",
              transition: "color 0.3s ease",
              transitionDelay: `${i * 40}ms`,
              padding: "12px 24px",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--lilac)")}
            onMouseLeave={e => (e.currentTarget.style.color = pathname === item.href ? "var(--lilac)" : "var(--cream)")}
          >
            {item.label}
          </Link>
        ))}

        <div style={{ marginTop: "24px", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
          <LangSwitch />
          <Link href="/membership" className="btn-primary" style={{ marginTop: "8px" }}>
            {ctaLabel[lang]}
          </Link>
        </div>
      </div>
    </>
  );
}