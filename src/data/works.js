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
import bequeathedTeachings from "./bequeathedTeachings/index.js";
import fortyTwoChapters from "./fortyTwoChapters/index.js";
import zuowangLun from "./zuowangLun/index.js";
import taiyiJinhua from "./taiyiJinhua/index.js";
import medicineBuddha from "./medicineBuddha/index.js";
import contemplationSutra from "./contemplationSutra/index.js";
import kongziJiayu from "./kongziJiayu/index.js";
import neiguanJing from "./neiguanJing/index.js";
import zhuangziNeipian from "./zhuangziNeipian/index.js";

const FORTY_TWO_PARTS = [
  { id: 1, title: { zh: "出家證果", en: "Leaving Home and Attaining Fruition" } },
  { id: 2, title: { zh: "斷欲絕求", en: "Cutting Desire and Ending Seeking" } },
  { id: 3, title: { zh: "割愛去貪", en: "Severing Attachment and Greed" } },
  { id: 4, title: { zh: "善惡並明", en: "Distinguishing Good and Evil" } },
  { id: 5, title: { zh: "轉重令輕", en: "Turning Heavy into Light" } },
  { id: 6, title: { zh: "忍惡無瞋", en: "Enduring Evil without Anger" } },
  { id: 7, title: { zh: "惡還本身", en: "Evil Returns to the Doer" } },
  { id: 8, title: { zh: "塵唾自污", en: "Spittle and Dust Defile Oneself" } },
  { id: 9, title: { zh: "返本會道", en: "Returning to the Root, Meeting the Way" } },
  { id: 10, title: { zh: "喜施獲福", en: "Rejoicing in Giving Brings Merit" } },
  { id: 11, title: { zh: "施飯轉勝", en: "Progressive Merit of Offering Food" } },
  { id: 12, title: { zh: "舉難勸修", en: "Twenty Difficulties" } },
  { id: 13, title: { zh: "問道宿命", en: "Asking about the Way and Past Lives" } },
  { id: 14, title: { zh: "請問善大", en: "What Is Good and Great" } },
  { id: 15, title: { zh: "請問力明", en: "What Is Strong and Bright" } },
  { id: 16, title: { zh: "捨愛得道", en: "Casting Off Desire to See the Way" } },
  { id: 17, title: { zh: "明來暗謝", en: "When Light Comes, Darkness Goes" } },
  { id: 18, title: { zh: "念等本空", en: "Thought and Practice without Grasping" } },
  { id: 19, title: { zh: "假真並觀", en: "Contemplating Impermanence and Awakening" } },
  { id: 20, title: { zh: "推我本空", en: "Contemplating No-Self" } },
  { id: 21, title: { zh: "名聲喪本", en: "Fame Consumes the Root" } },
  { id: 22, title: { zh: "財色招苦", en: "Wealth and Desire Invite Suffering" } },
  { id: 23, title: { zh: "妻子甚獄", en: "Family Bonds as Prison" } },
  { id: 24, title: { zh: "色欲障道", en: "Lust as the Greatest Obstacle" } },
  { id: 25, title: { zh: "欲火燒身", en: "The Torch of Desire" } },
  { id: 26, title: { zh: "天魔嬈佛", en: "The Heavenly Spirit Tests the Buddha" } },
  { id: 27, title: { zh: "無著得道", en: "Unattached, One Attains the Way" } },
  { id: 28, title: { zh: "意馬莫縱", en: "Do Not Trust Your Mind" } },
  { id: 29, title: { zh: "正觀敵色", en: "Right Contemplation toward Desire" } },
  { id: 30, title: { zh: "欲火遠離", en: "Flee Desire like Fire" } },
  { id: 31, title: { zh: "心寂欲除", en: "Cut the Mind, Not the Body" } },
  { id: 32, title: { zh: "我空怖滅", en: "Without Desire, No Fear" } },
  { id: 33, title: { zh: "智明破魔", en: "Like One against Ten Thousand" } },
  { id: 34, title: { zh: "處中得道", en: "The Middle Way of Practice" } },
  { id: 35, title: { zh: "垢淨明存", en: "Remove Dross, the Vessel Is Pure" } },
  { id: 36, title: { zh: "輾轉獲勝", en: "The Difficulties of Human Birth" } },
  { id: 37, title: { zh: "念戒近道", en: "Mindfulness of Precepts" } },
  { id: 38, title: { zh: "生即有滅", en: "Life Is in a Breath" } },
  { id: 39, title: { zh: "教誨無差", en: "The Teaching Is Sweet Throughout" } },
  { id: 40, title: { zh: "行道在心", en: "Practice Is in the Mind" } },
  { id: 41, title: { zh: "直心出欲", en: "Straight Mind through Desire's Mud" } },
  { id: 42, title: { zh: "達世如幻", en: "Seeing the World as Illusion" } }
];

