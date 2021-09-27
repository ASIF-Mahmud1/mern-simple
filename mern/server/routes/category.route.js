const express = require("express")
const categoryRoutes = express.Router()
const categoryCtrl =require("../controller/category.controller")

categoryRoutes.route("/category").post(categoryCtrl.create)
categoryRoutes.route("/category").get(categoryCtrl.list)

categoryRoutes.route("/addSummaryField").put(categoryCtrl.addSummaryField)
// POST: create subCategory 
// GET: list all subCategory
// PUT:  add the  summary field for all categories. Note it is used for experiment only

  module.exports= categoryRoutes