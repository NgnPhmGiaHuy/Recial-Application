const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PhotoSavedSchema = new Schema(
    {
        photo_id: {
            type: Schema.Types.ObjectId,
            ref: "Photo",
            required: true,
        },
        user_id: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    }, {
        timestamps: true,
    },
);

module.exports = mongoose.model("PhotoSaved", PhotoSavedSchema);