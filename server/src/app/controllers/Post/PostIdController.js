const Post = require("../../models/Post");
const userDataService = require("../../services/userDataService");
const postDataService = require("../../services/postDataService");

class PostIdController {
    getPostByUserId = async (req, res) => {
        try {
            const userId = req.query.user;
            const postsPerPage = 5;
            const page = parseInt(req.query.page) || 1;

            const user = await userDataService.getFullUserById(userId);

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            const postList = user.post_list.slice((page - 1) * postsPerPage, page * postsPerPage);

            const postsWithUserData = await Promise.all(postList.map(async (post) => {
                const postData = await Post.findById(post);
                const {createdAt, updatedAt, ...postProps} = postData._doc;

                return {
                    post: {
                        ...postProps,
                        created_at: postData.createdAt,
                        updated_at: postData.updatedAt,
                    },
                    photo: await postDataService.getPostPhoto(postData),
                    user: await postDataService.getPostAuthor(postData),
                    comment: await postDataService.getComment(postData._id),
                    reaction: await postDataService.getReaction(postData._id),
                };
            }));

            res.status(200).json(postsWithUserData);
        } catch (error) {
            if (error.name === 'TokenExpiredError') {
                return res.status(401).json({ error: 'Token expired' });
            }
            return res.status(500).json({ error: 'Server error' });
        }
    }
}

module.exports = new PostIdController();