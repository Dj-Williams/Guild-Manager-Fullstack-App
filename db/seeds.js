const Quest = require('../models/Quest')
const Adventurer = require('../models/Adventurer')
const mongoose = require('./connections')

const lance = new Adventurer({
    image: 'https://github.com/Dj-Williams/Guild-Manager-Fullstack-App/blob/master/images/Swiftmind.jpg',
    name: 'Lance Swiftmind',
    classSpecialization: 'Diplomat/Rogue',
    biography: 'This is a smart boi who used de smarts to become influential boi, which created enemies so he became le sneak boi to stay good boi. (Ill articulate this better later lol)'
})

const luna = new Adventurer({
    image: 'https://github.com/Dj-Williams/Guild-Manager-Fullstack-App/blob/master/images/Luna.png',
    name: 'Luna Fraylie',
    classSpecialization: 'Witch',
    biography: ' She mastered the occult arts originally as a way to get revenge on those who wronged her in her youth. Now in the aftermath of her vengeance, she uses her knowledge of the dark arts to help rather than hurt.'
})

const lakeisha = new Adventurer({
    image: 'https://github.com/Dj-Williams/Guild-Manager-Fullstack-App/blob/master/images/Lakeisha.jpg',
    name: 'Lakeisha Blood',
    classSpecialization: 'Diplomat/Rogue',
    biography: ' Born to a wealthy prominent merchant house, exellence was always expected of Lakiesha. During her coming of age ceremony, she shocked her whole house by announcing that she would rather join the paladin cloister than go to merchant college. Now she zelously ventures across the continent, dispensing Gods justice on those that prey on the weak.'
})

const grail = new Quest({
    questName: 'Purify the Holy Grailands',
    description: 'Demons have raided the Holy Grailands with intent to destroy all the temples that keep the Mammon portal closed. The Hestian Church have come to our guild and are offering a hefty sum if we are able to drive the demonic offensive front back to Tartarus.',
    adventurers: [lance, luna, lakeisha]
})

Quest.remove({})
    .then(() => Adventurer.insertMany([lance, luna, lakeisha]))
    .then(() => grail.save())
    .then(() => console.log('Seeds have been successfully Saved!'))
    .then(() => mongoose.connection.close())