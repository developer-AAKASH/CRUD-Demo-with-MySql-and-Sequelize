// Importing mysql package..
const mysql = require("mysql");

// Exporting method which establishid the connection with database...
const dbConnection = mysql.createConnection({
    // All this information is confidential, so we are just keeping them secretly...
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    multipleStatements: true
});

dbConnection.connect((error)=>{
    if(error){
        console.log(error);
    } else{
        console.log("Connected...");
    }
});

module.exports = dbConnection;

