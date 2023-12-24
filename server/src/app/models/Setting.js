const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const privacyProperties = require("./Setting/privacyProperties");
const accountProperties = require("./Setting/accountProperties");
const contentProperties = require("./Setting/contentProperties");
const appearanceProperties = require("./Setting/appearanceProperties");

const SettingSchema = new Schema(
    {
        source_id: {
            type: Schema.Types.ObjectId,
            ref: "User",
            unique: true,
            required: true,
        },
        ...accountProperties,
        ...contentProperties,
        ...privacyProperties,
        ...appearanceProperties,
    }, {
        timestamps: true,
    },
);

module.exports = mongoose.model("Setting", SettingSchema);