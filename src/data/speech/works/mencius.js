import shared from "./confucianShared.js";

/**
 * 孟子 — work lexicon on top of confucianShared.
 * Prefer phrase rules; add unit speech.zh only for dense/ambiguous 章.
 */
export default {
  phrases: [
    ...shared.phrases,
    // 好 hào
    { from: "好戰", to: "耗戰" },
    { from: "好樂", to: "耗勒" },
    { from: "好貨", to: "耗貨" },
    { from: "好色", to: "耗色" },
    { from: "好善", to: "耗善" },
    { from: "好名", to: "耗名" },
    { from: "好辯", to: "耗辯" },
    { from: "好勇", to: "耗勇" },
    { from: "好為人師", to: "耗為人師" },
    { from: "王之好", to: "王之耗" },
    { from: "王好", to: "王耗" },
    // 樂 lè vs yuè
    { from: "與民同樂", to: "與民同勒" },
    { from: "獨樂樂", to: "獨月勒" },
    { from: "與人樂樂", to: "與人月勒" },
    { from: "與眾樂樂", to: "與眾月勒" },
    { from: "與少樂樂", to: "與少月勒" },
    { from: "今之樂", to: "今之月" },
    { from: "古之樂", to: "古之月" },
    { from: "聞其樂", to: "聞其月" },
    { from: "相說之樂", to: "相悅之月" },
    { from: "不亦樂乎", to: "不亦勒乎" },
    { from: "後樂此", to: "後勒此" },
    { from: "不樂也", to: "不勒也" },
    { from: "樂歲", to: "勒歲" },
    { from: "安樂", to: "安勒" },
    // 說 = 悅 yuè
    { from: "王說曰", to: "王悅曰" },
    { from: "景公說", to: "景公悅" },
    // 惡 wù (hate) vs wū (how)
    { from: "羞惡", to: "羞務" },
    { from: "所惡", to: "所務" },
    { from: "惡惡", to: "務惡" },
    { from: "惡旨酒", to: "務旨酒" },
    { from: "父母惡", to: "父母務" },
    { from: "惡知其", to: "烏知其" },
    { from: "彼惡知", to: "彼烏知" },
    { from: "惡得", to: "烏得" },
    // 長 zhǎng (treat as elder / grow as elder-care)
    { from: "長子", to: "掌子" },
    { from: "長幼", to: "掌幼" },
    { from: "為長者", to: "為掌者" },
    { from: "事其長上", to: "事其掌上" },
    { from: "所長在", to: "所掌在" },
    { from: "長馬之長", to: "掌馬之掌" },
    { from: "長人之長", to: "掌人之掌" },
    { from: "長之者", to: "掌之者" },
    { from: "我長之", to: "我掌之" },
    // 為 wèi
    { from: "為我", to: "位我" },
    { from: "為王", to: "位王" },
    { from: "為民父母", to: "位民父母" },
    { from: "為長者折枝", to: "位掌者折枝" },
    // 省 xǐng (inspect)
    { from: "春省耕", to: "春醒耕" },
    { from: "秋省斂", to: "秋醒斂" },
    // 朝 zhāo (morning) in Shijing quote
    { from: "來朝走馬", to: "來招走馬" },
    // 著 zhuó (manifest / attach)
    { from: "不著", to: "不卓" },
    { from: "而不著焉", to: "而不卓焉" }
  ],
  contexts: [...shared.contexts]
};
