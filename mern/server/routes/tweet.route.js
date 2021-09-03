const express = require("express")
const tweetRoutes = express.Router()
const dbo = require("../db/conn");
let TweetModel = require('../model/tweet.model')

// POST: create user
tweetRoutes.route("/tweet").post(function (req, res) {
  
    let tweet = {
      text: req.body.text,
      userID: req.body.userID,
     
    };
    let newTweet = new TweetModel(tweet)

    newTweet.save()
    .then(doc => {
      console.log(doc)
      res.json({
       message:"Sucessfully created tweet !",
       result: doc
     });
    })
    .catch(err => {
      console.error(err)
      res.json({err})
    })

  });

    // GET: list all tweets
    tweetRoutes.route("/tweet").get(function (req, res) {
        TweetModel
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


  module.exports= tweetRoutes