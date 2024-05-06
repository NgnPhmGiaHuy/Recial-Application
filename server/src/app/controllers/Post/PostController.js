const WebSocketService = require("../../services/webSocketService/webSocketService");
const getPostDataService = require("../../services/postService/getPostDataService");
const deletePostDataService = require("../../services/postService/deletePostDataService");
const createPostDataService = require("../../services/postService/createPostDataService");
const enhancePostDataService = require("../../services/postService/enhancePostDataService");

class PostController {
    getPostData = async (req, res) => {
        try {
            const posts = await getPostDataService.getFormattedPostFeedDataById();

            const postsWithUserData = await enhancePostDataService.enhancePostsWithUserData(posts);

            return res.status(200).json(postsWithUserData)
        } catch (error) {
            console.error("Error in getPostData: ", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }

    createPostData = async (req, res) => {
       try {
            const postData = req.body;
            const userData = req.user;

            const newPost = await createPostDataService.createPostData(postData, userData);

            userData.post_list.unshift(newPost._id);

            await userData.save();

           const wss = req.app.get("wss");
           const webSocketService = new WebSocketService(wss);

           await webSocketService.notifyClientsAboutNewPost(userData, newPost);

            return res.status(200).json(newPost);
        } catch (error) {
           console.error("Error in createPostData: ", error);
           return res.status(500).json({ error: "Internal Server Error" });
        }
    }

    deletePostData = async (req, res) => {
        try {
            const userId = req.userId;

            const deletedPost = await getPostDataService.getRawPostData(req.body.postId);

            if (!deletedPost) {
                return res.status(404).json({ error: "Post not found" });
            }

            const user = await deletePostDataService.findAndDeleteUserPost(userId, deletedPost);

            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }

            await deletePostDataService.deletePost(req, deletedPost);

            const wss = req.app.get("wss");
            const webSocketService = new WebSocketService(wss);

            await webSocketService.notifyClientsAboutDeletePost(userId, deletedPost);

            return res.status(200).json({ message: "Post deleted successfully" });
        } catch (error) {
            console.error("Error in deletePostData: ", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
}

module.exports = new PostController();