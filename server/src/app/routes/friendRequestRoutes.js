const express = require("express");
const FriendRequestController = require("../controllers/Friend/FriendRequestController");

const router = express.Router();

router.route("/").get(FriendRequestController.getFriendRequestById);

module.exports = router;