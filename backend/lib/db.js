import mongoose from "mongoose";
export const connectdb= async()=>{
    try{
        await mongoose.connect(process.env.MONGOURL)
    }catch(e){

    }
}