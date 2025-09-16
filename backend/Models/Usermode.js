import mongoose from "mongoose";

const userschema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
        
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    profile:{
        type:String,
        required:true,
        default:" "
    }
},{timestamps:true})

const model=mongoose.model("users",userschema)
export default model