let mongoose = require('mongoose')
const TweetSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: 'text is required'
  },
  
  retweets:[ {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tweet',
  }],

  likes:[ {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
	}],

  count:{
      type:Number,
      default:0
  } ,
  
  userID:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
},

  updated: Date,
  created: {
    type: Date,
    default: Date.now
  },    

})


 



module.exports = mongoose.model('Tweet', TweetSchema)