// src/data/works.js
import taoTeChing from "./taoTeChing/index.js";
import greatLearning from "./greatLearning/index.js";
import analects from "./analects/index.js";
import doctrineOfMean from "./doctrineOfMean/index.js";
import mencius from "./mencius/index.js";
import heartSutra from "./heartSutra/index.js";
import liyunDatong from "./liyunDatong/index.js";
import qingjingJing from "./qingjingJing/index.js";
import yinfuJing from "./yinfuJing/index.js";
import taishangGanying from "./taishangGanying/index.js";
import diamondSutra from "./diamondSutra/index.js";
import amitabhaSutra from "./amitabhaSutra/index.js";
import filialPiety from "./filialPiety/index.js";
import springAndAutumn from "./springAndAutumn/index.js";
import platformSutra from "./platformSutra/index.js";

const PLATFORM_PARTS = [
  { id: 1, title: { zh: "行由品", en: "Action and Origin" } },
  { id: 2, title: { zh: "般若品", en: "Prajñā" } },
  { id: 3, title: { zh: "疑問品", en: "Questions" } },
  { id: 4, title: { zh: "定慧品", en: "Samādhi and Prajñā" } },
  { id: 5, title: { zh: "坐禪品", en: "Sitting Meditation" } },
  { id: 6, title: { zh: "懺悔品", en: "Repentance" } },
  { id: 7, title: { zh: "機緣品", en: "Encounters" } },
  { id: 8, title: { zh: "頓漸品", en: "Sudden and Gradual" } },
  { id: 9, title: { zh: "護法品", en: "Imperial Summons" } },
  { id: 10, title: { zh: "付囑品", en: "Final Instructions" } }
];

const DIAMOND_PARTS = [
  { id: 1, title: { zh: "法會因由分", en: "The Occasion of the Assembly" } },
  { id: 2, title: { zh: "善現啟請分", en: "Subhūti's Request" } },
  { id: 3, title: { zh: "大乘正宗分", en: "The True Doctrine of the Great Vehicle" } },
  { id: 4, title: { zh: "妙行無住分", en: "Wondrous Practice, Dwelling Nowhere" } },
  { id: 5, title: { zh: "如理實見分", en: "Seeing the Tathāgata as He Truly Is" } },
  { id: 6, title: { zh: "正信希有分", en: "Rare and True Faith" } },
  { id: 7, title: { zh: "無得無說分", en: "Neither Attainment nor Teaching" } },
  { id: 8, title: { zh: "依法出生分", en: "Born From This Teaching" } },
  { id: 9, title: { zh: "一相無相分", en: "One Mark, No Mark" } },
  { id: 10, title: { zh: "莊嚴淨土分", en: "Adorning the Pure Land" } },
  { id: 11, title: { zh: "無為福勝分", en: "The Merit of the Unconditioned Surpasses" } },
  { id: 12, title: { zh: "尊重正教分", en: "Honoring the True Teaching" } },
  { id: 13, title: { zh: "如法受持分", en: "Upholding the Teaching as Taught" } },
  { id: 14, title: { zh: "離相寂滅分", en: "Freedom from Marks, Perfect Stillness" } },
  { id: 15, title: { zh: "持經功德分", en: "The Merit of Upholding This Sutra" } },
  { id: 16, title: { zh: "能淨業障分", en: "Able to Purify Karmic Obstructions" } },
  { id: 17, title: { zh: "究竟無我分", en: "Ultimately Without Self" } },
  { id: 18, title: { zh: "一體同觀分", en: "One Body, Same Contemplation" } },
  { id: 19, title: { zh: "法界通化分", en: "Pervading Transformation of the Dharma Realm" } },
  { id: 20, title: { zh: "離色離相分", en: "Apart from Form, Apart from Marks" } },
  { id: 21, title: { zh: "非說所說分", en: "Neither Spoken nor That Which Is Spoken" } },
  { id: 22, title: { zh: "無法可得分", en: "No Dharma That Can Be Attained" } },
  { id: 23, title: { zh: "淨心行善分", en: "A Pure Mind Practices Good" } },
  { id: 24, title: { zh: "福智無比分", en: "Merit and Wisdom Beyond Compare" } },
  { id: 25, title: { zh: "化無所化分", en: "Transforming Without Something Transformed" } },
  { id: 26, title: { zh: "法身非相分", en: "The Dharma Body Is Not Marks" } },
  { id: 27, title: { zh: "無斷無滅分", en: "Neither Cut Off nor Extinguished" } },
  { id: 28, title: { zh: "不受不貪分", en: "Neither Receiving nor Grasping" } },
  { id: 29, title: { zh: "威儀寂靜分", en: "Awesome Deportment, Perfect Stillness" } },
  { id: 30, title: { zh: "一合相理分", en: "The Principle of the Mark of Unity" } },
  { id: 31, title: { zh: "知見不生分", en: "Views Do Not Arise" } },
  { id: 32, title: { zh: "應化非真分", en: "Transformation Bodies Are Not Real" } }
];

