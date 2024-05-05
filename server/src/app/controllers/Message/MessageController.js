const { WebSocket } = require("ws");

const getMessageDataService = require("../../services/messageService/getMessageDataService");
const createMessageService = require("../../services/messageService/createMessageService");

class MessageController {
    getMessageData = async (req, res) => {
        try {
            const { message } = req.query;

            const messageProps = await getMessageDataService.getMessageDataById(message);

            return res.status(200).json(messageProps);
        } catch (error) {
            console.error("Error getting message data:", error);
            return res.status(500).json({ error: "Failed to get message data." });
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

            if (wss) {
                const comment = {
                    type: "create_message",
                    userId: userId.toString(),
                    messageId: newMessage._id.toString(),
                }

                wss.clients.forEach((client) => {
                    if (client.readyState === WebSocket.OPEN && (client.userId.toString() === userId.toString() || client.userId.toString() === newMessage.destination_id.toString())) {
                        client.send(JSON.stringify(comment));
                    }
                });
            }

            return res.status(200).json(newMessage);
        } catch (error) {
            console.error("Error creating message data:", error);
            return res.status(500).json({ error: "Failed to create message data." });
        }
    }
}

module.exports = new MessageController();