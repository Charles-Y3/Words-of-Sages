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
npm run validate-data  # check chapter data integrity
```

## Content

### Taoist
- **Tao Te Ching** (道德經) — 81 chapters
- **Qingjing Jing** (太上老君說常清靜經) — 8 sections
- **Yinfu Jing** (黃帝陰符經) — 8 sections
- **Taishang Ganying Pian** (太上感應篇) — 10 sections

### Confucian
- **The Great Learning** (大學) — 37 sections
- **Analects** (論語) — 20 chapters
- **Doctrine of the Mean** (中庸) — 12 sections
- **Mencius** (孟子) — 15 chapters
- **The Great Harmony** (禮運大同篇) — 5 sections

### Buddhist
- **Heart Sutra** (心經) — 6 sections
- **Diamond Sutra** (金剛經) — 32 divisions

Each chapter has bilingual fields: `text` (original), `plain` (explanation), `application` (practical takeaway). Run `npm run validate-data` after editing any chapter file.

## Deployment

Deployed on Vercel; `vercel.json` sets the build output and SPA rewrite for client-side routing.
