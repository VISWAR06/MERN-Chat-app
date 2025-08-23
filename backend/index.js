import express from 'express'
import connectdb from './lib/db.js'
import dontenv from'dotenv'
import auth from './Routes/auth.route.js'
import cookieParser from 'cookie-parser'
import msg from './Routes/message.route.js'
const app=express()
dontenv.config()
connectdb()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


const port=process.env.PORT||5001
app.use('/api/auth',auth)
app.use('/api/message',msg)
app.listen(port,()=>{
    console.log("working")
})