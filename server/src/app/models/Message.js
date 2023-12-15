const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema(
    {
        source: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        destination_id: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        message_content: {
            type: String,
            required: true,
        },
        message_tags: [{
            type: Schema.Types.ObjectId,
            ref: "Tag",
        }],
        is_read: {
            type: Boolean,
            default: false,
            required: true,
        },
        is_mute: {
            type: Boolean,
            default: false,
            required: true,
        },
    }, {
        timestamps: true
    },
);

module.exports = mongoose.model("Message", MessageSchema);