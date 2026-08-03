/**
 * Build scripts/tmp/analects-content-xianwen.json and analects-content-weilinggong.json
 * Covers 憲問 (ids 335-381) and 衛靈公 (ids 382-422).
 * Run: node scripts/build-xianwen-weilinggong-content.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const tmpDir = path.join(__dirname, "tmp");
fs.mkdirSync(tmpDir, { recursive: true });

const xianwen = {
  335: {
    textEn: `Xian asked about shame. The Master said, "When the state has the Way, to draw a salary is right; when the state lacks the Way, to draw a salary is shameful."`,
    plainZh: `原憲問孔子什麼是恥辱。孔子說：國家治理清明時出仕領俸祿，是本分；國家昏亂無道時仍尸位素餐、坐領俸祿，才是真正可恥的事。`,
    plainEn: `Xian Wen 14.1. Yuan Xian asks Confucius about shame. Confucius replies that drawing a salary while the state is well governed is proper, but continuing to draw a salary while the state is disordered and doing nothing to improve it is truly shameful.`,
    applicationZh: `領一份薪水或享一個職位，若對得起這份付出還好；但若組織已經失序、自己卻只想著保住位置與收入，便該反省。\n<br /><b>建議：今天檢視自己目前的職位或收入，問自己在其中是否仍在真正貢獻價值，而非只是安穩領薪。</b>`,
    applicationEn: `Drawing a salary or holding a position is fine when it matches real contribution; but if the organization has gone off course and you only want to protect your seat and pay, it calls for reflection.\n<br /><b>Suggestion: Today, examine your current role or income and ask whether you are still contributing real value, rather than merely collecting a safe paycheck.</b>`
  },
  336: {
    textEn: `"If one refrains from being contentious, boastful, resentful, and covetous, can this be considered ren?" The Master said, "This can be considered difficult, but whether it is ren, I do not know."`,
    plainZh: `有人問：不好勝、不誇耀、不怨恨、不貪求這四種毛病都能克制不犯，是否就算仁？孔子說：這已經很難做到了，但能否稱得上「仁」，我不敢斷言。`,
    plainEn: `Xian Wen 14.2. Someone asks whether suppressing four faults — contentiousness, boastfulness, resentment, and greed — counts as ren. Confucius says this is already difficult, but whether it truly amounts to ren, he cannot say for certain.`,
    applicationZh: `克制壞習氣是了不起的自律，但自律本身不等於品德的最高境界；不要因為做到了「不犯錯」，就自滿地認為已經足夠。\n<br /><b>建議：今天列出自己已成功克制的一項壞習慣，肯定自己的進步，同時想想除了不犯錯之外，還能主動做哪一件更積極的善事。</b>`,
    applicationEn: `Restraining bad habits is impressive self-discipline, but discipline alone is not the highest form of virtue; do not assume that merely avoiding faults is enough.\n<br /><b>Suggestion: Today, name one bad habit you have successfully restrained, acknowledge the progress, and then think of one more active good deed you could do beyond simply avoiding faults.</b>`
  },
  337: {
    textEn: `The Master said, "A shi who cherishes comfort at home is not worthy of being called a shi!"`,
    plainZh: `讀書人若一心留戀家居安逸、貪圖生活享受，便不配稱作真正立志於道的士人。孔子藉此提醒有志之士，不應被安逸的生活牽絆而喪失遠大的抱負。`,
    plainEn: `Xian Wen 14.3. A scholar who clings to domestic comfort and craves an easy life does not deserve the name of a true shi. Confucius warns that aspiring men must not let comfort tie down their larger ambitions.`,
    applicationZh: `安逸的生活很誘人，但若因此放棄該承擔的責任與理想，便失去了立身處世的骨氣。\n<br /><b>建議：今天檢視一項你因為貪圖舒適而拖延的責任或理想，主動往前推進一小步。</b>`,
    applicationEn: `A comfortable life is tempting, but abandoning duty and ideals for its sake costs a person their backbone.\n<br /><b>Suggestion: Today, take one small step forward on a responsibility or ideal you have been postponing for the sake of comfort.</b>`
  },
  338: {
    textEn: `The Master said, "When the state has the Way, speak boldly and act boldly; when the state lacks the Way, act boldly but speak with modesty."`,
    plainZh: `孔子論處世之道：國家政治清明時，言論與行為都可以直言不諱、堅持正道；國家昏亂時，行為仍要堅守正道，但言語則應謙遜謹慎，以避禍全身。`,
    plainEn: `Xian Wen 14.4. Confucius offers guidance on conduct: when the state is well governed, one may speak and act boldly and uprightly; when it is disordered, one should still act uprightly but speak with caution and modesty to avoid needless harm.`,
    applicationZh: `堅持原則不代表任何時候都要話講得直白強硬；在艱難或危險的環境裡，行為上的堅守比言語上的鋒芒更重要。\n<br /><b>建議：今天若身處一個敏感或不利的環境，練習把原則放在行動上堅持，措辭上則放軟。</b>`,
    applicationEn: `Holding to principle does not mean always speaking bluntly; in difficult or risky settings, steadfast action matters more than sharp words.\n<br /><b>Suggestion: In a sensitive or unfavorable situation today, practice holding firm in your actions while softening your words.</b>`
  },
  339: {
    textEn: `The Master said, "Those with virtue will surely have worthy words, but those with worthy words do not necessarily have virtue. The humane will surely have courage, but the courageous do not necessarily have humaneness."`,
    plainZh: `孔子指出德行與言語、仁與勇之間並非對等關係：有德之人說出的話必然有價值，但能言善道的人未必有德；有仁心的人必然有勇氣去承擔，但勇敢的人未必存有仁心，也可能只是逞血氣之勇。`,
    plainEn: `Xian Wen 14.5. Confucius points out an asymmetry: a virtuous person will naturally speak worthwhile words, but an eloquent speaker does not necessarily possess virtue; a person of ren will surely have the courage to act on it, but a courageous person may lack ren and merely display raw bravado.`,
    applicationZh: `不要被口才好或表現勇敢的人自動當成有德之人；真正的德行要從言行是否一致、勇氣是否服務於良善去判斷。\n<br /><b>建議：今天觀察一位你欣賞其口才或勇氣的人，具體想想他的言行或勇敢舉動是否也伴隨著相應的品德。</b>`,
    applicationEn: `Do not automatically credit eloquence or displayed bravery as virtue; true virtue is judged by whether words and actions align and whether courage serves something good.\n<br /><b>Suggestion: Today, observe someone whose eloquence or courage you admire, and think concretely about whether their words or brave acts are matched by real character.</b>`
  },
  340: {
    textEn: `Nangong Kuo asked Confucius, "Yi was skilled at archery, and Ao could push boats over land, yet neither died a natural death. Yu and Ji personally tilled the fields, yet they came to possess the world." The Master did not answer. After Nangong Kuo left, the Master said, "What a noble person this man is! How he honors virtue!"`,
    plainZh: `南宮适向孔子舉例：善射的羿與力大能推舟上陸的奡，都不得善終；而親自耕種的禹與稷，卻因德行終得天下。孔子當下沒有回答，等南宮适離開後才稱讚：這人真是君子啊！真是崇尚德行啊！孔子藉沉默與事後稱許，肯定「以德服人勝於以力壓人」的道理，也謹慎不當面評論政治人物的成敗。`,
    plainEn: `Xian Wen 14.6. Nangong Kuo points out that Yi, a master archer, and Ao, famed for his brute strength, both met violent ends, while Yu and Ji, who tilled the soil themselves, came to possess the world through virtue. Confucius says nothing at the time, but after Nangong Kuo leaves, he praises him warmly as a noble person who honors virtue — affirming that virtue outlasts force, while being discreet about commenting directly on such political judgments in the moment.`,
    applicationZh: `力量或技能一時能壓過別人，但長久能站得住的，是德行而非蠻力；也要學南宮适懂得舉出實例，讓道理不言自明。\n<br /><b>建議：今天想一個你欽佩的人物，具體說出他是靠實力還是靠德行贏得長久的尊重，並記錄下來。</b>`,
    applicationEn: `Force or skill can overpower others momentarily, but what endures is virtue, not brute strength; also learn from Nangong Kuo's skill in letting examples speak for themselves.\n<br /><b>Suggestion: Today, think of someone you admire and write down concretely whether it is their raw ability or their character that has earned them lasting respect.</b>`
  },
  341: {
    textEn: `The Master said, "There have been cases of a noble person who was not humane, but there has never been a petty person who was humane!"`,
    plainZh: `孔子指出：即使是立志向善的君子，也可能一時做不到仁；但心胸狹隘、只顧私利的小人，卻絕不可能真正做到仁。這說明仁德雖難以時時周全，卻與器量胸襟息息相關。`,
    plainEn: `Xian Wen 14.7. Confucius notes that even a noble-minded person may sometimes fall short of ren, but a petty, self-serving person can never truly achieve it. Ren, though hard to sustain perfectly, is bound up with the breadth of one's character.`,
    applicationZh: `一時做得不夠好不代表人品有問題，但若一個人心胸始終只圍繞著自己的私利打轉，就很難期待他展現真正的仁心。\n<br /><b>建議：今天檢視自己做決定時的出發點，是否常常只考慮自身利益，若是，試著把一項決定的考量擴大到他人身上。</b>`,
    applicationEn: `Falling short once does not mean one's character is flawed, but someone whose mind revolves only around self-interest can hardly be expected to show real ren.\n<br /><b>Suggestion: Today, examine the starting point of one of your decisions — if it is mostly self-interest, try widening one decision to also consider others.</b>`
  },
  342: {
    textEn: `The Master said, "Can one truly love someone without making them work hard? Can one truly be loyal to someone without instructing them?"`,
    plainZh: `孔子指出：真心愛一個人，就不能只是一味縱容，而要讓他經歷磨練成長；真心對上忠誠，也不能只是一味順從，而要適時勸諫教導。愛與忠若少了督促與教誨，便流於溺愛與盲從。`,
    plainEn: `Xian Wen 14.8. Confucius points out that true love for someone cannot merely indulge them — it must include the effort to help them grow through hard work; true loyalty likewise cannot be blind obedience — it must include timely counsel. Without effort and instruction, love and loyalty degrade into indulgence and blind following.`,
    applicationZh: `對子女、學生或部屬一味縱容，或對上司一味唯唯諾諾，都不是真正的愛與忠誠；適度的要求與勸諫才是負責任的表現。\n<br /><b>建議：今天對你關心的一個人，給予一句誠懇但有建設性的提醒或要求，而不只是一味迎合他。</b>`,
    applicationEn: `Indulging children, students, or subordinates without limit, or simply agreeing with superiors, is not real love or loyalty; appropriate demands and honest counsel are what responsibility looks like.\n<br /><b>Suggestion: Today, give someone you care about one sincere, constructive piece of feedback or expectation, rather than simply going along with them.</b>`
  },
  343: {
    textEn: `The Master said, "In drafting diplomatic documents, Pi Chen would create the first draft, Shi Shu would deliberate and discuss it, the diplomat Zi Yu would refine and polish it, and Zi Chan of Dongli would give it its final finish."`,
    plainZh: `孔子描述鄭國制定外交辭令的嚴謹分工：裨諶先草擬初稿，世叔仔細討論修正，外交官子羽再加以修飾文辭，最後由子產潤飾定稿。經過層層把關，才能寫出一篇得體周全的外交文書。孔子藉此稱許鄭國治事之精細與人才分工之得宜。`,
    plainEn: `Xian Wen 14.9. Confucius describes the meticulous division of labor behind Zheng's diplomatic correspondence: Pi Chen drafts it, Shi Shu deliberates and revises it, the envoy Zi Yu polishes its language, and Zi Chan gives it the final touch. Only after passing through several careful stages does a fitting, well-rounded document emerge — Confucius praises this refined process and apt use of talent.`,
    applicationZh: `重要的文件或決策，經過多人分工把關、層層琢磨，品質會比一人倉促完成好得多；懂得善用不同人的專長，是治事的智慧。\n<br /><b>建議：今天處理一份重要文件或提案時，主動找一到兩位不同專長的人幫忙檢視或潤色，而不是獨自完成。</b>`,
    applicationEn: `An important document or decision, refined through several people's checks and contributions, turns out far better than one person's rushed effort; knowing how to draw on different people's strengths is the wisdom of good process.\n<br /><b>Suggestion: When handling an important document or proposal today, actively ask one or two people with different strengths to review or refine it, rather than finishing it alone.</b>`
  },
  344: {
    textEn: `Someone asked about Zi Chan. The Master said, "He was a generous man." He asked about Zi Xi. The Master said, "That man, that man!" He asked about Guan Zhong. The Master said, "As for that man — he took the three hundred households of Pian from the Bo family, yet Bo lived on coarse food to the end of his days without a single word of complaint."`,
    plainZh: `有人問子產為人如何，孔子稱讚他是個施惠於民的人；問到子西，孔子只淡淡說「那個人啊，那個人」，語帶保留不予置評；問到管仲，孔子舉出一件事：管仲奪走伯氏的騈邑三百戶封地，使伯氏晚年只能吃粗茶淡飯，但伯氏心服口服，至死都沒有怨言——可見管仲處置得當、令人心服。`,
    plainEn: `Xian Wen 14.10. Asked about Zi Chan, Confucius praises him as a man of generosity toward the people; asked about Zi Xi, he only murmurs "that man, that man," withholding judgment; asked about Guan Zhong, he cites one case: Guan Zhong stripped the Bo family of three hundred households, leaving Bo to live out his life on plain food, yet Bo never voiced a single complaint — proof that Guan Zhong's action was so justly handled that even its victim accepted it.`,
    applicationZh: `評價一個人，與其空泛地說好或不好，不如舉出具體事例來說明；一項處置若做得公正到讓受影響的人都心服，才是真本事。\n<br /><b>建議：今天評論一個人的作為時，練習用一個具體事件來支持你的看法，而不是只給一個籠統的評語。</b>`,
    applicationEn: `Judging a person is better done through concrete examples than vague praise or blame; an action handled so fairly that even the one who loses out accepts it without complaint is real skill.\n<br /><b>Suggestion: When commenting on someone's actions today, practice supporting your view with one specific incident, rather than giving a vague overall verdict.</b>`
  },
  345: {
    textEn: `The Master said, "To be poor without resentment is difficult; to be rich without arrogance is easy."`,
    plainZh: `孔子比較貧與富兩種處境下的修養難度：身處貧困卻能不怨天尤人，是很難做到的修養；身處富裕卻能不驕傲自滿，相對容易做到。孔子藉此提醒世人，貧困中修養心性尤其可貴。`,
    plainEn: `Xian Wen 14.11. Confucius compares the difficulty of self-cultivation in poverty versus wealth: to be poor without complaint is genuinely hard, while to be rich without arrogance is comparatively easy. He reminds us that cultivating equanimity in hardship is especially valuable.`,
    applicationZh: `身處逆境時能不抱怨，比身處順境時能謙虛更難得；不要小看自己在困境中保持平和的努力。\n<br /><b>建議：今天回想一次你身處困境卻沒有抱怨的經驗，肯定自己在那當中展現的修養。</b>`,
    applicationEn: `Staying free of complaint in hardship is a rarer achievement than staying humble in comfort; do not underestimate the effort of keeping your composure in difficulty.\n<br /><b>Suggestion: Today, recall a time you faced hardship without complaining, and acknowledge the quiet strength that took.</b>`
  },
  346: {
    textEn: `The Master said, "Meng Gongchuo would make an excellent steward for the Zhao or Wei families, but he could not serve as a minister of Teng or Xue."`,
    plainZh: `孔子評論孟公綽的才性：他適合擔任晉國趙氏、魏氏這類大家族的家臣總管（清靜寡欲、無需處理實際政務），卻不適合出任滕、薛這種小國的大夫，因為小國事務繁雜，需要更強的實際治理能力。孔子藉此說明用人須量才適所。`,
    plainEn: `Xian Wen 14.12. Confucius assesses Meng Gongchuo's abilities: he would excel as household steward for great families like Zhao or Wei, a role suited to his calm, low-key temperament, but he lacks the practical administrative skill needed to govern a small state like Teng or Xue, where affairs are more complex. The point is that people must be placed according to their actual strengths.`,
    applicationZh: `每個人都有適合與不適合的位置，把人放錯位置，再有才華也發揮不出來。\n<br /><b>建議：今天評估一位你熟悉的人（同事、朋友、家人）的長處，想想什麼樣的角色最能發揮他的才能。</b>`,
    applicationEn: `Everyone has roles that fit and roles that do not; placing a talented person in the wrong role wastes that talent.\n<br /><b>Suggestion: Today, assess the strengths of someone you know well and think about what role would best let their talent shine.</b>`
  },
  347: {
    textEn: `Zilu asked about the complete person. The Master said, "If one had the wisdom of Zang Wuzhong, the freedom from desire of Gongchuo, the courage of Bian Zhuangzi, and the accomplishments of Ran Qiu, and refined all this with ritual and music, one could be called a complete person." Then he said, "But must the complete person of today be exactly like that? One who, seeing gain, thinks of righteousness; who, facing danger, is ready to give up their life; and who, even in long-standing poverty, never forgets a promise made long ago — such a person, too, may be called complete."`,
    plainZh: `子路問怎樣才算是完美的人。孔子先列出理想標準：兼具臧武仲的智慧、孟公綽的清心寡欲、卞莊子的勇敢、冉求的多才多藝，再以禮樂加以涵養，便可稱為完人。但孔子接著放寬標準：現今的完人不必如此齊備，只要見利能想到義、遇到危難肯挺身犧牲、即使長期窮困也不忘記當初許下的諾言，這樣也可以算是完人了。`,
    plainEn: `Xian Wen 14.13. Zilu asks what makes a complete person. Confucius first sets an ideal standard combining Zang Wuzhong's wisdom, Gongchuo's freedom from desire, Bian Zhuangzi's courage, and Ran Qiu's many talents, all refined by ritual and music. But he then relaxes the bar: today's complete person need not have all of that — someone who thinks of righteousness when facing gain, is willing to risk their life in danger, and keeps a long-held promise even through prolonged hardship, can also be called complete.`,
    applicationZh: `完美的標準可以是理想，但真正務實可行的做人準則，是在利益、危難與長久考驗前守住原則。\n<br /><b>建議：今天面對一個涉及利益的小抉擇，練習先問自己「這是否合乎道義」，再做決定。</b>`,
    applicationEn: `A perfect ideal can stay aspirational, but the practical, workable standard is holding to principle when facing gain, danger, or the long test of time.\n<br /><b>Suggestion: Facing a small decision involving self-interest today, practice asking "is this righteous?" before deciding.</b>`
  },
  348: {
    textEn: `Confucius asked Gongming Jia about Gongshu Wenzi, "Is it true that your master does not speak, does not laugh, and does not take anything?" Gongming Jia replied, "Whoever told you that has gone too far. My master speaks only at the right moment, so people never tire of his words; he laughs only when genuinely joyful, so people never tire of his laughter; he takes only when it is righteous to do so, so people never tire of his taking." The Master said, "Is that so? Can it really be so?"`,
    plainZh: `孔子向衛國大夫公明賈打聽公叔文子的為人，問是否真的不言、不笑、不取。公明賈解釋：傳言誇大了，公叔文子是該說話時才說話，所以人不覺厭煩；真正高興時才笑，所以人不覺厭煩；合乎道義才收取，所以人不覺厭煩。孔子聽後半信半疑地說：真是這樣嗎？未必真能做到這個地步吧！`,
    plainEn: `Xian Wen 14.14. Confucius asks Gongming Jia about Gongshu Wenzi, wondering if he truly never speaks, laughs, or takes anything. Gongming Jia explains that the rumor is exaggerated: his master speaks only when it is timely, laughs only when genuinely pleased, and takes only when it is righteous — which is why none of it ever wearies people. Confucius responds with cautious doubt: "Is that really so? Can it truly be so?"`,
    applicationZh: `說話、表達情緒、收受利益，若都能拿捏「恰當的時機與分寸」，就不會讓人生厭；但要真正做到，需要長期的自律，不宜輕易自誇已經達成。\n<br /><b>建議：今天在說話、表達情緒或接受一項好處前，先停頓一秒問自己：現在是恰當的時機嗎？</b>`,
    applicationEn: `Speaking, showing emotion, and accepting benefits never tire others when done with the right timing and measure — but achieving this takes long discipline, not a claim to boast about lightly.\n<br /><b>Suggestion: Before speaking, showing emotion, or accepting a benefit today, pause for a second and ask yourself whether this is truly the right moment.</b>`
  },
  349: {
    textEn: `The Master said, "Zang Wuzhong used his stronghold at Fang to request that his successor be appointed in Lu. Though he claimed he was not coercing the ruler, I do not believe it."`,
    plainZh: `臧武仲得罪出奔後，據守封邑防城，要求魯君立自己的後代為臧氏繼承人，事後卻辯稱自己並非要挾君主。孔子直言不相信這種說法——手握重兵據點提出要求，本質上已構成脅迫，不論表面說詞如何美化。`,
    plainEn: `Xian Wen 14.15. After falling out of favor and fleeing, Zang Wuzhong holds the fortified town of Fang and demands that the ruler of Lu appoint his chosen heir, later insisting he was not coercing the ruler. Confucius flatly says he does not believe it — making a demand while holding a fortified stronghold is coercion in substance, whatever the polished words claim.`,
    applicationZh: `手握籌碼或優勢去逼迫他人答應要求，事後再說「我沒有脅迫你」，這種說詞經不起檢驗。\n<br /><b>建議：今天若你在某個協商中佔有明顯優勢，練習誠實承認這個優勢對對方的壓力，而不是粉飾成平等的請求。</b>`,
    applicationEn: `Using leverage to pressure someone into agreement, then claiming afterward "I wasn't coercing you," does not hold up to scrutiny.\n<br /><b>Suggestion: If you hold a clear advantage in a negotiation today, practice honestly acknowledging the pressure it puts on the other side, rather than dressing it up as an equal request.</b>`
  },
  350: {
    textEn: `The Master said, "Duke Wen of Jin was cunning but not upright; Duke Huan of Qi was upright but not cunning."`,
    plainZh: `孔子比較春秋兩位霸主：晉文公慣用權謀詭詐取勝，行事不夠光明正大；齊桓公則相對行事正派，較少使用詭計。孔子藉此褒貶兩人手段的正當性，肯定光明磊落更勝於權謀取巧。`,
    plainEn: `Xian Wen 14.16. Confucius compares two hegemons of the Spring and Autumn period: Duke Wen of Jin relied on cunning stratagems and was not always aboveboard, while Duke Huan of Qi acted more forthrightly with less deceit. Confucius implicitly favors open, honest means over clever manipulation.`,
    applicationZh: `達成目標的手段光明正大或投機取巧，會決定一個人真正的評價高低，即使兩人最後都成功了。\n<br /><b>建議：今天檢視一件你正在推動的事，問自己所用的方法是否光明正大，若有投機取巧之處，考慮換一個更正當的做法。</b>`,
    applicationEn: `Whether the means to a goal are honest or opportunistic shapes how a person is truly judged, even when both approaches succeed.\n<br /><b>Suggestion: Look at something you are currently pursuing and ask whether your methods are aboveboard; if there is a shortcut you are tempted by, consider a more honest approach instead.</b>`
  },
  351: {
    textEn: `Zilu said, "When Duke Huan killed Prince Jiu, Shao Hu died for him, but Guan Zhong did not." He asked, "Was Guan Zhong not lacking in ren?" The Master said, "Duke Huan brought the feudal lords together nine times without resorting to war chariots — this was Guan Zhong's doing. Such was his ren! Such was his ren!"`,
    plainZh: `子路質疑管仲：公子糾被殺，召忽為主殉死，管仲卻苟活下來轉而輔佐仇敵齊桓公，是否算不仁？孔子回答：齊桓公能多次會合諸侯、不靠武力就維持天下和平，全是管仲的功勞。這樣造福天下蒼生的貢獻，正是仁德的表現啊！孔子看重的是管仲對天下大局的貢獻，而非拘泥於個人的小節與私忠。`,
    plainEn: `Xian Wen 14.17. Zilu questions Guan Zhong: when Prince Jiu was killed, his follower Shao Hu died for him, but Guan Zhong lived on to serve the very rival, Duke Huan — was this not a lack of ren? Confucius answers that Duke Huan's repeated peaceful unification of the feudal lords without warfare was entirely Guan Zhong's achievement — a contribution to the whole world's welfare, which is itself the mark of ren. Confucius values the larger benefit to all under Heaven over a narrow, personal loyalty.`,
    applicationZh: `評判一個人是否有德，有時該看他為多數人帶來的實際貢獻，而不只是拘泥於個人氣節上的小節。\n<br /><b>建議：今天評估一個有爭議的選擇時，練習同時考量它對更大群體造成的影響，不只看單一原則是否被遵守。</b>`,
    applicationEn: `Judging a person's virtue sometimes calls for weighing their real contribution to the many, not fixating only on a narrow point of personal loyalty.\n<br /><b>Suggestion: When weighing a controversial choice today, practice also considering its impact on the wider group, not just whether one single principle was followed.</b>`
  },
  352: {
    textEn: `Zigong said, "Was Guan Zhong not lacking in ren? When Duke Huan killed Prince Jiu, he could not die for him, and moreover became his minister." The Master said, "Guan Zhong served as chancellor to Duke Huan, made him leader of the feudal lords, and united and set the whole world in order — the common people still benefit from it to this day. Without Guan Zhong, we would now be wearing our hair loose and folding our robes to the left! How could he be like some common man or woman clinging to petty faithfulness, hanging himself in a ditch where no one would ever know?"`,
    plainZh: `子貢也質疑管仲不能為公子糾殉死、反而輔佐仇人齊桓公，是否不仁。孔子回答：管仲輔佐桓公稱霸諸侯，匡正天下秩序，百姓至今仍蒙受其恩澤；若沒有管仲，我們恐怕都要淪為披髮左衽的異族統治了！他豈能像普通百姓那樣拘泥小信小節，在無人知曉的溝渠中自縊而死？孔子再次強調大功大德勝過小節小信。`,
    plainEn: `Xian Wen 14.18. Zigong likewise questions whether Guan Zhong lacked ren for not dying with Prince Jiu and instead serving his rival. Confucius answers that Guan Zhong's chancellorship let Duke Huan unify and stabilize the realm, benefits the people still enjoy today; without him, all would have fallen under barbarian customs. Confucius asks how such a man could be expected to cling to a commoner's petty fidelity and die unnoticed in a ditch — reaffirming that great achievement outweighs narrow personal fidelity.`,
    applicationZh: `有時候放下個人的堅持或面子，去成就更大的貢獻，比堅守一個看似「氣節」的小信念更有價值。\n<br /><b>建議：今天想一件你曾因為堅持個人原則而放棄的更大貢獻機會，重新評估這個取捨是否值得。</b>`,
    applicationEn: `Sometimes setting aside a personal stance or pride to achieve something larger is worth more than clinging to a narrow point of "integrity."\n<br /><b>Suggestion: Think of a larger contribution you once gave up for the sake of a personal principle, and reassess today whether that trade-off was truly worth it.</b>`
  },
  353: {
    textEn: `Gongshu Wenzi's steward, the officer Zhuan, was promoted alongside Wenzi himself to the ducal court. When the Master heard of this, he said, "This is worthy of the posthumous name 'Wen' [the Accomplished]!"`,
    plainZh: `公叔文子的家臣僎，因文子的推薦，得以與文子一同晉升至衛國公室任職。孔子聽聞後稱讚：這樣的作為足以當得起「文」這個諡號了！孔子讚許公叔文子提拔賢能、不嫉妒下屬、樂於與人共享地位的胸襟。`,
    plainEn: `Xian Wen 14.19. Gongshu Wenzi's own steward, Zhuan, was recommended by Wenzi and promoted alongside him into the ducal court. Hearing this, Confucius praises it as worthy of the posthumous title "Wen" (the Accomplished) — commending Wenzi's generosity in elevating a capable subordinate to share his own standing, without jealousy.`,
    applicationZh: `願意提拔身邊有能力的人，與他們共享地位與機會，而不是害怕被超越，是一種難得的胸襟。\n<br /><b>建議：今天想一位在你身邊表現優秀卻未被充分肯定的人，主動幫他爭取一次曝光或升遷的機會。</b>`,
    applicationEn: `Being willing to elevate a capable person nearby and share standing and opportunity with them, rather than fearing being outshone, is a rare generosity.\n<br /><b>Suggestion: Think of someone near you who performs well but is under-recognized, and today actively help them get a chance at visibility or advancement.</b>`
  },
  354: {
    textEn: `The Master spoke of Duke Ling of Wei's lack of the Way. Ji Kangzi said, "If that is so, why has he not lost his state?" Confucius said, "Zhongshu Yu manages his guests and diplomacy, Zhu Tuo manages the ancestral temple, and Wangsun Jia manages the army. With men like these in place, how could he lose his state?"`,
    plainZh: `孔子談到衛靈公治國無道。季康子不解，問：既然無道，衛國怎麼還沒有滅亡？孔子回答：因為衛靈公懂得任用仲叔圉處理外交賓客、祝鮀主持宗廟祭祀、王孫賈統領軍隊，各得其才、各司其職，如此一來，國家又怎麼會滅亡呢？孔子藉此說明善用人才可以彌補君主本身的不足。`,
    plainEn: `Xian Wen 14.20. Confucius remarks that Duke Ling of Wei governs without the Way. Ji Kangzi asks why, then, the state has not collapsed. Confucius answers that despite the duke's flaws, he employs Zhongshu Yu to handle diplomacy, Zhu Tuo to manage ancestral rites, and Wangsun Jia to command the army — each placed according to his talent — so how could the state fall? Confucius shows that skillful use of talented people can offset a ruler's own shortcomings.`,
    applicationZh: `一個團隊或組織即使領導者本身有明顯缺點，若能適當任用各方人才、各司其職，仍能維持運作甚至興旺。\n<br /><b>建議：今天檢視自己的團隊，找出一位被放錯位置或未被充分運用的人才，想辦法讓他發揮所長。</b>`,
    applicationEn: `Even when a leader has clear flaws, a team or organization can still function and even thrive if talented people are properly placed and put to good use.\n<br /><b>Suggestion: Today, look at your team, identify one person who is misplaced or underused, and find a way to put their strengths to work.</b>`
  },
  355: {
    textEn: `The Master said, "One who speaks without any shame or hesitation will find it hard to live up to their words!"`,
    plainZh: `孔子指出：說話時毫不慚愧、大言不慚、輕易誇下海口的人，往往難以真正兌現自己所說的話。言語過於輕率自信，正反映出對言行一致的重視不足。`,
    plainEn: `Xian Wen 14.21. Confucius observes that a person who speaks boastfully without a trace of shame or restraint will find it difficult to actually deliver on their words. Speaking too glibly and confidently often reflects too little concern for matching word with deed.`,
    applicationZh: `說大話時感到毫無壓力，反而是危險的訊號；真正謹慎的人在承諾前會先掂量自己是否做得到。\n<br /><b>建議：今天在做出一個承諾之前，先感受一下這句話說出口是否讓你感到一絲責任的壓力，若完全沒有，先緩一緩再說。</b>`,
    applicationEn: `Feeling no pressure at all when making a bold claim is itself a warning sign; a genuinely careful person weighs whether they can deliver before promising.\n<br /><b>Suggestion: Before making a promise today, notice whether saying it gives you even a slight sense of responsibility — if it feels weightless, pause before speaking it.</b>`
  },
  356: {
    textEn: `Chen Chengzi assassinated Duke Jian of Qi. Confucius bathed and went to court, reporting to Duke Ai, "Chen Heng has assassinated his ruler; I ask that you punish him." The Duke said, "Report it to the Three Families." Confucius said, "Because I once ranked among the ministers, I dared not fail to report this. Yet the ruler tells me, 'Report it to the Three Families!'" He went to the Three Families and reported it, but they refused. Confucius said, "Because I once ranked among the ministers, I dared not fail to report it."`,
    plainZh: `齊國陳成子弒殺齊簡公。孔子鄭重齋戒沐浴後上朝，向魯哀公報告請求出兵討伐弒君之賊。哀公卻推託說去告訴掌權的三家大夫。孔子自言：因為我曾經忝居大夫之列，不敢不將此事上報。他轉而向三家報告，三家不肯出兵。孔子只能再次重申：因為我曾忝居大夫之列，不敢不報告。全文顯現孔子面對亂臣賊子時堅持道義立場，即使明知徒勞，仍盡力而為。`,
    plainEn: `Xian Wen 14.22. When Chen Chengzi of Qi assassinates Duke Jian, Confucius solemnly bathes and goes to court to formally urge Duke Ai of Lu to punish the regicide. The duke deflects, telling him to report it to the powerful Three Families instead. Confucius explains to himself that, having once ranked among the ministers, he could not in conscience fail to report such a matter. He then reports it to the Three Families, who refuse to act, and he repeats the same explanation. The passage shows Confucius insisting on the moral duty to act against usurpers, even knowing the effort may be futile.`,
    applicationZh: `明知自己的建言可能不被採納，仍基於責任感堅持提出，這種盡本分的態度本身就有其價值，不必以結果論成敗。\n<br /><b>建議：今天若你察覺一件明顯不對的事，即使預期意見不會被採納，仍主動透過正式管道表達一次立場。</b>`,
    applicationEn: `Speaking up out of a sense of duty, even knowing your advice may be ignored, has its own worth regardless of whether it succeeds.\n<br /><b>Suggestion: If you notice something clearly wrong today, voice your position once through a proper channel, even if you expect it may not be heeded.</b>`
  },
  357: {
    textEn: `Zilu asked about serving one's ruler. The Master said, "Do not deceive him, but do feel free to oppose him to his face."`,
    plainZh: `子路請教如何事奉君主。孔子答：不可欺瞞蒙蔽君主，但可以當面直言犯顏勸諫。誠實與敢言，才是真正的忠誠，而非一味順從討好。`,
    plainEn: `Xian Wen 14.23. Zilu asks how to serve a ruler. Confucius answers: do not deceive him, but do dare to oppose him openly to his face. Honesty and the courage to speak candidly, not mere flattering compliance, constitute true loyalty.`,
    applicationZh: `對上司或長輩真正的忠誠，是誠實以告、必要時當面提出反對意見，而不是為了討好而隱瞞真相。\n<br /><b>建議：今天面對一位上司或長輩時，若心中有不同意見，練習誠實而有禮貌地當面說出來。</b>`,
    applicationEn: `True loyalty to a superior or elder means honest disclosure and, when necessary, open disagreement, not concealing the truth to please them.\n<br /><b>Suggestion: If you disagree with a superior or elder today, practice voicing it honestly and politely to their face.</b>`
  },
  358: {
    textEn: `The Master said, "The noble person advances upward; the petty person sinks downward."`,
    plainZh: `孔子指出君子與小人追求方向的根本不同：君子日益向上，追求德行、道義的提升；小人則日漸向下，沉溺於私利、物欲的滿足。方向決定了一個人最終會成為怎樣的人。`,
    plainEn: `Xian Wen 14.24. Confucius points to a fundamental difference in direction: the noble person steadily rises, pursuing higher virtue and righteousness, while the petty person steadily sinks, absorbed in private gain and material desire. Direction ultimately determines what kind of person one becomes.`,
    applicationZh: `每天的選擇看似微小，但長期下來會決定一個人是持續向上提升，還是逐漸向下沉淪。\n<br /><b>建議：今天檢視自己今天多數時間的心思花在追求成長與道義，還是花在計較私利與享樂，並據此微調明天的比重。</b>`,
    applicationEn: `Small daily choices seem minor, but over time they determine whether a person keeps rising or gradually sinks.\n<br /><b>Suggestion: Check whether most of your attention today went toward growth and principle or toward self-interest and pleasure, and adjust the balance a little for tomorrow.</b>`
  },
  359: {
    textEn: `The Master said, "In ancient times, people studied for their own self-improvement; nowadays, people study to impress others."`,
    plainZh: `孔子感慨古今為學動機的差異：古代的求學者是為了充實、提升自己；現今的求學者卻常常是為了在他人面前表現、獲取讚賞或名聲。學習的初衷從內在修養轉向外在炫耀。`,
    plainEn: `Xian Wen 14.25. Confucius laments a shift in the motive for learning: ancient scholars studied to cultivate and improve themselves, while those of his own time often study merely to impress others and win praise. The purpose of learning has shifted from inner cultivation to outer display.`,
    applicationZh: `學一項新知識或技能時，若目的只是為了讓別人稱讚，很容易半途而廢；若是為了充實自己，才能走得長久。\n<br /><b>建議：今天檢視自己正在學習的一件事，問自己動機是為了自己成長，還是為了他人的眼光，並適度調整心態。</b>`,
    applicationEn: `If the goal of learning something new is only to impress others, it is easy to give up halfway; learning for one's own growth is what sustains the effort.\n<br /><b>Suggestion: Check the thing you are currently learning and ask whether your motive is genuine growth or others' approval, then adjust your mindset accordingly.</b>`
  },
  360: {
    textEn: `Qu Boyu sent a messenger to Confucius. Confucius sat with him and asked, "What has your master been doing?" The messenger replied, "My master wishes to reduce his faults, but has not yet succeeded." After the messenger left, the Master said, "What a messenger! What a messenger!"`,
    plainZh: `蘧伯玉派使者拜訪孔子，孔子請他坐下詢問近況。使者回答：我家主人一直想減少自己的過失，但還沒能做到。使者離開後，孔子讚嘆：真是好使者啊！好使者啊！這句回答既謙遜得體，又反映出蘧伯玉本人時時自省的修養，孔子因此連聲稱讚。`,
    plainEn: `Xian Wen 14.26. Qu Boyu sends a messenger to visit Confucius, who invites him to sit and asks after his master. The messenger answers that his master constantly wishes to reduce his own faults but has not yet succeeded. After he leaves, Confucius exclaims twice in admiration, "What a messenger!" — the humble, fitting answer reflects Qu Boyu's own habit of constant self-examination, and impresses Confucius as much as the master himself.`,
    applicationZh: `一個得體謙遜的回答，往往能反映出背後那個人的真實修養；也提醒我們，永遠謙稱自己還在進步，比自誇已經完美更值得敬重。\n<br /><b>建議：今天若有人問起你的近況或成就，練習用謙遜但誠實的方式回答，並具體提到一項你還在努力改進的地方。</b>`,
    applicationEn: `A fitting, humble answer often reveals the real character of the person behind it; always describing yourself as still improving, rather than boasting of perfection, earns more respect.\n<br /><b>Suggestion: If someone asks about your progress or achievements today, answer humbly and honestly, mentioning one specific thing you are still working to improve.</b>`
  },
  361: {
    textEn: `The Master said, "Do not plan the affairs of an office that is not your own."`,
    plainZh: `孔子重申此前也提過的原則：不在那個職位上，就不應該去干預、謀劃那個職位該管的政務。這是提醒人各安其位、各司其職，避免越權干預。`,
    plainEn: `Xian Wen 14.27. Confucius reiterates a principle stated elsewhere: one should not meddle in the affairs of a position one does not hold. It is a reminder to stay within one's proper role and avoid overstepping into others' duties.`,
    applicationZh: `熱心參與他人職責範圍內的事，若拿捏不當，容易變成越權干預，反而製造衝突。\n<br /><b>建議：今天檢視一件你正想插手但不屬於自己職權範圍的事，改為先詢問對方是否需要協助，而非直接介入。</b>`,
    applicationEn: `Enthusiastic involvement in matters outside one's own duty, if not carefully judged, can turn into overreach and create conflict.\n<br /><b>Suggestion: For something outside your role that you are tempted to jump into today, ask first whether help is wanted, rather than stepping in directly.</b>`
  },
  362: {
    textEn: `Zengzi said, "The noble person's thoughts never stray beyond his own position."`,
    plainZh: `曾子闡發前一句的道理：君子考慮事情，範圍不會超出自己職責所在的本分。這並非畫地自限，而是強調做好本分才是根本，先站穩自己的崗位，再談其他。`,
    plainEn: `Xian Wen 14.28. Zengzi expands on the previous saying: the noble person's deliberations stay within the bounds of his own proper duty. This is not self-limitation but an emphasis that fulfilling one's own responsibility is the foundation — stand firm in your own post before reaching beyond it.`,
    applicationZh: `把自己份內的事做好做深，比到處操心不屬於自己的事更踏實，也更能真正累積實力。\n<br /><b>建議：今天把一件你分內卻拖延未做好的事，優先完成，而不是把心力分散到與自己無關的事務上。</b>`,
    applicationEn: `Doing your own responsibilities thoroughly is more solid and builds more real capability than scattering concern over matters that are not yours.\n<br /><b>Suggestion: Today, prioritize finishing one task within your own responsibility that you have been putting off, rather than spreading your attention onto matters that are not yours.</b>`
  },
  363: {
    textEn: `The Master said, "The noble person is ashamed when his words exceed his actions."`,
    plainZh: `孔子指出君子的自我要求：說出的話若超過自己實際做到的程度，會感到羞愧。言過其實，正是君子引以為恥的事，這督促人言行必須相符。`,
    plainEn: `Xian Wen 14.29. Confucius describes a standard the noble person holds for themselves: feeling ashamed when their words outrun their actual deeds. Overstating oneself is precisely what a junzi finds shameful, which keeps word and deed in line.`,
    applicationZh: `說得比做得多，久了會失去信任；與其誇大承諾，不如說得保守一點，然後做得比說的更好。\n<br /><b>建議：今天在描述自己已完成或即將完成的事時，刻意說得比實際情況保守一些。</b>`,
    applicationEn: `Talking more than you deliver erodes trust over time; better to understate a promise and then exceed it in action.\n<br /><b>Suggestion: When describing something you have done or will do today, deliberately state it a bit more conservatively than the reality.</b>`
  },
  364: {
    textEn: `The Master said, "There are three things in the Way of the noble person that I have not been able to achieve: the humane person does not worry, the wise person is not confused, and the courageous person does not fear." Zigong said, "Master, you are describing yourself!"`,
    plainZh: `孔子謙稱自己在君子之道的三個層面上都還做不到：有仁德的人不憂愁，有智慧的人不迷惑，有勇氣的人不畏懼。子貢聽了立刻回應：老師，這正是您自己的寫照啊！子貢的話既是讚美，也點出孔子謙虛自省的一貫作風。`,
    plainEn: `Xian Wen 14.30. Confucius humbly says he has not yet achieved three aspects of the Way of the noble person: the humane do not worry, the wise are not confused, the courageous are not afraid. Zigong immediately responds that this is exactly a description of the Master himself — both a compliment and a note on Confucius's habitual humility in self-assessment.`,
    applicationZh: `越是接近某種美德的人，往往越謙虛地說自己還做不到；謙遜本身正是德行深厚的表現，不必急著自我標榜。\n<br /><b>建議：今天當別人稱讚你某項優點時，練習謙虛地指出自己在這方面仍有可以進步的地方，而不是照單全收。</b>`,
    applicationEn: `The closer someone actually is to a virtue, the more humbly they tend to say they have not yet achieved it; humility itself is a mark of depth, no need to rush to claim credit.\n<br /><b>Suggestion: When someone praises a strength of yours today, practice humbly pointing to where you still have room to grow, rather than simply accepting the compliment.</b>`
  },
  365: {
    textEn: `Zigong was comparing and judging other people. The Master said, "Si, are you already so accomplished yourself? As for me, I have no time for that!"`,
    plainZh: `子貢喜歡評論、比較他人的高下。孔子提醒他：賜啊，你自己已經很賢能了嗎？（暗示子貢自身修養未必已到可以隨意評斷他人的地步）至於我，光是反省自己都來不及了，哪有空去評論別人。`,
    plainEn: `Xian Wen 14.31. Zigong is fond of comparing and ranking other people. Confucius gently rebukes him: "Si, are you already so accomplished yourself?" — implying Zigong's own cultivation may not yet warrant judging others so freely — and adds that he himself is too busy examining his own faults to spare time criticizing others.`,
    applicationZh: `花太多時間評論、比較別人，不如把這些心力用來反省自己；先把自己修好，再談論他人也不遲。\n<br /><b>建議：今天當你忍不住想評論某人的高下時，先停下來反問自己在同一件事上做得是否更好。</b>`,
    applicationEn: `Time spent ranking and comparing others is better spent examining oneself; there is no rush to judge others once you have worked on yourself first.\n<br /><b>Suggestion: When you catch yourself about to rank or judge someone today, pause and ask whether you yourself are actually doing better in that same regard.</b>`
  },
  366: {
    textEn: `The Master said, "Do not worry that others do not recognize you; worry instead about your own lack of ability."`,
    plainZh: `孔子再次重申此一貫主題：不必憂慮別人不了解、不賞識自己，該憂慮的是自己是否真的具備足夠的能力。把心力放在提升自己，而非爭取被看見。`,
    plainEn: `Xian Wen 14.32. Confucius restates a recurring theme: do not worry about being unrecognized by others; worry instead about whether you truly possess sufficient ability. Focus your energy on improving yourself rather than seeking recognition.`,
    applicationZh: `抱怨沒被賞識之前，先誠實檢視自己的能力是否真的足夠，把時間花在充實自己遠比爭取曝光更實在。\n<br /><b>建議：今天與其花時間爭取被看見或被肯定，不如花同樣的時間提升一項具體的能力。</b>`,
    applicationEn: `Before complaining about being overlooked, honestly check whether your ability is truly sufficient; investing time in real improvement is more solid than chasing visibility.\n<br /><b>Suggestion: Instead of spending time today seeking to be noticed or praised, spend that same time strengthening one concrete skill.</b>`
  },
  367: {
    textEn: `The Master said, "Not to anticipate deception in others, nor to presume their bad faith, and yet still be the first to perceive it when it occurs — is this not being wise?"`,
    plainZh: `孔子論待人之道：不預先猜忌他人會欺詐自己，也不無端揣測他人不誠實，但若真有詐偽發生時，卻能及早察覺——這樣的人才稱得上真正的賢者。孔子主張的是既存善意信任，又保有清醒的判斷力。`,
    plainEn: `Xian Wen 14.33. Confucius outlines an ideal way of dealing with others: neither presuming that others will deceive you, nor baselessly suspecting their sincerity, yet still being the first to detect it if deception does occur — such a person is truly wise. Confucius advocates combining goodwill and trust with clear-eyed discernment.`,
    applicationZh: `對人不必先入為主地猜忌，但也不能天真到毫無警覺；保持信任的同時，仍要留一份清醒的觀察力。\n<br /><b>建議：今天在與人相處時練習「先信任、後觀察」，既不預設對方會騙你，也不忽略任何明顯的異狀。</b>`,
    applicationEn: `You need not presume ill will toward others, but you also should not be so naive as to have no awareness at all; hold trust alongside a clear, watchful eye.\n<br /><b>Suggestion: In your interactions today, practice "trust first, observe carefully" — neither assuming deceit nor ignoring any obvious warning signs.</b>`
  },
  368: {
    textEn: `Weisheng Mu said to Confucius, "Qiu, why do you keep rushing about so restlessly? Is it not simply to show off your cleverness?" Confucius said, "I would not dare to be glib — I simply despise stubborn ignorance."`,
    plainZh: `隱士微生畝質疑孔子四處奔波遊說，是否只是想賣弄口才、討好世人。孔子回答：我不敢賣弄口才，只是痛恨世人固執不化、不肯接受正道，所以才不辭辛勞四處奔走，希望能有所改變。`,
    plainEn: `Xian Wen 14.34. The recluse Weisheng Mu questions why Confucius keeps traveling restlessly from state to state, suggesting it is mere cleverness for show. Confucius replies that he would never dare to be glib — he simply cannot bear the world's stubborn refusal to accept the right way, and that is why he keeps traveling, hoping to bring about change.`,
    applicationZh: `別人質疑你的堅持是在作秀時，先問問自己：這份堅持的動機，是出於對某件事的深切在意，還是為了討好他人？\n<br /><b>建議：今天若有人質疑你某項堅持的動機，誠實地向自己確認這份堅持背後真正的初衷。</b>`,
    applicationEn: `When others question whether your persistence is mere show, ask yourself honestly whether it comes from deep concern for something, or from wanting to impress others.\n<br /><b>Suggestion: If someone questions your motive for a persistent effort today, honestly confirm to yourself what truly lies behind it.</b>`
  },
  369: {
    textEn: `The Master said, "A fine steed is praised not for its brute strength, but for its virtuous qualities — its training and temperament."`,
    plainZh: `孔子以千里馬為喻：稱讚一匹良馬，不是因為牠力氣大，而是因為牠具備良好的訓練與品性——如溫馴、耐力、聽從指揮等。孔子藉此比喻人才的評價也應著重品德修養，而非單純的能力或才幹。`,
    plainEn: `Xian Wen 14.35. Confucius uses the image of a fine horse: it is praised not for raw physical strength, but for its trained qualities — temperament, endurance, and responsiveness. The comparison implies that people, too, should be valued for their character and cultivation, not merely for raw talent or ability.`,
    applicationZh: `挑選夥伴或評價人才時，能力固然重要，但品性、態度與可靠度往往才是真正決定長期合作價值的關鍵。\n<br /><b>建議：今天在評估一位合作對象或候選人時，除了看能力，也具體列出一項能反映其品性的觀察。</b>`,
    applicationEn: `When choosing collaborators or assessing talent, ability matters, but character, attitude, and reliability often determine the real long-term value of working together.\n<br /><b>Suggestion: When assessing a potential collaborator or candidate today, alongside their ability, note down one specific observation about their character.</b>`
  },
  370: {
    textEn: `Someone said, "What do you think of repaying resentment with kindness?" The Master said, "Then how would you repay kindness? Repay resentment with uprightness, and repay kindness with kindness."`,
    plainZh: `有人問孔子：以德報怨如何？孔子反問：那要用什麼來報答別人對自己的恩德呢？孔子主張：對怨恨自己的人，應以公正、正直的態度對待，不偏袒也不刻意報復；對施恩於自己的人，才應以德回報。過度以德報怨，反而混淆了是非與人情的分寸。`,
    plainEn: `Xian Wen 14.36. Someone asks Confucius whether it is good to repay grievance with kindness. He counters by asking what would then be left to repay actual kindness with. Confucius holds that grievance should be met with fairness and uprightness — neither favoritism nor deliberate revenge — while genuine kindness should be repaid with kindness. Repaying every wrong with excessive kindness blurs the proper distinction between right and wrong.`,
    applicationZh: `對傷害過自己的人一味用恩惠回報，看似寬容，其實模糊了是非；公正對待冒犯者、用心回報恩人，才是恰當的分寸。\n<br /><b>建議：今天分別想一位曾經傷害你和曾經幫助你的人，練習用「公正」對待前者、用「感恩」對待後者，區分清楚。</b>`,
    applicationEn: `Repaying everyone who has wronged you with pure kindness may look generous, but it blurs right from wrong; fairness toward offenders and genuine gratitude toward benefactors is the proper balance.\n<br /><b>Suggestion: Think of one person who wronged you and one who helped you, and today practice treating the first with fairness and the second with genuine gratitude, keeping the two distinct.</b>`
  },
  371: {
    textEn: `The Master said, "No one understands me!" Zigong said, "Why do you say no one understands you?" The Master said, "I do not blame Heaven, nor do I blame others; I study what is near at hand and reach up to what is lofty. Perhaps it is only Heaven that understands me!"`,
    plainZh: `孔子感嘆世上無人真正理解自己。子貢不解，問為何如此。孔子解釋：我不怨天，也不責怪他人，只是踏實地從基本的、切身的事物學起，逐漸領悟通達更高深的道理。能真正理解我的，恐怕只有上天了吧！這段話流露孔子晚年孤獨卻堅定的心境。`,
    plainEn: `Xian Wen 14.37. Confucius sighs that no one truly understands him. Zigong, puzzled, asks why. Confucius explains that he blames neither Heaven nor other people; he simply learns from the ordinary and near at hand, gradually rising to grasp the profound. Perhaps only Heaven truly understands him. The passage reveals Confucius's solitary yet steadfast state of mind in his later years.`,
    applicationZh: `有時候堅持自己認定的道路，即使不被身邊的人完全理解，也不必因此心生怨懟，只要方向踏實、問心無愧即可。\n<br /><b>建議：今天若感到自己的努力不被人理解，練習不怨天尤人，而是靜下心來重新確認自己走的路是否踏實。</b>`,
    applicationEn: `Sometimes holding to a path you believe in, even without full understanding from those around you, need not bring resentment — as long as the direction is grounded and your conscience is clear.\n<br /><b>Suggestion: If you feel misunderstood in your effort today, practice not blaming others or circumstance, and instead quietly reconfirm whether your path is a solid one.</b>`
  },
  372: {
    textEn: `Gongbo Liao slandered Zilu to the Ji family. Zifu Jingbo reported this, saying, "My master has indeed become suspicious because of Gongbo Liao, but my influence can still have his body displayed in the marketplace." The Master said, "If the Way is to prevail, it is due to fate; if the Way is to be discarded, it is also due to fate. What can Gongbo Liao do against fate?"`,
    plainZh: `公伯寮在季孫氏面前說子路的壞話。子服景伯得知後告訴孔子，並表示自己有能力讓公伯寮伏誅示眾。孔子卻回答：道能否推行，是天命決定的；道若將被廢棄，也是天命使然。公伯寮這樣的小人，又能對天命起什麼作用呢？孔子表現出對天命的坦然，不因小人的讒言而動搖或急於報復。`,
    plainEn: `Xian Wen 14.38. Gongbo Liao slanders Zilu before the Ji family. Zifu Jingbo reports this to Confucius, offering that he has the power to have Gongbo Liao executed publicly. Confucius replies that whether the Way prevails or is discarded is a matter of fate — what could a petty schemer like Gongbo Liao possibly do against fate? Confucius shows calm acceptance of fate, refusing to be shaken or driven to vengeance by a slanderer.`,
    applicationZh: `面對他人的中傷或阻撓，與其急著報復，不如相信只要方向正確，時間終會證明一切；把力氣花在報復上，不如花在堅持正道上。\n<br /><b>建議：今天若遇到有人試圖中傷或阻撓你，練習先放下報復的念頭，把精力放回自己該做的正事上。</b>`,
    applicationEn: `Facing slander or obstruction, trust that time will prove the truth of a right course rather than rushing to retaliate; energy spent on revenge is better spent staying the right course.\n<br /><b>Suggestion: If someone tries to slander or obstruct you today, practice letting go of the urge for revenge and redirect your energy to the work that actually matters.</b>`
  },
  373: {
    textEn: `The Master said, "The worthiest withdraw from the world; the next withdraw from a particular place; the next withdraw when faced with poor conduct; the next withdraw when faced with poor words."`,
    plainZh: `孔子分析賢者面對亂世時，退隱程度由高至低的四種選擇：最高一等的賢者，遇無道之世便徹底遠離塵世；次一等的，選擇離開某個無道的地方另尋出路；再次一等的，看到對方臉色不善便迴避；最次的，聽到不好聽的話便選擇離開。孔子藉此說明智者懂得審時度勢、適時抽身的分寸。`,
    plainEn: `Xian Wen 14.39. Confucius outlines four descending levels of withdrawal for the wise facing a disordered age: the highest withdraws from the world entirely; the next withdraws from a particular corrupt place; the next withdraws upon seeing an unfriendly manner; the least withdraws merely upon hearing unpleasant words. He illustrates the wise person's judgment in knowing when and how far to step back.`,
    applicationZh: `面對不利或不對的環境，懂得判斷情勢輕重、選擇合宜的退場時機與方式，是一種重要的智慧，不必所有情況都硬撐到底。\n<br /><b>建議：今天檢視一個讓你感到不對勁的處境，判斷目前該完全抽身、換個環境，還是先觀察對方態度再決定。</b>`,
    applicationEn: `In an unfavorable or wrong environment, knowing how to judge the situation and choose a fitting way and moment to step back is real wisdom — not every situation calls for holding your ground no matter what.\n<br /><b>Suggestion: Look at one situation today that feels wrong to you, and judge whether it calls for a full withdrawal, a change of setting, or simply watching the other side's attitude before deciding.</b>`
  },
  374: {
    textEn: `The Master said, "Those who have risen and departed in this way number seven."`,
    plainZh: `孔子總結前一句所述隱退之人，指出已知有七位這樣選擇離世隱居的賢者。這句話簡短地為前文的討論作結，肯定歷史上確實有這樣一群人以退隱來堅守自己的原則。`,
    plainEn: `Xian Wen 14.40. Confucius closes the previous statement by noting that seven such worthies are known to have withdrawn from the world in this way. The brief line affirms that history did indeed produce such a group of people who chose withdrawal to preserve their principles.`,
    applicationZh: `承認某種選擇（如退讓、離開）確實有先例可循，能讓人在做出類似決定時，感到不孤單、更有底氣。\n<br /><b>建議：今天若你正猶豫是否該從某個處境中退出，找一個做過類似選擇並活得心安理得的例子，作為參考。</b>`,
    applicationEn: `Recognizing that a certain choice — such as stepping back or leaving — has real precedent can make a similar decision feel less isolating and more grounded.\n<br /><b>Suggestion: If you are hesitating about stepping back from a situation today, find an example of someone who made a similar choice and lived at peace with it, and let that inform you.</b>`
  },
  375: {
    textEn: `Zilu spent the night at the Stone Gate. The gatekeeper asked, "Where have you come from?" Zilu said, "From the house of Confucius." The gatekeeper said, "Is that the one who knows it is hopeless, yet keeps trying anyway?"`,
    plainZh: `子路夜宿石門，看守城門的隱士問他從哪裡來，子路答從孔子那裡來。守門人聽了說：就是那位明知道理想無法實現，卻仍堅持不懈去做的人嗎？這句評語雖帶調侃，卻精準點出孔子知其不可而為之的堅毅精神。`,
    plainEn: `Xian Wen 14.41. Zilu lodges overnight at the Stone Gate, and the gatekeeper, a recluse, asks where he has come from. Zilu answers, from Confucius's house. The gatekeeper remarks, "Is that the one who keeps trying even though he knows it is hopeless?" Though tinged with mockery, the remark captures precisely Confucius's tenacious spirit of persisting despite knowing the odds.`,
    applicationZh: `「明知不可而為之」常被視為固執，但也可能是一種對理想的堅持；外界的調侃或不解，不必然否定這份堅持的價值。\n<br /><b>建議：今天若你正在做一件別人覺得「不可能成功」的事，寫下你堅持下去的真正理由，提醒自己為何值得繼續。</b>`,
    applicationEn: `"Persisting despite knowing it is hopeless" is often seen as stubbornness, but it can also be devotion to an ideal; others' mockery or misunderstanding does not necessarily invalidate that commitment.\n<br /><b>Suggestion: If you are doing something others consider hopeless today, write down your real reason for persisting, as a reminder of why it is worth continuing.</b>`
  },
  376: {
    textEn: `Confucius was playing the stone chimes in Wei. A man carrying a basket passed by his door and said, "How full of feeling is that chime-playing!" Then he added, "How petty it sounds, this stubborn clanging! If no one recognizes your worth, then just stop there and be done with it. As the poem says, 'When the water is deep, wade across in your clothes; when it is shallow, hold up your hem.'" The Master said, "How decisive he is! There is nothing hard about that."`,
    plainZh: `孔子在衛國擊磬抒懷，一位挑著草筐經過的隱士聽出磬聲中蘊含的心事，先讚一句「有心啊，這擊磬的人」，接著又批評：太過執著、固執了！既然沒人賞識自己，就該乾脆放下算了，就像《詩經》說的「水深就和衣涉過，水淺就撩起衣裳」，該進則進、該退則退，何必如此執著？孔子聽聞後說：真果決啊！這樣做倒也沒什麼困難的。孔子語帶保留地回應，暗示自己選擇的道路本就比隨遇而安更艱難。`,
    plainEn: `Xian Wen 14.42. While Confucius plays the stone chimes in Wei, a basket-carrying recluse passing by hears the feeling in the music and remarks, "What feeling in that chime-playing!" then critiques it as stubborn and petty — if no one recognizes your worth, simply let it go, as the ode says: wade across when deep, lift your hem when shallow, adapting as circumstances allow. Confucius responds, "How resolute! That, indeed, is not hard to do" — a reserved reply implying that his own chosen path, of persisting rather than simply adapting to fit the world, is the harder one.`,
    applicationZh: `隨遇而安、見機行事固然容易，但堅持自己認定該走的路、不輕易妥協，往往才是更困難也更值得的選擇。\n<br /><b>建議：今天面對一個可以輕易妥協退讓的處境，問自己：若堅持原本的立場，會不會其實才是更值得的選擇？</b>`,
    applicationEn: `Simply adapting and going with the flow is easy, but holding to the path you believe in without easy compromise is often the harder, more worthwhile choice.\n<br /><b>Suggestion: Facing a situation today where compromise would be easy, ask whether holding your original position might actually be the more worthwhile choice.</b>`
  },
  377: {
    textEn: `Zizhang said, "The Book of Documents says, 'Gaozong observed the mourning hut and did not speak for three years.' What does this mean?" The Master said, "Why speak only of Gaozong? All the ancients did the same. When a ruler died, all the officials would attend to their own duties and take direction from the chief minister for three years."`,
    plainZh: `子張問《尚書》所記商王高宗守喪三年不談政事的典故是什麼意思。孔子回答：不只是高宗如此，古代的君主都是這樣。國君去世後，繼位的新君守喪三年，這期間所有官員各司其職，聽命於冢宰（首席大臣）代為處理國政，不必事事親自發號施令。`,
    plainEn: `Xian Wen 14.43. Zizhang asks about the record that King Gaozong of Shang observed three years of silence in mourning. Confucius explains that this was not unique to Gaozong — all ancient rulers did the same. During the new ruler's three-year mourning, all officials carried out their own duties under the direction of the chief minister, so the ruler need not personally issue every order.`,
    applicationZh: `領導者在重大變故或哀痛時期，適度放手讓有能力的團隊代為處理事務，並非失職，反而是對制度與人才的信任。\n<br /><b>建議：今天若你正處於低潮或需要休整的時期，練習把一項事務暫時交給值得信任的人代管，而不是硬撐著自己處理。</b>`,
    applicationEn: `A leader stepping back during a major transition or period of grief to let a capable team handle affairs is not neglect, but trust in system and people.\n<br /><b>Suggestion: If you are going through a low period or need time to recover today, practice handing one matter over to someone trustworthy instead of forcing yourself to manage it alone.</b>`
  },
  378: {
    textEn: `The Master said, "When those above love ritual propriety, the common people become easy to govern."`,
    plainZh: `孔子指出：在上位者若能重視、實踐禮制，以身作則，百姓自然會受到感召而遵守秩序、易於治理。治國的關鍵在於上位者的表率作用，而非一味用刑罰約束下面的人。`,
    plainEn: `Xian Wen 14.44. Confucius observes that when those in authority genuinely value and practice ritual propriety, leading by example, the people are naturally inspired to follow order and become easy to govern. The key to good governance lies in the example set from above, not merely in imposing rules on those below.`,
    applicationZh: `想要別人遵守某種秩序或規範，領導者自己以身作則的示範，比單靠制定規章更有效。\n<br /><b>建議：今天在你負責的團隊或家庭中，選一項你希望大家遵守的原則，先由自己做到、示範給他人看。</b>`,
    applicationEn: `If you want others to follow a certain order or standard, leading by personal example is more effective than merely imposing rules.\n<br /><b>Suggestion: In a team or family you are responsible for today, pick one principle you want others to follow, and demonstrate it yourself first.</b>`
  },
  379: {
    textEn: `Zilu asked about the noble person. The Master said, "Cultivate yourself with reverence." Zilu asked, "Is that all?" The Master said, "Cultivate yourself so as to give others peace." Zilu asked, "Is that all?" The Master said, "Cultivate yourself so as to give all the people peace. Even Yao and Shun would have found this a challenge!"`,
    plainZh: `子路問怎樣才算君子。孔子先答：修養自己，抱持恭敬之心。子路追問：就這樣而已嗎？孔子再答：修養自己，進而使身邊的人安心。子路再問：就這樣嗎？孔子最後答：修養自己，更要能使天下百姓都得到安頓。這樣的境界，就連堯舜這樣的聖王恐怕都覺得難以完全做到！孔子藉層層遞進，說明修身的範圍可以從己身擴及天下，永無止境。`,
    plainEn: `Xian Wen 14.45. Zilu asks what makes a noble person. Confucius first says: cultivate yourself with reverence. Zilu presses, is that all? Confucius adds: cultivate yourself so as to give those around you peace. Zilu presses again, is that all? Confucius finally says: cultivate yourself so as to give peace to all the people — a standard even sage-kings like Yao and Shun would find difficult to fully meet. Through this escalating dialogue, Confucius shows that self-cultivation can expand from the self outward to the whole world, without ever reaching a final limit.`,
    applicationZh: `修養自己不是終點，而是起點；從安頓自身，到讓身邊的人安心，再到影響更廣大的群體，是一個不斷擴展的歷程。\n<br /><b>建議：今天檢視自己目前修養自己的成果，已經能安頓好自己了嗎？若可以，試著多做一件讓身邊一個人感到安心的事。</b>`,
    applicationEn: `Self-cultivation is not an endpoint but a starting point — from settling oneself, to giving those nearby peace, to influencing an ever-wider circle, is a continually expanding journey.\n<br /><b>Suggestion: Check today whether you have truly settled yourself; if so, try doing one more thing that brings peace of mind to someone close to you.</b>`
  },
  380: {
    textEn: `Yuan Rang sat waiting with his legs sprawled out. The Master said, "As a youth, you were neither humble nor respectful to your elders; as an adult, you accomplished nothing worth mentioning; and now, growing old, you refuse to die — you are nothing but a pest!" And he rapped Yuan Rang's shin with his staff.`,
    plainZh: `孔子的老友原壤，蹲坐姿態不雅地等待孔子。孔子斥責他：年少時不懂謙遜恭敬、對待兄長無禮，長大後又毫無值得稱述的成就，年老了還佔著位置不肯讓路——簡直是害人蟲！說完便用手杖輕敲他的小腿以示責備。這段話語氣直率，展現孔子與老友之間毫不客套的真性情。`,
    plainEn: `Xian Wen 14.46. Confucius's old acquaintance Yuan Rang sits waiting for him in a disrespectful sprawl. Confucius scolds him bluntly: as a youth he showed no humility or respect toward elders, as an adult he achieved nothing worth mentioning, and now in old age he merely lingers, wasting space — a real pest. He then taps Yuan Rang's shin with his cane in rebuke. The blunt tone reveals the unguarded honesty between two old friends.`,
    applicationZh: `對親近的老朋友，有時可以毫不客套地直接指出對方一輩子沒改的壞習慣，這種直率反而是深厚情誼的展現。\n<br /><b>建議：今天若有一位很熟的朋友一直有某個你看不慣的老毛病，練習用直接但不傷感情的方式提醒他一次。</b>`,
    applicationEn: `With a close old friend, sometimes bluntly naming a lifelong bad habit is itself a sign of deep, unguarded friendship.\n<br /><b>Suggestion: If a close friend has a long-standing habit that bothers you, practice pointing it out directly but kindly today.</b>`
  },
  381: {
    textEn: `A boy from the Que neighborhood was serving as a messenger. Someone asked, "Is he a promising, improving young man?" The Master said, "I have observed him sitting in the place reserved for adults, and walking alongside his elders as an equal. He is not someone seeking self-improvement — he is someone seeking to grow up too fast."`,
    plainZh: `闕里地方一名童子在孔子處擔任傳話的差事。有人問孔子：這孩子是否是個力求上進的人？孔子回答：我看見他坐在成年人才能坐的位置上，又與長輩並肩而行，這些舉止並非力求上進的表現，而是急於求成、想跳過該有的歷練，早早擺出大人樣子。`,
    plainEn: `Xian Wen 14.47. A boy from the Que district serves as a message-runner at Confucius's place. Someone asks whether he is a promising, self-improving youth. Confucius answers that he has observed the boy sitting in an adult's seat and walking abreast with his elders — behavior that shows not a desire for real growth, but an eagerness to skip stages and appear grown before his time.`,
    applicationZh: `急於表現出比自己實際程度更高的樣子，跳過該經歷的歷練，看似積極，其實是缺乏耐心的表現。\n<br /><b>建議：今天觀察自己是否在某件事上急於跳過該有的練習或步驟，若有，刻意放慢腳步、補回該做的功課。</b>`,
    applicationEn: `Rushing to appear more advanced than one's actual level, skipping the necessary stages, may look proactive but actually reflects a lack of patience.\n<br /><b>Suggestion: Notice today whether you are rushing past a necessary step or practice in something, and if so, deliberately slow down and go back to do that groundwork.</b>`
  }
};

const weilinggong = {
  382: {
    textEn: `Duke Ling of Wei asked Confucius about military formations. Confucius replied, "I have learned something of matters of sacrificial vessels and rites, but I have never studied military affairs." He departed the very next day. Later, in Chen, his provisions ran out; his followers fell ill and could not even rise. Zilu came to him, visibly resentful, and said, "Does even the noble person face such desperate hardship?" The Master said, "The noble person remains steadfast in hardship; it is the petty person who, in hardship, gives way to excess."`,
    plainZh: `衛靈公向孔子詢問行軍佈陣之事。孔子回答：祭祀禮儀方面的事我曾學過，但軍旅作戰的事我沒有學過。隔天孔子便離開衛國。後來在陳國斷糧，隨行弟子餓病得爬不起來。子路面帶怨氣質問：君子也會落到這樣窮困潦倒的地步嗎？孔子答：君子在困境中依然能堅守原則，小人一旦窮困就會胡作非為、失去分寸。`,
    plainEn: `Wei Ling Gong 15.1. Duke Ling of Wei asks Confucius about military formations. Confucius answers that he has studied matters of ritual, but never military affairs, and leaves the very next day. Later, stranded without food in Chen, his followers grow too weak to rise. Zilu, resentful, asks whether even the noble person can fall into such desperate straits. Confucius answers that the noble person holds steady even in hardship, while the petty person, once in hardship, loses all restraint.`,
    applicationZh: `遭遇困境時，真正的差別不在於是否受苦，而在於受苦時是否還能守住原則、不因窮困而失去分寸。\n<br /><b>建議：今天若你正處於資源匱乏或壓力很大的處境，練習提醒自己「困境不是放棄原則的藉口」，堅守一項你重視的原則。</b>`,
    applicationEn: `When hardship strikes, the real difference is not whether one suffers, but whether one still holds to principle rather than losing all restraint.\n<br /><b>Suggestion: If you are in a strained or resource-tight situation today, remind yourself that hardship is no excuse to abandon principle, and hold firm to one value you care about.</b>`
  },
  383: {
    textEn: `The Master said, "Si, do you think of me as someone who has learned many things and simply remembers them all?" He replied, "Yes — is that not so?" The Master said, "No. I have one single thread running through it all."`,
    plainZh: `孔子問子貢：賜啊，你是不是以為我只是博學強記、記住很多知識的人？子貢回答：是啊，難道不是這樣嗎？孔子說：不是的，我是用一個核心的道理貫穿一切所學。孔子強調學問的關鍵不在於記憶量的多寡，而在於能否找到一以貫之的根本原則。`,
    plainEn: `Wei Ling Gong 15.2. Confucius asks Zigong whether he thinks of him merely as someone who has memorized a great deal of learning. Zigong answers yes, is that not so? Confucius corrects him: no, there is a single unifying thread running through everything he has learned. He stresses that the essence of learning lies not in the quantity of knowledge accumulated, but in finding the core principle that ties it all together.`,
    applicationZh: `學習大量零散的知識固然重要，但更關鍵的是能否找出貫穿其中的核心原則，讓知識彼此連結成一個整體。\n<br /><b>建議：今天回顧自己近期學到的幾件事，練習找出其中一個共通的核心原則，把它們串連起來。</b>`,
    applicationEn: `Accumulating scattered knowledge matters, but the deeper skill is finding the core principle that ties it all together into a coherent whole.\n<br /><b>Suggestion: Review a few things you have recently learned and practice identifying one common thread that connects them.</b>`
  },
  384: {
    textEn: `The Master said, "You, few indeed are those who truly understand virtue!"`,
    plainZh: `孔子對子路感嘆：由啊，能夠真正理解德行真諦的人實在太少了！這句話流露孔子對世人普遍重利輕德、難以真正領會道德價值的無奈。`,
    plainEn: `Wei Ling Gong 15.3. Confucius sighs to Zilu, "You, how rare it is to find someone who truly understands virtue!" The line reflects Confucius's frustration that most people chase profit over virtue and rarely grasp the true value of moral cultivation.`,
    applicationZh: `真正理解並看重德行的人其實不多，這也提醒我們：若身邊少有人談論或重視品德，不代表這件事不重要，反而更值得自己堅持。\n<br /><b>建議：今天即使身邊少有人談論品德或原則，仍主動花點時間思考一項自己重視的德行，並在一件小事上實踐它。</b>`,
    applicationEn: `Truly understanding and valuing virtue is genuinely rare, which is a reminder that even if few around you discuss character, that does not make it less worth holding onto.\n<br /><b>Suggestion: Even if few around you talk about virtue today, take a moment to reflect on one value you hold dear and practice it in one small act.</b>`
  },
  385: {
    textEn: `The Master said, "Was it not Shun who governed by non-action? What did he actually do? He simply made himself reverent and sat facing south with dignity."`,
    plainZh: `孔子讚嘆舜的治國境界：舜能以無為而治，並非什麼都不做，而是因為他自身修養已臻完善、任用得當的賢臣各司其職，自己只需端正莊重地坐在王位上，天下便自然安定。這是德治的最高典範。`,
    plainEn: `Wei Ling Gong 15.4. Confucius admires Shun's mode of governance: to "govern by non-action" does not mean doing nothing, but rather that Shun's own character was so fully cultivated, and his capable ministers so well placed, that he needed only to sit with dignity and reverence on the throne for the realm to be naturally at peace. This represents the highest model of rule by virtue.`,
    applicationZh: `真正高明的領導，不是事必躬親、事事插手，而是自身修養到位、用人得當，讓體制自然運轉。\n<br /><b>建議：今天檢視自己是否有事必躬親、不放心交辦的習慣，挑一件事練習放手交給值得信任的人處理。</b>`,
    applicationEn: `Truly skillful leadership is not about micromanaging every detail, but about having sound character and the right people in place so the system runs naturally.\n<br /><b>Suggestion: Check whether you tend to handle everything yourself out of distrust, and today practice delegating one task to someone you trust.</b>`
  },
  386: {
    textEn: `Zizhang asked about getting one's conduct accepted everywhere. The Master said, "If your words are loyal and trustworthy and your conduct is sincere and respectful, you will be accepted even among barbarian tribes. If your words lack loyalty and trust, and your conduct lacks sincerity and respect, will you even be accepted in your own neighborhood? When standing, see these words as if arrayed before you; when riding in a carriage, see them as if leaning on the crossbar. Only then will your conduct be accepted everywhere." Zizhang wrote this down on his sash.`,
    plainZh: `子張請教如何讓自己的言行處處通行無阻。孔子答：說話忠實守信、行事篤厚恭敬，即使到了未開化的蠻荒之地也能行得通；反之，說話不忠信、行事不篤敬，即使在自己家鄉恐怕都行不通。要站著時彷彿看見這幾個字在眼前，坐車時彷彿看見它們靠在車前的橫木上，時時刻刻銘記於心，才能真正做到。子張聽後把這些話寫在自己的衣帶上，作為隨身的座右銘。`,
    plainEn: `Wei Ling Gong 15.5. Zizhang asks how to make his conduct acceptable everywhere. Confucius answers that with loyal, trustworthy words and sincere, respectful conduct, one will be accepted even among distant, unrefined peoples; without them, one may not even be accepted at home. He adds that one should keep these principles vividly in mind at all times — as if seeing them standing before you, or leaning against the crossbar of your carriage. Zizhang is so struck that he writes the words on his sash to keep as a constant reminder.`,
    applicationZh: `讓自己處處受人信任的關鍵，不是身處何地，而是言行是否始終忠信篤敬；把重要的原則寫下來、隨身提醒，有助於真正落實。\n<br /><b>建議：今天把一句你最想時時提醒自己的原則寫下來，放在你經常會看到的地方。</b>`,
    applicationEn: `What makes a person trusted everywhere is not location, but consistently loyal, trustworthy, sincere conduct; writing down an important principle to keep visible helps it actually take root.\n<br /><b>Suggestion: Today, write down one principle you most want to keep reminding yourself of, and place it somewhere you will see often.</b>`
  },
  387: {
    textEn: `The Master said, "How upright was Shi Yu! When the state had the Way, he was straight as an arrow; when the state lacked the Way, he was straight as an arrow. How much the noble person was Qu Boyu! When the state had the Way, he served in office; when the state lacked the Way, he could roll up his talents and keep them hidden away."`,
    plainZh: `孔子讚美衛國兩位賢大夫：史魚為人正直，不論國家有道無道，都始終如箭一般剛直不阿；蘧伯玉則更顯君子的通達智慧，國家有道時便出仕貢獻，國家無道時便收斂鋒芒、韜光養晦，不強出頭。兩種處世之道各有可貴之處。`,
    plainEn: `Wei Ling Gong 15.6. Confucius praises two worthy officials of Wei: Shi Yu, whose integrity stayed arrow-straight whether the state was well or poorly governed; and Qu Boyu, whose wisdom as a noble person let him serve openly when the state had the Way, and withdraw his talents discreetly when it did not. Both approaches to navigating a troubled era have their own value.`,
    applicationZh: `面對環境的好壞，有人選擇始終如一地堅持原則，有人選擇審時度勢、收放自如；兩種智慧都值得學習，關鍵是了解自己適合哪一種。\n<br /><b>建議：今天想一個你正面對的處境，判斷此刻適合像史魚一樣始終如一，還是像蘧伯玉一樣暫時收斂鋒芒。</b>`,
    applicationEn: `Facing good or bad circumstances, some hold unwaveringly to principle while others know when to advance and when to withdraw; both are forms of wisdom, and the key is knowing which fits your situation.\n<br /><b>Suggestion: Think of a situation you are currently facing and judge whether it calls for staying arrow-straight like Shi Yu, or discreetly holding back like Qu Boyu.</b>`
  },
  388: {
    textEn: `The Master said, "If a person is worth speaking to and you fail to speak with them, you lose that person; if a person is not worth speaking to and you speak with them anyway, you waste your words. The wise person loses neither the person nor the words."`,
    plainZh: `孔子談論說話應對的智慧：遇到值得深談的人卻不與之交談，等於錯失了這個人；遇到不值得深談的人卻硬要與之多說，就是浪費了言語。真正有智慧的人，既不會錯過該深交的人，也不會對牛彈琴、浪費唇舌。`,
    plainEn: `Wei Ling Gong 15.7. Confucius discusses the wisdom of knowing when to speak: failing to talk with someone worth engaging means losing that person; speaking at length with someone not worth it wastes your words. A truly wise person neither misses a person worth knowing nor wastes effort on one who is not.`,
    applicationZh: `判斷一個場合或一個人是否值得深談，是一種需要練習的判斷力；該說時不說會錯失機會，不該說時硬說則是浪費心力。\n<br /><b>建議：今天在一次對話中先判斷對方是否真心願意交流，再決定要不要投入更多時間深談。</b>`,
    applicationEn: `Judging whether a situation or person merits deeper conversation is a skill worth practicing; staying silent when you should speak misses an opportunity, while forcing a conversation that won't land wastes effort.\n<br /><b>Suggestion: In one conversation today, first gauge whether the other person is genuinely open to exchange before deciding how much time to invest in going deeper.</b>`
  },
  389: {
    textEn: `The Master said, "The person of purpose and the person of ren never seek to preserve their life at the expense of ren; they will instead give up their life to fulfill ren."`,
    plainZh: `孔子闡述志士仁人的最高操守：真正有志向、有仁德的人，絕不會為了苟且偷生而違背仁德，反而會在必要時犧牲性命來成全仁德。這句話後世常被視為儒家「殺身成仁」精神的核心表述。`,
    plainEn: `Wei Ling Gong 15.8. Confucius articulates the highest standard of the person of purpose and ren: such a person will never compromise ren merely to preserve their own life, and will instead sacrifice their life, if necessary, to fulfill it. This line later became the classic articulation of the Confucian spirit of "sacrificing oneself to complete ren."`,
    applicationZh: `雖然多數人不會遇到需要犧牲生命的極端處境，但這句話提醒我們：不該為了自保或苟安，而在關鍵原則上妥協退讓。\n<br /><b>建議：今天想一項你曾經為了自保而在小地方妥協的原則，思考下次遇到類似情況時能否更堅定一點。</b>`,
    applicationEn: `While most people will never face a literal choice between life and death, this line reminds us not to compromise on core principle merely for self-preservation or comfort.\n<br /><b>Suggestion: Think of one principle you once compromised on a small scale for self-protection, and consider standing a bit firmer if a similar situation arises again.</b>`
  },
  390: {
    textEn: `Zigong asked about practicing ren. The Master said, "A craftsman who wishes to do his work well must first sharpen his tools. Likewise, when living in a state, serve the worthiest among its ministers and befriend the most humane among its officers."`,
    plainZh: `子貢請教如何實踐仁德。孔子以工匠磨利工具作比喻：工匠要把事情做好，必須先把工具磨利；同樣地，要在一個國家實踐仁德，就要先找到並事奉當地賢能的大夫、結交當地有仁德的士人，透過與良師益友為伍，逐步涵養自己的德行。`,
    plainEn: `Wei Ling Gong 15.9. Zigong asks how to practice ren. Confucius answers with the image of a craftsman: to do good work, one must first sharpen one's tools. In the same way, to practice ren in a given state, one should serve its worthiest ministers and befriend its most humane officers — cultivating one's own virtue through association with good mentors and friends.`,
    applicationZh: `要在一件事情上做得好，先準備好對的工具與環境；要在德行上有所成長，先找到值得學習與相處的良師益友。\n<br /><b>建議：今天檢視自己正在努力的一件事，問自己是否已經找到對的「工具」或「夥伴」，若沒有，主動去尋找一位。</b>`,
    applicationEn: `To do anything well, first prepare the right tools and environment; to grow in character, first find mentors and friends worth learning from and being around.\n<br /><b>Suggestion: Check whether you have the right "tools" or the right people around you for something you are working on today, and if not, actively seek one out.</b>`
  },
  391: {
    textEn: `Yan Yuan asked about governing a state. The Master said, "Follow the calendar of Xia, ride in the state carriage of Yin, wear the ceremonial cap of Zhou, and for music, use the Shao dance. Banish the tunes of Zheng, and keep flattering people at a distance. The tunes of Zheng are excessive, and flattering people are dangerous."`,
    plainZh: `顏淵請教如何治理國家。孔子綜合三代與周朝之長，提出理想的制度組合：採用夏朝的曆法（較合農時）、乘坐殷朝樸實莊重的車輅、穿戴周朝典雅的禮帽、演奏舜的韶樂。同時要禁絕鄭國那種過於靡麗的音樂，並疏遠善於逢迎諂媚的小人，因為淫靡之樂會敗壞風氣，佞人則會帶來禍患。`,
    plainEn: `Wei Ling Gong 15.10. Yan Yuan asks how to govern a state. Confucius, drawing on the best of several dynasties, prescribes an ideal combination: Xia's calendar for farming practicality, Yin's dignified state carriage, Zhou's elegant ceremonial cap, and Shun's Shao music. At the same time, he calls for banning the excessive music of Zheng and keeping flattering people at a distance, since decadent music corrupts custom and flatterers bring danger.`,
    applicationZh: `建立好的制度，可以博採眾長、擇優而用；同時要有意識地遠離會腐蝕心志的誘惑（如過度享樂）與危險的諂媚者。\n<br /><b>建議：今天檢視自己生活中一項讓你分心或墮落的「靡靡之音」，以及一位常對你阿諛奉承的人，各自設下一個保持距離的界線。</b>`,
    applicationEn: `Building a good system means selectively drawing on the best from various sources, while consciously staying away from corrosive temptations and dangerous flatterers.\n<br /><b>Suggestion: Identify one distracting or degrading indulgence in your life and one person who tends to flatter you excessively, and set a boundary of distance from each today.</b>`
  },
  392: {
    textEn: `The Master said, "One who does not think far ahead will surely encounter trouble close at hand."`,
    plainZh: `孔子提醒：一個人若沒有長遠的規劃與考量，眼前很快就會遭遇困擾與麻煩。這句話點出深謀遠慮的重要性，鼓勵人不要只顧眼前，忽略長遠的準備。`,
    plainEn: `Wei Ling Gong 15.11. Confucius warns that a person who fails to think ahead will soon run into trouble close at hand. The line highlights the importance of foresight, urging people not to focus only on the present while neglecting long-term preparation.`,
    applicationZh: `只顧解決眼前的問題，卻不做長遠規劃，麻煩往往會很快接踵而至；花點時間思考長遠，反而能減少眼前的困擾。\n<br /><b>建議：今天花十分鐘，為一件目前只顧眼前的事，想一個至少三個月後的長遠打算。</b>`,
    applicationEn: `Focusing only on immediate problems without long-term planning invites trouble to arrive sooner rather than later; a little foresight now reduces near-term headaches.\n<br /><b>Suggestion: Spend ten minutes today thinking through a plan at least three months ahead for something you have only been handling short-term.</b>`
  },
  393: {
    textEn: `The Master said, "It is hopeless! I have never seen anyone who loves virtue as much as they love physical beauty!"`,
    plainZh: `孔子感嘆世風：唉，我從未見過有人愛好德行能像愛好美色那樣熱切！這句話道出人性中重視感官享受、輕忽道德修養的普遍傾向，孔子藉此深切慨嘆。`,
    plainEn: `Wei Ling Gong 15.12. Confucius laments the state of the world: alas, he has never seen anyone pursue virtue with the same passion they pursue physical beauty! The line points to a common human tendency to prize sensory pleasure over moral cultivation, and Confucius expresses deep regret at this.`,
    applicationZh: `檢視自己投入時間與熱情的地方，往往容易發現花在享樂與外在吸引力上的心思，遠多於花在品德修養上的心思。\n<br /><b>建議：今天記錄自己花在追求享樂或外表的時間，並試著把其中一小部分，轉移到閱讀或反省品德的時間上。</b>`,
    applicationEn: `Looking honestly at where your time and enthusiasm go often reveals far more devoted to pleasure and appearance than to moral cultivation.\n<br /><b>Suggestion: Today, note how much time you spend pursuing pleasure or appearance, and shift a small portion of it toward reading or reflecting on your character instead.</b>`
  },
  394: {
    textEn: `The Master said, "Zang Wenzhong was surely a man who held office he did not deserve! He knew Liuxia Hui was worthy, yet did not recommend him for a position."`,
    plainZh: `孔子批評魯國大夫臧文仲：他大概是個竊據職位而不稱職的人吧！明明知道柳下惠是個賢能之士，卻不推薦、提拔他共同任職。孔子藉此指出，身居要職者若明知賢才卻不加以任用，便是失職，等於竊取了本該讓賢者擔任的位置。`,
    plainEn: `Wei Ling Gong 15.13. Confucius criticizes the Lu minister Zang Wenzhong: he must have been someone occupying an office he did not truly deserve, since he knew of Liuxia Hui's worth yet failed to recommend or elevate him. Confucius implies that a person in high office who knowingly withholds opportunity from a worthy talent is derelict in duty — effectively usurping a position that rightfully belonged to someone more deserving.`,
    applicationZh: `身居要職卻明知有更值得提拔的人才而刻意壓下不用，不論出於忌妒或私心，都是一種失職。\n<br /><b>建議：今天想一位你認識、值得被推薦或提拔卻一直沒有機會的人，主動幫他爭取一次被看見的機會。</b>`,
    applicationEn: `Occupying an important position while knowingly holding back a more deserving talent, whether out of jealousy or self-interest, is itself a failure of duty.\n<br /><b>Suggestion: Think of someone you know who deserves recognition or promotion but has not had the chance, and today actively help create one opportunity for them to be seen.</b>`
  },
  395: {
    textEn: `The Master said, "If you demand much of yourself and little of others, you will keep resentment far away!"`,
    plainZh: `孔子提出減少怨恨的方法：對自己要求嚴格，對別人的過失則寬容以待，如此便能遠離人與人之間的怨懟糾紛。嚴以律己、寬以待人，是化解人際衝突的關鍵智慧。`,
    plainEn: `Wei Ling Gong 15.14. Confucius offers a way to avoid resentment: hold yourself to a high standard while being lenient toward others' faults, and interpersonal grievances will stay far away. Being strict with oneself and lenient with others is the key wisdom for defusing conflict between people.`,
    applicationZh: `人際間許多怨恨，源自於對別人要求嚴格、對自己卻很寬鬆；把這個標準倒過來，衝突會少很多。\n<br /><b>建議：今天遇到一個讓你想責怪別人的情況時，先花一分鐘想想自己在其中是否也該負一部分責任。</b>`,
    applicationEn: `Much interpersonal resentment comes from holding others to a strict standard while going easy on oneself; reversing that balance greatly reduces conflict.\n<br /><b>Suggestion: When something makes you want to blame someone else today, take a minute first to consider what part of the responsibility might be your own.</b>`
  },
  396: {
    textEn: `The Master said, "For someone who never asks, 'What should be done about this, what should be done about this?' — I truly do not know what can be done about him!"`,
    plainZh: `孔子感嘆：對於一個遇到問題從不認真思考「該怎麼辦、該怎麼辦」的人，我實在拿他沒辦法了！這句話強調凡事都應抱持審慎思考、反覆推敲的態度，而非漫不經心、得過且過。`,
    plainEn: `Wei Ling Gong 15.15. Confucius sighs that for someone who never seriously asks "what should be done about this?" when facing a problem, there is truly nothing he can do to help. The line stresses the importance of careful, deliberate thought over careless indifference.`,
    applicationZh: `遇到問題卻不認真思考解決之道，只是被動等待或不當一回事，久了連願意幫忙的人也會束手無策。\n<br /><b>建議：今天遇到一個你原本想隨便帶過的問題，練習認真問自己「該怎麼辦」，並寫下至少一個可能的做法。</b>`,
    applicationEn: `Facing a problem without seriously thinking through a solution, and merely waiting passively or shrugging it off, will eventually leave even those willing to help unable to do anything.\n<br /><b>Suggestion: For a problem you were tempted to brush off today, seriously ask yourself "what should be done" and write down at least one possible approach.</b>`
  },
  397: {
    textEn: `The Master said, "A group that spends the whole day together, never touching on righteousness in their talk, and delighting only in petty cleverness — how hopeless that is!"`,
    plainZh: `孔子批評一種常見的社交現象：一群人整天聚在一起，談話內容從不涉及道義、正經事，只喜歡耍弄小聰明、講些無關痛癢的話——這樣的相處，實在很難有所長進。孔子藉此提醒人重視相聚時光的品質與內涵。`,
    plainEn: `Wei Ling Gong 15.16. Confucius criticizes a common social pattern: a group spending the whole day together, whose conversation never touches on righteousness or substance, delighting only in petty cleverness — such company, he says, is hopeless for real growth. He reminds us to value the substance of time spent together.`,
    applicationZh: `花很多時間與人相處，若談話內容始終停留在瑣碎閒聊或耍小聰明，這樣的相聚很難帶來真正的成長。\n<br /><b>建議：今天與朋友或同事相聚時，主動把話題帶往一個有實質意義的討論，而不只是閒聊或抖機靈。</b>`,
    applicationEn: `Spending a lot of time with others, if the conversation stays stuck at trivial chatter or petty cleverness, brings little real growth.\n<br /><b>Suggestion: When spending time with friends or colleagues today, actively steer the conversation toward something substantive, rather than mere small talk or cleverness for its own sake.</b>`
  },
  398: {
    textEn: `The Master said, "The noble person takes righteousness as his substance, carries it out through ritual propriety, expresses it with humility, and completes it with trustworthiness. Now that is a noble person!"`,
    plainZh: `孔子描繪君子行事的完整歷程：以道義作為根本；用合宜的禮節去實踐它；用謙遜的態度將它表達出來；最後以誠信將整件事完成。四者環環相扣，缺一不可，才稱得上真正的君子。`,
    plainEn: `Wei Ling Gong 15.17. Confucius describes the full process behind a noble person's conduct: righteousness as the foundation, ritual as the means of carrying it out, humility as the manner of expression, and trustworthiness as what brings it to completion. All four link together, and only when none is missing does one truly deserve to be called a junzi.`,
    applicationZh: `一件事情做得好，不只是動機正當，還要用合宜的方式執行、用謙遜的態度表達、以誠信將它完成，四者缺一不可。\n<br /><b>建議：今天檢視一件你正在推動的事，逐項確認：動機是否正當、方式是否合宜、態度是否謙遜、結果是否誠信到位。</b>`,
    applicationEn: `Doing something well is not just about having the right motive — it also requires the right method, a humble manner, and honest follow-through; none of the four can be skipped.\n<br /><b>Suggestion: Check something you are currently working on against all four: is the motive right, the method fitting, the manner humble, and the follow-through honest?</b>`
  },
  399: {
    textEn: `The Master said, "The noble person is troubled by his own lack of ability, not by others' failure to recognize him."`,
    plainZh: `孔子再次強調此一貫觀點：君子擔憂的是自己能力不足，而不是別人不了解、不賞識自己。把心力放在提升自己的能力，勝過在意他人的評價。`,
    plainEn: `Wei Ling Gong 15.18. Confucius reiterates a recurring theme: the noble person worries about their own lack of ability, not about being unrecognized by others. Investing energy in improving oneself matters more than worrying about others' opinions.`,
    applicationZh: `與其花心思煩惱別人是否看重自己，不如把時間拿來檢視、補強自己實際欠缺的能力。\n<br /><b>建議：今天誠實列出自己目前最欠缺的一項能力，訂一個具體的小行動去補強它。</b>`,
    applicationEn: `Rather than worrying about whether others value you, spend that energy examining and strengthening whatever ability you actually lack.\n<br /><b>Suggestion: Honestly name the one ability you currently lack the most, and set one concrete small action today to start strengthening it.</b>`
  },
  400: {
    textEn: `The Master said, "The noble person is troubled by the thought of dying without his name being spoken of with esteem."`,
    plainZh: `孔子指出君子真正在意的一件事：擔心自己過世之後，沒有留下值得後人稱述的名聲。這並非追求虛名，而是擔憂自己一生是否真正做出了值得被記住的貢獻與德行。`,
    plainEn: `Wei Ling Gong 15.19. Confucius points to something the noble person truly cares about: the fear of dying without leaving behind a name worthy of being remembered. This is not a craving for empty fame, but a concern for whether one's life has actually amounted to contributions and virtue worth remembering.`,
    applicationZh: `在意身後名聲，本質上是在意自己這一生是否真正留下了有意義的貢獻，而不是虛榮心作祟。\n<br /><b>建議：今天想像若干年後別人會如何談論你的一生，寫下你希望被記住的一件具體貢獻，並為它多做一點努力。</b>`,
    applicationEn: `Caring about how one is remembered is, at its core, caring about whether one's life has left a meaningful contribution, not mere vanity.\n<br /><b>Suggestion: Imagine how people might speak of your life years from now; write down one specific contribution you want to be remembered for, and put a bit more effort into it today.</b>`
  },
  401: {
    textEn: `The Master said, "The noble person seeks within himself; the petty person seeks from others."`,
    plainZh: `孔子指出君子與小人面對問題時的根本差異：君子遇到困難或缺失，會先反求諸己，檢討自身；小人則習慣把問題與責任推諉給他人。向內反省還是向外歸咎，正是兩者境界高下之分。`,
    plainEn: `Wei Ling Gong 15.20. Confucius points to a fundamental difference: facing difficulty or shortcoming, the noble person first looks inward and examines themselves, while the petty person habitually shifts blame onto others. Whether one turns inward or outward defines the difference between the two.`,
    applicationZh: `遇到問題時，先檢討自己能改善的部分，還是先怪罪環境與他人，會決定一個人能否真正成長。\n<br /><b>建議：今天遇到一件不如意的事，先花一分鐘檢視自己在其中能改進的地方，再考慮外部因素的影響。</b>`,
    applicationEn: `Facing a problem, whether you first examine what you can improve or first blame circumstances and others determines whether real growth follows.\n<br /><b>Suggestion: When something goes wrong today, spend a minute first examining what you could improve before considering outside factors.</b>`
  },
  402: {
    textEn: `The Master said, "The noble person is dignified but does not contend with others; he is sociable but does not form cliques."`,
    plainZh: `孔子描述君子的處世姿態：君子自持莊重、有原則，但不會與人爭強好勝；能與眾人和睦相處，卻不會為了私利結黨營私、拉幫結派。既有自尊，又不失群體和諧，兩者兼顧。`,
    plainEn: `Wei Ling Gong 15.21. Confucius describes the noble person's demeanor in society: dignified and principled, yet not contentious; sociable and able to get along with everyone, yet never forming factions for private advantage. Self-respect and group harmony are held together without sacrificing either.`,
    applicationZh: `有原則、有尊嚴，不代表要處處爭強好勝；合群相處，也不代表要為了小圈子利益而結黨營私。\n<br /><b>建議：今天檢視自己在團體中的行為，是否曾為了爭輸贏而傷和氣，或為了小圈子利益而排擠他人，並各自調整一次。</b>`,
    applicationEn: `Having principle and dignity does not require constant contention; being sociable does not require forming cliques for narrow gain.\n<br /><b>Suggestion: Reflect on your behavior in a group today — whether you have damaged harmony to win an argument, or excluded others for a small circle's benefit — and adjust once in each direction.</b>`
  },
  403: {
    textEn: `The Master said, "The noble person does not promote a person merely for their fine words, nor does he dismiss good words merely because of who spoke them."`,
    plainZh: `孔子指出君子用人與辨言的原則：不會因為一個人說得好聽就推舉重用他，也不會因為說話的人身分卑微或名聲不佳，就否定他說出的有價值的話。判斷應依事論事，而非以人取言、以言取人。`,
    plainEn: `Wei Ling Gong 15.22. Confucius outlines a principle for evaluating people and their words: never promote someone merely because they speak well, nor dismiss a worthwhile statement merely because of who said it. Judgment should rest on the substance of the matter, not on the speaker's status or eloquence.`,
    applicationZh: `評估一個人是否可用，不能只看他說得好不好聽；評估一句話是否有價值，也不能只看說話的人身分高低。\n<br /><b>建議：今天聽到一個地位不高或平常不太起眼的人提出意見時，特別留意內容本身是否有道理，而不因人廢言。</b>`,
    applicationEn: `Judging whether someone deserves opportunity should not rest solely on how well they speak; judging whether an idea has value should not depend on the status of who said it.\n<br /><b>Suggestion: When someone of lower status or a usually quiet person offers an opinion today, pay special attention to whether the idea itself has merit, rather than dismissing it because of who said it.</b>`
  },
  404: {
    textEn: `Zigong asked, "Is there one word that can serve as a guide for one's entire life?" The Master said, "Would it not be reciprocity? What you do not wish for yourself, do not impose on others."`,
    plainZh: `子貢問孔子：有沒有一個字，可以終身奉行實踐？孔子回答：大概是「恕」字吧！自己不願意承受的事，就不要加諸於別人身上。這句話後來被稱為儒家的「金律」，是待人接物最根本的原則。`,
    plainEn: `Wei Ling Gong 15.23. Zigong asks Confucius if there is a single word one could practice for a lifetime. Confucius answers, "Perhaps it is 'shu' — reciprocity: what you do not wish for yourself, do not impose on others." This line later became known as Confucianism's "Golden Rule," the most fundamental principle for treating others.`,
    applicationZh: `判斷一件事該不該對別人做，最簡單有效的方法，就是先問自己是否也願意承受同樣的對待。\n<br /><b>建議：今天在做一個可能影響他人的決定前，先問自己：如果換作是我承受這個結果，我願意嗎？</b>`,
    applicationEn: `The simplest, most effective way to judge whether an action toward others is right is to ask whether you yourself would be willing to receive the same treatment.\n<br /><b>Suggestion: Before making a decision that affects someone else today, ask yourself: if I were on the receiving end of this, would I be willing to accept it?</b>`
  },
  405: {
    textEn: `The Master said, "In my dealings with others, whom have I disparaged, and whom have I unduly praised? If there is anyone I have praised, it is because I have tested and verified it. These are the very people through whom the Three Dynasties practiced the straight Way."`,
    plainZh: `孔子說：我對待別人，何曾隨意貶損誰、又何曾隨意誇讚誰呢？如果真有我稱讚過的人，那也是經過實際考驗、印證屬實的。正是靠著這樣一群經過檢驗、值得信賴的百姓，夏商周三代才能夠依循正道治理天下。孔子藉此強調評價他人應憑實據，不隨意毀譽。`,
    plainEn: `Wei Ling Gong 15.24. Confucius says that in his dealings with others he neither casually disparages nor casually praises anyone; any praise he has given has been based on tested, verified conduct. It is precisely through such trustworthy people that the Three Dynasties were able to govern by the straight Way. Confucius stresses that judging others should rest on evidence, not casual opinion.`,
    applicationZh: `隨意批評或誇讚一個人，容易失於武斷；唯有經過實際觀察、驗證後給出的評價，才真正站得住腳。\n<br /><b>建議：今天在給出對一個人的評語（好或壞）之前，先想一個具體事例來支持這個評價，若想不出來就先保留意見。</b>`,
    applicationEn: `Casually criticizing or praising someone tends toward rash judgment; only an assessment grounded in actual observation and verification truly holds up.\n<br /><b>Suggestion: Before giving an opinion, good or bad, about someone today, think of one concrete example to support it — and if you cannot, hold back the judgment for now.</b>`
  },
  406: {
    textEn: `The Master said, "I can still recall a time when scribes would leave a blank rather than guess at a doubtful word, and when a person who owned a horse would lend it to others to ride. Now, alas, such things are gone!"`,
    plainZh: `孔子回憶過去的淳厚風氣：史官遇到不確定的文字，寧可空缺存疑也不妄加填補；擁有馬匹的人也願意借給別人騎乘使用。但如今這樣謹慎求實、慷慨互助的風氣已經消失了。孔子藉此感嘆世風日下，嚴謹與慷慨的美德逐漸淡薄。`,
    plainEn: `Wei Ling Gong 15.25. Confucius recalls an earlier, more honest era: scribes, unsure of a word, would leave it blank rather than guess, and those who owned horses would readily lend them to others. Now, he laments, such careful honesty and generosity have vanished. The line expresses regret at the erosion of rigor and mutual generosity in his own time.`,
    applicationZh: `遇到不確定的事情，寧可承認不知道也不妄加揣測；面對他人有需要時，也願意慷慨出借自己的資源——這些美德值得刻意找回。\n<br /><b>建議：今天遇到一件你其實不確定的事，練習誠實說「我不確定」，並主動找一件物品或資源，慷慨借給有需要的人。</b>`,
    applicationEn: `Facing something uncertain, better to admit not knowing than to guess wildly; when others are in need, being willing to generously lend your own resources is a virtue worth deliberately reviving.\n<br /><b>Suggestion: When facing something you are actually unsure about today, practice honestly saying "I'm not sure," and also find one item or resource to generously lend to someone in need.</b>`
  },
  407: {
    textEn: `The Master said, "Clever, glib words corrupt virtue; failing to endure a small matter can throw a great plan into ruin."`,
    plainZh: `孔子指出兩種容易壞事的傾向：花言巧語、油腔滑調會敗壞一個人的德行；面對小事無法忍耐、衝動行事，則會破壞原本精心籌劃的大局。無論是言語或情緒的失控，都可能造成無法挽回的損失。`,
    plainEn: `Wei Ling Gong 15.26. Confucius points to two tendencies that ruin things: clever, glib talk corrupts one's virtue, while an inability to bear with a small matter can wreck a carefully laid larger plan. Losing control, whether in speech or emotion, can cause damage that is hard to undo.`,
    applicationZh: `說話太過討喜圓滑，容易失去真誠；一時衝動、忍不下一口氣，也可能毀掉長期經營的成果。\n<br /><b>建議：今天當你想脫口說出討好或誇大的話時先停一下；也在遇到讓你想立刻發作的小事時，先忍耐三分鐘再反應。</b>`,
    applicationEn: `Speech that is too smooth and pleasing risks losing sincerity; a moment of impatience over something small can also wreck results built up over the long term.\n<br /><b>Suggestion: Today, pause before blurting out flattering or exaggerated words, and when a small irritation makes you want to react immediately, wait three minutes before responding.</b>`
  },
  408: {
    textEn: `The Master said, "When the crowd hates someone, you must examine why; when the crowd likes someone, you must also examine why."`,
    plainZh: `孔子提醒：不論是大家都討厭的人，或是大家都喜歡的人，都不能只憑輿論就妄下定論，而應該親自仔細考察其真實情況。眾人的好惡未必公正，凡事都需要獨立思考、查明真相。`,
    plainEn: `Wei Ling Gong 15.27. Confucius warns against relying purely on popular opinion: whether someone is widely disliked or widely liked, one should still investigate the actual facts rather than simply accepting the crowd's judgment. Popular sentiment is not always fair, and every case calls for independent thought and verification.`,
    applicationZh: `大家都討厭或都喜歡的人，未必就真的是壞人或好人；人云亦云地跟著輿論走，容易做出不公正的判斷。\n<br /><b>建議：今天當你聽到眾人一致對某人有強烈評價（正面或負面）時，練習找出至少一個獨立於輿論的具體事實再下結論。</b>`,
    applicationEn: `Someone widely disliked or widely liked is not necessarily truly bad or good; simply following the crowd's opinion risks an unfair judgment.\n<br /><b>Suggestion: When you hear a strong consensus opinion about someone today, whether positive or negative, find at least one independent fact before drawing your own conclusion.</b>`
  },
  409: {
    textEn: `The Master said, "It is people who can broaden the Way; it is not the Way that broadens people."`,
    plainZh: `孔子點出人與道之間的主從關係：道本身是抽象的原則，需要靠人去實踐、弘揚，才能發揮真正的作用；而不是說一個人只要掛名信奉某個道理，這個道理就會自動讓他變得偉大。真正的關鍵在於人的實踐。`,
    plainEn: `Wei Ling Gong 15.28. Confucius clarifies the relationship between people and the Way: the Way itself is an abstract principle that requires people to practice and promote it before it can truly take effect; it is not that merely subscribing to a doctrine automatically makes a person great. The real key lies in active practice.`,
    applicationZh: `光是認同一個理念或信奉一套道理，並不會自動讓自己變得更好；唯有實際去實踐它，這個理念才真正產生力量。\n<br /><b>建議：今天挑一個你一直認同卻很少實踐的理念，具體做一件事將它落實在行動上。</b>`,
    applicationEn: `Merely agreeing with an idea or subscribing to a doctrine does not automatically make you better; only actually practicing it gives that idea real power.\n<br /><b>Suggestion: Pick an idea you have long agreed with but rarely acted on, and today take one concrete action to put it into practice.</b>`
  },
  410: {
    textEn: `The Master said, "To make a mistake and not correct it — that is what is truly called a mistake."`,
    plainZh: `孔子重新定義「過」的意涵：犯錯本身不是最嚴重的問題，真正的過錯是犯了錯卻不肯改正。人非聖賢，孰能無過，但知錯能改，才是修養的關鍵。`,
    plainEn: `Wei Ling Gong 15.29. Confucius redefines what a real "fault" is: making a mistake is not the deepest problem — the true fault lies in making a mistake and refusing to correct it. No one is beyond error, but the ability to recognize and correct it is the key to self-cultivation.`,
    applicationZh: `犯錯並不可恥，可恥的是明知犯了錯卻拖延不改、甚至為自己找藉口辯護。\n<br /><b>建議：今天誠實面對一個你一直沒有改正的小錯誤，具體採取一個行動開始修正它。</b>`,
    applicationEn: `Making a mistake is not shameful; what is shameful is knowing you erred yet delaying correction or making excuses for it.\n<br /><b>Suggestion: Honestly face one small mistake you have been putting off correcting, and take one concrete action today to start fixing it.</b>`
  },
  411: {
    textEn: `The Master said, "I once went a whole day without eating and a whole night without sleeping, just to think — it was of no benefit; it was not as good as learning."`,
    plainZh: `孔子分享自己的經驗：曾經整天不吃飯、整夜不睡覺，只是苦苦思索，結果卻沒有收穫，遠不如踏實地去學習來得有用。孔子藉此提醒人，空想不如實學，思考需要建立在扎實的學習基礎之上。`,
    plainEn: `Wei Ling Gong 15.30. Confucius shares his own experience: he once went an entire day without food and a whole night without sleep, purely absorbed in thought, only to find it brought no benefit — far less useful than actually studying. He reminds us that pure speculation is no substitute for solid learning, and thinking must be grounded in real study.`,
    applicationZh: `一味埋頭苦思，若沒有實際學習與資訊作為基礎，往往徒勞無功；遇到瓶頸時，找資料、學新知，可能比苦想更有效。\n<br /><b>建議：今天當你為一個問題苦思不得其解時，改為花同樣的時間去查資料或請教他人，而不是繼續空想。</b>`,
    applicationEn: `Brooding in pure thought without real learning or information as a foundation is often futile; when stuck, seeking out information or new knowledge can be more effective than agonizing alone.\n<br /><b>Suggestion: When stuck on a problem today, spend that same amount of time looking up information or asking someone, rather than continuing to think in circles alone.</b>`
  },
  412: {
    textEn: `The Master said, "The noble person is concerned with the Way, not with food. In farming, hunger may still lie in wait; in learning, a salary may naturally follow. The noble person worries about the Way, not about poverty."`,
    plainZh: `孔子指出君子關注的核心：君子謀求的是道的實踐，而不是單純謀求溫飽。即使努力耕種，也可能遇到饑荒而挨餓；但努力求學問道，卻常常能因此獲得俸祿與生計。所以君子憂慮的是道能否行於天下，而非自身是否貧困。`,
    plainEn: `Wei Ling Gong 15.31. Confucius points to what the noble person truly focuses on: the pursuit of the Way, not merely the pursuit of a full stomach. Even diligent farming may still end in hunger during famine, while diligent learning of the Way often brings a livelihood along with it. Thus the noble person worries about whether the Way is being realized, not about their own poverty.`,
    applicationZh: `把心力優先放在追求道理與能力的提升，生計往往會隨之而來；若本末倒置、只汲汲營營於眼前的溫飽，反而容易迷失方向。\n<br /><b>建議：今天檢視自己花最多心力追求的是什麼，若是純粹的物質溫飽，試著把一部分心力轉回長期的學習與成長。</b>`,
    applicationEn: `Prioritizing the pursuit of principle and capability often brings livelihood along with it; chasing only immediate material security while neglecting that foundation easily leads one astray.\n<br /><b>Suggestion: Check what you are putting most of your energy into right now; if it is purely material security, shift a portion of that energy back toward long-term learning and growth today.</b>`
  },
  413: {
    textEn: `The Master said, "If one's knowledge is sufficient to attain a position, but one's humaneness cannot preserve it, even if attained, it will surely be lost. If one's knowledge is sufficient and humaneness can preserve it, but one does not govern with dignity, the people will not be respectful. If one's knowledge is sufficient, humaneness can preserve it, and one governs with dignity, but does not move the people according to ritual propriety, it is still not yet good."`,
    plainZh: `孔子論治理者的層層要求：智慧足以得到職位，若沒有仁德加以守護，即使得到了也必定會失去；有智慧又有仁德守護，但若治理時不夠莊重，百姓便不會心生敬意；有智慧、仁德、又能莊重臨民，但若行事不合乎禮，仍稱不上完善。孔子藉此層層遞進，說明治理天下需要智、仁、莊、禮四者兼備，缺一不可。`,
    plainEn: `Wei Ling Gong 15.32. Confucius sets out escalating requirements for governance: knowledge alone can win a position, but without ren to preserve it, the position will surely be lost; ren can preserve it, but without dignity in governing, the people will not respect the ruler; dignity may earn respect, but without acting according to ritual propriety, governance is still not complete. Through this progression, Confucius shows that governing well requires wisdom, humaneness, dignity, and ritual propriety all together.`,
    applicationZh: `光靠能力得到一個位置還不夠，還需要品德來守住它、莊重的態度來贏得尊重、合宜的方式來完善整件事，四者缺一不可。\n<br /><b>建議：今天檢視自己現在擁有的一個角色或位置，逐項確認：能力、品德、態度、方式是否都到位，找出最弱的一項加強。</b>`,
    applicationEn: `Ability alone is not enough to hold onto a position — it also takes character to preserve it, dignity to earn respect, and proper conduct to complete it well.\n<br /><b>Suggestion: Review a role or position you currently hold and check each of the four — ability, character, attitude, and conduct — then strengthen whichever is weakest.</b>`
  },
  414: {
    textEn: `The Master said, "The noble person may not be readily appreciated in small matters, but can be entrusted with great responsibilities. The petty person cannot be entrusted with great responsibilities, but may be readily appreciated in small matters."`,
    plainZh: `孔子比較君子與小人各自適合承擔的範圍：君子或許不擅長處理瑣碎小事、不容易在小地方讓人眼睛一亮，卻能承擔重大的責任；小人則相反，無法託付重大的責任，卻可能在細瑣小事上表現靈巧、討人喜歡。孔子藉此提醒用人應識大體，不因小節而錯失或誤用人才。`,
    plainEn: `Wei Ling Gong 15.33. Confucius contrasts what the noble person and the petty person are each suited for: the noble person may not shine in small, trivial matters, yet can be entrusted with great responsibility; the petty person, conversely, cannot be trusted with great responsibility, yet may appear clever and pleasing in small matters. He reminds us to judge people by their capacity for the larger picture, not to misjudge or misuse talent based on minor details.`,
    applicationZh: `有人不擅長小事卻能扛大責任，有人擅長小事卻扛不起大責任；用人時應看清楚對方真正的能耐所在，不被表面的小聰明或小笨拙誤導。\n<br /><b>建議：今天重新評估一位你曾因「不擅小事」而低估，或因「機靈討喜」而高估的人，看看是否需要調整對他的判斷。</b>`,
    applicationEn: `Some people are poor at small tasks yet capable of great responsibility, while others excel at small tasks yet cannot bear larger ones; judge people by their real capacity, not by surface cleverness or clumsiness.\n<br /><b>Suggestion: Re-evaluate someone you may have underestimated for being "bad at small things" or overestimated for being "clever and likable," and see if your judgment of them needs adjusting.</b>`
  },
  415: {
    textEn: `The Master said, "The people's need for ren is even greater than their need for water and fire. Yet I have seen people die from stepping into water or fire, but I have never seen anyone die from practicing ren."`,
    plainZh: `孔子強調仁德對百姓的重要性，甚至超過水火這等民生必需品；然而水火雖然重要，人們卻可能因誤蹈水火而喪命，實踐仁德卻從未聽聞有人因此喪命。孔子藉此鼓勵人們不要害怕、不要猶豫，應勇於實踐仁德。`,
    plainEn: `Wei Ling Gong 15.34. Confucius stresses that ren is even more essential to the people than water and fire, life's basic necessities; yet while people can die from carelessly stepping into water or fire, no one has ever died from practicing ren. He encourages people not to hesitate or fear, but to boldly put ren into practice.`,
    applicationZh: `人們對日常生活的必需品戰戰兢兢，卻常常對實踐仁德猶豫不前，其實行仁不像人們想像的那樣有風險或代價。\n<br /><b>建議：今天想一件你因為擔心風險或代價而遲遲不敢做的善舉，評估後大膽地做出來。</b>`,
    applicationEn: `People are careful about life's basic necessities, yet often hesitate to practice ren, even though doing good rarely carries the risk or cost people imagine.\n<br /><b>Suggestion: Think of one good deed you have hesitated to do out of fear of risk or cost, evaluate it, and go ahead and do it today.</b>`
  },
  416: {
    textEn: `The Master said, "When it comes to practicing ren, do not yield even to your teacher."`,
    plainZh: `孔子強調實踐仁德時應有的態度：面對應該行仁的時刻，即使對象是自己的老師，也不必謙讓退縮，該當仁不讓、挺身而行。這句話點出仁德的實踐優先於世俗的謙讓禮節。`,
    plainEn: `Wei Ling Gong 15.35. Confucius emphasizes the attitude called for in practicing ren: when the moment calls for it, one should not defer or hold back even out of respect for one's own teacher — one should step forward without hesitation. The line shows that practicing ren takes priority over ordinary social deference.`,
    applicationZh: `遇到該挺身而出行善或堅持正確原則的時刻，不必因為對方是長輩、上司或老師就退讓，該做的事仍應勇敢承擔。\n<br /><b>建議：今天若遇到一個該做對的事卻因對方身分而猶豫的情況，練習不因對方地位而退讓，勇敢做該做的事。</b>`,
    applicationEn: `When a moment calls for stepping up to do good or hold to the right principle, do not back down just because the other party is an elder, boss, or teacher — the right thing still deserves courage.\n<br /><b>Suggestion: If you find yourself hesitating to do the right thing today because of someone's status, practice not backing down and bravely doing what needs to be done.</b>`
  },
  417: {
    textEn: `The Master said, "The noble person is steadfast in principle, but not rigidly bound to petty faithfulness."`,
    plainZh: `孔子指出君子的原則性：君子堅守正道、堅定不移，但不會拘泥於個人狹隘的小信小節，而不知變通。真正的堅持，是對大原則的忠誠，而非死守瑣碎的承諾細節。`,
    plainEn: `Wei Ling Gong 15.36. Confucius points to the noble person's kind of principle: steadfast and unwavering on the larger Way, yet not rigidly bound to narrow personal promises that ignore context. True constancy is loyalty to the larger principle, not blind insistence on minor details.`,
    applicationZh: `堅守大原則和拘泥小承諾是兩回事；有時候該調整的是細節上的做法，而非放棄根本的原則。\n<br /><b>建議：今天檢視一項你曾經許下卻因情勢改變而顯得不合時宜的小承諾，思考如何在守住根本原則的前提下靈活調整做法。</b>`,
    applicationEn: `Holding to a larger principle and rigidly clinging to a small promise are two different things; sometimes it is the details of execution that should adapt, not the underlying principle that should be abandoned.\n<br /><b>Suggestion: Look at a small promise you once made that circumstances have made awkward to keep exactly as stated, and think about how to adjust the details while still honoring the underlying principle.</b>`
  },
  418: {
    textEn: `The Master said, "In serving one's ruler, attend respectfully to the work first, and consider the pay only afterward."`,
    plainZh: `孔子論事君之道：服侍君主、擔任公職，應先以恭敬盡責的態度把分內之事做好，至於俸祿待遇，則是其次的考量。把職責放在薪酬之前，才是端正的事君態度。`,
    plainEn: `Wei Ling Gong 15.37. Confucius offers guidance on serving a ruler: when holding public office, attend to one's duties with respect and diligence first, and treat compensation as a secondary matter. Putting duty before pay is the proper attitude in service.`,
    applicationZh: `一份工作若把待遇擺在職責之前，容易本末倒置；先把該做好的事做到位，回報自然是其次的問題。\n<br /><b>建議：今天在處理一項工作任務時，先確認自己是否把責任做到位，而不是先計較這件事能為自己帶來什麼好處。</b>`,
    applicationEn: `If compensation is put ahead of duty in a job, priorities get reversed; doing the work well first naturally makes the question of reward secondary.\n<br /><b>Suggestion: When handling a work task today, first make sure you are fulfilling the responsibility well, rather than first calculating what benefit it brings you.</b>`
  },
  419: {
    textEn: `The Master said, "In education, there are no distinctions of kind."`,
    plainZh: `孔子提出劃時代的教育理念：施行教育，不應區分學生的出身貴賤、貧富、族類，人人皆有受教育的權利與可能性。這句話奠定了孔子有教無類、因材施教的教育精神基礎。`,
    plainEn: `Wei Ling Gong 15.38. Confucius puts forward a groundbreaking educational principle: in teaching, there should be no distinctions based on a student's birth, wealth, or background — everyone has the right and potential to be educated. This line laid the foundation for Confucius's spirit of universal, inclusive education.`,
    applicationZh: `給予他人學習與成長的機會時，不應因對方的出身、背景或現有條件而有所差別待遇，每個人都值得被認真教導。\n<br /><b>建議：今天在指導或教導他人時，留意自己是否因對方的背景或條件而投入不同的用心，並主動一視同仁。</b>`,
    applicationEn: `When giving others the opportunity to learn and grow, one should not treat them differently based on background or circumstance — everyone deserves to be taught seriously.\n<br /><b>Suggestion: When teaching or mentoring someone today, notice whether you are investing different levels of care based on their background, and make an effort to treat everyone equally.</b>`
  },
  420: {
    textEn: `The Master said, "Those whose paths differ cannot make plans together."`,
    plainZh: `孔子指出：理念、原則、志向不同的人，很難一起規劃共事，因為彼此的出發點和目標根本不一致，勉強合作也難以走得長久。這句話提醒人選擇夥伴或團隊時，理念的契合十分重要。`,
    plainEn: `Wei Ling Gong 15.39. Confucius points out that people whose fundamental values, principles, or aspirations differ can hardly plan and work together, since their starting points and goals do not align — forcing such cooperation rarely lasts. The line highlights how important shared values are when choosing partners or a team.`,
    applicationZh: `與理念根本不同的人勉強合作，長期下來往往容易產生摩擦；找到理念相近的夥伴，合作起來會更順暢長久。\n<br /><b>建議：今天檢視一段讓你感到吃力的合作關係，判斷是否因為理念根本不同，若是，考慮調整合作的方式或範圍。</b>`,
    applicationEn: `Forcing cooperation with someone whose fundamental values differ from yours tends to create friction over time; finding partners with aligned values makes collaboration smoother and more lasting.\n<br /><b>Suggestion: Look at one collaboration that feels draining, judge whether it stems from a fundamental difference in values, and if so, consider adjusting how or how much you work together.</b>`
  },
  421: {
    textEn: `The Master said, "In language, it is enough that it conveys the meaning clearly!"`,
    plainZh: `孔子論言辭的標準：說話或寫文章，只要能夠清楚表達意思，就已經足夠了，不必刻意追求辭藻的華麗或炫技。孔子重視言語的實用功能，強調清楚勝過浮誇。`,
    plainEn: `Wei Ling Gong 15.40. Confucius offers a standard for language: speech or writing need only convey its meaning clearly — there is no need to chase elaborate or showy phrasing. Confucius values the practical function of language, favoring clarity over ornamentation.`,
    applicationZh: `表達想法時，把意思講清楚遠比用詞華麗更重要；過度雕琢反而可能模糊了真正想傳達的重點。\n<br /><b>建議：今天檢查一封你正要發出的訊息或郵件，刪掉其中不必要的華麗辭藻，確保意思清楚明白。</b>`,
    applicationEn: `When expressing an idea, clarity matters far more than elaborate wording; over-polishing can actually obscure the point you meant to make.\n<br /><b>Suggestion: Before sending a message or email today, cut out unnecessary flowery language and make sure the meaning comes through clearly.</b>`
  },
  422: {
    textEn: `The blind musician Mian came to visit. When they reached the steps, the Master said, "Here are the steps." When they reached his mat, the Master said, "Here is your mat." When everyone was seated, the Master told him, "So-and-so is here, so-and-so is there." After Mian left, Zizhang asked, "Is this the proper way to converse with a blind musician?" The Master said, "Yes, this is indeed the proper way to assist a blind musician."`,
    plainZh: `盲人樂師冕來拜訪孔子。走到台階時，孔子提醒他「這裡是台階」；走到座席旁，孔子又說「這裡是座席」；等大家都坐定後，孔子還一一告知他誰坐在哪個位置。師冕離開後，子張問：這就是與樂師相處應有的方式嗎？孔子答：是的，這正是幫助盲者、與盲者相處應有的正確方式。孔子以身作則，展現對身心障礙者細膩體貼的關懷。`,
    plainEn: `Wei Ling Gong 15.41. The blind musician Mian visits Confucius. At the steps, Confucius tells him, "Here are the steps"; at the mat, "Here is your seat"; and once everyone is seated, he tells Mian who is sitting where. After Mian leaves, Zizhang asks whether this is the proper way to interact with a blind musician. Confucius affirms that yes, this is indeed the right way to assist someone who cannot see. Confucius demonstrates, through his own example, careful and considerate attention toward a person with a disability.`,
    applicationZh: `對身邊需要協助的人（如視障者或其他不便者），主動、細膩地提供必要的資訊與協助，是一種真正體貼的仁心表現。\n<br /><b>建議：今天留意一位身邊行動或感官不便的人，主動提供一項具體而細膩的協助，而不是等對方開口求助。</b>`,
    applicationEn: `Actively and carefully providing the information and help someone with a disability needs is a genuine expression of considerate humaneness.\n<br /><b>Suggestion: Notice someone nearby today who has a mobility or sensory limitation, and proactively offer one specific, thoughtful piece of help before they have to ask.</b>`
  }
};

fs.writeFileSync(
  path.join(tmpDir, "analects-content-xianwen.json"),
  JSON.stringify(xianwen, null, 2),
  "utf8"
);
fs.writeFileSync(
  path.join(tmpDir, "analects-content-weilinggong.json"),
  JSON.stringify(weilinggong, null, 2),
  "utf8"
);

console.log("xianwen units:", Object.keys(xianwen).length);
console.log("weilinggong units:", Object.keys(weilinggong).length);
