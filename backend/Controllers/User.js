import usermodel from '../Models/Usermode.js'
import bcrypt from 'bcryptjs'
import genarateToken from '../Lib/Token.js';
export const signup = async(req,res)=>{
    try{  const {name,email,password}=req.body;
    if(!name||!email||!password)return res.status(400).json({message:"all fields req"});
    if(password.length<6)return res.status(400).json({message:"must be greater than 6 chart"});
    const exits=await usermodel.findOne({email})
    if(exits)res.status(400).json({message:"already exists"})
        const salt=await bcrypt.genSalt(10);
    const hashpass=await bcrypt.hash(password,salt);
    const newuser=new usermodel({
        name,email,password:hashpass
    })
    await newuser.save()
    genarateToken(newuser._id,res)
    res.status(201).json({
        name:newuser.name,
        email:newuser.email,
        _id:newuser._id
    })

    }
  catch(error){
    console.log(error.message)
    res.status(500).json({message:error.message})
  }


}
export const signin =async(req,res)=>{

}