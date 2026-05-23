import type { Metadata } from "next";
import FAQ          from "@/components/FAQ";
import ParallaxPanel from "@/components/ParallaxPanel";
import PageHero      from "@/components/PageHero";

export const metadata: Metadata = {
  title: "FAQ – Cloudy Club Osnabrück",
  description: "Häufig gestellte Fragen zum Cloudy Club: Legalität, Abgabemengen, Aufnahme und mehr – klar und ehrlich beantwortet.",
};

export default function FAQPage() {
  return (
    <div className="page-enter">
      <PageHero
        eyebrow="FAQ"
        headline="Häufige Fragen."
        headlineItalic="Klare Antworten."
        sub="Alles, was du über den Cloudy Club wissen möchtest — klar, ehrlich und ohne Fachchinesisch."
        image="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=2000&q=85"
        imagePosition="center"
        align="left"
        overlayOpacity={0.78}
      />
      <FAQ />
      <ParallaxPanel
        image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=2000&q=80"
        eyebrow="Noch Fragen?"
        headline="Wir helfen"
        headlineItalic="gerne weiter."
        sub="Schreib uns direkt — wir antworten in der Regel innerhalb von 24 Stunden."
        align="center"
        overlayOpacity={0.68}
        cta={{ label: "Mitglied werden", href: "/membership" }}
        height="60vh"
      />
    </div>
  );
}
