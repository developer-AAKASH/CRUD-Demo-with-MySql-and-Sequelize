const express = require("express");
const { getAllPosts } = require("../controller/post");
const routes = express.Router();

routes.get( "/posts", getAllPosts);

module.exports = routes;