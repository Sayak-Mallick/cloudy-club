import type { Metadata } from "next";
import Membership from "@/components/Membership";

export const metadata: Metadata = {
  title: "Mitgliedschaft – Cloudy Club Osnabrück",
  description: "Werde Mitglied im Cloudy Club Osnabrück. Alle Infos zu Kosten, Vorteilen und Voraussetzungen für eine Mitgliedschaft.",
};

export default function MembershipPage() {
  return (
    <div className="page-enter">
      <Membership />
    </div>
  );
}
