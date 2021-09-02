const express = require("express")
const userRoutes = express.Router()
const dbo = require("../db/conn");

// POST: create user
userRoutes.route("/user").post(function (req, res) {
    let db_connect = dbo.getDb("employees");  // what will happen if rename employees ?
    let myobj = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    };
    db_connect.collection("users").insertOne(myobj, function (err, result) {
      if (err) throw err;
      res.json({
        message:"Sucessfully created User !",
        result: result
      });
    });
  });

  // GET: list all users
  userRoutes.route("/user").get(function (req, res) {
    let db_connect = dbo.getDb("employees");
    db_connect
      .collection("users")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
      });
  });

  module.exports= userRoutes