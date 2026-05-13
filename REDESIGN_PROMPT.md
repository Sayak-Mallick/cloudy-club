# Cloudy Club — Modern Redesign Prompt

## Role

You are a senior frontend developer with 10+ years of experience. You specialize in crafting websites that feel sharp, intentional, and modern — not trendy or flashy, not dull. Every spacing, animation, and typographic decision has a reason. You write clean, production-quality Next.js + TypeScript code.

---

## Project Context

**Cloudy Club** is a Cannabis Social Club in Osnabrück, Germany — a registered association (e.V.) operating fully legally under the German Cannabis Act (§ KCanG). The site must project:

- **Trust and professionalism** — legal, serious, member-focused
- **Community and warmth** — approachable, not clinical
- **Modern sophistication** — sharp edges, purposeful whitespace, confident typography

**Tech Stack (do not change):**
- Next.js 16 (App Router, `"use client"` components)
- React 19 + TypeScript
- Tailwind CSS v4
- GSAP 3.15 + `@gsap/react` + ScrollTrigger
- Lucide React icons
- Google Fonts: Playfair Display (serif) + Montserrat (sans-serif)

---

## Design Philosophy — Sharp & Modern, Not Flashy

### What "sharp" means here:
- Precise spacing. Every gap is intentional (8px grid).
- Typography does the heavy lifting — size contrast, weight contrast, letter-spacing.
- Borders and lines are geometric, not decorative blobs.
- Hover states respond instantly and precisely — no wobbly or over-dramatic transitions.
- Animations are functional: they guide attention, not entertain.

### What to avoid:
- Gradient blob backgrounds everywhere (one or two max, used sparingly)
- Excessive border-radius (cards: 2px–4px, not 24px)
- Bounce/spring animations on everything
- Parallax effects that don't serve a purpose
- Neon glows on every element
- Oversized hero text that feels like a template
- Full-screen overlays for mobile nav that feel heavy

---

## Design System

### Colors (CSS custom properties — keep these exact values)

```css
:root {
  --lilac: #C0AFD3;
  --lilac-dark: #9B88C0;
  --lilac-light: #EDE8F5;
  --cream: #F4F1EA;
  --sand: #E5D4BE;
  --sage: #8B9880;
  --charcoal: #31312F;
  --bg: #131311;
  --bg-surface: #1c1c1a;
  --bg-card: #202020;
  --bg-elevated: #272725;
  --border: rgba(192,175,211,0.12);
  --border-hover: rgba(192,175,211,0.28);
  --text-primary: #F4F1EA;
  --text-secondary: rgba(244,241,234,0.55);
  --text-muted: rgba(244,241,234,0.28);
  --text-accent: #C0AFD3;
}
```

### Typography

```css
/* Headlines: Playfair Display */
font-family: 'Playfair Display', Georgia, serif;

/* Body / UI: Montserrat */
font-family: 'Montserrat', system-ui, sans-serif;
```

**Typography Scale:**
- Hero headline: `clamp(52px, 8vw, 96px)`, weight 700, Playfair Display
- Section headline: `clamp(36px, 5vw, 60px)`, weight 700, Playfair Display
- Card headline: `clamp(20px, 2.5vw, 28px)`, weight 600, Playfair Display
- Eyebrow label: `11px`, weight 700, Montserrat, `letter-spacing: 0.32em`, UPPERCASE
- Body text: `16px`, weight 400, Montserrat, `line-height: 1.7`
- Small/caption: `13px`, weight 500, Montserrat
- Stat number: `clamp(28px, 4vw, 48px)`, weight 700, Playfair Display
- Button: `11px`, weight 700, Montserrat, `letter-spacing: 0.2em`, UPPERCASE

### Spacing System (8px grid)
- `4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 64px, 80px, 96px, 120px, 160px`
- Section padding vertical: `clamp(96px, 12vw, 160px)`
- Max content width: `1200px`, centered with `0 auto`

### Borders & Geometry
- Cards: `border-radius: 2px` — sharp, architectural
- Buttons: `border-radius: 2px`
- Input fields: `border-radius: 2px`
- Decorative lines / dividers: `1px solid var(--border)`
- Divider accent (under eyebrows): `32px × 1px`, color `var(--lilac)`

---

## Component Specifications

### Navbar

