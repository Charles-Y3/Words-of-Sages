import shared from "./confucianShared.js";

/** 春秋 — court audience 朝; surnames 單/召/樂; place 費. */
export default {
  phrases: [
    ...shared.phrases,
    // 來朝 cháo
    { from: "來朝", to: "來潮" },
    // 單 Shàn
    { from: "單伯", to: "善伯" },
    { from: "單子", to: "善子" },
    // 召 Shào
    { from: "召陵", to: "邵陵" },
    { from: "召伯", to: "邵伯" },
    // 費 Bì (Lu stronghold / place)
    { from: "城費", to: "城閉" },
    { from: "圍費", to: "圍閉" },
    { from: "墮費", to: "墮閉" },
    { from: "入費", to: "入閉" },
    { from: "費人", to: "閉人" },
    { from: "於費", to: "於閉" },
    { from: "郈與費", to: "郈與閉" },
    { from: "與費", to: "與閉" },
    // 樂 Yuè (Song clan)
    { from: "樂祁", to: "月祁" },
    { from: "樂世心", to: "月世心" },
    { from: "樂大心", to: "月大心" }
  ],
  contexts: [
    ...shared.contexts,
    { re: /來朝/g, to: "來潮" },
    { re: /單(?=伯|子)/g, to: "善" },
    { re: /召(?=陵|伯)/g, to: "邵" },
    { re: /樂(?=祁|世心|大心)/g, to: "月" }
  ]
};
