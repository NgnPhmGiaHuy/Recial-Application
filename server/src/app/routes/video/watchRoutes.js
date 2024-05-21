const express = require("express");
const router = express.Router();

const WatchController = require("../../controllers/Video/WatchController");

router.route("/").get(WatchController.getUserWatchData);

module.exports = router;