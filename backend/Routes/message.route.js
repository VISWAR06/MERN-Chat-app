import express from 'express'
import middle from '../Middlewares/middleware.js'
const msg=express.Router()
msg.get('/user',middle,getuser)
