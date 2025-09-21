import usermodel from "../Models/Usermode.js";
import messagemode from "../Models/Message.js";


export const getchat=async (req,res)=>{
    try{
        res.send("working")
        const reqid = req.user._id
        const filteruser = await usermodel.find({_id:{$ne:reqid}}).select("-password")
        res.status(200).json(filteruser)

    }catch(e){
        console.log(e.message);
        res.status(500).json({message:e.message})

    }
    
}
export const getmessage=(req,res)=>{

}
export const getcontact=(req,res)=>{

}
export const sendmessage=(req,res)=>{

}
