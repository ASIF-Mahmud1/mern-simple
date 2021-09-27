let Category = require('../model/category.model')

const create= async (req, res, next)=>{
    try {
        let category =req.body
    
        let newCategory = new Category(category)
        let result= await newCategory.save()
        res.json(result)
    } catch (error) {
        console.error(error)
        res.error(error)
    }
}

const list= async (req, res, next)=>{
    try {
       const result = await Category.find({})
      // .populate("subCategory")
       .populate({
           path:'subCategory',
           populate: { path: 'blogs',select:"_id title " }
       }).exec()
       res.json(result)
    } catch (error) {
        console.error(error)
        res.json(error)
    }
}

const addSummaryField= async(req, res)=>{
    try {
     const response = await Category.updateMany({}, { summary: "Give a short description about the category" }); // Note it is used for experiment only
     return res.json(response)
    } catch (error) {
    
      return res.status(400).json({
        error: error
      })
    }
  
 
  }

module.exports={
    create,
    list,
    addSummaryField
}
