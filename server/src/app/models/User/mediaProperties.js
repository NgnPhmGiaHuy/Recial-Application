const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mediaProperties = {
    photo_list: [{
        type: Schema.Types.ObjectId,
        ref: "Photo",
    }],
    video_list: [{
        type: Schema.Types.ObjectId,
        ref: "Video",
    }],
    story_list: [{
        type: Schema.Types.ObjectId,
        ref: "Story",
    }],
    post_list: [{
        type: Schema.Types.ObjectId,
        ref: "Post",
    }],
};

module.exports = mediaProperties;