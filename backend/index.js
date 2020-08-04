const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
// const db = require('./db/models')
const taskRoutes = require('./db/routes/task')
const userRoutes = require('./db/routes/user')

// Connect to mongoDB
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/myAngular', { useNewUrlParser: true }).then(() => {
  console.log('Connected to MongoDB SUCCESSFULLY')
}).catch(e => console.log('Error white attempting to connect to MongoDB'))
mongoose.set('useCreateIndex', true)
mongoose.set('useFindAndModify', false)

// MIDDLEWARES
app.use(bodyParser.json())
app.use(cors())
app.use('/users', userRoutes)
app.use('/', taskRoutes)

app.get('/', (req, res) => {
  res.send('HELLO')
})
app.listen(3000, () => {
  console.log('Listening on port 3000')
})