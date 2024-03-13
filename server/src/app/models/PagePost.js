const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PagePostSchema = new Schema(
    {
        page_id: {
            type: Schema.Types.ObjectId,
            ref: "Page",
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

module.exports = mongoose.model("PagePost", PagePostSchema);