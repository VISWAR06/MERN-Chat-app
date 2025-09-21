import express from 'express'
const route=express.Router()
import {getchat,getcontact,getmessage,sendmessage} from '../Controllers/Message.js'

route.get("/contact",getcontact);
route.get("/chat",getchat);
route.get("/:id",getmessage);
route.post("/message/:id",sendmessage);
export default route