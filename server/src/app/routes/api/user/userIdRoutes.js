const express = require("express");
const UserIdController = require("../../../controllers/User/UserIdController");

const router = express.Router();

router.route("/:userId").get(UserIdController.getUserIdData);
router.route("/:userId/friend").get(UserIdController.getUserIdFriend);
router.route("/:userId/contact").get(UserIdController.getUserIdContact);
router.route("/:userId/profile").get(UserIdController.getUserIdProfile);
router.route("/:userId/follower").get(UserIdController.getUserIdFollower);
router.route("/:userId/following").get(UserIdController.getUserIdFollowing);
router.route("/:userId/photo-list").get(UserIdController.getUserIdPhotoList);
router.route("/:userId/video-list").get(UserIdController.getUserIdVideoList);
router.route("/:userId/group-list").get(UserIdController.getUserIdGroupList);

module.exports = router;
