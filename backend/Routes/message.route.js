import express from 'express'
import middle from '../Middlewares/middleware.js'
import
const msg=express.Router()
msg.get('/user',middle,getuser)














export default msg
