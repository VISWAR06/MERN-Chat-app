import {create} from 'zustand'

const userAuth= create((set)=>({
    user:null,
    isSiginup:false,
    IsSignin:false,
    isUpdating:false,
    isChecking:true
}))
export default userAuth