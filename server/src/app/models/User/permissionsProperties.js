const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const permissionsProperties = {
    roles: [{
        type: Schema.Types.ObjectId,
        ref: "Role",
        required: true,
    }],
};

module.exports = permissionsProperties