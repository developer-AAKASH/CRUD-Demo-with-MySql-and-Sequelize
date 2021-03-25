const express = require("express");
const { getAllPosts } = require("../controller/user");
const routes = express.Router();

routes.get(
    "/users",
    getAllPosts
);

module.exports = routes;