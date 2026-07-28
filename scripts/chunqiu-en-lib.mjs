/** Shared Legge-style Chunqiu jing translation helpers. */
import pinyinMap from "./chunqiu-pinyin.json" with { type: "json" };

export const DUKE_EN = {
  隱公: "Duke Yin", 桓公: "Duke Huan", 莊公: "Duke Zhuang", 閔公: "Duke Min",
  僖公: "Duke Xi", 文公: "Duke Wen", 宣公: "Duke Xuan", 成公: "Duke Cheng",
  襄公: "Duke Xiang", 昭公: "Duke Zhao", 定公: "Duke Ding", 哀公: "Duke Ai",
};

const DIGIT = { 元: 1, 一: 1, 二: 2, 三: 3, 四: 4, 五: 5, 六: 6, 七: 7, 八: 8, 九: 9, 十: 10 };

export function cnYear(s) {
  s = s.replace(/年$/, "");
  if (s === "元") return 1;
  if (s.includes("二十有")) return 20 + (DIGIT[s.replace("二十有", "")] || 0);
  if (s.includes("十有")) return 10 + (DIGIT[s.replace("十有", "")] || 0);
  if (s === "三十") return 30;
  if (s.startsWith("三十")) return 30 + (DIGIT[s.slice(2)] || 0);
  if (s.startsWith("二十")) return 20 + (DIGIT[s.slice(2)] || 0);
  if (s.startsWith("十") && s.length === 2) return 10 + (DIGIT[s[1]] || 0);
  if (s.startsWith("十") && s.length === 1) return 10;
  return DIGIT[s] || parseInt(s, 10) || s;
}

export function translateTitle(label) {
  const dukes = "隱公|桓公|莊公|閔公|僖公|文公|宣公|成公|襄公|昭公|定公|哀公";
  const range = label.match(new RegExp(`^(${dukes})(.+)年至(.+)$`));
  if (range) {
    const d = DUKE_EN[range[1]] || range[1];
    const a = cnYear(range[2].endsWith("年") ? range[2] : range[2] + "年");
    const b = cnYear(range[3].endsWith("年") ? range[3] : range[3] + "年");
    return `${d}, Years ${a}–${b}`;
  }
  const single = label.match(new RegExp(`^(${dukes})(.+?)年$`));
  if (single) return `${DUKE_EN[single[1]] || single[1]}, Year ${cnYear(single[2])}`;
  return label;
}

export function translatePlain(label) {
  return `This section is the Spring and Autumn classic (jing) for Lu under ${translateTitle(label)}. Entries follow Lu’s calendar while noting the Zhou court and interstate diplomacy, war, omens, and mourning. The wording is extremely spare — often a few characters per event — with judgment encoded in how facts are written. Read first for sequence and titles, then for moral implication.`;
}

export function translateYearHeader(line) {
  const m = line.match(/^(隱|桓|莊|閔|僖|文|宣|成|襄|昭|定|哀)公(.+)$/);
  if (!m) return line;
  return `${DUKE_EN[`${m[1]}公`]}, Year ${cnYear(m[2])}`;
}

export function esc(s) {
  return s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$");
}

/** Split compound chronicle lines (multiple seasons/events in one line). */
export function splitParts(line) {
  const raw = line.replace(/。$/, "").trim();
  if (!raw) return [];
  const parts = raw.split(/。/).map((s) => s.trim()).filter(Boolean);
  return parts.length ? parts : [raw];
}

const STATES = {
  鄭: "Zheng", 宋: "Song", 齊: "Qi", 衛: "Wei", 魯: "Lu", 晉: "Jin", 秦: "Qin", 楚: "Chu",
  陳: "Chen", 蔡: "Cai", 曹: "Cao", 許: "Xu", 邾: "Zhu", 邾婁: "Zhu Lou", 莒: "Ju", 滕: "Teng",
  薛: "Xue", 杞: "Qi", 邢: "Xing", 紀: "Ji", 郜: "Gao", 滑: "Hua", 徐: "Xu", 英: "Ying",
  項: "Xiang", 梁: "Liang", 霍: "Huo", 江: "Jiang", 黄: "Huang", 茅: "Mao", 鄫: "Zeng",
  邾婁: "Zhu Lou", 小邾: "Lesser Zhu", 邲: "Bi", 邴: "Bing", 郕: "Cheng", 鄀: "Ruo",
  鄄: "Juan", 鄧: "Deng", 鄭: "Zheng", 鄫: "Zeng", 鄬: "Wei", 鄸: "Meng", 酅: "Xi",
  邲: "Bi", 邾: "Zhu", 郈: "Hou", 郚: "Wu", 郛: "Fu", 郯: "Tan", 郱: "Ping", 鄑: "Zi",
  鄗: "Hao", 鄟: "Zhuan", 鄢: "Yan", 鄣: "Zhang", 鄧: "Deng", 鄫: "Zeng", 鄬: "Wei",
  鄭: "Zheng", 鄸: "Meng", 邲: "Bi", 邾: "Zhu", 邲: "Bi", 邲: "Bi",
};

