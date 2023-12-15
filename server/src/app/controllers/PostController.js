const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Post = require("../models/Post");
const postDataService = require("../services/postDataService");

class PostController {
    getPostData = async (req, res) => {
        try {
            const accessToken = req.headers.authorization;

            if (!accessToken) {
                return res.status(401).json({ error: 'Access token missing' });
            }

            const token = accessToken.split(' ')[1];

            const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

            const userId = decodedToken.userId;

            const user = await User.findById(userId);

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            const posts = await Post.aggregate([
                { $sample: { size: 5 } },
                { $sort: { createdAt: -1 } }
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

    enhancePostsWithUserData = async (posts) => {
        try {
            const enhancedPosts = [];

            for (const post of posts) {
                const {createdAt, updatedAt, ...postProps} = post;

                const postWithUserData = {
                    postData: {
                        ...postProps,
                        created_at: post.createdAt,
                        updated_at: post.updatedAt,
                    },
                    postAuthor: await postDataService.getPostAuthor(post),
                    postComments: await postDataService.getPostComment(post),
                    postReactions: await postDataService.getPostReaction(post),
                    postAttachments: await postDataService.getPostAttachment(post),
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