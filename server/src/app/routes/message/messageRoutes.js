const express = require("express");
const MessageController = require("../../controllers/Message/MessageController");
const ConversationController = require("../../controllers/Message/ConversationController");

const router = express.Router();

router.route("/").get(MessageController.getMessageData);
router.route("/").post(MessageController.createMessageData);

router.route("/").delete(MessageController.deleteMessageData);

router.route("/conversation/").get(ConversationController.getConversationData);

module.exports = router;