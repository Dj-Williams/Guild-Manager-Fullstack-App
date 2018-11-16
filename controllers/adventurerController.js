const Adventurer = require('../models/Adventurer')
const Quest = require('../models/Quest')

const adventurerController = {
    index: (req, res) => {
        var questId = req.params.questId
        Quest.findById(questId).populate('adventurers')
        .then((quest) => {
            res.send(quest.adventurers)
        })
        
    }
}

module.exports = adventurerController