// scripts/_gen-diamond.mjs — one-shot generator for Diamond Sutra chapter data
import fs from "node:fs";
import path from "node:path";

const root = path.resolve("src/data/diamondSutra");
fs.mkdirSync(root, { recursive: true });

function ch(id, zh, en, plainZh, plainEn, appZh, appEn) {
  return {
    id,
    text: { zh, en },
    plain: { zh: plainZh, en: plainEn },
    application: {
      zh: `${appZh}\n<br /><b>建議：${appZh.slice(0, 0)}</b>`.replace(
        /\n<br \/><b>建議：<\/b>/,
        `\n<br /><b>建議：今天把這一分的核心提醒用在一件小事上。</b>`
      ),
      en: `${appEn}\n<br /><b>Suggestion: Apply this division's reminder to one small matter today.</b>`
    }
  };
}

// Better application helper
function make(id, textZh, textEn, plainZh, plainEn, tipZh, tipEn) {
  return {
    id,
    text: { zh: textZh, en: textEn },
    plain: { zh: plainZh, en: plainEn },
    application: {
      zh: `${tipZh}\n<br /><b>建議：${tipZh.includes("建議") ? "" : "今天實踐一次「無住」——做事盡力，不執著結果。"}</b>`.replace(
        /<br \/><b>建議：<\/b>/,
        `<br /><b>建議：今天實踐一次「無住」——做事盡力，不執著結果。</b>`
      ),
      en: `${tipEn}\n<br /><b>Suggestion: Practice non-attachment once today — act fully, release the result.</b>`
    }
  };
}

