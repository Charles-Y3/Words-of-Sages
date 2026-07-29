import shared from "./confucianShared.js";

/** 大學 — Zhu Xi 新民 (display text uses 新民); 好 hào / 惡 wù residuals. */
export default {
  phrases: [
    ...shared.phrases,
    // 好 hào
    { from: "好好色", to: "耗耗色" },
    { from: "如好好色", to: "如耗耗色" },
    { from: "有所好樂", to: "有所耗勒" },
    { from: "好而知其惡", to: "耗而知其惡" },
    { from: "其所好", to: "其所耗" },
    { from: "反其所好", to: "反其所耗" },
    { from: "民之所好好之", to: "民之所耗耗之" },
    { from: "好人之所惡", to: "耗人之所務" },
    { from: "其心好之", to: "其心耗之" },
    { from: "上好仁", to: "上耗仁" },
    { from: "不好義", to: "不耗義" },
    { from: "好義", to: "耗義" },
    // 惡 wù residuals
    { from: "所賤惡", to: "所賤務" },
    { from: "惡而知其美", to: "務而知其美" },
    { from: "如惡惡臭", to: "如務惡臭" },
    { from: "以惡之", to: "以務之" },
    { from: "媢嫉以惡之", to: "媢嫉以務之" },
    { from: "能惡人", to: "能務人" }
  ],
  contexts: [
    ...shared.contexts,
    { re: /好好色/g, to: "耗耗色" },
    { re: /好(?=色|樂|仁|義)/g, to: "耗" },
    { re: /所賤惡/g, to: "所賤務" },
    { re: /惡而知其美/g, to: "務而知其美" },
    { re: /以惡之/g, to: "以務之" }
  ]
};
