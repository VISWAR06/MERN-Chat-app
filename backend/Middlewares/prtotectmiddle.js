import jwt from 'jsonwebtoken'
import usermode from '../Models/usermodel'
const protected=async(req,res,next)=>{
const token=req.cookie.jwt
if(!token)res.status(500).json({message:"no token founded"})
    const

}
export default protected