require('dotenv').config() //import dotenv to use .env file
const express = require('express');  //import express to create server
const connectDB = require('./src/config/db');
const cors = require('cors');


const User = require('./src/models/user'); //import user model to use in the app
const port = process.env.PORT; //port number from .env file 
const app = express(); //initialize express app
app.use(cors());
app.use(express.json()) // To parse JSON data
app.use(express.urlencoded({ extended: true }));


//import userRouter from './src/Routes/userRoutes'; //import user router to use in the app
//app.use('/api', userRouter); //use user router for all routes starting with /api
const userRouter = require('./src/Routes/userRouter/userRoutes'); //import user router to use in the app
const authRouter = require('./src/Routes/authRouter/signup'); //import auth router to use in the app
const loginRouter = require('./src/Routes/authRouter/login'); //import auth router to use in the app


app.use('/', userRouter); //use user router for all routes starting with /api
app.use('/', authRouter); //use auth router for all routes starting with /api
app.use('/', loginRouter); //use auth router for all routes starting with /api






app.get('/users', (req, res) => {

    User.forEach((user) => {
        console.log(user); //log user data to console
    })
    res.status(200).json(User); //send response with status 200 (OK) and user data



    // res.send('Hello World!') //send Hello World message to the client
})
app.get('/api', (req, res) => {
    res.json({ message: 'Hello from the API!' }) //send JSON response to the client
})


connectDB().then(() => {
    //To start the server
    app.listen(port, () => {
        console.log(`server is running on port ${port} `)
    })
}).catch((ere) => {

    console.log("Error connecting to MongoDB", err.message); //log error message to console
})//connect to MongoDB database




