import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

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
      <body className="antialiased">
        <Navbar />
        <main style={{ paddingTop: "72px" }}>
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
