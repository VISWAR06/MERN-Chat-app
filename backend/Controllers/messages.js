import useodel from '../Models/usermodel.js'
import messagemode from '../Models/message.js'
import cloudinary from '../lib/cloud.js';
const getuser=async(req,res)=>{
    try{
        const loggedin=req.user._id;
        const filter=await useodel.find({_id:{$ne:loggedin}}).select("-password")

    }catch(e){
        res.status(400).json({message:e.message})
    }
}
const getmessage = async (req, res) => {
  try {
    const { id: receiverid } = req.params;
    const myid = req.user._id;

    const msg = await messagemode.find({
      $or: [
        { senderid: myid, receiver: receiverid },
        { senderid: receiverid, receiver: myid }
      ]
    });

    return res.status(200).json({ message: msg });
  } catch (e) {
    console.error(e.message);
    return res.status(400).json({ message: e.message });
  }
};
const sendmessage=async(req,res)=>{
    try{
        const{id:receiverid}=req.params
        const {image,text}=req.body
        const senderid=req.user_id
        let url
        if(image){
            const imageurl=cloudinary.uploader.upload(image)
            url= await imageurl.secure_url
        }
        const newmessage=new messagemode({
            image:url,text,receiverid,senderid
        })
        await newmessage.save()
        if(newmessage)res.status(200).json({message:"new message created"})

    }catch(e)
    {

    }

}

export {getuser,getmessage,sendmessage}