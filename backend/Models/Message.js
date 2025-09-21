import mongoose from "mongoose";

const messageschema = new mongoose.Schema({
    senderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Usermode",
        required:true
    },receiverId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Usermode",
        required:true
    },message:{
        type:String
    },
    image:{
        type:String``
    }
},{timestamps:true})
const messagemode = mongoose.model("message",messageschema)
export default messagemode