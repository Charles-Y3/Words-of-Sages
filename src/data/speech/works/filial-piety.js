import shared from "./confucianShared.js";

/** 孝經 — ranks, elders, ritual vessels, purpose 為. */
export default {
  phrases: [
    ...shared.phrases,
    // 大夫 dàfū (not dàifu “doctor”)
    { from: "卿、大夫", to: "卿、代夫" },
    { from: "卿大夫", to: "卿代夫" },
    { from: "大夫有爭", to: "代夫有爭" },
    { from: "大夫", to: "代夫" },
    // 長 zhǎng elder
    { from: "事長", to: "事掌" },
    { from: "移於長", to: "移於掌" },
    { from: "敬事長", to: "敬事掌" },
    // 怨惡 yuànwù
    { from: "怨惡", to: "怨務" },
    // 簠簋 fǔ guǐ
    { from: "簠簋", to: "甫軌" },
    { from: "陳其簠簋", to: "陳其甫軌" },
    // 為之 wèi (purpose)
    { from: "為之棺槨", to: "位之棺槨" },
    { from: "為之宗廟", to: "位之宗廟" },
    { from: "為之", to: "位之" }
  ],
  contexts: [
    ...shared.contexts,
    { re: /大夫/g, to: "代夫" },
    { re: /(?<=[事於移敬])長(?![子女幼養])/g, to: "掌" },
    { re: /怨惡/g, to: "怨務" },
    { re: /簠簋/g, to: "甫軌" },
    { re: /為之(?=棺|宗)/g, to: "位之" }
  ]
};
