const {WebSocket} = require("ws");

const Type = require("../../models/Type");
const Comment = require("../../models/Comment");
const userDataService = require("../../services/userDataService");
const generalDataService = require("../../services/generalDataService");

class CommentController {
    getCommentData = async (req, res) => {
        try {
            const decodedToken = req.decodedToken;
            const userId = decodedToken.userId;

            const user = await userDataService.getUserById(userId);

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            const commentId = req.query.comment;

            const commentData = await Comment.findById(commentId);

            const { createdAt, updatedAt, ...otherCommentProps } = commentData._doc;

            const commentProps = {
                comment: {
                    ...otherCommentProps,
                    user: await userDataService.getUserById(commentData.source_id),
                    comment_reactions: await generalDataService.getReaction(commentData._id),
                    comment_reply: await generalDataService.getComment(commentData._id),
                    created_at: createdAt,
                    updated_at: updatedAt,
                },
                destination: {
                    destination_id: commentData.destination.destination_id,
                }
            }

            return res.status(200).json(commentProps);
        } catch (error) {
            return res.status(500).json({ error: 'Server error' });
        }
    };

    createCommentData = async (req, res) => {
        try {
            const decodedToken = req.decodedToken;
            const userId = decodedToken.userId;

            const user = await userDataService.getUserById(userId);

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            const comment = req.body;

            const typeId = await Type.findOne({ type_name: comment.destination.type })

            const newComment = new Comment({
                source_id: comment.source_id,
                destination: {
                    type: typeId._id,
                    destination_id: comment.destination.destination_id,
                },
                comment_text: comment.comment_text,
            });

            await newComment.save();

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
            return res.status(500).json({ error: 'Server error' });
        }
    }
}

module.exports = new CommentController;