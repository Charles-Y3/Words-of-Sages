import shared from "./buddhistShared.js";

/** 阿彌陀經 — proper names / 破音字. */
export default {
  phrases: [
    ...shared.phrases,
    { from: "極樂", to: "極勒" },
    { from: "作天樂", to: "作天月" },
    { from: "百千種樂", to: "百千種月" },
    // 舍利弗 / 舍衛 — shè (not shě/shè misread as other)
    { from: "舍利弗", to: "社利弗" },
    { from: "舍衛國", to: "社衛國" },
    { from: "舍衛", to: "社衛" },
    // 宿王佛 — xiù
    { from: "宿王佛", to: "秀王佛" },
    // 薄拘羅 — bó
    { from: "薄拘羅", to: "博拘羅" }
  ],
  contexts: [...shared.contexts]
};
