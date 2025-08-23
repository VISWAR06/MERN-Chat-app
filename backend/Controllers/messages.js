import useodel from '../Models/usermodel.js'
import messagemode from '../Models/message.js'
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

    const msg = await messageModel.find({
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
    
}

export {getuser,getmessage,sendmessage}