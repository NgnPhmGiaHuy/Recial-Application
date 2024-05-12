const Photo = require("../../models/Photo");
const Message = require("../../models/Message");
const Conversation = require("../../models/Conversation");

class CreateMessageService {
    async createMessageData(sourceId, message_content, message_content_url, conversationId) {
        try {
            const messagePhotos = await Promise.all(message_content_url.map(async (image) => {
                const newPhoto = new Photo({
                    photo_url: image,
                    photo_privacy: "Public",
                })

                await newPhoto.save();

                return newPhoto._id
            }))

            const newMessage = new Message({
                source_id: sourceId,
                message_content: message_content,
                message_content_url: messagePhotos,
            });

            await newMessage.save();

            const conversationData = await Conversation.findById(conversationId);

            if (!conversationData) {
                throw new Error("Conversation not found");
            }

            conversationData.messages.unshift(newMessage._id);
            await conversationData.save();

            return newMessage;
        } catch (error) {
            console.error("Error in createMessageData: ", error);
            throw new Error("Failed to create message data");
        }
    }
}

module.exports = new CreateMessageService();