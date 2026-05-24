import type { Metadata } from "next";
import NewsFull from "@/components/NewsFull";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "News – Cloudy Club Osnabrück",
  description: "Aktuelle Neuigkeiten, Events und Ankündigungen des Cloudy Clubs in Osnabrück.",
};

export default function NewsPage() {
  return (
    <div className="page-enter">
      <PageHero
        eyebrow="Aktuelles"
        headline="Neuigkeiten"
        headlineItalic="aus dem Club."
        sub="Alles was im Cloudy Club passiert — Events, Erntenews, Präventionsabende und mehr."
        image="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=2000&q=85"
        imagePosition="center"
        align="center"
        overlayOpacity={0.72}
      />
      <NewsFull />
    </div>
  );
}
