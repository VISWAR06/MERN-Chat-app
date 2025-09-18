import usermodel from '../DB/db.js'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

export const middleware = async (req, res, next) => {
  try {
    const token = req.cookies.jwt
    if (!token) return res.status(400).json({ message: "no token" })

    const decode = jwt.verify(token, process.env.SECRET)  // no need `await`, it's sync unless you use `promisify`

    if (!decode) return res.status(400).json({ message: "not authorized" })

    const user = await usermodel.findById(decode.userid).select('-password')
    if (!user) return res.status(400).json({ message: "not authorized" })

    req.user = user  // ✅ attach user to `req`, not `res`
    next()
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}
