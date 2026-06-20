import usermodel from '../Models/Usermode.js'
import bcrypt from 'bcryptjs'
import genarateToken from '../Lib/Token.js';
import { sendemail } from '../Emails/handle.js';
import 'dotenv/config'
import cloudinary from '../Lib/Cloud.js';
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
    try{
      await sendemail(newuser.email,newuser.name,process.env.CLIENT_URL)

    }catch(error){
      console.log(error.message)
    }

    }
  catch(error){
    console.log(error.message)
    res.status(500).json({message:error.message})
  }


}
export const login =async(req,res)=>{
const {email,password}=req.body;
try{
  const user = await usermodel.findOne({email})
  if(!user)return res.status(400).json({message:"no user"})
  const pass=await bcrypt.compare(password,user.password)
if(!pass)return res.status(400).json({message:"invalid credatianls"})
  genarateToken(user._id,res)
res.status(200).json({
  _id:user._id,
  name:user.name,
  profilepic:user.profile
}
)

}catch(error){
  console.log(error.message)
  res.status(500).json({message:"error in the segment"})

}
}
export const logout = async(req,res)=>{
  const token = req.cookies.jwt
  if(!token)return res.status(500).json("not logged in")
  res.cookie("jwt","",{maxAge:0})
  res.status(200).json({message:"logouted successfully"})
}
export const upload = async(req,res)=>{
  try{
    const {profilepic}=req.body;
    if(!profilepic)return res.status(400).json({message:"pic required"})
      const userid=req.user._id
    const updateurl = await cloudinary.uploader.upload(profilepic)
   const updated= await user.findByIdAndUpdate(userid,{profilepic:updateurl.secure_url},{new:true})
   res.status(200).json({message:"updated"})

  }catch(e){
    res.status(500).json({message:e.message})

  }
} 