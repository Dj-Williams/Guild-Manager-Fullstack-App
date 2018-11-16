const Quest = require('../models/Quest')

const questController = {
    index: (req, res) => {
        Quest.find({})
            .then((quests) => {
                res.send(quests)
            })
    }, 
    show: (req, res) => {
        Quest.findById(req.params.questId)
            .then((quest) => {
                res.send(quest)
            })
    }, 
    // update: (req, res) => {
    //     Quest.findByIdAndUpdate(req.params.questId, req.body)
    //         .then((updatedQuest) => {
    //             updatedQuest.save()
    //             res.send(updatedQuest)
    //         })
    // },
    create: (req, res) => {
        Quest.create(req.body)
            .then((quest) => {
                res.send(quest)
            })
    }


}

module.exports = questController