function romanizeWord(word) {
  if (!word || !/[\u4e00-\u9fff]/.test(word)) return word;
  if (ENTITIES[word]) return ENTITIES[word];
  if (PLACES[word]) return PLACES[word];
  if (STATES[word]) return STATES[word];
  if (word.endsWith("人") && STATES[word.slice(0, -1)]) return `the people of ${STATES[word.slice(0, -1)]}`;
  if (word.endsWith("師") && STATES[word.slice(0, -1)]) return `the army of ${STATES[word.slice(0, -1)]}`;
  if (word.startsWith("公子")) {
    const n = word.slice(2);
    return "Gongsun " + (ENTITIES[n] || romanizeToken(n));
  }
  if (word.endsWith("子") && word.length > 1) {
    const base = word.slice(0, -1);
    if (STATES[base]) return `the viscount of ${STATES[base]}`;
    return romanizeToken(base);
  }
  if (word.endsWith("伯") && word.length > 1) {
    const base = word.slice(0, -1);
    if (STATES[base]) return `the earl of ${STATES[base]}`;
    return `the earl of ${romanizeToken(base)}`;
  }
  if (word.endsWith("侯") && word.length > 1) {
    const base = word.slice(0, -1);
    if (STATES[base]) return `the marquis of ${STATES[base]}`;
    return `the marquis of ${romanizeToken(base)}`;
  }
  if (word.endsWith("公") && word.length > 1) {
    const base = word.slice(0, -1);
    if (STATES[base]) return `the duke of ${STATES[base]}`;
    if (DUKE_EN[base + "公"]) return DUKE_EN[base + "公"];
    return `duke ${romanizeToken(base)} of ${STATES[base.slice(0, -1)] || romanizeToken(base)}`;
  }
  if (word.endsWith("男") && word.length > 1) {
    const base = word.slice(0, -1);
    if (STATES[base]) return `the baron of ${STATES[base]}`;
    return `the baron of ${romanizeToken(base)}`;
  }
  if (word.endsWith("氏")) return `the ${romanizeToken(word.slice(0, -1))} clan`;
  if (word.endsWith("大夫")) return `the Great Officer ${romanizeToken(word.slice(0, -2))}`;
  return romanizeToken(word);
}

function stripTone(py) {
  return py.normalize("NFD").replace(/\p{M}/gu, "");
}

function romanizeToken(s) {
  if (!s) return s;
  if (ENTITIES[s] || PLACES[s] || STATES[s]) return ENTITIES[s] || PLACES[s] || STATES[s];
  return [...s]
    .map((c) => {
      const py = pinyinMap[c];
      if (!py) return c;
      return stripTone(py);
    })
    .join("")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/^./, (x) => x.toUpperCase());
}

function deCJK(s) {
  return s.replace(/[\u4e00-\u9fff]+/g, (m) => romanizeWord(m));
}

const PLACES = {
  眛: "Mei", 宿: "Su", 祭伯: "the earl of Ji", 益師: "Yishi", 向: "Xiang", 極: "Ji",
  女: "the lady", 姬: "Ji", 和: "He", 繆公: "duke Mu", 賻: "a contribution to the funeral",
  惠公: "duke Hui", 仲子: "Zhongzi", 賵: "a mourning gift", 宰咺: "Zai Huan",
  州籲: "Zhou Xu", 翬: "Hui", 完: "Wan", 石門: "Shimen", 癸未: "on gui-wei",
  武氏子: "the son of the Wu clan", 己巳: "ji-si", 庚戌: "geng-xu", 辛卯: "xin-mao",
  庚辰: "geng-chen", 乙卯: "yi-mao", 戊申: "wu-shen", 子氏: "Zi", 牟婁: "Mou Lou",
  清: "Qing", 濮: "Pu", 石門: "Shimen", 棠: "Tang", 艾: "Ai", 中丘: "Zhongqiu", 菅: "Jian",
  郜: "Gao", 防: "Fang", 宿: "Su", 盛: "Sheng", 郎: "Lang", 邴: "Bing", 包來: "Baolai",
  垂: "Chui", 瓦屋: "Wafu", 祁黎: "Qili", 許: "Xu", 洛姑: "Luogu", 垂: "Chui", 稷: "Ji",
  越: "Yue", 唐: "Tang", 嬴: "Ying", 蒲: "Pu", 成: "Cheng", 盛: "Sheng", 讙: "Huan",
  郎: "Lang", 谷: "Gu", 扈: "Hu", 新城: "Xincheng", 黃: "Huang", 趡: "Cui", 奚: "Xi",
  虛朾: "Xuzhen", 濼: "Luo", 乾侯: "Ganhou", 黄池: "Huangchi", 乾: "Qian", 柏: "Bo",
  召陵: "Shaoling", 陘: "Xing", 葵丘: "Kuiqiu", 首戴: "Shoudai", 寧毋: "Ningwu", 洮: "Tao",
  緣陵: "Yuanling", 牡丘: "Muqiu", 匡: "Kuang", 淮: "Huai", 甗: "Yan", 曹南: "Cao nan",
  鹿上: "Lushang", 泓: "Hong", 薄: "Bo", 踐土: "Jiantu", 河陽: "Heyang", 溫: "Wen",
  殽: "Xiao", 箕: "Ji", 邲: "Bi", 清丘: "Qingqiu", 柯: "Ke", 鞍: "An", 蜀: "Shu",
  馬陵: "Maling", 鄢陵: "Yanling", 雞澤: "Jize", 長樗: "Changchu", 戲: "Xi", 蕭魚: "Xiaoyu",
  平丘: "Pingqiu", 澶淵: "Chanyuan", 重丘: "Chongqiu", 沙隨: "Shasui", 陳儀: "Chenyi",
  祝阿: "Zhu'a", 平陽: "Pingyang", 乾侯: "Ganhou", 黄父: "Huangfu", 剸陵: "Tuanling",
  召陵: "Shaoling", 浩油: "Haoyou", 伯莒: "Boju", 雞父: "Jifu", 頰谷: "Jiagu", 黄: "Huang",
};

