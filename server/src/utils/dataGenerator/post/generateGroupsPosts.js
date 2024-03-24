const mongoose = require("mongoose");

const GroupPost = require("../../../app/models/GroupPost");

const generateGroupsPosts = async (allGroups, allPosts) => {
    const groupPosts = Array.from({ length: 100000 }, () => {
        const randomPost = allPosts[Math.floor(Math.random() * allPosts.length)];
        const randomGroup = allGroups[Math.floor(Math.random() * allGroups.length)];

        return {
            _id: new mongoose.Types.ObjectId,
            group_id: randomGroup._id,
            post_id: randomPost._id,
        }
    })

    try {
        await GroupPost.insertMany(groupPosts);

        return console.log("Groups posts generated successfully.");
    } catch (error) {
        return console.error("Error generating groups posts:", error);
    }
};

module.exports = generateGroupsPosts;