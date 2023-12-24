const authRoutes = require("../routes/auth/authRoutes");
const storyRouter = require("../routes/media/storyRoutes");
const mediaRoutes = require("../routes/media/mediaRoutes");
const postRoutes = require("../routes/post/postRoutes");
const postIdRoutes = require("../routes/post/postIdRoutes");
const userRoutes = require("../routes/user/userRoutes");
const userIdRouter = require("../routes/user/userIdRoutes");
const suggestRoutes = require("../routes/suggestRoutes");
const settingRoutes = require("../routes/setting/settingRoutes");

const MiddlewareController = require("../controllers/Auth/MiddlewareController");

const routes = (app) => {
    app.use("/api/auth/", authRoutes);
    app.use("/api/secure/post/", MiddlewareController.verifyToken, postRoutes);
    app.use("/api/public/post/", postIdRoutes);
    app.use("/api/media/", mediaRoutes);
    app.use("/api/setting/", MiddlewareController.verifyToken, settingRoutes);
    app.use("/api/story/", MiddlewareController.verifyToken, storyRouter);
    app.use("/api/suggest/", MiddlewareController.verifyToken, suggestRoutes);
    app.use("/api/public/user/", userIdRouter);
    app.use("/api/secure/user/", MiddlewareController.verifyToken, userRoutes);

    app.get("/", async (req, res) => {
        res.status(200).json({
            message: "Test Register Back-end",
        });
    });
};

module.exports = routes;