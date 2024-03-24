const mongoose = require("mongoose");
const { faker } = require("@faker-js/faker");

const Reaction = require("../../../app/models/Reaction");

const generateReactions = async (allUsers, typesWithCommentFiltered, reactionsFilteredTypes, allPages, allGroups, allComments, allStories) => {
    const reactionProps = Array.from({ length: 500000 }, () => {
        const randomUser = faker.helpers.objectValue(allUsers);
        const randomType = typesWithCommentFiltered[Math.floor(Math.random() * typesWithCommentFiltered.length)];
        const randomReactionType = reactionsFilteredTypes[Math.floor(Math.random() * reactionsFilteredTypes.length)];

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
            _id: new mongoose.Types.ObjectId,
            source_id: randomUser._id,
            destination: {
                type: randomType._id,
                destination_id: randomSourceId,
            },
            reaction_type: randomReactionType._id,
        };
    })

    try {
        await Reaction.insertMany(reactionProps);

        console.log("Reactions generated successfully.");

        return reactionProps;
    } catch (error) {
        return console.error("Error generating reactions:", error);
    }
};

module.exports = generateReactions;