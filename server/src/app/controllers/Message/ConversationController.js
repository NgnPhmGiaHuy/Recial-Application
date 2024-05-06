const getMessageDataService = require("../../services/messageService/getMessageDataService");

class ConversationController {
    async getConversationData(req, res) {
        try {
            const userId = req.userId;
            const { conversation, page } = req.query;

            const conversationData = await getMessageDataService.getFormattedConversationMessageData(userId, conversation, page);

            return res.status(200).json(conversationData);
        } catch (error) {
            console.error("Error in getConversationData: ", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
}

module.exports = new ConversationController();
