import jwt from 'jsonwebtoken';
import usermode from '../Models/usermodel.js';

const middle = async (req, res, next) => {
  try {
    const token = req.cookies?.jwt;
    if (!token) return res.status(401).json({ message: "No token found" });

    const decoded = jwt.verify(token, process.env.SECRET);
    if (!decoded) return res.status(401).json({ message: "Not authorized" });

    const user = await usermode.findById(decoded.userid).select("-password");
    if (!user) return res.status(401).json({ message: "User not authorized" });

    req.user = user;
    next();
  } catch (e) {
    return res.status(401).json({ message: e.message });
  }
};

export default middle;
