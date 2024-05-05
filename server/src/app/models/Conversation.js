const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ConversationSchema = new Schema(
    {
        participants: [{
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        }],
        messages: [{
            type: Schema.Types.ObjectId,
            ref: "Message",
        }],
        conversation_name: {
            type: String,
        },
        conversation_picture_url: {
            type: String,
        }
    }, {
        timestamps: true,
    }
);

module.exports = mongoose.model("Conversation", ConversationSchema);