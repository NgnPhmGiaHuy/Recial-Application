const { faker } = require("@faker-js/faker");

const Message = require("../../../app/models/Message");

const generateMessages = async (allUsers, numberOfMessages) => {
    const messageProp = Array.from({ length: numberOfMessages }, () => ({
        source_id: faker.helpers.objectValue(allUsers),
        destination_id: faker.helpers.objectValue(allUsers),
        message_content: faker.lorem.paragraph(),
        is_read: faker.helpers.arrayElement([true, false]),
        is_mute: faker.helpers.arrayElement([true, false]),
    }));

    try {
        await Message.insertMany(messageProp);

        return console.log("Messages generated successfully.");
    } catch (error) {
        return console.error("Error generating messages:", error);
    }
};

module.exports = generateMessages;