const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const socialProperties = {
    friends: [{
        type: Schema.Types.ObjectId,
        ref: "User",
    }],
    followers: [{
        type: Schema.Types.ObjectId,
        ref: "User",
    }],
    following: [{
        type: Schema.Types.ObjectId,
        ref: "User",
    }],
};

module.exports = socialProperties;