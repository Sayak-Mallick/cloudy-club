import type { Metadata } from "next";
import Location     from "@/components/Location";
import ParallaxPanel from "@/components/ParallaxPanel";
import PageHero      from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Standort – Cloudy Club Osnabrück",
  description: "Finde den Cloudy Club in Osnabrück. Öffnungszeiten, Anfahrt und alle wichtigen Informationen zu unserem Standort.",
};

export default function LocationPage() {
  return (
    <div className="page-enter">
      <PageHero
        eyebrow="Standort"
        headline="Mitten in"
        headlineItalic="Osnabrück."
        sub="Unser Club befindet sich im Herzen von Osnabrück. Genaue Adresse erhältst du nach deiner Aufnahme."
        image="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=2000&q=85"
        imagePosition="center"
        align="left"
        overlayOpacity={0.72}
      />
      <Location />
      <ParallaxPanel
        image="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=2000&q=80"
        eyebrow="Mitglied werden"
        headline="Bereit für den"
        headlineItalic="Cloudy Club?"
        sub="Beantrage jetzt deine Mitgliedschaft und erhalte Zugang zu unserem Standort und allen Leistungen."
        align="center"
        overlayOpacity={0.68}
        cta={{ label: "Jetzt bewerben", href: "/membership" }}
        height="60vh"
      />
    </div>
  );
}
