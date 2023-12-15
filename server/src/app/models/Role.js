const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RoleSchema = new Schema(
    {
        role_name: {
            type: String,
            unique: true,
            required: true,
        },
        role_permissions: {
            type: String,
        },
    }, {
        timestamps: true,
    },
);

module.exports = mongoose.model("Role", RoleSchema);