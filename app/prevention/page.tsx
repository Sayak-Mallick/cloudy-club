import type { Metadata } from "next";
import Prevention from "@/components/Prevention";
import PageHero   from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Prävention – Cloudy Club Osnabrück",
  description: "Prävention und Aufklärung: Wie der Cloudy Club verantwortungsvollen Cannabis-Konsum fördert und seine Mitglieder informiert.",
};

const headerImage = "/assets/Prävention.png";

export default function PreventionPage() {
  return (
    <div className="page-enter">
      <PageHero
        eyebrow="Prävention & Schutz"
        headline="Verantwortung als"
        headlineItalic="Fundament"
        sub="Jugendschutz und Gesundheit stehen an erster Stelle. Wir fördern einen bewussten Umgang mit Cannabis und bieten umfassende Unterstützung."
        image={headerImage}
        imagePosition="center"
        align="center"
        overlayOpacity={0.72}
      />
      <Prevention />
    </div>
  );
}
