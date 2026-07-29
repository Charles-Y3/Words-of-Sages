/**
 * Shared Taoist classical 破音字 → speech-only substitutes.
 */
export const phrases = [
  // 惡 wù
  { from: "人之所惡", to: "人之所務" },
  { from: "天之所惡", to: "天之所務" },
  { from: "所惡", to: "所務" },
  { from: "好惡", to: "好務" },
  { from: "惡乎", to: "烏乎" },
  { from: "惡之", to: "務之" },

  // 長 zhǎng (grow / excel) — not 長生/長短/天長 which stay cháng
  { from: "挫人所長", to: "挫人所掌" },
  { from: "人所長", to: "人所掌" },
  { from: "所長", to: "所掌" },
  { from: "長養", to: "掌養" },
  { from: "長者", to: "掌者" },

  // 載 zǎi (particle / bear)
  { from: "載營魄", to: "宰營魄" },
  { from: "載營", to: "宰營" },

  // 樂 lè (enjoy) where TTS may say yuè
  { from: "樂殺人", to: "勒殺人" },
  { from: "夫樂殺", to: "扶勒殺" },
  { from: "樂其俗", to: "勒其俗" },
  { from: "樂推", to: "勒推" },
  { from: "亦樂得", to: "亦勒得" },
  { from: "樂得之", to: "勒得之" },
  { from: "至樂", to: "至勒" },

  // 夫 fú particle
  { from: "夫唯", to: "扶唯" },
  { from: "夫唯不", to: "扶唯不" },
  { from: "夫代", to: "扶代" },
  { from: "夫輕", to: "扶輕" },
  { from: "夫兩", to: "扶兩" },
  { from: "夫物", to: "扶物" },
  { from: "夫道", to: "扶道" },
  { from: "夫禮", to: "扶禮" },
  { from: "夫佳", to: "扶佳" },
  { from: "夫兵", to: "扶兵" },

  // 為 — 無為/以為 usually OK; 強為
  { from: "強為之", to: "強維之" },

  // 行 háng rare — 銀行 not in classics
  { from: "周行", to: "周形" }, // xíng — leave? 周行而不殆 is xíng. skip

  // 數 shuò
  { from: "數數", to: "朔朔" },

  // 重 chóng
  { from: "重積", to: "虫積" },
  { from: "重言", to: "虫言" },

  // 少 shào
  { from: "少則得", to: "紹則得" },
  { from: "少私", to: "紹私" },

  // 見 xiàn
  { from: "見素", to: "現素" },

  // 強 qiáng default OK; 彊 variants skip

  // 鄉 xiàng
  { from: "鄉也", to: "向也" },

  // 與 yǔ default OK

  // 感應篇 style
  { from: "樂人之", to: "勒人之" },
  { from: "逸樂", to: "逸勒" },
];

export const contexts = [
  { re: /所惡/g, to: "所務" },
  { re: /人之所惡/g, to: "人之所務" },
  { re: /(?<=[人天之所])惡/g, to: "務" },
  { re: /所長/g, to: "所掌" },
  { re: /載營/g, to: "宰營" },
];

export default { phrases, contexts };
