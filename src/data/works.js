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
    unitLabel: { zh: "章", en: "Section" },
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
    unitLabel: { zh: "章", en: "Chapter" },
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
    attribution: {
      zh: "原文據《論語》傳世本",
      en: "Chinese text after the received Analects"
    },
    status: "coming-soon",
    chapters: analects
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
    attribution: {
      zh: "原文據《孟子》傳世本",
      en: "Chinese text after the received Mencius"
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
    unitLabel: { zh: "分", en: "Division" },
    attribution: {
      zh: "原文據鳩摩羅什譯《金剛般若波羅蜜經》梁昭明太子三十二分本（長分再分節）",
      en: "Chinese text after Kumārajīva’s full Diamond Sutra translation, in Crown Prince Zhaoming of Liang's 32 divisions (long divisions subdivided)"
    },
    status: "available",
    chapters: diamondSutra
  }
];

export function getWork(workId) {
  return works.find((w) => w.id === workId);
}

export function getWorksByTradition(tradition) {
  return works.filter((w) => w.tradition === tradition);
}

export default works;
