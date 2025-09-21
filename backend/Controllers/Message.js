import usermodel from "../Models/Usermode.js";
import messagemode from "../Models/Message.js";


export const getchat=async (req,res)=>{
   
    
}
export const getmessage=async(req,res)=>{
    try{
        const sendid = req.user._id;
        const {id:recvid}=req.params
        const message = await messagemode.find({
            $or:[{senderId:sendid,receiverId:recvid},
                {senderId:recvid,receiverId:sendid}
            ]
        })

    }catch(e){
        console.log(e.message)
        res.status(500).json({message:e.message})
    }

}
export const getcontact=async (req,res)=>{
     try{
     
const reqid = req.user._id
const filteruser = await usermodel.find({_id:{$ne:reqid}}).select("-password")
res.status(200).json(filteruser)



    }catch(e){
        console.log(e.message);
        res.status(500).json({message:e.message})

    }

}
export const sendmessage=(req,res)=>{

}
