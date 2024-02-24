const express = require("express");
const FriendRequestController = require("../controllers/FriendRequestController");

const router = express.Router();

router.route("/").get(FriendRequestController.getFriendRequestById);

module.exports = router;