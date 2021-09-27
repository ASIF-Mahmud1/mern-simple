const mongoose = require('mongoose')
const SubCategorySchema= new mongoose.Schema({

	title:{
		type: String,
	 },

     imageUrl:{
		type: String,
	 },

    blogs:[  {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Blog',
	} ],

	summary:{
		type: String,
	 },
   
	
})

module.exports = mongoose.model('SubCategory', SubCategorySchema)