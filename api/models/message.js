const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Message = new Schema({
    user: { type: String, required: true },
    datetime: { type: Date, default: Date.now(), required: true },
    content: { type: String, required: true },
})

module.exports = mongoose.model('messages', Message)