**Behavior:**
- Fixed, full-width, `z-index: 100`
- Default: transparent background, no border
- Scrolled (>48px): `background: rgba(19,19,17,0.88)`, `backdrop-filter: blur(12px)`, `border-bottom: 1px solid var(--border)`
- Height: `64px`
- Smooth transition: `0.3s ease` on background/border

**Layout:**
- Logo left (SVG cloud + "Cloudy Club" wordmark, Playfair Display italic, `--lilac` colored "Cloudy")
- Nav links center: Home, Über uns, Anbau, Prävention, Mitgliedschaft, FAQ, Standort, News
- Right: Language toggle (DE/EN) + "Mitglied werden" CTA button

**Nav Link Interactions:**
- Default: `var(--text-secondary)`, `font-size: 13px`, `font-weight: 500`, `letter-spacing: 0.04em`, Montserrat
- Hover: `var(--text-primary)`, with a `1px` underline that slides in from left — `transform: scaleX(0→1)`, `transform-origin: left`, `transition: 0.25s ease`
- Active: `var(--text-accent)`, underline permanently visible

**Language Toggle:**
- Two labels: `DE` and `EN`, 12px Montserrat 600
- Pill background slides between them — `transition: 0.22s cubic-bezier(0.4, 0, 0.2, 1)`
- Background of pill: `var(--lilac)`, text over it: `var(--bg)` (dark)

**Mobile (<768px):**
- Hamburger icon (3 horizontal lines → X when open), 24px, `var(--cream)`
- Slide-in drawer from RIGHT (not full-screen overlay):
  - Width: `280px`
  - Background: `var(--bg-elevated)`, `border-left: 1px solid var(--border)`
  - `transform: translateX(100% → 0)`, `transition: 0.35s cubic-bezier(0.4, 0, 0.2, 1)`
  - Dim overlay behind it: `rgba(0,0,0,0.6)`, fade in `0.3s`
  - Nav items stacked vertically, 48px tap targets, `border-bottom: 1px solid var(--border)` between items
  - No fancy stagger animations — clean, fast

**CTA Button (Primary):**
```css
.btn-primary {
  background: var(--lilac);
  color: var(--bg);
  height: 44px;
  padding: 0 24px;
  font: 700 11px/1 Montserrat;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  border-radius: 2px;
  border: none;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.15s ease;
}
.btn-primary:hover {
  background: var(--lilac-light);
  transform: translateY(-1px);
}
.btn-primary:active {
  transform: translateY(0);
}
```

---

### Hero Section

**Layout:** Split layout — text left (55%), visual right (45%)

**Left Column:**
1. Eyebrow tag: `"Cannabis Social Club · Osnabrück"` — pill-shaped tag, `border: 1px solid var(--border)`, `background: var(--bg-elevated)`, `padding: 6px 14px`, `border-radius: 2px`, lilac dot `•` before text
2. Headline: `"Willkommen im Cloudy Club."` — "Cloudy" in `var(--lilac)`, italic Playfair Display. Line break: "Willkommen im" line 1, "Cloudy Club." line 2
3. Subtext: `"Dein Zuhause für gemeinsamen Anbau, verantwortungsvollen Konsum und echte Community in Osnabrück. Sicher, transparent, zusammen."` — `var(--text-secondary)`, `max-width: 480px`
4. CTA row: `"Mitglied werden"` (primary button) + `"Mehr erfahren"` (text link with arrow, no border)

**Right Column:**
- Large cloud SVG illustration, floating animation (`translateY: 0 → -18px`, `8s ease-in-out infinite`)
- 3–4 floating sparkle stars at different positions, each twinkling independently (opacity + scale, `3–5s cycles`)
- Thin moon crescent SVG in top-right area

**Below the fold — Stats Bar:**
- `border-top: 1px solid var(--border)`, `padding: 32px 0`
- Three stats separated by `1px` vertical dividers:
  - `"50g"` large number + `"monatl. Abgabe"` small label below
  - `"§CanG"` + `"100% legal & konform"`
  - `"18+"` + `"Mindestalter"`
- No background — lives directly on the page background

