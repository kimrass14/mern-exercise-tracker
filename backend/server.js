//importing express and cors
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose') //add mongoose to help connect to mongoDB

//configures so we can have environment variables in the .env file
require('dotenv').config()

//creating express server
const app = express()
const port = process.env.PORT || 5000

//middleware
app.use(cors())
app.use(express.json()) //allows our server to send and receive json

//
const uri = process.env.ATLAS_URI //get from mongoDB, setting environment variable. Add .env file and get URI / connection string from mongoDB
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
const connection = mongoose.connection
connection.once('open', () => {
    console.log("MongoDB database connection established successfully")
})

//require the files
const exercisesRouter = require('./routes/exercises')
const usersRouter = require('./routes/users')

//using the files at this url route
app.use('/exercises', exercisesRouter)
app.use('/users', usersRouter)

//what starts the server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})