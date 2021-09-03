const express = require("express")
const userRoutes = express.Router()
const userCtrl =require("../controller/user.controller")

userRoutes.route("/user").post(userCtrl.create)
userRoutes.route("/user").get(userCtrl.list)

// POST: create user 
// GET: list all users

  module.exports= userRoutes