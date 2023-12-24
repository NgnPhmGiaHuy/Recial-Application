const express = require("express");
const SettingController = require("../../controllers/Setting/SettingController");

const router = express.Router();

router.route("/post-visibility").post(SettingController.setPostVisibilitySetting);

module.exports = router;