const express = require("express")
const categoryRoutes = express.Router()
const categoryCtrl =require("../controller/category.controller")

categoryRoutes.route("/category").post(categoryCtrl.create)
categoryRoutes.route("/category").get(categoryCtrl.list)

// POST: create subCategory 
// GET: list all subCategory

  module.exports= categoryRoutes