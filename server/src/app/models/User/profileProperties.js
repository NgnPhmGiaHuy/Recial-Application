const profileProperties = {
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
    },
    date_of_birth: {
        type: Date,
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