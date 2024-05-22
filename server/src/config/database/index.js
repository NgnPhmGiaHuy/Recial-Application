require("dotenv").config();
const mongoose = require("mongoose");

async function connect() {
    try {
        const mongoURI = process.env.NODE_ENV === "production" ? process.env.DATABASE_PRODUCTION_CONNECT_LINK : process.env.DATABASE_LOCAL_CONNECT_LINK;

        console.log(mongoURI)
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connect database successfully!!!");
    } catch (error){
        console.log("Connect database failure!!!");
    }
}

module.exports = {connect};