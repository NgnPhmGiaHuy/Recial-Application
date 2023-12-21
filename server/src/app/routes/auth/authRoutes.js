const express = require("express");
const AuthController = require("../../controllers/Auth/AuthController");
const MiddlewareController = require("../../controllers/Auth/MiddlewareController");

const router = express.Router();

router.route("/login").post(AuthController.loginUser);

router.route("/register").post(AuthController.registerUser);

router.route("/refresh").post(AuthController.requestRefreshToken);

router.route("/logout").get(MiddlewareController.verifyToken, AuthController.logoutUser);

module.exports = router;