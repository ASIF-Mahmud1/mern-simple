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

const listByUserId= async (req, res, next)=>{
    try {
       const userID= req.params.userID 
       const result = await TweetModel.find({userID:userID})
        res.json(result)
    } catch (error) {
        console.error(error)
        res.error(error)
    }
}

const removeTweet = async (req, res, next)=>{
    try {
       const tweetID= req.params.tweetID 
       const userID= req.body.userID
       const result = await TweetModel.findById({ _id: tweetID})
       if(!result)
       {
        res.json({message:"Tweet not found",result})
       }
       else 
       {
            if( result.userID===userID)    //  User  authorized to delete 
            {
                 await result.remove();
                 res.json({message:"Tweet deleted succesfully !",result})
            }
            else                          // User not authorized to delete the tweet
            {
                 res.json({message:"User not Authorized to delete"})
            }
        
       }
   
    } catch (error) {
        console.error(error)
        res.json(error)
    }
}
const likeTweet= async (req, res, next)=>{
    try {
       const tweetID= req.body.tweetID 
       const userID= req.body.userID
       const result = await TweetModel.findOneAndUpdate(
           {_id:tweetID},
           { $push: { 'likes': userID } },
           { new: true }
           )
           .populate( { path: 'likes', select: 'name email' })
        res.json(result)
    } catch (error) {
        console.error(error)
        res.error(error)
    }
}


module.exports={
    create,
    list,
    listByUserId,
    removeTweet,
    likeTweet
}
