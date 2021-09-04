const express = require("express")
const followRoutes = express.Router()
const followCtrl= require("../controller/follow.controller");

followRoutes.route("/following").post(followCtrl.create)    // follow a people
followRoutes.route("/following/:userID").get(followCtrl.listFollowing)  // people I am following
followRoutes.route("/follow").get(followCtrl.list)   // list of follow(both follower and following)
followRoutes.route("/follower/:userID").get(followCtrl.listFollowers)    // people who follow me


module.exports= followRoutes