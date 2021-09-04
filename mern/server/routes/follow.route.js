const express = require("express")
const followRoutes = express.Router()
const followCtrl= require("../controller/follow.controller");

followRoutes.route("/following").post(followCtrl.create)    
followRoutes.route("/following/:userID").get(followCtrl.listFollowing)  
followRoutes.route("/follow").get(followCtrl.list)   
followRoutes.route("/follower/:userID").get(followCtrl.listFollowers)    

// POST: follow a people
// GET: list people I am following
// GET: list of follow (both follower and following)
// GET: list people who follow me

module.exports= followRoutes