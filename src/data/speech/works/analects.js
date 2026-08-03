import shared from "./confucianShared.js";

/**
 * 論語 — work lexicon on top of confucianShared.
 * Prefer phrase rules; add unit speech.zh only for dense/ambiguous 章.
 */
export default {
  phrases: [
    ...shared.phrases,
    // 說 yuè (=悅) in 不亦說乎 / 子說
    { from: "不亦說乎", to: "不亦悅乎" },
    { from: "子說", to: "子悅" },
    { from: "不說", to: "不悅" },
    { from: "則不說", to: "則不悅" },
    { from: "能無說乎", to: "能無悅乎" },
    { from: "說而不繹", to: "悅而不繹" },
    // 好 hào
    { from: "好學", to: "耗學" },
    { from: "好犯上", to: "耗犯上" },
    { from: "好作亂", to: "耗作亂" },
    { from: "好謀", to: "耗謀" },
    { from: "好仁", to: "耗仁" },
    { from: "好禮", to: "耗禮" },
    { from: "好德", to: "耗德" },
    { from: "好色", to: "耗色" },
    { from: "好勇", to: "耗勇" },
    { from: "好古", to: "耗古" },
    // 弟 tì (=悌)
    { from: "孝弟", to: "孝悌" },
    { from: "出則弟", to: "出則悌" },
    { from: "稱弟焉", to: "稱悌焉" },
    // 省 xǐng
    { from: "三省吾身", to: "三醒吾身" },
    { from: "內自省", to: "內自醒" },
    { from: "吾日三省", to: "吾日三醒" },
    // 樂 yuè (music) clear phrases
    { from: "禮樂", to: "禮月" },
    { from: "成於樂", to: "成於月" },
    { from: "語樂", to: "語月" },
    { from: "與樂", to: "與月" },
    // 朝 zhāo
    { from: "朝聞道", to: "招聞道" },
    { from: "朝夕", to: "招夕" },
    // 女 rǔ (=汝)
    { from: "誨女", to: "誨汝" },
    { from: "今女", to: "今汝" },
    { from: "女器", to: "汝器" },
    { from: "女弗", to: "汝弗" },
    { from: "女安", to: "汝安" },
    { from: "女為", to: "汝位" },
    { from: "女得", to: "汝得" },
    { from: "女奚", to: "汝奚" },
    // 知 zhì (=智) in clear wisdom compounds
    { from: "焉得知", to: "焉得智" },
    { from: "不知其仁", to: "不知其仁" },
    { from: "是知也", to: "是智也" },
    { from: "知者不惑", to: "智者不惑" },
    { from: "知者樂水", to: "智者樂水" },
    { from: "知者動", to: "智者動" },
    { from: "知者樂", to: "智者樂" },
    { from: "樊遲問知", to: "樊遲問智" },
    { from: "可謂知矣", to: "可謂智矣" },
    { from: "問知", to: "問智" }
  ],
  contexts: [
    ...shared.contexts,
    { re: /不亦說乎/g, to: "不亦悅乎" },
    { re: /能無說乎/g, to: "能無悅乎" },
    { re: /說而不繹/g, to: "悅而不繹" },
    { re: /子說(?=[。！？「」])/g, to: "子悅" },
    { re: /好(?=學|仁|禮|德|色|勇|古|謀|犯|作)/g, to: "耗" },
    { re: /孝弟/g, to: "孝悌" },
    { re: /出則弟/g, to: "出則悌" },
    { re: /三省/g, to: "三醒" },
    { re: /自省/g, to: "自醒" },
    { re: /朝聞/g, to: "招聞" },
    { re: /知者不/g, to: "智者不" },
    { re: /知者樂/g, to: "智者樂" },
    { re: /知者動/g, to: "智者動" },
    { re: /誨女/g, to: "誨汝" },
    { re: /今女/g, to: "今汝" },
    { re: /女(?=器|弗|安|得|奚|為)/g, to: "汝" }
  ]
};
