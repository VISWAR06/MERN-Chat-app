import express from "express"
import { login, logout, signup } from '../Controllers/authcr.js'
const route = express.Router()

route.post('/login', login)
route.post('/signup', signup)
route.post('/logout', logout)

export default route