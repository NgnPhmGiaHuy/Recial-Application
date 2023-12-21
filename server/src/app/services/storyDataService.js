const moment = require('moment');

const Story = require("../models/Story");
const userDataService = require("../services/userDataService");

async function getStory(user) {
    const userProps = await userDataService.getFullUserById(user._id);

    const oneDayAgo = moment().subtract(1, 'days');

    const userFriendProps = await Promise.all(userProps.friends.map(async (friend) => {
        const friendProps = await userDataService.getFullUserById(friend);

        if (friendProps && friendProps.story_list && friendProps.story_list.length > 0) {
            const friendStoryProps = await Promise.all(friendProps.story_list.map(async (story) => {
                const storyProps = await Story.findById(story);

                if (storyProps && moment(storyProps.updatedAt).isSameOrAfter(oneDayAgo)) {
                    return {
                        story: {
                            _id: storyProps._id,
                            story_media_url: storyProps.story_media_url,
                            story_type: storyProps.story_type,
                            story_duration: storyProps.story_duration,
                            story_views: storyProps.story_views,
                            story_shares: storyProps.story_shares,
                            story_tags: storyProps.story_tags,
                            story_location: storyProps.story_location,
                        }
                    };
                } else {
                    return null;
                }
            }));

            const filteredFriendStoryProps = friendStoryProps.filter(Boolean);

            if (filteredFriendStoryProps.length > 0) {
                return {
                    user: {
                        _id: friendProps._id,
                        email: friendProps.email,
                        username: friendProps.username,
                        firstname: friendProps.firstname,
                        lastname: friendProps.lastname,
                        profile_picture_url: friendProps.profile_picture_url,
                    },
                    stories: filteredFriendStoryProps,
                };
            }
        }
        return null;
    }));

    const filteredUserFriendProps = userFriendProps.filter(Boolean);

    return filteredUserFriendProps;
}

module.exports = { getStory };
