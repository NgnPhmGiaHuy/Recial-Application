const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VideoViewSchema = new Schema(
    {
        video_id: {
            type: Schema.Types.ObjectId,
            ref: "Video",
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

module.exports = mongoose.model("VideoView", VideoViewSchema);