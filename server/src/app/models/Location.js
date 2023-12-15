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
        geometry: {
            type: {
                type: String,
                enum: ["Point"],
                required: true,
            },
            coordinates: {
                type: [Number],
                required: true,
            },
        },
    }, {
        timestamps: true,
    }
);

module.exports = mongoose.model("Location", LocationSchema);