require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.once('open', () => (
    console.log('Mongoose is now connected to MongoDb')
))

mongoose.connection.on('error', (error) => {
    console.error(`MongoDB had a connection error boi! It's probably beacuse of this: ${error}`)
    process.exit(-1)
})

module.exports = mongoose