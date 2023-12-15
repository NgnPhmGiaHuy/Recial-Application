const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactProperties = {
    phone_number: {
        type: String,
    },
    description: {
        type: String,
    },
    short_description: {
        type: String,
    },
    location: {
        type: Schema.Types.ObjectId,
        ref: "Location",
    },
};

module.exports = contactProperties;