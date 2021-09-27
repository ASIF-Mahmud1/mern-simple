let BlogModel = require('../model/blog.model')

const create= async (req, res, next)=>{
    try {
        let blog =req.body
    
        let newBlog = new BlogModel(blog)
        let result= await newBlog.save()
        res.json(result)
    } catch (error) {
        console.error(error)
        res.error(error)
    }
}

const list= async (req, res, next)=>{
    try {
       const result = await BlogModel.find({})
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
