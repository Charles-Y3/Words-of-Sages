# Content & pronunciation QA

Checks **C0–C5** and **S0–S2** are performed by **AI tools** (content-writer and content-checker agents) plus the npm scripts below. Humans spot-listen speech and spot-read originals when needed. Results live in [`CONTENT_QA_LEDGER.md`](CONTENT_QA_LEDGER.md) so the same check is **not** re-run from scratch unless content changed or a check failed.

## Available works (24)

| Tradition | Works |
|-----------|--------|
| Confucian (8) | `liyun-datong`, `great-learning`, `doctrine-of-mean`, `analects`, `mencius`, `kongzi-jiayu`, `filial-piety`, `spring-and-autumn` |
| Taoist (8) | `tao-te-ching`, `qingjing-jing`, `neiguan-jing`, `yinfu-jing`, `taishang-ganying`, `zuowang-lun`, `taiyi-jinhua`, `zhuangzi-neipian` |
| Buddhist (8) | `heart-sutra`, `diamond-sutra`, `amitabha-sutra`, `medicine-buddha`, `contemplation-sutra`, `bequeathed-teachings`, `forty-two-chapters`, `platform-sutra` |

## Checklist (stable IDs)

| ID | What | How |
|----|------|-----|
| **C0** | Schema | `npm run validate-data` — sequential ids; `text` / `plain` / `application` × zh+en non-empty |
| **C1** | Original ZH accuracy | `text.zh` matches the received classical source for that work (edition in `works.js` attribution) |
| **C2** | Original EN fidelity | `text.en` translates *this* unit’s ZH, not a neighbor unit |
| **C2b** | Unit boundary integrity | When a long chapter is split across units, each unit must be a **readable complete chunk**. Do **not** end `text.zh` / `text.en` on a mid-clause cut (`，` `、` `：` `；` `,` `:` or open lead-ins like `曰：` / `偈曰：` / `問：` / `He said:`). Do **not** start the next unit mid-sentence (orphaned `」`/`』`, lowercase EN continuation, or a clause that only completes the previous unit). Cut at finished sentences, closed quotes, finished verses, or finished exchanges. Length-based chops that leave `如是，` / `則一切…` style joins are defects even when the concatenated corpus is correct. **Found / fixed 2026-08-09 on `platform-sutra`** (systematic mid-clause chops + plains that drifted from the unit); keep this check when subdividing other long works. |
| **C3** | Explanation link | `plain.zh/en` restates **this** unit’s meaning (terms/events from `text.zh`); not generic boilerplate. For long units, the plain should **walk the original** (paraphrase/clarify hard lines in order), not replace the walkthrough with detached meta-essays, borrow a neighbor unit’s question as if it were here, or invent steps the text does not say. **Fail if the plain is a near-copy of `text.zh`** (same wording with light punctuation) with commentary only tacked on — that duplicates Original in Explanation and inflates C6 without teaching (**found work-wide on `platform-sutra` 2026-08-09**). |
| **C4** | Application link | `application` draws practice from **this** unit's specific teaching/imagery, not generic life advice interchangeable across units; has `建議` / `Suggestion`. Checked as its own explicit pass, not assumed covered by C3. `application.zh` must not contain dumped English prose after the 建議 line (misplaced plain material). |
| **C5** | Cross-field coherence | text → plain → application form one chain (no contradiction / orphan advice) |
| **C6** | Proportional depth | `plain.zh` length relative to `text.zh` length. `npm run audit-depth` reports per-unit and work-average ratio; healthy works track the Analects baseline (~2.8x average, well under 5% of units below half-length). A dense classical passage rendered in a compressed gloss is a proportional-depth defect even when the gloss is factually correct. |
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

1. Confucian: `liyun-datong` → `filial-piety` → `great-learning` → `doctrine-of-mean` → `analects` → `mencius` → `kongzi-jiayu` → `spring-and-autumn`
2. Taoist: `qingjing-jing`, `neiguan-jing`, `yinfu-jing` → `taishang-ganying` → `tao-te-ching` → `zuowang-lun` → `taiyi-jinhua` → `zhuangzi-neipian`
3. Buddhist: `heart-sutra` → `amitabha-sutra` → `medicine-buddha` → `contemplation-sutra` → `bequeathed-teachings` → `forty-two-chapters` → `diamond-sutra` → `platform-sutra`

## Scripts

```bash
npm run validate-data
npm run audit-speech -- --fail
npm run audit-speech -- --tradition=confucian
npm run audit-depth
```
