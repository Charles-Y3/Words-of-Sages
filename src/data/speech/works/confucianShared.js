/**
 * Shared Confucian classical 破音字 → speech-only substitutes.
 * Used by Confucian work packs; do not use for display text.
 */
export const phrases = [
  // 與 = 舉 (jǔ) in 選賢與能
  { from: "選賢與能", to: "選賢舉能" },
  { from: "與能", to: "舉能" },

  // 矜 = 鰥 guān in 矜寡孤獨
  { from: "矜、寡、孤、獨", to: "鰥、寡、孤、獨" },
  { from: "矜寡孤獨", to: "鰥寡孤獨" },
  { from: "矜寡", to: "鰥寡" },

  // 惡 wù (hate / dislike)
  { from: "貨惡其", to: "貨務其" },
  { from: "力惡其", to: "力務其" },
  { from: "惡其", to: "務其" },
  { from: "好惡", to: "好務" },
  { from: "厭惡", to: "厭務" },
  { from: "憎惡", to: "憎務" },
  { from: "羞惡", to: "羞務" },
  { from: "惡惡", to: "務惡" },
  { from: "所惡", to: "所務" },
  { from: "惡於", to: "務於" },
  { from: "惡乎", to: "烏乎" },
  { from: "惡在", to: "烏在" },
  { from: "能惡人", to: "能務人" },
  { from: "惡人", to: "務人" },
  { from: "民之所惡惡之", to: "民之所務務之" },
  { from: "好人之所惡", to: "好人之所務" },
  { from: "惡人之所好", to: "務人之所好" },
  { from: "所惡惡之", to: "所務務之" },

  // 為 wèi (for the sake of) — clear phrases
  { from: "不必為己", to: "不必位己" },
  { from: "為己", to: "位己" },
  { from: "為人子", to: "位人子" },
  { from: "為人君", to: "位人君" },
  { from: "為人臣", to: "位人臣" },
  { from: "為人父", to: "位人父" },
  { from: "為君", to: "位君" },
  { from: "為臣", to: "位臣" },
  { from: "為父", to: "位父" },
  { from: "為子", to: "位子" },
  { from: "為母", to: "位母" },
  { from: "為何", to: "位何" },
  { from: "為甚", to: "位甚" },
  { from: "因為", to: "因位" },

  // 長 zhǎng
  { from: "有所長", to: "有所掌" },
  { from: "幼有所長", to: "幼有所掌" },
  // 所長在彼 (zhǎng “treat as elder”) — not 所長 as cháng “strength”
  { from: "所長在", to: "所掌在" },
  { from: "上長長", to: "上掌掌" },
  { from: "長長", to: "掌掌" },
  { from: "長幼", to: "掌幼" },
  { from: "長者", to: "掌者" },
  { from: "長老", to: "掌老" },
  { from: "長子", to: "掌子" },
  { from: "長女", to: "掌女" },
  { from: "家長", to: "家掌" },
  { from: "師長", to: "師掌" },
  { from: "官長", to: "官掌" },
  { from: "長養", to: "掌養" },
  { from: "長民", to: "掌民" },
  { from: "長人", to: "掌人" },
  { from: "成長", to: "成掌" },
  { from: "生長", to: "生掌" },
  { from: "長進", to: "掌進" },

  // 分 fèn (duty / lot)
  { from: "有分", to: "有份" },
  { from: "男有分", to: "男有份" },
  { from: "本分", to: "本份" },
  { from: "職分", to: "職份" },
  { from: "名分", to: "名份" },
  { from: "安分", to: "安份" },
  { from: "分定", to: "份定" },

  // 樂 yuè (music) vs lè
  { from: "禮樂", to: "禮月" },
  { from: "成於樂", to: "成於月" },
  { from: "成于樂", to: "成于月" },
  { from: "莫善於樂", to: "莫善於月" },
  { from: "樂正", to: "月正" },
  { from: "樂師", to: "月師" },
  { from: "雅樂", to: "雅月" },
  { from: "音樂", to: "音月" },
  { from: "鼓樂", to: "鼓月" },
  { from: "樂章", to: "月章" },
  // 樂只君子 — lè (Shijing); leave default lè / force 勒
  { from: "樂只君子", to: "勒只君子" },

  // 興
  { from: "興於詩", to: "性於詩" },
  { from: "詩可以興", to: "詩可以性" },
  { from: "興觀群怨", to: "性觀群怨" },
  { from: "不興", to: "不星" }, // xīng arise
  { from: "興起", to: "星起" },
  { from: "興兵", to: "星兵" },
  { from: "興師", to: "星師" },
  { from: "興亡", to: "星亡" },

  // 知 zhì (wisdom) in compounds — careful
  { from: "無知", to: "無智" },

  // 說 yuè (=悅) classical
  { from: "不亦說乎", to: "不亦悅乎" },
  { from: "說之不", to: "悅之不" },

  // 女 rǔ (=汝)
  { from: "海女", to: "海汝" },
  { from: "語女", to: "語汝" },

  // 弟 tì (=悌)
  { from: "孝弟", to: "孝悌" },
  { from: "興弟", to: "星悌" },
  { from: "弟也者", to: "悌也者" },

  // 傳 zhuàn
  { from: "經傳", to: "經賺" },
  { from: "傳曰", to: "賺曰" },
  { from: "左傳", to: "左賺" },

  // 怨惡 / 好惡 already partly covered; add 怨惡
  { from: "怨惡", to: "怨務" },

  // 中 zhòng
  { from: "中的", to: "仲的" },
  { from: "中傷", to: "仲傷" },
  { from: "中選", to: "仲選" },
  { from: "中節", to: "仲節" },

  // 好 hào (fond of)
  { from: "好學", to: "耗學" },
  { from: "好問", to: "耗問" },
  { from: "好仁", to: "耗仁" },
  { from: "好義", to: "耗義" },
  { from: "好善", to: "耗善" },

  // 夫 fú particle
  { from: "夫孝", to: "扶孝" },
  { from: "夫仁", to: "扶仁" },
  { from: "夫道", to: "扶道" },
  { from: "夫子曰", to: "扶子曰" },
  { from: "夫微", to: "扶微" },
  { from: "夫焉", to: "扶焉" },
  { from: "夫政", to: "扶政" },

  // 省 xǐng
  { from: "三省", to: "三醒" },
  { from: "自省", to: "自醒" },
  { from: "內省", to: "內醒" },
  { from: "反省", to: "反醒" },
  { from: "省察", to: "醒察" },

  // 朝 zhāo (morning) — not 朝 court (cháo)
  { from: "朝夕", to: "招夕" },
  { from: "朝聞", to: "招聞" },
  { from: "朝暮", to: "招暮" },

  // 騎 / 從 zòng
  { from: "從者", to: "縱者" },
  { from: "侍從", to: "侍縱" },

  // 易
  { from: "易經", to: "意經" },
  { from: "周易", to: "周意" },

  // 參 cān
  { from: "參乎", to: "餐乎" },
  { from: "參也", to: "餐也" },

  // 行 háng rare
  { from: "行伍", to: "杭伍" },
  { from: "行列", to: "杭列" },

  // 數 shuò
  { from: "數數", to: "朔朔" },
  { from: "數見", to: "朔見" },

  // 重 chóng
  { from: "重複", to: "虫複" },
  { from: "重言", to: "虫言" },

  // 親 qìng rare (父母之親 as noun is qīn) — skip

  // 少 shào
  { from: "少年", to: "紹年" },
  { from: "少者", to: "紹者" },
  { from: "少主", to: "紹主" },

  // 鄉 xiàng (=向) classical
  { from: "鄉也", to: "向也" },

  // 見 xiàn (=现) in 見於
  { from: "見於王", to: "現於王" },
];

export const contexts = [
  { re: /長(?=[子男女兄弟輩幼養成大民人長])/g, to: "掌" },
  { re: /(?<=[貨力所])惡/g, to: "務" },
  { re: /(?<=[禮音鼓雅])樂/g, to: "月" },
  { re: /惡(?=其)/g, to: "務" },
  { re: /善於樂/g, to: "善於月" },
];

export default { phrases, contexts };
