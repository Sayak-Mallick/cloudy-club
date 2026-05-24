import type { Metadata } from "next";
import Prevention    from "@/components/Prevention";
import ParallaxPanel from "@/components/ParallaxPanel";
import PageHero      from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Prävention – Cloudy Club Osnabrück",
  description: "Prävention und Aufklärung: Wie der Cloudy Club verantwortungsvollen Cannabis-Konsum fördert und seine Mitglieder informiert.",
};

export default function PreventionPage() {
  return (
    <div className="page-enter">
      <PageHero
        eyebrow="Prävention"
        headline="Genuss mit"
        headlineItalic="Verantwortung."
        sub="Informierter Konsum ist kein Pflichtprogramm — er ist gelebte Vereinskultur. Wir klären auf, ohne zu urteilen."
        image="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=2000&q=85"
        imagePosition="center"
        align="center"
        overlayOpacity={0.72}
      />
      <Prevention />
      <ParallaxPanel
        image="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=2000&q=80"
        eyebrow="Gemeinschaft & Sicherheit"
        headline="Gemeinsam sicher,"
        headlineItalic="gemeinsam besser."
        sub="Der Cloudy Club steht für einen neuen Standard im verantwortungsvollen Umgang mit Cannabis — offen, ehrlich und in echter Gemeinschaft."
        align="center"
        overlayOpacity={0.62}
        cta={{ label: "Mehr über uns", href: "/about" }}
        height="65vh"
      />
    </div>
  );
}
