const User = require("../../models/User");
const Message = require("../../models/Message");
const Conversation = require("../../models/Conversation");

class GetMessageDataService {
    getRawMessageData = async (messageId) => {
        try {
            const messageData = await Message.findById(messageId);

            return messageData;
        } catch (error) {
            console.error("Error in getRawMessageData: ", error);
            throw new Error("Failed to fetch raw message data");
        }
    }

    getFormattedMessageDataById = async (messageId) => {
        try {
            const messageData = await this.getRawMessageData(messageId);

            if (!messageData) {
                throw new Error("Message not found");
            }

            const { createdAt, updatedAt, source_id, ...otherMessageData } = messageData._doc;

            const userProps = await User.findById(source_id);

            if (!userProps) {
                throw new Error("User not found");
            }

            const userData = {
                _id: userProps._id,
                profile: {
                    username: userProps.username,
                    firstname: userProps.firstname,
                    lastname: userProps.lastname,
                    profile_picture_url: userProps.profile_picture_url,
                }
            };

            return {
                user: userData,
                ...otherMessageData,
                created_at: createdAt,
                updated_at: updatedAt,
            };
        } catch (error) {
            console.error("Error in getFormattedMessageDataById: ", error);
            throw new Error("Failed to fetch message data");
        }
    };


    getRawMessageDataBySourceAndDestination = async (source, destination) => {
        try {
            return await Message.find({ source_id: source, destination_id: destination });
        } catch (error) {
            console.error("Error in getRawMessageDataBySourceAndDestination: ", error.message);
            throw new Error("Failed to get message data by source and destination");
        }
    };

    formatConversationData = async (userId, conversation) => {
        const { _id, createdAt, updatedAt, participants, conversation_name, conversation_picture_url, ...otherConversationData } = conversation;

        const conversationData = {};

        switch (participants.length) {
            case 1:
                const singleParticipantId = participants[0];
                const singleParticipantData = await User.findById(singleParticipantId);
                conversationData.conversation_name = singleParticipantData.username || (singleParticipantData.firstname + ' ' + singleParticipantData.lastname);
                conversationData.conversation_picture_url = singleParticipantData.profile_picture_url;
                break;
            case 2:
                const otherParticipantId = participants.find(id => id !== userId);
                const otherParticipantData = await User.findById(otherParticipantId);
                conversationData.conversation_name = otherParticipantData.username || (otherParticipantData.firstname + ' ' + otherParticipantData.lastname);
                conversationData.conversation_picture_url = otherParticipantData.profile_picture_url;
                break;
            default:
                conversationData.conversation_name = conversation_name;
                conversationData.conversation_picture_url = conversation_picture_url;
                break;
        }

        return {
            _id: _id,
            ...conversationData,
            created_at: createdAt,
            updated_at: updatedAt,
        };
    }


    getFormattedConversationMessageData = async (userId, conversationId, page) => {
        try {
            const limit = 10;
            const skip = (parseInt(page) <= 0 ? 0 : (parseInt(page) - 1) * limit);

            const conversationData = await Conversation.findById(conversationId);

            const messageIds = conversationData.messages.slice(skip, skip + limit);

            const messagesPromises = messageIds.map(async messageId => {
                return await this.getFormattedMessageDataById(messageId);
            });

            const messages = await Promise.all(messagesPromises);

            const no_more_messages = parseInt(page) === 0 ? messageIds.length < limit : messageIds.length === 0;

            const formattedConversationData =  await this.formatConversationData(userId, conversationData);

            return {
                messages: messages,
                no_more_messages: no_more_messages,
                conversation: formattedConversationData,
            };
        } catch (error) {
            console.error("Error in getFormattedConversationMessageData: ", error.message);
            throw new Error("Failed to get conversation message data");
        }
    };
}

module.exports = new GetMessageDataService();