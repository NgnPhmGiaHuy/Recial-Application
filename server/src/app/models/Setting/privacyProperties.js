const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const privacyProperties = {
    privacy: {
        friend_request: {
            type: String,
            required: true,
            default: "Everyone",
            enum: ["Everyone", "Friends_of_friends", "None"],
        },
        post_visibility: {
            type: String,
            required: true,
            default: "Public",
            enum: ["Public", "Private", "Friends", "Specific_Friends"],
        },
        profile_privacy: {
            type: String,
            required: true,
            default: "Public",
            enum: ["Public", "Private", "Friends", "Specific_Friends"],
        },
        mute_list: [
            {
                type: Schema.Types.ObjectId,
                ref: "User",
            },
        ],
        block_list: [
            {
                type: Schema.Types.ObjectId,
                ref: "User",
            },
        ],
    },
}

module.exports = privacyProperties;