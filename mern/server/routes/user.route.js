const express = require("express")
const userRoutes = express.Router()
const dbo = require("../db/conn");
let UserModel = require('../model/user.model')

// POST: create user
userRoutes.route("/user").post(function (req, res) {
  
    let user = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    };
    let newUser = new UserModel(user)

    newUser.save()
    .then(doc => {
      console.log(doc)
      res.json({
       message:"Sucessfully created user !",
       result: doc
     });
    })
    .catch(err => {
      console.error(err)
      res.json({err})
    })

  });

  // GET: list all users
  userRoutes.route("/user").get(function (req, res) {
  UserModel
  .find({
     // search query
  })
  .then(doc => {
    console.log(doc)
    res.json({doc})
  })
  .catch(err => {
    console.error(err)
    res.json({err})
  })
  });

  module.exports= userRoutes