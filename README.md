# Handoff: POI.eco: strona produktowa (zdroje uliczne)

## Overview
Marketing and catalogue site for POI.eco, a Polish maker of urban drinking fountains (*zdroje uliczne / poidełka*). The site is in Polish, has 10 routes, a contact form, a downloads area for architects, a gallery with a lightbox, and SEO prerender per route. It is currently deployed on Vercel as a static SPA.

## About the files
- `site_dist/` is the **working, deployable build**. You can upload it to Vercel as-is (`vercel.json` is included). Each route has its own HTML file with prerendered `<title>`, meta description, OG tags, canonical and JSON-LD. All of them load the same app.
- `source/POI Strona.dc.html` is the **single source file** (a "Design Component": HTML template with `{{ }}` holes + a JS logic class `class Component extends DCLogic`, run by `support.js`). It is not a standard framework format.

**Recommended path in Claude Code:** rebuild this as a normal static project (e.g. **Astro** or **Vite + React** with SSG). Recreate the layout and behaviour pixel-perfectly from the source and `site_dist/`, keep all copy verbatim, and keep the URL structure, meta and JSON-LD. Alternatively, keep `site_dist/` as-is and edit it directly. That works, but every change has to be made in 11 HTML files.

## Fidelity
**High-fidelity.** The colours, type, spacing, copy and interactions are final. Reproduce them exactly.

## Routes
| Path | State key | Content |
|---|---|---|
| `/` | home | Hero carousel (4 slides, auto 5 s), badge, "Wybrane modele" cards (links), sections, CTA |
| `/produkty` | produkty | Model list POI_01/02/03 + "Akcesoria" (caps, herby, sitko) |
| `/produkty/poi01`, `/poi02`, `/poi03` | produkt | Model detail: main photo, spec rows, variants (tabs), personalisation, files, sticky mobile CTA bar |
| `/galerie` | realizacje | 6-frame gallery, lightbox (arrows, Esc, click outside, swipe) |
| `/do-pobrania` | architekci | File list per model (karta katalogowa, rysunek, 3D, instrukcja); missing url → "Wkrótce" |
| `/nagrody` | nagrody | Awards (Dobry Wzór 2019, Eco Design 2014, Green Product 2019) |
| `/kontakt` | kontakt | Form (see below) |
| `/polityka-prywatnosci` | polityka | Privacy policy + cookies |

Routing: History API (`pushState`). Scroll to top on navigation; `popstate` restores the previous scroll position. Unknown paths fall back to home. `vercel.json` rewrites every non-asset path to `/index.html`; `cleanUrls: true`.

## Key behaviour
- **Header:** sticky, logo (PNG @2x, 34 px high), nav, CTA "Zapytaj o projekt". On mobile: burger with `aria-expanded`, Esc to close, focus trap.
- **Contact form:** fields Imię i nazwisko*, Firma / instytucja, E-mail*, Telefon, Model (POI_01 / POI_02 / POI_03 / Model indywidualny / Nie wiem jeszcze), Typ zapytania (Wycena / Personalizacja / Konsultacja projektu / Inne), Wiadomość, consent. Prefilled from the query string: `/kontakt?model=POI_01&typ=wycena`. Includes validation and a honeypot (`botcheck`). Sends via Web3Forms (`https://api.web3forms.com/submit`) to poi@poi.eco with CC `michal@podgorczyk.pl`. If `WEB3FORMS_KEY` is empty, it falls back to a `mailto:`. States: idle / sending / success / error.
- **Cookie banner:** the consent choice is stored in `localStorage`.
- **Back-to-top** button appears after scrolling 2× the viewport height.
- **Tap targets** are at least 44×44 px. Mobile gutter is ~20 px, tablet 40 px.
- **Motion:** 140–240 ms, `cubic-bezier(0.22,0.61,0.36,1)`, no bounce.

## Config (top of the logic class in source)
```
SITE = 'https://www.poi.eco'
WEB3FORMS_KEY = ''            // TODO: key from web3forms.com for poi@poi.eco
CC_EMAIL = 'michal@podgorczyk.pl'
ENABLE_I18N = false
FILES = { poi01:{}, poi02:{}, poi03:{} }   // { 'karta-katalogowa': { url, size, date } }
```
Product data (codes, descriptions, materials, variants, photos) lives in a `products` array in the same class.

## Design tokens (POI Design System)
Colours: Midnight/ink `#1E1F1D`, Oyster `#F2EADC` (default bg), Sky `#89C7CF`, Sky-dark `#6FB0B8` (hover/focus), Hazel `#BB8F60`, Hazel-dark `#A67C4F`, Almond `#CF9F9F`, Grape `#D3C2C3`, Light blue `#E0F1F5`, Storm `#D7D8D5`, ink-80 `#4A4B49`, ink-60 `#77817D`, white. Hairline `rgba(30,31,29,0.14)`, strong `rgba(30,31,29,0.28)`.
Type: headlines in serif **Lora** (stand-in for Calluna), ~1.08 leading, italic for emphasis. Body/UI in **Archivo** (stand-in for Neuzeit Grotesk). Labels and nav are UPPERCASE with `0.16em` tracking.
Shape: sharp corners (max 2 px on UI). Pills/circles only for round buttons. Flat cards with a hairline border; soft shadow on hover only. No gradients, except the hero image overlay used for readability.
Full token files: `site_dist/_ds/.../tokens/*.css`. Components (Button, CircleButton, Badge, Logo, Input, Header, Card, SectionHero): `site_dist/_ds/.../_ds_bundle.js`.

## Assets
- `site_dist/assets/`: logos (ink/white, 1x/2x), `og-image.jpg`, `icon-512.png`
- `site_dist/uploads/`: product photos (POI_01, POI_02), accessories (`acc_*`), awards (`award_*`)
- `favicon.ico`, `favicon.svg`, `apple-touch-icon.png`, `robots.txt`, `sitemap.xml`
- `site_dist/files/README.txt`: where to put the PDFs (`/files/poi01/` etc.)

## Open TODOs
1. Web3Forms key for poi@poi.eco → `WEB3FORMS_KEY`.
2. PDFs in `/files/poi01|poi02|poi03/` and fill in `FILES` (url, size, date).
3. POI_03 photos (card, main photo, gallery, variants A/B) are missing: `card: null, main: null, photos: []`. The Corten variant of POI_01 is also missing.
4. Confirm the domain: canonical, OG and sitemap point to `https://www.poi.eco`.
5. Texts marked `[DO UZUPEŁNIENIA]` (privacy policy, variant descriptions).
6. One console error of unknown source remains; it does not affect functionality.

## Files
- `site_dist/`: deployable build (index + 10 route HTMLs, vercel.json, assets)
- `source/POI Strona.dc.html`: full source (template + logic + product data)
- `source/support.js`, `image-slot.js`, `image-slots.state.json`: runtime + image crop positions
- `source/vercel.json`: routing/cache config
