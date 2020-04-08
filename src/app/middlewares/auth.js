require('dotenv').config()
const jwt = require('jsonwebtoken')
const { promisify } = require('util')


module.exports = async (req, res, next) =>{
    const authHeader = req.headers.authorization

    if(!authHeader){
        console.log("erro")
        return res.status(401).json({error:'token not provided'})
    }

    const[, token] = authHeader.split(' ')

    try{
     const decoded=  await promisify(jwt.verify)(token, process.env.SECRET)

     req.userEmail = decoded.email

     return next()

    }catch(err){
        console.log("erro")
        return res.status(401).json({error:'token not provided'})
    }

}