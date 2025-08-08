import express from 'express'
import connectdb from './lib/db.js'
import dontenv from'dotenv'
import auth from './Routes/auth.route.js'
const app=express()
dontenv.config()
connectdb()
app.use(express.json())
app.get('/all',(req,res)=>res.send("hello"))
const port=process.env.PORT||5001
app.use('/api/auth',auth)
app.listen(port,()=>{
    console.log("working")
})