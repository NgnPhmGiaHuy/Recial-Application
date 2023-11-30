const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LocationSchema = new Schema(
    {
        city: {
            type: String,
        },
        state: {
            type: String,
        },
        country: {
            type: String
        },
    }, {
        timestamps: true,
    }
);

module.exports = mongoose.model("Location", LocationSchema);