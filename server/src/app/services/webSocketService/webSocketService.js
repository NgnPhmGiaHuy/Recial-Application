const { WebSocket } = require("ws");

class WebSocketService {
    constructor(wss) {
        this.wss = wss;
    }

    notifyClientsAboutUpdateProfile(userId) {
        if (this.wss) {
            const userProfileUpdateMessage = {
                type: "user_profile_update",
            }

            this.broadcastMessageToUser(userProfileUpdateMessage, userId);
        }
    }

    notifyClientsAboutUpdateFriendRequest(userId, status, updateFriendRequest) {
        if (this.wss) {
            const friendRequestUpdateMessage = {
                type: "friend_request_update",
                status: status,
                friendId: updateFriendRequest.source_id,
                friendRequestId: updateFriendRequest._id,
            }

            this.broadcastMessageToUser(friendRequestUpdateMessage, userId);
        }
    }

    notifyClientsAboutCreateFriendRequest(userId, destinationUserId, newFriendRequest) {
        if (this.wss) {
            const friendRequestMessage = {
                type: "friend_request_create",
                friendRequestId: newFriendRequest._id.toString(),
            }

            const friendRequestStatus = {

            }

            this.broadcastMessageToBetweenTwoUsers(friendRequestMessage, userId, destinationUserId);
        }
    }

    notifyClientsAboutNewComment(userId, newComment) {
        if (this.wss) {
            const commentMessage = {
                type: "create_comment",
                userId: userId.toString(),
                commentId: newComment._id.toString(),
            };

            this.broadcastMessage(commentMessage);
        }
    }

    notifyClientsAboutNewPost(userId, newPost) {
        if (this.wss) {
            const postMessage = {
                type: "create_new_post",
                postId: newPost._id.toString(),
            };

            this.broadcastMessageToUser(postMessage, userId);
        }
    };

    notifyClientsAboutNewMessage(conversationId, newMessage) {
        if (this.wss) {
            const message = {
                type: "create_message",
                messageId: newMessage._id.toString(),
            }

            this.broadcastMessageToConversation(message, conversationId);
        }
    }

    notifyClientsAboutDeletePost (userId, deletedPost) {
        if (this.wss) {
            const deletePostMessage = {
                type: "delete_post",
                postId: deletedPost._id.toString(),
            };

            this.broadcastMessageToUser(deletePostMessage, userId);
        }
    }

    notifyClientsAboutCreateReaction(userId, newReaction) {
        if (this.wss) {
            const newReactionMessage = {
                type: "create_reaction",
                reactionId: newReaction._id.toString(),
            }

            this.broadcastMessageToUser(newReactionMessage, userId);
        }
    }

    notifyClientsAboutUpdateReaction(userId, updatedReaction) {
        if (this.wss) {
            const updatedReactionMessage = {
                type: "update_reaction",
                reactionId: updatedReaction._id.toString(),
            }

            this.broadcastMessageToUser(updatedReactionMessage, userId);
        }
    }

    broadcastMessage(message) {
        this.wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify(message));
            }
        });
    }

    broadcastMessageToUser(message, userId) {
        this.wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN && client.userId.toString() === userId.toString()) {
                client.send(JSON.stringify(message));
            }
        });
    }

    broadcastMessageToConversation(message, conversationId) {
        this.wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN && client.conversationId.toString() === conversationId.toString()) {
                client.send(JSON.stringify(message));
            }
        });
    }

    broadcastMessageToBetweenTwoUsers(message, firstUser, secondUser) {
        this.wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN && client.userId.toString() === firstUser.toString()) {
                client.send(JSON.stringify(message));
            }

            if (client.readyState === WebSocket.OPEN && client.userId.toString() === secondUser.toString()) {
                client.send(JSON.stringify(message));
            }
        });
    }
}

module.exports = WebSocketService;