**Hero Entrance Animations (GSAP, run once):**
```js
// Timeline on mount
const tl = gsap.timeline()
tl.from('.hero-eyebrow', { opacity: 0, y: 12, duration: 0.6, ease: 'power2.out' })
  .from('.hero-headline .word', { opacity: 0, y: 24, stagger: 0.08, duration: 0.7, ease: 'power3.out' }, '-=0.2')
  .from('.hero-sub', { opacity: 0, y: 12, duration: 0.6, ease: 'power2.out' }, '-=0.3')
  .from('.hero-cta', { opacity: 0, y: 8, duration: 0.5, ease: 'power2.out' }, '-=0.3')
  .from('.hero-visual', { opacity: 0, x: 24, duration: 0.9, ease: 'power2.out' }, '-=0.7')
  .from('.stats-bar .stat', { opacity: 0, y: 12, stagger: 0.1, duration: 0.5, ease: 'power2.out' }, '-=0.4')
```

---

### Scroll Animations (ScrollTrigger — apply to all sections)

**Standard fade-up (use for most elements):**
```js
gsap.from(el, {
  scrollTrigger: { trigger: el, start: 'top 82%' },
  opacity: 0,
  y: 28,
  duration: 0.75,
  ease: 'power2.out'
})
```

**Staggered children:**
```js
gsap.from(children, {
  scrollTrigger: { trigger: parent, start: 'top 80%' },
  opacity: 0,
  y: 24,
  stagger: 0.12,
  duration: 0.7,
  ease: 'power2.out'
})
```

**Slide from left (for visual/image elements):**
```js
gsap.from(el, {
  scrollTrigger: { trigger: el, start: 'top 80%' },
  opacity: 0,
  x: -32,
  duration: 0.85,
  ease: 'power2.out'
})
```

---

### Section Structure (global pattern)

Every section follows this structure:
```
[optional eyebrow label]
[section headline]
[optional section description — max 560px wide, centered or left-aligned]
[content grid or list]
```

Section padding: `clamp(96px, 12vw, 160px) 40px`

---

### About Section (`/about`)

**Layout:** Two-column — visual left (40%), content right (60%)

**Left visual:**
- A tall card (`border: 1px solid var(--border)`, `background: var(--bg-card)`, `border-radius: 2px`)
- Contains the cloud SVG illustration + floating badge: `"e.V. Eingetragener Verein"` — `background: var(--bg-elevated)`, `border: 1px solid var(--border)`, `padding: 8px 16px`, `border-radius: 2px`, `font: 600 11px Montserrat`, `letter-spacing: 0.2em`, UPPERCASE

**Right content:**
1. Eyebrow: `"Wer wir sind"`
2. Headline: `"Mehr als ein Club — eine Gemeinschaft."`
3. Three value items stacked vertically, each:
   - Icon (24px, `var(--lilac)`) — inline left
   - Title (Playfair Display, 20px, weight 600)
   - Description (`var(--text-secondary)`, 15px)
   - `border-bottom: 1px solid var(--border)` between items
   - No card wrappers — open, airy list

**Content:**
- **Gemeinschaft:** "Wir sind ein eingetragener Verein, der Menschen verbindet, die Cannabis verantwortungsbewusst und offen leben möchten."
- **Sicherheit:** "Kontrollierter Anbau, transparente Qualität und klare Regelungen nach deutschem Recht – deine Gesundheit steht an erster Stelle."
- **Offenheit:** "Jeder ab 18 Jahren ist willkommen. Kein Stigma, kein Stress – einfach ein Ort, an dem du du selbst sein kannst."

---

### Growing Section (`/growing`)

**Layout:** Full-width, content max 1200px centered

**Headline area:**
- Eyebrow: `"Unser Anbau"`
- Headline: `"Von der Saat zur Qualität."`
- Description: `"Vereinseigener Anbau — für Mitglieder, von Mitgliedern. Transparent, nachhaltig, geprüft."` (`max-width: 520px`)

**Four-step process:**
Horizontal numbered line at top (`1 — 2 — 3 — 4` connected by `1px` lines), then cards below.

Each step card:
- Step number: `01`, `02`, `03`, `04` — large, `font: 700 11px Montserrat`, `letter-spacing: 0.3em`, `color: var(--text-muted)` — top-left of card
- Icon: 24px, `var(--lilac)`
- Title: Playfair Display, 20px
- Description: 14px, `var(--text-secondary)`
- Card style: `background: var(--bg-card)`, `border: 1px solid var(--border)`, `border-radius: 2px`, `padding: 32px 28px`
- Hover: `border-color: var(--border-hover)`, `transform: translateY(-3px)`, `transition: 0.25s ease`
- Grid: 4 columns desktop, 2 columns tablet, 1 column mobile

