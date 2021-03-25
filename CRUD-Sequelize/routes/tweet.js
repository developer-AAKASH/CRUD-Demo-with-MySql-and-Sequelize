const express = require("express");
const { getAllTweets, getTweetById, getTweetByUserId, addTweet } = require("../controller/tweet");
const routes = express.Router();

routes.get("/tweets", getAllTweets);

routes.get("/tweets/:tweetId", getTweetById );

routes.get("/tweets/user/:userId", getTweetByUserId);

routes.post("/tweets", addTweet );

module.exports = routes;