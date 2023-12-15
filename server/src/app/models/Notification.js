const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NotificationSchema = new Schema(
    {
        source: {
            type: {
                type: Schema.Types.ObjectId,
                ref: "Type",
                required: true,
            },
            source_id: {
                type: Schema.Types.ObjectId,
                required: true,
            },
        },
        destination_id: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        notification_content: {
            type: String,
            required: true,
        },
        notification_tags: [{
            type: Schema.Types.ObjectId,
            ref: "Tag",
        }],
        notification_type: {
            type: Schema.Types.ObjectId,
            ref: "Type",
            required: true,
        },
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

NotificationSchema.pre("save", async function(next) {
    if (!this.notification_type) {
        try {
            const defaultType = await mongoose.model("Type").findOne({ type_name: "Announcement" });
            if (defaultType) {
                this.notification_type = defaultType._id;
            } else {
                throw new Error("Default type not found");
            }
        } catch (error) {
            console.error('Error while setting default role:', error);
        }
    }
    next();
});


module.exports = mongoose.model("Notification", NotificationSchema);