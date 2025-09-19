import aj from '../Lib/Arcjet.js'
import {isSpoofetBot}from '@arcjet/inspect'
 
export const ajprotect = async(req,res)=>{
    try{
        const decision = await aj.protect(req)
        if(decision.isDenied()){
            if(decision.reason.isRateLimit())
            {
                return res.status(429).json({message:"Rate limit exceded"})
            }else if(decision.reason.isBot()){
return res.status(403).json({message:"bot access denied"})
            }
            else{
                return res.status(403).json({message:"access denied by security policy"})
            }
                }
            if(decision.result.some(isSpoofetBot)){
                return res.status(403).json({message:"bot activity founded"})
            }
            next();

    }catch(error){
        console.log(error.message)
res.status(500).json({message:error.message})
    }
    
}