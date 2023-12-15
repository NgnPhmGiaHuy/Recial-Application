const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AttachmentSchema = new Schema(
    {
        attachment_name: {
            type: String,
        },
        attachment_url: {
            type: String,
        },
        attachment_types: [{
            type: Schema.Types.ObjectId,
            ref: "Type",
        }],
    }, {
        timestamps: true,
    },
);

module.exports = mongoose.model("Attachment", AttachmentSchema);