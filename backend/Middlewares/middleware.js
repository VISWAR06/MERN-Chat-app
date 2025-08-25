import jwt from 'jsonwebtoken';
import usermodel from '../Models/usermodel.js';
import { tokenBlacklist } from '../Controllers/authcr.js';

const middle = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1];
    
    // Check if token is blacklisted
    if (tokenBlacklist.has(token)) {
      return res.status(401).json({ message: 'Token has been invalidated. Please login again.' });
    }
    
    try {
      const decoded = jwt.verify(token, process.env.SEC);
      
      // Check if user exists in database
      const user = await usermodel.findById(decoded.id).select('-password');
      
      if (!user) {
        // User doesn't exist but token is valid - clear the token from client side
        return res.status(401).json({ 
          message: 'User account not found. Please sign up again.',
          action: 'clearToken' // Frontend can use this to clear stored token
        });
      }

      req.user = user;
      next();
    } catch (e) {
      // Handle different types of JWT errors
      if (e.name === 'TokenExpiredError') {
        return res.status(401).json({ message: 'Token expired. Please login again.' });
      } else if (e.name === 'JsonWebTokenError') {
        return res.status(401).json({ message: 'Invalid token. Please login again.' });
      } else {
        return res.status(401).json({ message: 'Authentication failed. Please login again.' });
      }
    }
  } else {
    return res.status(401).json({ message: 'No token provided. Please login.' });
  }
};

export default middle;