// This express router determines what data we're trying to get from the database. This is all about the raw JSON data from mongoDB 
const express = require('express')
const router = express.Router()

// Importing the controllers to be routed here. 
const questController = require('../controllers/questController') 
const adventurerController = require('../controllers/adventurerController')

// This is the Quest router tree. 
router.get('/api/quests', userController.index)
router.post('/api/quests/', userController.create)
router.get('/api/quests/:questId', userController.show)
router.patch('/api/quests/:questId', userController.update)
router.delete('/api/quests/:questId', userController.delete)

module.exports = router
