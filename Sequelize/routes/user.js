const express = require("express");
const { getAllUsers } = require("../controller/user");
const routes = express.Router();

routes.get(
    "/users",
    getAllUsers
);

module.exports = routes;