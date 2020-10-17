const mongoose = require('mongoose')
const Schema = mongoose.Schema

const message = require('./message')

const Channel = new Schema(
    {
        name: { type: String, required: true, unique: true },
        messages: [message],
    },
    { timestamps: true }
)

module.exports = mongoose.model('channels', Channel)
