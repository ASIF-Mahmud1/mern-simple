const mongoose = require('mongoose')
const FollowSchema= new mongoose.Schema({
    follower: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
    },
    following: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    updated: Date,
    created: {
      type: Date,
      default: Date.now
    },  
})

module.exports = mongoose.model('Follow', FollowSchema)