const mongoose = require("mongoose");
const { faker } = require("@faker-js/faker");

const Notification = require("../../../app/models/Notification");

const generateNotifications = async (allUsers, typesWithCommentFiltered, allPages, allGroups, allComments, allStories) => {
    const notificationProps = Array.from({ length: 100000 }, () => {
        const randomUser = faker.helpers.objectValue(allUsers);
        const randomType = typesWithCommentFiltered[Math.floor(Math.random() * typesWithCommentFiltered.length)];

        let randomSourceId;

        switch (randomType.type_name) {
            case "Post":
                randomSourceId = faker.helpers.objectValue(randomUser.post_list)._id;
                break;
            case "Video":
                randomSourceId = faker.helpers.objectValue(randomUser.video_list)._id;
                break;
            case "Photo":
                randomSourceId = faker.helpers.objectValue(randomUser.photo_list)._id;
                break;
            case "Page":
                randomSourceId = faker.helpers.objectValue(allPages)._id;
                break;
            case "Group":
                randomSourceId = faker.helpers.objectValue(allGroups)._id;
                break;
            case "Comment":
                randomSourceId = faker.helpers.objectValue(allComments)._id;
                break;
            case "Story":
                randomSourceId = faker.helpers.objectValue(allStories)._id;
                break;
            default:
                break;
        }

        return {
            _id: new mongoose.Types.ObjectId(),
            source: {
                type: randomType._id,
                source_id: randomSourceId,
            },
            destination_id: randomUser._id,
            notification_content: faker.lorem.paragraph(),
            notification_type: randomType._id,
            is_read: faker.helpers.arrayElement([true, false]),
            is_mute: faker.helpers.arrayElement([true, false]),
        };
    })

    try {
        await Notification.insertMany(notificationProps);

        console.log("Notification generated successfully.");

        return notificationProps;
    } catch (error) {
        return console.error("Error generating notifications:", error);
    }
};

module.exports = generateNotifications;