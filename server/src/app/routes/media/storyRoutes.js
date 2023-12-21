const express = require("express");
const StoryController = require("../../controllers/Media/StoryController");

const router = express.Router();

router.route("/").get(StoryController.getStory);

module.exports = router;