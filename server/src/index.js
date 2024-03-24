const jwt= require("jsonwebtoken");
const express = require("express");
const cors = require("cors");
const { WebSocketServer } = require("ws");
const { createServer } = require("http");

const database = require("./config/database");
const routes = require("./app/routes");
const generateDummyData = require("./utils/dataGenerator/");

const PORT = 8080;

const app = express();
const server = createServer(app);

const wss = new WebSocketServer({ server });

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "50mb" }));

app.set("wss", wss);

routes(app);

let connectedClients = 0;

const startServer = async () => {
    try {
        await database.connect();
        // await generateDummyData();

        server.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });

        wss.on("connection", (ws, req) => {
            connectedClients++;
            console.log(`Client connected. Total clients: ${connectedClients}`);

            const token = req.url.split('=')[1];

            try {
                const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

                if (!decodedToken) {
                    return ws.terminate();
                }

                ws.userId = decodedToken.userId;

                ws.on('error', console.error);
                ws.on('message', (message) => {
                    console.log('Received message:', message);
                });

                ws.on('close', () => {
                    connectedClients--;
                    console.log(`Client disconnected. Total clients: ${connectedClients}`);
                });
            } catch (error) {
                return ws.terminate();
            }
        })
    } catch (error) {
        return console.error('Error starting server:', error);
    }
};

startServer();