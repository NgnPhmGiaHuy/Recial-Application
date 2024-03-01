const Post = require("../../models/Post");
const Photo = require("../../models/Photo");

const imageDataService = require("../../services/imageDataService");

class CreatePostDataService {
    createPostData = async (postData, userData) => {
        const newPost = new Post({
            group: postData?.post?.post_group,
            post_content: postData.post.post_content,
            post_privacy: postData.post.post_privacy,
        })

        /*
            Using when you want to store it in your local computer
            const resolvedImageData = await Promise.all(postData.post.post_image.map(async (imageData) => {
                const newPhoto = await imageDataService.saveImage(imageData, userData, postData.post.post_privacy);
                userData.photo_list.unshift(newPhoto._id);
                newPost.post_photos.unshift(newPhoto._id);
                return newPhoto._id;
            }));
        */


        const imagesData = await Promise.all(postData.post.post_image.map(async (image) => {
            const newPhoto = new Photo({
                photo_url: image,
                photo_privacy: postData.post.post_privacy,
            })

            await newPhoto.save()

            userData.photo_list.unshift(newPhoto._id);
            newPost.post_photos.unshift(newPhoto._id);

            return newPhoto._id;
        }))

        await newPost.save();

        return newPost;
    };
}

module.exports = new  CreatePostDataService();