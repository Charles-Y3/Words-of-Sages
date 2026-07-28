// scripts/gen-diamond-sutra.mjs
import fs from "node:fs";
import path from "node:path";

const dir = path.resolve("src/data/diamondSutra");
fs.mkdirSync(dir, { recursive: true });

const tip = (azh, tipzh, aen, tipen) => ({
  zh: `${azh}\n<br /><b>建議：${tipzh}</b>`,
  en: `${aen}\n<br /><b>Suggestion: ${tipen}</b>`
});

const D = [
  {
    id: 1,
    text: {
      zh: "如是我聞：一時，佛在舍衛國祇樹給孤獨園，與大比丘眾千二百五十人俱。爾時，世尊食時，著衣持缽，入舍衛大城乞食。於其城中，次第乞已，還至本處。飯食訖，收衣缽，洗足已，敷座而坐。",
      en: "Thus have I heard. At one time the Buddha was at Jetavana in Śrāvastī with 1,250 monks. At mealtime he put on his robe, took his bowl, begged for food, returned, finished eating, put away robe and bowl, washed his feet, arranged his seat, and sat down."
    },
    plain: {
      zh: "第一分「法會因由」：以日常乞食、洗足、敷座開場，顯示般若不離平常威儀。",
      en: "Division 1: ordinary begging and sitting show that prajñā is not apart from daily life."
    },
    application: tip(
      "大道就在穿衣吃飯之間。",
      "今天把一件日常小事做得專心安定。",
      "The great Way is found in ordinary living.",
      "Do one ordinary task today with steady attention."
    )
  },
  {
    id: 2,
    text: {
      zh: "時，長老須菩提在大眾中即從座起，偏袒右肩，右膝著地，合掌恭敬而白佛言：「希有！世尊！如來善護念諸菩薩，善付囑諸菩薩。世尊！善男子、善女人，發阿耨多羅三藐三菩提心，應云何住？云何降伏其心？」",
      en: "Then elder Subhūti rose, bared his right shoulder, knelt, joined his palms, and asked: Rare, World-Honored One! If good men and women set their minds on supreme awakening, how should they abide? How should they subdue their minds?"
    },
    plain: {
      zh: "第二分「善現啟請」：全經圍繞「云何住、云何降伏其心」兩個問題展開。",
      en: "Division 2: the sutra unfolds as an answer to how to abide and how to subdue the mind."
    },
    application: tip(
      "先問清自己真正想安住什麼。",
      "今天寫下一句：我真正想安住的是什麼？",
      "First clarify what you truly mean to abide in.",
      "Write one line today: what do I truly mean to abide in?"
    )
  },
  {
    id: 3,
    text: {
      zh: "佛告須菩提：「諸菩薩摩訶薩應如是降伏其心：所有一切眾生之類，若卵生、若胎生、若濕生、若化生，若有色、若無色，若有想、若無想，若非有想非無想，我皆令入無餘涅槃而滅度之。如是滅度無量無數無邊眾生，實無眾生得滅度者。何以故？須菩提！若菩薩有我相、人相、眾生相、壽者相，即非菩薩。」",
      en: "The Buddha told Subhūti: Bodhisattvas should subdue the mind thus — all kinds of beings I will cause to enter nirvana without remainder. Yet in truth no being is liberated. Why? If a bodhisattva holds notions of self, person, being, or life span, that one is not a bodhisattva."
    },
    plain: {
      zh: "第三分「大乘正宗」：發心度盡眾生，卻不可執著「我在度人」。無四相，才是菩薩。",
      en: "Division 3: vow to liberate all beings without clinging to “I liberate them.” Freedom from the four notions marks a bodhisattva."
    },
    application: tip(
      "幫助他人時，放下「我很慈悲」的自我感。",
      "今天幫助一人，事後不對自己說「我真好」。",
      "When helping others, drop the self-sense of how compassionate you are.",
      "Help one person today, then refrain from praising yourself."
    )
  },
  {
    id: 4,
    text: {
      zh: "「復次，須菩提！菩薩於法，應無所住，行於布施，所謂不住色布施，不住聲香味觸法布施。須菩提！菩薩應如是布施，不住於相。何以故？若菩薩不住相布施，其福德不可思量。」",
      en: "Moreover, Subhūti, a bodhisattva should give without dwelling on anything — not on form, sound, smell, taste, touch, or dharmas. Giving without dwelling on forms, the merit is inconceivable."
    },
    plain: {
      zh: "第四分「妙行無住」：布施的關鍵不在禮物大小，而在心是否住相。",
      en: "Division 4: the virtue of giving is not the size of the gift but whether the mind dwells on form."
    },
    application: tip(
      "布施的關鍵是無住，不是表演。",
      "今天做一件善事，做完不張揚。",
      "The key to giving is non-dwelling, not performance.",
      "Do one good deed today and do not advertise it."
    )
  },
  {
    id: 5,
    text: {
      zh: "「須菩提！於意云何？可以身相見如來不？」「不也，世尊！不可以身相得見如來。何以故？如來所說身相，即非身相。」佛告須菩提：「凡所有相，皆是虛妄。若見諸相非相，則見如來。」",
      en: "Subhūti, can the Tathāgata be seen by bodily form? No, World-Honored One. All that has form is illusory. If you see all forms as no-form, you see the Tathāgata."
    },
    plain: {
      zh: "第五分「如理實見」：不以相貌執取真實；見相非相，方見如來。",
      en: "Division 5: do not grasp the real by appearance; seeing forms as no-form is seeing the Tathāgata."
    },
    application: tip(
      "少用外表與標籤判斷人。",
      "今天對一人，暫緩以貌取人。",
      "Judge people less by appearance and labels.",
      "Pause before judging one person by looks today."
    )
  },
  {
    id: 6,
    text: {
      zh: "須菩提白佛言：「世尊！頗有眾生，得聞如是言說章句，生實信不？」佛告須菩提：「莫作是說。如來滅後，後五百歲，有持戒修福者，於此章句能生信心，以此為實。當知是人不於一佛二佛三四五佛而種善根，已於無量千萬佛所種諸善根。」",
      en: "Subhūti asked whether beings will have true faith in these words. The Buddha said not to doubt: after the Tathāgata’s passing, those who keep precepts will give rise to faith — such a person has planted roots with countless Buddhas."
    },
    plain: {
      zh: "第六分「正信希有」：對般若生起真實信心極為難得，也極為珍貴。",
      en: "Division 6: true faith in prajñā is rare — and precious."
    },
    application: tip(
      "對真正觸動你的智慧，保持溫柔而堅定的信心。",
      "對一句觸動你的話，溫柔持守。",
      "Keep gentle, steady faith with wisdom that truly touches you.",
      "Gently keep one line of teaching that moves you."
    )
  },
  {
    id: 7,
    text: {
      zh: "「須菩提！於意云何？如來得阿耨多羅三藐三菩提耶？如來有所說法耶？」須菩提言：「如我解佛所說義，無有定法名阿耨多羅三藐三菩提，亦無有定法，如來可說。何以故？如來所說法，皆不可取、不可說，非法、非非法。」",
      en: "Has the Tathāgata attained supreme awakening? Has he something to teach? Subhūti: there is no fixed dharma called awakening, nor fixed dharma to teach — not to be grasped or spoken of; neither dharma nor non-dharma."
    },
    plain: {
      zh: "第七分「無得無說」：菩提與說法皆不可執為固定可得之物。",
      en: "Division 7: neither awakening nor the teaching is a fixed thing to be grasped."
    },
    application: tip(
      "學到新道理時，別急著佔有它、標榜它。",
      "學到一點新見，先消化，不急著炫耀。",
      "When you learn a new insight, do not rush to own or flaunt it.",
      "Digest one new insight today without showing off."
    )
  },
  {
    id: 8,
    text: {
      zh: "「須菩提！若人滿三千大千世界七寶以用布施，是人所得福德，寧為多不？」須菩提言：「甚多，世尊！」佛言：「若復有人，於此經中受持，乃至四句偈等，為他人說，其福勝彼。何以故？須菩提！一切諸佛，及諸佛阿耨多羅三藐三菩提法，皆從此經出。」",
      en: "If someone filled worlds with the seven treasures and gave them away, would the merit be great? Very great. Yet accepting and explaining even a four-line verse of this sutra surpasses that — for all Buddhas and their awakening arise from this sutra."
    },
    plain: {
      zh: "第八分「依法出生」：受持、為人解說般若，其福勝過無量財施。",
      en: "Division 8: holding and explaining prajñā outweighs boundless material giving."
    },
    application: tip(
      "分享智慧勝過堆砌財物。",
      "把一句有用的智慧分享給需要的人。",
      "Sharing wisdom outweighs piling up goods.",
      "Share one useful insight with someone who needs it."
    )
  },
  {
    id: 9,
    text: {
      zh: "「須菩提！於意云何？須陀洹能作是念：『我得須陀洹果』不？」須菩提言：「不也，世尊！何以故？須陀洹名為入流，而無所入，不入色聲香味觸法，是名須陀洹。」……「須菩提！阿羅漢能作是念：『我得阿羅漢道』不？」「不也，世尊！何以故？實無有法名阿羅漢。」",
      en: "Can a stream-enterer think ‘I have attained stream-entry’? No — entering the stream means entering nothing of form, sound, smell, taste, touch, or dharmas. Can an arhat think ‘I have attained arhatship’? No — in truth there is no dharma named arhat."
    },
    plain: {
      zh: "第九分「一相無相」：連聖果也不可執「我已證得」。",
      en: "Division 9: even noble fruits must not be clung to as “I have attained.”"
    },
    application: tip(
      "成就來了，也不把「我已經成功」掛在嘴邊心上。",
      "今天對一項成績，默默承擔，不自我膨脹。",
      "Even in success, do not cling to “I have made it.”",
      "Meet one achievement today without inflating yourself."
    )
  },
  {
    id: 10,
    text: {
      zh: "佛告須菩提：「於意云何？如來昔在燃燈佛所，於法有所得不？」「世尊！如來在燃燈佛所，於法實無所得。」「須菩提！於意云何？菩薩莊嚴佛土不？」「不也，世尊！何以故？莊嚴佛土者，則非莊嚴，是名莊嚴。」「是故須菩提！諸菩薩摩訶薩應如是生清淨心，不應住色生心，不應住聲香味觸法生心，應無所住而生其心。」",
      en: "Did the Tathāgata gain any dharma from Dīpaṃkara Buddha? In truth, nothing was gained. Do bodhisattvas adorn Buddha-lands? Adorning a Buddha-land is no adornment; that is called adornment. Therefore bodhisattvas should give rise to a pure mind that dwells nowhere."
    },
    plain: {
      zh: "第十分「莊嚴淨土」：應無所住而生其心——心清淨，不攀緣六塵。",
      en: "Division 10: give rise to a mind that dwells nowhere — pure, not clinging to the six senses."
    },
    application: tip(
      "做事時盡力，心卻不黏在結果上。",
      "今天做一件事，過程專心，結果不緊抓。",
      "Act fully, yet do not glue the mind to outcomes.",
      "Do one task today with full attention and a light hold on results."
    )
  },
  {
    id: 11,
    text: {
      zh: "「須菩提！如恆河中所有沙數，如是沙等恆河，於意云何？是諸恆河沙寧為多不？」須菩提言：「甚多，世尊！」……「若有善男子、善女人，以七寶滿爾所恆河沙數三千大千世界，以用布施；若有善男子、善女人，於此經中，乃至受持四句偈等，為他人說，而此福德勝前福德。」",
      en: "As many Ganges rivers as there are sands in the Ganges — if someone filled that many worlds with seven treasures and gave them away, still accepting and explaining even a four-line verse of this sutra would surpass that merit."
    },
    plain: {
      zh: "第十一分「無為福勝」：無相受持般若之福，勝過無量有相財施。",
      en: "Division 11: the merit of holding prajñā without form surpasses boundless material giving."
    },
    application: tip(
      "真正的富足在智慧與分享，不在囤積。",
      "今天用一句話幫助別人看清問題。",
      "True wealth is wisdom and sharing, not hoarding.",
      "Help someone see a problem clearly with one sentence today."
    )
  },
  {
    id: 12,
    text: {
      zh: "「復次，須菩提！隨說是經，乃至四句偈等，當知此處，一切世間、天、人、阿修羅，皆應供養，如佛塔廟，何況有人盡能受持讀誦。須菩提！當知是人成就最上第一希有之法。若是經典所在之處，則為有佛，若尊重弟子。」",
      en: "Wherever this sutra is spoken — even a four-line verse — that place should be honored by gods, humans, and asuras as a Buddha shrine. How much more one who fully accepts, holds, and recites it. Wherever this scripture is, there is the Buddha and honored disciples."
    },
    plain: {
      zh: "第十二分「尊重正教」：般若經典所在，即如佛在，當生恭敬。",
      en: "Division 12: where prajñā teaching is present, honor it as if the Buddha were present."
    },
    application: tip(
      "對真正引導你向善的教導，保持恭敬。",
      "今天重讀一句對你有益的話，心懷敬意。",
      "Keep reverence for teaching that truly guides you toward good.",
      "Reread one helpful line today with respect."
    )
  },
  {
    id: 13,
    text: {
      zh: "爾時，須菩提白佛言：「世尊！當何名此經？我等云何奉持？」佛告須菩提：「是經名為金剛般若波羅蜜，以是名字，汝當奉持。所以者何？須菩提！佛說般若波羅蜜，則非般若波羅蜜。……須菩提！諸微塵，如來說非微塵，是名微塵。如來說世界，非世界，是名世界。……可以三十二相見如來不？」「不也，世尊！不可以三十二相得見如來。」",
      en: "Subhūti asked the sutra’s name. The Buddha: call it the Diamond Prajñāpāramitā — yet prajñāpāramitā is no prajñāpāramitā. Dust motes are no dust motes; worlds are no worlds. Can the Tathāgata be seen by the thirty-two marks? No."
    },
    plain: {
      zh: "第十三分「如法受持」：經名金剛般若，卻不可執名執相；三十二相亦非見佛之路。",
      en: "Division 13: the name is Diamond Prajñā, yet names and marks are not to be clung to — even the thirty-two marks are not the way to see the Buddha."
    },
    application: tip(
      "名稱與形象都是方便，別把方便當成究竟。",
      "今天發現一個你過度執著名相的地方，鬆一鬆。",
      "Names and images are skillful means — do not take them as ultimate.",
      "Notice one place you cling to a label today, and loosen it."
    )
  },
  {
    id: 14,
    text: {
      zh: "爾時，須菩提聞說是經，深解義趣，涕淚悲泣，而白佛言：「希有！世尊！佛說如是甚深經典……世尊！若復有人得聞是經，不驚、不怖、不畏，當知是人甚為希有。……須菩提！如來是真語者、實語者、如語者、不誑語者、不異語者。……如來說一切法盡皆佛法。」",
      en: "Hearing this, Subhūti deeply understood and wept: Rare! If someone hears this sutra without alarm, fear, or dread, that person is most rare. The Tathāgata speaks truly, factually, as-it-is, without deceit. All dharmas are Buddha-dharmas as the Tathāgata teaches."
    },
    plain: {
      zh: "第十四分「離相寂滅」：能聞深經而不驚怖者希有；如來語真實不虛。",
      en: "Division 14: rare is one who hears the deep teaching without fear; the Tathāgata’s words are true."
    },
    application: tip(
      "面對刺破執著的真話，先別防衛，試著聽進去。",
      "今天聽一句不舒服但真實的話，先不反駁。",
      "When truth pierces clinging, listen before defending.",
      "Hear one uncomfortable but true word today without rebutting first."
    )
  },
  {
    id: 15,
    text: {
      zh: "「須菩提！若有善男子、善女人，初日分以恆河沙等身布施，中日分復以恆河沙等身布施，後日分亦以恆河沙等身布施，如是無量百千萬億劫以身布施；若復有人，聞此經典，信心不逆，其福勝彼，何況書寫、受持、讀誦、為人解說。」",
      en: "If someone gave away as many bodies as sands of the Ganges, morning, noon, and night, for countless eons, still one who hears this sutra with unreversed faith surpasses that merit — how much more one who writes, accepts, holds, recites, and explains it."
    },
    plain: {
      zh: "第十五分「持經功德」：信心不逆、受持讀誦為人說，功德勝過無量身施。",
      en: "Division 15: unreversed faith and holding, reciting, explaining this sutra outweigh endless bodily sacrifice."
    },
    application: tip(
      "把受持與分享正法，看得比犧牲表演更重要。",
      "今天認真讀一小段經文，並用白話告訴一人。",
      "Value holding and sharing right teaching more than dramatic sacrifice.",
      "Read a short passage carefully today and explain it simply to one person."
    )
  },
  {
    id: 16,
    text: {
      zh: "「復次，須菩提！若善男子、善女人，受持讀誦此經，若為人輕賤，是人先世罪業，應墮惡道，以今世人輕賤故，先世罪業則為消滅，當得阿耨多羅三藐三菩提。……當知是經義不可思議，果報亦不可思議。」",
      en: "If good men and women who accept, hold, and recite this sutra are slighted by others, the karma of past wrongs that would have led to lower rebirths is extinguished by that slighting, and they shall attain supreme awakening. Know that this sutra’s meaning and its fruition are inconceivable."
    },
    plain: {
      zh: "第十六分「能淨業障」：持經若遭輕賤，反能消往昔罪業，趣向菩提。",
      en: "Division 16: if holding the sutra brings scorn, that very scorn can purify past karma and turn toward awakening."
    },
    application: tip(
      "被誤解時，先看自己能否轉化，而非急著報復。",
      "今天遇到一次輕慢，練習不反擊、先安靜。",
      "When misunderstood, ask how to transform rather than retaliate.",
      "Meet one slight today without striking back — stay quiet first."
    )
  }
];

