const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StoryShareSchema = new Schema(
    {
        story_id: {
            type: Schema.Types.ObjectId,
            ref: "Story",
            required: true,
        },
        user_id: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    }, {
        timestamps: true,
    },
);

module.exports = mongoose.model("StoryShare", StoryShareSchema);