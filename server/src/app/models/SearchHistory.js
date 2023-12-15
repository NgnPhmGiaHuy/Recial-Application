const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SearchHistorySchema = new Schema(
    {
        user_id: {
            type: Schema.Types.ObjectId,
            ref: "User",
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