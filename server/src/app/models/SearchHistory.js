const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SearchHistorySchema = new Schema(
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
            },
            destination_id: {
                type: Schema.Types.ObjectId,
            },
        },
        search_query: {
            type: String,
            required: true,
        },
    }, {
        timestamps: true,
    },
);

module.exports = mongoose.model("SearchHistory", SearchHistorySchema);