const getUserDataService = require("../../services/userService/getUserDataService");
const getPostDataService = require("../../services/postService/getPostDataService");

class PostIdController {
    getPostByUserId = async (req, res) => {
        try {
            const userQueryId = req.query.user;
            const postsPerPage = 5;
            const page = parseInt(req.query.page) || 1;

            const user = await getUserDataService.getRawUserData(userQueryId);

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            const postList = user.post_list.slice((page - 1) * postsPerPage, page * postsPerPage);

            const postsWithUserData = await Promise.all(postList.map(async (post) => {
                return await getPostDataService.getFormattedPostData(post);
            }));

            return res.status(200).json(postsWithUserData);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    getPostByPostId = async (req, res) => {
        try {
            const postId = req.query.post;

            const postProps = await getPostDataService.getFormattedPostData(postId);

            return res.status(200).json(postProps)
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

module.exports = new PostIdController();