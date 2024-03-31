const mongoose = require("mongoose");
const { faker } = require("@faker-js/faker");

const Comment = require("../../../app/models/Comment");

const generateComments = async (interestedFilteredTypes, allUsers, allPosts, allPhotos, allVideos, allStories, numberOfComments) => {
    const commentProps = Array.from({ length: numberOfComments }, () => {
        const randomUser = faker.helpers.objectValue(allUsers);
        const randomType = interestedFilteredTypes[Math.floor(Math.random() * interestedFilteredTypes.length)];

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
            case "Story":
                randomSourceId = faker.helpers.objectValue(allStories)._id;
                break;
            default:
                break;
        }

        return {
            _id: new mongoose.Types.ObjectId(),
            source_id: randomUser._id,
            destination_id: randomSourceId,
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