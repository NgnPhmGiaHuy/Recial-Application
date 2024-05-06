const mongoose = require("mongoose");
const { faker } = require("@faker-js/faker");

const Comment = require("../../../app/models/Comment");

const generateReplyComments = async (allUsers, allComments, numberOfReplyComment) => {
    const replyComment = Array.from({ length: numberOfReplyComment }, () => {
        const randomUser = faker.helpers.objectValue(allUsers);

        return {
            _id: new mongoose.Types.ObjectId(),
            source_id: randomUser._id,
            destination_id: faker.helpers.objectValue(allComments)._id,
            comment_text: faker.lorem.paragraph(),
        }
    })

    try {
        await Comment.insertMany(replyComment);

        console.log("Comment Replies generated successfully.");

        return replyComment;
    } catch (error) {
        return console.error("Error generating comments: ", error);
    }
};

module.exports = generateReplyComments;
