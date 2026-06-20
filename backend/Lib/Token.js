import jwt from "jsonwebtoken";

const generateToken = (userid, res) => {
  const token = jwt.sign({ userid }, process.env.SECRET, { expiresIn: "7d" });

  // ✅ Correct method is res.cookie
  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE === "development" ? false : true,
  });

  return token;
};

export default generateToken;
