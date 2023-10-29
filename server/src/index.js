const database = require('./config/database')
const express = require("express");
const app = express();
const PORT = 8080;

database.connect()

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});