import usermodel from "../Models/usermodel.js";
import bcrypt from 'bcryptjs';
import generatetoken from "../lib/jwt.js";
import cloudinary from "../lib/cloud.js";

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

    const token = generatetoken(newuser._id); // no need to await, it's not async

    res.status(200).json({
      message: "User created successfully",
      token,
    });

  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
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
    });

  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: e.message });
  }
};

const logout = async (req, res) => {
  try {
    // Optional: Handle token invalidation on frontend
    res.status(200).json({ message: "Logged out successfully" });
  } catch (e) {
    res.status(500).json({ message: e.message });
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
    console.log(e.message);
    res.status(500).json({ message: e.message });
  }
};

const check = (req, res) => {
  try {
    res.status(200).json({
      message: "Secured user",
      user: req.user,
    });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export { login, logout, signup, upload, check };
