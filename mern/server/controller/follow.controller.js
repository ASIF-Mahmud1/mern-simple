const Follow = require('../model/follow.model')

const create= async (req, res, next)=>{
    try {
        let follow = {
            follower: req.body.follower,
            following: req.body.following, 
          };
    
        let newFollow = new Follow(follow)
        let result= await newFollow.save()
        res.json(result)
    } catch (error) {
        console.error(error)
        res.error(error)
    }
}

const list= async (req, res, next)=>{
    try {
       const result = await Follow.find({})
        res.json(result)
    } catch (error) {
        console.error(error)
        res.error(error)
    }
}

const listFollowers= async (req, res, next)=>{
    try {
       const userID= req.params.userID 
       const result = await Follow.find({following:userID})
       .populate( { path: 'follower', select: 'name email' })
        res.json(result)
    } catch (error) {
        console.error(error)
        res.error(error)
    }
}

const listFollowing= async (req, res, next)=>{
    try {
       const userID= req.params.userID 
       const result = await Follow.find({follower:userID}).select('_id follower following')
       .populate( { path: 'follower', select: 'name email' })
       .populate( { path: 'following', select: 'name email' })
        res.json(result)
    } catch (error) {
        console.error(error)
        res.error(error)
    }
}

module.exports={
    create,
    list,
    listFollowers,
    listFollowing
}