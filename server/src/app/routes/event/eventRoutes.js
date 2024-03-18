const express = require("express");
const EventController = require("../../controllers/Event/EventController");

const router = express.Router();

router.route("/").get(EventController.getEventData);
router.route("/page/").get(EventController.getEventPageData);
router.route("/member/").get(EventController.getEventMember);

module.exports = router;