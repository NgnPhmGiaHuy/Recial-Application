const userProperties = {
    email: {
        type: String,
        unique: true,
        required: true,
    },
    username: {
        type: String,
    },
    isOAuthUser: {
        type: Boolean,
        default: false,
    },
    password: {
        type: String,
        required: function() { return !this.isOAuthUser; },
    },
    refreshToken: {
        type: String,
    },
};

module.exports = userProperties;