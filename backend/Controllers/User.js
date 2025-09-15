import usermodel from '../Models/Usermode.js'
import bcrypt from 'bcryptjs'
export const signup = async(req,res)=>{
    try{  const {name,email,password}=req.body;
    if(!name||!email||!password)return res.status(400).json({message:"all fields req"});
    if(password.length<6)return res.status(400).json({message:"must be greater than 6 chart"});
    const exits=await usermodel.findOne({email})
    if(exits)res.status(400).json({message:"already exists"})
    const hashpass=await bcrypt.hash(password,10);
    const newuser=new usermodel({
        name,email,password:hashpass
    })
    if(newuser){

    }else{
        return res.status(400).json({message:"internal error"})
    }

    }
  catch(error){
    res.status(500).json({message:error.message})
  }


}