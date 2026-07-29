import shared from "./taoistShared.js";

/** 太上感應篇 — work-specific 破音字 (do not force 所長→zhǎng; parallels 所短 = cháng). */
export default {
  phrases: [
    ...shared.phrases,
    { from: "樂人之善", to: "勒人之善" },
    { from: "樂人之惡", to: "勒人之惡" },
    // 好 hào
    { from: "好侵好奪", to: "耗侵耗奪" },
    { from: "每好矜誇", to: "每耗矜誇" },
    // 還 huán
    { from: "假借不還", to: "假借不環" },
    { from: "不還", to: "不環" }
  ],
  contexts: [...shared.contexts]
};
