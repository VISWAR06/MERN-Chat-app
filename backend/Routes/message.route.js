import express from 'express'
import middle from '../Middlewares/middleware.js'
import{getuser,getmessage,sendmessage}  from '../Controllers/messages.js'
const msg=express.Router()
msg.get('/user',middle,getuser)
msg.get('/:id',getmessage)
msg.post("/send/:id",sendmessage)














export default msg
