/**
 * Work-scoped speech lexicons (破音字), applied before the global list.
 * Keys are work ids from works.js.
 *
 * When adding a scripture: add or extend the matching file, then run
 * `npm run audit-speech`. Prefer phrase rules. Prefer unit `speech.zh`
 * overrides for short, high-stakes passages.
 */
import liyunDatong from "./liyun-datong.js";
import greatLearning from "./great-learning.js";
import doctrineOfMean from "./doctrine-of-mean.js";
import filialPiety from "./filial-piety.js";
import springAndAutumn from "./spring-and-autumn.js";
import analects from "./analects.js";
import mencius from "./mencius.js";
import taoTeChing from "./tao-te-ching.js";
import qingjingJing from "./qingjing-jing.js";
import yinfuJing from "./yinfu-jing.js";
import taishangGanying from "./taishang-ganying.js";
import heartSutra from "./heart-sutra.js";
import diamondSutra from "./diamond-sutra.js";
import amitabhaSutra from "./amitabha-sutra.js";
import platformSutra from "./platform-sutra.js";
import bequeathedTeachings from "./bequeathed-teachings.js";
import fortyTwoChapters from "./forty-two-chapters.js";
import zuowangLun from "./zuowang-lun.js";
import taiyiJinhua from "./taiyi-jinhua.js";
import medicineBuddha from "./medicine-buddha.js";
import contemplationSutra from "./contemplation-sutra.js";
import kongziJiayu from "./kongzi-jiayu.js";
import neiguanJing from "./neiguan-jing.js";
import zhuangziNeipian from "./zhuangzi-neipian.js";

/** @type {Record<string, { phrases?: {from:string,to:string}[], contexts?: {re:RegExp,to:string|Function}[] }>} */
export const WORK_SPEECH_LEXICONS = {
  // Confucian
  "liyun-datong": liyunDatong,
  "great-learning": greatLearning,
  "doctrine-of-mean": doctrineOfMean,
  "filial-piety": filialPiety,
  "spring-and-autumn": springAndAutumn,
  analects,
  mencius,
  "kongzi-jiayu": kongziJiayu,
  // Taoist
  "tao-te-ching": taoTeChing,
  "qingjing-jing": qingjingJing,
  "neiguan-jing": neiguanJing,
  "yinfu-jing": yinfuJing,
  "taishang-ganying": taishangGanying,
  "zuowang-lun": zuowangLun,
  "taiyi-jinhua": taiyiJinhua,
  "zhuangzi-neipian": zhuangziNeipian,
  // Buddhist
  "heart-sutra": heartSutra,
  "diamond-sutra": diamondSutra,
  "amitabha-sutra": amitabhaSutra,
  "medicine-buddha": medicineBuddha,
  "contemplation-sutra": contemplationSutra,
  "bequeathed-teachings": bequeathedTeachings,
  "forty-two-chapters": fortyTwoChapters,
  "platform-sutra": platformSutra
};

export function getWorkSpeechLexicon(workId) {
  if (!workId) return null;
  return WORK_SPEECH_LEXICONS[workId] || null;
}