const ZUOWANG_PARTS = [
  { id: 1, title: { zh: "敬信", en: "Respect and Faith" } },
  { id: 2, title: { zh: "斷緣", en: "Cutting Off Conditions" } },
  { id: 3, title: { zh: "收心", en: "Gathering the Mind" } },
  { id: 4, title: { zh: "簡事", en: "Simplifying Affairs" } },
  { id: 5, title: { zh: "真觀", en: "True Contemplation" } },
  { id: 6, title: { zh: "泰定", en: "Great Stillness" } },
  { id: 7, title: { zh: "得道", en: "Attaining the Dao" } },
  { id: 8, title: { zh: "坐忘樞翼", en: "Pivot and Wings" } }
];

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

const MENCIUS_PARTS = [
  { id: 1, title: { zh: "梁惠王上", en: "Liang Hui Wang I" } },
  { id: 2, title: { zh: "梁惠王下", en: "Liang Hui Wang II" } },
  { id: 3, title: { zh: "公孫丑上", en: "Gongsun Chou I" } },
  { id: 4, title: { zh: "公孫丑下", en: "Gongsun Chou II" } },
  { id: 5, title: { zh: "滕文公上", en: "Teng Wen Gong I" } },
  { id: 6, title: { zh: "滕文公下", en: "Teng Wen Gong II" } },
  { id: 7, title: { zh: "離婁上", en: "Li Lou I" } },
  { id: 8, title: { zh: "離婁下", en: "Li Lou II" } },
  { id: 9, title: { zh: "萬章上", en: "Wan Zhang I" } },
  { id: 10, title: { zh: "萬章下", en: "Wan Zhang II" } },
  { id: 11, title: { zh: "告子上", en: "Gaozi I" } },
  { id: 12, title: { zh: "告子下", en: "Gaozi II" } },
  { id: 13, title: { zh: "盡心上", en: "Jin Xin I" } },
  { id: 14, title: { zh: "盡心下", en: "Jin Xin II" } }
];

const TAIYI_JINHUA_PARTS = [
  { id: 1, title: { zh: "天心", en: "The Heavenly Heart" } },
  { id: 2, title: { zh: "元神識神", en: "Original Spirit and Discriminating Spirit" } },
  { id: 3, title: { zh: "回光守中", en: "Turning the Light and Guarding the Center" } },
  { id: 4, title: { zh: "回光調息", en: "Turning the Light and Regulating the Breath" } },
  { id: 5, title: { zh: "回光差謬", en: "Errors in Turning the Light" } },
  { id: 6, title: { zh: "回光證驗", en: "Verification of Turning the Light" } },
  { id: 7, title: { zh: "回光活法", en: "Living Method of Turning the Light" } },
  { id: 8, title: { zh: "逍遙訣", en: "The Song of Free Wandering" } },
  { id: 9, title: { zh: "百日築基", en: "Building the Foundation in a Hundred Days" } },
  { id: 10, title: { zh: "性光識光", en: "Nature-Light and Discriminating Light" } },
  { id: 11, title: { zh: "坎離交媾", en: "Kan and Li Intercourse" } },
  { id: 12, title: { zh: "周天", en: "The Circumpolar Orbit" } },
  { id: 13, title: { zh: "勸世歌", en: "Song of Exhortation to the World" } }
];

const ZHUANGZI_NEIPIAN_PARTS = [
  { id: 1, title: { zh: "逍遙遊", en: "Free and Easy Wandering" } },
  { id: 2, title: { zh: "齊物論", en: "Discussion on Making All Things Equal" } },
  { id: 3, title: { zh: "養生主", en: "The Secret of Caring for Life" } },
  { id: 4, title: { zh: "人間世", en: "In the World of Men" } },
  { id: 5, title: { zh: "德充符", en: "The Sign of Virtue Complete" } },
  { id: 6, title: { zh: "大宗師", en: "The Great and Venerable Teacher" } },
  { id: 7, title: { zh: "應帝王", en: "Fit for Emperors and Kings" } }
];

