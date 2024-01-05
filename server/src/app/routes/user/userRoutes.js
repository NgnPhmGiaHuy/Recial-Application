const express = require("express");
const UserController = require("../../controllers/User/UserController");

const router = express.Router();

router.route("/").get(UserController.getUserData);
router.route("/friend").get(UserController.getUserFriend);
router.route("/setting").get(UserController.getUserSetting);
router.route("/message").get(UserController.getUserMessage);
router.route("/search").get(UserController.getUserSearchQuery);
router.route("/follower").get(UserController.getUserFollower);
router.route("/following").get(UserController.getUserFollowing);
router.route("/photo-list").get(UserController.getUserPhotoList);
router.route("/group-list").get(UserController.getUserGroupList);
router.route("/notification").get(UserController.getUserNotification);

router.route("/profile").put(UserController.setUserProfile);

router.route("/friend-request").get(UserController.getUserFriendRequest);
router.route("/friend-request").put(UserController.setUserFriendRequest);
router.route("/friend-request").post(UserController.createUserFriendRequest);

module.exports = router;