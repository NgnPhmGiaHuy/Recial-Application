const { faker } = require("@faker-js/faker");

const Message = require("../../../app/models/Message");
const Conversation = require("../../../app/models/Conversation");

const generateMessages = async (allUsers, allStatuses, numberOfMessages) => {
    try {
        const conversations = [];
        for (let i = 0; i < numberOfMessages; i++) {
            const numberOfParticipants = faker.number.int({ min: 2, max: 5 });
            const participants = faker.helpers.arrayElements(allUsers, numberOfParticipants);

            const conversationName = participants.length > 2 ? faker.lorem.words(2) : null;
            const conversationPictureUrl =  participants.length > 2 ? faker.image.url() : null;
            const conversation = await Conversation.create({ participants, conversation_name: conversationName, conversation_picture_url: conversationPictureUrl });
            conversations.push(conversation);
        }

        for (const conversation of conversations) {
            const numberOfMessagesInConversation = faker.number.int({ min: 1, max: 5 });
            const messages = [];
            for (let i = 0; i < numberOfMessagesInConversation; i++) {
                const sourceId = faker.helpers.arrayElement(conversation.participants)._id;
                const messageContent = faker.lorem.sentence();
                const messageStatus = faker.helpers.arrayElement(allStatuses);
                const message = await Message.create({ source_id: sourceId, message_content: messageContent, message_status: messageStatus._id });
                messages.push(message);
            }
            conversation.messages = messages;
            await conversation.save();
        }

        return console.log("Messages generated successfully.");
    } catch (error) {
        return console.error("Error generating messages: ", error);
    }
};

module.exports = generateMessages;