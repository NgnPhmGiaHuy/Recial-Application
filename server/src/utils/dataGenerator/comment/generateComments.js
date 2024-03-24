const mongoose = require("mongoose");
const { faker } = require("@faker-js/faker");

const Comment = require("../../../app/models/Comment");

const generateComments = async (allUsers, interestedFilteredTypes, allPages, allGroups, allStories) => {
    const commentProps = Array.from({ length: 100000 }, () => {
        const randomUser = faker.helpers.objectValue(allUsers);
        const randomType = interestedFilteredTypes[Math.floor(Math.random() * interestedFilteredTypes.length)];

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
            case "Story":
                randomSourceId = faker.helpers.objectValue(allStories)._id;
                break;
            default:
                break;
        }

        return {
            _id: new mongoose.Types.ObjectId(),
            source_id: randomUser._id,
            destination: {
                type: randomType._id,
                destination_id: randomSourceId,
            },
            comment_text: faker.lorem.paragraph(),
        }
    });

    try {
        await Comment.insertMany(commentProps);

        console.log("Comments generated successfully.");

        return commentProps;
    } catch (error) {
        return console.error("Error generating comments:", error);
    }
};

module.exports = generateComments;