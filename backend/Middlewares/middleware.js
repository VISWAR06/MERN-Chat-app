import jwt from 'jsonwebtoken';
import usermodel from '../Models/usermodel.js';

const middle = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer ')
  ) {
    try {
      // ✅ Extract token
      token = req.headers.authorization.split(' ')[1];

      // ✅ Verify and decode token
      const decoded = jwt.verify(token, process.env.SECRET);

      // ✅ Find user by ID in token payload
      req.user = await usermodel.findById(decoded.id).select('-password');

      if (!req.user) {
        return res.status(404).json({ message: 'User not found' });
      }

      return next();

    } catch (e) {
      return res.status(401).json({ message: 'Invalid or expired token' });
    }
  } else {
    return res.status(401).json({ message: 'No token provided' });
  }
};

export default middle;
