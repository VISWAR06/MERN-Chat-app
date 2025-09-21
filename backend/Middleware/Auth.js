import usermodel from '../Models/Usermode.js'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

const middleware = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) return res.status(400).json({ message: "no token" });

        const decode = jwt.verify(token, process.env.SECRET);
        if (!decode) return res.status(400).json({ message: "not authorized" });

        const user = await usermodel.findById(decode.userid).select('-password');
        if (!user) return res.status(400).json("not authorized");

        req.user = user;  // <-- Fix is here
        next();
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export default middleware;
