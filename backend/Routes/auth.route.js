import express from "express"
import { login, logout, signup, upload, check } from '../Controllers/authcr.js'
import middle from '../Middlewares/middleware.js'
const route = express.Router()

route.post('/login', login)
route.post('/signup', signup)
route.post('/logout', middle, logout) 
route.put('/upload', middle, upload)
route.get('/check', middle, check)

export default route