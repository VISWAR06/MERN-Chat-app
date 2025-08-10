import jwt from 'jsonwebtoken'
const generatetoken=(userid,res)=>{
    const token=jwt.sign({userid},process.env.SECRET,{
        expiresIn='7d'
    });
    
}