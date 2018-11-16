const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Quest = new Schema({
    questName: String,
    description: String,
    adventurers: [{
        type: Schema.Types.ObjectId,
        ref: 'Adventurer'
    }]
})

module.exports = mongoose.model('Quest', Quest)