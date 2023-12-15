const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TagSchema = new Schema(
    {
        tag_name: {
            type: String,
            unique: true,
            required: true,
        },
        tag_description: {
            type: String,
        },
    }, {
        timestamps: true,
    }
);

module.exports = mongoose.model("Tag", TagSchema);
