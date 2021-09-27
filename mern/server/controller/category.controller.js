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
       res.json(result)
    } catch (error) {
        console.error(error)
        res.error(error)
    }
}

module.exports={
    create,
    list
}
