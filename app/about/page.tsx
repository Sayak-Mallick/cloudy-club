import type { Metadata } from "next";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "Über uns – Cloudy Club Osnabrück",
  description: "Lerne den Cloudy Club kennen – wer wir sind, was uns antreibt und warum Gemeinschaft, Sicherheit und Offenheit unsere drei Säulen sind.",
};

export default function AboutPage() {
  return (
    <div className="page-enter">
      <About />
    </div>
  );
}
