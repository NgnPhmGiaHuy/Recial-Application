const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VideoSchema = new Schema(
    {
        video_url: {
            type: String,
            required: true,
        },
        video_title: {
            type: String,
            required: true,
        },
        video_privacy: {
            type: String,
            required: true,
            default: "Public",
            enum: ["Public", "Private", "Friends", "OnlyMe"],
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
        video_views: [{
            user: {
                type: Schema.Types.ObjectId,
                ref: "User",
            },
            viewed_at: {
                type: Date,
                default: null,
            }
        }],
        video_shares: [{
            user: {
                type: Schema.Types.ObjectId,
                ref: "User",
            },
            shared_at: {
                type: Date,
                default: null,
            },
        }],
        video_tags: [{
            type: Schema.Types.ObjectId,
            ref: "Tag",
        }],
        video_location: {
            type: Schema.Types.ObjectId,
            ref: "Location",
        },
    }, {
        timestamps: true,
    }
);

module.exports = mongoose.model("Video", VideoSchema);