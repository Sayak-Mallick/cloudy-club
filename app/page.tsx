import Hero from "@/components/Hero";
import About from "@/components/About";
import Growing from "@/components/Growing";
import WhyCloudyBento from "@/components/WhyCloudyBento";
import WirSind from "@/components/WirSind";
import StandortHome from "@/components/StandortHome";
import Milestones from "@/components/Milestones";
import Prevention from "@/components/Prevention";
import MembershipHome from "@/components/MembershipHome";
import FAQ from "@/components/FAQ";
import Location from "@/components/Location";
import SEOSection from "@/components/SEOSection";
import News from "@/components/News";
import Ticker from "@/components/Ticker";
import ParallaxPanel from "@/components/ParallaxPanel";
import WhyCloudy from "@/components/WhyCloudy";

export default function Home() {
  return (
    <>
      <Hero />
      <WirSind />
      <WhyCloudy />
      <Ticker />
      <Growing />
      <WhyCloudyBento />
      <MembershipHome />
      <Ticker inverted />
      <Prevention />
      <FAQ />
      <StandortHome />
      <SEOSection />
      <News />
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
      <Ticker inverted />
    </>
  );
}
