const express = require("express");
const cors = require("cors");
const { WebSocketServer } = require("ws");
const { createServer } = require("http");

const database = require("./config/database");
const routes = require("./app/routes");
const generateDummyData = require("./utils/dataGenerator");

const PORT = 8080;

const app = express();
const server = createServer(app);

const wss = new WebSocketServer({ server });

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "50mb" }));

app.set("wss", wss);

routes(app);

const startServer = async () => {
    try {
        await database.connect();
        // await generateDummyData();

        server.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });

        wss.on("connection", (ws) => {
            console.log('Client connected');

            ws.on('error', console.error);

            ws.on('message', (message) => {
                console.log('Received message:', message);
            });
        })
    } catch (error) {
        console.error('Error starting server:', error);
    }
};

startServer();