**Content:**
1. **Genetik & Sorten** — Sorgfältig ausgewählte, qualitätsoptimierte Sorten für beste Ergebnisse.
2. **Nachhaltiger Anbau** — Kontrollierte Umgebung ohne chemische Pestizide für reine Qualität.
3. **Ernte & Pflege** — Sorgfältiges Trimmen, Trocknen und Aushärten für optimales Aroma.
4. **Qualitätsprüfung** — THC-, CBD- und Terpenanalyse mit voller Transparenz für Mitglieder.

---

### Prevention Section (`/prevention`)

**Layout:** Two-column grid — content left, stats right stacked

**Left — four topic items:**
Each item:
- Icon 20px `var(--lilac)` inline
- Title 18px Playfair Display
- Description 14px `var(--text-secondary)`
- `padding-bottom: 24px`, `border-bottom: 1px solid var(--border)`

**Right — three stat blocks stacked:**
Each stat block:
- `background: var(--bg-card)`, `border: 1px solid var(--border)`, `border-radius: 2px`, `padding: 28px 24px`
- Large number/label (Playfair Display, 36px, `var(--cream)`)
- Small description below (12px Montserrat, `var(--text-secondary)`)

**Content:**
Topics:
1. **Risiken kennen** — Offene Aufklärung über Risiken, Wechselwirkungen und sicheren Konsum ohne Verurteilung.
2. **Set & Setting** — Die richtige Umgebung und Einstellung machen den Unterschied. Wir klären auf, was das bedeutet.
3. **Schutzalter 18+** — Keine Mitglieder unter 18 Jahren. Aktive Präventionsarbeit ist Teil unserer Vereinskultur.
4. **Offene Beratung** — Vertrauliche Beratung zu Dosierung, Risiken und Gesundheitsfragen für alle Mitglieder.

Stats:
- `"18+"` — Mindestalter für alle Mitglieder
- `"0‰"` — Konsum im Straßenverkehr
- `"§CanG"` — Vollständig legal & konform

---

### Membership Section (`/membership`)

**Layout:** Three columns desktop — Costs card (1fr) | Benefits list (1.5fr) | Requirements list (1fr)

**Costs card:**
- `background: var(--bg-elevated)`, `border: 1px solid var(--border)`, `border-radius: 2px`
- `padding: 40px 32px`
- Eyebrow: `"Beiträge"`
- Two cost rows:
  - `"50€"` large (Playfair 40px) + `"Einmalige Aufnahmegebühr"` label
  - `"25€"` large + `"Pro Monat"` label
  - `border-top: 1px solid var(--border)` between rows
- Fine print: `"Keine versteckten Kosten. Beiträge dienen ausschließlich dem Vereinsbetrieb und Anbau."` — 12px, `var(--text-muted)`
- CTA button `"Mitglied werden"` at bottom, full width

**Benefits list:**
- Eyebrow: `"Was du bekommst"`
- Headline: `"Deine Vorteile als Mitglied."`
- Eight items, each with `✓` checkmark in `var(--lilac)`, text in `var(--text-secondary)`, `padding: 14px 0`, `border-bottom: 1px solid var(--border)` between items

Benefits:
1. Monatliche Cannabis-Abgabe gemäß § CanG
2. Zugang zu vereinseigenen Anbauflächen
3. Exklusive Mitglieder-Events & Workshops
4. Strain-Atlas mit Terpenprofilen
5. Prävention & Beratungsangebote
6. Stimmrecht auf Vereinsversammlungen
7. Mitglieder-Newsletter & Neuigkeiten
8. Transparente Kostenstruktur

**Requirements list:**
- Eyebrow: `"Voraussetzungen"`
- Five items with a `—` dash prefix in `var(--lilac)`, text in `var(--text-secondary)`

Requirements:
1. Mindestalter: 18 Jahre
2. Hauptwohnsitz in Deutschland
3. 6 Monate nachgewiesener Aufenthalt in Deutschland
4. Bereitschaft zur Präventionsschulung
5. Akzeptanz der Vereinssatzung

**Application form:**
Below the three-column grid, full-width placeholder:
- `background: var(--bg-surface)`, `border: 1px solid var(--border)`, `border-radius: 2px`
- `padding: 48px`, centered text
- Placeholder label: `"Beitrittformular"` eyebrow + `"Mitgliedschaft beantragen"` headline + `"Das Antragsformular wird hier eingebettet."` description
- Keep as placeholder block for Cannanas form embed

