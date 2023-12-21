const express = require("express");
const UserController = require("../../controllers/User/UserController");

const router = express.Router();

router.route("/").get(UserController.getUserData);
router.route("/friend").get(UserController.getUserFriend);
router.route("/message").get(UserController.getUserMessage);
router.route("/follower").get(UserController.getUserFollower);
router.route("/following").get(UserController.getUserFollowing);
router.route("/photo-list").get(UserController.getUserPhotoList);
router.route("/group-list").get(UserController.getUserGroupList);
router.route("/notification").get(UserController.getUserNotification);


module.exports = router;