const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FriendRequestSchema = new Schema(
    {
        source_id: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        destination_id: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        }
    }, {
        timestamps: true,
    }
);

module.exports = mongoose.model("FriendRequest", FriendRequestSchema);