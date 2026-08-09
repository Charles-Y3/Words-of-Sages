import shared from "./confucianShared.js";

/**
 * 孔子家語 — work lexicon on top of confucianShared.
 * Prefer phrase rules; add unit speech.zh only for dense/ambiguous passages.
 */
export default {
  phrases: [
    ...shared.phrases,
    // 好 hào
    { from: "好生", to: "耗生" },
    { from: "好學", to: "耗學" },
    { from: "好禮", to: "耗禮" },
    { from: "好仁", to: "耗仁" },
    { from: "好義", to: "耗義" },
    { from: "好名", to: "耗名" },
    { from: "好勇", to: "耗勇" },
    { from: "好色", to: "耗色" },
    // 樂 lè / yuè
    { from: "不亦樂乎", to: "不亦勒乎" },
    { from: "樂道", to: "勒道" },
    { from: "安樂", to: "安勒" },
    { from: "樂只君子", to: "勒只君子" },
    { from: "君子之於樂者", to: "君子之於勒者" },
    { from: "音樂", to: "音月" },
    { from: "禮樂", to: "禮月" },
    { from: "雅樂", to: "雅月" },
    { from: "樂者，節也", to: "月者，節也" },
    { from: "不能樂", to: "不能月" },
    { from: "達於樂", to: "達於月" },
    { from: "深於樂", to: "深於月" },
    { from: "夫樂者", to: "扶月者" },
    { from: "樂者，象成", to: "月者，象成" },
    { from: "歌樂", to: "歌月" },
    { from: "嘉樂", to: "嘉月" },
    { from: "樂教", to: "月教" },
    { from: "樂之失", to: "月之失" },
    { from: "樂之所至", to: "月之所至" },
    { from: "無聲之樂", to: "無聲之月" },
    { from: "鄭聲", to: "鄭聲" },
    // 惡 wù
    { from: "夷說", to: "夷悅" },
    { from: "惡貪", to: "務貪" },
    { from: "所惡", to: "所務" },
    { from: "惡惡", to: "務惡" },
    { from: "羞惡", to: "羞務" },
    // 長 zhǎng
    { from: "長幼", to: "掌幼" },
    { from: "長上", to: "掌上" },
    { from: "長者", to: "掌者" },
    { from: "長子", to: "掌子" },
    // 相 xiàng / xiāng
    { from: "相魯", to: "象魯" },
    { from: "攝相事", to: "攝象事" },
    // 為 wèi
    { from: "為政", to: "位政" },
    { from: "為君", to: "位君" }
  ],
  contexts: [...shared.contexts]
};