const CONTEMPLATION_PARTS = [
  { id: 1, title: { zh: "日想", en: "Contemplation of the Sun" } },
  { id: 2, title: { zh: "水想", en: "Contemplation of Water" } },
  { id: 3, title: { zh: "地想", en: "Contemplation of the Ground" } },
  { id: 4, title: { zh: "樹想", en: "Contemplation of Trees" } },
  { id: 5, title: { zh: "八功德水想", en: "Contemplation of the Eight Waters" } },
  { id: 6, title: { zh: "總觀想", en: "General Contemplation" } },
  { id: 7, title: { zh: "花座想", en: "Contemplation of the Flower Throne" } },
  { id: 8, title: { zh: "想像", en: "Contemplation of the Image" } },
  { id: 9, title: { zh: "遍觀一切色想", en: "Contemplation of the True Body" } },
  { id: 10, title: { zh: "觀觀世音", en: "Contemplation of Avalokiteśvara" } },
  { id: 11, title: { zh: "觀大勢至", en: "Contemplation of Mahāsthāmaprāpta" } },
  { id: 12, title: { zh: "普觀想", en: "Universal Contemplation" } },
  { id: 13, title: { zh: "雜想觀", en: "Mixed Contemplation" } },
  { id: 14, title: { zh: "上輩生想", en: "Upper-Grade Birth" } },
  { id: 15, title: { zh: "中輩生想", en: "Middle-Grade Birth" } },
  { id: 16, title: { zh: "下輩生想", en: "Lower-Grade Birth" } }
];