const ANALECTS_PARTS = [
  { id: 1, title: { zh: "學而", en: "Learning" } },
  { id: 2, title: { zh: "為政", en: "Governing" } },
  { id: 3, title: { zh: "八佾", en: "Eight Rows" } },
  { id: 4, title: { zh: "里仁", en: "Living in Humaneness" } },
  { id: 5, title: { zh: "公冶長", en: "Gongye Chang" } },
  { id: 6, title: { zh: "雍也", en: "Yong Ye" } },
  { id: 7, title: { zh: "述而", en: "Transmission" } },
  { id: 8, title: { zh: "泰伯", en: "Tai Bo" } },
  { id: 9, title: { zh: "子罕", en: "The Master Seldom" } },
  { id: 10, title: { zh: "鄉黨", en: "Village Community" } },
  { id: 11, title: { zh: "先進", en: "Those of Former Times" } },
  { id: 12, title: { zh: "顏淵", en: "Yan Yuan" } },
  { id: 13, title: { zh: "子路", en: "Zi Lu" } },
  { id: 14, title: { zh: "憲問", en: "Xian Asked" } },
  { id: 15, title: { zh: "衛靈公", en: "Duke Ling of Wei" } },
  { id: 16, title: { zh: "季氏", en: "The Ji Family" } },
  { id: 17, title: { zh: "陽貨", en: "Yang Huo" } },
  { id: 18, title: { zh: "微子", en: "Viscount of Wei" } },
  { id: 19, title: { zh: "子張", en: "Zi Zhang" } },
  { id: 20, title: { zh: "堯曰", en: "Yao Spoke" } }
];

const SPRING_AUTUMN_PARTS = [
  { id: "隱公", title: { zh: "隱公", en: "Duke Yin" } },
  { id: "桓公", title: { zh: "桓公", en: "Duke Huan" } },
  { id: "莊公", title: { zh: "莊公", en: "Duke Zhuang" } },
  { id: "閔公", title: { zh: "閔公", en: "Duke Min" } },
  { id: "僖公", title: { zh: "僖公", en: "Duke Xi" } },
  { id: "文公", title: { zh: "文公", en: "Duke Wen" } },
  { id: "宣公", title: { zh: "宣公", en: "Duke Xuan" } },
  { id: "成公", title: { zh: "成公", en: "Duke Cheng" } },
  { id: "襄公", title: { zh: "襄公", en: "Duke Xiang" } },
  { id: "昭公", title: { zh: "昭公", en: "Duke Zhao" } },
  { id: "定公", title: { zh: "定公", en: "Duke Ding" } },
  { id: "哀公", title: { zh: "哀公", en: "Duke Ai" } }
];

const MEAN_PARTS = Array.from({ length: 33 }, (_, i) => {
  const n = i + 1;
  return { id: n, title: { zh: `第${n}章`, en: `Chapter ${n}` } };
});

