const User = require("../../models/User");
const Video = require("../../models/Video");

const generalDataService = require("../../services/generalDataService");
const getUserDataService = require("../../services/userService/getUserDataService");

class WatchDataService {
    getWatchData = async () => {
        try {
            const watchData = await Video.aggregate([
                { $match: { video_privacy: "Public" } },
                { $sample: { size: 10 } },
                { $sort: { createdAt: -1 } },
            ]);

            const formattedWatchData = await Promise.all(watchData.map(async (video) => {
                const { createdAt, updatedAt, ...otherProps } = video;

                const userData = await User.find({ video_list: video._id })

                const formattedUserData = await getUserDataService.getFormattedUserDataByRawData(userData[0]);
                const formattedCommentData = await generalDataService.getCommentData(video._id);
                const formattedReactionData = await generalDataService.getReactionData(video._id);

                return {
                    ...otherProps,
                    user: formattedUserData,
                    comment: formattedCommentData,
                    reaction: formattedReactionData,
                    created_at: createdAt,
                    updatedAt: updatedAt,
                }
            }))

            return formattedWatchData;
        } catch (error) {
            console.error("Error in getWatchData: ", error);
            throw new Error("Failed to get watch data");
        }
    }
}

module.exports = new WatchDataService();