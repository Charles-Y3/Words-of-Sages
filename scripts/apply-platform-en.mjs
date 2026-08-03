import fs from 'fs';
import path from 'path';

const dir = path.resolve('src/data/platformSutra');

const translations = {
  7: `from whom Buddhas of the three periods have come forth. You should use this great wisdom to break through the five aggregates, afflictions, and worldly toil. Cultivating in this way, you will surely attain the Buddha-path, transforming the three poisons into precepts, samādhi, and prajñā.

"Good friends! From this one prajñā, eighty-four thousand wisdoms are born. Why? Because people in the world have eighty-four thousand kinds of worldly toil. When there is no worldly toil, wisdom constantly manifests and never departs from self-nature. One who awakens to this Dharma is no-thought—without recollection, without attachment, giving rise to no delusive falsity. Using one's own true-suchness nature, one contemplates with wisdom; in all dharmas one neither grasps nor rejects—this is seeing the nature and attaining the Buddha-path.

"Good friends! If you wish to enter the profound dharma-realm and prajñā-samādhi, you must practice the prajñā-path and uphold the Diamond Prajñā Sutra—you will then see the nature. Know that the merit of this sutra is immeasurable and boundless; the sutra itself praises it clearly and cannot fully describe it. This Dharma-gate is the supreme vehicle, spoken for those of great wisdom and sharp faculties. When those of small faculties and small wisdom hear it, their minds give rise to disbelief. Why? For example, when the great dragon rains upon Jambudvīpa, cities and villages are all swept away like jujube leaves adrift. But when it rains upon the great ocean, the sea neither increases nor decreases. When those of the Mahāyāna or supreme vehicle hear the Diamond Sutra, their minds open to awakening and understanding. Thus we know that self-nature originally possesses prajñā-wisdom. Using one's own wisdom and constantly contemplating, one does not rely on words. It is like rain: rain does not come from heaven; originally it is the dragon that brings it forth, causing all sentient beings, all grasses and trees, the sentient and the insentient, all to receive its moistening. The hundred streams and myriad rivers all enter the great sea and merge into one body. The prajñā-wisdom of sentient beings' self-nature is also like this.

"Good friends! Those of small faculties, hearing this sudden teaching, are like plants and trees with small roots: when struck by a great rain, they all topple and cannot grow. Those of small faculties are also like this. Originally they possess prajñā-wisdom, no different from those of great wisdom—so why, on hearing the Dharma, do they not awaken for themselves? Because heavy obstructions of wrong views and deep roots of affliction cover them. It is like a great cloud covering the sun: without the wind to blow it away, the sunlight does not appear. Prajñā-wisdom likewise has no great or small; it is only that the minds of all sentient beings differ in delusion and awakening. The deluded mind looks outward and cultivates seeking Buddha; not awakening to self-nature is what makes one of small faculties. If one awakens to the sudden teaching, one cannot cultivate outwardly—only in one's own mind constantly give rise to right views, and afflictions and worldly toil can never stain one. This is seeing the nature.

"Good friends! Inner and outer without abiding, coming and going in freedom, able to remove clinging mind and penetrate without obstruction—one who can cultivate this practice differs in no way from the Prajñā Sutra itself.

"Good friends! All sūtras and scriptures, the two vehicles of great and small, and the twelve divisions of the canon exist because of people. Only because of the nature of wisdom can they be established. If there were no people in the world, the ten thousand dharmas would originally not exist; thus we know the ten thousand dharmas arise from the human mind. All scriptures exist because people speak of them. Because among people there are foolish and wise, the foolish are small people and the wise are great people. The foolish ask the wise, and the wise expound the Dharma for the foolish. When the foolish suddenly awaken and their minds open, they are no different from the wise.

"Good friends! Not awakening—then Buddha is sentient being; one thought of awakening—then sentient being is Buddha. Thus we know the ten thousand dharmas are entirely within one's own mind. Why not from your own mind suddenly see the true-suchness nature? The Bodhisattva Precept Sutra says: 'My original self-nature is originally pure; if one knows one's own mind and sees the nature, all attain the Buddha-path.' The Vimalakīrti Sutra says: 'Instantly one is vast and open, and regains the original mind.'

"Good friends! At Master Ren's place, upon hearing a single word I immediately awakened and suddenly saw the true-suchness nature. Therefore I spread this teaching so that students of the Way may suddenly awaken to bodhi. Each contemplate your own mind and see your own nature. If you do not awaken for yourselves, you must seek a great good friend who understands the supreme vehicle and who will directly show you the right path. Such a good friend has great karmic affinity—namely, to guide and teach so that one may see the nature. All good dharmas are able to arise because of a good friend. The Buddhas of the three periods and the twelve divisions of the canon are originally complete within human nature. Those who cannot awaken for themselves must seek a good friend's instruction before they can see; those who awaken for themselves do not rely on external seeking. If one stubbornly holds that one must have another good friend before one can attain liberation, there is no such principle. Why? Within one's own mind there is a good friend who awakens for oneself. If one gives rise to wrong delusion and inverted false thought, even though an external good friend has teaching to offer, one cannot be saved. If one gives rise to true prajñā contemplation, in a single instant all false thoughts are extinguished. If one knows self-nature, one awakening is immediate arrival at the Buddha-ground.

"Good friends! Wisdom contemplation, inner and outer bright and penetrating, knows one's own original mind. If one knows the original mind, that itself is fundamental liberation."`,

  8: `If one attains liberation, that is prajñā-samādhi; that is no-thought. What is called no-thought? When one sees all dharmas, the mind is not stained by them—this is no-thought. In function it pervades all places, yet it does not attach to any place. Only purify the original mind; cause the six consciousnesses to go out from the six gates, and amid the six sense-objects be without stain or mixture—coming and going in freedom, universally functioning without obstruction. This is prajñā-samādhi, free liberation, called the practice of no-thought. If one thinks of nothing at all and makes thoughts entirely cease, that is being bound by the Dharma and is called a one-sided view.

"Good friends! One who awakens to the Dharma of no-thought penetrates the ten thousand dharmas; one who awakens to the Dharma of no-thought sees the realm of all Buddhas; one who awakens to the Dharma of no-thought reaches the Buddha-position.

"Good friends! Those in later generations who receive my Dharma should, among those of the same insight and the same practice, vow to receive and uphold this sudden teaching as though serving the Buddha, never retreating throughout life—they will surely enter the holy position. Yet in transmitting, one must silently transmit and entrust what has been passed down from above; one must not conceal the true Dharma. If insight and practice differ and one is in another Dharma, one must not transmit it. That would harm those who came before and ultimately bring no benefit. I fear that foolish people will not understand and will slander this Dharma-gate, and for a hundred kalpas and a thousand lives will cut off the Buddha-seed.

"Good friends! I have a Formless Gātha; each of you must recite it. Whether at home or as one who has left home, cultivate according to this. If you do not cultivate yourselves but only memorize my words, it will bring no benefit. Hear my gātha:

"A master of the Buddhist canon
As well as the teachings of the Dhyāna school
Should teach nothing but the Dharma for realizing self-nature,
Going beyond the world to break the schools of wrong views.
The Dharma has no sudden or gradual,
But delusion and awakening have slow and quick;
Only this gate of seeing the nature
The foolish cannot fully know.
Though teachings may be explained in ten thousand ways,
In principle they all return to one.
In the dark house of affliction
One must constantly give rise to the sun of wisdom.
When wrongness comes, affliction arrives;
When rightness comes, affliction is removed.
Use neither wrong nor right—
Purity reaches the point of nothing left.
Bodhi is originally self-nature;
To give rise to a thought is already falsity.
The pure mind amid falsity—
Simply be upright and there are no three obstructions.
If people in the world cultivate the Way,
Nothing at all is forbidden;
Constantly see one's own faults
And one accords with the Way.
Each kind has its own Way;
They do not hinder one another.
Leave the Way to seek the Way elsewhere
And one will not see the Way all one's life.
Tossed about through a lifetime,
At the end one still regrets.
To wish to see the true Way,
Walk upright and that itself is the Way.
If one lacks the mind of the Way,
Walking in darkness one will not see the Way.
If one is truly a cultivator of the Way,
One does not see the faults of the world.
If one sees others' wrongs,
One's own wrong is already off the mark.
Their wrongs I do not call wrong;
My wrongs I myself possess.
Only turn back the mind that finds fault in others,
And affliction is broken and destroyed.
Love and hate not touching the mind,
One stretches out both legs and lies down.
If one wishes to convert others,
One must oneself have skillful means.
Do not let them have doubts—
That itself is self-nature appearing.
The Buddha-Dharma is in the world;
Enlightenment is not apart from the world.
Seeking bodhi apart from the world
Is like seeking a rabbit's horn.
Right view is called transcendence;
Wrong view is the world.
When wrong and right are both cast off,
The nature of bodhi is manifest.
This gātha is the sudden teaching,
Also called the great Dharma-ship.
Deluded, one may hear it for kalpas;
Awakened, it is but an instant."

The Master again said: "Today at the great Dafan Temple I expound this sudden teaching, universally wishing that sentient beings throughout the dharma-realm may see the nature and become Buddhas upon hearing the words."

At that time Prefect Wei, together with officials and laypeople, upon hearing what the Master said, all gained understanding. Together they bowed and exclaimed:

"Excellent! Who would have expected a Buddha to appear in Lingnan!"`,

  9: `One day Prefect Wei of Shao prefecture prepared a great feast for the Master. When the feast was finished, the Prefect invited the Master to ascend the seat. Together with officials, scholars, and commoners, all solemnly bowed again and asked: "Your disciple has heard the Master expound the Dharma—it is truly inconceivable. I now have a small doubt and wish, in great compassion, that you would specially explain it."

The Master said: "If you have doubts, ask. I shall explain."

Prefect Wei said: "What the Master has expounded—is it not the essential teaching of the Great Master Bodhidharma?"

The Master said: "It is."

The Prefect said: "Your disciple has heard that when Bodhidharma first converted Emperor Wu of Liang, the Emperor asked: 'I have built temples, ordained monks, given alms, and set up feasts all my life—what merit is there in this?' Bodhidharma replied: 'In truth there is no merit.' Your disciple has not yet understood this principle and wishes the Master to explain."

The Master said: "In truth there is no merit. Do not doubt the words of the former sage. The Emperor's mind was perverse; he did not know the true Dharma. Building temples, ordaining monks, giving alms, and setting up feasts are called seeking fortune; one cannot take fortune and call it merit. Merit is within the dharmakāya, not within cultivating fortune."

The Master again said: "Seeing the nature is merit; equality is virtue. Thought after thought without obstruction, constantly seeing self-nature, true and wondrous function—this is called merit. Inner humility is merit; outward practice of propriety is virtue. Self-nature establishing the ten thousand dharmas is merit; the mind-substance departing from thought is virtue. Not departing from self-nature is merit; application without stain is virtue. If you seek the merit of the dharmakāya, simply act according to this—this is true merit. One who cultivates merit does not slight others in mind and constantly practices universal respect. If the mind constantly slight others, the 'I' never ceases—then one has no merit of one's own; self-nature is empty and unreal—then one has no virtue of one's own. This is because of self-conceit, constantly slighting everything.

"Good friends! Thought after thought without interruption is merit; the mind walking straight is virtue. Self-cultivating the nature is merit; self-cultivating the body is virtue. Good friends! Merit must be seen within self-nature; it is not something sought through almsgiving and offerings. Thus merit and fortune differ. Emperor Wu did not know the truth—it is not that our Patriarch was at fault."

The Prefect again asked: "Your disciple often sees monks and laypeople recite Amitābha Buddha, wishing to be born in the Western Pure Land. I ask the Master to explain: can one be born there? I wish you would dispel this doubt."

The Master said: "Prefect, listen well. Huineng will explain. When the World-Honored One was in the city of Śrāvastī, he taught the Western Pure Land to guide beings. The scripture is clear: it is not far from here. If we speak in terms of appearance, the distance is one hundred and eight thousand li—but the ten evils and eight perversions within the body are what is meant by 'far.' Speaking of far is for those of lower faculties; speaking of near is for those of higher wisdom. People are of two kinds, but the Dharma is not twofold. Delusion and awakening differ; seeing comes quickly or slowly. The deluded recite the Buddha's name seeking birth there; the awakened purify their own minds. Therefore the Buddha said: 'As the mind is purified, so is the Buddha-land purified.' Prefect, you are an easterner—if the mind is pure, there is no offense. Though one were a westerner, if the mind is not pure there is fault. Easterners commit offenses and recite the Buddha's name seeking birth in the West. Westerners commit offenses—seeking birth in what land by reciting the Buddha's name? Ordinary fools do not understand self-nature and do not recognize the Pure Land within the body, wishing for east or wishing for west. The awakened are the same wherever they are; therefore the Buddha said: 'Wherever one dwells, there is constant peace and joy.' Prefect, if your mind-ground harbors no unwholesomeness, the West is not far from here. If you harbor an unwholesome mind, even reciting the Buddha's name, rebirth is hard to attain. Now I exhort good friends:

"First remove the ten evils and you have traveled a hundred thousand li; then remove the eight perversions and you have passed eight thousand li. Thought after thought see the nature, constantly walk the straight path, and in the time it takes to snap the fingers you will behold Amitābha. Prefect, if you simply practice the ten wholesome acts, why must you further vow rebirth? If you do not cut off the mind of the ten evils, what Buddha will come to welcome you? If you awaken to the sudden Dharma of non-birth, you see the Western Pure Land in an instant. Not awakening and reciting the Buddha seeking rebirth—the road is long; how can you arrive? Huineng will shift the Western Pure Land to this very instant for all of you, and you will see it before your eyes. Do you each wish to see it?"

The assembly all bowed with palms together and said: "If we can see it here, why must we further vow rebirth? We wish the Master, in compassion, would manifest the Western Pure Land and universally enable us to see it."

The Master said: "Great assembly! People in the world take the form-body as the city; eyes, ears, nose, and tongue are the gates—outside are five gates, inside is the mind-gate. The mind is the ground; the nature is the king. The king dwells upon the mind-ground; where the nature is, the king is; where the nature goes, the king is not. Where the nature is, body and mind remain; where the nature goes, the body decays. Make Buddha within the nature—do not seek outside the body. When self-nature is deluded, that is sentient being;`,

  10: `when self-nature is awakened, that is Buddha. Compassion is Guanyin; joy and giving are called Mahasthamaprapta; being able to purify is Śākyamuni; being upright is Amitābha. Self and others are Mount Sumeru; greed and desire are the sea-water; affliction is the waves; poison and harm are evil dragons; falsity is ghosts and spirits; worldly toil is fish and turtles. Greed and anger are hell; foolishness is the animal realm.

"Good friends! Constantly practice the ten wholesome acts and heaven is immediately at hand. Remove self and others and Mount Sumeru topples; remove greed and desire and the sea-water dries up; without affliction, the waves cease; remove poison and harm and fish and dragons vanish. Awakening-nature on the ground of one's own mind—Tathāgata radiates great light; outwardly illuminating the six gates in purity, one can break through the six desire heavens; inwardly illuminating self-nature, the three poisons are immediately removed; the sins of hell and the like are all extinguished at once. Inner and outer bright and penetrating, no different from the Western Pure Land. If one does not cultivate in this way, how can one arrive there?"

When the great assembly heard this teaching, they clearly saw the nature. All bowed and together exclaimed, "Excellent!" They declared: "We universally wish that sentient beings throughout the dharma-realm who hear this may all awaken and understand at once."

The Master said: "Good friends! If you wish to cultivate, you may do so at home—you need not be in a monastery. If one can practice at home, it is like an easterner whose mind is good; if one does not cultivate in a monastery, it is like a westerner whose mind is evil. Only purify the mind—that itself is the Western Pure Land of self-nature."

Prefect Wei again asked: "How should one cultivate at home? I wish you would instruct us."

The Master said: "I shall expound a Formless Gātha for the great assembly. Cultivate according to this and you will constantly be no different from being in my presence. If you do not cultivate according to this, even shaving the head and leaving home will bring no benefit to the Way. The gātha says:

"If the mind is level, why labor at keeping precepts?
If conduct is straight, what use is there in practicing meditation?
With kindness, filially nourish parents;
With righteousness, superiors and inferiors show mutual care.
With yielding, high and low are harmonious;
With forbearance, the many evils are without clamor.
If one can drill wood to bring forth fire,
Red lotus will surely rise from the mud.
Bitter words are good medicine;
Harsh to the ear must be loyal speech.
Reforming faults surely gives rise to wisdom;
Protecting one's faults shows no worth within.
Daily practice should always benefit others;
Attaining the Way is not through giving money.
Bodhi is sought only within the mind—
Why toil outward seeking the mysterious?
Hearing this, cultivate accordingly—
The Western Pure Land is right before your eyes."

The Master again said: "Good friends! You must all cultivate according to the gātha, see and take hold of self-nature, and directly attain the Buddha-path. Time does not wait. Everyone disperse for now—I return to Caoxi. If the assembly has doubts, come again and ask."

At that time the Prefect, officials, and the good men and faithful women present all gained awakening, received the teaching in faith, and put it into practice.`
};

// Write first batch - platformSutra1 units 7-10
function replaceEn(file, id, newEn) {
  const c = fs.readFileSync(path.join(dir, file), 'utf8');
  const idPattern = new RegExp(`(id:\\s*${id},[\\s\\S]*?text:\\s*\\{\\s*\\n\\s*zh:\\s*\`[\\s\\S]*?\`,\\s*\\n\\s*en:\\s*\`)[\\s\\S]*?(\`\\s*\\n\\s*\\},\\s*\\n\\s*plain:)`);
  if (!idPattern.test(c)) throw new Error(`Could not find unit ${id} in ${file}`);
  const updated = c.replace(idPattern, `$1${newEn}$2`);
  fs.writeFileSync(path.join(dir, file), updated);
  console.log(`Updated unit ${id} in ${file}`);
}

for (const [id, en] of Object.entries(translations)) {
  replaceEn('platformSutra1.js', Number(id), en);
}

console.log('Batch 1 done');
