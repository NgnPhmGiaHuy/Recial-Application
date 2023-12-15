const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TypeSchema = new Schema(
    {
        type_name: {
            type: String,
            unique: true,
            required: true,
        },
        type_description: {
            type: String,
        },
    }, {
        timestamps: true,
    }
);

module.exports = mongoose.model("Type", TypeSchema);