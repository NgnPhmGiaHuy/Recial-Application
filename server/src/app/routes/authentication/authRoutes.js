const User = require("../../models/User");
const express = require("express");
const AuthController = require("../../controllers/AuthController");

const router = express.Router();

router.route("/register").get((req, res) => {
    res.send("Register Back-end");
})

router.route("/register").post(AuthController.registerUser);

router.route("/login").get((req, res) => {
    res.send("Login Back-end");
});

router.route("/login").post(AuthController.loginUser)

module.exports = router;