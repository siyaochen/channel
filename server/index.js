const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const messageRouter = require('./routes/message-router')
const message = require('./models/message')

const app = express()
const apiPort = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'DB connection error: '))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', messageRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
