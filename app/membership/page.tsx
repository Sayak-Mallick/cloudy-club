import type { Metadata } from "next";
import Membership from "@/components/Membership";
import PageHero   from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Mitgliedschaft – Cloudy Club Osnabrück",
  description: "Werde Mitglied im Cloudy Club Osnabrück. Alle Infos zu Kosten, Vorteilen und Voraussetzungen für eine Mitgliedschaft.",
};

export default function MembershipPage() {
  return (
    <div className="page-enter">
      <PageHero
        eyebrow="Mitgliedschaft"
        headline="Werde Teil der"
        headlineItalic="Community"
        sub="Sichere dir deinen Platz im Cloudy Club Osnabrück. Die Plätze sind gesetzlich limitiert — handle jetzt."
        image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=2000&q=85"
        imagePosition="center"
        align="center"
        overlayOpacity={0.72}
      />
      <Membership />
    </div>
  );
}
