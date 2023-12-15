const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GroupSchema = new Schema(
    {
        group_name: {
            type: String,
            required: true,
        },
        group_description: {
            type: String,
        },
        group_privacy: {
            type: String,
            required: true,
            default: "Public",
            enum: ["Public", "Private"],
        },
        group_picture_url: {
            type: String,
            required: true,
        },
        group_cover_picture_url: {
            type: String,
            required: true,
        },
        group_tags: [{
            type: Schema.Types.ObjectId,
            ref: "Tag",
        }],
        group_location: {
            type: Schema.Types.ObjectId,
            ref: "Location",
        },
    }, {
        timestamps: true,
    }
);

module.exports = mongoose.model("Group", GroupSchema);