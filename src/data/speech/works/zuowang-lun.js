import shared from "./taoistShared.js";

/** 坐忘論 — 破音字 / classical phrases. */
export default {
  phrases: [
    ...shared.phrases,
    { from: "夫人之所貴", to: "扶人之所貴" },
    { from: "夫信者", to: "扶信者" },
    { from: "夫坐忘者", to: "扶坐忘者" },
    { from: "夫心者", to: "扶心者" },
    { from: "夫心之為物", to: "扶心之為物" },
    { from: "夫法之妙者", to: "扶法之妙者" },
    { from: "夫火以熱為用", to: "扶火以熱為用" },
    { from: "夫為大道者", to: "扶為大道者" },
    { from: "夫人之生也", to: "扶人之生也" },
    { from: "夫以名位比於道", to: "扶以名位比於道" },
    { from: "夫人事衣食者", to: "扶人事衣食者" },
    { from: "夫觀者", to: "扶觀者" },
    { from: "夫定者", to: "扶定者" },
    { from: "夫道者", to: "扶道者" },
    { from: "夫欲修道", to: "扶欲修道" },
    { from: "夫得道", to: "扶得道" },
    { from: "夫上清隱秘", to: "扶上清隱秘" },
    { from: "長生", to: "掌生" },
    { from: "西昇經", to: "西升經" },
    { from: "樂天知命", to: "勒天知命" },
    { from: "樂生死之業", to: "勒生死之業" },
    // 著 zhuó
    { from: "不著一物", to: "不卓一物" },
    { from: "不著物", to: "不卓物" },
    { from: "不著空", to: "不卓空" },
    { from: "自云不著", to: "自云不卓" },
    { from: "貪著", to: "貪卓" },
    // 分 fèn
    { from: "有分", to: "有份" },
    { from: "分之外", to: "份之外" },
    { from: "分之所無", to: "份之所無" },
    // 為 wéi in 以為己病
    { from: "以為己病", to: "以圍己病" }
  ],
  contexts: [...shared.contexts]
};