---

### FAQ Section (`/faq`)

**Layout:** Two columns — questions left (60%), contact/info right (40%)

**Left — accordion:**
Seven items:

| # | Question | Answer |
|---|----------|--------|
| 1 | Ist der Cloudy Club legal? | Ja. Wir sind ein eingetragener Verein nach §§ 26 ff. BGB und operieren vollständig im Rahmen des Konsumcannabisgesetzes (KCanG). |
| 2 | Wie viel Cannabis erhalte ich pro Monat? | Mitglieder ab 21 Jahren erhalten bis zu 50g pro Monat. Mitglieder zwischen 18 und 20 Jahren erhalten bis zu 30g mit max. 10% THC-Gehalt. |
| 3 | Wie lange dauert die Aufnahme? | Nach Eingang deines vollständigen Antrags und der Aufnahmegebühr dauert die Bearbeitung in der Regel 1–2 Wochen. |
| 4 | Kann ich meine Mitgliedschaft kündigen? | Ja, jederzeit mit einer Frist von einem Monat zum Monatsende. |
| 5 | Wo findet die Abgabe statt? | Die Abgabeadresse in Osnabrück wird dir nach erfolgreicher Aufnahme mitgeteilt. |
| 6 | Gibt es regelmäßige Veranstaltungen? | Ja — wir organisieren Workshops, Präventionsabende und Mitgliederversammlungen. Details erhältst du nach Beitritt. |
| 7 | Wie zahle ich meinen Beitrag? | Per SEPA-Überweisung. Bankdaten erhältst du nach Aufnahme. Barzahlung ist nicht möglich. |

**Accordion style:**
- Each item: `border-bottom: 1px solid var(--border)`, `padding: 24px 0`
- Question row: title (Playfair 17px, weight 600) left + `+`/`−` icon right (`var(--lilac)`)
- Open state: `+` rotates to `×`, answer fades in with `max-height` transition (`0.4s ease`)
- No card backgrounds — flat, open design
- Only one item open at a time

**Right panel:**
- Sticky on scroll
- `background: var(--bg-card)`, `border: 1px solid var(--border)`, `border-radius: 2px`, `padding: 40px 32px`
- Eyebrow: `"Noch Fragen?"`
- Headline: `"Wir helfen gerne."`
- Email link: `hello@cloudyclub-osnabrueck.de` (Montserrat, 14px, `var(--lilac)`, underline on hover)
- Small note: `"Antworten in der Regel innerhalb von 24 Stunden."` (12px, `var(--text-muted)`)

---

### Location Section (`/location`)

**Layout:** Two columns — map visual left (50%), info right (50%)

**Left — map:**
- SVG-based decorative map (grid lines, stylized street shapes, center pin)
- Pulse ring animation at center pin: `SVG circle`, radius animates `14 → 40`, opacity `0.8 → 0`, `3s ease-out infinite`
- `background: var(--bg-card)`, `border: 1px solid var(--border)`, `border-radius: 2px`
- Full height of the section

**Right — info:**
Three stacked info blocks, each:
- Icon (20px, `var(--lilac)`)
- Label (11px Montserrat 700, `var(--text-muted)`, `letter-spacing: 0.3em`, UPPERCASE)
- Content (Playfair Display 18px for address/hours, Montserrat 15px for details)
- `padding: 28px 0`, `border-bottom: 1px solid var(--border)`

**Content:**
1. **Adresse** — Adresse wird nach Aufnahme bekannt gegeben, Osnabrück, Niedersachsen
2. **Öffnungszeiten:**
   - Mo–Do: 16:00–20:00
   - Fr: 14:00–22:00
   - Sa: 12:00–22:00
   - So: Geschlossen
3. **Kontakt:**
   - hello@cloudyclub-osnabrueck.de (clickable mailto link)
   - +49 (0)541 · 000 0000 (clickable tel link)

---

### News Section (`/news`)

**Layout:** Three-column card grid

**Section header:**
- Eyebrow: `"Aktuelles"`
- Headline: `"Neuigkeiten aus dem Club."`
- Right-aligned link: `"Alle Artikel ansehen →"` (13px Montserrat, `var(--lilac)`)

