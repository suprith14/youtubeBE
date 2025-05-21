

const express = require('express');
const authrouter = express.Router(); //create a new router object
const User = require('../../models/user'); //import user model to use in the app

const bcrypt = require('bcrypt'); //import bcrypt to hash password


authrouter.post('/signup', async (req, res) => { //create a new route for signup
    console.log("signup called", req.body) //log signup called message to console


    const hashedPassword = await bcrypt.hash(req.body.password, 10); //hash password using bcrypt with 10 rounds of salt

    const user = new User({
        firstName: req.body.firstName, //get first name from request body
        lastName: req.body.lastName, //get last name from request body
        email: req.body.email, //get email from request body
        age: req.body.age, //get age from request body
        password: hashedPassword //get password from request body
    })
    console.log("first name "+fisrtName);
    console.log("lastName "+lastName);
    console.log(" email "+email);
    console.log("password "+password);


    user.save().then(() => {
        console.log("user signup created successfully") //log success message to console
        res.status(201).json({ status: 200, result: 'successfully created' }) //send response with status 201 (created) and user data
    }).catch((err) => {
        console.log(err.message); //log error message to console
        res.status(500).json({ status: 400, result: 'user not created' }) //send response with status 500 (internal server error) and error message
    })
})//create a new user object and save it to database


module.exports = authrouter; //export auth router to use in other files
