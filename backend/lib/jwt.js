import jwt from 'jsonwebtoken'

const generatetoken=(id)=>{
    const token=jwt.sign({id},process.env.SECRET,{
        expiresIn:'7d',
    })
    
    return token

}
export default generatetoken