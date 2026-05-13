import type { Metadata } from "next";
import News from "@/components/News";

export const metadata: Metadata = {
  title: "News – Cloudy Club Osnabrück",
  description: "Aktuelle Neuigkeiten, Events und Ankündigungen des Cloudy Clubs in Osnabrück.",
};

export default function NewsPage() {
  return (
    <div className="page-enter">
      <News />
    </div>
  );
}
