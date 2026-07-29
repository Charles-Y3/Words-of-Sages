import shared from "./taoistShared.js";

/** 陰符經 — 星宿 xiù; 炁 ≈ 氣 (qì). */
export default {
  phrases: [
    ...shared.phrases,
    { from: "至樂性", to: "至勒性" },
    { from: "移星易宿", to: "移星易秀" },
    { from: "易宿", to: "易秀" },
    { from: "在炁", to: "在氣" },
    { from: "炁", to: "氣" }
  ],
  contexts: [...shared.contexts]
};
