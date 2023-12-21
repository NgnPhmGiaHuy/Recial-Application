const Post = require("../../models/Post");
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