const KONGZI_JIAYU_PARTS = [
  { id: 1, title: { zh: "相魯", en: "Serving as Minister of Lu" } },
  { id: 2, title: { zh: "始誅", en: "Beginning of Punishment" } },
  { id: 3, title: { zh: "王言解", en: "Explanation of the King’s Words" } },
  { id: 4, title: { zh: "大婚解", en: "Explanation of the Great Marriage" } },
  { id: 5, title: { zh: "儒行解", en: "Explanation of the Conduct of a Ru" } },
  { id: 6, title: { zh: "問禮", en: "Asking about Rites" } },
  { id: 7, title: { zh: "五儀解", en: "Explanation of the Five Deportments" } },
  { id: 8, title: { zh: "致思", en: "Devoted Thought" } },
  { id: 9, title: { zh: "三恕", en: "The Three Reciprocities" } },
  { id: 10, title: { zh: "好生", en: "Love of Life" } },
  { id: 11, title: { zh: "觀周", en: "Observing Zhou" } },
  { id: 12, title: { zh: "弟子行", en: "Conduct of the Disciples" } },
  { id: 13, title: { zh: "賢君", en: "Worthy Rulers" } },
  { id: 14, title: { zh: "辯政", en: "Distinguishing Governance" } },
  { id: 15, title: { zh: "六本", en: "The Six Roots" } },
  { id: 16, title: { zh: "辯物", en: "Distinguishing Things" } },
  { id: 17, title: { zh: "哀公問政", en: "Duke Ai Asks about Governance" } },
  { id: 18, title: { zh: "顏回", en: "Yan Hui" } },
  { id: 19, title: { zh: "子路初見", en: "Zilu’s First Audience" } },
  { id: 20, title: { zh: "在厄", en: "In Distress" } },
  { id: 21, title: { zh: "入官", en: "Entering Office" } },
  { id: 22, title: { zh: "困誓", en: "Perplexity and Oath" } },
  { id: 23, title: { zh: "五帝德", en: "Virtues of the Five Emperors" } },
  { id: 24, title: { zh: "五帝", en: "The Five Emperors" } },
  { id: 25, title: { zh: "執轡", en: "Holding the Reins" } },
  { id: 26, title: { zh: "本命解", en: "Explanation of Native Endowment" } },
  { id: 27, title: { zh: "論禮", en: "On Rites" } },
  { id: 28, title: { zh: "觀鄉射", en: "Observing the Village Archery" } },
  { id: 29, title: { zh: "郊問", en: "Inquiry on the Suburban Sacrifice" } },
  { id: 30, title: { zh: "五刑解", en: "Explanation of the Five Punishments" } },
  { id: 31, title: { zh: "刑政", en: "Punishment and Governance" } },
  { id: 32, title: { zh: "禮運", en: "The Conveyance of Rites" } },
  { id: 33, title: { zh: "冠頌", en: "Hymn of the Capping" } },
  { id: 34, title: { zh: "廟制", en: "Temple Regulations" } },
  { id: 35, title: { zh: "辯樂解", en: "Explanation of Distinguishing Music" } },
  { id: 36, title: { zh: "問玉", en: "Asking about Jade" } },
  { id: 37, title: { zh: "屈節解", en: "Explanation of Bending Integrity" } },
  { id: 38, title: { zh: "七十二弟子解", en: "Explanation of the Seventy-Two Disciples" } },
  { id: 39, title: { zh: "本姓解", en: "Explanation of the Ancestral Surname" } },
  { id: 40, title: { zh: "終記解", en: "Explanation of the Final Record" } },
  { id: 41, title: { zh: "正論解", en: "Explanation of Correct Discourse" } },
  { id: 42, title: { zh: "曲禮子貢問", en: "Detailed Rites: Zigong Asks" } },
  { id: 43, title: { zh: "曲禮子夏問", en: "Detailed Rites: Zixia Asks" } },
  { id: 44, title: { zh: "曲禮公西赤問", en: "Detailed Rites: Gongxi Chi Asks" } }
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

const GREAT_LEARNING_PARTS = [
  { id: 0, title: { zh: "經一章", en: "The Canon (Chapter One)" } },
  { id: 1, title: { zh: "傳之一章：釋明明德", en: "Commentary I: Manifesting Bright Virtue" } },
  { id: 2, title: { zh: "傳之二章：釋新民", en: "Commentary II: Renewing the People" } },
  { id: 3, title: { zh: "傳之三章：釋止於至善", en: "Commentary III: Resting in the Highest Good" } },
  { id: 4, title: { zh: "傳之四章：釋本末", en: "Commentary IV: Root and Branch" } },
  { id: 5, title: { zh: "傳之五章：釋格物致知", en: "Commentary V: Investigating Things, Extending Knowledge" } },
  { id: 6, title: { zh: "傳之六章：釋誠意", en: "Commentary VI: Making the Intention Sincere" } },
  { id: 7, title: { zh: "傳之七章：釋正心修身", en: "Commentary VII: Rectifying the Mind, Cultivating the Self" } },
  { id: 8, title: { zh: "傳之八章：釋修身齊家", en: "Commentary VIII: Cultivating the Self, Regulating the Family" } },
  { id: 9, title: { zh: "傳之九章：釋齊家治國", en: "Commentary IX: Regulating the Family, Governing the State" } },
  { id: 10, title: { zh: "傳之十章：釋治國平天下", en: "Commentary X: Governing the State, Bringing Peace to the World" } }
];

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
    id: "neiguan-jing",
    tradition: "taoist",
    title: { zh: "太上老君內觀經", en: "Scripture of Inner Contemplation" },
    author: { zh: "舊題太上老君", en: "Attrib. Laojun" },
    era: { zh: "南北朝末至隋唐", en: "Late Southern Dynasties to Sui–Tang" },
    description: {
      zh: "道教觀心要典，由胎元神明說到澄心內觀、生道合一。",
      en: "A Daoist classic on contemplating the heart — from embryonic spirits to clarifying the mind and uniting life with the Dao."
    },
    unitLabel: { zh: "段", en: "Section" },
    attribution: {
      zh: "原文據《正統道藏》洞神部本文類《太上老君內觀經》（維基文庫繁體）",
      en: "Chinese text after the Taishang Laojun Neiguan Jing in the Daoist Canon (Zhengtong Daozang, Dongshen section; Wikisource Traditional)"
    },
    status: "available",
    chapters: neiguanJing
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
    id: "zuowang-lun",
    tradition: "taoist",
    title: { zh: "坐忘論", en: "Discourse on Sitting in Oblivion" },
    author: { zh: "司馬承禎", en: "Sima Chengzhen" },
    era: { zh: "唐代", en: "Tang Dynasty" },
    description: {
      zh: "唐代上清派要典，以敬信、斷緣、收心等七階闡明坐忘合道的修行次第，並附坐忘樞翼。",
      en: "A Tang Shangqing classic on seven steps of sitting in oblivion — from faith and cutting conditions to gathering the mind and attaining the Dao — with the Pivot and Wings appendix."
    },
    unitLabel: { zh: "節", en: "Section" },
    structureLabel: { zh: "篇", en: "Discourse" },
    structureCount: 8,
    structureParts: ZUOWANG_PARTS,
    attribution: {
      zh: "原文據《正統道藏》太玄部《坐忘論》系統（參《全唐文》；含坐忘樞翼；長篇再分節）",
      en: "Chinese text after the Zuowang Lun in the Daoist Canon (Zhengtong Daozang, Taixuan section), with the Pivot and Wings appendix (long discourses subdivided)"
    },
    status: "available",
    chapters: zuowangLun
  },
  {
    id: "taiyi-jinhua",
    tradition: "taoist",
    title: { zh: "太乙金華宗旨", en: "The Secret of the Golden Flower" },
    author: { zh: "舊題呂洞賓", en: "Attrib. Lü Dongbin" },
    era: { zh: "明清扶乩傳本", en: "Ming–Qing spirit-writing transmission" },
    description: {
      zh: "內丹回光要旨，以天心、元神與十三章次第開示回光守中之道。",
      en: "A neidan classic on turning the light — Heavenly Heart, original spirit, and thirteen chapters on guarding the center."
    },
    unitLabel: { zh: "節", en: "Section" },
    structureLabel: { zh: "章", en: "Chapter" },
    structureCount: 13,
    structureParts: TAIYI_JINHUA_PARTS,
    attribution: {
      zh: "原文據維基文庫繁體《太乙金華宗旨》十三章本（呂祖全書系統；含勸世歌）",
      en: "Chinese text after the Wikisource Traditional thirteen-chapter Secret of the Golden Flower (Lüzu quanshu line; including the Song of Exhortation)"
    },
    status: "available",
    chapters: taiyiJinhua
  },
  {
    id: "zhuangzi-neipian",
    tradition: "taoist",
    title: { zh: "莊子·內篇", en: "Zhuangzi: Inner Chapters" },
    author: { zh: "莊周", en: "Zhuang Zhou" },
    era: { zh: "戰國時期", en: "Warring States Period" },
    description: {
      zh: "《莊子》精華七篇，寓言與議論交織，論逍遙、齊物、養生與應世之道。",
      en: "The seven Inner Chapters of the Zhuangzi — parable and argument on wandering free, equalizing things, caring for life, and responding to the world."
    },
    unitLabel: { zh: "節", en: "Section" },
    structureLabel: { zh: "篇", en: "Chapter" },
    structureCount: 7,
    structureParts: ZHUANGZI_NEIPIAN_PARTS,
    attribution: {
      zh: "原文據郭象本《莊子》內篇七篇正文（維基文庫繁體；不含外篇、雜篇及注疏）",
      en: "Chinese text after the Guo Xiang Zhuangzi Inner Chapters (seven pian; Wikisource Traditional; outer/miscellaneous chapters and commentary omitted)"
    },
    status: "available",
    chapters: zhuangziNeipian
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
    structureLabel: { zh: "章", en: "Chapter" },
    structureCount: 11,
    structureParts: GREAT_LEARNING_PARTS,
    attribution: {
      zh: "原文據《禮記·大學》朱子章句系統，分經一章、傳十章",
      en: "Chinese text after the Great Learning (Zhu Xi arrangement), divided into one canon chapter and ten commentary chapters"
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
      zh: "記錄孟子言行與思想的儒家經典，闡述性善論與仁政，凡七篇十四卷。",
      en: "The teachings of Mencius on innate goodness and benevolent governance, in seven books and fourteen parts."
    },
    unitLabel: { zh: "章", en: "Chapter" },
    structureLabel: { zh: "卷", en: "Part" },
    structureCount: 14,
    structureParts: MENCIUS_PARTS,
    attribution: {
      zh: "原文據朱熹《孟子集注》章次（傳世本七篇十四卷；維基文庫繁體）",
      en: "Chinese text after Zhu Xi’s Mencius chaptering (received seven books / fourteen parts; Wikisource Traditional Chinese)"
    },
    status: "available",
    chapters: mencius
  },
  {
    id: "kongzi-jiayu",
    tradition: "confucian",
    title: { zh: "孔子家語", en: "School Sayings of Confucius" },
    author: { zh: "舊題孔氏家學·王肅傳本", en: "Attrib. Kong school; Wang Su recension" },
    era: { zh: "三國魏", en: "Three Kingdoms (Wei)" },
    description: {
      zh: "匯集孔子言行與禮制問對的儒家傳本，王肅注本正文凡四十四篇。",
      en: "A Confucian collection of Confucius’s sayings and ritual dialogues — forty-four pian in the Wang Su recension."
    },
    unitLabel: { zh: "節", en: "Section" },
    structureLabel: { zh: "篇", en: "Book" },
    structureCount: 44,
    structureParts: KONGZI_JIAYU_PARTS,
    attribution: {
      zh: "原文據王肅注本《孔子家語》正文四十四篇（維基文庫繁體；不含注疏）",
      en: "Chinese text after the Wang Su Kongzi Jiayu body text in forty-four pian (Wikisource Traditional; notes omitted)"
    },
    status: "available",
    chapters: kongziJiayu
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
    id: "medicine-buddha",
    tradition: "buddhist",
    title: { zh: "藥師經", en: "Medicine Buddha Sutra" },
    author: { zh: "玄奘譯", en: "Trans. Xuanzang" },
    era: { zh: "唐代", en: "Tang Dynasty" },
    description: {
      zh: "藥師琉璃光如來本願功德經，廣說十二大願、淨土莊嚴與滅罪消災之法。",
      en: "The Sutra on the Merits of the Fundamental Vows of Medicine Master Lapis Lazuli Light Tathāgata — twelve vows, Pure Land adornments, and methods for clearing obstacles."
    },
    unitLabel: { zh: "段", en: "Section" },
    attribution: {
      zh: "原文據玄奘譯《藥師琉璃光如來本願功德經》（CBETA T14 No.450）",
      en: "Chinese text after Xuanzang’s Medicine Buddha Sutra (CBETA T14 No.450)"
    },
    status: "available",
    chapters: medicineBuddha
  },
  {
    id: "contemplation-sutra",
    tradition: "buddhist",
    title: { zh: "觀無量壽經", en: "Contemplation Sutra" },
    author: { zh: "畺良耶舍譯", en: "Trans. Kālayaśas" },
    era: { zh: "劉宋", en: "Liu Song" },
    description: {
      zh: "淨土三經之一，依韋提希請法開示十六觀與九品往生。",
      en: "One of the three Pure Land sutras — sixteen contemplations and nine grades of rebirth, taught at Vaidehī’s request."
    },
    unitLabel: { zh: "節", en: "Section" },
    structureLabel: { zh: "觀", en: "Contemplation" },
    structureCount: 16,
    structureParts: CONTEMPLATION_PARTS,
    attribution: {
      zh: "原文據畺良耶舍譯《佛說觀無量壽佛經》（CBETA T12 No.365）",
      en: "Chinese text after Kālayaśas’s Contemplation Sutra (CBETA T12 No.365)"
    },
    status: "available",
    chapters: contemplationSutra
  },
  {
    id: "bequeathed-teachings",
    tradition: "buddhist",
    title: { zh: "佛遺教經", en: "Sutra of the Buddha’s Bequeathed Teaching" },
    author: { zh: "鳩摩羅什譯", en: "Trans. Kumārajīva" },
    era: { zh: "姚秦", en: "Later Qin" },
    description: {
      zh: "佛陀臨涅槃前對弟子的最後教誡，以戒為師，勸勉少欲、精進、定慧與不放逸。",
      en: "The Buddha’s final instructions before nirvana — taking the precepts as teacher, and urging few desires, diligence, stillness, wisdom, and non-laxity."
    },
    unitLabel: { zh: "段", en: "Section" },
    attribution: {
      zh: "原文據鳩摩羅什譯《佛垂般涅槃略說教誡經》（CBETA T12 No.389）",
      en: "Chinese text after Kumārajīva’s Bequeathed Teaching Sutra (CBETA T12 No.389)"
    },
    status: "available",
    chapters: bequeathedTeachings
  },
  {
    id: "forty-two-chapters",
    tradition: "buddhist",
    title: { zh: "四十二章經", en: "Sutra in Forty-Two Sections" },
    author: { zh: "迦葉摩騰、竺法蘭譯", en: "Trans. Kāśyapa Mātaṅga & Dharmaratna" },
    era: { zh: "後漢", en: "Later Han" },
    description: {
      zh: "相傳為漢地最早譯出的佛經之一，四十二段短章開示出家、離欲、布施與修道要義。",
      en: "Traditionally among the earliest Chinese Buddhist translations — forty-two short sections on renunciation, desire, giving, and the path."
    },
    unitLabel: { zh: "節", en: "Section" },
    structureLabel: { zh: "章", en: "Chapter" },
    structureCount: 42,
    structureParts: FORTY_TWO_PARTS,
    attribution: {
      zh: "原文據《佛說四十二章經》守遂註本／流通本（含序分「世尊成道已」；非大正藏 T784 早期略本）",
      en: "Chinese text after the Shousui-commentary / circulating recension of the Sutra in Forty-Two Sections (including the prologue beginning 世尊成道已; not the early short Taishō T784 form)"
    },
    status: "available",
    chapters: fortyTwoChapters
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