const works = [
  {
    id: "tao-te-ching",
    tradition: "taoist",
    title: { zh: "道德經", en: "Tao Te Ching" },
    author: { zh: "老子", en: "Laozi" },
    era: { zh: "春秋時期", en: "Spring and Autumn Period" },
    description: {
      zh: "道家思想的根本經典，八十一章論述道、德與無為的智慧。",
      en: "The foundational text of Taoism — 81 chapters on the Way, virtue, and effortless action."
    },
    unitLabel: { zh: "章", en: "Chapter" },
    attribution: {
      zh: "原文據傳世王弼本系統",
      en: "Chinese text after the Wang Bi tradition"
    },
    status: "available",
    chapters: taoTeChing
  },
  {
    id: "qingjing-jing",
    tradition: "taoist",
    title: { zh: "太上老君說常清靜經", en: "Scripture of Constant Clarity and Stillness" },
    author: { zh: "太上老君（舊題）", en: "Attrib. Laojun" },
    era: { zh: "傳唐代道經", en: "Traditionally dated to the Tang Dynasty" },
    description: {
      zh: "道教清修要典，闡明清靜為道之本、遣欲澄心的修行次第。",
      en: "A concise Taoist classic on clarity, stillness, and dissolving desire as the root of the Way."
    },
    unitLabel: { zh: "段", en: "Section" },
    attribution: {
      zh: "原文據《正統道藏》太上老君說常清靜經",
      en: "Chinese text after the Scripture of Constant Clarity and Stillness (Daoist Canon)"
    },
    status: "available",
    chapters: qingjingJing
  },
  {
    id: "yinfu-jing",
    tradition: "taoist",
    title: { zh: "黃帝陰符經", en: "Yinfu Jing (Scripture of the Hidden Talisman)" },
    author: { zh: "舊題黃帝", en: "Attrib. the Yellow Emperor" },
    era: { zh: "傳戰國至唐代", en: "Traditionally dated Warring States to Tang" },
    description: {
      zh: "道家奇書，以天道、機、盜等概念闡述天人相應與因勢制宜之理。",
      en: "A terse Taoist classic on Heaven's hidden mechanisms and the art of acting in accord with them."
    },
    unitLabel: { zh: "段", en: "Section" },
    attribution: {
      zh: "原文據《黃帝陰符經》通行本",
      en: "Chinese text after the received text of the Yinfu Jing"
    },
    status: "available",
    chapters: yinfuJing
  },
  {
    id: "taishang-ganying",
    tradition: "taoist",
    title: { zh: "太上感應篇", en: "Treatise on Response and Retribution" },
    author: { zh: "舊題太上老君", en: "Attrib. Laojun" },
    era: { zh: "傳為宋代輯錄", en: "Traditionally compiled in the Song Dynasty" },
    description: {
      zh: "道教勸善經典，闡述禍福無門、惟人自召的感應之理。",
      en: "A Taoist scripture on moral cause and effect — how fortune and misfortune are summoned by one's own deeds."
    },
    unitLabel: { zh: "段", en: "Section" },
    attribution: {
      zh: "原文據《正統道藏》所收《太上感應篇》全文（通行本）",
      en: "Chinese text after the complete Taishang Ganying Pian in the Daoist Canon (Zhengtong Daozang), the standard received text"
    },
    status: "available",
    chapters: taishangGanying
  },
  {
    id: "liyun-datong",
    tradition: "confucian",
    title: { zh: "禮運大同篇", en: "The Great Harmony" },
    author: { zh: "孔子（禮記）", en: "Confucius (Book of Rites)" },
    era: { zh: "戰國至西漢", en: "Warring States to Western Han" },
    description: {
      zh: "《禮記·禮運》名篇，描繪天下為公的大同理想社會。",
      en: "A celebrated passage from the Book of Rites on the ideal of great harmony shared by all."
    },
    unitLabel: { zh: "段", en: "Section" },
    attribution: {
      zh: "原文據《禮記·禮運》",
      en: "Chinese text from the Book of Rites, chapter Liyun"
    },
    status: "available",
    chapters: liyunDatong
  },
  {
    id: "great-learning",
    tradition: "confucian",
    title: { zh: "大學", en: "The Great Learning" },
    author: { zh: "曾子", en: "Zengzi" },
    era: { zh: "戰國時期", en: "Warring States Period" },
    description: {
      zh: "儒家四書之一，闡述修身、齊家、治國、平天下的次第。",
      en: "One of the Confucian Four Books, on the path from self-cultivation to a well-ordered world."
    },
    unitLabel: { zh: "節", en: "Section" },
    attribution: {
      zh: "原文據《禮記·大學》朱子章句系統",
      en: "Chinese text after the Great Learning (Zhu Xi arrangement)"
    },
    status: "available",
    chapters: greatLearning
  },
  {
    id: "doctrine-of-mean",
    tradition: "confucian",
    title: { zh: "中庸", en: "Doctrine of the Mean" },
    author: { zh: "子思", en: "Zisi" },
    era: { zh: "戰國時期", en: "Warring States Period" },
    description: {
      zh: "儒家四書之一，論中和之道與誠的修養。",
      en: "One of the Confucian Four Books, on balance, harmony, and sincerity."
    },
    unitLabel: { zh: "節", en: "Section" },
    structureLabel: { zh: "章", en: "Chapter" },
    structureCount: 33,
    structureParts: MEAN_PARTS,
    attribution: {
      zh: "原文據朱熹《中庸章句》三十三章本（長章再分節）",
      en: "Chinese text from Zhu Xi’s Doctrine of the Mean in 33 chapters (long chapters subdivided)"
    },
    status: "available",
    chapters: doctrineOfMean
  },
  {
    id: "analects",
    tradition: "confucian",
    title: { zh: "論語", en: "Analects" },
    author: { zh: "孔子及其弟子", en: "Confucius and disciples" },
    era: { zh: "春秋時期", en: "Spring and Autumn Period" },
    description: {
      zh: "記錄孔子與弟子言行的儒家經典。",
      en: "A record of the sayings and conduct of Confucius and his disciples."
    },
    unitLabel: { zh: "章", en: "Chapter" },
    structureLabel: { zh: "篇", en: "Book" },
    structureCount: 20,
    structureParts: ANALECTS_PARTS,
    attribution: {
      zh: "原文據《論語》傳世本二十篇（維基文庫傳統章次；個別字從朱熹集注通行讀法）",
      en: "Chinese text from the received Analects in 20 books (Wikisource chaptering; selected readings follow Zhu Xi)"
    },
    status: "available",
    chapters: analects
  },
  {
    id: "filial-piety",
    tradition: "confucian",
    title: { zh: "孝經", en: "Classic of Filial Piety" },
    author: { zh: "孔子（傳）", en: "Attrib. Confucius" },
    era: { zh: "戰國至西漢", en: "Warring States to Western Han" },
    description: {
      zh: "儒家論孝專經，闡述孝為德本，並推及天子以至庶人的踐行與家國治理。",
      en: "The Confucian classic on filial piety as the root of virtue — from the household to the ordering of the realm."
    },
    unitLabel: { zh: "章", en: "Chapter" },
    attribution: {
      zh: "原文據《孝經》今文十八章本",
      en: "Chinese text after the Classic of Filial Piety in the received eighteen-chapter New Text tradition"
    },
    status: "available",
    chapters: filialPiety
  },
  {
    id: "spring-and-autumn",
    tradition: "confucian",
    title: { zh: "春秋", en: "Spring and Autumn Annals" },
    author: { zh: "孔子（傳）", en: "Attrib. Confucius" },
    era: { zh: "春秋時期", en: "Spring and Autumn Period" },
    description: {
      zh: "魯國編年史，記隱公元年至哀公十四年事，為儒家重要經典，後世經傳闡釋極豐。",
      en: "The chronicle of the state of Lu — a foundational Confucian classic later read through rich commentarial traditions."
    },
    unitLabel: { zh: "段", en: "Section" },
    structureLabel: { zh: "公", en: "Duke" },
    structureCount: 12,
    structureParts: SPRING_AUTUMN_PARTS,
    attribution: {
      zh: "原文據《春秋》經文（自公羊傳經文系統整理；繁體）",
      en: "Chinese text after the Spring and Autumn classic (jing), arranged from the Gongyang jing tradition; Traditional Chinese"
    },
    status: "available",
    chapters: springAndAutumn
  },
  {
    id: "mencius",
    tradition: "confucian",
    title: { zh: "孟子", en: "Mencius" },
    author: { zh: "孟子及其弟子", en: "Mencius and disciples" },
    era: { zh: "戰國時期", en: "Warring States Period" },
    description: {
      zh: "記錄孟子言行與思想的儒家經典，闡述性善論與仁政。",
      en: "The teachings of Mencius on innate goodness and benevolent governance."
    },
    unitLabel: { zh: "章", en: "Chapter" },
    structureLabel: { zh: "篇", en: "Book" },
    structureCount: 7,
    attribution: {
      zh: "原文據《孟子》傳世本七篇",
      en: "Chinese text after the received Mencius in seven books"
    },
    status: "coming-soon",
    chapters: mencius
  },
  {
    id: "heart-sutra",
    tradition: "buddhist",
    title: { zh: "心經", en: "Heart Sutra" },
    author: { zh: "玄奘譯", en: "Trans. Xuanzang" },
    era: { zh: "唐代", en: "Tang Dynasty" },
    description: {
      zh: "般若經典精要，闡述空性智慧。",
      en: "A concise distillation of Prajñāpāramitā teachings on emptiness and wisdom."
    },
    unitLabel: { zh: "段", en: "Verse" },
    attribution: {
      zh: "原文據玄奘譯《般若波羅蜜多心經》",
      en: "Chinese text after Xuanzang’s Heart Sutra translation"
    },
    status: "available",
    chapters: heartSutra
  },
  {
    id: "diamond-sutra",
    tradition: "buddhist",
    title: { zh: "金剛經", en: "Diamond Sutra" },
    author: { zh: "鳩摩羅什譯", en: "Trans. Kumārajīva" },
    era: { zh: "姚秦", en: "Later Qin" },
    description: {
      zh: "般若經典，闡述無相布施與空性智慧。",
      en: "A Prajñāpāramitā sutra on non-attachment, generosity, and the nature of emptiness."
    },
    unitLabel: { zh: "節", en: "Section" },
    structureLabel: { zh: "分", en: "Division" },
    structureCount: 32,
    structureParts: DIAMOND_PARTS,
    attribution: {
      zh: "原文據鳩摩羅什譯《金剛般若波羅蜜經》梁昭明太子三十二分本（長分再分節）",
      en: "Chinese text after Kumārajīva’s full Diamond Sutra translation, in Crown Prince Zhaoming of Liang's 32 divisions (long divisions subdivided)"
    },
    status: "available",
    chapters: diamondSutra
  },
  {
    id: "amitabha-sutra",
    tradition: "buddhist",
    title: { zh: "阿彌陀經", en: "Amitabha Sutra" },
    author: { zh: "鳩摩羅什譯", en: "Trans. Kumārajīva" },
    era: { zh: "姚秦", en: "Later Qin" },
    description: {
      zh: "淨土三經之一，讚歎極樂世界莊嚴，勸持名念佛、發願往生。",
      en: "One of the three Pure Land sutras — praising the Land of Ultimate Bliss and urging mindfulness of the Name and the vow for rebirth."
    },
    unitLabel: { zh: "段", en: "Section" },
    attribution: {
      zh: "原文據鳩摩羅什譯《佛說阿彌陀經》",
      en: "Chinese text after Kumārajīva’s translation of the Amitabha Sutra"
    },
    status: "available",
    chapters: amitabhaSutra
  },
  {
    id: "platform-sutra",
    tradition: "buddhist",
    title: { zh: "六祖壇經", en: "Platform Sutra" },
    author: { zh: "惠能述·門人錄", en: "Huineng; recorded by disciples" },
    era: { zh: "唐代", en: "Tang Dynasty" },
    description: {
      zh: "禪宗根本經典，記錄六祖惠能開法，闡明自性般若與頓悟法門。",
      en: "The foundational Chan classic recording the Sixth Patriarch Huineng’s teaching on inherent prajñā and sudden awakening."
    },
    unitLabel: { zh: "節", en: "Section" },
    structureLabel: { zh: "品", en: "Chapter" },
    structureCount: 10,
    structureParts: PLATFORM_PARTS,
    attribution: {
      zh: "原文據《六祖大師法寶壇經》宗寶本十品（CBETA T2008；長品再分節）",
      en: "Chinese text after the Platform Sutra, Zongbao edition in 10 chapters (CBETA T2008; long chapters subdivided)"
    },
    status: "available",
    chapters: platformSutra
  }
];

export function getWork(workId) {
  return works.find((w) => w.id === workId);
}

export function getWorksByTradition(tradition) {
  return works.filter((w) => w.tradition === tradition);
}

export default works;
