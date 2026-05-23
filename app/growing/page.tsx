import type { Metadata } from "next";
import Growing       from "@/components/Growing";
import ParallaxPanel from "@/components/ParallaxPanel";
import PageHero      from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Anbau – Cloudy Club Osnabrück",
  description: "Erfahre wie der Cloudy Club Cannabis nachhaltig und transparent anbaut – von der Genetik bis zur Qualitätsprüfung.",
};

export default function GrowingPage() {
  return (
    <div className="page-enter">
      <PageHero
        eyebrow="Unser Anbau"
        headline="Von der Saat"
        headlineItalic="zur Qualität."
        sub="Vereinseigener Anbau ohne Kompromisse — kontrolliert, nachhaltig und vollständig transparent für unsere Mitglieder."
        image="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=2000&q=85"
        imagePosition="center"
        align="left"
        overlayOpacity={0.68}
      />
      <Growing />
      <ParallaxPanel
        image="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=2000&q=80"
        eyebrow="Anbau & Qualität"
        headline="Transparenz in"
        headlineItalic="jeder Ernte."
        sub="Jede Charge wird geprüft, dokumentiert und im Mitgliederbereich veröffentlicht. Keine Geheimnisse."
        align="center"
        overlayOpacity={0.65}
        cta={{ label: "Mitglied werden", href: "/membership" }}
        height="65vh"
      />
    </div>
  );
}
