const express = require('express')

const messageController = require('../controllers/message-controller')
const message = require('../models/message')

const router = express.Router()

router.post('/message', messageController.createMessage)
router.get('/messages', messageController.getMessages)

module.exports = router
