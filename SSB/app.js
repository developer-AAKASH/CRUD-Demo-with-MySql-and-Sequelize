const express = require("express");
const app = express();
require("./src/config/dbConnections");
const PORT = 3000;

// const path = require("path");
const bodyParser = require("body-parser");

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: true }));

const userRoutes = require("./src/routes/user");

app.use("/api", userRoutes );

app.listen(PORT);