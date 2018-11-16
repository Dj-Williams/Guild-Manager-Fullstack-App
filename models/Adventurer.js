const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Adventurer = new Schema({
    image: String,
    name: String,
    classSpecialization: String,
    biography: String,
})

module.exports = mongoose.model('Adventurer', Adventurer)