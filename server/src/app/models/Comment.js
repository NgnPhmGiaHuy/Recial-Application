const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema(
    {
        source_id: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        destination_id: {
            type: Schema.Types.ObjectId,
            required: true,
        },
        comment_text: {
            type: String,
            required: true,
        },
        comment_tags: [{
            type: Schema.Types.ObjectId,
            ref: "Tag",
        }]
    }, {
        timestamps: true,
    }
);

module.exports = mongoose.model("Comment", CommentSchema);