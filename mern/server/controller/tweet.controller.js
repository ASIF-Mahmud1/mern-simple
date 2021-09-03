const TweetModel = require('../model/tweet.model')

const create= async (req, res, next)=>{
    try {
        let tweet = {
            text: req.body.text,
            userID: req.body.userID, 
          };
    
        let newTweet = new TweetModel(tweet)
        let result= await newTweet.save()
        res.json(result)
    } catch (error) {
        console.error(error)
        res.error(error)
    }
}

const list= async (req, res, next)=>{
    try {
       const result = await TweetModel.find({})
        res.json(result)
    } catch (error) {
        console.error(error)
        res.error(error)
    }
}

module.exports={
    create,
    list
}
