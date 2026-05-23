import type { Metadata } from "next";
import About        from "@/components/About";
import WhyCloudy    from "@/components/WhyCloudy";
import ParallaxPanel from "@/components/ParallaxPanel";
import PageHero     from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Über uns – Cloudy Club Osnabrück",
  description: "Lerne den Cloudy Club kennen – wer wir sind, was uns antreibt und warum Gemeinschaft, Sicherheit und Offenheit unsere drei Säulen sind.",
};

export default function AboutPage() {
  return (
    <div className="page-enter">
      <PageHero
        eyebrow="Über uns"
        headline="Mehr als ein Club —"
        headlineItalic="eine Gemeinschaft."
        sub="Wir sind ein eingetragener Cannabis Social Club in Osnabrück. Transparent, offen und mit echter Leidenschaft für Qualität und Gemeinschaft."
        image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=2000&q=85"
        imagePosition="center top"
        align="left"
        overlayOpacity={0.72}
      />
      <About />
      <WhyCloudy />
      <ParallaxPanel
        image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=2000&q=80"
        eyebrow="Mitglied werden"
        headline="Bereit für den"
        headlineItalic="Cloudy Club?"
        sub="Werde Teil einer Gemeinschaft, die Cannabis anders denkt. Sicher, transparent, zusammen."
        align="center"
        overlayOpacity={0.68}
        cta={{ label: "Jetzt bewerben", href: "/membership" }}
        height="70vh"
      />
    </div>
  );
}
