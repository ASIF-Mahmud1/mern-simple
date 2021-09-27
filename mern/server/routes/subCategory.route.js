const express = require("express")
const subCategoryRoutes = express.Router()
const subCategoryCtrl =require("../controller/subCategory.controller")

subCategoryRoutes.route("/subCategory").post(subCategoryCtrl.create)
subCategoryRoutes.route("/subCategory").get(subCategoryCtrl.list)

// POST: create subCategory 
// GET: list all subCategory

  module.exports= subCategoryRoutes