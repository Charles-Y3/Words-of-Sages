# Words of Sages 聖賢之言

A bilingual (Traditional Chinese / English) reader for Chinese classical texts — original text, plain-language explanation, and practical application for every chapter.

## Stack

React 18 + React Router 6, built with Vite.

## Scripts

```bash
npm install       # install dependencies
npm run dev        # start the dev server
npm run build       # production build to dist/
npm run preview     # preview the production build locally
npm run validate-data  # check chapter data integrity (QA C0)
npm run audit-speech   # check 破音字 coverage (QA S0)
```

## Content

### Taoist (available)
- **Tao Te Ching** (道德經) — 81 chapters
- **Qingjing Jing** (太上老君說常清靜經) — 8 sections
- **Yinfu Jing** (黃帝陰符經) — 8 sections
- **Taishang Ganying Pian** (太上感應篇) — 13 sections

### Confucian (available)
- **The Great Harmony** (禮運大同篇) — 5 sections
- **The Great Learning** (大學) — 37 sections
- **Doctrine of the Mean** (中庸) — 33 chapters · 38 sections
- **Analects** (論語) — 20 books · 501 chapters
- **Classic of Filial Piety** (孝經) — 18 chapters
- **Spring and Autumn Annals** (春秋) — 12 dukes · 65 sections

### Buddhist (available)
- **Heart Sutra** (心經) — 6 sections
- **Diamond Sutra** (金剛經) — 32 divisions · 40 sections
- **Amitabha Sutra** (阿彌陀經) — 11 sections
- **Platform Sutra** (六祖壇經) — 10 chapters · 30 sections

Each chapter has bilingual fields: `text` (original), `plain` (explanation), `application` (practical takeaway). Run `npm run validate-data` after editing any chapter file.

**QA pipeline:** AI writer + AI checker use fixed check IDs **C0–C5** and **S0–S2**. See [`docs/CONTENT_QA.md`](docs/CONTENT_QA.md) for the checklist and [`docs/CONTENT_QA_LEDGER.md`](docs/CONTENT_QA_LEDGER.md) for per-work status. Do not re-audit works already marked `pass` unless their content changed or a check failed.

### Speech pronunciation (破音字)

Chinese read-aloud uses the device’s Web Speech voices. Display text (`text.zh`) is never altered for TTS.

When read-aloud starts, `prepareSpeechText` builds the spoken string in this order:
1. Optional per-unit `speech.zh` override (authoritative for that passage)
2. Work-scoped lexicon in [`src/data/speech/works/`](src/data/speech/works/)
3. Global fallback in [`src/data/speechPronunciation.js`](src/data/speechPronunciation.js)

Confucian, Taoist, and Buddhist available works each have a work lexicon under [`src/data/speech/works/`](src/data/speech/works/). 禮運大同篇 also uses per-unit `speech.zh`.

When adding or fixing a scripture:
- Prefer a unit `speech: { zh: "…" }` for short/critical passages
- Or append phrase rules under `src/data/speech/works/<workId>.js` (and shared `*Shared.js` when tradition-wide)
- Run `npm run audit-speech` (optionally `--tradition=taoist|buddhist|confucian` and `--fail`)

## Deployment

Deployed on Vercel; `vercel.json` sets the build output and SPA rewrite for client-side routing.