const divisions = [
  make(
    1,
    `如是我聞：一時，佛在舍衛國祇樹給孤獨園，與大比丘眾千二百五十人俱。爾時，世尊食時，著衣持缽，入舍衛大城乞食。於其城中，次第乞已，還至本處。飯食訖，收衣缽，洗足已，敷座而坐。`,
    `Thus have I heard. At one time the Buddha was in Śrāvastī, at Jetavana, Anāthapiṇḍada's Park, together with a great assembly of 1,250 monks. Then, at mealtime, the World-Honored One put on his robe, took his bowl, and entered the great city of Śrāvastī to beg for food. Having begged in sequence through the city, he returned, finished his meal, put away robe and bowl, washed his feet, arranged his seat, and sat down.`,
    `這是金剛經第一分「法會因由分」。經文以日常乞食、洗足、敷座而坐開場，顯示般若並不離開平常威儀；大道就在穿衣吃飯之間。`,
    `Division 1 sets the scene. The Buddha's ordinary round of begging, washing, and sitting shows that prajñā is not apart from daily deportment — the great Way is in ordinary life.`,
    `修行不必好高騖遠，先把日常起居做得安穩清明。`,
    `Practice need not chase the lofty; first make daily life steady and clear.`
  ),
  make(
    2,
    `時，長老須菩提在大眾中即從座起，偏袒右肩，右膝著地，合掌恭敬而白佛言：「希有！世尊！如來善護念諸菩薩，善付囑諸菩薩。世尊！善男子、善女人，發阿耨多羅三藐三菩提心，應云何住？云何降伏其心？」`,
    `Then the elder Subhūti rose from his seat in the assembly, bared his right shoulder, knelt on his right knee, joined his palms respectfully, and said to the Buddha: "Rare, O World-Honored One! The Tathāgata is skillful in protecting and entrusting the bodhisattvas. World-Honored One, if good men and women set their minds on Anuttarā Samyaksaṃbodhi, how should they abide? How should they subdue their minds?"`,
    `第二分「善現啟請」：須菩提請示發菩提心者應如何安住、如何降伏妄心。全經圍繞這兩個問題展開。`,
    `Division 2: Subhūti asks how those who aspire to awakening should abide and how they should subdue the mind. The whole sutra answers these two questions.`,
    `先問清楚自己真正想安住什麼，再談如何對治紛亂的心。`,
    `First clarify what you truly mean to abide in, then address the restless mind.`
  ),
  make(
    3,
    `佛言：「善哉，善哉！須菩提！如汝所說……汝今諦聽，當為汝說。善男子、善女人，發阿耨多羅三藐三菩提心，應如是住，如是降伏其心。」「唯然。世尊！願樂欲聞。」佛告須菩提：「諸菩薩摩訶薩應如是降伏其心：所有一切眾生之類……我皆令入無餘涅槃而滅度之。如是滅度無量無數無邊眾生，實無眾生得滅度者。何以故？須菩提！若菩薩有我相、人相、眾生相、壽者相，即非菩薩。」`,
    `The Buddha said: "Excellent, Subhūti… Listen well… Good men and women who set their minds on supreme awakening should abide and subdue the mind thus." "So it is, World-Honored One; we gladly wish to hear." The Buddha told Subhūti: "Bodhisattvas should subdue the mind thus: all kinds of living beings… I will cause them all to enter nirvana without remainder and be liberated. Yet though countless beings are thus liberated, in truth no being is liberated. Why? If a bodhisattva holds to the notions of self, person, being, or life span, that one is not a bodhisattva."`,
    `第三分「大乘正宗」：發心要度盡眾生，卻不可執「我在度人」。無四相，才是菩薩行。`,
    `Division 3: resolve to liberate all beings, yet without clinging to “I liberate them.” Freedom from the four notions is the bodhisattva path.`,
    `幫助他人時，放下「我很慈悲」的自我感。`,
    `When helping others, drop the self-sense of “how compassionate I am.”`
  ),
  make(
    4,
    `「復次，須菩提！菩薩於法，應無所住，行於布施……須菩提！菩薩應如是布施，不住於相。……若菩薩不住相布施，其福德不可思量。」`,
    `"Moreover, Subhūti, a bodhisattva should practice giving without dwelling on anything… Subhūti, a bodhisattva should give thus, not dwelling on forms… If a bodhisattva gives without dwelling on forms, the merit is inconceivable."`,
    `第四分「妙行無住」：布施功德不在禮物大小，而在心是否住相。無住布施，福德無量。`,
    `Division 4: the virtue of giving is not the size of the gift but whether the mind dwells on form. Giving without dwelling yields immeasurable merit.`,
    `今天做一件善事，做完不張揚、不自我標榜。`,
    `Do one good deed today, then neither broadcast it nor praise yourself.`
  ),
  make(
    5,
    `「須菩提！於意云何？可以身相見如來不？」「不也，世尊！不可以身相得見如來。何以故？如來所說身相，即非身相。」佛告須菩提：「凡所有相，皆是虛妄。若見諸相非相，則見如來。」`,
    `"Subhūti, what do you think? Can the Tathāgata be seen by means of his bodily form?" "No, World-Honored One. The Tathāgata cannot be seen by bodily form. Why? The bodily form of which the Tathāgata speaks is not bodily form." The Buddha told Subhūti: "All that has form is illusory. If you see all forms as no-form, you see the Tathāgata."`,
    `第五分「如理實見」：不以相貌、形象執取真實。見相非相，方見如來。`,
    `Division 5: do not grasp the real by appearance. Seeing forms as no-form is seeing the Tathāgata.`,
    `少用外表與標籤判斷人，試著看見行為背後的心。`,
    `Judge people less by appearance and labels; look for the mind behind the act.`
  ),
  make(
    6,
    `須菩提白佛言：「世尊！頗有眾生，得聞如是言說章句，生實信不？」佛告須菩提：「莫作是說。如來滅後，後五百歲，有持戒修福者，於此章句能生信心，以此為實……當知是人不於一佛二佛三四五佛而種善根，已於無量千萬佛所種諸善根。」`,
    `Subhūti said: "World-Honored One, will there be beings who, hearing such words and phrases, give rise to true faith?" The Buddha said: "Do not say so. After the Tathāgata's passing, in the last five hundred years, those who keep precepts and cultivate blessing will be able to give rise to faith in these phrases and take them as true… Know that such a person has not planted good roots with only one, two, three, four, or five Buddhas, but with countless thousands of myriads of Buddhas."`,
    `第六分「正信希有」：對般若生起真實信心極為難得，也極為珍貴。`,
    `Division 6: true faith in prajñā is rare — and precious.`,
    `對一句真正觸動你的經文，保持溫柔而堅定的信心。`,
    `Toward one line of teaching that truly touches you, keep a gentle, steady faith.`
  ),
  make(
    7,
    `「須菩提！於意云何？如來得阿耨多羅三藐三菩提耶？如來有所說法耶？」須菩提言：「如我解佛所說義，無有定法名阿耨多羅三藐三菩提，亦無有定法，如來可說。何以故？如來所說法，皆不可取、不可說，非法、非非法。」`,
    `"Subhūti, what do you think? Has the Tathāgata attained Anuttarā Samyaksaṃbodhi? Has the Tathāgata something to teach?" Subhūti said: "As I understand the Buddha's meaning, there is no fixed dharma called supreme awakening, nor any fixed dharma the Tathāgata can teach. Why? The dharmas the Tathāgata teaches are not to be grasped or spoken of — they are neither dharma nor non-dharma."`,
    `第七分「無得無說」：菩提與說法皆不可執為固定可得之物。`,
    `Division 7: neither awakening nor the teaching is a fixed thing to be grasped.`,
    `學到新道理時，別急著佔有它、標榜它。`,
    `When you learn a new insight, do not rush to own or advertise it.`
  ),
  make(
    8,
    `「須菩提！於意云何？若人滿三千大千世界七寶以用布施，是人所得福德，寧為多不？」須菩提言：「甚多，世尊！」……「若復有人，於此經中受持，乃至四句偈等，為他人說，其福勝彼。……一切諸佛，及諸佛阿耨多羅三藐三菩提法，皆從此經出。」`,
    `"Subhūti, what do you think? If someone filled the trichiliocosm with the seven treasures and gave them away, would the merit be great?" "Very great, World-Honored One!" … "If again someone accepts and holds even a four-line verse of this sutra and explains it to others, that merit surpasses the former…. All Buddhas and their supreme awakening arise from this sutra."`,
    `第八分「依法出生」：受持、為人解說般若，其福勝過無量財施。`,
    `Division 8: accepting, holding, and explaining prajñā outweighs boundless material giving.`,
    `把一句對你有用的智慧，清楚分享給需要的人。`,
    `Clearly share one useful insight with someone who needs it.`
  )
];

