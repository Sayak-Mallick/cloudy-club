import type { Metadata } from "next";
import News         from "@/components/News";
import ParallaxPanel from "@/components/ParallaxPanel";
import PageHero      from "@/components/PageHero";

export const metadata: Metadata = {
  title: "News – Cloudy Club Osnabrück",
  description: "Aktuelle Neuigkeiten, Events und Ankündigungen des Cloudy Clubs in Osnabrück.",
};

export default function NewsPage() {
  return (
    <div className="page-enter">
      <PageHero
        eyebrow="Aktuelles"
        headline="Neuigkeiten"
        headlineItalic="aus dem Club."
        sub="Alles was im Cloudy Club passiert — Events, Erntenews, Präventionsabende und mehr."
        image="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=2000&q=85"
        imagePosition="center"
        align="left"
        overlayOpacity={0.72}
      />
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
        height="60vh"
      />
    </div>
  );
}
