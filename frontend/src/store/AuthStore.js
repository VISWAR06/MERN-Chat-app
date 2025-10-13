import {create} from 'zustand'

export const AuthStore = create((set)=>({
authuser:{name:'abcd',_id:123,age:25},
isLogged:false,
login:()=>{
    set({isLogged:true})
}
}))