import jwt from 'jsonwebtoken'
import usermode from '../Models/usermodel'
import cookies from 'cookie-parser'
const protected=async(req,res,next)=>{
    try{
const token=req.cookies.jwt
if(!token)res.status(500).json({message:"no token founded"})
    const verify=jwt.verify(token,process.env.SECRET)
if(!verify)res.status(500).json({message:"not authorizied"})
    const user=await usermode.findById(token.userid).select("-password")
if(!user)res.status(500).json({message:"not authorizied"})
    req.user=user
next() 
    }catch(e){
res.status(500).json({message:e.message})
    }


}
export default protected