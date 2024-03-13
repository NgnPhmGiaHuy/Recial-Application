const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema(
    {
        post_title: {
            type: String,
        },
        post_content: {
            type: String,
        },
        post_privacy: {
            type: String,
            required: true,
            default: "Public",
            enum: ["Public", "Private", "Friends", "Specific_Friends"],
        },
        post_tags: [{
            type: Schema.Types.ObjectId,
            ref: "Tag",
        }],
        post_photos: [{
            type: Schema.Types.ObjectId,
            ref: "Photo",
        }],
        post_location: {
            type: Schema.Types.ObjectId,
            ref: "Location",
        },
        group: {
            type: Schema.Types.ObjectId,
            ref: "Group"
        }
    }, {
        timestamps: true,
    },
);

module.exports = mongoose.model("Post", PostSchema);