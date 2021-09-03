const express = require("express")
const tweetRoutes = express.Router()
const tweetCtrl= require("../controller/tweet.controller");

tweetRoutes.route("/tweet").post(tweetCtrl.create)
tweetRoutes.route("/tweet").get(tweetCtrl.list)


// POST: create user
// GET: list all tweets


  module.exports= tweetRoutes