**Each news card:**
- `background: var(--bg-card)`, `border: 1px solid var(--border)`, `border-radius: 2px`
- `padding: 32px 28px`
- Top row: date (12px Montserrat, `var(--text-muted)`) + tag pill (`background: var(--bg-elevated)`, `border: 1px solid var(--border)`, `border-radius: 2px`, `padding: 4px 10px`, 11px Montserrat)
- Title: Playfair Display 20px weight 600, hover → `var(--lilac)`, `transition: 0.2s`
- Excerpt: 14px Montserrat, `var(--text-secondary)`, `line-height: 1.65`
- Bottom: `"Weiterlesen →"` link (12px, `var(--lilac)`)
- Hover: `border-color: var(--border-hover)`, `transform: translateY(-2px)`, `box-shadow: 0 16px 40px rgba(0,0,0,0.3)`, `transition: 0.22s ease`

**Cards content:**

**Card 1 — März 2025 | Vereinsnews**
"Der Cloudy Club öffnet seine Türen" — Wir sind offiziell eingetragen und freuen uns, die Türen des Cloudy Club für neue Mitglieder zu öffnen. Ein historischer Moment für unsere Gemeinschaft.

**Card 2 — April 2025 | Prävention**
"Erster Präventionsabend – ein voller Erfolg" — Über 30 Mitglieder kamen zusammen, um über Set & Setting, sichere Dosierung und Risikoreduktion zu sprechen. Danke an alle Teilnehmenden!

**Card 3 — Mai 2025 | Anbau**
"Erste Ernte – Qualität die begeistert" — Unsere erste vereinseigene Ernte ist abgeschlossen. Die Testergebnisse übertreffen unsere Erwartungen in Aroma, Terpengehalt und Wirkstoffprofil.

---

### Footer

**Layout:** Three columns — Brand (2fr) | Club links (1fr) | Info links (1fr)

**Brand column:**
- Logo (cloud SVG + "Cloudy Club" wordmark)
- Mission text: `"Dein Zuhause für gemeinsamen Anbau und verantwortungsvollen Konsum in Osnabrück."` (14px, `var(--text-secondary)`)
- Social icons: Instagram + Email (24px Lucide icons, hover → `var(--lilac)`, `transition: 0.2s`)

**Club links:**
- Label: `"CLUB"` (11px Montserrat 700, `var(--text-muted)`, `letter-spacing: 0.3em`)
- Links: Über uns, Anbau, Prävention, Mitgliedschaft (14px Montserrat, `var(--text-secondary)`, hover → `var(--text-primary)`)

**Info links:**
- Label: `"INFO"`
- Links: FAQ, Standort, News, Impressum, Datenschutz

**Bottom bar:**
- `border-top: 1px solid var(--border)`, `padding: 24px 0`
- Left: `"© 2025 Cloudy Club Osnabrück e.V. Alle Rechte vorbehalten."` (12px, `var(--text-muted)`)
- Right: `"Nur für Mitglieder ab 18 Jahren."` (12px, `var(--text-muted)`)

---

## Global CSS Rules

```css
/* Global reset and base */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; }

body {
  background: var(--bg);
  color: var(--text-primary);
  font-family: 'Montserrat', system-ui, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

/* Subtle grain texture */
body::after {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,..."); /* SVG noise */
  opacity: 0.04;
  pointer-events: none;
  z-index: 999;
}

/* Custom scrollbar */
::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: var(--bg); }
::-webkit-scrollbar-thumb { background: var(--lilac-dark); border-radius: 2px; }

/* Selection */
::selection { background: var(--lilac); color: var(--bg); }

/* Focus visible */
:focus-visible { outline: 2px solid var(--lilac); outline-offset: 3px; }
```

---

## Animation Rules (Global)

1. **All entrance animations use `opacity: 0` as initial state** — never set `visibility: hidden`
2. **GSAP ScrollTrigger on all sections** — `start: "top 82%"`, `once: true`
3. **Hover transitions:** Never exceed `0.3s`. Use `ease` or `cubic-bezier(0.4, 0, 0.2, 1)` (Material standard)
4. **No bounce (`elastic`) easing** on UI elements — only on decorative elements
5. **Respect `prefers-reduced-motion`:**
   ```js
   const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
   if (!prefersReduced) { /* run animations */ }
   ```
6. **Float animation on cloud:** `translateY: 0 → -18px → 0`, `8s ease-in-out infinite`
7. **Star twinkle:** each star independently — `opacity 0.4 → 1`, `scale 0.8 → 1.15`, `3–5s ease-in-out infinite`, different delays

