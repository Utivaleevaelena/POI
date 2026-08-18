# POI — Design System

**POI** (poi.eco) is a Polish urban-infrastructure brand: it returns **public drinking fountains** — *poidełka / zdroje uliczne* — to city streets. Clean, free, plastic-free water in shared space. The identity centres on **water as a symbol of life** ("Woda jest jedną z najlepszych powszechnych substancji w przyrodzie. Jest symbolem życia, żywiołem, podstawą naszej rzeczywistości.") and the triad **człowiek · woda · miasto** (human · water · city). First deployments are in the Trójmiasto (Gdańsk / Gdynia / Sopot).

This design system is a faithful, code-ready recreation of POI's 2019 Visual Identity System.

## Sources
- **`uploads/manual poi.pdf`** — *System Identyfikacji Wizualnej*, Warszawa 2019. The authoritative brand manual (logo construction, clear space, colour, typography, collateral). Designed by **Alina Rybacka-Gruszczyńska / Foxrabbit Studio** (foxrabbit.pl).
- **`uploads/logo_poi_rgb.pdf` / `.ai`** and **`uploads/logo 1–10 / logo3 / logo8 .png`** — the "PO»" wordmark on the full paper-stock palette (positive / reversed).
- **`uploads/Sitko do graweru.pdf`** — engraving screen artwork (production file; not used in this system).
- Extracted vector wordmark → `assets/poi-logo.png` (ink, transparent) and `assets/poi-logo-white.png` (reversed).

---

## CONTENT FUNDAMENTALS
- **Language:** Polish, primarily. Product nouns: *poidełko / poidełka* (fountain), *zdrój uliczne* (street fountain), *woda* (water).
- **Voice:** calm, elemental, quietly poetic — closer to a museum wall text than a startup. Water is spoken of as an element and a symbol, not a "product." Sentences are short, declarative, unhurried.
- **Person:** collective and impersonal — the brand speaks *about water and the city* more than "we / you". Marketing CTAs stay plain and lowercase-feeling: *poidełka, o nas, sklep, kontakt, zobacz poidełka, nawiguj*.
- **Casing:** navigation and product labels are lowercase in running use (*poidełka*), but rendered UPPERCASE with wide tracking as UI labels/eyebrows. Locations are numbered: *poi 1: Gdańsk*, *poi 2: Gdańsk*.
- **Emoji:** none. Not part of the brand.
- **Vibe:** essential, ecological, civic, tactile (paper stocks, engraved metal). Editorial serif headlines carry emotion; the grotesque carries information.

## VISUAL FOUNDATIONS
- **Colour:** a warm, muted, paper-derived palette. Near-black **Midnight `#1E1F1D`** is primary; warm **Oyster `#F2EADC`** is the default light ground. Accents: **Sky `#89C7CF`** (water/teal) and **Hazel `#BB8F60`** (earth/camel). Soft editorial tints — **Almond `#CF9F9F`**, **Grape `#D3C2C3`**, **Light blue `#E0F1F5`**, **Storm `#D7D8D5`** — fill full-bleed blocks. Max one or two grounds per surface.
- **Type:** display/editorial serif **Calluna** (→ **Lora** stand-in) for headlines & quotes; supporting grotesque **Neuzeit Grotesk** (→ **Archivo** stand-in) for body, nav and labels. Labels/nav/eyebrows are UPPERCASE, `0.16em` tracking. Headlines are large, tight leading (~1.08), often italicised for emphasis.
- **Layout:** full-bleed colour blocks split into a text half and an image half (the `SectionHero`). Generous margins; editorial, magazine-like rhythm. Numbered spec spreads (big serif "01" + hairline-ruled data rows). Fixed sticky header.
- **Backgrounds:** solid brand colours or warm-toned photography (skin, water, city, brushed-metal fountains). No gradients, no patterns, no textures beyond real paper stock.
- **Imagery vibe:** warm, natural light; muted; documentary. Water and human close-ups; metal fountains in situ.
- **Corners:** sharp. Rectangles and full-bleed blocks have **no radius**; only pills/circles are round (the `CircleButton`). UI elements use a 2px hairline radius at most.
- **Cards:** flat white on a hairline border, sharp corners, image on top + caption below; a soft shadow appears only on hover when interactive. No coloured left-border accents.
- **Borders & rules:** 1px warm hairlines (`rgba(30,31,29,0.14)`) separate data rows and sections.
- **Shadows:** minimal and warm-neutral; used sparingly for hover lift, never glossy or coloured.
- **Motion:** calm, no bounce. Short fades/colour transitions (140–240ms, ease `cubic-bezier(0.22,0.61,0.36,1)`).
- **Hover states:** links & ghost buttons shift to Sky-dark; solid buttons darken slightly; circle buttons gain a faint fill + stronger ring. **Press:** colour change, no scale-bounce.
- **Transparency/blur:** rarely used; the system is opaque and print-led.

