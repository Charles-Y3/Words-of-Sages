# Content QA ledger

Status per available work. Do **not** re-run semantic checks (C1–C5, S1–S2) from scratch when the row is `pass` unless that work’s data files changed or a check is `fail`.

Values: `pending` | `pass` | `fail`

Mechanical **C0** / **S0** re-verified 2026-07-29 after writer fixes (`npm run validate-data`, `npm run audit-speech -- --fail` green). Semantic columns updated same day after applying Unit-level FAIL log fixes.

| workId | tradition | units | C0 | C1 | C2 | C3 | C4 | C5 | S0 | S1 | S2 | lastChecked | notes |
|--------|-----------|------:|----|----|----|----|----|----|----|----|----|-------------|-------|
| liyun-datong | confucian | 5 | pass | pass | pass | pass | pass | pass | pass | pass | pass | 2026-07-29 | Independent Claude re-check CONFIRMS all-pass; 矜＝鰥(guān)/與＝舉(jǔ) verified |
| filial-piety | confucian | 18 | pass | pass | pass | pass | pass | pass | pass | pass | pass | 2026-07-29 | Writer fixed S1: 大夫/事長/移於長/怨惡/簠簋/為之 in filial-piety.js |
| great-learning | confucian | 37 | pass | pass | pass | pass | pass | pass | pass | pass | pass | 2026-07-29 | Writer fixed C1/C5 unit1 親民→新民 (朱子章句); S1 好/惡 overrides in great-learning.js |
| doctrine-of-mean | confucian | 38 | pass | pass | pass | pass | pass | pass | pass | pass | pass | 2026-07-29 | Writer fixed S1: 知/智 triad, 好, 強=qiǎng, 夫政, 中節/時中 |
| spring-and-autumn | confucian | 65 | pass | pass | pass | pass | pass | pass | pass | pass | pass | 2026-07-29 | Writer removed unit1 duplicate 莒人入向; S1 來朝/單/召/費/樂-surname overrides |
| qingjing-jing | taoist | 8 | pass | pass | pass | pass | pass | pass | pass | pass | pass | 2026-07-29 | Writer fixed C1 unit4 於→其 (Daozang wording); S1 好清/好靜/好爭 |
| yinfu-jing | taoist | 8 | pass | pass | pass | pass | pass | pass | pass | pass | pass | 2026-07-29 | Writer fixed C1 unit2 萬化→萬變定基; S1 移星易宿(xiù), 炁→氣 |
| taishang-ganying | taoist | 13 | pass | pass | pass | pass | pass | pass | pass | pass | pass | 2026-07-29 | Writer fixed S1: removed wrong 所長→zhǎng; added 好侵好奪/每好矜誇/假借不還 |
| tao-te-ching | taoist | 81 | pass | pass | pass | pass | pass | pass | pass | pass | pass | 2026-07-29 | Writer fixed ch80 。+ EN closing; ch35 BBy→By; S1 長/夫/樂 in taoistShared |
| heart-sutra | buddhist | 6 | pass | pass | pass | pass | pass | pass | pass | pass | pass | 2026-07-29 | Full unit review; unchanged |
| amitabha-sutra | buddhist | 11 | pass | pass | pass | pass | pass | pass | pass | pass | pass | 2026-07-29 | Writer fixed S1: 舍利弗/舍衛/宿王佛/薄拘羅 |
| diamond-sutra | buddhist | 40 | pass | pass | pass | pass | pass | pass | pass | pass | pass | 2026-07-29 | Writer fixed S1: 相(xiàng), 著地/著我, 阿耨多羅三藐三菩提 |
| platform-sutra | buddhist | 30 | pass | pass | pass | pass | pass | pass | pass | pass | pass | 2026-07-29 | Writer fixed S1: 為說/為法 (wèi); left 有何所長 as cháng |

## Unit-level FAIL log

Only list open failures (clear when fixed):

| workId | unit | check | reason | suggested fix |
|--------|-----:|-------|--------|---------------|
| — | — | — | *(none open)* | — |

## Checker sweep log

```text
PASS | liyun-datong | C1 C2 C3 C4 C5 S1 S2
PASS | heart-sutra | C1 C2 C3 C4 C5 S1 S2
FIXED | filial-piety | S1 (大夫/事長/移於長/怨惡/簠簋/為之)
FIXED | great-learning | C1 C5 S1 (unit1 新民; 好/惡)
FIXED | doctrine-of-mean | S1 (知/智, 好, 強, 夫政, 中節)
FIXED | spring-and-autumn | C1 S1 (unit1 duplicate; 來朝/單/召/費/樂)
FIXED | qingjing-jing | C1 S1 (unit4 其; 好 hào)
FIXED | yinfu-jing | C1 S1 (萬變定基; 星宿/炁)
FIXED | taishang-ganying | S1 (所長=cháng; 好/還)
FIXED | tao-te-ching | C1 C2 C3 S1 (ch80/ch35; 長/夫/樂)
FIXED | amitabha-sutra | S1 (舍利弗/舍衛/宿王佛/薄拘羅)
FIXED | diamond-sutra | S1 (相/著/阿耨…)
FIXED | platform-sutra | S1 (為說/為法)
PASS | all 13 available | C0 S0 (validate-data + audit-speech --fail, 2026-07-29 post-fix)
```

All 13 available works: open Unit-level FAILs cleared by content-writer; C0/S0 green. Re-check semantically only if a work’s data files change again.
