import type { Metadata } from "next";
import GrowingFull from "@/components/GrowingFull";
import PageHero    from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Anbau – Cloudy Club Osnabrück",
  description: "Erfahre wie der Cloudy Club Cannabis nachhaltig und transparent anbaut – von der Genetik bis zur Qualitätsprüfung.",
};

export default function GrowingPage() {
  return (
    <div className="page-enter">
      <PageHero
        eyebrow="Anbau"
        headline="Qualität durch"
        headlineItalic="Hingabe."
        sub="Cannabis ist für uns kein Massenprodukt, sondern ein Kulturgut. In unserer modernen Anlage verbinden wir pharmazeutische Präzision mit traditioneller Handwerkskunst."
        image="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=2000&q=85"
        imagePosition="center"
        align="center"
        overlayOpacity={0.68}
      />
      <GrowingFull />
    </div>
  );
}
