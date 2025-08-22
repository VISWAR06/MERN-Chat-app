import jwt from 'jsonwebtoken';
import usermodel from '../Models/usermodel.js';
import { tokenBlacklist } from '../Controllers/authcr.js';

const middle = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1];
    
    // Check if token is blacklisted
    if (tokenBlacklist.has(token)) {
      return res.status(401).json({ message: 'Token has been invalidated' });
    }
    
    try {
      const decoded = jwt.verify(token, process.env.SECRET);
      req.user = await usermodel.findById(decoded.id).select('-password');

      if (!req.user) {
        return res.status(404).json({ message: 'User not found' });
      }

      next();
    } catch (e) {
      return res.status(401).json({ message: 'Invalid or expired token' });
    }
  } else {
    return res.status(401).json({ message: 'No token provided' });
  }
};

export default middle;