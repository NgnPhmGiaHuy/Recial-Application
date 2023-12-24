const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PhotoSchema = new Schema(
    {
        photo_url: {
            type: String,
            required: true,
        },
        photo_title: {
            type: String,
            required: true,
        },
        photo_privacy: {
            type: String,
            required: true,
            default: "Public",
            enum: ["Public", "Private", "Friends", "Specific_Friends"],
        },
        photo_description: {
            type: String,
        },
        photo_tags: [{
            type: Schema.Types.ObjectId,
            ref: "Tag",
        }],
        photo_location: {
            type: Schema.Types.ObjectId,
            ref: "Location",
        },
    }, {
        timestamps: true,
    }
)

module.exports = mongoose.model("Photo", PhotoSchema);