---

## File Structure

Maintain the existing file structure:
```
/app
  layout.tsx         — Navbar, Footer, CookieBanner
  page.tsx           — Hero
  globals.css        — CSS custom properties + global styles
  /about/page.tsx
  /growing/page.tsx
  /prevention/page.tsx
  /membership/page.tsx
  /faq/page.tsx
  /location/page.tsx
  /news/page.tsx
  /impressum/page.tsx
  /datenschutz/page.tsx
/components
  Navbar.tsx
  Footer.tsx
  CookieBanner.tsx
  Hero.tsx
  About.tsx
  Growing.tsx
  Prevention.tsx
  Membership.tsx
  Faq.tsx
  Location.tsx
  News.tsx
```

---

## Implementation Order

1. `globals.css` — CSS variables, reset, typography, button/card base classes, grain overlay, scrollbar
2. `layout.tsx` — Root layout (Navbar, Footer, CookieBanner slots)
3. `Navbar.tsx` — Fixed nav with scroll state, language toggle, mobile drawer
4. `Hero.tsx` — Split layout with GSAP entrance animations
5. `About.tsx` — Two-column with value list
6. `Growing.tsx` — Four-step cards with numbered header line
7. `Prevention.tsx` — Two-column topics + stat cards
8. `Membership.tsx` — Three-column with form placeholder
9. `Faq.tsx` — Accordion + sticky contact panel
10. `Location.tsx` — Map SVG + info blocks
11. `News.tsx` — Three-column card grid
12. `Footer.tsx` — Three-column + bottom bar
13. `CookieBanner.tsx` — Slide-up from bottom, `"Akzeptieren"` + `"Ablehnen"` buttons

---

## What Makes This Design Sharp (Checklist)

- [ ] Cards use `border-radius: 2px`, never more than `4px`
- [ ] All interactive elements have hover states within `0.25s`
- [ ] Typography size contrast is at least 2:1 between body and headline
- [ ] Section headings are left-aligned, not centered (more editorial)
- [ ] Eyebrow labels are always uppercase, 11px, `letter-spacing: 0.3em`
- [ ] Dividers are `1px` lines, never decorative shapes
- [ ] Stat numbers are Playfair Display (serif) for editorial weight
- [ ] The `var(--lilac)` accent is used sparingly — icons, active states, accents only
- [ ] No box-shadow everywhere — only on hover states and elevated cards
- [ ] Mobile nav is a drawer (right side), not a full-screen overlay
- [ ] GSAP animations fire once on scroll (`once: true`), never loop on scroll
- [ ] The floating cloud and stars are the only continuously looping animations
- [ ] No gradient text everywhere — only the hero headline gets it if at all
- [ ] Grain texture opacity ≤ 5% — texture, not noise
- [ ] CookieBanner is unobtrusive — bottom bar with transparent background, not a modal

---

## Language

All visible text content is in **German (DE)** by default. The language toggle switches to English (EN). Implement as `useState` in Navbar, pass locale prop down, or use a simple context.

**English translations:**
- "Willkommen im Cloudy Club." → "Welcome to Cloudy Club."
- "Mitglied werden" → "Become a Member"
- "Mehr erfahren" → "Learn More"
- "Über uns" → "About"
- "Anbau" → "Growing"
- "Prävention" → "Prevention"
- "Mitgliedschaft" → "Membership"
- "Standort" → "Location"
- "Aktuelles" → "News"
- "Neuigkeiten aus dem Club." → "News from the Club."
- "Alle Artikel ansehen →" → "View All Articles →"
- (And all other UI strings accordingly)

---

## Final Notes

- **Do not add features** not described in this document.
- **Do not use external libraries** beyond what's listed in the tech stack.
- **Do not use Tailwind classes** for things already handled by CSS custom properties — use the CSS variables directly in `style` props or in `globals.css`.
- **Prefer CSS classes** over inline styles for anything that repeats.
- **Every component is `"use client"`** — this is a client-side rendered Next.js app.
- **GSAP cleanup:** Always return a cleanup function from `useEffect` that kills GSAP timelines and ScrollTrigger instances to prevent memory leaks.
- **Accessibility:** All interactive elements have ARIA labels. Language toggle is `role="switch"`. Accordion items use `<button>` elements. Keyboard navigable.
