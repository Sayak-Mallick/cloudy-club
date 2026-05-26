import type { Metadata } from "next";
import Prevention from "@/components/Prevention";
import PageHero   from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Prävention – Cloudy Club Osnabrück",
  description: "Prävention und Aufklärung: Wie der Cloudy Club verantwortungsvollen Cannabis-Konsum fördert und seine Mitglieder informiert.",
};

export default function PreventionPage() {
  return (
    <div className="page-enter">
      <PageHero
        eyebrow="Prävention & Schutz"
        headline="Verantwortung als"
        headlineItalic="Fundament"
        sub="Jugendschutz und Gesundheit stehen an erster Stelle. Wir fördern einen bewussten Umgang mit Cannabis und bieten umfassende Unterstützung."
        image="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=2000&q=85"
        imagePosition="center"
        align="center"
        overlayOpacity={0.72}
      />
      <Prevention />
    </div>
  );
}
