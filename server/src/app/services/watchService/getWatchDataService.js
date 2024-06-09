const User = require("../../models/User");
const Video = require("../../models/Video");
const Comment = require("../../models/Comment");
const Reaction = require("../../models/Reaction");
const VideoSaved = require("../../models/VideoSaved");

const getUserDataService = require("../userService/getUserDataService");
const getVideoDataService = require("../videoService/getVideoDataService");

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

                const userData = await User.findOne({ video_list: video._id })
                const savedData = await VideoSaved.find({ video_id: video._id });
                const commentData = await Comment.find({ destination_id: video._id });
                const reactionData = await Reaction.find({ destination_id: video._id });

                const formattedUserData = await getUserDataService.getFormattedUserDataByRawData(userData);

                const formattedSavedData = savedData.map((video) => video.user_id);
                const formattedCommentData = commentData.map((comment) => comment.source_id);
                const formattedReactionData = reactionData.map((reaction) => reaction.source_id);

                return {
                    ...otherProps,
                    user: formattedUserData,
                    saved: formattedSavedData,
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
                const savedData = await VideoSaved.find({ video_id: video.video_id });
                const commentData = await Comment.find({ destination_id: video.video_id });
                const reactionData = await Reaction.find({ destination_id: video.video_id });

                const formattedUserData = await getUserDataService.getFormattedUserDataByRawData(userData);
                const formattedVideoData = await getVideoDataService.getFormattedVideoDataById(video.video_id);

                const formattedSavedData = savedData.map((video) => video.user_id);
                const formattedCommentData = commentData.map((comment) => comment.source_id);
                const formattedReactionData = reactionData.map((reaction) => reaction.source_id);

                return {
                    ...formattedVideoData,
                    user: formattedUserData,
                    saved: formattedSavedData,
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