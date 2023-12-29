const WebSocket = require('ws');

const sendNewPostMessage = async (wss, postId) => {
    if (wss) {
        const message = {
            type: 'create_new_post',
            postId: postId,
        };

        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify(message));
            }
        });
    }
};

module.exports = { sendNewPostMessage };
