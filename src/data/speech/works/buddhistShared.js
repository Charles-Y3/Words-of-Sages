/**
 * Shared Buddhist Chinese 破音字 / transliteration helps for TTS.
 */
export const phrases = [
  { from: "般若", to: "波惹" },

  // 長 zhǎng
  { from: "長老", to: "掌老" },
  { from: "有何所長", to: "有何所掌" },
  { from: "所長", to: "所掌" },
  { from: "長養", to: "掌養" },

  // 著 zhuó
  { from: "執著", to: "執卓" },
  { from: "無著", to: "無卓" },
  { from: "著衣", to: "卓衣" },
  { from: "著相", to: "卓相" },
  { from: "不著", to: "不卓" },
  { from: "著不得", to: "卓不得" },
  { from: "貪著", to: "貪卓" },

  // 樂 — music vs delight
  { from: "鼓樂", to: "鼓月" },
  { from: "作天樂", to: "作天月" },
  { from: "天樂", to: "天月" },
  { from: "音樂", to: "音月" },
  { from: "樂阿耨", to: "勒阿耨" },
  { from: "樂欲", to: "勒欲" },
  { from: "若樂小法", to: "若勒小法" },
  { from: "是樂阿", to: "是勒阿" },
  { from: "常樂我淨", to: "常勒我淨" },
  { from: "滅為樂", to: "滅為勒" },

  // 惡 wù
  { from: "不思惡", to: "不思務" },
  { from: "思惡", to: "思務" },
  { from: "所惡", to: "所務" },
  { from: "好惡", to: "好務" },
  { from: "不思善不思惡", to: "不思善不思務" },

  // 為 wèi
  { from: "為人說", to: "位人說" },
  { from: "為汝", to: "位汝" },
  { from: "為何", to: "位何" },

  // 傳
  { from: "經傳", to: "經賺" },

  // 參
  { from: "參禪", to: "餐禪" },
  { from: "參禮", to: "餐禮" },
  { from: "參學", to: "餐學" },
  { from: "參叩", to: "餐叩" },

  // 行
  { from: "行伍", to: "杭伍" },

  // 數 / 重
  { from: "數數", to: "朔朔" },
  { from: "重複", to: "虫複" },

  // 省 / 少
  { from: "自省", to: "自醒" },
  { from: "內省", to: "內醒" },
  { from: "少年", to: "紹年" },
  { from: "少欲", to: "紹欲" },
  { from: "少智", to: "紹智" },

  // 度 duó
  { from: "揣度", to: "揣鐸" },
];

export const contexts = [
  { re: /所長/g, to: "所掌" },
  { re: /(?<=[執無貪不])著/g, to: "卓" },
  { re: /著(?=衣|相|不)/g, to: "卓" },
  { re: /長老/g, to: "掌老" },
  { re: /般若/g, to: "波惹" },
  { re: /樂(?=欲|阿耨)/g, to: "勒" },
  { re: /不思惡/g, to: "不思務" },
];

export default { phrases, contexts };
