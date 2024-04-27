const getMessageDataService = require("../../services/messageService/getMessageDataService");

class MessageController {
    getMessageData = async (req, res) => {
        try {
            const userId = req.userId;
            const { destinationUserId, page } = req.query;

            const messageProps = await getMessageDataService.getFormattedMessageData(userId, destinationUserId, page);

            return res.status(200).json(messageProps);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

module.exports = new MessageController();