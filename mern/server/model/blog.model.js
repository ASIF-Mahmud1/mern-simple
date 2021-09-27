const mongoose = require('mongoose')
const BlogSchema= new mongoose.Schema({
    userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
	},
    content: {
		type: String,
	},
    html: {
		type: String,
	},
	updated: Date,
    created: {
      type: Date,
      default: Date.now
    },
	title:{
	   type: String,
	},
	summary:{
		type: String,
	 },
	tags: [ {type: String} ]
})

module.exports = mongoose.model('Blog', BlogSchema)