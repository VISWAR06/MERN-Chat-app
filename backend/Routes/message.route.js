import express from 'express'
const route=express.Router()
import {getchat,getcontact,getmessage,sendmessage} from '../Controllers/Message.js'
import middleware from '../Middleware/Auth.js';

route.get("/contact",middleware,getcontact);
route.get("/chat",middleware,getchat);
route.get("/:id",middleware,getmessage);
route.post("/send/:id",middleware,sendmessage);
export default route