const mongoose = require("mongoose")

const connectToDatabase = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/sms")
        console.log("Database connected successfully");
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectToDatabase;