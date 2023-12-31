const express = require("express");
const FriendRequestController = require("../controllers/FriendRequestController");

const router = express.Router();

router.route("/:requestId").get(FriendRequestController.getFriendRequestById);

module.exports = router;