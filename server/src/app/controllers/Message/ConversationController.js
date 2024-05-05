const getMessageDataService = require("../../services/messageService/getMessageDataService");

class ConversationController {
    async getConversationData(req, res) {
        try {
            const userId = req.userId;
            const { conversation, page } = req.query;

            const conversationData = await getMessageDataService.getFormattedConversationMessageData(userId, conversation, page);

            return res.status(200).json(conversationData);
        } catch (error) {
            console.error("Error fetching conversation data:", error);
            return res.status(500).json({ error: "Failed to fetch conversation data." });
        }
    }
}

module.exports = new ConversationController();
