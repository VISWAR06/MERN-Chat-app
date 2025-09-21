import express from 'express';
import ajprotect from '../Middleware/Arcjet.js';
import { signup, login, logout, upload } from '../Controllers/User.js';
import { middleware } from "../Middleware/Auth.js";

const router = express.Router();
router.use(ajprotect);
router.post('/signup', signup);
router.post('/login', ajprotect, login);
router.post('/logout', logout);

router.put('/upload', middleware, upload);
router.get('/check', middleware, (req, res) => res.status(200).json(req.user));

export default router;
