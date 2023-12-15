const profileProperties = {
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    profile_picture_url: {
        type: String,
        default: "https://storage.googleapis.com/recial-application/avatar-default.png",
    },
    profile_cover_photo_url: {
        type: String,
    },
};

module.exports = profileProperties;