import shared from "./buddhistShared.js";

/** 佛遺教經 — proper names / 破音字. */
export default {
  phrases: [
    ...shared.phrases,
    { from: "阿若憍陳如", to: "阿惹憍陳如" },
    { from: "憍陳如", to: "驕陳如" },
    { from: "須跋陀羅", to: "須拔陀羅" },
    { from: "波羅提木叉", to: "波囉提木叉" },
    { from: "阿㝹樓馱", to: "阿奴樓馱" },
    { from: "娑羅雙樹", to: "梭羅雙樹" },
    { from: "著壞色衣", to: "卓壞色衣" },
    { from: "著鎧入陣", to: "卓鎧入陣" },
    { from: "樂眾者", to: "勒眾者" },
    { from: "寂滅樂", to: "寂滅勒" },
    { from: "安樂", to: "安勒" },
    { from: "富樂", to: "富勒" },
    { from: "好制", to: "耗制" },
    { from: "為諸弟子", to: "位諸弟子" },
    { from: "復為眾說", to: "復位眾說" },
    { from: "為智慧水", to: "位智慧水" },
    { from: "不可令樂", to: "不可令勒" }
  ],
  contexts: [...shared.contexts]
};
