import express from "express"
import { login, logout, signup ,upload} from '../Controllers/authcr.js'
import middle from '../Middlewares/middleware.js'
const route = express.Router()

route.post('/login', login)
route.post('/signup', signup)
route.post('/logout', logout)
route.put('/upload',middle,upload)

export default route
