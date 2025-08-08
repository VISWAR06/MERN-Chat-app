import express from 'express'
const app=express()
import auth from './Routes/auth.route.js'
dontenv.config()
const port=process.env.PORT||5001
app.use('/api/auth',auth)
app.listen(port,()=>{
    console.log("working")
})