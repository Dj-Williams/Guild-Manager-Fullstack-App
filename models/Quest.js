const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Quest = new Schema({
    questName: String,
    description: String,
    adventurer: {
        type: Schema.Types.ObjectId,
        ref: 'Adventurer'
    }
})

module.exports = mongoose.model('Quest', Quest)