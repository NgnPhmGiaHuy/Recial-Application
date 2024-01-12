const express = require("express");
const GroupController = require("../../controllers/Group/GroupController");

const router = express.Router();

router.route("/").get(GroupController.getGroupData);
router.route("/post/").get(GroupController.getGroupPost);
router.route("/member/").get(GroupController.getGroupMember);
router.route("/activity/").get(GroupController.getGroupActivity);

module.exports = router;