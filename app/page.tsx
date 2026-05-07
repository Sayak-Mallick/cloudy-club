import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Growing from "@/components/Growing";
import Prevention from "@/components/Prevention";
import Membership from "@/components/Membership";
import FAQ from "@/components/FAQ";
import Location from "@/components/Location";
import News from "@/components/News";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Growing />
        <Prevention />
        <Membership />
        <FAQ />
        <Location />
        <News />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
