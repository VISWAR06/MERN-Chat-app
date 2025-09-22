import usermodel from "../Models/Usermode.js";
import messagemode from "../Models/Message.js";
import cloudinary from "../Lib/Cloud.js";


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
        },{message:1,_id:0})
        const messageonly = await message.map(msg=>msg.message)
        res.status(200).json(messageonly)
        now work

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
export const sendmessage=async(req,res)=>{

    try{
        const {image,text}=req.body;
        const {id:recvid}=req.params
        const senderid=req.user._id
        let imageurl
        if(image){
            const uploadresopnce = await cloudinary.uploader.upload(image)
            imageurl=uploadresopnce.secure_url
        }
        const newmessage = new messagemode({
            receiverId:recvid,
            senderId:senderid,
            message:text,
            image:imageurl
        })
        await newmessage.save()
        res.status(200).json(newmessage)

    }catch(e){
        console.log(e.message)
        res.status(500).json({message:e.message})
    }

}
