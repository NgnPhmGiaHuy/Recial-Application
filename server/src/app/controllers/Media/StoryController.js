const getUserDataService = require("../../services/userService/getUserDataService");
const storyDataService = require("../../services/mediaService/storyDataService");

class StoryController {
    getStory = async (req, res) => {
        try {
            const decodedToken = req.decodedToken;
            const userId = decodedToken.userId;

            const user = await getUserDataService.getFormattedUserData(userId);

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            const story = await storyDataService.getUserFeedStoryData(user);
            
            return res.status(200).json(story);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

module.exports = new StoryController();