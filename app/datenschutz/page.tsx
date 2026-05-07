import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Datenschutz() {
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
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.75rem", color: "var(--charcoal)", fontWeight: 500, marginBottom: "8px" }}>Datenschutzerklärung</h1>
        <div style={{ width: "48px", height: "1px", background: "var(--lilac)", margin: "20px 0 48px" }} />

        <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.9375rem", fontWeight: 300, lineHeight: 1.8, color: "rgba(49,49,47,0.68)" }}>
          {[
            { title: "1. Datenschutz auf einen Blick", text: "Der Schutz deiner persönlichen Daten ist uns wichtig. Diese Datenschutzerklärung informiert dich, welche Daten wir erheben, wie wir sie nutzen und welche Rechte du hast." },
            { title: "2. Verantwortliche Stelle", text: "Cloudy Club Osnabrück e.V., [Adresse], E-Mail: hello@cloudyclub-osnabrueck.de" },
            { title: "3. Erhobene Daten", text: "Beim Besuch unserer Website werden technische Daten (IP-Adresse, Browser, Betriebssystem) erfasst. Mitgliedsdaten werden ausschließlich für Vereinszwecke verarbeitet." },
            { title: "4. Cookies", text: "Wir verwenden technisch notwendige Cookies sowie optionale Analyse-Cookies. Du kannst der Cookie-Nutzung widersprechen." },
            { title: "5. Deine Rechte", text: "Du hast das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung deiner personenbezogenen Daten." },
          ].map((s, i) => (
            <div key={i}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.25rem", color: "var(--charcoal)", fontWeight: 500, marginBottom: "12px", marginTop: "40px" }}>{s.title}</h2>
              <p>{s.text}</p>
            </div>
          ))}
          <p style={{ marginTop: "48px", fontSize: "0.8125rem", color: "rgba(49,49,47,0.38)" }}>
            * Platzhaltertext – vollständige Datenschutzerklärung wird vor dem Launch erstellt.
          </p>
        </div>
      </div>
    </main>
  );
}
