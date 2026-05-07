import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Impressum() {
  return (
    <main style={{ minHeight: "100vh", padding: "120px 40px 80px", background: "var(--cream)" }}>
      <div style={{ maxWidth: "680px", margin: "0 auto" }}>
        <Link
          href="/"
          style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            fontFamily: "Montserrat, sans-serif", fontSize: "0.6875rem", letterSpacing: "0.16em",
            textTransform: "uppercase", color: "rgba(49,49,47,0.5)", textDecoration: "none",
            marginBottom: "56px", transition: "color 0.3s ease",
          }}
        >
          <ArrowLeft size={14} /> Zurück
        </Link>

        <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.6875rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--sage)", marginBottom: "16px" }}>Rechtliches</p>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.75rem", color: "var(--charcoal)", fontWeight: 500, marginBottom: "8px" }}>Impressum</h1>
        <div style={{ width: "48px", height: "1px", background: "var(--lilac)", margin: "20px 0 48px" }} />

        <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.9375rem", fontWeight: 300, lineHeight: 1.8, color: "rgba(49,49,47,0.68)" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.25rem", color: "var(--charcoal)", fontWeight: 500, marginBottom: "12px", marginTop: "40px" }}>Angaben gemäß § 5 TMG</h2>
          <p>Cloudy Club Osnabrück e.V.<br />[Straße und Hausnummer]<br />49[xxx] Osnabrück</p>

          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.25rem", color: "var(--charcoal)", fontWeight: 500, marginBottom: "12px", marginTop: "40px" }}>Kontakt</h2>
          <p>E-Mail: hello@cloudyclub-osnabrueck.de<br />Telefon: [wird ergänzt]</p>

          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.25rem", color: "var(--charcoal)", fontWeight: 500, marginBottom: "12px", marginTop: "40px" }}>Vereinsregister</h2>
          <p>Eingetragen beim Amtsgericht Osnabrück<br />Vereinsregisternummer: [wird ergänzt]</p>

          <p style={{ marginTop: "48px", fontSize: "0.8125rem", color: "rgba(49,49,47,0.38)" }}>
            * Platzhaltertext – vollständiges Impressum wird vor dem Launch ergänzt.
          </p>
        </div>
      </div>
    </main>
  );
}
