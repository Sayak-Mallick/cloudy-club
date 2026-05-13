import Hero        from "@/components/Hero";
import About       from "@/components/About";
import Growing     from "@/components/Growing";
import News        from "@/components/News";
import Membership  from "@/components/Membership";
import Prevention  from "@/components/Prevention";
import FAQ         from "@/components/FAQ";
import Location    from "@/components/Location";
import Ticker      from "@/components/Ticker";
import ParallaxPanel from "@/components/ParallaxPanel";

export default function Home() {
  return (
    <>
      {/* ── 1. Hero ── */}
      <Hero />

      {/* ── 2. About ── */}
      <About />

      {/* ── 3. Cinematic break — community quote ── */}
      <ParallaxPanel
        image="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=2000&q=80"
        eyebrow="Unsere Mission"
        headline="Gemeinsam sicher,"
        headlineItalic="gemeinsam besser."
        sub="Der Cloudy Club steht für einen neuen Standard im verantwortungsvollen Umgang mit Cannabis — offen, ehrlich und in echter Gemeinschaft."
        align="center"
        overlayOpacity={0.58}
      />

      {/* ── 4. Growing process ── */}
      <Growing />

      {/* ── 5. Cinematic break — growth quote ── */}
      <ParallaxPanel
        image="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=2000&q=80"
        eyebrow="Anbau & Qualität"
        headline="Von der Saat"
        headlineItalic="zur Perfektion."
        sub="Vereinseigener Anbau ohne Kompromisse. Transparente Qualität, die du siehst, riechst und fühlst."
        align="left"
        overlayOpacity={0.65}
      />

      {/* ── 6. Prevention ── */}
      <Prevention />

      {/* ── 7. News — horizontal scroll ── */}
      <News />

      {/* ── 8. Ticker ── */}
      <Ticker inverted />

      {/* ── 9. Membership ── */}
      <Membership />

      {/* ── 10. Cinematic break — join CTA ── */}
      <ParallaxPanel
        image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=2000&q=80"
        eyebrow="Mitglied werden"
        headline="Bereit für den"
        headlineItalic="Cloudy Club?"
        sub="Werde Teil einer Gemeinschaft, die Cannabis anders denkt. Sicher, transparent, zusammen."
        align="center"
        overlayOpacity={0.68}
        cta={{ label: "Jetzt bewerben", href: "/membership" }}
      />

      {/* ── 11. FAQ ── */}
      <FAQ />

      {/* ── 12. Location ── */}
      <Location />
    </>
  );
}
