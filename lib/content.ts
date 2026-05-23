/**
 * ─── Shared Content Config ───────────────────────────────────────────────────
 * "Blue star" data: edit here → updates everywhere at once.
 * Import from any page or component.
 */

// ── Club identity ──────────────────────────────────────────────────────────────
export const CLUB = {
  name:       "Cloudy Club",
  fullName:   "Cloudy Club Osnabrück e.V.",
  tagline:    "Dein Zuhause für gemeinsamen Anbau und verantwortungsvollen Konsum in Osnabrück.",
  city:       "Osnabrück",
  state:      "Niedersachsen",
  founded:    "2024",
  legalForm:  "e.V.",
};

// ── Contact ────────────────────────────────────────────────────────────────────
export const CONTACT = {
  email:   "hello@cloudyclub-osnabrueck.de",
  phone:   "+49 (0)541 · 000 0000",
  address: "Adresse wird nach Aufnahme bekannt gegeben",
  instagram: "https://instagram.com/cloudyclub_os",
};

// ── Key stats (hero bar + shared anywhere) ────────────────────────────────────
export const CLUB_STATS = [
  { value: "50g",   label: "monatl. Abgabe",       sub: "Für Mitglieder ab 21" },
  { value: "§CanG", label: "100 % legal & konform", sub: "Konsumcannabisgesetz" },
  { value: "18+",   label: "Mindestalter",           sub: "Für alle Mitglieder" },
];

// ── Compliance facts (Prevention + anywhere) ──────────────────────────────────
export const COMPLIANCE_FACTS = [
  { value: "18+",   label: "Mindestalter für alle Mitglieder",  detail: "Kein Zugang für Minderjährige – ohne Ausnahme." },
  { value: "0‰",    label: "Konsum im Straßenverkehr",          detail: "Fahren unter Cannabis-Einfluss ist verboten." },
  { value: "§CanG", label: "Vollständig legal & konform",       detail: "Betrieb nach Konsumcannabisgesetz (KCanG)." },
];

// ── Membership pricing ────────────────────────────────────────────────────────
export const MEMBERSHIP = {
  monthly:      25,   // € / Monat
  signup:       50,   // € Aufnahmegebühr
  maxMonthly21: 50,   // g / Monat für 21+
  maxMonthly18: 30,   // g / Monat für 18-20
};

// ── Opening hours ─────────────────────────────────────────────────────────────
export const HOURS = [
  { day: "Mo – Do", time: "16:00 – 20:00" },
  { day: "Freitag", time: "14:00 – 22:00" },
  { day: "Samstag", time: "12:00 – 22:00" },
  { day: "Sonntag", time: "Geschlossen"   },
];

// ── Nearby cities / SEO grid ──────────────────────────────────────────────────
export const NEARBY_CITIES = [
  "Cannabis Club Rethen",
  "Cannabis Club Georgsmarienhütte",
  "Cannabis Club Westerkotte",
  "Cannabis Club Lotte",
  "Cannabis Club Hasbergen",
  "Cannabis Club Bissendorf",
  "Cannabis Club Hagen am Teutoburger Wald",
  "Cannabis Club Bar Berg",
  "Cannabis Club Bramsche",
  "Cannabis Club Dissen",
  "Cannabis Club Bad Essen",
  "Cannabis Club Melle",
  "Cannabis Club Lüggede",
  "Cannabis Club Wallenhorst",
  "Cannabis Club Georgsdorf",
];