## ICONOGRAPHY
POI's identity is **type- and colour-led, not icon-led** — the manual defines no icon set. Directional affordances use the round **`CircleButton`** with simple glyphs (arrows `→ ← ↓`). The chevron in the wordmark (the stylised "i"/`»`) is a brand device, not a reusable UI icon. There is **no icon font, no emoji, no illustration set** in the source. Where an interface genuinely needs icons (e.g. map pins, share), use a **thin-stroke line set** to match the grotesque — **Lucide** (CDN, ~1.5px stroke) is the recommended substitute; flag any icon use as an addition. Never redraw the wordmark or its chevron by hand — always use the image assets in `assets/`.

## Intentional additions
- **Icon guidance (Lucide)** — the source ships no icons; Lucide is suggested only where UI demands it. Not bundled.
- **`Input`, `Badge`, `CircleButton`** — standard web primitives implied by the website mockup (nav, newsletter, filters, hero arrow) though not itemised in the print manual.

---

## Components (`components/`)
Namespace at runtime: `window.POIDesignSystem_c9274b`.
- **Button** — `core/` — uppercase, tracked action button (primary / secondary / ghost).
- **CircleButton** — `core/` — round outline/solid icon control (hero arrows).
- **Badge** — `core/` — uppercase label chip (eyebrows, categories, filters).
- **Logo** — `core/` — the "PO»" wordmark image lockup (dark/light, clear-space).
- **Input** — `forms/` — quiet underline/boxed text field with uppercase label.
- **Header** — `layout/` — site masthead: wordmark + eyebrow + nav.
- **Card** — `layout/` — location/fountain card (image + serif caption).
- **SectionHero** — `layout/` — the signature full-bleed colour hero with serif headline + image panel.

## UI kits (`ui_kits/`)
- **website/** — `poi.eco` click-through: Home, Locations (poidełka), fountain Detail, About (o nas). See `ui_kits/website/README.md`.

## Foundations (`guidelines/`)
Specimen cards for the Design System tab — Colors (core / accents / tints), Type (display / UI / pairing), Spacing (scale), Brand (clear space, wordmark lockups).

## Tokens (`tokens/`)
`colors.css`, `typography.css`, `spacing.css`, `effects.css`, `fonts.css` — all `@import`ed by root **`styles.css`** (the single file consumers link).

## Assets (`assets/`)
- `poi-logo.png` — ink wordmark, transparent.
- `poi-logo-white.png` — reversed (cream/white) wordmark.

## Root manifest
- `styles.css` — global entry (imports only).
- `readme.md` — this file.
- `thumbnail.html` — homepage tile.
- `SKILL.md` — Agent-Skills-compatible entry point.

## Caveats
- **Fonts substituted:** Calluna → **Lora**, Neuzeit Grotesk → **Archivo** (both originals are Adobe Fonts, not redistributable). Supply the licensed files to swap them in.
- **No photography** was provided; imagery uses on-brand colour blocks. Copy remains Polish per the source.
