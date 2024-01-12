const PostShare = require("../../models/PostShare");
const userDataService = require("../../services/userDataService");
const postDataService = require("../../services/postDataService");
const generalDataService = require("../../services/generalDataService");

class PostIdController {
    getPostByUserId = async (req, res) => {
        try {
            const userQueryId = req.query.user;
            const postsPerPage = 5;
            const page = parseInt(req.query.page) || 1;

            const user = await userDataService.getFullUserById(userQueryId);

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            const postList = user.post_list.slice((page - 1) * postsPerPage, page * postsPerPage);

            const postsWithUserData = await Promise.all(postList.map(async (post) => {
                const postData = await postDataService.getPostData(post);
                const { createdAt, updatedAt, ...postProps } = postData._doc;

                return {
                    post: {
                        ...postProps,
                        created_at: createdAt,
                        updated_at: updatedAt,
                    },
                    photo: await postDataService.getPostPhoto(postData),
                    user: await postDataService.getPostAuthor(postData._id),
                    comment: await generalDataService.getComment(postData._id),
                    reaction: await generalDataService.getReaction(postData._id),
                    share: await generalDataService.getUsersByInteractionType(PostShare, "post_id", postData._id),
                };
            }));

            res.status(200).json(postsWithUserData);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    getPostByPostId = async (req, res) => {
        try {
            const postId = req.query.post;

            const postData = await postDataService.getPostData(postId);

            const { createdAt, updatedAt, ...otherPostProps } = postData._doc;

            const postProps = {
                post: {
                    ...otherPostProps,
                    created_at: createdAt,
                    updated_at: updatedAt,
                },
                photo: await postDataService.getPostPhoto(postData),
                user: await postDataService.getPostAuthor(postData._id),
                comment: await generalDataService.getComment(postData._id),
                reaction: await generalDataService.getReaction(postData._id),
                share: await generalDataService.getUsersByInteractionType(PostShare, "post_id", postData._id),
            };

            res.status(200).json(postProps)
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

module.exports = new PostIdController();