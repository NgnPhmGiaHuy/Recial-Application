const userProperties = {
    email: {
        type: String,
        unique: true,
        required: true,
    },
    username: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
    refreshToken: {
        type: String,
    },
};

module.exports = userProperties;