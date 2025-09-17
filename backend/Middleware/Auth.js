import usermodel from '../DB/db.js'
import jwt from 'jsonwebtoken'
import 'dotenv/config'
export const middleware = async(req,res,next)=>{
    try{
 const token =req.cookies.jwt
    if(!token)return res.status(400).json({message:"no token"})
        const decode = await jwt.verify(token,process.env.SECRET)
    if(!decode)return res.status(400).json({message:"not authorized"})
        const user = await usermodel.findOne(decode.userid).select('--password')
    if(!user)return res.status(400).json("not authorized")
        res.user=user
        next()
    }catch(err){
        res.status(500).json({message:err.message})
    }
   
}