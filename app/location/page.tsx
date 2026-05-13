import type { Metadata } from "next";
import Location from "@/components/Location";

export const metadata: Metadata = {
  title: "Standort – Cloudy Club Osnabrück",
  description: "Finde den Cloudy Club in Osnabrück. Öffnungszeiten, Anfahrt und alle wichtigen Informationen zu unserem Standort.",
};

export default function LocationPage() {
  return (
    <div className="page-enter">
      <Location />
    </div>
  );
}
