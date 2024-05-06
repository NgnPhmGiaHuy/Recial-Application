const mongoose = require("mongoose");

const PagePost = require("../../../app/models/PagePost");

const generatePagesPosts = async (allPages, allPosts, numberOfPagesPosts) => {
    const pagePosts = Array.from({ length: numberOfPagesPosts }, () => {
        const randomPost = allPosts[Math.floor(Math.random() * allPosts.length)];
        const randomPage = allPages[Math.floor(Math.random() * allPages.length)];

        return {
            _id: new mongoose.Types.ObjectId,
            page_id: randomPage._id,
            post_id: randomPost._id,
        }
    })

    try {
        await PagePost.insertMany(pagePosts);

        return console.log("Page post generated successfully.");
    } catch (error) {
        return console.error("Error generating pages posts: ", error);
    }
}

module.exports = generatePagesPosts;