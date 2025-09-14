import express from "express"
import dotenv from 'dotenv'
import auth from './Routes/auth.route.js'
import message from './Routes/message.route.js'
dotenv.config()
const app=express()

const port=process.env.PORT || 3000;

app.use('auth/api',auth)
app.use('/message',message)
app.listen(port,()=>{
    console.log(`running in port no ${port}`)
})