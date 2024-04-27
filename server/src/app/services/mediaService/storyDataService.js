const moment = require("moment/moment");

const Story = require("../../models/Story");

const getUserDataService = require("../userService/getUserDataService");
const generalDataService = require("../generalDataService");

class StoryDataService {
    getStoryData = async (userId, setId) => {
        const storyProps = await Story.findById(setId);
        const userProps = await getUserDataService.getRawUserData(userId);

        const userStories = await Promise.all(userProps.story_list.map(async (story) => {
            const storyProps = await Story.findById(story);

            const oneDayInMilliseconds = 24 * 60 * 60 * 1000;
            const isRecent = (new Date() - new Date(storyProps.updatedAt)) <= oneDayInMilliseconds;

            return isRecent ? storyProps._id : null;
        }));

        const recentUserStoryProps = userStories.filter(story => story !== null);

        const mediaProps = {
            _id: storyProps._id,
            user: {
                _id: userProps._id,
                profile: {
                    username: userProps.username,
                    firstname: userProps.firstname,
                    lastname: userProps.lastname,
                    profile_picture_url: userProps.profile_picture_url,
                }
            },
            media_name: storyProps.story_title,
            media_type: "Story",
            media_text: storyProps.story_description,
            media_url: storyProps.story_media_url,
            comment:  await generalDataService.getComment(storyProps._id),
            reaction: await generalDataService.getReaction(storyProps._id),
            created_at: storyProps.createdAt,
            updated_at: storyProps.updatedAt,
            media_recent: recentUserStoryProps,
        }

        return mediaProps;
    };

    getUserFeedStoryData = async (userId) => {
        const userProps = await getUserDataService.getRawUserData(userId);

        const oneDayAgo = moment().subtract(1, 'days');

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
                    return {
                        user: await getUserDataService.getFormattedUserData(friendProps._id),
                        stories: filteredFriendStoryProps,
                    };
                }
            }
            return null;
        }));

        return userFriendProps.filter(Boolean);
    };
}

module.exports = new StoryDataService();