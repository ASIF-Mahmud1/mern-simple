let UserModel = require('../model/user.model')

const create= async (req, res, next)=>{
    try {
        let user = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password, 
          };
    
        let newUser = new UserModel(user)
        let result= await newUser.save()
        res.json(result)
    } catch (error) {
        console.error(error)
        res.error(error)
    }
}

const list= async (req, res, next)=>{
    try {
       const result = await UserModel.find({})
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
