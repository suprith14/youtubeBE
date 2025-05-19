const mongoose = require('mongoose');


const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://admin:secret@192.168.31.230:27017/NodeBE") //connect to MongoDB database
        console.log("MongoDB connected successfully")
    } catch (err) {

        console.log("MongoDB not connected ",err.message);
    }
}


module.exports = connectDB; //export the connectDB function to use in other files