const ENTITIES = {
  邾婁儀父: "Yifu of Zhu Lou", 儀父: "Yifu", 鄭伯: "the earl of Zheng", 宋公: "the duke of Song",
  齊侯: "the marquis of Qi", 衛侯: "the marquis of Wei", 晉侯: "the marquis of Jin", 秦伯: "the earl of Qin",
  楚子: "the viscount of Chu", 陳侯: "the marquis of Chen", 蔡侯: "the marquis of Cai", 曹伯: "the earl of Cao",
  許男: "the baron of Xu", 邾婁子: "the viscount of Zhu Lou", 莒子: "the viscount of Ju", 滕子: "the viscount of Teng",
  薛伯: "the earl of Xue", 杞伯: "the earl of Qi", 天王: "the king", 王: "the king", 公: "the duke",
  夫人: "the lady", 邾婁人: "the people of Zhu Lou", 小邾婁人: "the people of Lesser Zhu Lou",
  鄭人: "the people of Zheng", 宋人: "the people of Song", 齊人: "the people of Qi", 衛人: "the people of Wei",
  晉人: "the people of Jin", 秦人: "the people of Qin", 楚人: "the people of Chu", 陳人: "the people of Chen",
  蔡人: "the people of Cai", 曹人: "the people of Cao", 許人: "the people of Xu", 莒人: "the people of Ju",
  滕人: "the people of Teng", 薛人: "the people of Xue", 杞人: "the people of Qi", 邾人: "the people of Zhu",
  吴人: "the people of Wu", 吳人: "the people of Wu", 吴子: "the viscount of Wu", 吳子: "the viscount of Wu",
  戎: "the Rong", 狄: "the Di", 于越: "Yu Yue", 荆: "Jing", 諸侯: "the princes", 師: "the army",
  我: "we", 我君: "our ruler", 我小君: "our late lady", 祭伯: "the earl of Ji", 尹氏: "the Yin clan",
  武氏子: "the son of the Wu clan", 公子益師: "Gongsun Yishi", 無駭: "Wuhui", 紀履緰: "Lu Fu of Ji",
  伯姬: "Bo Ji", 紀子伯: "Bo, viscount of Ji", 翬: "Hui", 州籲: "Zhou Xu", 宰咺: "Zai Huan",
  段: "Duan", 完: "Wan", 晉: "Jin", 和: "He", 繆公: "duke Mu", 牟婁: "Mou Lou", 杞: "Qi",
  宋繆公: "duke Mu of Song", 衛桓公: "duke Huan of Wei", 鄭莊公: "duke Zhuang of Zheng",
  齊桓公: "duke Huan of Qi", 齊襄公: "duke Xiang of Qi", 晉文公: "duke Wen of Jin", 楚子: "the viscount of Chu",
  孔子: "Confucius", 西狩: "a hunt in the west", 麟: "a lin",
  邾婁儀父: "Yifu of Zhu Lou", 儀父: "Yifu", 鄭伯: "the earl of Zheng", 宋公: "the duke of Song",
  南季: "Nan Ji", 凡伯: "the earl of Fan", 宛: "Wan", 邴: "Bing", 彄: "Gong",
  叔姬: "Shu Ji", 年: "Nian", 考父: "Kaofu", 考仲子: "Zhongzi", 仲子: "Zhongzi",
  六羽: "six feather-dancers", 長葛: "Changge", 輸平: "negotiate peace",
  楚丘: "Chuqiu", 包來: "Baolai", 蔡宣公: "duke Xuan of Cai", 宿男: "the baron of Su",
  祁黎: "Qili", 菅: "Jian", 防: "Fang", 載: "Dai", 俠: "Xia", 郎: "Lang",
  南季: "Nan Ji", 季: "Ji", 南: "Nan", 督: "Du", 與夷: "Yuyi", 孔父: "Kong Fu",
  嬰齊: "Yingqi", 鄫子: "the viscount of Zeng", 梁亡: "Liang perished",
  邾婁: "Zhu Lou", 邾: "Zhu", 邾人: "the people of Zhu", 邾子: "the viscount of Zhu",
  邾婁: "Zhu Lou", 邾: "Zhu", 邾: "Zhu",
  夫人姜氏: "the lady Jiang", 姜氏: "Jiang", 小白: "Xiao Bai", 英氏: "Ying",
  項: "Xiang", 滅項: "Xiang was extinguished", 卞: "Bian", 會: "Hui",
  甗: "Yan", 曹南: "Cao nan", 鹿上: "Lushang", 泓: "Hong", 薄: "Bo",
  南門: "the southern gate", 西宮: "the western palace", 災: "fire",
  齊: "Qi", 宋: "Song", 鄭: "Zheng", 衛: "Wei", 晉: "Jin", 秦: "Qin", 楚: "Chu",
  陳: "Chen", 蔡: "Cai", 曹: "Cao", 許: "Xu", 莒: "Ju", 滕: "Teng", 薛: "Xue",
  杞: "Qi", 邢: "Xing", 紀: "Ji", 郜: "Gao", 滑: "Hua", 徐: "Xu", 英: "Ying",
  梁: "Liang", 霍: "Huo", 江: "Jiang", 黄: "Huang", 茅: "Mao", 鄫: "Zeng",
  邲: "Bi", 邴: "Bing", 邾: "Zhu", 邾婁: "Zhu Lou", 邾: "Zhu",
  太廟: "the Grand Temple", 太庙: "the Grand Temple", 許田: "Xu",
  大鼎: "the great tripod", 大鼎於宋: "the great tripod from Song",
  胥命: "made a mutual agreement", 鮑: "Bao", 鮮: "Xian",
  宰渠伯糾: "Zai Qu Bo Jiu", 渠伯糾: "Qu Bo Jiu",
  震電: "thunder and lightning", 大雨雪: "great rain and snow",
  西狩獲麟: "On a hunt in the west, a lin was captured.",
  以成宋亂: "settle the disorder in Song", 宋督: "Du of Song", 與夷: "Yuyi", 孔父: "Kong Fu",
  鄭伯以璧假許田: "the earl of Zheng, with a jade disk, borrowed Xu fields",
  許田: "Xu", 太廟: "the Grand Temple", 太庙: "the Grand Temple",
  邴: "Bing", 宛: "Wan", 季: "Ji", 仲: "Zhong", 叔: "Shu", 費: "Fei", 遂: "Sui",
  嬴: "Ying", 蒲: "Pu", 盛: "Sheng", 讙: "Huan", 郎: "Lang", 鄧: "Deng",
  宰渠伯糾: "Zai Qu Bo Jiu", 仍叔: "the earl of Reng", 仍叔之子: "the son of the earl of Reng",
  逆女: "to meet the lady", 送姜氏: "escorted Jiang", 夫人姜氏: "the lady Jiang",
  至自齊: "arrived from Qi", 如齊: "went to Qi", 如齊逆女: "went to Qi to meet the lady",
  入杞: "entered Qi", 入: "entered",
  以: "to", 成: "settle",
  用之: "and used him as a sacrifice", 會盟: "met and made a covenant",
  成宋亂: "to settle the disorder in Song", 納: "escorted", 納於: "escorted into",
  觀魚: "looked at the fish", 初獻: "the first offering of", 考: "completed the temple of",
  有年: "There was a good harvest.", 城: "the wall of", 滅: "was extinguished",
  狩: "hunted", 獲: "captured", 獲麟: "a lin was captured",
};

