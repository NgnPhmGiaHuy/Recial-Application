const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PageSchema = new Schema(
    {
        page_name: {
            type: String,
            required: true,
        },
        page_description: {
            type: String,
        },
        page_privacy: {
            type: String,
            required: true,
            default: "Public",
            enum: ["Public", "Private"],
        },
        page_picture_url: {
            type: String,
            required: true,
        },
        page_cover_picture_url: {
            type: String,
            required: true,
        },
        page_tags: [{
            type: Schema.Types.ObjectId,
            ref: "Tag",
        }],
        page_location: {
            type: Schema.Types.ObjectId,
            ref: "Location",
        },
    }, {
        timestamps: true,
    }
)

module.exports = mongoose.model("Page", PageSchema);