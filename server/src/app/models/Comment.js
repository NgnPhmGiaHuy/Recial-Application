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
        },
        comment_tags: [{
            type: Schema.Types.ObjectId,
            ref: "Tag",
        }],
        comment_content_url: {
            type: String,
            ref: "Photo",
        }
    }, {
        timestamps: true,
    }
);

module.exports = mongoose.model("Comment", CommentSchema);