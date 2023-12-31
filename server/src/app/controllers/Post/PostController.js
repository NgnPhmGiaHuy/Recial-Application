const { WebSocket } = require("ws");

const Post = require("../../models/Post");
const User = require("../../models/User");
const Photo = require("../../models/Photo");
const userDataService = require("../../services/userDataService");
const postDataService = require("../../services/postDataService");
const imageDataService = require("../../services/imageDataService");
const websocketService = require("../../services/websocketService");

class PostController {
    getPostData = async (req, res) => {
        try {
            const decodedToken = req.decodedToken;
            const userId = decodedToken.userId;

            const user = await userDataService.getUserById(userId);

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            const posts = await Post.aggregate([
                { $sample: { size: 5 } },
                { $sort: { createdAt: -1 } },
                { $match: { post_privacy: "Public" } }
            ]);

            const postsWithUserData = await this.enhancePostsWithUserData(posts);

            res.status(200).json(postsWithUserData)
        } catch (error) {
            if (error.name === 'TokenExpiredError') {
                return res.status(401).json({ error: 'Token expired' });
            }
            return res.status(500).json({ error: 'Server error' });
        }
    }

    createPostData = async (req, res) => {
        try {
            const decodedToken = req.decodedToken;
            const userId = decodedToken.userId;

            const user = await User.findById(userId);

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            const postData = req.body;

            const newPost = new Post({
                post_content: postData.post.post_content,
                post_privacy: postData.post.post_privacy,
            })

            /*
                Using when you want to store it in your local computer
                const resolvedImageData = await Promise.all(postData.post.post_image.map(async (imageData) => {
                    const newPhoto = await imageDataService.saveImage(imageData, user, postData.post.post_privacy);
                    user.photo_list.unshift(newPhoto._id);
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

                user.photo_list.unshift(newPhoto._id);
                newPost.post_photos.unshift(newPhoto._id);
            }))

            await newPost.save();

            user.post_list.unshift(newPost._id);

            await user.save();

            await websocketService.sendNewPostMessage(req.app.get('wss'), user._id, newPost._id);

            res.status(200).json(newPost);
        } catch (error) {
            if (error.name === 'TokenExpiredError') {
                return res.status(401).json({ error: 'Token expired' });
            }
            return res.status(500).json({ error: 'Server error' });
        }
    }

    deletePostData = async (req, res) => {
        try {
            const decodedToken = req.decodedToken;
            const userId = decodedToken.userId;

            const user = await User.findByIdAndUpdate(
                userId,
                { $pull: { post_list: req.body.postId } },
                { new: true }
            );

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            const deletedPost = await Post.findOneAndDelete({ _id: req.body.postId });

            if (!deletedPost) {
                return res.status(404).json({ error: 'Post not found' });
            }

            const wss = req.app.get('wss')
            if (wss) {
                const message = {
                    type: 'delete_post',
                    userId: user._id.toString(),
                };

                wss.clients.forEach((client) => {
                    if (client.readyState === WebSocket.OPEN && client.userId.toString() === userId.toString()) {
                        client.send(JSON.stringify(message));
                    }
                });
            }

            return res.status(200).json({ message: 'Post deleted successfully' });
        } catch (error) {
            if (error.name === 'TokenExpiredError') {
                return res.status(401).json({ error: 'Token expired' });
            }
            return res.status(500).json({ error: 'Server error' });
        }
    }

    enhancePostsWithUserData = async (posts) => {
        try {
            const enhancedPosts = [];

            for (const post of posts) {
                const {createdAt, updatedAt, ...postProps} = post;

                const postWithUserData = {
                    post: {
                        ...postProps,
                        created_at: post.createdAt,
                        updated_at: post.updatedAt,
                    },
                    photo: await postDataService.getPostPhoto(post),
                    user: await postDataService.getPostAuthor(post),
                    comment: await postDataService.getComment(post._id),
                    reaction: await postDataService.getReaction(post._id),
                };

                enhancedPosts.push(postWithUserData);
            }

            return enhancedPosts;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new PostController();