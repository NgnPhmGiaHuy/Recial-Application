const mongoose = require("mongoose");
const { faker } = require("@faker-js/faker");

const Reaction = require("../../../app/models/Reaction");

const generateReactions = async (typesWithCommentFiltered, reactionsFilteredTypes, allUsers, allPosts, allPhotos, allVideos, allStories, allComments, numberOfReactions) => {
    const reactionProps = Array.from({ length: numberOfReactions }, () => {
        const randomUser = faker.helpers.objectValue(allUsers);
        const randomType = typesWithCommentFiltered[Math.floor(Math.random() * typesWithCommentFiltered.length)];
        const randomReactionType = reactionsFilteredTypes[Math.floor(Math.random() * reactionsFilteredTypes.length)];

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
            _id: new mongoose.Types.ObjectId,
            source_id: randomUser._id,
            destination_id: randomSourceId,
            reaction_type: randomReactionType._id,
        };
    })

    try {
        await Reaction.insertMany(reactionProps);

        console.log("Reactions generated successfully.");

        return reactionProps;
    } catch (error) {
        return console.error("Error generating reactions: ", error);
    }
};

module.exports = generateReactions;