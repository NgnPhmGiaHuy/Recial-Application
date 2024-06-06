const express = require("express");
const GroupController = require("../../../controllers/Group/GroupController");

const router = express.Router();

router.route("/post/").get(GroupController.getGroupPost);
router.route("/profile").get(GroupController.getGroupData);
router.route("/member/").get(GroupController.getGroupMember);
router.route("/activity/").get(GroupController.getGroupActivity);

router.route("/groups").get(GroupController.getMultipleGroupData);

module.exports = router;