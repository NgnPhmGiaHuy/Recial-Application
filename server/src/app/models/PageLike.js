const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PageLikeSchema = new Schema(
    {
        page_id: {
            type: Schema.Types.ObjectId,
            ref: "Page",
            required: true,
        },
        user_id: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    }, {
        timestamps: true,
    }
)

module.exports = mongoose.model("PageLike", PageLikeSchema);