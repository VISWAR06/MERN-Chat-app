import useodel from '../Models/usermodel.js'
const getuser=async(req,res)=>{
    try{
        const loggedin=req.user._id;
        const filter=await useodel.find({_id:{$ne:loggedin}}).select("-password")

    }catch(e){
        res.status(400).json({message:e.message})
    }
}
export default {getuser}