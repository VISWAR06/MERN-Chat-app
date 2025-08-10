import jwt from 'jsonwebtoken'

const generatetoken=(userid,res)=>{
    const token=jwt.sign({userid},process.env.SECRET,{
        expiresIn:'7d',
    })
    res.cookie('jwt',token,{
        maxAge:7*24*60*60*1000,
        httpOnly:true,
        SameSite:'strict',
        secured:process.env.TYPE!=='deve'
    })
    return token

}
export default generatetoken