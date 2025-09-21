import express from 'express'
const route=express.Router()
import {getchat,getcontact,getmessage,sendmessage} from '../Controllers/Message.js'
import middleware from '../Middleware/Auth.js';

route.get("/contact",middleware,getcontact);
route.get("/chat",getchat);
route.get("/:id",getmessage);
route.post("/messages/:id",sendmessage);
export default route