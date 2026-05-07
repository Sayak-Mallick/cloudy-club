import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cloudy Club – Cannabis Social Club Osnabrück",
  description:
    "Cloudy Club ist dein Cannabis Social Club in Osnabrück. Transparente Mitgliedschaft, verantwortungsvoller Anbau und eine einladende Community.",
  keywords: "Cannabis Social Club, Osnabrück, Cloudy Club, Mitgliedschaft",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
