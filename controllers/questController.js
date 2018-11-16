const Quest = require('../models/Quest')

const questController = {
    index: (req, res) => {
        Quest.find({})
            .then((quests) => {
                res.send(quests)
            })
    }, 

}

module.exports = questController