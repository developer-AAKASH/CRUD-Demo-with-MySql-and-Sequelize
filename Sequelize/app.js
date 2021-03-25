const express = require("express");
const bodyParser = require("body-parser");
require("./config/DBConnection");
const app = express();
const PORT = 3000;

const userRoutes = require("./routes/user");

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: true }));

app.use( "/api", userRoutes );

app.listen(PORT);