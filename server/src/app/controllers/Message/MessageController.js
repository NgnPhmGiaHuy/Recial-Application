const { WebSocket } = require("ws");

const WebSocketService = require("../../services/webSocketService/webSocketService");
const getMessageDataService = require("../../services/messageService/getMessageDataService");
const createMessageService = require("../../services/messageService/createMessageService");

class MessageController {
    getMessageData = async (req, res) => {
        try {
            const { message } = req.query;

            const messageProps = await getMessageDataService.getFormattedMessageDataById(message);

            return res.status(200).json(messageProps);
        } catch (error) {
            console.error("Error in getMessageData: ", error);
            return res.status(500).json({ error: "Internal server error" });
        }
    }

    createMessageData = async (req, res) => {
        try {
            const userId = req.userId;
            const { message_content, conversation_id } = req.body;

            if (!message_content || !conversation_id) {
                return res.status(400).json({ error: "Message content and conversation ID are required." });
            }

            const newMessage = await createMessageService.createMessageData(userId, message_content, conversation_id);

            const wss = req.app.get("wss");
            const webSocketService = new WebSocketService(wss);

            await webSocketService.notifyClientsAboutNewMessage(conversation_id, newMessage);

            return res.status(200).json(newMessage);
        } catch (error) {
            console.error("Error in createMessageData: ", error);
            return res.status(500).json({ error: "Internal server error" });
        }
    }
}

module.exports = new MessageController();