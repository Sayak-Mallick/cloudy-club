import type { Metadata } from "next";
import Location from "@/components/Location";
import PageHero  from "@/components/PageHero";

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
        sub="Zentral gelegen und optimal erreichbar. Dein Cannabis Social Club für Osnabrück und die gesamte Region."
        image="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=2000&q=85"
        imagePosition="center"
        align="center"
        overlayOpacity={0.72}
      />
      <Location />
    </div>
  );
}
