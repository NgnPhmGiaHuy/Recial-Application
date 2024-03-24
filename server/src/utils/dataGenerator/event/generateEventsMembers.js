const { faker } = require("@faker-js/faker");

const EventMember = require("../../../app/models/EventMember");

const generateEventsMembers = async (allEvents, allUsers, insertedRoles) => {
    const eventMemberProps = allEvents.flatMap(event => {
        return Array.from({ length: 50 }, () => {
            const randomUser = faker.helpers.objectValue(allUsers);

            return {
                event_id: event._id,
                user: {
                    user_id: randomUser._id,
                    user_role: insertedRoles[faker.helpers.arrayElement([13, 14, 15, 16, 17])]._id,
                },
            };
        });
    });

    try {
        await EventMember.insertMany(eventMemberProps);

        return console.log("Event Members generated successfully.");
    } catch (error) {
        return console.error("Error generating event members:", error);
    }
};

module.exports = generateEventsMembers;