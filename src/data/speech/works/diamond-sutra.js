import shared from "./buddhistShared.js";

/**
 * 金剛經 — 相 xiàng; 著 zhuó; 阿耨多羅三藐三菩提 phonetic aid.
 * 耨≈nòu→「耨」often OK; 藐 miǎo → 秒-like; use phrase-level aid.
 */
export default {
  phrases: [
    ...shared.phrases,
    { from: "阿耨多羅三藐三菩提", to: "阿耨多羅三秒三菩提" },
    { from: "著地", to: "卓地" },
    { from: "著我", to: "卓我" },
    { from: "則為著我", to: "則為卓我" },
    { from: "我相", to: "我向" },
    { from: "人相", to: "人向" },
    { from: "眾生相", to: "眾生向" },
    { from: "壽者相", to: "壽者向" },
    { from: "法相", to: "法向" },
    { from: "非法相", to: "非法向" },
    { from: "諸相", to: "諸向" },
    { from: "取相", to: "取向" },
    { from: "著相", to: "卓向" },
    { from: "實相", to: "實向" },
    { from: "非相", to: "非向" },
    { from: "一切相", to: "一切向" },
    { from: "斷滅相", to: "斷滅向" },
    { from: "具足相", to: "具足向" }
  ],
  contexts: [
    ...shared.contexts,
    { re: /著(?=地|我)/g, to: "卓" },
    { re: /(?<=[我人法諸非取實斷滅一切壽者眾])相/g, to: "向" },
    { re: /相(?=即|者|故)/g, to: "向" }
  ]
};
