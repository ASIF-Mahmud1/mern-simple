const express = require("express")
const blogRoutes = express.Router()
const blogCtrl =require("../controller/blog.controller")

blogRoutes.route("/blog").post(blogCtrl.create)
blogRoutes.route("/blog").get(blogCtrl.list)

// POST: create blog 
// GET: list all blog

  module.exports= blogRoutes