const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        email: {
            type: String,
            unique: true,
            required: true,
        },
        username: {
            type: String,
        },
        password: {
            type: String,
            required: true,
        },
        firstname: {
            type: String,
        },
        lastname: {
            type: String,
        },
        profile_picture_url: {
            type: String,
        },
        location: {
            type: Schema.Types.ObjectId,
            ref: "Location",
        }
    }, {
        timestamps: true,
    },
);

module.exports = mongoose.model('User', UserSchema);