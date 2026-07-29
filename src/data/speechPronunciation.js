/**
 * Global Classical Chinese speech-only pronunciation lexicon (破音字).
 * Work-specific rules live in src/data/speech/works/ and are applied first.
 *
 * IMPORTANT:
 * - Applied ONLY to the string passed to speechSynthesis.
 * - Never mutate chapter.text.zh / displayed scripture text for TTS.
 * - Prefer unit `speech.zh` or work lexicons; use this file as fallback.
 * - Run `npm run audit-speech` after changes. See README “Speech pronunciation”.
 */

/** Phrase substitutions applied longest-first. `{ from, to }` */
export const SPEECH_PHRASE_RULES = [
  // --- 興 xìng (delight / inspire) vs xīng ---
  { from: "興於詩", to: "性於詩" },
  { from: "興于詩", to: "性于詩" },
  { from: "詩可以興", to: "詩可以性" },
  { from: "興也", to: "性也" },
  { from: "興觀群怨", to: "性觀群怨" },
  { from: "感興", to: "感性" },
  { from: "興味", to: "性味" },
  { from: "興致", to: "性致" },
  { from: "興會", to: "性會" },
  { from: "即興", to: "即性" },
  { from: "興嘆", to: "性嘆" },
  { from: "興歎", to: "性歎" },
  { from: "興衰", to: "星衰" }, // xīng
  { from: "復興", to: "復星" },
  { from: "興兵", to: "星兵" },
  { from: "興師", to: "星師" },
  { from: "興建", to: "星建" },
  { from: "興起", to: "星起" },
  { from: "興亡", to: "星亡" },
  { from: "振興", to: "振星" },
  { from: "興隆", to: "星隆" },
  { from: "興旺", to: "星旺" },
  { from: "興辦", to: "星辦" },
  { from: "興學", to: "星學" },

  // --- 長 zhǎng (elder / grow) vs cháng ---
  { from: "長老", to: "掌老" },
  { from: "長子", to: "掌子" },
  { from: "長女", to: "掌女" },
  { from: "長者", to: "掌者" },
  { from: "長幼", to: "掌幼" },
  { from: "長輩", to: "掌輩" },
  { from: "家長", to: "家掌" },
  { from: "族長", to: "族掌" },
  { from: "首長", to: "首掌" },
  { from: "部長", to: "部掌" },
  { from: "市長", to: "市掌" },
  { from: "縣長", to: "縣掌" },
  { from: "州長", to: "州掌" },
  { from: "院長", to: "院掌" },
  { from: "校長", to: "校掌" },
  { from: "師長", to: "師掌" },
  { from: "官長", to: "官掌" },
  { from: "尊長", to: "尊掌" },
  { from: "長養", to: "掌養" },
  { from: "長成", to: "掌成" },
  { from: "長大", to: "掌大" },
  { from: "生長", to: "生掌" },
  { from: "成長", to: "成掌" },
  { from: "長進", to: "掌進" },
  { from: "長智", to: "掌智" },
  { from: "長慧", to: "掌慧" },
  { from: "長兄", to: "掌兄" },
  { from: "長弟", to: "掌弟" },
  { from: "排長", to: "排掌" },
  { from: "連長", to: "連掌" },
  { from: "營長", to: "營掌" },
  { from: "隊長", to: "隊掌" },
  { from: "酋長", to: "酋掌" },
  { from: "君長", to: "君掌" },
  { from: "卿長", to: "卿掌" },

  // --- 樂 yuè (music) vs lè ---
  { from: "成於樂", to: "成於月" },
  { from: "成于乐", to: "成于月" },
  { from: "成于樂", to: "成于月" },
  { from: "禮樂", to: "禮月" },
  { from: "樂正", to: "月正" },
  { from: "樂師", to: "月師" },
  { from: "樂章", to: "月章" },
  { from: "樂府", to: "月府" },
  { from: "鼓樂", to: "鼓月" },
  { from: "音樂", to: "音月" },
  { from: "樂器", to: "月器" },
  { from: "樂曲", to: "月曲" },
  { from: "樂譜", to: "月譜" },
  { from: "雅樂", to: "雅月" },
  { from: "聲樂", to: "聲月" },
  { from: "奏樂", to: "奏月" },
  { from: "樂官", to: "月官" },
  { from: "作樂", to: "作月" },
  { from: "樂舞", to: "月舞" },

  // --- 行 háng (row / firm) vs xíng ---
  { from: "行伍", to: "杭伍" },
  { from: "行列", to: "杭列" },
  { from: "行陣", to: "杭陣" },
  { from: "行輩", to: "杭輩" },
  { from: "銀行", to: "銀杭" },
  { from: "行情", to: "杭情" },
  { from: "行業", to: "杭業" },
  { from: "行號", to: "杭號" },
  { from: "排行", to: "排杭" },

  // --- 數 shuò (frequently) ---
  { from: "數數", to: "朔朔" },
  { from: "數見", to: "朔見" },
  { from: "頻數", to: "頻朔" },

  // --- 重 chóng (again) vs zhòng ---
  { from: "重複", to: "虫複" },
  { from: "重疊", to: "虫疊" },
  { from: "重重", to: "虫虫" },
  { from: "重新", to: "虫新" },
  { from: "重來", to: "虫來" },
  { from: "重出", to: "虫出" },
  { from: "重言", to: "虫言" },
  { from: "重譯", to: "虫譯" },

  // --- 從 zòng (attendant / secondary) ---
  { from: "從者", to: "縱者" },
  { from: "侍從", to: "侍縱" },
  { from: "僕從", to: "僕縱" },
  { from: "從犯", to: "縱犯" },
  { from: "隨從", to: "隨縱" },
  { from: "從騎", to: "縱騎" },

  // --- 傳 zhuàn (record / biography) vs chuán ---
  { from: "傳記", to: "賺記" },
  { from: "經傳", to: "經賺" },
  { from: "左傳", to: "左賺" },
  { from: "公羊傳", to: "公羊賺" },
  { from: "穀梁傳", to: "穀梁賺" },
  { from: "列傳", to: "列賺" },
  { from: "家傳", to: "家賺" },
  { from: "外傳", to: "外賺" },
  { from: "內傳", to: "內賺" },
  { from: "自傳", to: "自賺" },
  { from: "評傳", to: "評賺" },
  { from: "傳注", to: "賺注" },
  { from: "傳疏", to: "賺疏" },

  // --- 易 yì (change / Book of Changes) vs difficult ---
  { from: "易經", to: "意經" },
  { from: "周易", to: "周意" },
  { from: "變易", to: "變意" },
  { from: "交易", to: "交意" },
  { from: "易姓", to: "意姓" },
  { from: "易位", to: "意位" },

  // --- Buddhist / Platform Sutra frequent ---
  { from: "無著", to: "無卓" },
  { from: "著衣", to: "卓衣" },
  { from: "執著", to: "執卓" },
  { from: "著相", to: "卓相" },
  { from: "著不得", to: "卓不得" },
  { from: "般若", to: "波惹" },

  // --- 參 cān vs shēn ---
  { from: "參禪", to: "餐禪" },
  { from: "參學", to: "餐學" },
  { from: "參禮", to: "餐禮" },
  { from: "參訪", to: "餐訪" },
  { from: "人參", to: "人申" },

  // --- 惡 wù (hate) vs è ---
  { from: "好惡", to: "好務" },
  { from: "厭惡", to: "厭務" },
  { from: "憎惡", to: "憎務" },
  { from: "惡惡", to: "務惡" },

  // --- 解 xiè (surname / dismiss) rare; 解 as jiě default ---
  { from: "曲解", to: "曲姐" },

  // --- 會 kuài (accounting) ---
  { from: "會計", to: "快計" },

  // --- 朝 zhāo (morning) vs cháo ---
  { from: "朝夕", to: "招夕" },
  { from: "朝暮", to: "招暮" },
  { from: "今朝", to: "今招" },
  { from: "明朝", to: "明招" }, // morning sense; dynasty stays 朝
  { from: "朝乾", to: "招乾" },
  { from: "朝聞", to: "招聞" },

  // --- 省 xǐng (reflect) ---
  { from: "反省", to: "反醒" },
  { from: "內省", to: "內醒" },
  { from: "省察", to: "醒察" },
  { from: "省悟", to: "醒悟" },
  { from: "自省", to: "自醒" },

  // --- 夫 fú (classical particle) ---
  { from: "夫孝", to: "扶孝" },
  { from: "夫仁", to: "扶仁" },
  { from: "夫道", to: "扶道" },
  { from: "夫子曰", to: "扶子曰" },

  // --- 與 yù (participate) ---
  { from: "參與", to: "參預" },
  { from: "與會", to: "預會" },

  // --- 為 wèi (for / because) in clear phrases ---
  { from: "為何", to: "位何" },
  { from: "為甚", to: "位甚" },
  { from: "因為", to: "因位" },

  // --- 中 zhòng (hit) ---
  { from: "中的", to: "仲的" },
  { from: "中傷", to: "仲傷" },
  { from: "中選", to: "仲選" },
  { from: "看中", to: "看仲" },

  // --- 少 shào (young) ---
  { from: "少年", to: "紹年" },
  { from: "少女", to: "紹女" },
  { from: "少者", to: "紹者" },
  { from: "少主", to: "紹主" },
  { from: "少君", to: "紹君" },
];

/**
 * Character-in-context regex rules (applied after phrases).
 * Each: `{ re, to }` where `to` may be a string or (match, ...groups) => string.
 */
export const SPEECH_CONTEXT_RULES = [
  // 長 + kinship / title-ish following character often zhǎng
  { re: /長(?=[子男女兄弟輩幼養成大])/g, to: "掌" },
  // 興 at end of 感/即/詩 style already phrases; 興兵-style starts
  { re: /(?<=[感即詩])興/g, to: "性" },
  // 樂 after 禮/音/鼓 often yuè
  { re: /(?<=[禮音鼓雅])樂/g, to: "月" },
  // 傳 after 經/左 often zhuàn
  { re: /(?<=[經左])傳/g, to: "賺" },
  // 著 as zhuó in Buddhist clinging compounds leftover
  { re: /(?<=[執無])著/g, to: "卓" },
];
