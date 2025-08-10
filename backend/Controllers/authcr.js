import usermodel from "../Models/usermodel.js"
import bcrypt from 'bcryptjs'
const signup=async(req,res)=>{
const{name,email,password}=req.body
try{
  if(password.length<8)res.status(400).send({message:"Minimum 8 length"})
  const user= await usermodel.findOne({email})
if(user)res.status(400).send({message:"user alrdy exits"})
  const hashedpasswrod= await bcrypt.hash(password,10);
const newuser=new usermodel({
  name,email,password:hashedpasswrod
})
   if(newuser){
    
   }

}catch(e){
res.status(500).send({message:e.message})
}
   

}
const logout=(req,res)=>{
  res.send("logout")
}
const login=(req,res)=>{
  res.send("singup")
}
export  {login,logout,signup}