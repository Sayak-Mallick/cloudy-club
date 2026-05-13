import type { Metadata } from "next";
import Growing from "@/components/Growing";

export const metadata: Metadata = {
  title: "Anbau – Cloudy Club Osnabrück",
  description: "Erfahre wie der Cloudy Club Cannabis nachhaltig und transparent anbaut – von der Genetik bis zur Qualitätsprüfung.",
};

export default function GrowingPage() {
  return (
    <div className="page-enter">
      <Growing />
    </div>
  );
}
