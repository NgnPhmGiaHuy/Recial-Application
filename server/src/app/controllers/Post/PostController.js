const { WebSocket } = require("ws");

const websocketService = require("../../services/websocketService");
const getUserDataService = require("../../services/userService/getUserDataService");
const getPostDataService = require("../../services/postService/getPostDataService");
const deletePostDataService = require("../../services/postService/deletePostDataService");
const createPostDataService = require("../../services/postService/createPostDataService");
const enhancePostDataService = require("../../services/postService/enhancePostDataService");

class PostController {
    getPostData = async (req, res) => {
        try {
            const decodedToken = req.decodedToken;
            const userId = decodedToken.userId;

            const user = await getUserDataService.getFormattedUserData(userId);

            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }

            const posts = await getPostDataService.getPostFeedData();

            const postsWithUserData = await enhancePostDataService.enhancePostsWithUserData(posts);

            return res.status(200).json(postsWithUserData)
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    createPostData = async (req, res) => {
       try {
            const decodedToken = req.decodedToken;
            const userId = decodedToken.userId;

            const userData = await getUserDataService.getRawUserData(userId);

            if (!userData) {
                return res.status(404).json({ error: "User not found" });
            }

            const postData = req.body;

            const newPost = await createPostDataService.createPostData(postData, userData);

            userData.post_list.unshift(newPost._id);

            await userData.save();

            await websocketService.sendNewPostMessage(req.app.get("wss"), userData._id, newPost._id);

            return res.status(200).json(newPost);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    deletePostData = async (req, res) => {
        try {
            const decodedToken = req.decodedToken;
            const userId = decodedToken.userId;

            const deletedPost = await getPostDataService.getRawPostData(req.body.postId);

            if (!deletedPost) {
                return res.status(404).json({ error: "Post not found" });
            }

            const user = await deletePostDataService.findAndDeleteUserPost(userId, deletedPost);

            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }

            await deletePostDataService.deletePost(req, deletedPost);

            const wss = req.app.get("wss")
            if (wss) {
                const message = {
                    type: "delete_post",
                    userId: user._id.toString(),
                };

                wss.clients.forEach((client) => {
                    if (client.readyState === WebSocket.OPEN && client.userId.toString() === userId.toString()) {
                        client.send(JSON.stringify(message));
                    }
                });
            }

            return res.status(200).json({ message: "Post deleted successfully" });
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

module.exports = new PostController();