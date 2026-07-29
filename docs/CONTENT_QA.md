# Content & pronunciation QA

Checks **C0–C5** and **S0–S2** are performed by **AI tools** (content-writer and content-checker agents) plus the npm scripts below. Humans spot-listen speech and spot-read originals when needed. Results live in [`CONTENT_QA_LEDGER.md`](CONTENT_QA_LEDGER.md) so the same check is **not** re-run from scratch unless content changed or a check failed.

## Available works (13)

| Tradition | Works |
|-----------|--------|
| Confucian (5) | `liyun-datong`, `great-learning`, `doctrine-of-mean`, `filial-piety`, `spring-and-autumn` |
| Taoist (4) | `tao-te-ching`, `qingjing-jing`, `yinfu-jing`, `taishang-ganying` |
| Buddhist (4) | `heart-sutra`, `diamond-sutra`, `amitabha-sutra`, `platform-sutra` |

## Checklist (stable IDs)

| ID | What | How |
|----|------|-----|
| **C0** | Schema | `npm run validate-data` — sequential ids; `text` / `plain` / `application` × zh+en non-empty |
| **C1** | Original ZH accuracy | `text.zh` matches the received classical source for that work (edition in `works.js` attribution) |
| **C2** | Original EN fidelity | `text.en` translates *this* unit’s ZH, not a neighbor unit |
| **C3** | Explanation link | `plain.zh/en` restates **this** unit’s meaning (terms/events from `text.zh`); not generic boilerplate |
| **C4** | Application link | `application` draws practice from **this** unit; has `建議` / `Suggestion`; not copy-pasted across units |
| **C5** | Cross-field coherence | text → plain → application form one chain (no contradiction / orphan advice) |
| **S0** | Speech mechanical | `npm run audit-speech -- --fail` |
| **S1** | Speech notes | Misreads fixed via `speech.zh` and/or [`src/data/speech/works/`](../src/data/speech/works/); comments document readings |
| **S2** | Display untouched | `text.zh` never edited only for TTS |

## Pipeline

```text
Writer AI → C0 + S0 (scripts) → Checker AI (C1–C5, S1–S2) → update ledger
                ↑________________ FAIL only _________________|
```

- **Writer** (`.cursor/rules/content-writer.mdc`): authors/fixes units and speech.
- **Checker** (`.cursor/rules/content-checker.mdc`): reports `PASS`/`FAIL` by check ID + unit id; does not re-litigate ledger `pass` unless content changed.

## Sweep order (first full pass)

1. Confucian: `liyun-datong` → `filial-piety` → `great-learning` → `doctrine-of-mean` → `spring-and-autumn`
2. Taoist: `qingjing-jing`, `yinfu-jing` → `taishang-ganying` → `tao-te-ching`
3. Buddhist: `heart-sutra` → `amitabha-sutra` → `diamond-sutra` → `platform-sutra`

## Scripts

```bash
npm run validate-data
npm run audit-speech -- --fail
npm run audit-speech -- --tradition=confucian
```
