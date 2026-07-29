import shared from "./confucianShared.js";

/** 中庸 — 知=zhì wisdom; 好=hào; 中=zhòng; 強=qiǎng; 夫政. */
export default {
  phrases: [
    ...shared.phrases,
    { from: "喜怒哀樂", to: "喜怒哀勒" },
    // 中 zhòng
    { from: "中節", to: "仲節" },
    { from: "皆中節", to: "皆仲節" },
    { from: "時中", to: "時仲" },
    { from: "而時中", to: "而時仲" },
    // 知 zhì (=智) in wisdom compounds
    { from: "知者過之", to: "智者過之" },
    { from: "大知", to: "大智" },
    { from: "睿知", to: "睿智" },
    { from: "聖知", to: "聖智" },
    { from: "聰明睿知", to: "聰明睿智" },
    { from: "聰明聖知", to: "聰明聖智" },
    { from: "近乎知", to: "近乎智" },
    // 好 hào
    { from: "好問", to: "耗問" },
    { from: "好察", to: "耗察" },
    { from: "好學", to: "耗學" },
    { from: "好自用", to: "耗自用" },
    { from: "好自專", to: "耗自專" },
    // 夫 fú
    { from: "夫政", to: "扶政" },
    // 強 qiǎng
    { from: "勉強", to: "勉搶" },
    { from: "或勉強", to: "或勉搶" }
  ],
  contexts: [
    ...shared.contexts,
    { re: /中節/g, to: "仲節" },
    { re: /時中/g, to: "時仲" },
    { re: /大知/g, to: "大智" },
    { re: /睿知/g, to: "睿智" },
    { re: /聖知/g, to: "聖智" },
    { re: /好(?=問|察|學|自)/g, to: "耗" },
    { re: /夫政/g, to: "扶政" },
    { re: /勉強/g, to: "勉搶" }
  ]
};
