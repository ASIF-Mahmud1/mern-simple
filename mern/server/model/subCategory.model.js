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
   
	
})

module.exports = mongoose.model('SubCategory', SubCategorySchema)