const mongoose = require('mongoose'); //import mongoose to create schema and model



const userScheme = mongoose.Schema({  //create a schema for user
    "firstName": {
        type: String,
        required: true
    },
    "lastName": {
        type: String,
        required: true
    },
    "email": {
        type: String,
        required: true
    },
    "age": {
        type: Number,
    },
    "password": {
        type: String,
        required: true
    },
})


const User = mongoose.model('User', userScheme) //create a model for the user schema

module.exports = User; //export the user model to use in other files