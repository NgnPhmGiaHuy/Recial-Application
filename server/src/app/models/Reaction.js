const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReactionSchema = new Schema(
    {
        source_id: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        destination: {
            type: {
                type: Schema.Types.ObjectId,
                ref: "Type",
                required: true,
            },
            destination_id: {
                type: Schema.Types.ObjectId,
                required: true,
            },
        },
        reaction_type: {
            type: Schema.Types.ObjectId,
            ref: "Type",
            required: true,
        },
    }, {
        timestamps: true,
    }
);

module.exports = mongoose.model("Reaction", ReactionSchema);