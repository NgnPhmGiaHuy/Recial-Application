const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema(
    {
        event_name: {
            type: String,
            required: true,
        },
        event_color: {
            type: String,
            default: "red",
            required: true,
        },
        event_privacy: {
            type: String,
            required: true,
            default: "Public",
            enum: ["Public", "Private"],
        },
        event_description: {
            type: String,
        },
        event_start_datetime: {
            type: Date,
            required: true,
        },
        event_end_datetime: {
            type: Date,
            required: true,
        },
        event_cover_picture_url: {
            type: String,
            required: true,
        },
        event_tags: [{
            type: Schema.Types.ObjectId,
            ref: "Tag",
        }],
        event_location: {
            type: Schema.Types.ObjectId,
            ref: "Location",
        },
    }, {
        timestamps: true,
    },
);

module.exports = mongoose.model("Event", EventSchema);