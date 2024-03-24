const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StatusSchema = new Schema(
    {
        status_name: {
            type: String,
            unique: true,
            required: true,
        },
        status_description: {
            type: String,
        }
    }, {
        timestamps: true,
    }
);

module.exports = mongoose.model("Status", StatusSchema);