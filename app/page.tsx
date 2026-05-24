import Hero           from "@/components/Hero";
import About          from "@/components/About";
import Growing        from "@/components/Growing";
import WhyCloudyBento from "@/components/WhyCloudyBento";
import WirSind        from "@/components/WirSind";
import Milestones     from "@/components/Milestones";
import Prevention     from "@/components/Prevention";
import Membership     from "@/components/Membership";
import FAQ            from "@/components/FAQ";
import Location       from "@/components/Location";
import SEOSection     from "@/components/SEOSection";
import News           from "@/components/News";
import Ticker         from "@/components/Ticker";
import ParallaxPanel  from "@/components/ParallaxPanel";
import WhyCloudy from "@/components/WhyCloudy";

export default function Home() {
  return (
    <>
      {/* ── 1. Hero ── */}
      <Hero />

      {/* ── 2. Why Cloudy Club — bento grid ── */}
      <WhyCloudy />
      <WhyCloudyBento />
      <WirSind />
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

      {/* ── 4. Growing — compact quality cards with icons ── */}
      <Growing />

      {/* ── 5. Milestones — alternating timeline ── */}
      <Milestones />

      {/* ── 6. Membership ── */}
      <Membership />

      {/* ── 7. Cinematic break — join CTA ── */}
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

      {/* ── 8. Prevention — Genuss mit Verantwortung ── */}
      <Prevention />

      {/* ── 9. FAQ ── */}
      <FAQ />

      {/* <Location /> */}

      {/* <SEOSection />
      <News /> */}

      {/* ── 13. Ticker ── */}
      <Ticker inverted />
    </>
  );
}
