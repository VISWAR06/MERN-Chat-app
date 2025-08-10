import usermodel from "../Models/usermodel.js"
import bcrypt from 'bcryptjs'
import generatetoken from "../lib/jwt.js"
const signup=async(req,res)=>{
const{name,email,password}=req.body
try{
  if(!name||!email||!password){
    res.status(400).json({message:"Fill all the fields"})
  }
  if(password.length<8)res.status(400).json({message:"Minimum 8 length"})
  const user= await usermodel.findOne({email})
if(user)res.status(400).json({message:"user alrdy exits"})
  const hashedpasswrod= await bcrypt.hash(password,10);
const newuser=new usermodel({
  name,email,password:hashedpasswrod
})
   if(newuser){
    await generatetoken(newuser._id,res)
    await newuser.save()
    res.status(200).json({message:"created the user"
    })

   }else{
      res.status(400).json({message:"user is not created"})
    }

}catch(e){
res.status(500).json({message:e.message})
}
   

}
const login=async (req,res)=>{
  const{email,password}=req.body;
  try{
      const user=await usermodel.findOne({email})
      if(!user)res.status(400).json({message:"Invalid inputs"})
      const passwrdcrt= bcrypt.compare(password,user.password)
    if(!passwrdcrt)res.status(400).json({message:"Invalid inputs"})
      generatetoken(user._id,res)
    res.status(200).json({message:"logged in successfully"})
  }catch(e){
console.log(e.message)
res.status(500).json({message:e.message})
  }
}
const logout=(req,res)=>{
  res.json("singup")
}
export  {login,logout,signup}