import usermodel from "../Models/usermodel.js";
import bcrypt from 'bcryptjs';
import generatetoken from "../lib/jwt.js";
import cloudinary from "../lib/cloud.js";
import jwt from 'jsonwebtoken';

// In-memory token blacklist (use Redis in production)
const tokenBlacklist = new Set();

const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Fill all the fields" });
    }

    if (password.length < 8) {
      return res.status(400).json({ message: "Minimum password length is 8" });
    }

    const user = await usermodel.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newuser = new usermodel({
      name,
      email,
      password: hashedPassword
    });

    await newuser.save();

    const token = generatetoken(newuser._id);

    res.status(201).json({
      message: "User created successfully",
      token,
      user: {
        id: newuser._id,
        name: newuser.name,
        email: newuser.email,
        profile: newuser.profile
      }
    });

  } catch (e) {
    console.error("Signup error:", e.message);
    res.status(500).json({ message: "Server error during signup" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await usermodel.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = generatetoken(user._id);

    res.status(200).json({
      message: "Logged in successfully",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        profile: user.profile
      }
    });

  } catch (e) {
    console.error("Login error:", e.message);
    res.status(500).json({ message: "Server error during login" });
  }
};

const logout = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    
    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.split(' ')[1];
      
      // Verify token before adding to blacklist
      try {
        const decoded = jwt.verify(token, process.env.SEC);
        
        // Add token to blacklist
        tokenBlacklist.add(token);
        
        // Optional: Set token expiration in blacklist (for automatic cleanup)
        setTimeout(() => {
          tokenBlacklist.delete(token);
        }, 30 * 24 * 60 * 60 * 1000); // Remove after 30 days (token expiry)
        
        res.status(200).json({ message: "Logged out successfully" });
      } catch (tokenError) {
        // Token is invalid or expired, but we can still consider it "logged out"
        res.status(200).json({ message: "Logged out successfully" });
      }
    } else {
      res.status(400).json({ message: "No valid token provided" });
    }
  } catch (e) {
    console.error("Logout error:", e.message);
    res.status(500).json({ message: "Server error during logout" });
  }
};

const upload = async (req, res) => {
  try {
    const { profile } = req.body;
    const userid = req.user._id;

    if (!profile) {
      return res.status(400).json({ message: "Image not uploaded" });
    }

    const uploadResponse = await cloudinary.uploader.upload(profile);

    const updatedUser = await usermodel.findByIdAndUpdate(
      userid,
      { profile: uploadResponse.secure_url },
      { new: true }
    );

    res.status(200).json({
      message: "Profile image updated",
      profile: updatedUser.profile,
    });

  } catch (e) {
    console.error("Upload error:", e.message);
    res.status(500).json({ message: "Server error during upload" });
  }
};

const check = (req, res) => {
  try {
    res.status(200).json({
      message: "User authenticated successfully",
      user: {
        id: req.user._id,
        name: req.user.name,
        email: req.user.email,
        profile: req.user.profile
      }
    });
  } catch (e) {
    console.error("Check error:", e.message);
    res.status(500).json({ message: "Server error during authentication check" });
  }
};

export { login, logout, signup, upload, check, tokenBlacklist };