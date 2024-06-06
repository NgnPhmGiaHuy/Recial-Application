const User = require("../../models/User");
const Video = require("../../models/Video");
const VideoSaved = require("../../models/VideoSaved");

const getVideoDataService = require("../videoService/getVideoDataService");
const generalDataService = require("../generalDataService");
const getUserDataService = require("../userService/getUserDataService");

class GetWatchDataService {
    getWatchData = async () => {
        try {
            const watchData = await Video.aggregate([
                { $match: { video_privacy: "Public" } },
                { $sample: { size: 5} },
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

    getUserWatchSavedData = async (userId, page, watchPerPage) => {
        try {
            const skipWatch = (parseInt(page) - 1) * watchPerPage;

            const watchSavedProps = await VideoSaved.find({ user_id: userId })
                .sort({ createdAt: -1 })
                .skip(skipWatch)
                .limit(watchPerPage)

            const formattedWatchSavedData = await Promise.all(watchSavedProps.map(async (video) => {
                const userData = await User.findOne({ video_list: video.video_id })

                const formattedUserData = await getUserDataService.getFormattedUserDataByRawData(userData);
                const formattedVideoData = await getVideoDataService.getFormattedVideoDataById(video.video_id);
                const formattedCommentData = await generalDataService.getCommentData(video.video_id);
                const formattedReactionData = await generalDataService.getReactionData(video.video_id);

                return {
                    ...formattedVideoData,
                    user: formattedUserData,
                    comment: formattedCommentData,
                    reaction: formattedReactionData,
                }
            }))

            return formattedWatchSavedData;
        } catch (error) {
            console.error("Error in getUserWatchSavedData: ", error);
            throw new Error("Failed to get user watch saved data");
        }
    }
}

module.exports = new GetWatchDataService();