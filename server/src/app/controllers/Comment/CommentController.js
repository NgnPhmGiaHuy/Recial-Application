const { WebSocket } = require("ws");

const getUserDataService = require("../../services/userService/getUserDataService");
const getCommentDataService = require("../../services/commentService/getCommentDataService");
const createCommentDataService = require("../../services/commentService/createCommentDataService");

class CommentController {
    getCommentData = async (req, res) => {
        try {
            const decodedToken = req.decodedToken;
            const userId = decodedToken.userId;

            const user = await getUserDataService.getFormattedUserData(userId);

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            const commentId = req.query.comment;

            const commentProps = await getCommentDataService.getFormattedCommentData(commentId);

            return res.status(200).json(commentProps);
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    createCommentData = async (req, res) => {
        try {
            const decodedToken = req.decodedToken;
            const userId = decodedToken.userId;

            const user = await getUserDataService.getFormattedUserData(userId);

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            const comment = req.body;

            const newComment = await createCommentDataService.createCommentData(comment);

            const wss = req.app.get("wss");

            if (wss) {
                const comment = {
                    type: "create_comment",
                    userId: user._id.toString(),
                    commentId: newComment._id.toString(),
                }

                wss.clients.forEach((client) => {
                    if (client.readyState === WebSocket.OPEN) {
                        client.send(JSON.stringify(comment));
                    }
                });
            }

            return res.status(200).json(newComment);
        } catch (error) {
            return res.status(500).json(error);
        }
    };
}

module.exports = new CommentController;