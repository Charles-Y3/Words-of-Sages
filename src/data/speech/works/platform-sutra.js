import shared from "./buddhistShared.js";

/** 六祖壇經 — 為說/為法 = wèi (purpose). 有何所長 = cháng (strengths), leave default. */
export default {
  phrases: [
    ...shared.phrases,
    { from: "不思善、不思惡", to: "不思善、不思務" },
    { from: "不思善不思惡", to: "不思善不思務" },
    { from: "為說", to: "位說" },
    { from: "為法", to: "位法" },
    { from: "為法來", to: "位法來" },
    { from: "為法忘軀", to: "位法忘軀" },
    { from: "為法切", to: "位法切" },
    { from: "吾為汝說", to: "吾位汝說" },
    { from: "當為說", to: "當位說" }
  ],
  contexts: [
    ...shared.contexts,
    { re: /為(?=說|法)/g, to: "位" }
  ]
};
