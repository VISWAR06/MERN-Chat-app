import express from 'express'
const app=express()
import auth from './Routes/auth.route.js'

app.use('/api/auth',auth)
app.listen(5000,()=>{
    console.log("working")
})