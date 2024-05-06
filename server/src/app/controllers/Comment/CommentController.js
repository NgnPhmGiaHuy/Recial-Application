const WebSocketService = require("../../services/webSocketService/webSocketService");
const getCommentDataService = require("../../services/commentService/getCommentDataService");
const createCommentDataService = require("../../services/commentService/createCommentDataService");

class CommentController {
    getCommentData = async (req, res) => {
        try {
            const commentId = req.query.comment;

            const commentProps = await getCommentDataService.getFormattedCommentDataById(commentId);

            return res.status(200).json(commentProps);
        } catch (error) {
            console.error("Error in getCommentData: ", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    };

    createCommentData = async (req, res) => {
        try {
            const userId = req.userId;
            const comment = req.body;

            const newComment = await createCommentDataService.createCommentData(comment);

            const wss = req.app.get("wss");
            const webSocketService = new WebSocketService(wss);

            await webSocketService.notifyClientsAboutNewComment(userId, newComment);

            return res.status(200).json(newComment);
        } catch (error) {
            console.error("Error in createCommentData: ", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    };
}

module.exports = new CommentController;