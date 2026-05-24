import type { Metadata } from "next";
import FAQFull   from "@/components/FAQFull";
import PageHero  from "@/components/PageHero";

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
        align="center"
        overlayOpacity={0.78}
      />
      <FAQFull />
    </div>
  );
}
