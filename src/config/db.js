const mongoose = require('mongoose');


const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://admin:secret@192.168.31.230:27017/NodeBE?authSource=admin", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
});        console.log("MongoDB connected successfully")
    } catch (err) {

        console.log("MongoDB not connected ",err.message);
    process.exit(1); //exit the process with error code 1
    }
}


module.exports = connectDB; //export the connectDB function to use in other files