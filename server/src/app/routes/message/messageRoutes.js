const express = require("express");
const MessageController = require("../../controllers/Message/MessageController");

const router = express.Router();

router.route("/").get(MessageController.getMessageData);

module.exports = router;