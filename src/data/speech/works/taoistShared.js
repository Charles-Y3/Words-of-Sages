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

  // 長 zhǎng (grow / elder / official) — not 長生/長短/天長/所長·所短 (cháng)
  { from: "長養", to: "掌養" },
  { from: "長者", to: "掌者" },
  { from: "官長", to: "官掌" },
  { from: "器長", to: "器掌" },
  { from: "長之育之", to: "掌之育之" },
  { from: "長而不宰", to: "掌而不宰" },
  { from: "長之", to: "掌之" },

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
  // 樂 yuè (music)
  { from: "樂與餌", to: "月與餌" },

  // 好 hào
  { from: "好清", to: "耗清" },
  { from: "好靜", to: "耗靜" },
  { from: "好爭", to: "耗爭" },

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
  { from: "夫亦將", to: "扶亦將" },
  { from: "夫何故", to: "扶何故" },
  { from: "使夫智", to: "使扶智" },
  { from: "夫慈", to: "扶慈" },
  { from: "其細也夫", to: "其細也扶" },

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
  { re: /載營/g, to: "宰營" },
  { re: /長而不宰/g, to: "掌而不宰" },
  { re: /長之育之/g, to: "掌之育之" },
  { re: /官長/g, to: "官掌" },
  { re: /器長/g, to: "器掌" },
  { re: /樂與餌/g, to: "月與餌" },
  { re: /夫亦將/g, to: "扶亦將" },
  { re: /夫何故/g, to: "扶何故" },
];

export default { phrases, contexts };
