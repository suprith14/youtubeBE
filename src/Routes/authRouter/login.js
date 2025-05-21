

const express = require('express');
const bcrypt = require('bcrypt'); //import bcrypt to hash password

const loginrouter = express.Router(); //create a new router object
const User = require('../../models/user'); //import user model to use in the app


loginrouter.get('/login', async (req, res) => { //create a new route for login


    
    const { email, password } = req.query; //get email and password from request body
    const user = await User.findOne({ email: email }); //find user by email in the database
    console.log("login  called")
    console.log("user", JSON.stringify(user))
    console.log("User: fron fe", user);
    console.log("Password from DB:", user?.password);
    console.log("Password from input:", password);


    if (user.length === 0) { //if user not found
        return res.status(404).json("User not found"); //send response with status 404 (not found) and error message
    } else {
        const match = await bcrypt.compare(password, user.password);
        console.log("match", match)


        if (match) { //if password matches
            return res.status(200).json({
                status: 200, user: user

            }); //send response with status 200 (OK) and success message
        } else {
            return res.status(401).json("Invalid password");//send response with status 401 (unauthorized) and error message
        }
    }

}
) //create a new user object and save it to database


module.exports = loginrouter; //export auth router to use in other files
