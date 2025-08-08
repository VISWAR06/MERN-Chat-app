import mongoose from "mongoose";
const schema=mongoose.schema({
    name:{
        type:String,
        required:true,maxlength:10
    },
    password:{
        type:String,
        required:true,minlength:8
    },email:{
        required:true,type:email,unique:true
    },profilw:{
        type:String,
        default:" "
    }

})
const model=mongoose.model("usermodel",schema)
export default model