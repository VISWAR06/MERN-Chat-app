import usermodel from "../Models/usermodel.js"
import bcrypt from 'bcryptjs'
const login=(req,res)=>{
const{name,email,password}=req.body
try{

}catch(e){

}
   

}
const logout=(req,res)=>{
  res.send("logout")
}
const signup=(req,res)=>{
  res.send("singup")
}
export  {login,logout,signup}