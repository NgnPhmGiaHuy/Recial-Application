const storyDataService = require("../../services/mediaService/storyDataService");

class StoryController {
    getStory = async (req, res) => {
        try {
            const userId = req.userId;

            const story = await storyDataService.getUserFeedStoryData(userId);
            
            return res.status(200).json(story);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

module.exports = new StoryController();