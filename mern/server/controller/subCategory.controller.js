let SubCategory = require('../model/subCategory.model')

const create= async (req, res, next)=>{
    try {
        let subCategory =req.body
    
        let newsubCategory = new SubCategory(subCategory)
        let result= await newsubCategory.save()
        res.json(result)
    } catch (error) {
        console.error(error)
        res.error(error)
    }
}

const list= async (req, res, next)=>{
    try {
       const result = await SubCategory.find({})
       res.json(result)
    } catch (error) {
        console.error(error)
        res.error(error)
    }
}

const addSummaryField= async(req, res)=>{
    try {
     const response = await SubCategory.updateMany({}, { summary: "Give a short description about the  sub category" }); // Note it is used for experiment only
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
