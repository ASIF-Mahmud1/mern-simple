import mongoose from 'mongoose'
import crypto from 'crypto'
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Name is required'
  },
  email: {
    type: String,
    trim: true,
    unique: 'Email already exists',
    match: [/.+\@.+\..+/, 'Please fill a valid email address'],
    required: 'Email is required'
  },
  password: {
    type: String,
    trim: true,
    required: 'Password is required'
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  },

  follower:[ {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
	}],

  following:[ {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
	}]
  
})


 





export default mongoose.model('User', UserSchema)
