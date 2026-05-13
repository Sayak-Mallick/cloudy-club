import type { Metadata } from "next";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "FAQ – Cloudy Club Osnabrück",
  description: "Häufig gestellte Fragen zum Cloudy Club: Legalität, Abgabemengen, Aufnahme und mehr – klar und ehrlich beantwortet.",
};

export default function FAQPage() {
  return (
    <div className="page-enter">
      <FAQ />
    </div>
  );
}
