import shared from "./buddhistShared.js";

/** 四十二章經 — proper names / 破音字. */
export default {
  phrases: [
    ...shared.phrases,
    { from: "憍陳如", to: "驕陳如" },
    { from: "斯陀含", to: "司陀含" },
    { from: "須陀洹", to: "須陀桓" },
    { from: "辟支佛", to: "壁支佛" },
    { from: "阿耨池", to: "阿諾池" },
    { from: "訶子", to: "喝子" },
    { from: "迦葉佛", to: "加葉佛" },
    { from: "見好不求", to: "見耗不求" },
    { from: "愛道", to: "愛導" },
    { from: "樂道", to: "勒道" },
    { from: "清淨安樂", to: "清淨安勒" },
    { from: "安樂", to: "安勒" },
    { from: "少者", to: "紹者" },
    { from: "長者", to: "掌者" }
  ],
  contexts: [...shared.contexts]
};
