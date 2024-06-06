const moment = require("moment/moment");

const Story = require("../../models/Story");

const generalDataService = require("../generalDataService");
const getUserDataService = require("../userService/getUserDataService");

class GetStoryDataService {
    getRawStoryData = async (storyId) => {
        try {
            const storyData = await Story.findById(storyId);

            return storyData;
        } catch (error) {
            console.error("Error in getRawStoryData: ", error);
            throw new Error("Failed to fetch raw story data");
        }
    }

    getFormattedStoryDataById = async (storyId) => {
        try {
            const storyData = await this.getRawStoryData(storyId);

            const formattedStoryData = {
                _id: storyData._id,
                media_type: "Photo",
                media_url: storyData.story_media_url,
                media_title: storyData.story_title,
                media_description: storyData.story_description,
                media_duration: storyData.story_duration,
                media_privacy: storyData.story_privacy,
                media_tags: storyData.story_tags,
                media_location: storyData.story_location,
            }

            return formattedStoryData;
        } catch (error) {
            console.error("Error in getRawStoryDataById: ", error);
            throw new Error("Failed to fetch raw story data");
        }
    }

    getFormattedStoryDataByIdAndUserId = async (userId, setId) => {
        try {
            const storyProps = await this.getRawStoryData(setId);
            const userProps = await getUserDataService.getRawUserData(userId);

            const userStories = await Promise.all(userProps.story_list.map(async (story) => {
                const storyProps = await Story.findById(story);

                const oneDayInMilliseconds = 24 * 60 * 60 * 1000;
                const isRecent = (new Date() - new Date(storyProps.updatedAt)) <= oneDayInMilliseconds;

                return isRecent ? storyProps._id : null;
            }));

            const recentUserStoryProps = userStories.filter(story => story !== null);

            const commentData = await generalDataService.getCommentData(storyProps._id);
            const reactionData = await generalDataService.getReactionData(storyProps._id);
            const userData = await getUserDataService.getFormattedUserDataByRawData(userProps);

            const mediaProps = {
                _id: storyProps._id,
                media_type: "Story",
                media_title: storyProps.story_title,
                media_url: storyProps.story_media_url,
                media_description: storyProps.story_description,
                media_thumbnail: "",
                media_resolution: "",
                user: userData,
                comment: commentData,
                reaction: reactionData,
                created_at: storyProps.createdAt,
                updated_at: storyProps.updatedAt,
                media_recent: recentUserStoryProps,
            };

            return mediaProps;
        } catch (error) {
            console.error("Error in getFormattedStoryDataByIdAndUserId: ", error);
            throw new Error("Failed to fetch story data");
        }
    };

    getFormattedUserFeedStoryDataByUserId = async (userId) => {
        try {
            const userProps = await getUserDataService.getRawUserData(userId);

            const oneDayAgo = moment().subtract(1, "days");

            const userFriendProps = await Promise.all(userProps.friends.map(async friend => {
                const friendProps = await getUserDataService.getRawUserData(friend);

                if (friendProps && friendProps.story_list && friendProps.story_list.length > 0) {
                    const friendStoryProps = await Promise.all(friendProps.story_list.map(async story => {
                        const storyProps = await Story.findById(story);

                        if (storyProps && moment(storyProps.updatedAt).isSameOrAfter(oneDayAgo)) {
                            const { createdAt, updatedAt, ...otherStoryProps } = storyProps._doc;
                            return {
                                story: {
                                    ...otherStoryProps,
                                    created_at: createdAt,
                                    updated_at: updatedAt,
                                }
                            };
                        } else {
                            return null;
                        }
                    }));

                    const filteredFriendStoryProps = friendStoryProps.filter(Boolean);

                    if (filteredFriendStoryProps.length > 0) {
                        const userData = await getUserDataService.getFormattedUserDataById(friendProps._id);

                        return {
                            user: userData,
                            stories: filteredFriendStoryProps,
                        };
                    }
                }
                return null;
            }));

            return userFriendProps.filter(Boolean);
        } catch (error) {
            console.error("Error in getFormattedUserFeedStoryDataByUserId: ", error);
            throw new Error("Failed to fetch user feed story data");
        }
    };
}

module.exports = new GetStoryDataService();