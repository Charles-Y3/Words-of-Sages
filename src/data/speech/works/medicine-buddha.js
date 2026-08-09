import shared from "./buddhistShared.js";

/** 藥師經 — proper names / 破音字. */
export default {
  phrases: [
    ...shared.phrases,
    { from: "曼殊室利", to: "曼殊室利" },
    { from: "薄伽梵", to: "博伽梵" },
    { from: "殑伽沙", to: "兢伽沙" },
    { from: "伎樂", to: "伎月" },
    { from: "樂音樹", to: "勒音樹" },
    { from: "極樂", to: "極勒" },
    { from: "安樂", to: "安勒" },
    { from: "不樂欲樂", to: "不勒欲勒" },
    { from: "欲樂", to: "欲勒" },
    { from: "為欲利樂", to: "位欲利勒" },
    { from: "大利樂", to: "大利勒" },
    { from: "利樂", to: "利勒" },
    { from: "歡樂", to: "歡勒" },
    { from: "樂願", to: "勒願" },
    { from: "樂聞", to: "勒聞" },
    { from: "好憙", to: "耗希" },
    { from: "好行", to: "耗行" },
    { from: "長病", to: "掌病" },
    { from: "長壽", to: "掌壽" },
    { from: "橫死", to: "轟死" },
    { from: "藥叉", to: "藥差" },
    { from: "琰魔", to: "炎魔" },
    // 為 wèi — keep 「是為彼世尊」 untouched; use longer phrases only
    { from: "為他演說", to: "位他演說" },
    { from: "為彼歸依", to: "位彼歸依" },
    { from: "當為其人", to: "當位其人" },
    { from: "為拔", to: "位拔" }
  ],
  contexts: [...shared.contexts]
};
