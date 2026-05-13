import type { Metadata } from "next";
import Prevention from "@/components/Prevention";

export const metadata: Metadata = {
  title: "Prävention – Cloudy Club Osnabrück",
  description: "Prävention und Aufklärung: Wie der Cloudy Club verantwortungsvollen Cannabis-Konsum fördert und seine Mitglieder informiert.",
};

export default function PreventionPage() {
  return (
    <div className="page-enter">
      <Prevention />
    </div>
  );
}
