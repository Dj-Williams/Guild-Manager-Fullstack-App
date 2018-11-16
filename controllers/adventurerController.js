const Quest = require('../models/Quest')
const Adventurer = require('../models/Adventurer')

const adventurerController = {
    index: (req, res) => {
        var questId = req.params.questId
        Quest.find(questId.populate('adventurers'))
            .then((quest) => {
                res.send(quest.adventurers)
            })
    },
}

module.exports = adventurerController