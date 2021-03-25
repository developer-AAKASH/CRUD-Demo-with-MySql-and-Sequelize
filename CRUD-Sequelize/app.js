const express = require("express");
const app = express();

const PORT = 3000;

const path = require("path");
const bodyParser = require("body-parser");

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: true }));

const tweetRoutes = require("./routes/tweet");
const postRoutes = require("./routes/post");

app.use("/api", tweetRoutes );
app.use("/api", postRoutes );

require("./src/database/connection");
// require("./src/bootstrap")();

app.listen(PORT);