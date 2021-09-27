const express = require("express")
const subCategoryRoutes = express.Router()
const subCategoryCtrl =require("../controller/subCategory.controller")

subCategoryRoutes.route("/subCategory").post(subCategoryCtrl.create)
subCategoryRoutes.route("/subCategory").get(subCategoryCtrl.list)

subCategoryRoutes.route("/addSummaryFieldSubCategory").put(subCategoryCtrl.addSummaryField)


// POST: create subCategory 
// GET: list all subCategory
// PUT:  add the  summary field for all sub-categories. Note it is used for experiment only
  module.exports= subCategoryRoutes