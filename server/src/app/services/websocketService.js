const { WebSocket } = require('ws');

const sendNewPostMessage = async (wss, userId, postId) => {
    if (wss) {
        const message = {
            type: 'create_new_post',
            postId: postId.toString(),
        };

        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN && client.userId.toString() === userId.toString()) {
                client.send(JSON.stringify(message));
            }
        });
    }
};

module.exports = { sendNewPostMessage };
