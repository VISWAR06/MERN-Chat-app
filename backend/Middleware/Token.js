import jwt from 'jsonwebtoken'
 const genarateToken=(userid,res)=>{
    const token=jwt.sign({userid},process.env.SECRET,{expiresIn:"7d"})
    res.cookie("jwt",token,{
        maxAge:7*24*60*60*1000,
        httpOnly:true,
        sameSite:"strict",
        secure:process.env.NODE==="development"?false:true

    })
    return token
}
export default genarateToken