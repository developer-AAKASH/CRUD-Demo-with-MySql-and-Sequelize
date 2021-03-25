// This section is basically importing required packges from npm...
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require('dotenv').config();

// Creating our App.
const app = express();

// This section is also import some files but this files are mainly written by us
// for e.g. below file is routes file for employee routes which we have write...
const employeeRoutes = require("./routes/employee");
const roleRoutes = require("./routes/role");

// Basic route which listen the application on "/" 
app.get("/", ( req, res )=>{
    res.send("Hello ");
});

// This is basically we are attaching middlewares to our applications....
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: false }));
app.use( express.static( path.join( __dirname, "public" )));
app.use( fileUpload() );
app.use( cookieParser() );
app.use( cors() );
// --------Here, we are attaching "/api" string to all our routes which is kind of middleware thing...
app.use("/api", employeeRoutes);
app.use("/api", roleRoutes);

// This is basically we are defineing our pourt on which we are listening...
app.listen( 3000, ()=>{
    console.log("App is running on 3000.....");
});
