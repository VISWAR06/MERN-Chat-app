import express from "express"
import dotenv from 'dotenv'
import auth from './Routes/auth.route.js'
import message from './Routes/message.route.js'
import path from 'path'
import connect from "./DB/db.js"

dotenv.config()
const app=express()
const __dirname=path.resolve();
const port=process.env.PORT || 3000;
connect()

app.use('auth/api',auth)
app.use('/message',message)
if(process.env.NODE=="production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")));
    app.get("*",(req,res)=>{
        res.sendFile(path.join(__dirname,"../frontend/dist"))
    })
}
app.listen(port,()=>{
    console.log(`running in port no ${port}`)
})