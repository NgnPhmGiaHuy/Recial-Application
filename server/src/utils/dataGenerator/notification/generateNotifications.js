const mongoose = require("mongoose");
const { faker } = require("@faker-js/faker");

const Notification = require("../../../app/models/Notification");

const generateNotifications = async (typesWithCommentFiltered, allUsers, allPosts, allPhotos, allVideos, allStories, allComments, numberOfNotification) => {
    const notificationProps = Array.from({ length: numberOfNotification }, () => {
        const randomUser = faker.helpers.objectValue(allUsers);
        const randomType = typesWithCommentFiltered[Math.floor(Math.random() * typesWithCommentFiltered.length)];

        let randomSourceId;

        switch (randomType.type_name) {
            case "Post":
                randomSourceId = faker.helpers.objectValue(allPosts)._id;
                break;
            case "Video":
                randomSourceId = faker.helpers.objectValue(allVideos)._id;
                break;
            case "Photo":
                randomSourceId = faker.helpers.objectValue(allPhotos)._id;
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