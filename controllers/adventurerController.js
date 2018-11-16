const Quest = require('../models/Quest')
const Adventurer = require('../models/Adventurer')

const adventurerController = {
    index: (req, res) => {
        var questId = req.params.questId
        Quest.findById(questId).populate('adventurers')
            .then((quest) => {
                res.send(quest.adventurers)
            })
    },
    show: (req, res) => {
        var adventurerId = req.params.adventurerId
        Adventurer.findById(adventurerId)
            .then((adventurer) => {
                res.send(adventurer)
            })
    },
    create: (req, res) => {
        let questId = req.params.questId
        Quest.findById(questId)
            .then((quest) => {
                // In order to create the second model, you have to find the first model by it's id, then create a new req.body, 
                Adventurer.create(req.body)
                    .then((newAdventurer) => {
                        // then with that new creation push it to the array where the first model owns all of the second models. 
                        quest.adventurers.push(newAdventurer)
                        // SAVE them. 
                        quest.save()
                        // Then send them.
                        res.send(newAdventurer)
                    })
            })
    }
}

module.exports = adventurerController