function writeChunk(filename, exportName, items) {
  const body = items
    .map(
      (c) => `  {
    id: ${c.id},
    text: {
      zh: ${JSON.stringify(c.text.zh)},
      en: ${JSON.stringify(c.text.en)}
    },
    plain: {
      zh: ${JSON.stringify(c.plain.zh)},
      en: ${JSON.stringify(c.plain.en)}
    },
    application: {
      zh: ${JSON.stringify(c.application.zh)},
      en: ${JSON.stringify(c.application.en)}
    }
  }`
    )
    .join(",\n");
  fs.writeFileSync(
    path.join(dir, filename),
    `// src/data/diamondSutra/${filename}\nconst ${exportName} = [\n${body}\n];\n\nexport default ${exportName};\n`,
    "utf8"
  );
  console.log("wrote", filename, items.length);
}

writeChunk("diamondSutra1.js", "diamondSutra1", D.filter((d) => d.id <= 8));
writeChunk("diamondSutra2.js", "diamondSutra2", D.filter((d) => d.id >= 9 && d.id <= 16));

// Part 2: 17-32
const D2 = [
  {
    id: 17,
    text: {
      zh: "爾時，須菩提白佛言：「世尊！善男子、善女人，發阿耨多羅三藐三菩提心，云何應住？云何降伏其心？」佛告須菩提：「善男子、善女人，發阿耨多羅三藐三菩提心者，當生如是心：我應滅度一切眾生。滅度一切眾生已，而無有一眾生實滅度者。……實無有法，發阿耨多羅三藐三菩提心者。」",
      en: "Subhūti asked again how those who aspire to awakening should abide and subdue the mind. The Buddha: they should think, I will liberate all beings — yet after liberating all, no being is truly liberated. In truth there is no one who sets the mind on supreme awakening."
    },
    plain: {
      zh: "第十七分「究竟無我」：重申發心度生而無眾生可度、無發心者可得。",
      en: "Division 17: again — vow to liberate all, with no being liberated and no aspirant to grasp."
    },
    application: tip(
      "發大願時，同時放下「我在發願」的執取。",
      "今天立一個小小善願，立完不自我標榜。",
      "When making a great vow, also release clinging to “I am the one vowing.”",
      "Make one small wholesome vow today without self-advertising."
    )
  },
  {
    id: 18,
    text: {
      zh: "「須菩提！於意云何？如來有肉眼不？」「如是，世尊！如來有肉眼。」……「如來有佛眼不？」「如是，世尊！如來有佛眼。」「須菩提！於意云何？恆河中所有沙，佛說是沙不？」「如是，世尊！如來說是沙。」……「爾所國土中，所有眾生，若干種心，如來悉知。何以故？如來說諸心，皆為非心，是名為心。」",
      en: "Does the Tathāgata have the fleshly eye… the Buddha eye? Yes. Are the sands of the Ganges sands as the Buddha says? Yes. Of all the beings in those lands, the Tathāgata knows their many kinds of mind. Why? The minds of which the Tathāgata speaks are no-mind; that is called mind."
    },
    plain: {
      zh: "第十八分「一體同觀」：佛悉知眾生種種心，而心亦非心。",
      en: "Division 18: the Buddha knows beings’ minds — and mind itself is no-mind."
    },
    application: tip(
      "覺察念頭起伏，別把每個念頭當成固定的「我」。",
      "今天觀察三次情緒，標註「這是念頭」，再放手。",
      "Watch thoughts rise and fall; do not take each as a fixed “me.”",
      "Notice emotion three times today, label “this is a thought,” then let go."
    )
  },
  {
    id: 19,
    text: {
      zh: "「須菩提！於意云何？若有人滿三千大千世界七寶以用布施，是人以是因緣，得福多不？」「如是，世尊！此人以是因緣，得福甚多。」「須菩提！若福德有實，如來不說得福德多；以福德無故，如來說得福德多。」",
      en: "If someone filled worlds with seven treasures and gave them away, would the merit be great? Yes. If merit were a solid thing, the Tathāgata would not say the merit is great; because merit is empty, he says it is great."
    },
    plain: {
      zh: "第十九分「法界通化」：福德無實性，故可說多；有實則滯。",
      en: "Division 19: merit has no solid nature — therefore it can be called great; if solid, it would stagnate."
    },
    application: tip(
      "積德時不把功德當成可囤積的資產。",
      "今天做善事，事後不計較「我賺到多少福」。",
      "When doing good, do not treat merit as a stockpile.",
      "Do good today without tallying how much “credit” you earned."
    )
  },
  {
    id: 20,
    text: {
      zh: "「須菩提！於意云何？佛可以具足色身見不？」「不也，世尊！如來不應以具足色身見。何以故？如來說具足色身，即非具足色身，是名具足色身。」「須菩提！於意云何？如來可以具足諸相見不？」「不也，世尊！如來不應以具足諸相見。」",
      en: "Can the Buddha be seen by his perfect form-body? No. The perfect form-body is no perfect form-body. Can the Tathāgata be seen by the perfect marks? No."
    },
    plain: {
      zh: "第二十分「離色離相」：不可以圓滿色身、諸相見如來。",
      en: "Division 20: the Tathāgata is not to be seen by perfect form or marks."
    },
    application: tip(
      "別把外在完美形象當成覺悟本身。",
      "今天少追一次「看起來很成功」的表象。",
      "Do not mistake a perfect outer image for awakening itself.",
      "Skip one chase of “looking successful” today."
    )
  },
  {
    id: 21,
    text: {
      zh: "「須菩提！汝勿謂如來作是念：『我當有所說法。』莫作是念。何以故？若人言：如來有所說法，即為謗佛，不能解我所說故。須菩提！說法者，無法可說，是名說法。」",
      en: "Do not think the Tathāgata holds the thought “I will teach a dharma.” If someone says the Tathāgata has something to teach, that person slanders the Buddha. The one who teaches has no dharma to teach — that is called teaching."
    },
    plain: {
      zh: "第二十一分「非說所說」：說法而無定法可執，方名真說。",
      en: "Division 21: teaching with no fixed dharma to grasp — that is true teaching."
    },
    application: tip(
      "教導別人時，別執著「我的說法才正確」。",
      "今天分享觀點時，留空間給不同角度。",
      "When teaching, do not cling to “only my wording is right.”",
      "When sharing a view today, leave room for other angles."
    )
  },
  {
    id: 22,
    text: {
      zh: "須菩提白佛言：「世尊！佛得阿耨多羅三藐三菩提，為無所得耶？」佛言：「如是，如是！須菩提！我於阿耨多羅三藐三菩提乃至無有少法可得，是名阿耨多羅三藐三菩提。」",
      en: "Subhūti: is the Buddha’s attainment of supreme awakening a non-attainment? The Buddha: just so. Regarding supreme awakening I obtained not even the slightest dharma — that is called supreme awakening."
    },
    plain: {
      zh: "第二十二分「無法可得」：無上菩提乃至無少法可得。",
      en: "Division 22: supreme awakening means not obtaining even the slightest dharma."
    },
    application: tip(
      "覺悟不是多擁有一樣東西，而是少執取。",
      "今天放下一個「我一定要得到」的執念。",
      "Awakening is not owning one more thing — it is clinging less.",
      "Release one “I must get this” fixation today."
    )
  },
  {
    id: 23,
    text: {
      zh: "「復次，須菩提！是法平等，無有高下，是名阿耨多羅三藐三菩提；以無我、無人、無眾生、無壽者，修一切善法，則得阿耨多羅三藐三菩提。須菩提！所言善法者，如來說非善法，是名善法。」",
      en: "This dharma is equal, without high or low — that is supreme awakening. By cultivating all good dharmas without self, person, being, or life span, one attains it. And what is called a good dharma is no good dharma; that is called a good dharma."
    },
    plain: {
      zh: "第二十三分「淨心行善」：法性平等；離四相而修善，善亦不可執。",
      en: "Division 23: the nature of dharma is equal; cultivate good free of the four notions — and do not cling to “good” itself."
    },
    application: tip(
      "行善時不比較誰高誰低，也不自居善人。",
      "今天做善事，不做「我比別人高尚」的比較。",
      "When doing good, neither rank people nor cast yourself as the good one.",
      "Do good today without comparing yourself as nobler than others."
    )
  },
  {
    id: 24,
    text: {
      zh: "「須菩提！若三千大千世界中所有諸須彌山王，如是等七寶聚，有人持用布施；若人以此般若波羅蜜經，乃至四句偈等，受持、讀誦、為他人說，於前福德百分不及一，百千萬億分，乃至算數譬喻所不能及。」",
      en: "If someone gave away heaps of the seven treasures as great as all the Mount Sumerus in a trichiliocosm, still accepting, reciting, and explaining even a four-line verse of this Prajñāpāramitā sutra would exceed that merit beyond calculation."
    },
    plain: {
      zh: "第二十四分「福智無比」：般若受持演說之福，非積山寶施可比。",
      en: "Division 24: the merit of holding and explaining prajñā cannot be matched by mountains of treasure-giving."
    },
    application: tip(
      "智慧的傳遞，價值遠勝物質堆疊。",
      "今天傳授一個真正有用的方法給人。",
      "Passing on wisdom outweighs stacking material goods.",
      "Teach someone one truly useful method today."
    )
  },
  {
    id: 25,
    text: {
      zh: "「須菩提！於意云何？汝等勿謂如來作是念：『我當度眾生。』須菩提！莫作是念。何以故？實無有眾生如來度者。若有眾生如來度者，如來則有我、人、眾生、壽者。……如來說有我者，則非有我，而凡夫之人以為有我。」",
      en: "Do not think the Tathāgata holds “I will liberate beings.” In truth there is no being the Tathāgata liberates — or there would be self, person, being, life span. What is called self is no self, though ordinary people take it as self."
    },
    plain: {
      zh: "第二十五分「化無所化」：如來實無眾生可度；凡夫執我。",
      en: "Division 25: in truth the Tathāgata liberates no being; ordinary people cling to self."
    },
    application: tip(
      "影響力來臨時，別陷入「我在改變別人」的幻覺。",
      "今天影響一人向善，心中不居功。",
      "When influence arises, do not fall into “I am changing them.”",
      "Influence one person toward good today without claiming credit."
    )
  },
  {
    id: 26,
    text: {
      zh: "「須菩提！於意云何？可以三十二相觀如來不？」須菩提言：「如是，如是！以三十二相觀如來。」佛言：「須菩提！若以三十二相觀如來者，轉輪聖王則是如來。」須菩提白佛言：「世尊！如我解佛所說義，不應以三十二相觀如來。」爾時，世尊而說偈言：「若以色見我，以音聲求我，是人行邪道，不能見如來。」",
      en: "Can the Tathāgata be contemplated by the thirty-two marks? If so, a wheel-turning king would be the Tathāgata. Subhūti then understood: one should not. The Buddha spoke the verse: If you see me by form, seek me by sound, you walk a wrong path and cannot see the Tathāgata."
    },
    plain: {
      zh: "第二十六分「法身非相」：以色聲求佛是邪道；法身離相。",
      en: "Division 26: seeking the Buddha by form and sound is a wrong path; the dharma-body is apart from marks."
    },
    application: tip(
      "別把聲色氣勢當成真理的證明。",
      "今天少被一次華麗包裝說服。",
      "Do not take spectacle and sound as proof of truth.",
      "Be less persuaded by flashy packaging once today."
    )
  },
  {
    id: 27,
    text: {
      zh: "「須菩提！汝若作是念：『如來不以具足相故，得阿耨多羅三藐三菩提。』須菩提！莫作是念。……須菩提！汝若作是念：『發阿耨多羅三藐三菩提心者，說諸法斷滅。』莫作是念。何以故？發阿耨多羅三藐三菩提心者，於法不說斷滅相。」",
      en: "Do not think the Tathāgata attained awakening without the perfect marks — and do not think those who aspire to awakening proclaim the annihilation of dharmas. One who aspires to awakening does not speak of annihilation."
    },
    plain: {
      zh: "第二十七分「無斷無滅」：空不是斷滅；發菩提心者不落斷見。",
      en: "Division 27: emptiness is not annihilation; aspirants to awakening do not fall into nihilism."
    },
    application: tip(
      "看破執著時，別滑向「什麼都沒有」的虛無。",
      "今天既放下一個執念，仍認真完成一件該做的事。",
      "When seeing through clinging, do not slide into “nothing matters.”",
      "Release one clinging today, yet still carefully finish one duty."
    )
  },
  {
    id: 28,
    text: {
      zh: "「須菩提！若菩薩以滿恆河沙等世界七寶布施；若復有人知一切法無我，得成於忍，此菩薩勝前菩薩所得功德。……須菩提！菩薩不受福德。」……「須菩提！菩薩所作福德，不應貪著，是故說不受福德。」",
      en: "If a bodhisattva gave seven treasures filling worlds as many as Ganges sands, still one who knows all dharmas as without self and attains patience surpasses that merit. Bodhisattvas do not receive merit — they should not greedily cling to the merit they make."
    },
    plain: {
      zh: "第二十八分「不受不貪」：知法無我、成就安忍，勝於無量寶施；福德不貪著。",
      en: "Division 28: knowing no-self and attaining patience surpasses endless treasure-giving; do not greedily cling to merit."
    },
    application: tip(
      "功勞來了可以承擔，但不必緊抓不放。",
      "今天對一項功勞，接受而不炫耀囤積。",
      "You may accept credit, but need not clutch it.",
      "Accept one credit today without hoarding or showing it off."
    )
  },
  {
    id: 29,
    text: {
      zh: "「須菩提！若有人言：如來若來若去、若坐若臥，是人不解我所說義。何以故？如來者，無所從來，亦無所去，故名如來。」",
      en: "If someone says the Tathāgata comes or goes, sits or lies down, that person does not understand my meaning. Why? The Tathāgata comes from nowhere and goes nowhere — therefore he is called Tathāgata."
    },
    plain: {
      zh: "第二十九分「威儀寂靜」：如來無來無去；執來去坐臥相，不解真義。",
      en: "Division 29: the Tathāgata neither comes nor goes; clinging to coming, going, sitting, lying misses the meaning."
    },
    application: tip(
      "情緒來去時，看見它流動，不把「來／去」當成固定實體。",
      "今天情緒波動時，默念：它會來，也會去。",
      "When emotions come and go, see the flow — not a solid “arrival/departure.”",
      "When emotion rises today, note quietly: it comes, and it goes."
    )
  },
  {
    id: 30,
    text: {
      zh: "「須菩提！若善男子、善女人，以三千大千世界碎為微塵，於意云何？是微塵眾寧為多不？」「甚多，世尊！……若是微塵眾實有者，佛則不說是微塵眾。……如來說一合相，則非一合相，是名一合相。」",
      en: "If the trichiliocosm were smashed to dust motes, would they be many? Very many. If those dust collections were real, the Buddha would not speak of them. What is called a unified form is no unified form; that is called a unified form."
    },
    plain: {
      zh: "第三十分「一合理相」：微塵、一合相皆無實性，名相是方便。",
      en: "Division 30: dust motes and unified forms have no solid nature; names are skillful means."
    },
    application: tip(
      "整體與部分都是方便說法，別執死。",
      "今天對一個「非黑即白」的判斷，留一點空間。",
      "Wholes and parts are skillful talk — do not freeze them.",
      "Softening one black-and-white judgment today."
    )
  },
  {
    id: 31,
    text: {
      zh: "「須菩提！若人言：佛說我見、人見、眾生見、壽者見。須菩提！於意云何？是人解我所說義不？」「不也，世尊！是人不解如來所說義。何以故？世尊說我見、人見、眾生見、壽者見，即非我見、人見、眾生見、壽者見，是名我見、人見、眾生見、壽者見。」「須菩提！發阿耨多羅三藐三菩提心者，於一切法，應如是知，如是見，如是信解，不生法相。」",
      en: "If someone says the Buddha teaches views of self, person, being, life span — do they understand? No. Those views are no such views; that is their name. One who aspires to awakening should know, see, and understand all dharmas thus, without giving rise to dharma-marks."
    },
    plain: {
      zh: "第三十一分「知見不生」：破四見已，於法亦不生法相。",
      en: "Division 31: after breaking the four views, do not give rise to dharma-marks either."
    },
    application: tip(
      "連「我看破了」本身，也別再執成新的相。",
      "今天察覺一次「我懂了」的得意，輕輕放下。",
      "Do not turn “I’ve seen through it” into a new mark to cling to.",
      "Notice one smug “I’ve got it” moment today and gently release it."
    )
  },
  {
    id: 32,
    text: {
      zh: "「須菩提！若有人以滿無量阿僧祇世界七寶持用布施，若有善男子、善女人發菩薩心者，持於此經，乃至四句偈等，受持讀誦，為人演說，其福勝彼。云何為人演說？不取於相，如如不動。何以故？一切有為法，如夢幻泡影，如露亦如電，應作如是觀。」佛說是經已，長老須菩提及諸比丘、比丘尼、優婆塞、優婆夷，一切世間、天、人、阿修羅，聞佛所說，皆大歡喜，信受奉行。",
      en: "If someone gave seven treasures filling countless worlds, still a bodhisattva-minded person who holds, recites, and explains even a four-line verse of this sutra surpasses that. How to explain? Without grasping marks, unmoving in thusness. Why? All conditioned things are like a dream, illusion, bubble, shadow, dew, lightning — contemplate them thus. When the Buddha finished, the assembly rejoiced and faithfully practiced."
    },
    plain: {
      zh: "第三十二分「應化非真」：收經以六如觀有為法；演說不取相，如如不動。大眾歡喜奉行。",
      en: "Division 32: close by contemplating conditioned things as dream, illusion, bubble, shadow, dew, lightning — explain without grasping marks, unmoving in thusness. The assembly rejoices and practices."
    },
    application: tip(
      "看清無常，不是消極，而是更珍惜、更不執。",
      "今天用「如露如電」看一件煩惱，讓它鬆動。",
      "Seeing impermanence is not nihilism — it is cherishing more and clinging less.",
      "View one worry today as dew or lightning, and let it loosen."
    )
  }
];

writeChunk("diamondSutra3.js", "diamondSutra3", D2.filter((d) => d.id >= 17 && d.id <= 24));
writeChunk("diamondSutra4.js", "diamondSutra4", D2.filter((d) => d.id >= 25 && d.id <= 32));

fs.writeFileSync(
  path.join(dir, "index.js"),
  `// src/data/diamondSutra/index.js
import diamondSutra1 from "./diamondSutra1.js";
import diamondSutra2 from "./diamondSutra2.js";
import diamondSutra3 from "./diamondSutra3.js";
import diamondSutra4 from "./diamondSutra4.js";

const diamondSutra = [
  ...diamondSutra1,
  ...diamondSutra2,
  ...diamondSutra3,
  ...diamondSutra4
];

export default diamondSutra;
`
);

console.log("index ok, total", D.length + D2.length);