function p(x) {
  if (ENTITIES[x]) return ENTITIES[x];
  if (PLACES[x]) return PLACES[x];
  if (STATES[x]) return STATES[x];
  return romanizeWord(x);
}

function tr(x) {
  if (!x) return "";
  x = x.trim().replace(/[、，；]/g, ", ");
  if (ENTITIES[x]) return ENTITIES[x];
  if (PLACES[x]) return PLACES[x];
  if (STATES[x]) return STATES[x];
  for (const k of Object.keys(ENTITIES).sort((a, b) => b.length - a.length)) {
    if (k.length > 1 && x.includes(k)) x = x.split(k).join(ENTITIES[k]);
  }
  for (const k of Object.keys(PLACES).sort((a, b) => b.length - a.length)) {
    if (k.length > 1 && x.includes(k)) x = x.split(k).join(PLACES[k]);
  }
  for (const k of Object.keys(STATES).sort((a, b) => b.length - a.length)) {
    if (k.length > 1 && x.includes(k)) x = x.split(k).join(STATES[k]);
  }
  if (/[\u4e00-\u9fff]/.test(x)) {
    const chunks = x.split(/([\u4e00-\u9fff]+)/).filter(Boolean);
    return chunks.map((c) => (/[\u4e00-\u9fff]/.test(c) ? romanizeWord(c) : c)).join("").replace(/\s+/g, " ").trim();
  }
  return x;
}

