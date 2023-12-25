const authRoutes = require("../routes/auth/authRoutes");
const commentRoutes = require("../routes/comment/commentRoutes");
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
    app.use("/api/v1/auth/", authRoutes);
    app.use("/api/v1/public/post/", postIdRoutes);
    app.use("/api/v1/secure/post/", MiddlewareController.verifyToken, postRoutes);
    app.use("/api/v1/secure/comment/", MiddlewareController.verifyToken, commentRoutes);
    app.use("/api/v1/media/", mediaRoutes);
    app.use("/api/v1/secure/setting/", MiddlewareController.verifyToken, settingRoutes);
    app.use("/api/v1/secure/story/", MiddlewareController.verifyToken, storyRouter);
    app.use("/api/v1/secure/suggest/", MiddlewareController.verifyToken, suggestRoutes);
    app.use("/api/v1/public/user/", userIdRouter);
    app.use("/api/v1/secure/user/", MiddlewareController.verifyToken, userRoutes);

    app.get("/", async (req, res) => {
        res.status(200).json({
            message: "Test Register Back-end",
        });
    });
};

module.exports = routes;