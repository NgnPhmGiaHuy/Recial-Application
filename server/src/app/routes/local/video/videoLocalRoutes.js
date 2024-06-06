const express = require("express");
const router = express.Router();
const cron = require("node-cron");

const VideoDownloadController = require("../../../controllers/Video/VideoDownloadController");

router.route("/").get(VideoDownloadController.downloadVideoAndUpdateURL);

cron.schedule("*/30 * * * *", async () => {
    console.log("Running scheduled video download and update job");
    await VideoDownloadController.downloadVideoAndUpdateURL();
});

module.exports = router;