function cap(s) {
  if (!s) return s;
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function monthEn(tok) {
  if (tok === "十有二" || tok === "十二") return "twelfth";
  if (tok === "十一") return "eleventh";
  const m = {
    正: "first", 二: "second", 三: "third", 四: "fourth", 五: "fifth", 六: "sixth",
    七: "seventh", 八: "eighth", 九: "ninth", 十: "tenth",
  };
  if (tok.startsWith("十有")) {
    const d = DIGIT[tok.replace("十有", "")];
    if (d === 1) return "eleventh";
    if (d === 2) return "twelfth";
    return `${10 + d}th`;
  }
  if (tok === "十") return "tenth";
  return m[tok] || tok;
}

const STEM = { 甲: "jia", 乙: "yi", 丙: "bing", 丁: "ding", 戊: "wu", 己: "ji", 庚: "geng", 辛: "xin", 壬: "ren", 癸: "gui" };
const BRANCH = { 子: "zi", 丑: "chou", 寅: "yin", 卯: "mao", 辰: "chen", 巳: "si", 午: "wu", 未: "wei", 申: "shen", 酉: "you", 戌: "xu", 亥: "hai" };

function stemBranch(sb) {
  if (sb.length !== 2) return sb.toLowerCase();
  return `${STEM[sb[0]] || sb[0]}-${BRANCH[sb[1]] || sb[1]}`;
}

function timePrefix(part) {
  const prefix = [];
  let s = part.trim();

  while (s.length) {
    const yr = s.match(/^(元|二|三|四|五|六|七|八|九|十[^，,]*?)年(春|夏|秋|冬)?[,，]/);
    if (yr) {
      const n = cnYear(yr[1]);
      const ord = n === 1 ? "first" : n === 2 ? "second" : n === 3 ? "third" : `${n}th`;
      if (yr[2]) {
        const sn = { 春: "spring", 夏: "summer", 秋: "autumn", 冬: "winter" }[yr[2]];
        prefix.push(`In the ${ord} year, in ${sn}`);
      } else prefix.push(`In the ${ord} year`);
      s = s.slice(yr[0].length).trim();
      continue;
    }

    const sn = s.match(/^(春|夏|秋|冬)[,，]/);
    if (sn) {
      prefix.push({ 春: "In spring", 夏: "In summer", 秋: "In autumn", 冬: "In winter" }[sn[1]]);
      s = s.slice(sn[0].length).trim();
      continue;
    }

    if (s.startsWith("王正月")) {
      prefix.push("in the king's first month");
      s = s.slice(3).replace(/^[,，]/, "").trim();
      continue;
    }

    const wm = s.match(/^王((?:十有二|十有一|十|[正二三四五六七八九])+)月[,，]?/);
    if (wm) {
      prefix.push(`in the king's ${monthEn(wm[1])} month`);
      s = s.slice(wm[0].length).trim();
      continue;
    }

    const mm = s.match(/^((?:十有二|十有一|十|[正二三四五六七八九])+)月[,，]?/);
    if (mm) {
      prefix.push(`in the ${monthEn(mm[1])} month`);
      s = s.slice(mm[0].length).trim();
      continue;
    }

    const day = s.match(/^([甲乙丙丁戊己庚辛壬癸][子丑寅卯辰巳午未申酉戌亥])(朔|晦)?[,，]?/);
    if (day) {
      prefix.push(`on ${stemBranch(day[1])}${day[2] === "朔" ? ", the first day" : day[2] === "晦" ? ", the last day" : ""}`);
      s = s.slice(day[0].length).trim();
      continue;
    }

    break;
  }

  return { prefix: prefix.join(", "), rest: s.trim() };
}

const OMENS = {
  螽: "Locusts appeared.", 螟: "Caterpillars appeared.", 無冰: "There was no ice.", 无冰: "There was no ice.",
  大雨: "There was great rain.", 大雩: "There was a great rain sacrifice.", 大旱: "There was great drought.",
  大水: "There was a great flood.", 飢: "There was famine.", 饥: "There was famine.", 有年: "There was a good harvest.",
  不雨: "There was no rain.", 春王: "The spring of the king.", 地震: "There was an earthquake.",
  "隕霜不殺草，李、梅實": "Frost fell but did not kill the grass; plums and apricots bore fruit.",
  西狩獲麟: "On a hunt in the west, a lin was captured.",
};

export function translatePart(part) {
  part = part.trim();
  if (!part) return "";
  if (OMENS[part]) return OMENS[part];

  const monthOnly = part.match(/^((?:十有二|十有一|十|[正二三四五六七八九])+)月$/);
  if (monthOnly) return `In the ${monthEn(monthOnly[1])} month.`;

  const { prefix, rest } = timePrefix(part);
  let r = rest;
  if (!r && prefix) return cap(prefix.replace(/,\s*$/, "") + ".");
  if (OMENS[r]) {
    const body = OMENS[r].replace(/\.$/, "");
    const out = [prefix, body.charAt(0).toLowerCase() + body.slice(1)].filter(Boolean).join(", ");
    return cap(out + ".");
  }

  const rules = [
    // Exact / omen
    [/^公即位$/, () => "the duke took his place on the throne"],
    [/^日有食之，既$/, () => "there was an eclipse of the sun; it was total"],
    [/^日有食之$/, () => "there was an eclipse of the sun"],
    [/^西狩獲麟$/, () => "on a hunt in the west, a lin was captured"],
    // 公- prefixed (before generic)
    [/^公及(.+?)盟於(.+)$/, (m) => `the duke and ${tr(m[1])} made a covenant at ${p(m[2])}`],
    [/^公及(.+?)盟于(.+)$/, (m) => `the duke and ${tr(m[1])} made a covenant at ${p(m[2])}`],
    [/^公及(.+?)遇於(.+)$/, (m) => `the duke and ${tr(m[1])} had a meeting at ${p(m[2])}`],
    [/^公及(.+?)遇于(.+)$/, (m) => `the duke and ${tr(m[1])} had a meeting at ${p(m[2])}`],
    [/^公及(.+?)入(.+)$/, (m) => `the duke, with ${tr(m[1])}, entered ${tr(m[2])}`],
    [/^公會(.+?)盟於(.+)$/, (m) => `the duke met ${tr(m[1])} and made a covenant at ${p(m[2])}`],
    [/^公會(.+?)於(.+?)，(.+)$/, (m) => `the duke met ${tr(m[1])} at ${p(m[2])}, to ${tr(m[3])}`],
    [/^公會(.+?)于(.+?)，(.+)$/, (m) => `the duke met ${tr(m[1])} at ${p(m[2])}, to ${tr(m[3])}`],
    [/^公會(.+?)於(.+?)，(.+?)至自(.+)$/, (m) => `the duke met ${tr(m[1])} at ${p(m[2])}, and ${tr(m[3])} arrived from ${p(m[4])}`],
    [/^公至自(.+)$/, (m) => `the duke arrived from ${p(m[1])}`],
    [/^公如(.+)$/, (m) => `the duke went to ${p(m[1])}`],
    [/^公伐(.+)$/, (m) => `the duke invaded ${p(m[1])}`],
    [/^公侵(.+)$/, (m) => `the duke made an incursion into ${p(m[1])}`],
    [/^公敗(.+?)於(.+)$/, (m) => `the duke defeated ${tr(m[1])} at ${p(m[2])}`],
    [/^公敗(.+?)于(.+)$/, (m) => `the duke defeated ${tr(m[1])} at ${p(m[2])}`],
    [/^公觀魚於(.+)$/, (m) => `the duke looked at the fish at ${p(m[1])}`],
    [/^公觀魚于(.+)$/, (m) => `the duke looked at the fish at ${p(m[1])}`],
    [/^公薨$/, () => "the duke died"],
    [/^公狩於(.+)$/, (m) => `the duke hunted at ${p(m[1])}`],
    [/^公狩于(.+)$/, (m) => `the duke hunted at ${p(m[1])}`],
    // King
    [/^天王使(.+?)來歸(.+)$/, (m) => `the king sent ${tr(m[1])} to come with ${tr(m[2])}`],
    [/^天王使(.+?)來(.+)$/, (m) => `the king sent ${tr(m[1])} to come ${tr(m[2])}`],
    [/^及(.+?)盟於(.+)$/, (m) => `(the duke) and ${tr(m[1])} made a covenant at ${p(m[2])}`],
    [/^及(.+?)盟于(.+)$/, (m) => `(the duke) and ${tr(m[1])} made a covenant at ${p(m[2])}`],
    // Specific compound patterns
    [/^考(.+?)之宮$/, (m) => `the temple of ${tr(m[1])} was completed`],
    [/^初獻(.+)$/, (m) => `the first offering of ${tr(m[1])} was made`],
    [/^城(.+)$/, (m) => `the wall of ${p(m[1])} was built`],
    [/^新作(.+)$/, (m) => `a new ${p(m[1])} was built`],
    [/^葬(.+)$/, (m) => `${tr(m[1])} was buried`],
    [/^取(.+?)大鼎於(.+)$/, (m) => `(the duke) took the great tripod of ${tr(m[1])} from ${p(m[2])}`],
    [/^取(.+?)大鼎于(.+)$/, (m) => `(the duke) took the great tripod of ${tr(m[1])} from ${p(m[2])}`],
    [/^納(.+?)於(.+)$/, (m) => `(the duke) escorted ${tr(m[1])} into ${p(m[2])}`],
    [/^納(.+?)于(.+)$/, (m) => `(the duke) escorted ${tr(m[1])} into ${p(m[2])}`],
    [/^納於(.+)$/, (m) => `(the duke) escorted (it) into ${p(m[1])}`],
    [/^納于(.+)$/, (m) => `(the duke) escorted (it) into ${p(m[1])}`],
    [/^(.+?)以璧假(.+)$/, (m) => `${tr(m[1])}, with a jade disk, borrowed ${p(m[2])} fields`],
    [/^(.+?)會盟於(.+)$/, (m) => `${tr(m[1])} met and made a covenant at ${p(m[2])}`],
    [/^(.+?)會盟于(.+)$/, (m) => `${tr(m[1])} met and made a covenant at ${p(m[2])}`],
    [/^(.+?)會(.+?)於(.+?)，以(.+)$/, (m) => `${tr(m[1])} met ${tr(m[2])} at ${p(m[3])}, to ${tr(m[4])}`],
    [/^(.+?)會(.+?)于(.+?)，以(.+)$/, (m) => `${tr(m[1])} met ${tr(m[2])} at ${p(m[3])}, to ${tr(m[4])}`],
    [/^(.+?)執(.+?)用之$/, (m) => `${tr(m[1])} seized ${tr(m[2])} and used him as a sacrifice`],
    [/^(.+?)來輸平$/, (m) => `${tr(m[1])} came to negotiate peace`],
    [/^(.+?)使其弟(.+?)來聘$/, (m) => `${tr(m[1])} sent his younger brother ${tr(m[2])} on a friendly visit`],
    [/^(.+?)使其弟(.+?)來$/, (m) => `${tr(m[1])} sent his younger brother ${tr(m[2])} to come`],
    [/^(.+?)來聘，(.+?)伐(.+?)於(.+?)以歸$/, (m) => `${tr(m[1])} came on a friendly visit. ${tr(m[2])} attacked ${tr(m[3])} at ${p(m[4])} and took him back with them`],
    [/^(.+?)使(.+?)來歸(.+)$/, (m) => `${tr(m[1])} sent ${tr(m[2])} to come with the return of ${tr(m[3])}`],
    [/^(.+?)入(.+?)以歸$/, (m) => `${tr(m[1])} entered ${tr(m[2])} and took (him) back with them`],
    [/^(.+?)取(.+?)，(.+?)取(.+)$/, (m) => `${tr(m[1])} took ${tr(m[2])}, and ${tr(m[3])} took ${tr(m[4])}`],
    [/^(.+?)及(.+?)戰於(.+?)，(.+?)敗績$/, (m) => `${tr(m[1])} and ${tr(m[2])} fought at ${p(m[3])}, and ${tr(m[4])} were defeated`],
    [/^(.+?)及(.+?)战于(.+?)，(.+?)败绩$/, (m) => `${tr(m[1])} and ${tr(m[2])} fought at ${p(m[3])}, and ${tr(m[4])} were defeated`],
    [/^(.+?)帥師會(.+?)伐(.+)$/, (m) => `${tr(m[1])} led an army and joined ${tr(m[2])} in invading ${tr(m[3])}`],
    [/^(.+?)帥師，(.+)$/, (m) => `${tr(m[1])} led an army, and ${translatePart(m[2]).replace(/\.$/, "").toLowerCase()}`],
    [/^(.+?)帥師(.+)$/, (m) => `${tr(m[1])} led an army and ${translatePart(m[2]).replace(/\.$/, "").toLowerCase()}`],
    [/^(.+?)弒其君(.+?)及其大夫(.+)$/, (m) => `${tr(m[1])} murdered his ruler ${tr(m[2])} and his Great Officer ${tr(m[3])}`],
    [/^(.+?)弑其君(.+?)及其大夫(.+)$/, (m) => `${tr(m[1])} murdered his ruler ${tr(m[2])} and his Great Officer ${tr(m[3])}`],
    [/^(.+?)胥命於(.+)$/, (m) => `${tr(m[1])} made a mutual agreement at ${p(m[2])}`],
    [/^(.+?)胥命于(.+)$/, (m) => `${tr(m[1])} made a mutual agreement at ${p(m[2])}`],
    [/^(.+?)來聘$/, (m) => `${tr(m[1])} came on a friendly visit`],
    [/^(.+?)来聘$/, (m) => `${tr(m[1])} came on a friendly visit`],
    [/^入(.+)$/, (m) => `(the duke) entered ${tr(m[1])}`],
    [/^(.+?)逆(.+)$/, (m) => `${tr(m[1])} went to meet ${tr(m[2])}`],
    [/^(.+?)送(.+?)於(.+)$/, (m) => `${tr(m[1])} escorted ${tr(m[2])} to ${p(m[3])}`],
    [/^(.+?)送(.+?)于(.+)$/, (m) => `${tr(m[1])} escorted ${tr(m[2])} to ${p(m[3])}`],
    [/^(.+?)至自(.+)$/, (m) => `${tr(m[1])} arrived from ${p(m[2])}`],
    [/^(.+?)至$/, (m) => `${tr(m[1])} arrived`],
    [/^(.+?)會(.+?)於(.+?)，(.+?)至自(.+)$/, (m) => `${tr(m[1])} met ${tr(m[2])} at ${p(m[3])}, and ${tr(m[4])} arrived from ${p(m[5])}`],
    [/^(.+?)出奔(.+)$/, (m) => `${tr(m[1])} fled to ${p(m[2])}`],
    [/^(.+?)來逆(.+)$/, (m) => `${tr(m[1])} came to meet ${tr(m[2])}`],
    [/^(.+?)歸於(.+)$/, (m) => `${tr(m[1])} went to ${p(m[2])} as a wife`],
    [/^(.+?)歸于(.+)$/, (m) => `${tr(m[1])} went to ${p(m[2])} as a wife`],
    [/^(.+?)來歸(.+)$/, (m) => `${tr(m[1])} came with ${tr(m[2])}`],
    [/^(.+?)来归(.+)$/, (m) => `${tr(m[1])} came with ${tr(m[2])}`],
    [/^(.+?)來聘$/, (m) => `${tr(m[1])} came on a friendly visit`],
    [/^(.+?)来聘$/, (m) => `${tr(m[1])} came on a friendly visit`],
    [/^(.+?)來朝$/, (m) => `${tr(m[1])} came to court`],
    [/^(.+?)来朝$/, (m) => `${tr(m[1])} came to court`],
    [/^(.+?)同盟於(.+)$/, (m) => `${tr(m[1])} made a joint covenant at ${p(m[2])}`],
    [/^(.+?)同盟于(.+)$/, (m) => `${tr(m[1])} made a joint covenant at ${p(m[2])}`],
    [/^(.+?)及(.+?)盟於(.+)$/, (m) => `${tr(m[1])} and ${tr(m[2])} made a covenant at ${p(m[3])}`],
    [/^(.+?)及(.+?)盟于(.+)$/, (m) => `${tr(m[1])} and ${tr(m[2])} made a covenant at ${p(m[3])}`],
    [/^(.+?)及(.+?)伐(.+)$/, (m) => `${tr(m[1])} and ${tr(m[2])} invaded ${tr(m[3])}`],
    [/^(.+?)及(.+?)入(.+)$/, (m) => `${tr(m[1])} and ${tr(m[2])} entered ${tr(m[3])}`],
    [/^(.+?)會(.+?)伐(.+)$/, (m) => `${tr(m[1])} joined ${tr(m[2])} in invading ${tr(m[3])}`],
    [/^(.+?)會(.+?)於(.+)$/, (m) => `${tr(m[1])} met ${tr(m[2])} at ${p(m[3])}`],
    [/^(.+?)會(.+?)于(.+)$/, (m) => `${tr(m[1])} met ${tr(m[2])} at ${p(m[3])}`],
    [/^(.+?)取(.+?)於(.+)$/, (m) => `${tr(m[1])} took ${tr(m[2])} at ${p(m[3])}`],
    [/^(.+?)取(.+?)于(.+)$/, (m) => `${tr(m[1])} took ${tr(m[2])} at ${p(m[3])}`],
    [/^(.+?)敗(.+?)於(.+)$/, (m) => `${tr(m[1])} defeated ${tr(m[2])} at ${p(m[3])}`],
    [/^(.+?)敗(.+?)于(.+)$/, (m) => `${tr(m[1])} defeated ${tr(m[2])} at ${p(m[3])}`],
    [/^(.+?)克(.+?)於(.+)$/, (m) => `${tr(m[1])} defeated ${tr(m[2])} at ${p(m[3])}`],
    [/^(.+?)克(.+?)于(.+)$/, (m) => `${tr(m[1])} defeated ${tr(m[2])} at ${p(m[3])}`],
    [/^(.+?)殺(.+?)於(.+)$/, (m) => `${tr(m[1])} killed ${tr(m[2])} at ${p(m[3])}`],
    [/^(.+?)殺(.+?)于(.+)$/, (m) => `${tr(m[1])} killed ${tr(m[2])} at ${p(m[3])}`],
    [/^(.+?)納(.+?)於(.+)$/, (m) => `${tr(m[1])} escorted ${tr(m[2])} into ${p(m[3])}`],
    [/^(.+?)納(.+?)于(.+)$/, (m) => `${tr(m[1])} escorted ${tr(m[2])} into ${p(m[3])}`],
    [/^(.+?)次於(.+)$/, (m) => `${tr(m[1])} halted at ${p(m[2])}`],
    [/^(.+?)次于(.+)$/, (m) => `${tr(m[1])} halted at ${p(m[2])}`],
    [/^(.+?)狩於(.+)$/, (m) => `${tr(m[1])} hunted at ${p(m[2])}`],
    [/^(.+?)狩于(.+)$/, (m) => `${tr(m[1])} hunted at ${p(m[2])}`],
    // Generic (after specific)
    [/^(.+?)，(.+?)盟於(.+)$/, (m) => `${tr(m[1])} and ${tr(m[2])} made a covenant at ${p(m[3])}`],
    [/^(.+?)盟於(.+)$/, (m) => `${tr(m[1])} made a covenant at ${p(m[2])}`],
    [/^(.+?)盟于(.+)$/, (m) => `${tr(m[1])} made a covenant at ${p(m[2])}`],
    [/^(.+?)卒$/, (m) => `${tr(m[1])} died`],
    [/^(.+?)薨$/, (m) => `${tr(m[1])} died`],
    [/^(.+?)崩$/, (m) => `${tr(m[1])} died`],
    [/^(.+?)伐(.+)$/, (m) => `${tr(m[1])} invaded ${tr(m[2])}`],
    [/^(.+?)侵(.+)$/, (m) => `${tr(m[1])} made an incursion into ${tr(m[2])}`],
    [/^(.+?)取(.+)$/, (m) => `${tr(m[1])} took ${tr(m[2])}`],
    [/^(.+?)入(.+)$/, (m) => `${tr(m[1])} entered ${tr(m[2])}`],
    [/^(.+?)殺(.+)$/, (m) => `${tr(m[1])} killed ${tr(m[2])}`],
    [/^(.+?)來$/, (m) => `${tr(m[1])} came`],
    [/^(.+?)如(.+)$/, (m) => `${tr(m[1])} went to ${p(m[2])}`],
    [/^(.+?)敗績$/, (m) => `${tr(m[1])} were defeated`],
    [/^(.+?)圍(.+)$/, (m) => `${tr(m[1])} besieged ${tr(m[2])}`],
    [/^(.+?)围(.+)$/, (m) => `${tr(m[1])} besieged ${tr(m[2])}`],
    [/^(.+?)滅(.+)$/, (m) => `${tr(m[1])} extinguished ${tr(m[2])}`],
    [/^(.+?)灭(.+)$/, (m) => `${tr(m[1])} extinguished ${tr(m[2])}`],
    [/^(.+?)立(.+)$/, (m) => `${tr(m[1])} raised ${tr(m[2])}`],
    [/^(.+?)使(.+?)來(.+)$/, (m) => `${tr(m[1])} sent ${tr(m[2])} to come ${tr(m[3])}`],
    [/^(.+?)使(.+?)來$/, (m) => `${tr(m[1])} sent ${tr(m[2])} to come`],
    [/^(.+?)歸(.+)$/, (m) => `${tr(m[1])} returned ${tr(m[2])}`],
    [/^(.+?)執(.+)$/, (m) => `${tr(m[1])} seized ${tr(m[2])}`],
    [/^(.+?)执(.+)$/, (m) => `${tr(m[1])} seized ${tr(m[2])}`],
    [/^(.+?)獲(.+)$/, (m) => `${tr(m[1])} captured ${tr(m[2])}`],
    [/^(.+?)获(.+)$/, (m) => `${tr(m[1])} captured ${tr(m[2])}`],
    [/^(.+?)求(.+)$/, (m) => `${tr(m[1])} came to ask for ${tr(m[2])}`],
    [/^(.+?)朝$/, (m) => `${tr(m[1])} came to court`],
    [/^(.+?)盟$/, (m) => `${tr(m[1])} made a covenant`],
    [/^(.+?)救(.+)$/, (m) => `${tr(m[1])} relieved ${tr(m[2])}`],
    [/^(.+?)會(.+)$/, (m) => `${tr(m[1])} met ${tr(m[2])}`],
    [/^(.+?)，(.+)$/, (m) => `${translatePart(m[1]).replace(/\.$/, "")}. ${cap(translatePart(m[2]))}`],
  ];

  let body = null;
  for (const [re, fn] of rules) {
    const m = r.match(re);
    if (m) {
      body = fn(m);
      break;
    }
  }
  if (!body) body = tr(r);

  let out = [prefix, body].filter(Boolean).join(", ");
  out = out.replace(/,\s*,/g, ", ").replace(/\s+/g, " ").trim();
  out = deCJK(out).replace(/,\s*,/g, ", ").replace(/，/g, ", ");
  if (!out.endsWith(".")) out += ".";
  return cap(out);
}

export function translateLine(line) {
  return splitParts(line).map(translatePart).join(" ");
}

export function translateZhText(zh) {
  return zh
    .trim()
    .split(/\n\n+/)
    .map((block) =>
      block
        .split("\n")
        .filter((l) => l.trim())
        .map((l) => {
          const t = l.trim();
          return /^(隱|桓|莊|閔|僖|文|宣|成|襄|昭|定|哀)公/.test(t)
            ? translateYearHeader(t)
            : translateLine(t);
        })
        .join("\n")
    )
    .join("\n\n");
}
