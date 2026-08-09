import shared from "./taoistShared.js";

/** 莊子·內篇 — 破音字 / classical phrases. */
export default {
  phrases: [
    ...shared.phrases,
    // 惡 wù
    { from: "惡乎", to: "烏乎" },
    { from: "所惡", to: "所務" },
    { from: "惡死", to: "務死" },
    { from: "且惡", to: "且務" },
    // 樂 lè / yuè
    { from: "至樂", to: "至勒" },
    { from: "不亦樂乎", to: "不亦勒乎" },
    { from: "天樂", to: "天月" },
    { from: "人樂", to: "人勒" },
    { from: "鼓琴", to: "鼓琴" },
    // 長 zhǎng / cháng
    { from: "長者", to: "掌者" },
    { from: "長生", to: "掌生" },
    { from: "長子", to: "掌子" },
    // 為 wéi
    { from: "無為", to: "無圍" },
    { from: "無為也", to: "無圍也" },
    // 著 zhuó
    { from: "無著", to: "無卓" },
    { from: "執著", to: "執卓" },
    // names / terms
    { from: "南郭子綦", to: "南郭子旗" },
    { from: "接輿", to: "接輿" },
    { from: "庖丁", to: "袍丁" },
    { from: "惠子", to: "惠子" },
    { from: "螳螂", to: "堂螂" },
    // 分 fèn
    { from: "有分", to: "有份" },
    { from: "必有分矣", to: "必有份矣" },
    // 長 cháng in 德有所長而形有所忘 (excellence / length — not zhǎng)
    { from: "德有所長", to: "德有所常" },
    // 景 jǐng used archaically for 影 yǐng "shadow" (罔兩問景 dialogue, 2.9)
    { from: "景曰", to: "影曰" },
    // 樂 yuè "music" (not lè "joy") in 樂出虛 — music/pipes arising from emptiness, 2.2
    { from: "樂出虛", to: "月出虛" }
  ],
  contexts: [...shared.contexts]
};
