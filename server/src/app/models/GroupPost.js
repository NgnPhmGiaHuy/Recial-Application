const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GroupPostSchema = new Schema(
    {
        group_id: {
            type: Schema.Types.ObjectId,
            ref: "Group",
            required: true,
        },
        post_id: {
            type: Schema.Types.ObjectId,
            ref: "Post",
            required: true,
        }
    }, {
        timestamps: true,
    }
)

module.exports = mongoose.model("GroupPost", GroupPostSchema);