const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostShareSchema = new Schema(
    {
        post_id: {
            type: Schema.Types.ObjectId,
            ref: "Post",
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

module.exports = mongoose.model("PostShare", PostShareSchema);