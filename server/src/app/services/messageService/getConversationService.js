const User = require("../../models/User");
const Conversation = require("../../models/Conversation");

const getMessageDataService = require("../messageService/getMessageDataService");

class GetConversationService {
    formattedUserDataByRawData = async (user) => {
        try {
            return {
                _id: user._id,
                profile: {
                    username: user.username,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    profile_picture_url: user.profile_picture_url,
                }
            };
        } catch (error) {
            console.error("Error in getFormattedUserDataByRawData: ", error);
            throw new Error("Failed to format user data by raw data");
        }
    }

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
                const otherParticipantId = participants.find(id => id.toString() !== userId.toString());
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

            const messagesData = messageIds.map(async messageId => {
                return await getMessageDataService.getFormattedMessageDataById(userId, messageId);
            });

            const messageParticipants = conversationData.participants.map(async (participant) => {
                const userData =  await User.findById(participant);

                return await this.formattedUserDataByRawData(userData);
            });

            const messagesPromises = await Promise.all(messagesData);
            const messageParticipantsPromise = await Promise.all(messageParticipants);

            const no_more_messages = parseInt(page) === 0 ? messageIds.length < limit : messageIds.length === 0;

            const formattedConversationData =  await this.formatConversationData(userId, conversationData);

            return {
                messages: messagesPromises,
                no_more_messages: no_more_messages,
                conversation: { ...formattedConversationData, participants: [...messageParticipantsPromise] },
            };
        } catch (error) {
            console.error("Error in getFormattedConversationMessageData: ", error.message);
            throw new Error("Failed to get conversation message data");
        }
    };
}

module.exports = new GetConversationService();