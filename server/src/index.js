const express = require("express");
const cors = require("cors");

const database = require("./config/database");
const authRoutes = require("./app/routes/authentication/authRoutes");

const PORT = 8080;

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "50mb" }));

app.use("/api/auth/", authRoutes);

app.get("/", async (req, res) => {
    res.status(200).json({
        message: "Test Register Back-end",
    });
});

const startServer = async () => {
    try {
        await database.connect();
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });
    } catch (error) {
        console.error('Error starting server:', error);
    }
};


startServer();