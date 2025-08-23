import express from 'express'
import middle from '../Middlewares/middleware.js'
import{getuser,getmessage}  from '../Controllers/messages.js'
const msg=express.Router()
msg.get('/user',middle,getuser)
msg.get('/:id',getmessage)














export default msg
