const User = require("../models/user.model");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const duplicateUser = await User.findOne({ email });
    if (duplicateUser) {
      return res.status(409).json({
        message: "User with this email already exists. Please login.",
        statusCode: 409,
        success: false,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      email,
      password: hashedPassword,
    });

    console.log("User created successfully:", newUser);
    res.status(201).json({
      message: "User registered successfully",
      user: {
        email: newUser.email,
        id: newUser._id,
      },
      statusCode: 201,
      success: true,
    });
  } catch (error) {
    console.error("Error during registration:", error);
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: "User not found. Please register.",
        statusCode: 404,
        success: false,
      });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Invalid password",
        statusCode: 401,
        success: false,
      });
    }
    console.log("User logged in successfully:", user);
    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      statusCode: 200,
      user: {
        email: user.email,
        id: user._id,
      },
    });
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};
