const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StorySchema = new Schema(
    {
        story_media_url: {
            type: String,
            required: true,
        },
        story_title: {
            type: String,
        },
        story_description: {
            type: String,
        },
        story_type: {
            type: Schema.Types.ObjectId,
            ref: "Type",
        },
        story_duration: {
            type: Number,
        },
        story_privacy: {
            type: String,
            required: true,
            default: "Public",
            enum: ["Public", "Private", "Friends", "OnlyMe"],
        },
        story_views: [{
            user: {
                type: Schema.Types.ObjectId,
                ref: "User",
            },
            viewed_at: {
                type: Date,
                default: null,
            }
        }],
        story_shares: [{
            user: {
                type: Schema.Types.ObjectId,
                ref: "User",
            },
            shared_at: {
                type: Date,
                default: null,
            },
        }],
        story_tags: [{
            type: Schema.Types.ObjectId,
            ref: "Tag",
        }],
        story_location: {
            type: Schema.Types.ObjectId,
            ref: "Location",
        }
    }, {
        timestamps: true,
    }
);

module.exports = mongoose.model("Story", StorySchema);