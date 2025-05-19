const express = require('express');
const User = require('../../models/user');




const userRouter = express.Router(); //create a new router object

userRouter.get('/users', async (req, res) => { //create a new user

    const users = await User.find({}) //find all users in the database
    if (users.length === 0) { //if user not found
        return res.status(404).send("User not found"); //send response with status 404 (not found) and error message
    } else {
        return res.status(200).send(users); //send response with status 200 (OK) and success message
    }



})

module.exports = userRouter; //export user router to use in other files
