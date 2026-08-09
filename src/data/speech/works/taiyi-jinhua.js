import shared from "./taoistShared.js";

/** 太乙金華宗旨 — 破音字 / classical phrases. */
export default {
  phrases: [
    ...shared.phrases,
    { from: "好色", to: "耗色" },
    { from: "好生", to: "耗生" },
    { from: "夫天心", to: "扶天心" },
    { from: "夫道", to: "扶道" },
    { from: "夫回光", to: "扶回光" },
    { from: "長生", to: "常生" },
    { from: "著相", to: "卓相" },
    { from: "執著", to: "執卓" },
    { from: "不著", to: "不卓" },
    { from: "樂天", to: "勒天" },
    { from: "坎離", to: "砍離" },
    { from: "周天", to: "周天" },
    { from: "識神", to: "十神" },
    { from: "元神", to: "元神" },
    // 為 wéi (“as / to be”)
    { from: "認物為己", to: "認物圍己" },
    { from: "借他為自", to: "借他圍自" }
  ],
  contexts: [...shared.contexts]
};
