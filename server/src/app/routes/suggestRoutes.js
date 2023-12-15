const express = require("express");
const SuggestController = require("../controllers/SuggestController");

const router = express.Router();

router.route("/event").get(SuggestController.getSuggestEventData);
router.route("/group").get(SuggestController.getSuggestGroupData);
router.route("/page").get(SuggestController.getSuggestPageData);

module.exports = router;