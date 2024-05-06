const express = require("express");

const UserGetDataController = require("../../controllers/User/UserGetDataController");
const UserUpdateDataController = require("../../controllers/User/UserUpdateDataController");
const UserCreateDataController = require("../../controllers/User/UserCreateDataController");

const router = express.Router();

router.route("/").get(UserGetDataController.getUserData);
router.route("/friend").get(UserGetDataController.getUserFriend);
router.route("/setting").get(UserGetDataController.getUserSetting);
router.route("/contact").get(UserGetDataController.getUserContact);
router.route("/profile").get(UserGetDataController.getUserProfile);
router.route("/message").get(UserGetDataController.getUserMessage);
router.route("/follower").get(UserGetDataController.getUserFollower);
router.route("/search").get(UserGetDataController.getUserSearchQuery);
router.route("/following").get(UserGetDataController.getUserFollowing);
router.route("/photo-list").get(UserGetDataController.getUserPhotoList);
router.route("/group-list").get(UserGetDataController.getUserGroupList);
router.route("/notification").get(UserGetDataController.getUserNotification);
router.route("/friend-request").get(UserGetDataController.getUserFriendRequest);

router.route("/profile").put(UserUpdateDataController.updateUserProfile);
router.route("/friend-request").put(UserUpdateDataController.updateUserFriendRequest);

router.route("/friend-request").post(UserCreateDataController.createUserFriendRequest);

module.exports = router;