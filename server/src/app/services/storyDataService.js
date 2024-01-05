const moment = require('moment');

const Story = require("../models/Story");
const userDataService = require("../services/userDataService");

class StoryDataService {
    getStory = async (user) => {
        const userProps = await userDataService.getFullUserById(user._id);

        const oneDayAgo = moment().subtract(1, 'days');

        const userFriendProps = await Promise.all(userProps.friends.map(async friend => {
            const friendProps = await userDataService.getFullUserById(friend);

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
                        user: await userDataService.getUserById(friendProps._id),
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

