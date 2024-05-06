const mongoose = require("mongoose");
const { faker } = require("@faker-js/faker");

const Post = require("../../../app/models/Post");

const generatePhotoData = require("../media/generatePhotoData");

const generatePosts = async (allUsers, maxNumberOfPosts) => {
    try {
        const allPosts = await Promise.all(allUsers.map(async (user) => {
            const numberOfPosts = faker.number.int({ min: 1, max: maxNumberOfPosts });

            const posts = await Promise.all(Array.from({ length: numberOfPosts }, async () => {
                const numPhotos = faker.number.int({ min: 1, max: 10 });
                const postPhotos = await Promise.all(Array.from({ length: numPhotos }, async () => {
                    const photo = await generatePhotoData();

                    user.photo_list.unshift(photo._id);

                    return photo._id;
                }));

                const post = new Post({
                    _id: new mongoose.Types.ObjectId(),
                    post_title: faker.lorem.text(),
                    post_photos: postPhotos,
                    post_content: faker.lorem.paragraph(),
                    post_privacy: faker.helpers.arrayElement(["Public", "Private", "Friends", "Specific_Friends"
                    ])
                });

                user.post_list.unshift(post._id);

                return post;
            }));

            await user.save();

            return posts;
        }));

        const flattenedPosts = allPosts.flat();
        await Post.insertMany(flattenedPosts);

        console.log("Posts generated successfully.");

        return flattenedPosts;
    } catch (error) {
        return  console.error("Error generating or inserting posts: ", error);
    }
};

module.exports = generatePosts;