import mongoose from "mongoose";
 const connectdb= async()=>{
    try{
       const connection= await mongoose.connect(process.env.MONGOURL)
       console.log("db connected")
    }catch(e){
        console.log(e.message)

    }
}
export default connectdb