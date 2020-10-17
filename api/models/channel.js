const mongoose = require('mongoose')
const { model } = require('../db/index.js')
const Schema = mongoose.Schema

const message = require('./models/message.js')

const Channel = new Schema(
    {
        name: { type: String, required: true, unique: true },
        messages: [message],
    },
    { timestamps: true }
)

module.exports = mongoose.model('channels', Channel)
