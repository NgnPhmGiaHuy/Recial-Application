const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventMemberSchema = new Schema(
    {
        event_id: {
            type: Schema.Types.ObjectId,
            ref: "Event",
            required: true,
        },
        user: {
            user_id: {
                type: Schema.Types.ObjectId,
                ref: "User",
                required: true,
            },
            user_role: {
                type: Schema.Types.ObjectId,
                ref: "Role",
                required: true,
            },
        },
    }, {
        timestamps: true,
    }
);

EventMemberSchema.pre("save", async function(next) {
    if (this.isNew && !this.user_role.length) {
        try {
            const defaultRole = await mongoose.model("Role").findOne({ roleName: "event_member" });

            if (defaultRole) {
                this.user_role.push(defaultRole._id);
            }
        } catch (error) {
            console.error('Error while setting default role:', error);
        }
    }

    next();
});

module.exports = mongoose.model("EventMember", EventMemberSchema);