function fmt(ch) {
  const esc = (s) => s.replace(/\\/g, "\\\\").replace(/`/g, "\\`");
  return `  {
    id: ${ch.id},
    text: {
      zh: \`${esc(ch.text.zh)}\`,
      en: \`${esc(ch.text.en)}\`
    },
    plain: {
      zh: ${JSON.stringify(ch.plain.zh)},
      en: ${JSON.stringify(ch.plain.en)}
    },
    application: {
      zh: \`${esc(ch.application.zh)}\`,
      en: \`${esc(ch.application.en)}\`
    }
  }`;
}

// Fix applications properly
const fixed = divisions.map((d, i) => {
  const tips = [
    ["修行不必好高騖遠，先把日常起居做得安穩清明。", "Practice need not chase the lofty; first make daily life steady and clear.", "今天把一件日常小事做得專心而安定。", "Do one ordinary task today with full, steady attention."],
    ["先問清楚自己真正想安住什麼，再談如何對治紛亂的心。", "First clarify what you truly mean to abide in, then address the restless mind.", "今天寫下一句：我真正想安住的是什麼？", "Today write one line: what do I truly mean to abide in?"],
    ["幫助他人時，放下「我很慈悲」的自我感。", "When helping others, drop the self-sense of “how compassionate I am.”", "今天幫助一人，事後不對自己說「我真好」。", "Help one person today, then refrain from telling yourself how good you are."],
    ["布施的關鍵是無住，不是表演。", "The key to giving is non-dwelling, not performance.", "今天做一件善事，做完不張揚。", "Do one good deed today and do not advertise it."],
    ["少用外表與標籤判斷人。", "Judge people less by appearance and labels.", "今天對一人，暫緩以貌取人。", "Today, pause before judging one person by appearance."],
    ["對般若生信極為珍貴。", "Faith in prajñā is precious.", "對一句觸動你的經文，溫柔持守信心。", "Gently keep faith with one line of teaching that touches you."],
    ["菩提與法皆不可執取。", "Neither awakening nor dharma is to be grasped.", "學到新道理時，別急著佔有或標榜。", "When you learn an insight, do not rush to own or flaunt it."],
    ["受持與分享智慧，勝過無量財施。", "Holding and sharing wisdom outweighs boundless material gifts.", "把一句有用的智慧分享給需要的人。", "Share one useful insight with someone who needs it."]
  ];
  const t = tips[i];
  return {
    ...d,
    application: {
      zh: `${t[0]}\n<br /><b>建議：${t[2]}</b>`,
      en: `${t[1]}\n<br /><b>Suggestion: ${t[3]}</b>`
    }
  };
});

fs.writeFileSync(
  path.join(root, "diamondSutra1.js"),
  `// src/data/diamondSutra/diamondSutra1.js\nconst diamondSutra1 = [\n${fixed.map(fmt).join(",\n")}\n];\n\nexport default diamondSutra1;\n`,
  "utf8"
);

console.log("wrote diamondSutra1.js", fixed.length);
