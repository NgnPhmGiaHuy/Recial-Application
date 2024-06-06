const mongoose = require("mongoose");
const {tr} = require("@faker-js/faker");
const Schema = mongoose.Schema;

const VideoSchema = new Schema(
    {
        video_url: {
            type: String,
            required: true,
        },
        video_title: {
            type: String,
        },
        video_privacy: {
            type: String,
            required: true,
            default: "Public",
            // enum: ["Public", "Private", "Friends", "Specific_Friends", "Followers", "Only_You"],
        },
        video_size: {
            type: Number,
        },
        video_format: {
            type: String,
        },
        video_description: {
            type: String,
        },
        video_duration: {
            type: Number,
        },
        video_thumbnail: {
            type: String,
        },
        video_resolution: {
            type: String,
        },
        video_tags: [{
            type: Schema.Types.ObjectId,
            ref: "Tag",
        }],
        video_location: {
            type: Schema.Types.ObjectId,
            ref: "Location",
        },
        video_interaction: {
            allow_duet: {
                type: Schema.Types.Boolean,
                default: true,
            },
            allow_stitch: {
                type: Schema.Types.Boolean,
                default: true,
            },
            allow_comments: {
                type: Schema.Types.Boolean,
                default: true,
            },
        }
    }, {
        timestamps: true,
    }
);

module.exports = mongoose.model("Video", VideoSchema);