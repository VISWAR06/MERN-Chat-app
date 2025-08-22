import mongoose from "mongoose";
const msg=mongoose.Schema({
    senderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        require:true
    },recvId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        require:true
    },
    image:{
        type:string,
        deafult:""
    }
})