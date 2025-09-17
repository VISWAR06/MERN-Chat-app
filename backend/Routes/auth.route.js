import express from 'express'
import { signup,login,logout,upload } from '../Controllers/User.js'

import { middleware } from "./Middleware/Auth.js"
const router=express.Router()
router.post('/signup',signup)
router.post('/login',login)
router.post('/logout',logout)

router.put('/upload',middleware,upload)

export default router