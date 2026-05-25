import Hero           from "@/components/Hero";
import About          from "@/components/About";
import Growing        from "@/components/Growing";
import WhyCloudyBento from "@/components/WhyCloudyBento";
import WirSind        from "@/components/WirSind";
import StandortHome   from "@/components/StandortHome";
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
      <Hero />
      <WirSind />
      <Growing />
      <WhyCloudyBento />
      <Membership />
      <Prevention />
      <FAQ />
      <StandortHome />
      <WhyCloudy />
      <About /> 
      <ParallaxPanel
        image="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=2000&q=80"
        eyebrow="Unsere Mission"
        headline="Gemeinsam sicher,"
        headlineItalic="gemeinsam besser."
        sub="Der Cloudy Club steht für einen neuen Standard im verantwortungsvollen Umgang mit Cannabis — offen, ehrlich und in echter Gemeinschaft."
        align="center"
        overlayOpacity={0.58}
      />
      <Milestones />
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
      {/* <SEOSection />
      <News /> */}
      <Ticker inverted />
    </>
  );
}
