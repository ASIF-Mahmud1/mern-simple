const express = require("express")
const tweetRoutes = express.Router()
const tweetCtrl= require("../controller/tweet.controller");

tweetRoutes.route("/tweet").post(tweetCtrl.create)
tweetRoutes.route("/tweet").get(tweetCtrl.list)
tweetRoutes.route("/tweet/:userID").get(tweetCtrl.listByUserId)
tweetRoutes.route("/tweet/:tweetID").delete(tweetCtrl.removeTweet)
tweetRoutes.route("/like-tweet").put(tweetCtrl.likeTweet)
//tweetRoutes.route("/unlike-tweet").put(tweetCtrl.removeTweet)

// POST: create user
// GET: list all tweets
// GET: list tweets by UserID
// DELETE: delete tweet by authorised user 
// PUT : like a tweet


  module.exports= tweetRoutes