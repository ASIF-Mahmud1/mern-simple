const mongoose = require('mongoose')
const CategorySchema= new mongoose.Schema({

	title:{
		type: String,
	 },

     imageUrl:{
		type: String,
	 },

    subCategory:[  {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'SubCategory',
	} ],
   
	
})

module.exports = mongoose.model('Category', CategorySchema)