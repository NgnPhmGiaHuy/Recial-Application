const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema(
    {
        source_id: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        message_content: {
            type: String,
        },
        message_content_url: [{
            type: Schema.Types.ObjectId,
            ref: "Photo",
        }],
        message_tags: [{
            type: Schema.Types.ObjectId,
            ref: "Tag",
        }],
        message_status: {
            type: Schema.Types.ObjectId,
            ref: "Status",
        },
        message_hidden_by: [{
            user_id: {
                type: Schema.Types.ObjectId,
                ref: "User",
            },
            status_id: {
                type: Schema.Types.ObjectId,
                ref: "Status",
            }
        }]
    }, {
        timestamps: true
    },
);

MessageSchema.pre("save", async function(next) {
    if (this.isNew && !this.message_status) {
        try {
            const defaultStatus = await mongoose.model("Status").findOne({ status_name: "Sent" });

            if (defaultStatus) {
                this.message_status = defaultStatus._id;
            }
        } catch (error) {
            console.error("Error while setting default message status:", error);
        }
    }

    next();
});

module.exports = mongoose.model("Message", MessageSchema);