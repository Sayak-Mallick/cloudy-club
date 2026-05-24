import type { Metadata } from "next";
import Membership    from "@/components/Membership";
import ParallaxPanel from "@/components/ParallaxPanel";
import PageHero      from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Mitgliedschaft – Cloudy Club Osnabrück",
  description: "Werde Mitglied im Cloudy Club Osnabrück. Alle Infos zu Kosten, Vorteilen und Voraussetzungen für eine Mitgliedschaft.",
};

export default function MembershipPage() {
  return (
    <div className="page-enter">
      <PageHero
        eyebrow="Mitgliedschaft"
        headline="Werde Teil"
        headlineItalic="des Clubs."
        sub="Transparent, fair und unkompliziert. Hier findest du alles, was du über eine Mitgliedschaft im Cloudy Club wissen musst."
        image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=2000&q=85"
        imagePosition="center"
        align="center"
        overlayOpacity={0.72}
        cta={{ label: "Jetzt bewerben", href: "#cannanas-embed" }}
      />
      <Membership />
      <ParallaxPanel
        image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=2000&q=80"
        eyebrow="Unsere Community"
        headline="Du bist nicht allein,"
        headlineItalic="du bist dabei."
        sub="Hinter jedem Mitglied steht eine echte Gemeinschaft. Events, Workshops und echter Austausch — das ist der Cloudy Club."
        align="center"
        overlayOpacity={0.68}
        height="65vh"
      />
    </div>
  );
}
