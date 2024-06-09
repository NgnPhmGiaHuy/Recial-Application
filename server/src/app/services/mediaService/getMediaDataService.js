const User = require("../../models/User");

class GetMediaDataService {
    getFormattedMediaAuthorByUserId = async (userId) => {
        try {
            const user = await User.findById(userId);

            return {
                _id: user._id,
                profile: {
                    username: user.username,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    profile_picture_url: user.profile_picture_url,
                },
                follower: user.followers,
            };
        } catch (error) {
            console.error("Error in getFormattedPhotoAuthorByUserId: ", error);
            throw new Error("Failed to format user data by ID");
        }
    }
}

module.exports = new GetMediaDataService();