import useodel from '../Models/usermodel.js'
const getuser=async(req,res)=>{
    try{
        const loggedin=req.user._id;
        const filter=await useodel.find({_id:{$ne:loggedin}}).select("-password")

    }catch(e){
        res.status(400).json({message:e.message})
    }
}
const getmessage=async(req,res)=>{
    try{
        const{id:receiverid}=req.params
        

    }catch(e){
        console.log(e.message)
res.status(400).json({message:e.message})
    }

}
export {getuser,getmessage}