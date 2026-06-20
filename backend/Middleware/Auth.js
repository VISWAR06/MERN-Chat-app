import usermodel from "../Models/Usermode.js";
import jwt from "jsonwebtoken";
import "dotenv/config";

const middleware = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) return res.status(401).json({ message: "No token" });

    const decode = jwt.verify(token, process.env.SECRET);
    if (!decode) return res.status(401).json({ message: "Not authorized" });

    const user = await usermodel.findById(decode.userid).select("-password");
    if (!user) return res.status(401).json({ message: "User not found" });

    req.user = user;
    next();
  } catch (err) {
    console.error("Auth middleware error:", err.message);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export default middleware;
