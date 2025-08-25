import {create} from 'zustand'
import { axioinstance } from '../library/axios'

const userAuth= create((set)=>({
    user:null,
    isSiginup:false,
    IsSignin:false,
    isUpdating:false,
    isChecking:true,
    checkAuth:async()=>{
        try{
            const res=await axioinstance.get("/api/check")
            set({user:res.data})
        }catch(e){
            console.log(e.message)
            set({user:null})

        }finally{
            set({isChecking:false})
        }
    }
}))
export default userAuth