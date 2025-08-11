import express from "express"
import { login, logout, signup ,upload} from '../Controllers/authcr.js'
import protected from '../Middlewares/prtotectmiddle.js'
const route = express.Router()

route.post('/login', login)
route.post('/signup', signup)
route.post('/logout', logout)
route.put('/upload',protected,upload)

export default route
