const helmet = require("helmet");
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const compression = require("compression");
const { WebSocketServer } = require("ws");
const { createServer } = require("https");

const fs = require("fs");
const path = require("path");

const privateKeyPath = path.join(__dirname, "certificates", "private.key");
const certificatePath = path.join(__dirname, "certificates", "certificate.crt");

const routes = require("./app/routes");
const startServer = require("./utils/server/startServer");

const app = express();

const privateKey = fs.readFileSync(privateKeyPath, "utf8");
const certificate = fs.readFileSync(certificatePath, "utf8");

const credentials = {
    key: privateKey,
    cert: certificate,
};

const server = createServer(credentials, app);

const wss = new WebSocketServer({ server });

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
});

app.use(cors());
app.use(morgan("dev"));
app.use(helmet());
// app.use(limiter)
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

app.set("wss", wss);

routes(app);

startServer(app, server, wss);