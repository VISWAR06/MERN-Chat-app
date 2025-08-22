import jwt from 'jsonwebtoken';
import usermode from '../Models/usermodel.js';

const middle = async (req, res, next) => {
  let token
     if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
  try {
    token=req.headers.authorization.split(' ')[1]
    const decode=jwt.verify(token,process.env.SECRET)
    req.user=await usermode.findById(decode.userid).select("-password")
 
      next()
    

    
  } catch (e) {
    return res.status(401).json({ message: e.message });
  }
}
if(!token){
  res.status(400).json("no token generated")
}

};

export default middle;
