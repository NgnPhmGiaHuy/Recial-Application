const { WebSocket } = require("ws");

const Post = require("../../models/Post");
const Type = require("../../models/Type");
const User = require("../../models/User");
const Comment = require("../../models/Comment");
const userDataService = require("../../services/userDataService");
const postDataService = require("../../services/postDataService");

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

            await newPost.save();

            user.post_list.unshift(newPost._id);
            user.post_list.sort(async (postIdA, postIdB) => {
                const postA = await Post.findById(postIdA);
                const postB = await Post.findById(postIdB);
                return postB.updatedAt - postA.updatedAt;
            });

            await user.save();

            const wss = req.app.get("wss");
            if (wss) {
                const message = {
                    type: 'create_new_post',
                    postId: newPost._id,
                };

                wss.clients.forEach((client) => {
                    if (client.readyState === WebSocket.OPEN) {
                        client.send(JSON.stringify(message));
                    }
                });
            }

            res.status(200).json(newPost);
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