const express = require("express");
const cors = require("cors");

const database = require("./config/database");
const routes = require("./app/routes");
const generateDummyData = require("./utils/dataGenerator");

const PORT = 8080;

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "50mb" }));

routes(app);

const startServer = async () => {
    try {
        await database.connect();
        // await generateDummyData();

        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });
    } catch (error) {
        console.error('Error starting server:', error);
    }
};

startServer();