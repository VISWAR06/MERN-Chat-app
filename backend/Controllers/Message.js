import usermodel from "../Models/Usermode.js";
import messagemode from "../Models/Message.js";
import cloudinary from "../Lib/Cloud.js";


export const getchat=async (req,res)=>{
    // in this we get the id of the sender form the middelware 
    // then we create a new set in that map function we check the sender and loggedid return them 
    try{
         const loggedinid = req.user._id
    const message = await messagemode.find({
        $or:[{senderId:loggedinid},{receiverId:loggedinid}]
    })
    const chatid = [
        ...new Set(
            message.map((msg)=>msg.senderId.toString()===loggedinid.toString()
        ?receiverId.toString():senderId.toString()
        )
    ]
    const chatpartners = await usermodel.find({_id:{$in:chatid}}).select("-password")
    res.status(200).json({message:chatpartners})

    }
    catch(e){
        console.log(e.message)
        res.status(500).json({message:e.message})
    }
   
   
    
}
export const getmessage=async(req,res)=>{
    // in this we get the id sender id from the middelware and the reciver form the params
    // fetch the messages from the db by using the "or" this if the sender is me or the another user vise versa fro the receiver also

    try{
        const sendid = req.user._id;
        const {id:recvid}=req.params
        const message = await messagemode.find({
            $or:[{senderId:sendid,receiverId:recvid},
                {senderId:recvid,receiverId:sendid}
            ]
        })
        res.status(200).json(message)
    

    }catch(e){
        console.log(e.message)
        res.status(500).json({message:e.message})
    }

}
export const getcontact=async (req,res)=>{
    // in this we get all the contact from the db withotu the user loggedin other than them all the contacts are selected
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
    // in this we get the text image from the user and the sender formthe middelware and then recv from the params
    // after if the image is avalb we push inot the cloudnay and then create a new object holdin the values int ehmessage model

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
