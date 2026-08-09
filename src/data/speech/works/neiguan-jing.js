import shared from "./taoistShared.js";

/** 太上老君內觀經 — 破音字 / classical phrases. */
export default {
  phrases: [
    ...shared.phrases,
    { from: "長生", to: "掌生" },
    { from: "長存", to: "掌存" },
    { from: "長保", to: "掌保" },
    { from: "好清", to: "耗清" },
    { from: "好靜", to: "耗靜" },
    { from: "染著", to: "染卓" },
    { from: "執著", to: "執卓" },
    { from: "不著", to: "不卓" },
    { from: "惡死", to: "務死" },
    // 藏 zàng (viscera/organs, noun) vs 藏 cáng (store, verb) — back-to-back in "五藏藏五神"
    { from: "五藏藏五神", to: "五臟藏五神" },
    // 分 fèn (allotted share)
    { from: "大小有分", to: "大小有份" },
    { from: "有分謂之軀", to: "有份謂之軀" }
  ],
  contexts: [...shared.contexts]
};
