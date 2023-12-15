const userRoutes = require("../routes/userRoutes");
const postRoutes = require("../routes/postRoutes");
const suggestRoutes = require("../routes/suggestRoutes");
const authRoutes = require("./authentication/authRoutes");

const routes = (app) => {
    app.use("/api/auth/", authRoutes);
    app.use("/api/post/", postRoutes);
    app.use("/api/suggest/", suggestRoutes);
    app.use("/api/user/", userRoutes);

    app.get("/", async (req, res) => {
        res.status(200).json({
            message: "Test Register Back-end",
        });
    });
};

module.exports = routes;