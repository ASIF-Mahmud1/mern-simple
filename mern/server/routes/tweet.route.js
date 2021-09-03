const express = require("express")
const tweetRoutes = express.Router()
const tweetCtrl= require("../controller/tweet.controller");

tweetRoutes.route("/tweet").post(tweetCtrl.create)
tweetRoutes.route("/tweet").get(tweetCtrl.list)
tweetRoutes.route("/tweet/:userID").get(tweetCtrl.listByUserId)


// POST: create user
// GET: list all tweets
// GET: list tweets by UserID


  module.exports= tweetRoutes