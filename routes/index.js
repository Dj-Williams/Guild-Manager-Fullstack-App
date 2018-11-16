// This express router determines what data we're trying to get from the database. This is all about the raw JSON data from mongoDB 
const express = require('express')
const router = express.Router()

// Importing the controllers to be routed here. 
const questController = require('../controllers/questController') 
const adventurerController = require('../controllers/adventurerController')

// This is the Quest router tree. 
router.get('/api/quests', questController.index)
router.post('/api/quests/', questController.create)
router.get('/api/quests/:questId', questController.show)
router.patch('/api/quests/:questId', questController.update)
router.delete('/api/quests/:questId', questController.delete)

// // This is the Adventurer router tree.
router.get('/api/quests/:questId/adventurers', adventurerController.index)
router.post('/api/quests/:questId/adventurers', adventurerController.create)
router.get('/api/quests/:questId/adventurers/:adventurerId', adventurerController.show)
// router.patch('/api/adventurers/:adventurerId', adventurerController.update)
// router.delete('/api/quests/:questId/adventurers', adventurerController.delete)

module.exports = router
