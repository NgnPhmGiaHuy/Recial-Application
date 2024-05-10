const Status = require("../../models/Status");
const Message = require("../../models/Message");

class DeleteMessageService {
    deleteMessageData = async (userId, messageId) => {
        try {
            const messageData = await Message.findById(messageId);
            const deleteStatus = await Status.findOne({ status_name: "Deleted" });

            if (userId.toString() === messageData.source_id.toString()) {
                messageData.message_status = deleteStatus._id;
            }

            const alreadyHidden = messageData.message_hidden_by.some(item =>
                item.user_id.toString() === userId.toString() &&
                item.status_id.toString() === deleteStatus._id.toString()
            );

            if (userId.toString() !== messageData.source_id.toString() && !alreadyHidden) {
                messageData.message_hidden_by.push({ user_id: userId, status_id: deleteStatus._id });
            }

            await messageData.save()

            return messageData;
        } catch (error) {
            console.error("Error in deleteMessageData: ", error);
            throw new Error("Failed to delete message data");
        }
    }
}

module.exports = new DeleteMessageService();